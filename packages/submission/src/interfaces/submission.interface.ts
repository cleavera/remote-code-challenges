import { TestCaseInterface } from './test-case.interface';

export interface SubmissionInterface {
    submission: string;
    tests: Array<TestCaseInterface>,
    performance: TestCaseInterface,
    memory: TestCaseInterface
}
