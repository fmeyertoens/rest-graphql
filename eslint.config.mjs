import js from "@eslint/js";
import globals from "globals";
import vue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import vueParser from "vue-eslint-parser";

export default [
    {
        ignores: ["dist/**", "node_modules/**"],
    },
    js.configs.recommended,
    ...vue.configs["flat/recommended"],
    {
        files: ["**/*.{ts,vue}"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: [".vue"],
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: globals.browser,
        },
        rules: {
            "no-undef": "off",
            "no-unused-vars": "off",
            "vue/multi-word-component-names": "off",
        },
    },
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: tseslint.parser,
            globals: globals.browser,
        },
        rules: {
            "no-undef": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
];
