import { TestCaseInterface } from '@hdc/submission';

export interface ChallengeInterface {
    title: string;
    description: string;
    validation: Array<TestCaseInterface>;
    memory: TestCaseInterface;
    performance: TestCaseInterface;
}
