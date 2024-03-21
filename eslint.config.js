import eslintPluginAstro from "eslint-plugin-astro";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gitignorePattern = fs
  .readFileSync(path.join(__dirname, ".gitignore"), "utf8")
  .split("\n")
  .filter((line) => line && !line.startsWith("#"));

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    ignores: [...gitignorePattern],
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
