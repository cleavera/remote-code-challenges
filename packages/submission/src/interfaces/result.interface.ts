export interface ResultInterface {
    memory: number | null;
    performance: string | null;
    characters: number | null;
    messages: Array<string>;
    errors: Array<string>;
}
