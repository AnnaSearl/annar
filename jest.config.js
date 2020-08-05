module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testURL: 'http://localhost',
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    '\\.js$': 'babel-jest',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(lodash-es|react))'],
};
