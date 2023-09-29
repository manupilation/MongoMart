module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/__tests__/mocks/"
  ],
};