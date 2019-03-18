const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue$/]
        },
      }
    ]
  });

  config.resolve.extensions.push('.ts');
  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  return config;
};
