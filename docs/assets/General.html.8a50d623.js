import{e}from"./app.23a69cc4.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";const s={},a=e('<h1 id="常规" tabindex="-1"><a class="header-anchor" href="#常规" aria-hidden="true">#</a> 常规</h1><blockquote><p>翻译自原文档：https://osdn.net/projects/emuera/wiki/exetc</p></blockquote><h2 id="行末注释" tabindex="-1"><a class="header-anchor" href="#行末注释" aria-hidden="true">#</a> 行末注释</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>A = B ;将B赋值给A\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>你可以像这样在一行的末尾插入一个注释。</p><p>有一些例外情况，例如<code>PRINT</code>指令，参数是一个简单的字符串，它被作为字符串的一部分进行评估，而不是被注释。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PRINT foobar;嘿嘿\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这种情况下，会输出：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>foobar;嘿嘿\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="行的连续" tabindex="-1"><a class="header-anchor" href="#行的连续" aria-hidden="true">#</a> 行的连续</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n  DIM CONST HOGE =\n    1,2,3,4\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>将被解释为&#39;#DIM CONST HOGE = 1,2,3,4</p><p>&#39;{&#39;和&#39;}&#39;行不得包含任何其他字符，除了空白。</p><p>在有换行符的地方加一个空格。</p><p>这意味着你不能在一个函数或变量名称的中间分出一行，并且如果你分割行，如PRINT，空格将包括在显示的字符串中。</p><p>在Emuera的语法中，行连接是在注释解释之前完成的。</p><p>这意味着：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n  #DIM CONST HOGE =\n    1,2,3,4 ;コメント\n    ,5,6,7,8\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>变成<code>#DIM CONST HOGE = 1,2,3,4 ;注释 ,5,6,7,8 </code>和&quot;,5,6,7,8 &quot;被认为是行末注释的一部分而被忽略。</p><h2 id="特殊注释" tabindex="-1"><a class="header-anchor" href="#特殊注释" aria-hidden="true">#</a> 特殊注释</h2><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> ;!;</h3><p>在 Emuera 和 Eramaker 中，以<code>;</code>开头的行被认为是注释行，而 Emuera 认为以<code>;! </code>但Emuera认为以<code>;</code>开头的行是有效的行，而不是注释。</p><p>用它来描述你不希望在 Eramaker 中执行的语句。</p><p>例如，可以在<code>@SHOWSHOP</code>中加入以下脚本，以便在 Emuera 中禁用它。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;!;PRINTW 这个脚本不能在Emuera上运行\n;!;QUIT\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>另外，当与<code>[SKIPSTART]</code>和<code>[SKIPEND]</code>一起使用时，你可以禁止在 Emuera 之外执行，如以下脚本。</p><p>当你写一个你不希望被 Emuera 以外的人执行的语句时，请使用它。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;!;[SKIPSTART]\nPRINTW 这个脚本只能在Emuera上运行\nQUIT\n;!;[SKIPEND]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> ;#;</h3><p>以<code>;#;</code>开头的行只在调试模式下执行。</p><p>在非调试模式下，它被认为是一个注释行，不会被执行。</p><p>然而，<code>DEBUG</code>类型的指令在非调试模式下原本是被忽略的，所以没有必要在行前加上<code>;#;</code>。</p><p>同样地，调试变量在非调试模式下是空字符串或零，所以不需要担心错误。</p><p>关于调试模式的更多信息，请看这里。</p><h2 id="角色阵列" tabindex="-1"><a class="header-anchor" href="#角色阵列" aria-hidden="true">#</a> 角色阵列</h2><p>Eramaker 可能只提供100个数组用于创建角色。</p><p>因此，如果你在<code>chara3.csv</code>、<code>chara03.csv</code>和<code>chara3B.csv</code>中定义不同的角色，只有一个角色有效。</p><p>在 Emuera 中，你可以在内存允许的范围内定义尽可能多的角色。</p><p>另外，Emuera 将读取任何与<code>CharaXX.csv</code>对应的文件，如<code>Chara101.csv</code>、<code>CharaABC.csv</code>等。</p><p>如果角色号重叠，并且有多个候选的<code>ADDCHARA</code>或<code>ADDSPCHARA</code>，那么只有先读到的那个角色才是有效的。</p><h2 id="整数类型的数值范围" tabindex="-1"><a class="header-anchor" href="#整数类型的数值范围" aria-hidden="true">#</a> 整数类型的数值范围</h2><p>Eramaker 可以处理32位有符号的整数，即范围在-2147483648到2147483647的值。</p><p>Emuera 和 Kirikiri 一样，可以处理范围在-9223372036854775808到9223372036854775807的64位有符号整数。</p><h2 id="对数组变量的批量赋值" tabindex="-1"><a class="header-anchor" href="#对数组变量的批量赋值" aria-hidden="true">#</a> 对数组变量的批量赋值</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>A:10 = 1,2,3\nDA:0:0 = 1,2,3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在像上面这样的多维数组中，<code>A:10</code>到<code>A:12</code>的值将分别被赋予1、2和3的值</p><p>在一个像下面这样的多维数组中，<code>DA:0:0</code>到<code>DA:0:2</code>的值将分别被赋予1、2和3的值</p><p>在<code>DA:0:0</code>到<code>DA:0:99</code>之后，没有对<code>DA:1:0</code>的赋值，导致了数组外引用错误。</p><p>然而，它不能用于复合赋值操作（<code>A += 1,2,3</code>等是不允许的）。</p><p>另外，当使用批量赋值向字符串数组变量赋值时，必须使用字符串表达式进行赋值：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;STR:20被分配为“草莓、甜瓜、蓝色夏威夷”字符串。\nSTR:20 = 草莓, 甜瓜, 蓝色夏威夷\n;STR:20至STR:22将分别被分配到“草莓”、“甜瓜”和“蓝色夏威夷”等词。\nSTR:20 &#39;= &quot;草莓&quot;, &quot;甜瓜&quot;, &quot;蓝色夏威夷&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="使用form语法向一个字符串变量赋值" tabindex="-1"><a class="header-anchor" href="#使用form语法向一个字符串变量赋值" aria-hidden="true">#</a> 使用FORM语法向一个字符串变量赋值</h2><p>当赋值给一个字符串变量时，可以用与<code>PRINTFORM</code>相同的方式指定要赋值的字符串。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SAVESTR:0 = %RESULTS%\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>该语句允许你将<code>RESULTS</code>的内容分配给<code>SAVESTR:0</code>。</p><p>同样的语句将把字符串<code>%RESULTS%</code>本身分配给 Eramaker 的<code>SAVESTR:0</code>。</p><p>如果你想在 Emuera 中赋值字符串<code>%RESULTS%</code>本身，请写如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SAVESTR:0 = \\%RESULT\\%\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>紧随<code>\\</code>其后的字符不作为系统符号处理。 如果你想让<code>\\</code>符号本身包含在字符串中，你应该使用 <code>\\\\</code>。 如果你想在 Eramaker 和 Emuera 中有同样的行为，你需要这样写：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;!;SAVESTR:0 = \\%RESULT\\%\n;!;[SKIPSTART]\nSAVESTR:0 = %RESULTS%\n;!;[SKIPEND]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="使用字符串表达式赋值给一个字符串变量" tabindex="-1"><a class="header-anchor" href="#使用字符串表达式赋值给一个字符串变量" aria-hidden="true">#</a> 使用字符串表达式赋值给一个字符串变量</h2><p>从ver1813开始，Emuera 现在允许你使用赋值运算符<code>=</code>和字符串表达式对字符串变量进行赋值。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;与“STR = 哈哈”相同\nSTR &#39;= &quot;哈哈&quot;\n;与“STR = %TSTR:0%嘿嘿”相同\nSTR &#39;= TSTR:0 + &quot;嘿嘿&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="用字符串指定一个数组变量的元素" tabindex="-1"><a class="header-anchor" href="#用字符串指定一个数组变量的元素" aria-hidden="true">#</a> 用字符串指定一个数组变量的元素</h2><p>对于以下变量，你可以用<code>*.csv</code>中定义的字符串作为参数来调用它们。</p><p>关于 Emuera 中的新变量的更多信息，请参见<a href="">Emuera 中增加的扩展语法--常量和变量</a>。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ITEM (item.csv)\nITEMSALES (item.csv)\nLOSEBASE (base.csv)\nBASE (base.csv)\nMAXBASE (base.csv)\nABL (abl.csv)\nTALENT (talent.csv)\nEXP (exp.csv)\nMARK (mark.csv)\nRELATION (chara*.csv)\nUP (palam.csv)\nDOWN (palam.csv)\nPALAM (palam.csv)\nJUEL (palam.csv)\nGOTJUEL (palam.csv)\nSTAIN (stain.csv)\nSOURCE (source.csv)\nEX (ex.csv)\nNOWEX (ex.csv)\nTEQUIP (tequip.csv)\nEQUIP (equip.csv)\nFLAG (flag.csv)\nTFLAG (tflag.csv)\nCFLAG (cflag.csv)\nSTR (strname.csv)\nSAVESTR (savestr.csv)\nEmuera添加了以下变量\nITEMPRICE (item.csv)\nDOWNBASE (base.csv)\nCUP (palam.csv)\nCDOWN (palam.csv)\nTCVAR (tcvar.csv)\nTSTR (tstr.csv)\nCSTR (cstr.csv)\nCDFLAG (cdflag1.csv, cdflag2.csv)\nGLOBAL (global.csv)\nGLOBALS (globals.csv)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>例如，如果<code>Abl.csv</code>包含定义<code>2,技巧</code>，以下四行将具有相同的含义：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ABL:技巧 += 1\nABL:2 += 1\nABL:&quot;技巧&quot; += 1\nABL:(ABLNAME:2) += 1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>对于<code>RELATION</code>，可以指定<code>NAME</code>或<code>CALLNAME</code>。</p><p>如果有多个同名的定义，首先定义的那个将被调用。</p><p>例如，如果<code>Abl.csv</code>包含<code>2,技巧</code>和<code>4,技巧</code>，并且<code>2,技巧</code>在前一行被定义，那么<code>ABL:技巧</code>变成<code>ABL:2</code>。</p><p>字符串也可以是表达式或变量。 在这种情况下，添加<code>()</code>，如下所示：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ABL:(RESULTS:0) = ABL:(RESULTS:0) + 1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果省略<code>()</code>，项目名称和变量名称可能是相同的。 在这种情况下，变量占优先地位。</p><p>例如，如果<code>Abl.csv</code>有一个<code>0,转子</code>的定义，那么：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@HOGE\n#DIM Rotor, 0\nRotor = 1\nPRINTFORML {ABL:rotor}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在这种情况下，它将被解释为第1个ABL，而不是第0个ABL。</p><p>同样地，如果项目名称是一个数字，它将被解释为一个数字。</p><p>例如，如果一个项目在<code>Abl.csv</code>中被定义为<code>0,10</code>，并且<code>ABL:10</code>被引用，它将不会被解释为第0个ABL，而是第10个ABL。</p><p>这也可以用于<code>CharaXX.csv</code>中的定义。</p><p>例如，如果你在<code>Abl.csv</code>中有<code>2,技巧</code>的定义，下面两行将有相同的含义：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>能力,2,2\n能力,技巧,2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然而，它不能用于相性<code>RELATION</code>。</p><p>这是因为在读取<code>CharaXX.csv</code>时，系统不知道chara的名字和NO之间的对应关系。</p><h2 id="格式化字符串-form语法-扩展" tabindex="-1"><a class="header-anchor" href="#格式化字符串-form语法-扩展" aria-hidden="true">#</a> 格式化字符串（FORM语法）扩展</h2><p>你可以指定在<code>PRINTFORM</code>中使用的格式化字符串的<code>{}</code>和<code>%%</code>显示的字符数。格式为{变量、公式等，显示数字，对齐（LEFT或RIGHT）}，%变量、字符串表达式，显示数字，对齐（LEFT或RIGHT）%。</p><p>字符数将两个双字节字符算作两个字符。</p><p>如果字符数不够，就会增加一个半宽的空格。</p><p>通常是右对齐，但如果指定关键字LEFT，则是左对齐。</p><p>如果原来的数字大于指定的数字，将按原样显示。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>A = 123456\nSTR:0 = 嘿嘿嘿\nPRINTFORML [{A}]\nPRINTFORML [{A,10}]\nPRINTFORML [{A,10,LEFT}]\nPRINTFORML [%STR:0%]\nPRINTFORML [%STR:0,10%]\nPRINTFORML [%STR:0,10,LEFT%]\nPRINTFORML [{A,2}]\nPRINTFORML [%STR:0,2%]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>输出：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[123456]\n[    123456]\n[123456    ]\n[嘿嘿嘿]\n[    嘿嘿嘿]\n[嘿嘿嘿    ]\n[123456]\n[嘿嘿嘿]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="在字符串表达式中使用格式化的字符串-form语法" tabindex="-1"><a class="header-anchor" href="#在字符串表达式中使用格式化的字符串-form语法" aria-hidden="true">#</a> 在字符串表达式中使用格式化的字符串（FORM语法）</h2><p>在字符串表达式中使用<code>FORM</code>语法，如<code>PRINTS</code>或表达式中用户定义的函数的参数，将导致错误。</p><p>因此，如果你想在一个字符串表达式中使用一个格式化的字符串，你应该使用<code>@&quot;~&quot;</code>，就像你使用<code>&quot;~&quot;</code>在一个字符串表达式中使用一个确定的字符串一样。</p><p><code>@&quot;~&quot;</code>另外，如果<code>@&quot;~&quot;</code>中的字符串只用三元运算符描述，使用<code>\\@~\\@</code>，你可以省略<code>@&quot;~&quot;</code>，直接写<code>\\@~\\@</code></p><div class="custom-container tip"><p class="custom-container-title">正确</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;使用FORM语法赋值\nSTR:0 = 嘿嘿嘿\n;加法是一个字符串表达式\nRESULTS += STR:0\n;在字符串表达式中使用常量字符串的例子\nRESULTS += &quot;哈哈&quot;\n;对字符串表达式使用FORM语法的例子\nPRINTS @&quot;%RESULTS%甲乙丙丁戊&quot;\n\n;以下四行都是一样的\nPRINTS STR:0 + &quot;！&quot;\nPRINTFORM %STR:0%！\nPRINTS @&quot;%STR:0%！&quot;\nPRINTFORM %STR:0 + &quot;！&quot;%\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></div><div class="custom-container danger"><p class="custom-container-title">错误</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;内容将是RESULTS\nSTR:0 = RESULTS\n;发生了一个错误\nRESULTS += 哈哈\n;发生了一个错误\nRESULTS += %STR:0%\n;“@&quot;”和“&quot;”也被显示出来\nPRINTFORM @&quot;%RESULTS%甲乙丙丁戊&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div><h2 id="在inputs系统中使用宏语法" tabindex="-1"><a class="header-anchor" href="#在inputs系统中使用宏语法" aria-hidden="true">#</a> 在INPUTS系统中使用宏语法</h2><p>你可以在<code>INPUTS</code>和类似的输入接受指令中使用宏表达式。</p><p>关于宏格式的更多信息，请参见使用指南中的宏部分。</p><p>如果你想把<code>()</code>作为一个没有宏语法的简单字符串使用，你必须用<code>\\</code>转义。</p>',104);var c=n(s,[["render",function(e,n){return a}]]);export{c as default};
