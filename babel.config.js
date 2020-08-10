module.exports = api => {
  console.log(api.env('dumi'));
  if (api.env('dumi')) {
    return {
      presets: ['@babel/preset-env'],
    };
  }
  return {
    presets: ['@babel/preset-env'],
  };

  return {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime',
    ],
    env: {
      dumi: {
        presets: ['@babel/preset-env'],
      },
      esm: {
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
        ],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              useESModules: true,
            },
          ],
        ],
      },
      web: {},
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
        ],
        plugins: ['@babel/plugin-transform-runtime'],
      },
    },
  };
};
