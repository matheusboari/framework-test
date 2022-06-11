module.exports = {
  bail: 1,
  moduleFileExtensions: ['js', 'json', 'ts'],
  maxConcurrency: 1,
  testRegex: '.test.ts$',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  testPathIgnorePatterns: ['/node_modules/', '/bin', '/src'],
  coveragePathIgnorePatterns: ['/node_modules/', '/bin', '/src'],
  collectCoverageFrom: ['src/app/services/**/*.(t|j)s'],
  /* coverage goal: 70% at every aspect */
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1
    }
  },
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: './coverage-unit',
  testEnvironment: 'node',
  rootDir: '.'
};
