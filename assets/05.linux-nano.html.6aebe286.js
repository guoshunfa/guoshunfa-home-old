import{_ as s,r,o as c,c as t,a as n,b as e,d as o,e as d}from"./app.4659d0e0.js";const i={},l=d(`<h1 id="linux-nano命令行编辑器" tabindex="-1"><a class="header-anchor" href="#linux-nano命令行编辑器" aria-hidden="true">#</a> Linux - Nano命令行编辑器</h1><p>转载自：https://www.myfreax.com/how-to-use-nano-text-editor/</p><p>在命令行上工作时，经常需要创建或编辑文本文件。Vim和Emacs是最强大和最受欢迎的两种命令行编辑器。两者都有陡峭的学习曲线，可能会吓到新用户。对于那些需要简单编辑器的人，可以使用nano。</p><p>GNU nano是用于Unix和Linux操作系统的易于使用的命令行文本编辑器。它包括您希望从常规文本编辑器获得的所有基本功能，例如语法高亮显示，多个缓冲区，使用正则表达式进行搜索和替换，拼写检查，UTF-8编码等。</p><p>在本教程中，我们将介绍使用nano编辑器的基础知识，包括如何创建和打开文件，编辑文件，保存文件，搜索和替换文本，剪切和粘贴文本，退出nano编辑器，配置nano，配置nano语法高亮。</p><h2 id="安装nano" tabindex="-1"><a class="header-anchor" href="#安装nano" aria-hidden="true">#</a> 安装Nano</h2><p>Nano文本编辑器已预装在macOS和大多数Linux发行版上。要检查您的系统上是否安装了它，请输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nano</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Copy</p><p>输出将如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GNU nano, version 2.9.3
(C) 1999-2011, 2013-2018 Free Software Foundation, Inc.
(C) 2014-2018 the contributors to nano
Email: nano@nano-editor.org	Web: https://nano-editor.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您的系统上未安装nano，则可以使用发行版的软件包管理器进行安装。</p><h3 id="在ubuntu和debian上安装nano" tabindex="-1"><a class="header-anchor" href="#在ubuntu和debian上安装nano" aria-hidden="true">#</a> 在Ubuntu和Debian上安装Nano</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">nano</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Copy</p><h3 id="在centos和fedora上安装nano" tabindex="-1"><a class="header-anchor" href="#在centos和fedora上安装nano" aria-hidden="true">#</a> 在CentOS和Fedora上安装Nano</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">nano</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Copy</p><h2 id="打开和创建文件" tabindex="-1"><a class="header-anchor" href="#打开和创建文件" aria-hidden="true">#</a> <strong>打开和创建文件</strong></h2><p>要打开现有文件或创建新文件，请键入，<code>nano</code>然后输入文件名：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nano</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Copy</p><p>这将打开一个新的编辑器窗口，您可以开始编辑文件。在窗口的底部，列出了可与nano编辑器一起使用的按键快捷方式。</p><p>所有命令都以<code>^</code>或<code>M</code>字符作为前缀。<code>^</code>表示<code>Ctrl</code>键。例如，<code>^J</code>意味着同时按下<code>Ctrl</code>和<code>J</code>键。字母<code>M</code>代表<code>Alt</code> 键。您可以通过键入<code>Ctrl+g</code>获取所有命令的列表。</p><p>为了能够打开文件，您必须对该文件具有读取权限。如果要在打开文件是使光标在指定行和字符上，请使用以下语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nano</span> +line_number,character_number filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Copy</p><p>如果省略光标则将位于第一个字符上。</p><h2 id="编辑文件" tabindex="-1"><a class="header-anchor" href="#编辑文件" aria-hidden="true">#</a> 编辑文件</h2><p>与vim不同，nano是一种无模式的编辑器，这意味着您可以在打开文件后立即开始输入和编辑文本。要将光标移动到特定的行和字符上，请使用<code>Ctrl+_</code>快捷键。你也可以在<code>Enter line number, column number:</code>字段中输入数字，然后按<code>Enter</code>。</p><h2 id="搜索和替换" tabindex="-1"><a class="header-anchor" href="#搜索和替换" aria-hidden="true">#</a> 搜索和替换</h2><p>按下<code>Ctrl+w</code>将会搜索文本，然后键入搜索词，再按<code>Enter</code>。光标将移至第一个匹配项。要移至下一个匹配选项，请按<code>Alt+w</code>。</p><p>如果要搜索并替换，请按<code>Ctrl+\\</code>。输入搜索词和要替换的文本。编辑器将移至第一个匹配项，并询问您是否替换它。<code>Y</code>或<code>N</code>后将移至下一个匹配项。按下<code>A</code>将替换所有匹配项。</p><h2 id="复制-剪切和粘贴" tabindex="-1"><a class="header-anchor" href="#复制-剪切和粘贴" aria-hidden="true">#</a> 复制/剪切和粘贴</h2><p>要选择文本，请将光标移动到文本的开头，然后按<code>Alt+a</code>。这将设置一个选择标记。使用箭头键将光标移动到要选择的文本的末尾。所选文本将突出显示。如果要取消选择，请按<code>Ctrl+6</code>。</p><p>使用<code>Alt+6</code>命令将所选文本复制到剪贴板。<code>Ctrl+k</code>将剪切选定的文本。如果要剪切整行，只需将光标移至该行并按<code>Ctrl+k</code>。您可以通过<code>Ctrl+k</code>多次单击来剪切多行。</p><p>要粘贴文本，请将光标移动到要放置文本的位置，然后按<code>Ctrl+u</code>。</p><h2 id="保存并退出" tabindex="-1"><a class="header-anchor" href="#保存并退出" aria-hidden="true">#</a> 保存并退出</h2><p>要保存对文件所做的更改，请按<code>Ctrl+o</code>。如果该文件尚不存在，则将在保存后立即创建该文件。</p>`,39),h=n("code",null,"Ctrl+x",-1),u={href:"https://www.myfreax.com/create-a-file-in-linux/",target:"_blank",rel:"noopener noreferrer"},p=n("h2",{id:"自定义nano",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义nano","aria-hidden":"true"},"#"),e(),n("strong",null,"自定义Nano")],-1),b=n("code",null,"/etc/nanorc",-1),m=n("code",null,"~/.config/nano/nanorc",-1),v=n("code",null,"~/.nanorc",-1),_={href:"https://www.nano-editor.org/dist/latest/nanorc.5.html",target:"_blank",rel:"noopener noreferrer"},x=d(`<h2 id="语法高亮" tabindex="-1"><a class="header-anchor" href="#语法高亮" aria-hidden="true">#</a> 语法高亮</h2><p>Nano附带了针对大多数流行文件类型的语法高亮规则。在大多数Linux系统上，语法文件存储在<code>/usr/share/nano</code>目录中，并且默认情况下包含在<code>/etc/nanorc</code>配置文件中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>include &quot;/usr/share/nano/*.nanorc&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>/etc/nanorc</p><p>要新文件类型启用语法高亮，最简单方式是将语法高亮规则文件添加到<code>/usr/share/nano</code>目录中。</p><h2 id="将nano设置为默认文本编辑器" tabindex="-1"><a class="header-anchor" href="#将nano设置为默认文本编辑器" aria-hidden="true">#</a> 将Nano设置为默认文本编辑器</h2>`,6),f=n("code",null,"visudo",-1),g={href:"https://www.myfreax.com/scheduling-cron-jobs-with-crontab/",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"crontab",-1),k=n("code",null,"VISUAL",-1),C=n("code",null,"EDITOR",-1),N={href:"https://www.myfreax.com/how-to-set-and-list-environment-variables-in-linux/",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"~/.bashrc",-1),E=n("code",null,"VISUAL",-1),L=n("code",null,"EDITOR",-1),I={href:"https://www.myfreax.com/how-to-set-and-list-environment-variables-in-linux/",target:"_blank",rel:"noopener noreferrer"},A=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export VISUAL=nano
export EDITOR=&quot;$VISUAL&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>~/.bashrc</p><h2 id="基本的用法" tabindex="-1"><a class="header-anchor" href="#基本的用法" aria-hidden="true">#</a> 基本的用法</h2><p>开始使用nano编辑器的最基本步骤是。首先在终端键入<code>nano</code>后接文件名。根据需要编辑文件。使用<code>Ctrl-x</code>命令保存并退出文本编辑器。</p>`,4);function U(V,S){const a=r("ExternalLinkIcon");return c(),t("div",null,[l,n("p",null,[e("如果要退出nano，请按"),h,e("。如果有未保存的更改，系统将询问您是否要保存更改。要保存文件，您必须具有对该文件的写权限。如果要"),n("a",u,[e("创建新文件"),o(a)]),e("，则需要对将要创建文件的目录具有写权限。")]),p,n("p",null,[e("当启动nano时，它将从系统范围内配置文件"),b,e("和用户的配置文件"),m,e("或者"),v,e("中读取其配置参数。用户文件中指定的选项优先于全局选项。访问"),n("a",_,[e("nanorc"),o(a)]),e("页面以获取所有可用选项的完整列表。")]),x,n("p",null,[e("在大多数Linux系统上，默认情况下，诸如"),f,e("和"),n("a",g,[w,e("命令"),o(a)]),e("的默认文本编辑器设置为vi。要使用nano作为默认的文本编辑器，您需要更改"),k,e("和"),C,n("a",N,[e("环境变量"),o(a)]),e("。Bash用户可在"),y,e("文件设置"),E,e("和"),L,n("a",I,[e("环境变量"),o(a)]),e("：")]),A])}const T=s(i,[["render",U],["__file","05.linux-nano.html.vue"]]);export{T as default};