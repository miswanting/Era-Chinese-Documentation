import{o as e,c as a,a as d}from"./app.da0bf9b3.js";const i='{"title":"Emuera 术语表","description":"","frontmatter":{},"headers":[{"level":2,"title":"启动模式","slug":"启动模式"},{"level":3,"title":"普通模式 Normal Mode","slug":"普通模式-normal-mode"},{"level":3,"title":"解析模式 Analysis Mode","slug":"解析模式-analysis-mode"},{"level":3,"title":"调试模式 Debug Mode","slug":"调试模式-debug-mode"},{"level":2,"title":"窗口对话框 Window Dialogue","slug":"窗口对话框-window-dialogue"},{"level":3,"title":"主窗口 Main Window","slug":"主窗口-main-window"},{"level":3,"title":"主控制台 Main Console","slug":"主控制台-main-console"},{"level":3,"title":"调试窗口 Debug Window","slug":"调试窗口-debug-window"},{"level":3,"title":"调试控制台 Debug Console","slug":"调试控制台-debug-console"},{"level":3,"title":"设置对话框 Config Dialogue","slug":"设置对话框-config-dialogue"},{"level":3,"title":"剪贴板对话框 Clipboard Dialogue","slug":"剪贴板对话框-clipboard-dialogue"},{"level":2,"title":"函数","slug":"函数"},{"level":3,"title":"命令 Command","slug":"命令-command"},{"level":3,"title":"函数 Function","slug":"函数-function"},{"level":3,"title":"事件函数 Event Function","slug":"事件函数-event-function"},{"level":3,"title":"预处理器 Preprocessor","slug":"预处理器-preprocessor"},{"level":3,"title":"属性（预处理器）Attribute (Preprocessor)","slug":"属性（预处理器）attribute-preprocessor"},{"level":3,"title":"定义（预处理器）Definition (Preprocessor)","slug":"定义（预处理器）definition-preprocessor"},{"level":3,"title":"可在表达式中使用的函数","slug":"可在表达式中使用的函数"},{"level":3,"title":"式中函数","slug":"式中函数"},{"level":3,"title":"内置函数 Built-in Function","slug":"内置函数-built-in-function"},{"level":3,"title":"用户自定义函数 User-defined Function","slug":"用户自定义函数-user-defined-function"},{"level":3,"title":"#Function(s)函数","slug":"function-s-函数"},{"level":2,"title":"行、语句、表达式","slug":"行、语句、表达式"},{"level":3,"title":"行","slug":"行"},{"level":3,"title":"语句","slug":"语句"},{"level":3,"title":"表达式","slug":"表达式"},{"level":3,"title":"数字表达式","slug":"数字表达式"},{"level":3,"title":"字符串表达式","slug":"字符串表达式"},{"level":2,"title":"变量","slug":"变量"},{"level":3,"title":"伪变量","slug":"伪变量"},{"level":3,"title":"数组变量","slug":"数组变量"},{"level":3,"title":"角色变量 Character Variable","slug":"角色变量-character-variable"},{"level":3,"title":"二维数组变量","slug":"二维数组变量"},{"level":3,"title":"多维数组变量","slug":"多维数组变量"},{"level":3,"title":"角色多维数组变量","slug":"角色多维数组变量"},{"level":3,"title":"本地变量 Local Variable","slug":"本地变量-local-variable"},{"level":3,"title":"广域变量 Nonlocal Variable","slug":"广域变量-nonlocal-variable"},{"level":3,"title":"全局变量 Global Variable","slug":"全局变量-global-variable"},{"level":3,"title":"私有变量 Private Variable","slug":"私有变量-private-variable"}],"relativePath":"translation/Glossary.md","lastUpdated":1631331216994}',r={},o=[d('<h1 id="emuera-术语表" tabindex="-1">Emuera 术语表 <a class="header-anchor" href="#emuera-术语表" aria-hidden="true">#</a></h1><blockquote><p>翻译自原文档：<a href="https://osdn.net/projects/emuera/wiki/EmuDic" target="_blank" rel="noopener noreferrer">https://osdn.net/projects/emuera/wiki/EmuDic</a></p></blockquote><h2 id="启动模式" tabindex="-1">启动模式 <a class="header-anchor" href="#启动模式" aria-hidden="true">#</a></h2><h3 id="普通模式-normal-mode" tabindex="-1">普通模式 Normal Mode <a class="header-anchor" href="#普通模式-normal-mode" aria-hidden="true">#</a></h3><p>这是Emuera正常启动时的模式。</p><p>当你双击EmueraXXXX.exe启动它时，你就会进入这种模式。</p><h3 id="解析模式-analysis-mode" tabindex="-1">解析模式 Analysis Mode <a class="header-anchor" href="#解析模式-analysis-mode" aria-hidden="true">#</a></h3><p>这是以要解析的文件名作为命令行参数进行调用时的模式。</p><p>当你把一个文件拖到EmueraXXXX.exe上并启动它时，这个模式就被激活了。</p><p>分析模式检查你拖放的文件的语法。</p><p>这使你能够检查你正在开发的文件中是否有语法错误。</p><p>然而，由于需要检查字符串的规范，你需要确保脚本运行所需的CSV文件夹中的数据是完整的。</p><p>你可以将该文件拖到你打算使用的EmueraXXXX.exe中。</p><p>从1738g开始，当在分析模式下启用 &quot;加载时显示报告 &quot;时，将显示每个加载的ERB文件中的函数列表。</p><h3 id="调试模式-debug-mode" tabindex="-1">调试模式 Debug Mode <a class="header-anchor" href="#调试模式-debug-mode" aria-hidden="true">#</a></h3><p>这是以<code>-Debug</code>作为命令行参数调用时的模式。 详见<a href="./.html">调试模式</a>。</p><h2 id="窗口对话框-window-dialogue" tabindex="-1">窗口对话框 Window Dialogue <a class="header-anchor" href="#窗口对话框-window-dialogue" aria-hidden="true">#</a></h2><h3 id="主窗口-main-window" tabindex="-1">主窗口 Main Window <a class="header-anchor" href="#主窗口-main-window" aria-hidden="true">#</a></h3><p>这是在启动时通常打开的第一个窗口。</p><h3 id="主控制台-main-console" tabindex="-1">主控制台 Main Console <a class="header-anchor" href="#主控制台-main-console" aria-hidden="true">#</a></h3><p>这是主窗口中特别是进行输入和输出的部分的名称。</p><h3 id="调试窗口-debug-window" tabindex="-1">调试窗口 Debug Window <a class="header-anchor" href="#调试窗口-debug-window" aria-hidden="true">#</a></h3><p>这是程序在调试模式下启动时可以打开的窗口。</p><h3 id="调试控制台-debug-console" tabindex="-1">调试控制台 Debug Console <a class="header-anchor" href="#调试控制台-debug-console" aria-hidden="true">#</a></h3><p>这是调试窗口的一部分的名称，当你选择 &quot;控制台 &quot;选项卡时，它将进行输入和输出。</p><h3 id="设置对话框-config-dialogue" tabindex="-1">设置对话框 Config Dialogue <a class="header-anchor" href="#设置对话框-config-dialogue" aria-hidden="true">#</a></h3><p>这是从主窗口的帮助、设置菜单中打开的对话框。</p><h3 id="剪贴板对话框-clipboard-dialogue" tabindex="-1">剪贴板对话框 Clipboard Dialogue <a class="header-anchor" href="#剪贴板对话框-clipboard-dialogue" aria-hidden="true">#</a></h3><p>这是你从主控制台用<code>Ctrl+C</code>打开的对话框。</p><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-hidden="true">#</a></h2><h3 id="命令-command" tabindex="-1">命令 Command <a class="header-anchor" href="#命令-command" aria-hidden="true">#</a></h3><p>包括Print和Wait。</p><h3 id="函数-function" tabindex="-1">函数 Function <a class="header-anchor" href="#函数-function" aria-hidden="true">#</a></h3><p>这些函数的名称在ERB脚本的<code>@</code>语句中定义，并由<code>Call</code>指令或类似指令调用。</p><p>这包括<strong>可在表达式中使用的函数</strong>，其名称在<code>@</code>语句中定义。</p><h3 id="事件函数-event-function" tabindex="-1">事件函数 Event Function <a class="header-anchor" href="#事件函数-event-function" aria-hidden="true">#</a></h3><p>一个名称以EVENT开头并被系统调用的函数。</p><p>如果你定义了一个以上的，它们都会被调用。</p><h3 id="预处理器-preprocessor" tabindex="-1">预处理器 Preprocessor <a class="header-anchor" href="#预处理器-preprocessor" aria-hidden="true">#</a></h3><p>ERB文件夹中的一个文件中的一行，在任何其他指令之前被处理。</p><p>它是以<code>#</code>开头的一行，或以<code>[]</code>括起来的一个短语。</p><p>以<code>#</code>开头的行被划分为属性和定义。 更多信息见<a href="./.html">那里</a>。</p><p>用<code>[]</code>括起来的行是特殊块。</p><p>更多信息见<a href="./.html">本页面</a>。</p><h3 id="属性（预处理器）attribute-preprocessor" tabindex="-1">属性（预处理器）Attribute (Preprocessor) <a class="header-anchor" href="#属性（预处理器）attribute-preprocessor" aria-hidden="true">#</a></h3><p>预处理器是以<code>#</code>开头的一行，它指定了一个函数并决定了该函数的规格和行为。</p><p><code>#PRI</code>，<code>#LATER</code>，<code>#SINGLE</code>，<code>#ONLY</code>来控制事件函数执行时的行为。</p><p><code>#FUNCTION</code>和<code>#FUNCTIONS</code>用于指定表达式中的函数类型。</p><h3 id="定义（预处理器）definition-preprocessor" tabindex="-1">定义（预处理器）Definition (Preprocessor) <a class="header-anchor" href="#定义（预处理器）definition-preprocessor" aria-hidden="true">#</a></h3><p>以<code>#</code>开头的一行是一个预处理程序，它定义了变量的名称和它的规格。</p><p><code>#LOCAL</code>，<code>#LOCALSIZE</code>，<code>#LOCALSSIZE</code>来指定变量中的元素数量。</p><p>变量，<code>#DIM</code>和<code>#DIMS</code>用于定义变量，<code>#DEFINE</code>用于定义ERH中的DEFINE宏。</p><h3 id="可在表达式中使用的函数" tabindex="-1">可在表达式中使用的函数 <a class="header-anchor" href="#可在表达式中使用的函数" aria-hidden="true">#</a></h3><p>这些是可以从表达式中调用的函数。</p><p>&quot;功能 &quot;不仅包括上述功能，还包括下面描述的内置功能。</p><p>在许多编程语言中，它们被简单地称为 &quot;函数&quot;。</p><h3 id="式中函数" tabindex="-1">式中函数 <a class="header-anchor" href="#式中函数" aria-hidden="true">#</a></h3><p>可在表达式中使用的函数的缩写。</p><p>它与编程语言中的匿名函数或内联函数没有关系。</p><h3 id="内置函数-built-in-function" tabindex="-1">内置函数 Built-in Function <a class="header-anchor" href="#内置函数-built-in-function" aria-hidden="true">#</a></h3><p>表达式中的一个函数，最初是内置于Emuera中的，可以通过<code>@</code>语句在没有定义的情况下使用。</p><p>这些包括<code>Abs(X)</code>和<code>GetTime()</code>。</p><p>这很复杂，但它们并不对应于上述函数定义。</p><p>如果你把它们看作是“可用于表达的指令”，它们可能更容易理解。</p><h3 id="用户自定义函数-user-defined-function" tabindex="-1">用户自定义函数 User-defined Function <a class="header-anchor" href="#用户自定义函数-user-defined-function" aria-hidden="true">#</a></h3><p>它是一个用户定义的函数。</p><p>它是一个函数，其名称由ERB脚本中的<code>@</code>语句定义，并由CALL指令或类似指令调用。</p><p>换句话说，与上述函数的概念相同。</p><h3 id="function-s-函数" tabindex="-1">#Function(s)函数 <a class="header-anchor" href="#function-s-函数" aria-hidden="true">#</a></h3><p>一个函数，其名称由<code>@</code>语句定义，并且具有<code>#FUNCTION(S)</code>属性。</p><p>一个既是函数又是表达式中的函数的函数。</p><h2 id="行、语句、表达式" tabindex="-1">行、语句、表达式 <a class="header-anchor" href="#行、语句、表达式" aria-hidden="true">#</a></h2><h3 id="行" tabindex="-1">行 <a class="header-anchor" href="#行" aria-hidden="true">#</a></h3><p>它是指从一个换行代码到下一个换行代码的周期。</p><p>在编程中，这也被称为物理行。</p><p>在编辑器中，它通常被称为逻辑行。</p><h3 id="语句" tabindex="-1">语句 <a class="header-anchor" href="#语句" aria-hidden="true">#</a></h3><p>语句或逻辑行是Emuera中的一个处理单位。</p><p>大多数语句由一条指令和它的参数组成，或由一个变量、一个赋值运算符和一个表达式组成。</p><p>由于ERB中每行一句的铁律，行和句子的意思几乎一样。</p><p>维基没有对它们进行区分。</p><h3 id="表达式" tabindex="-1">表达式 <a class="header-anchor" href="#表达式" aria-hidden="true">#</a></h3><p>这些是变量、常数、表达式中的函数、非赋值运算符、括号和它们的组合。</p><p>赋值运算符只能作为赋值语句中的第一个运算符使用，不能在表达式中使用。</p><h3 id="数字表达式" tabindex="-1">数字表达式 <a class="header-anchor" href="#数字表达式" aria-hidden="true">#</a></h3><p>一个表达式，该表达式的评估结果（操作的结果）是一个数字。</p><p>例如，<code>A + B</code>，<code>STR == &quot;Ayu&quot;</code>，等等。</p><h3 id="字符串表达式" tabindex="-1">字符串表达式 <a class="header-anchor" href="#字符串表达式" aria-hidden="true">#</a></h3><p>一个表达式，该表达式的评估结果（操作的结果）是一个字符串。</p><p>例如，<code>STR + STR:1</code>，<code>&quot;a&quot; * 10</code>，等等。</p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-hidden="true">#</a></h2><h3 id="伪变量" tabindex="-1">伪变量 <a class="header-anchor" href="#伪变量" aria-hidden="true">#</a></h3><p>像<code>Rand</code>和<code>CharaNum</code>一样，它可以被写成一个变量，但并不是一个真正的变量。</p><p>它的内部行为类似于表达式中的函数。</p><h3 id="数组变量" tabindex="-1">数组变量 <a class="header-anchor" href="#数组变量" aria-hidden="true">#</a></h3><p>一个有多个元素的变量。</p><p>数组变量的元素数可以在VariableSize.csv中改变，通常不会在脚本中增加或减少。</p><p>然而，对于某些局部变量，可以在脚本中指定数组元素的数量。</p><h3 id="角色变量-character-variable" tabindex="-1">角色变量 Character Variable <a class="header-anchor" href="#角色变量-character-variable" aria-hidden="true">#</a></h3><p>一个变量，记录一个角色的状态。</p><p>它与C语言的char类型变量等没有关系。</p><p>由于其性质，元素的数量随着<code>AddChara</code>或<code>DelChara</code>角色的增加或减少而增加或减少。</p><p>在Eramaker的解释中，它被视为数组变量之一，因为它以与数组变量相同的形式指定元素，如<code>NO:TARGET</code>，但本wiki区分了字符变量和数组变量。</p><h3 id="二维数组变量" tabindex="-1">二维数组变量 <a class="header-anchor" href="#二维数组变量" aria-hidden="true">#</a></h3><p>一个既是字符变量又是数组变量的变量。</p><p>它需要两个参数（可选），如<code>CFLAG:TARGET:2</code>。</p><p>由于它是一个字符变量，第一个参数是字符编号。</p><p>随着字符的增加或减少，第一维中的元素数量也会增加或减少。</p><p>第二个维度的元素数量只能在VariableSize.csv中改变，不能在脚本中改变。</p><p>本文档不使用 &quot;双数组 &quot;一词，除了描述eramaker的规范。</p><p>相反，我们将使用 &quot;字符变量和数组变量 &quot;等术语。</p><h3 id="多维数组变量" tabindex="-1">多维数组变量 <a class="header-anchor" href="#多维数组变量" aria-hidden="true">#</a></h3><p>二维阵列变量，如<code>DItemType</code>，以及三维阵列变量，如<code>TA</code>。</p><p>它们可以接受两个或三个参数，如<code>DA:0:1</code>或<code>TA:1:2:3</code>。</p><p>多维数组变量的元素数只能在VariableSize.csv中改变，不能在脚本中增加或减少，而且多维数组变量的参数不能省略。</p><h3 id="角色多维数组变量" tabindex="-1">角色多维数组变量 <a class="header-anchor" href="#角色多维数组变量" aria-hidden="true">#</a></h3><p>一个既是角色变量又是多维数组变量的变量。</p><p>它需要三个参数（非可选），如<code>CFLAG:TARGET:0:2</code>。</p><p>由于它是一个角色变量，第一个参数代表角色编号。</p><p>随着角色数量的增加或减少，第一维度的元素数量也在增加或减少。</p><p>第二和第三维度的元素数量只能在VariableSize.csv中改变，不能在脚本中改变。</p><p>从ver1807开始，唯一适用于这个变量的是CDFLAG。</p><p>更多信息见<a href="./.html">CDFLAG</a>。</p><h3 id="本地变量-local-variable" tabindex="-1">本地变量 Local Variable <a class="header-anchor" href="#本地变量-local-variable" aria-hidden="true">#</a></h3><p>这些是为每个函数（函数名）提供的变量，如LOCAL、LOCALS和私有变量。</p><p>私有变量将在另一节中描述。</p><p>至于<code>Local</code>和<code>Locals</code>以外的私有变量，其实不是所谓的局部变量，而是名为<code>LOCAL@函数名</code>或<code>LOCALS@函数名</code>的公共静态变量。</p><p>即使离开了函数，它们也会保留其价值，并且可以从函数外部分配或引用。</p><p>当函数被多次调用时，例如在递归调用中，该值也被共享。</p><h3 id="广域变量-nonlocal-variable" tabindex="-1">广域变量 Nonlocal Variable <a class="header-anchor" href="#广域变量-nonlocal-variable" aria-hidden="true">#</a></h3><p>它是一个变量，其值被所有的函数共享，除了<code>Local</code>、<code>Locals</code>和私有变量外，大多数变量都属于这个变量。</p><p>它是一般编程语言中全局变量的概念。</p><p>你也可以通过使用<code>#DIM</code>或<code>#DIMS</code>在ERH中定义一个全局变量。</p><p>欲了解更多信息，请参考<a href="./.html">头文件（ERH）</a>页面。</p><h3 id="全局变量-global-variable" tabindex="-1">全局变量 Global Variable <a class="header-anchor" href="#全局变量-global-variable" aria-hidden="true">#</a></h3><p>一个变量，其值可以在不同的保存数据之间共享。 全局变量也包括在广域变量中。</p><p>它们在保存加载和初始化的时间上与普通变量不同。</p><p>Emuera中的全局变量这与普通编程语言中的全局变量的概念无关。</p><h3 id="私有变量-private-variable" tabindex="-1">私有变量 Private Variable <a class="header-anchor" href="#私有变量-private-variable" aria-hidden="true">#</a></h3><p>这些是由<code>#DIM</code>或<code>#DIMS</code>为每个函数（函数名称）定义的变量。</p><p>这些也是局部变量，所以它们对每个函数都是独立的。</p><p>然而，与同样被视为局部变量的<code>Local</code>不同，它们不能被分配到或从函数外部引用，例如使用<code>@函数名</code>。</p><p>更多信息请见<a href="./.html">用户定义的变量</a>页面。</p>',143)];r.render=function(d,i,r,l,c,t){return e(),a("div",null,o)};export{i as __pageData,r as default};
