import{e as n}from"./app.23a69cc4.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},e=n('<h1 id="config-文件参考" tabindex="-1"><a class="header-anchor" href="#config-文件参考" aria-hidden="true">#</a> Config 文件参考</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>大文字小文字の違いを無視する:YES\n_Rename.csvを利用する:NO\n_Replace.csvを利用する:YES\nマウスを使用する:YES\nメニューを使用する:YES\nデバッグコマンドを使用する:NO\n多重起動を許可する:YES\nオートセーブを行なう:YES\nキーボードマクロを使用する:YES\nウィンドウの高さを可変にする:YES\n描画インターフェース:TEXTRENDERER\nウィンドウ幅:760\nウィンドウ高さ:480\nウィンドウ位置X:0\nウィンドウ位置Y:0\n起動時のウィンドウ位置を指定する:NO\n起動時にウィンドウを最大化する:NO\n履歴ログの行数:5000\nPRINTCを並べる数:3\nPRINTCの文字数:25\nフォント名:ＭＳ ゴシック\nフォントサイズ:18\n一行の高さ:19\n文字色:192,192,192\n背景色:0,0,0\n選択中文字色:255,255,0\n履歴文字色:192,192,192\nフレーム毎秒:5\n最大スキップフレーム数:3\nスクロール行数:1\n無限ループ警告までのミリ秒数:5000\n表示する最低警告レベル:1\nロード時にレポートを表示する:NO\nロード時に引数を解析する:NO\n呼び出されなかった関数を無視する:YES\n関数が見つからない警告の扱い:IGNORE\n関数が呼び出されなかった警告の扱い:IGNORE\nボタンの途中で行を折りかえさない:NO\nサブディレクトリを検索する:NO\n読み込み順をファイル名順にソートする:NO\n表示するセーブデータ数:20\neramaker互換性に関する警告を表示する:YES\nシステム関数の上書きを許可する:YES\nシステム関数が上書きされたとき警告を表示する:YES\n関連づけるテキストエディタ:notepad\nテキストエディタコマンドライン指定:USER_SETTING\nエディタに渡す行指定引数:\n同名の非イベント関数が複数定義されたとき警告する:NO\n解釈不可能な行があっても実行する:NO\nCALLNAMEが空文字列の時にNAMEを代入する:NO\nセーブデータをsavフォルダ内に作成する:NO\n擬似変数RANDの仕様をeramakerに合わせる:NO\n関数・属性については大文字小文字を無視しない:NO\n全角スペースをホワイトスペースに含める:YES\nセーブデータをUTF-8で保存する:NO\nver1739以前の非ボタン折り返しを再現する:NO\n内部で使用する東アジア言語:JAPANESE\nONEINPUT系命令でマウスによる2文字以上の入力を許可する:NO\nイベント関数のCALLを許可する:NO\nSPキャラを使用する:NO\nセーブデータをバイナリ形式で保存する:NO\nユーザー関数の全ての引数の省略を許可する:NO\nユーザー関数の引数に自動的にTOSTRを補完する:NO\nFORM中の三連記号を展開しない:NO\nTIMESの計算をeramakerにあわせる:NO\nキャラクタ変数の引数を補完しない:NO\n文字列変数の代入に文字列式を強制する:NO\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div>',2);var r=s(a,[["render",function(n,s){return e}]]);export{r as default};
