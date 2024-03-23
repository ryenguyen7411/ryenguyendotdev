import fs from "fs";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import typescriptEslintParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginImport from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gitignorePattern = fs
  .readFileSync(path.join(__dirname, ".gitignore"), "utf8")
  .split("\n")
  .filter((line) => line && !line.startsWith("#"));

export default [
  {
    ignores: [...gitignorePattern],
  },
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
      "import/order": ["error", { alphabetize: { order: "asc" }, "newlines-between": "never" }],
    },
  },
  eslintConfigPrettier,
];
