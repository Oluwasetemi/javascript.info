import { defineConfig } from "vite";
import { directoryPlugin } from "vite-plugin-list-directory-contents";
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname2 = path.dirname(fileURLToPath(import.meta.url))
console.log(__dirname2)
console.log(__dirname)

export default defineConfig({
  plugins: [directoryPlugin({ baseDir: __dirname })],
});
