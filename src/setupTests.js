// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextEncoder } from 'text-encoding'; 

// Make TextEncoder available globally 
global.TextEncoder = TextEncoder; 
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      'react-router-dom': '<rootDir>/node_modules/react-router',
    },
    setupFiles: ['text-encoding'],
};
