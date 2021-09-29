import{e as n}from"./app.23a69cc4.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";const a={},s=n('<h1 id="用户自定义变量" tabindex="-1"><a class="header-anchor" href="#用户自定义变量" aria-hidden="true">#</a> 用户自定义变量</h1><blockquote><p>翻译自原文档：https://osdn.net/projects/emuera/wiki/UserVars</p></blockquote><p><code>#DIM</code>和<code>#DIMS</code>可以用来定义任何你喜欢的变量。</p><p>在一个函数中定义的变量成为私有变量，只能在该函数中使用，而在<a href="">头文件（ERH）</a>中定义的变量成为广域变量，可以从ERB的所有部分引用。</p><h2 id="格式-用于私有变量" tabindex="-1"><a class="header-anchor" href="#格式-用于私有变量" aria-hidden="true">#</a> 格式（用于私有变量)</h2><p>在你想定义变量的函数声明下，写上<code>#DIM(S) &lt;变量名&gt;, &lt;元素数&gt;{, &lt;元素数&gt;{, &lt;元素数&gt;}}</code>。</p><p>&lt;变量名&gt;是一个任意的字符串，类似于函数名，不以数字开头，只由符号&quot;_&quot;组成。</p><p>所有的&lt;元素数&gt;都是任意的整数或1到1000000范围内的常数表达式。 如果省略，它被设置为1。</p><p>根据给定的&lt;元素数&gt;的多少，被定义的变量的尺寸会发生变化。 最大的维度是三个，你不能定义一个超过四个维度的变量。</p><p>在一个函数中可以定义多个<code>#DIM(S)</code>私有变量。</p><p>这允许在该函数中使用一个由&lt;变量名&gt;指定的变量。</p><p>变量可以分配给&lt;元素数&gt;指定的元素数，并且不保存。 初始值是0或一个空字符串。</p><p><code>#DIM</code>使该变量成为一个整数类型的变量，<code>#DIMS</code>使其成为一个字符串类型的变量。</p><p>用<code>#DIM(S)</code>定义的变量也可以作为函数的参数使用。 你也可以设置初始值。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@FIND_CSTR(KEY, VALUE)\n#FUNCTION\n#DIM LCOUNT\n#DIM KEY\n#DIMS VALUE\nSIF KEY &lt; 0 || KEY &gt;= VARSIZE(&quot;CSTR&quot;)\n  RETURNF -1\nFOR LCOUNT, 0, CHARANUM\n  SIF LCOUNT == MASTER\n    CONTINUE\n  SIF CSTR:LCOUNT:KEY == VALUE\n    RETURNF LCOUNT\nNEXT\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>通过根据变量的用途对其进行命名，并设置适当的元素数量，就像上面的分割一样，通过使用更多的非连续的LOCAL，也许可以提高可读性。</p><h2 id="设置默认值" tabindex="-1"><a class="header-anchor" href="#设置默认值" aria-hidden="true">#</a> 设置默认值</h2><p>当声明一个一维数组变量时，可以定义一个默认值。</p><p>可以省略初始值的数组中的元素数，在这种情况下，初始值将自动成为数组中的元素数。</p><p>如果你没有省略数组元素的数量，该数字将被用作数组中的元素数量。</p><p>如果元素的数量没有被省略，而初始值的数量大于元素的数量，就会出现错误。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;HOGE中的元素数是3，因为元素数被省略了。\n#DIM HOGE = 1,2,3\n\n;PUGE中的元素数是100，因为没有省略元素数\n#DIM PUGE,100 = 4,5,6\n\n;错误（初始值的数量大于指定的元素数量）。\n#DIM HIGE,1 = 7,8,9\n\n;也可以是一个字符串变量（由一个字符串表达式指定）。\n#DIMS SHOGE = &quot;A&quot;, &quot;B&quot;, &quot;C&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>注意，不能为多维数组定义默认值。</p><h2 id="动态变量" tabindex="-1"><a class="header-anchor" href="#动态变量" aria-hidden="true">#</a> 动态变量</h2><p>如果你在变量名前加上DYNAMIC，如<code>#DIM(S) DYNAMIC &lt;变量名&gt;, &lt;元素数&gt;</code>，定义的变量将被动态分配。</p><p>具体来说，当函数被调用时，该变量将被分配，当函数终止时，该变量及其值将消失。</p><p>(由于<code>RESTART</code>指令是 &quot;返回到函数的开始 &quot;指令，即使是动态分配的变量也不会被重置）。</p><p>如果你在一个函数中调用自己（递归），变量会被分配为你递归的次数，所以递归行为是稳定的。</p><p>然而，它比没有<code>DYNAMIC</code>（静态变量）的情况要慢。</p><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2><p>当定义一个一维数组变量时，在变量名称前插入<code>CONST</code>将定义一个一维数组常数。</p><p>与初始值一样，只有一维数组变量可以被定义。</p><p>常量在声明时必须有一个初始值，不能通过替换来改变。</p><p>由于其性质，<code>CONST</code>不能与<code>GLOBAL</code>、<code>SAVEDATA</code>、<code>REF</code>和<code>DYNAMIC</code>关键字一起使用。</p><p>数组中的元素数量可以不加说明，但如果元素数量与初始值的数量不一致，就会发生错误。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;定义一个一维常数组\n#DIM CONST HOGE = 1,2,3\n\n;错误（初始值的数量与元素的数量不匹配）。\n#DIM CONST PUGE,100 = 4,5,6\n\n;也可以是一个字符串变量（由一个字符串表达式指定）。\n#DIMS CONST SHOGE = &quot;A&quot;, &quot;B&quot;, &quot;C&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="参考类型变量" tabindex="-1"><a class="header-anchor" href="#参考类型变量" aria-hidden="true">#</a> 参考类型变量</h2><p>参考型变量可以通过在变量名称前使用REF关键字来定义。</p><p>整数型1至3维数组和字符串型1至3维数组分别声明如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#DIM REF HOGE1DIM,0\n#DIM REF HOGE2DIM,0,0\n#DIM REF HOGE3DIM,0,0,0\n#DIMS REF PUGE1DIM,0\n#DIMS REF PUGE2DIM,0,0\n#DIMS REF PUGE3DIM,0,0,0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果逗号的数量相同，可以省略逗号；如果是一维数组，也可以省略逗号。</p><p>引用变量没有实体，操作引用变量将导致该变量被<code>REF</code>指令（从ver1.815开始不可用）或通过引用传递的方式操作。</p><p>关于通过引用传递的更多信息，请参阅函数--通过引用传递参数。</p><h2 id="格式-用于广域变量" tabindex="-1"><a class="header-anchor" href="#格式-用于广域变量" aria-hidden="true">#</a> 格式(用于广域变量)</h2><p>当<code>#DIM(S)</code>写在<a href="">头文件(ERH)</a>中时，它不是在ERB中定义的一个私有变量，而是一个，与ERB中定义的私有变量不同，<code>#DIM(S)</code>是一个广域变量，可以从ERB的任何地方引用。</p><p>与私有变量不同，<code>DYNAMIC</code>和<code>STATIC</code>之间没有区别，也不可能用REF来定义引用类型的变量，但是用<code>CONST</code>的常量可以用同样的方式来定义。</p><p>在不属于<code>DIM</code>的函数中，可以将保存的变量、全局变量和字符变量定义为函数。</p><p>详情请见<a href="">头文件（ERH）</a>部分。</p><h2 id="限制条件" tabindex="-1"><a class="header-anchor" href="#限制条件" aria-hidden="true">#</a> 限制条件</h2><h3 id="不能使用与指令相同的名称" tabindex="-1"><a class="header-anchor" href="#不能使用与指令相同的名称" aria-hidden="true">#</a> 不能使用与指令相同的名称</h3><p>不可能定义一个与指令同名的变量，如下所示：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;报错\n#DIM PRINTFORM\n#DIM SELECTCASE\n#DIM CALL\n#DIM RETURN\n#DIM GOTO\n#DIM SQRT\n#DIM DATAFORM\n#DIM NOSKIP\n#DIM FUNC\n#DIM ENDFUNC\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>可以定义与函数/预处理器同名的变量，但不建议使用。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;不推荐\n#DIM EVENTFIRST\n#DIM COMF32\n#DIM COMABLE15\n#DIM SHOW_ABLUP_SELECT\n#DIM DIM\n#DIM PRI\n#DIM ONLY\n#DIM SKIPSTART\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="来自函数外的干扰" tabindex="-1"><a class="header-anchor" href="#来自函数外的干扰" aria-hidden="true">#</a> 来自函数外的干扰</h3><p>与<code>LOCAL@HOGE</code>的<code>LOCAL</code>不同，没有办法引用或将私有变量分配给其他函数。</p>',56);var p=e(a,[["render",function(n,e){return s}]]);export{p as default};
