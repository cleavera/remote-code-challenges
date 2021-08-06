import { TestCaseInterface } from './test-case.interface';

export interface ChallengeInterface {
    title: string;
    description: string;
    validation: Array<TestCaseInterface>;
    memory: TestCaseInterface;
    performance: TestCaseInterface;
}
