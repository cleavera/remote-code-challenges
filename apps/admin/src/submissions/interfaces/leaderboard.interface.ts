import { RecordInterface } from './record.interface';

export interface LeaderboardInterface {
    performance: Array<RecordInterface>;
    memory: Array<RecordInterface>;
    characters: Array<RecordInterface>;
}
