// Sync object
const {defaults} = require('jest-config');
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
    testEnvironment: "jsdom",
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    transformIgnorePatterns: ['/node_modules/', '/src/?!(env)'],
    moduleNameMapper: {
        '^.+\\.(css|less|styl|scss|sass)$': '<rootDir>/jest/styleMock.js',
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/jest/fileMock.js',
        '~/(.*)': '<rootDir>/src/$1',
      },  
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
  };
  
  module.exports = config;