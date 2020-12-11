
//webpackの設定ファイル
const path = require('path');
// less32
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// less33
const HtmlWebpackPlugin = require('html-webpack-plugin');
// less35
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// {}で複数あるclean...plugin機能の特定のやつだけ使う

module.exports = {
  entry: './src/javascripts/main.js',
  output: {//出力先
    path: path.resolve(__dirname, './dist'),//path.resolveで絶対パスを取得（webpack絶対パスじゃないとエラー）引数1＝現在のフォルダのある階層。
    filename: 'javascripts/main.js',//出力されるファイル名を変更
  },
  module: {
    rules: [//配列
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,//読みこんだcssを処理
          },//loaderは必ず "下から上に" 適用されていく。→　.cssあったら、まず、css-loader読み込まれ、次にstyle-loader
          {
            loader: 'css-loader',//.cssのファイルを読み込み
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {//less40
        test: /\.(png|jpg)/,//.png, .jpgのファイル読み込み
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'images/[name].[ext]',//extは拡張子
            },
          },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,//出力されるhtmlコードを1行にまとめない
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylesheets/main.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/access.pug',
      filename: 'access.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/members/taro.pug',
      filename: 'members/taro.html'
    }),
    new CleanWebpackPlugin(),
  ]
}
/*
rulesは張烈
中に、testとuse
\.cssは正規表現。スラッシュのなかで　.　を使うために、バックスラッシュを前に書く（.cssを検知できる）
つまり、.cssというファイルを見つけたら、use(ルール)を適用しろという意味。

*/
