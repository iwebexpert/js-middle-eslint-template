const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isProduction = process.env.NODE_ENV === 'production'
const styleLoaderHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader'

module.exports = {
  // mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: 'assets/[name][hash][ext]',
  },
  devtool: (isProduction) ? 'source-map' : 'eval-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true, 
    compress: true,
    historyApiFallback: true,
    onListening: function(devServer){
      if(isProduction){
        throw new Error('webpack-dev-server is not allowed')
      }

      const port = devServer.server.address().port
      console.log(`Port: ${port}`)
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [styleLoaderHandler, "css-loader", 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
          }
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template.html'),
      favicon: path.resolve(__dirname, 'src', 'img', 'note.svg'),
      filename: 'index.html',
      title: 'Приложение для электронных чеков v1.0.0',
    }),
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name][contenthash].css',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
      analyzerPort: 3001,
      reportTitle: 'Основной отчет',
      reportFilename: 'stats.html',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: 'stats.json',
    }),
  ],
}