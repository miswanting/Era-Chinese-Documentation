import{e}from"./app.23a69cc4.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";const s={},a=e('<h1 id="常量与变量" tabindex="-1"><a class="header-anchor" href="#常量与变量" aria-hidden="true">#</a> 常量与变量</h1><h2 id="前言与确认" tabindex="-1"><a class="header-anchor" href="#前言与确认" aria-hidden="true">#</a> 前言与确认</h2><p>简单的输出文字虽然是开发游戏的必由之路，但仅仅局限于此，决不是任何优秀的开发者所追求的目标。</p><p>制作游戏不是写小说，仅仅靠在脚本中挥洒文采只能让玩家变成只看一次的“读者”。我们需要给游戏中的信息施加名为“变化”的魔法，而要实现对它的操作，就首先需要学习如何“指代”它。</p><div class="custom-container warning"><p class="custom-container-title">教程依赖</p><p>本教程假设您已学习过<a href="../Quick_Start">快速开始</a>。若您尚未学习过，我们强烈推荐您首先学习相应教程。</p></div><p>先确认一下我们现有的工程文件夹结构：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root/\n ├─ emuera.config\n ├─ Emuera1824.exe\n ├─ CSV/\n └─ ERB/\n     └─ System.erb\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>其中，<code>System.erb</code>的代码为：</p><div class="language-basic ext-basic line-numbers-mode"><pre class="language-basic"><code>@EventFirst\n  <span class="token function">Print</span> Hello World!\n  Quit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="值、常量与变量" tabindex="-1"><a class="header-anchor" href="#值、常量与变量" aria-hidden="true">#</a> 值、常量与变量</h2><p>让我们首先向你灌输一个概念：</p><ul><li>请把信息想象为一团不可名状的“东西”，它可能是一个数字，也可能是一句文本，而我们称这样的信息为“值”，在英语中，它可以叫做：“Value”；</li><li>而正因为信息的不可名状，所以我们为了让游戏引擎明白我们如何操作信息，就创造了一个“有名字的容器”，这样的容器就被称为变量（或常量）；</li><li>常量与变量都是“有名字的容器”，但常量中装的东西是不变的，变量中装的东西是可变的。</li></ul><p>举个例子：我的包里有三个石头，他的数量输出到屏幕上：<code>Print 3</code>。而我包里同时还有三个苹果，把他的数量也输出到屏幕上：<code>Print 3</code>，这样我们就得到一个脚本：</p><div class="language-basic ext-basic line-numbers-mode"><pre class="language-basic"><code>@EventFirst\n  <span class="token function">Print</span> <span class="token number">3</span>\n  <span class="token function">Print</span> <span class="token number">3</span>\n  Quit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>写完之后，我们和游戏引擎都会产生一个疑问：”究竟哪个3是金币，哪个3是苹果？“</p><p>别慌，显示的值不可名状，但我们可以用”有名字的容器“代替：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@EventFirst\n  #Dim Stone = 3\n  #Dim Apple = 3\n  PrintV Stone\n  PrintV Apple\n  Quit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>运行下来：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>33\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>让我们详细地看看发生了什么：</p><ul><li><code>#Dim Stone = 3</code><ul><li>我们用<code>#Dim</code>命令定义了一个变量<code>Stone</code>，并使用<code>=</code>符号将<code>3</code>装入其中；</li></ul></li><li><code>#Dim Apple = 3</code><ul><li>我们用<code>#Dim</code>命令定义了一个变量<code>Apple</code>，并使用<code>=</code>符号将<code>3</code>装入其中；</li></ul></li><li><code>PrintV Stone</code><ul><li>我们使用<code>PrintV</code>命令将变量<code>Stone</code>的值输出到屏幕上；</li></ul></li><li><code>PrintV Apple</code><ul><li>我们使用<code>PrintV</code>命令将变量<code>Apple</code>的值输出到屏幕上；</li></ul></li></ul><p>是不是特别简单就能理解？</p><p>我们加点难度，假如我的苹果后来变成了2个，怎么表示？</p><p>很简单，只需要告诉引擎，我的苹果的数量变为了<code>2</code>就可以：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@EventFirst\n  #Dim Stone = 3\n  #Dim Apple = 3\n  Apple = 2\n  PrintV Stone\n  PrintV Apple\n  Quit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>输出：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>32\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>完美！程序正确地理解了我们的意思，并且把两个<code>3</code>正确地区分了开来！不仅可以设置新的值，我们还可以对他进行各种操作和运算，但那都是后文了，至少现在，我们可以知道，”有名字的容器“真的很方便！</p><h2 id="常量的定义与打印" tabindex="-1"><a class="header-anchor" href="#常量的定义与打印" aria-hidden="true">#</a> 常量的定义与打印</h2><p>显而易见，我们现在的脚本，即使运行一百次，也不会发生任何变化，只会简单地输出我们已经预先写好的字符串。</p><p>我们来尝试写一些不那么“直接”的东西，请将<code>System.erb</code>中的内容改为这样：</p><div class="language-basic ext-basic line-numbers-mode"><pre class="language-basic"><code>@EventFirst\n#<span class="token keyword">Dim</span> <span class="token keyword">Const</span> Food <span class="token operator">=</span> <span class="token number">0</span>\n  PrintV Food\n  Quit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>运行！我们得到下列输出：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Hello World!\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>同样成功！</p><p>但……为什么？</p><p>我们现在突然遇到了几个不认识的代码以及几个不熟悉的用法。不过不用担心，我们分别看看：</p><ul><li><code>@EventFirst</code>：<strong>定义函数</strong>。你已经学过了。</li><li><code>#Dim</code>：定义（常量或变量）。这是你第一次见到它，不过它很简单，它的作用就是告诉游戏引擎：“看好了！我接下来要定义一个东西，它可能是常量或者变量”。这样游戏引擎就能做好相应准备。有关更多的<strong>定义常量</strong>、<strong>定义变量</strong>，请移步至<a href="">此处</a>。</li><li><code>Const</code>：<strong>常量</strong>关键字。这很好理解，毕竟前一个短语已经成功地吸引到引擎的注意了，紧跟着的这个关键词就是明确地说这次定义的就是定义的<strong>常量</strong>。</li><li><code>Food</code>：变量名。新定义的常量/变量名称。常量/变量完成定义后，可通过该名称再次找到这个常量/变量。</li><li><code>=</code>：赋值符号。代表将符号右侧的数据装载到符号左侧的变量内，具体到这个地方，符号右边的“Hello World!”这句话，会装载到名为“Text”的变量内。</li><li><code>0</code>：一个数值。</li><li><code>PrintV</code>：一个语句，可以将装载于语句后面的变量内的数据显示在屏幕上。</li><li><code>Quit</code>：退出。你也已经学过了。</li></ul><p>看上去突然增加了许多内容，但细细一捋，才发现游戏脚本就像小说一样，虽然有点絮絮叨叨，但也能被简简单单的理解，不是吗？</p><h2 id="变量的定义与打印" tabindex="-1"><a class="header-anchor" href="#变量的定义与打印" aria-hidden="true">#</a> 变量的定义与打印</h2><p>好了，我们现在已经有一个方法实现不那么“直接”的数据暂存了，但仍然不能够通过改变数据来为游戏增加变化。具体地说，如果我们就是想改变“Hello World!”的文本，怎么办！</p><p>我们改变脚本：</p><div class="custom-container warning"><p class="custom-container-title">该代码含有可期待的错误</p><div class="language-basic ext-basic line-numbers-mode"><pre class="language-basic"><code>@EventFirst\n#<span class="token keyword">Dim</span> <span class="token keyword">Const</span> Food <span class="token operator">=</span> <span class="token number">0</span>\n  Food <span class="token operator">=</span> <span class="token number">1</span>\n  PrintV Food\n  Quit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><p>这样，Text 中的值就可以变化了吗？</p><p>运行得到：</p><div class="custom-container danger"><p class="custom-container-title">错误信息<a href="javascript:alert(&#39;TODO&#39;)">索引</a></p><blockquote><p>System.erbの3行目でエラーが発生しました:Emuera1824</p><p>Food = 1</p><p>エラー内容：代入文の左辺に変更できない変数を指定することはできません</p><p>現在の関数：@EVENTFIRST（System.erbの1行目）</p><p>関数呼び出しスタック：</p><p>...</p></blockquote><p>System.erb的第3行发生错误：Emuera1824</p><p>Text = &quot;How Are You?&quot;</p><p>错误：你不能在赋值语句的左边指定一个不能改变的变量</p><p>当前函数：@EVENTFIRST (System.erb第1行)</p><p>函数调用栈：</p></div><p>Hmmmmm.....</p><p>这其实不难理解，毕竟我们定义的<code>Text</code>是个<strong>常量</strong>。</p><p>改成变量就好了！</p><p>修改为：</p><div class="language-basic ext-basic line-numbers-mode"><pre class="language-basic"><code>@EventFirst\n  #<span class="token keyword">Dim</span> Food <span class="token operator">=</span> <span class="token number">0</span>\n  Food <span class="token operator">=</span> <span class="token number">1</span>\n  PrintV Food\n  Quit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>运行，看到输出：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>How Are You?\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>成功！</p><p>但又有两个问题：</p><ul><li>为何我们直接删掉了<code>Const</code>？</li><li>为何我们使用的是<code>Text = How Are You?</code>，而不是<code>Text = &quot;How Are You?&quot;</code>（字符串外有双引号）</li></ul><p>我想答案也不复杂：</p><ol><li>对于<code>#DimS</code>语句来说，定义变量是<strong>默认</strong>用法，在这种情况下，可以省略。</li><li>我暂时也不知道。不过加上双引号后，显示出来的值也带有双引号，说明赋值在<code>#DimS</code>中和在外面独立使用的表现不一样。那就当作是”固定搭配“吧2333333</li></ol>',58);var l=n(s,[["render",function(e,n){return a}]]);export{l as default};
