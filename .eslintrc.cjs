module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ["prettier"],
    overrides: [],
    parserOptions: {
        sourceType: "module",
    },
    rules: {
        "linebreak-style": ["error", "unix"],
        semi: ["error", "always"],
    },
};
