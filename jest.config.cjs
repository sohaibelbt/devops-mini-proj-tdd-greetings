module.exports = {
    testMatch: ["**/__tests__/**/*.js"],
    testPathIgnorePatterns: ["/node_modules/"],
    testEnvironment: "node",
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
};
