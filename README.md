##電卓作成
react 勉強のために簡易的な電卓を作成しました。

■TODO リスト
// TODO:冗長なのでリファクタリングしていく
// TODO:3 桁ごとにドットをつける
// TODO:履歴や 2 倍等の機能追加
// TODO:input 内の値がなくなった場合 0 にする

■ 備忘録
アロー関数で書かないと無限ループ
理由:handleNumberClick('')だと setInput されたタイミングでレンダリングするから
要約すると、()が実行の意味を表すので setInput が無限ループする
https://qiita.com/katsuomi/items/5a062dc1e4d0ab64ae21

・参考サイト
https://dev-k.hatenablog.com/entry/calculatorwithreact
