module.exports = {
  verbose: true,
  roots: ['<rootDir>/components'],
  setupFiles: ['./tests/setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testURL: 'http://localhost',
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(lodash-es|remax/one))'],
};
