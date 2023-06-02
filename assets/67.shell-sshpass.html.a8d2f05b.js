import{_ as o,r,o as i,c,a as s,b as a,d as e,e as t}from"./app.4659d0e0.js";const p={},l=t(`<h1 id="shell-sshpass-使用说明" tabindex="-1"><a class="header-anchor" href="#shell-sshpass-使用说明" aria-hidden="true">#</a> Shell - sshpass 使用说明</h1><h2 id="_1-安装sshpass" tabindex="-1"><a class="header-anchor" href="#_1-安装sshpass" aria-hidden="true">#</a> 1. 安装sshpass</h2><blockquote><p><strong>以下是针对mac系统进行安装。</strong></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装脚本</span>
<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>brew list<span class="token operator">|</span><span class="token function">grep</span> sshpass<span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;sshpass&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;sshpass已安装&quot;</span>
<span class="token keyword">else</span> 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;开始安装sshpass&quot;</span>
<span class="token function">wget</span> https://raw.githubusercontent.com/kadwanev/bigboybrew/master/Library/Formula/sshpass.rb
brew <span class="token function">install</span> sshpass.rb
<span class="token function">rm</span> sshpass.rb
<span class="token builtin class-name">echo</span> <span class="token string">&quot;sshpass安装成功&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2. 使用</h2><p><code>sshpass -p [passwd] ssh -p [port] root@192.168.X.X</code></p><h2 id="_3-问题记录" tabindex="-1"><a class="header-anchor" href="#_3-问题记录" aria-hidden="true">#</a> 3. 问题记录</h2>`,7),d={id:"_3-1-sshpass不生效",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#_3-1-sshpass不生效","aria-hidden":"true"},"#",-1),u={href:"https://www.cndargon.com/index.php/archives/77/",target:"_blank",rel:"noopener noreferrer"},b=t(`<p><strong>问题</strong>：执行ssh时，sshpass不生效。</p><p><strong>原因</strong>：第一次连接这个服务器需要进行确认，是否可以进行连接。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>The authenticity of <span class="token function">host</span> <span class="token string">&#39;10.1.1.10 (10.1.1.10)&#39;</span> can&#39;t be established.
ECDSA key fingerprint is 00:00:00.
Are you sure you want to <span class="token builtin class-name">continue</span> connecting <span class="token punctuation">(</span>yes/no<span class="token punctuation">)</span>? 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决思路</strong>：ssh api中有一个参数：<code>-o StrictHostKeyChecking=no</code> ，这个参数可以直接把没有连接过的机器，那个yes/no的部分，直接自动处理。</p><p><strong>解决事例</strong>：<code>sshpass -p [passwd] ssh -p [port] root@192.168.X.X -o StrictHostKeyChecking=no</code></p><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,6),v={href:"https://www.cndargon.com/index.php/archives/77/",target:"_blank",rel:"noopener noreferrer"};function k(m,_){const n=r("ExternalLinkIcon");return i(),c("div",null,[l,s("h3",d,[h,a(" 3.1. "),s("a",u,[a("sshpass不生效"),e(n)])]),b,s("ul",null,[s("li",null,[s("a",v,[a("【Linux】sshpass不生效"),e(n)])])])])}const f=o(p,[["render",k],["__file","67.shell-sshpass.html.vue"]]);export{f as default};