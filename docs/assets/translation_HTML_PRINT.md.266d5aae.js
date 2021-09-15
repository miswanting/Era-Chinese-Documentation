import{o as a,c as n,a as t}from"./app.1f302d32.js";const s='{"title":"HTML_PRINT 相关","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTML_PRINT","slug":"html-print"},{"level":3,"title":"p","slug":"p"},{"level":3,"title":"nobr","slug":"nobr"},{"level":3,"title":"br","slug":"br"},{"level":3,"title":"button & nonbutton","slug":"button-nonbutton"},{"level":3,"title":"font","slug":"font"},{"level":3,"title":"b & i & u & s","slug":"b-i-u-s"},{"level":3,"title":"img","slug":"img"},{"level":3,"title":"shape","slug":"shape"},{"level":3,"title":"字符实体引用","slug":"字符实体引用"},{"level":3,"title":"注释","slug":"注释"},{"level":2,"title":"相关命令","slug":"相关命令"},{"level":3,"title":"HTML_TAGSPLIT","slug":"html-tagsplit"},{"level":2,"title":"相关函数","slug":"相关函数"},{"level":3,"title":"str HTML_POPPRINTINGSTR()","slug":"str-html-popprintingstr"},{"level":3,"title":"str HTML_GETPRINTEDSTR(int lineNo)","slug":"str-html-getprintedstr-int-lineno"},{"level":3,"title":"str HTML_ESCAPE(str value)","slug":"str-html-escape-str-value"},{"level":3,"title":"str HTML_TOPLAINTEXT(str value)","slug":"str-html-toplaintext-str-value"}],"relativePath":"translation/HTML_PRINT.md","lastUpdated":1631720706215}',e={},p=[t('<h1 id="html-print-相关" tabindex="-1">HTML_PRINT 相关 <a class="header-anchor" href="#html-print-相关" aria-hidden="true">#</a></h1><blockquote><p>翻译自原文档：<a href="https://osdn.net/projects/emuera/wiki/exhtml" target="_blank" rel="noopener noreferrer">https://osdn.net/projects/emuera/wiki/exhtml</a></p></blockquote><p>本节介绍<code>HTML_PRINT</code>和其他与<code>html</code>相关的命令。</p><p>通过使用相关命令，你可以用类似于<code>html</code>的语法来指定显示内容。</p><h2 id="html-print" tabindex="-1">HTML_PRINT <a class="header-anchor" href="#html-print" aria-hidden="true">#</a></h2><p>这是一个使用类似<code>html</code>标签的<code>PRINT</code>指令。</p><p>参数不是像<code>PRINT</code>那样的字符串，而是像<code>PRINTS</code>那样的字符串表达式，并且自动断行，所以它实际上类似于<code>PRINTSL</code>。</p><p>用<code>HTML_PRINT</code>绘图不受<code>ALIGNMENT</code>、<code>SETFONT</code>、<code>COLOR</code>、<code>FONTSTYLE</code>和类似指令的影响。</p><p>所有这些效果都必须在标签中指定。</p><p>使用&lt;tagname attribute=&#39;属性值&#39;&gt;Text&lt;/tagname&gt;的形式。</p><p>属性值必须用&quot;~&quot;或&quot;~&quot;括起来。</p><p>为了区别于 Emuera 中的字符串，建议用&#39;~&#39;括住它们。</p><h3 id="p" tabindex="-1">p <a class="header-anchor" href="#p" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>测试文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p><code>p</code> Tag 只能放在一个字符串之前，<code>&lt;/p&gt;</code>只能放在最后。</p><p><code>&lt;/p&gt;</code>可以被省略。</p><ul><li>align <ul><li>必要</li><li>与<code>ALIGNMENT</code>指令相对应，可以指定为<code>left</code>、<code>right</code>或<code>center</code>。</li></ul></li></ul><h3 id="nobr" tabindex="-1">nobr <a class="header-anchor" href="#nobr" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nobr</span><span class="token punctuation">&gt;</span></span>测试文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nobr</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>相当于用<code>PRINTSINGLE</code>指令绘图。</p><p>如果添加了这个标签，由于超出绘图区域而导致的隐式换行将不会被执行（可以通过<code>&lt;br&gt;</code>进行显式换行）。</p><p>然而，与浏览器不同，Emuera 不能水平滚动，所以你不会看到超出窗口宽度的东西。</p><p><code>&lt;nobr&gt;</code>只能放在第一个文本之前，<code>&lt;/nobr&gt;</code>只能放在最后一个文本之后。</p><p><code>&lt;/nobr&gt;</code>可以省略。</p><h3 id="br" tabindex="-1">br <a class="header-anchor" href="#br" aria-hidden="true">#</a></h3><p>换行。</p><p>其效果是在显示行上出现断行，因此在<code>CLEARLINE</code>和<code>LINECOUT</code>中，任何数量的<code>&lt;br&gt;</code>都将被视为断行。</p><h3 id="button-nonbutton" tabindex="-1">button &amp; nonbutton <a class="header-anchor" href="#button-nonbutton" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～<span class="token punctuation">&#39;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～<span class="token punctuation">&#39;</span></span> <span class="token attr-name">pos</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>测试按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nonbutton</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～<span class="token punctuation">&#39;</span></span> <span class="token attr-name">pos</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>测试按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nonbutton</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p><code>button</code>使所包围的文本成为可点击的按钮。</p><p><code>nonbutton</code>将所包含的文本渲染为非按钮文本。</p><ul><li>value <ul><li>只能为按钮指定。</li><li>如果没有指定值，该按钮会被渲染成一个非按钮，就像<code>&lt;nonbutton&gt;</code>一样，是不能点击的。</li></ul></li><li>title <ul><li>指定按钮被指向时显示的工具提示的内容。</li></ul></li><li>pos <ul><li>只有在对齐方式为左且使用了<code>nobr</code>标签时才可用。</li><li>它指定了工具提示距离屏幕左边缘的位置，是字体大小的一个百分比。</li><li>例如，<code>&lt;button pos=&#39;300&#39;&gt;Button&lt;/button&gt;</code>将把按钮放在与 &quot;button &quot;大致相同的位置。</li></ul></li></ul><h3 id="font" tabindex="-1">font <a class="header-anchor" href="#font" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">face</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～<span class="token punctuation">&#39;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～<span class="token punctuation">&#39;</span></span> <span class="token attr-name">bcolor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>测试文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>改变封闭区域的字体、显示颜色和按钮选择颜色。</p><p>这个标签可以嵌套。</p><ul><li>face <ul><li>指定字体名称。 如果指定了一个空字符串，字体将是配置中指定的字体。</li><li>如果指定的字体不存在或不被支持，将使用<code>Microsoft Sans Serif</code>代替（.Net框架的字体类）。</li></ul></li><li>color <ul><li>指定文本的显示颜色。</li><li>颜色可以指定为十六进制数字，如<code>#FF0080</code>，也可以指定为一个词，如<code>red</code>或<code>blue</code>。</li><li>颜色名称是基于.Net框架的颜色结构中定义的颜色。</li><li>然而，透明不能被指定为一个颜色名称。</li></ul></li><li>bcolor <ul><li>指定按钮被选中时的颜色。</li></ul></li></ul><h3 id="b-i-u-s" tabindex="-1">b &amp; i &amp; u &amp; s <a class="header-anchor" href="#b-i-u-s" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>加粗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>斜体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u</span><span class="token punctuation">&gt;</span></span>下划线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u</span><span class="token punctuation">&gt;</span></span>, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s</span><span class="token punctuation">&gt;</span></span>删除线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>封闭区域内的粗体、斜体、下划线和删除线文本。</p><h3 id="img" tabindex="-1">img <a class="header-anchor" href="#img" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～～<span class="token punctuation">&#39;</span></span> <span class="token attr-name">srcb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～～<span class="token punctuation">&#39;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～～<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>在一行中显示一个图像。</p><p>关于如何准备图像的信息，见<a href="./.html">资源设置</a>。</p><ul><li><code>src</code>属性 <ul><li>需要</li><li>资源文件夹中指定的资源名称 csv</li><li>如果没有指定高度或宽度，图像将被缩小或放大，使其高度和宽度与字体大小一致，同时保持长宽比。</li><li>如果绘图接口是WINAPI，将不执行alpha混合。</li></ul></li><li>srcb属性 <ul><li>指定资源文件夹中指定的资源名称 csv</li><li>srcb是选择按钮时应显示的资源的名称。</li><li>如果不指定，则使用与src相同的图像。</li><li>图像将被缩小或放大到与src相同的大小。</li></ul></li><li>高度属性 <ul><li>指定显示尺寸的高度为字体大小的百分比。 如果省略，值为100。</li><li>如果指定了一个负值，图像将被垂直翻转。</li></ul></li><li>宽度属性 <ul><li>显示尺寸的宽度，占字体大小的百分比。 如果省略，值为0。</li><li>如果是0，则保持原始图像的长宽比。</li><li>如果是否定的，图像将被水平翻转。</li></ul></li><li>ypos属性 <ul><li>指定显示位置的垂直轴位置为字体大小的百分比。 如果省略，值为0。</li><li>&quot;注意，这个位置是基于字体大小，而不是行高。</li><li>使用<code>&lt;shape type=&#39;space&#39;&gt;</code>或按钮的pos属性来调整水平轴的位置。</li></ul></li></ul><h3 id="shape" tabindex="-1">shape <a class="header-anchor" href="#shape" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>shape</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>rect<span class="token punctuation">&#39;</span></span> <span class="token attr-name">param</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～～<span class="token punctuation">&#39;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～～<span class="token punctuation">&#39;</span></span> <span class="token attr-name">bcolor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～～<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>shape</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>space<span class="token punctuation">&#39;</span></span> <span class="token attr-name">param</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>～～<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>在一条线上画出指定的形状。</p><ul><li>类型属性 <ul><li>需要</li><li>要画的形状的类型。</li><li>可以使用矩形或空间。 <ul><li>type=&#39;rect&#39;</li><li>绘制一个矩形。</li><li>参数可以是1或4个数字。</li><li>如果param为1，则指定矩形的宽度。</li><li><code>&lt;shape type=&#39;rect&#39; param=&#39;400&#39;&gt;</code> 绘制一个宽度为字体大小400%的矩形。 如果参数是4，那么x、y、宽度和高度将按这个顺序指定。</li><li><code>&lt;shape type=&#39;rect&#39; param=&#39;0,25,400,50&#39;&gt;</code> 绘制一个高度为字体大小50%的矩形，在行的上方和下方居中。</li><li><code>param=&#39;400&#39;</code>相当于<code>param=&#39;0、0、400、100&#39;</code>。</li><li><code>type=&#39;space&#39;</code></li><li>对于<code>param</code>指定的宽度，不显示任何东西。</li><li>例如，<code>&lt;shape type=&#39;space&#39; param=&#39;400&#39;&gt;</code>对于字体大小的400%将不画任何东西。</li><li>这大致相当于四个全宽的空间。</li></ul></li></ul></li><li>param Attributes <ul><li>需要</li><li>这是一个参数，用于以字体大小的百分比来绘制形状。</li><li>要指定多个值，请用逗号分开。</li></ul></li><li>颜色属性 <ul><li>指定形状的颜色。 规范的格式与<code>&lt;font&gt;</code>标签的格式相同。</li></ul></li><li>bcolor属性 <ul><li>指定形状上所选按钮的颜色。 规范的格式与<code>&lt;font&gt;</code>标签相同。</li></ul></li></ul><h3 id="字符实体引用" tabindex="-1">字符实体引用 <a class="header-anchor" href="#字符实体引用" aria-hidden="true">#</a></h3><blockquote><p><a href="https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML</a></p></blockquote><p>如果一个词被包含在<code>&amp;</code>和<code>;</code>中，它将被视为一个字符实体引用。</p><p>支持的字符参考是<code>&amp;amp;</code> <code>&amp;gt;</code> <code>&amp;lt;</code> <code>&amp;quot;</code> <code>&amp;apos;</code> 和 <code>&amp;#nn;</code> <code>&amp;#xnn;</code>。</p><h3 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;!-- 注释 --&gt;\n</code></pre></div><p>用<code>&lt;!--</code>，<code>--&gt;</code>括起来的字符。</p><h2 id="相关命令" tabindex="-1">相关命令 <a class="header-anchor" href="#相关命令" aria-hidden="true">#</a></h2><h3 id="html-tagsplit" tabindex="-1">HTML_TAGSPLIT <a class="header-anchor" href="#html-tagsplit" aria-hidden="true">#</a></h3><div class="language-basic"><pre><code>HTML_TAGSPLIT <span class="token operator">&lt;</span>字符串表达式<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>数值变量<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>字符串变量<span class="token operator">&gt;</span><span class="token punctuation">)</span>\n</code></pre></div><p>目标字符串被解释为 HTML 字符串，被分割成标签和纯文本，分割的数量被分配给<code>RESULT</code>，分割后的字符串被分配给<code>RESULTS</code>。</p><p>如果指定了第二个或第三个参数，它将被分配给指定的变量而不是<code>RESULT</code>或<code>RESULTS</code>。</p><p>如果在分割过程中发生错误，<code>RESULT</code>将被分配为<code>-1</code>。</p><p><code>HTML_TAGSPLIT</code>并不验证标签的内容或对应的适当性。</p><p>如果分割的数量超过了<code>RESULTS</code>数组的大小，多余的部分将不会被分配给<code>RESULTS</code>。</p><div class="language-"><pre><code>HTML_TAGSPLIT &quot;&lt;p align=&#39;right&#39;&gt;A&lt;! --comment--&gt;B&lt;font color=&#39;red&#39;&gt;C&lt;/font&gt;&lt;/p&gt;&quot;\nRESULTS:0 = &lt;p align=&#39;right&#39;&gt;\nRESULTS:1 = A\nRESULTS:2 = &lt;! --comment--&gt;\nRESULTS:3 = B\nRESULTS:4 = &lt;font color=&#39;red&#39;&gt;\nRESULTS:5 = C\nRESULTS:6 = &lt;/font&gt;\nRESULTS:7 = &lt;/p&gt;\nRESULT = 8\n</code></pre></div><h2 id="相关函数" tabindex="-1">相关函数 <a class="header-anchor" href="#相关函数" aria-hidden="true">#</a></h2><h3 id="str-html-popprintingstr" tabindex="-1">str HTML_POPPRINTINGSTR() <a class="header-anchor" href="#str-html-popprintingstr" aria-hidden="true">#</a></h3><p>检索当前在PRINT等待换行的Html格式的字符串缓冲区，并清空缓冲区。</p><p>因为p标签没有被附加，所以<code>ALIGNMENT</code>指令的对齐方式没有被反映出来。</p><h3 id="str-html-getprintedstr-int-lineno" tabindex="-1">str HTML_GETPRINTEDSTR(int lineNo) <a class="header-anchor" href="#str-html-getprintedstr-int-lineno" aria-hidden="true">#</a></h3><p>检索显示的行中由lineNo指定的行的内容，作为html格式的字符串。</p><p>对行的计数与<code>LINECOUNT</code>和<code>CLEARLINE</code>指令相同。</p><h3 id="str-html-escape-str-value" tabindex="-1">str HTML_ESCAPE(str value) <a class="header-anchor" href="#str-html-escape-str-value" aria-hidden="true">#</a></h3><p>将目标字符串转为Html格式（转换为字符参考）。</p><p>使用<code>HTML_TOPLAINTEXT</code>函数来取消注释。</p><h3 id="str-html-toplaintext-str-value" tabindex="-1">str HTML_TOPLAINTEXT(str value) <a class="header-anchor" href="#str-html-toplaintext-str-value" aria-hidden="true">#</a></h3><p>将目标html字符串转换为纯文本。</p><p>具体来说，html标签被从字符串中删除，字符参考被扩展。</p>',78)];e.render=function(t,s,e,l,o,c){return a(),n("div",null,p)};export{s as __pageData,e as default};
