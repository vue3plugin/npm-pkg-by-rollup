import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import { name as pkgName } from "./package.json"
import { resolve } from "path";

function pathResolve(dir: string) {
    return resolve(__dirname, ".", dir);
}

export default defineConfig({
    build: {
        lib: {
            entry: "./src/index.ts",
            fileName: (format) => `index.${format}.js`,
            formats: ['es', "cjs"],
        },
        rollupOptions: {
            external: ['vue'],
        },
        cssCodeSplit: false,
        outDir: "dist",
        minify: "esbuild",
    },
    resolve: {
        alias: {
            [pkgName]: pathResolve("src"),
        }
    },
    plugins: [
        vue({
            script: {
                defineModel: true
            }
        }),
    ]
})