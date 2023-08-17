import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { defineConfig } from 'vitepress'
import { name as pkgName } from "../../package.json"
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

export default defineConfig({
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  },
  vue: {
    script: {
      defineModel: true
    }
  },
  vite: {
    resolve: {
      alias: {
        [pkgName]: pathResolve(".."),
      }
    }
  }
})
