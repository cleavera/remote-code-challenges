import { LeaderboardInterface } from '../interfaces/leaderboard.interface';
import { RecordInterface } from '../interfaces/record.interface';

export class Leaderboard implements LeaderboardInterface {
    public performance: Array<RecordInterface>;
    public characters: Array<RecordInterface>;
    public memory: Array<RecordInterface>;

    constructor(performance: Array<RecordInterface>, characters: Array<RecordInterface>, memory: Array<RecordInterface>) {
        this.performance = performance;
        this.characters = characters;
        this.memory = memory;
    }

    public static FromRecords(records: Array<RecordInterface>): Leaderboard {
        const performance: Array<RecordInterface> = records.slice().sort(this._leaderBoardSorter('performance'));
        const memory: Array<RecordInterface> = records.slice().sort(this._leaderBoardSorter('memory'));
        const characters: Array<RecordInterface> = records.slice().sort(this._leaderBoardSorter('characters'));

        return new Leaderboard(performance, characters, memory);
    }

    private static _leaderBoardSorter(key: 'performance' | 'characters' | 'memory') {
        return (a: RecordInterface, b: RecordInterface): number => {
            const compA: bigint = BigInt(a.result[key] ?? '0');
            const compB: bigint = BigInt(b.result[key] ?? '0');

            if (compA > compB) {
                return 1;
            }

            if (compA < compB) {
                return -1;
            }

            return 0;
        }
    }
}
