import { createRequire } from 'node:module';

export function require(path: string) {
    return createRequire(import.meta.url)(path);
}