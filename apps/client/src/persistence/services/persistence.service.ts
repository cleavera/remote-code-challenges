import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
    public get<T>(key: string): T | null {
        const value: string | null = localStorage.getItem(key) ?? null;

        if (value === null) {
            return null;
        }

        return JSON.parse(value);
    }

    public set(key: string, value: unknown): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
