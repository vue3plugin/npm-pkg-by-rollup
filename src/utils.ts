import { createRequire } from 'node:module';

export function require(path: string) {
    return createRequire(import.meta.url)(path);
}

export function add(a: number, b: number) {
    return a + b
}