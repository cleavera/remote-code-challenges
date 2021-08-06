import { TestCaseInterface } from '../../challenge';

export interface SubmissionInterface {
    submission: string;
    tests: Array<TestCaseInterface>,
    performance: TestCaseInterface,
    memory: TestCaseInterface
}
