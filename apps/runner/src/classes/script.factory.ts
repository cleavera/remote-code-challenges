import { Script } from 'vm';

export class ScriptFactory {
    public static Create(source: string): Script {
        return new Script(`
            try {
                ${source}
            } catch (e) {
                error(e);
            }
        `);
    }
}
