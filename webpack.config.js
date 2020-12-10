
//webpackの設定ファイル
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {//出力先
    path: path.resolve(__dirname, './dist'),//path.resolveで絶対パスを取得（webpack絶対パスじゃないとエラー）引数1＝現在のフォルダのある階層。
    filename: 'main.js',//出力されるファイル名を変更
  },
  module: {
    rules: [//配列
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader',
          },//loaderは必ず "下から上に" 適用されていく。→　.cssあったら、まず、css-loader読み込まれ、次にstyle-loader
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
}
/*
rulesは張烈
中に、testとuse
\.cssは正規表現。スラッシュのなかで　.　を使うために、バックスラッシュを前に書く（.cssを検知できる）
つまり、.cssというファイルを見つけたら、use(ルール)を適用しろという意味。

*/
