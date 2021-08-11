import { TestCaseInterface } from '@hackdaychallenges/submission';

export interface ChallengeInterface {
    title: string;
    description: string;
    validation: Array<TestCaseInterface>;
    memory: TestCaseInterface | null;
    performance: TestCaseInterface | null;
}
