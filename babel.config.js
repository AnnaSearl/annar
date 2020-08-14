const presets = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'];
const plugins = [
  '@babel/plugin-transform-modules-commonjs',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-transform-runtime',
];

module.exports = api => {
  if (api.env('dumi')) {
    return {
      presets: ['@babel/preset-env'],
    };
  }

  if (api.env('esm')) {
    return {
      presets: [
        '@babel/preset-react',
        '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    };
  }

  if (api.env('web')) {
    return {
      presets,
      plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'],
    };
  }

  if (api.env('test')) {
    return {
      presets: [
        '@babel/preset-react',
        '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
      plugins,
    };
  }

  // default
  return {
    presets: ['@babel/preset-env'],
  };
};
