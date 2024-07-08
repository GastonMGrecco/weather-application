// jest.config.js
module.exports = {
  moduleNameMapper: {
    '^@slices/(.*)$': '<rootDir>/src/redux/slices/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@screens/(.*)$': '<rootDir>/src/screens/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.css$': 'jest-css-modules-transform'
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/react/dont-cleanup-after-each']
};
