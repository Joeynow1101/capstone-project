import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    settings: { react: { version: "detect" } },
    rules: {
      "prettier/prettier": "warn",
      "no-unused-vars": "warn",
      "react/prop-types": 0,
      "react/react-in-jsx-scope": 0,
    },
  },
  prettierConfig,
];
