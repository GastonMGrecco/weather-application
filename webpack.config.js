const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production';
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'build'),
      filename: isProduction
        ? '[name].[contenthash].js'
        : '[name].js'

    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      liveReload: true,
      open: true,
      hot: false,
      watchFiles: ['public/**/*']
    },
    devtool: 'source-map',
    resolve: {
      alias: {
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@screens': path.resolve(__dirname, 'src/screens'),
        '@slices': path.resolve(__dirname, 'src/redux/slices'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@assets': path.resolve(__dirname, 'src/assets')
      }
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-runtime'],
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ]
          }
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: true
              }
            },
            'sass-loader'
          ]
        }

      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './src/assets/weather.png'
      })
    ]
  };
};
