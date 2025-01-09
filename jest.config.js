console.log('Jest configuration file (jest.config.js) is being used.');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      'react-router-dom': '<rootDir>/node_modules/react-router',
    },
    setupFiles: ['text-encoding']
};