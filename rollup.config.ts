import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs'; // 用于支持commonjs
import typescript from '@rollup/plugin-typescript'; // 支持typescript
import resolve from "@rollup/plugin-node-resolve"; // 查找node包路径

// rollup.config.js
const config = defineConfig({
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/cjs/index.cjs',
            format: 'cjs'
        },
        {
            file: 'dist/esm/index.mjs',
            format: 'es'
        },
    ],
    external: [], // 排除哪些不打包的依赖
    plugins: [
        resolve(),
        commonjs(),
        typescript()
    ],
});

export default config;