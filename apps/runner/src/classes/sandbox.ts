import { Profile } from '@cleavera/benchmark';
import { getHeapStatistics, HeapInfo } from 'v8';
import { Context, createContext, Script } from 'vm';
import { Execution } from './execution';

export class Sandbox {
    private _context: Record<string, unknown>;

    private constructor(context: Record<string, unknown>) {
        this._context = context;
    }

    private _generateContext(execution: Execution): Context {
        return createContext({
            console: execution,
            error(e: Error) {
                execution.error(e);
            },
            __profile: execution.performance,
            ...this._context
        });
    }

    private _snapshot(): Promise<number> {
        return new Promise<number>((resolve: (memory: number) => void) => {
            setTimeout(() => {
                const stats: HeapInfo = getHeapStatistics();

                resolve(stats.used_heap_size);
            });
        });
    }

    public async executeScript(script: Script, execution: Execution): Promise<Execution> {
        const context: Context = this._generateContext(execution);

        const snapshot: Promise<number> = this._snapshot();

        await script.runInContext(context, {
            timeout: 30000
        });

        execution.memory = await snapshot;

        return execution;
    }

    public static Node(): Sandbox {
        return new Sandbox({
            require(): never {
                throw new Error('Requiring is disallowed in this context');
            },
            process: {},
            queueMicrotask(): never {
                throw new Error('Why you try to break my sandbox?');
            },
            WebAssembly: {},
            global: {},
            __dirname: '',
            __filename: ''
        });
    }
}
