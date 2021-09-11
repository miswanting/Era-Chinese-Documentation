import{o as e,c as o,a as p}from"./app.da0bf9b3.js";const t='{"title":"调试命令","description":"","frontmatter":{},"relativePath":"translation/Debug_Command.md","lastUpdated":1631331216994}',a={},r=[p('<h1 id="调试命令" tabindex="-1">调试命令 <a class="header-anchor" href="#调试命令" aria-hidden="true">#</a></h1><blockquote><p>翻译自原文档：<a href="https://osdn.net/projects/emuera/wiki/debugcom" target="_blank" rel="noopener noreferrer">https://osdn.net/projects/emuera/wiki/debugcom</a></p></blockquote><p>调试命令在默认情况下是不可用的。</p><p>如果你想使用它们，请在帮助设置中选中 &quot;使用调试命令&quot;。</p><p>这个函数是一个没有调试模式的版本的简单函数。</p><p>建议在调试模式下运行游戏来调试当前的版本。</p><p>当脚本运行时（游戏中），输入以&quot;@&quot;开头的字符串将被接受为调试命令。</p><p>大小写敏感性取决于emuera.config中的 &quot;忽略大小写敏感性 &quot;选项。</p><p>调试命令的格式必须与ERB相同。</p><p>示例：</p><div class="language-"><pre><code>;调试模式下\n@MONEY = 10000\n@PRINTV FLAG:200\n@PRINTFORM %NAME:MASTER%のCFAG(1) = {CFLAG:MASTER:1}\n@ADDCHARA 1\n</code></pre></div><p>另外，可以简单地输入变量或公式，它们的值将被打印出来</p><p>(@字符后面的空格不是必须的)。</p><p>但是，改变脚本流程的命令，如<code>IF</code>和<code>Call</code>，以及需要输入的命令，如<code>Input</code>和<code>Wait</code>，不能使用。</p><p>有一些指令在一些ERB中是没有的：</p><ul><li>@REBOOT：重新启动并重读emuera.config、csv和erb文件。</li><li>@OUTPUT：输出当前日志到emuera.log。 如果它已经存在，它将被覆盖。这与@OUTPUTLOG指令的行为相同。</li><li>@EXIT：退出Emuera，这与QUIT指令相同。</li><li>@CONFIG：打开配置对话框。</li><li>@DEBUG：打开调试对话框。 这只有在你以调试模式启动时才可用。</li></ul><p>如果你执行上述以外的任何其他命令，即普通的ERB命令，MASTER的名字将被强制为 &quot;cheat&quot;。</p><p>这是为了防止滥用调试命令，因为它也是一种欺骗行为。</p>',18)];a.render=function(p,t,a,i,n,d){return e(),o("div",null,r)};export{t as __pageData,a as default};
