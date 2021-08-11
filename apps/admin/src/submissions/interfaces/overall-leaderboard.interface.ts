export interface OverallLeaderboardInterface {
    performance: Array<{ user: string, points: number }>;
    memory: Array<{ user: string, points: number }>;
    characters: Array<{ user: string, points: number }>;
}
