import { CaseInterface } from './case.interface';

export interface SubmissionInterface {
    submission: string;
    tests: Array<CaseInterface>,
    performance: CaseInterface,
    memory: CaseInterface
}
