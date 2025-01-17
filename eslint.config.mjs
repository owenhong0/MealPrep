import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import airbnbBase from "eslint-config-airbnb-base";
import airbnbHooks from "eslint-config-airbnb/hooks";
import airbnbTypeScript from "eslint-config-airbnb-typescript";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            parser: parser,
            globals: globals.browser,
        },
        rules: {
            // Add any additional custom rules here
        },
    },
    js.configs.recommended, // JavaScript rules
    typescriptEslint.configs.recommended, // TypeScript rules
    react.configs.recommended, // React rules
    airbnbBase, // Airbnb Base rules
    airbnbHooks, // Airbnb Hooks rules
    airbnbTypeScript, // Airbnb TypeScript rules
];
