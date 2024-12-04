module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],

  setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],

  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.css$": "identity-obj-proxy",
  },
};
