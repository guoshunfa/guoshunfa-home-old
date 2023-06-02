import{_ as e,o as a,c as n,e as r}from"./app.4659d0e0.js";const s={},i=r(`<h1 id="gitlab-gitlabrunner如何更改执行用户" tabindex="-1"><a class="header-anchor" href="#gitlab-gitlabrunner如何更改执行用户" aria-hidden="true">#</a> Gitlab - GitlabRunner如何更改执行用户</h1><p>转载自：http://www.fidding.me/article/111</p><p><code>gitlab-ci</code>的<code>runner</code>默认使用<code>gitlab-runner</code>用户执行操作；</p><p>通过指令<code>ps aux|grep gitlab-runner</code>可以看到：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/bin/gitlab-ci-multi-runner run --working-directory /home/gitlab-runner <span class="token parameter variable">--config</span> /etc/gitlab-runner/config.toml <span class="token parameter variable">--service</span> gitlab-runner <span class="token parameter variable">--syslog</span> <span class="token parameter variable">--user</span> gitlab-runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中：</p><p><code>--working-directory</code>：设置工作目录, 默认是**/home/{执行user}**</p><p><code>--config</code>：设置配置文件目录，默认是**/etc/gitlab-runner/config.toml**</p><p><code>--user</code>：设置执行用户名，默认是<strong>gitlab-runner</strong></p><p>因此想要更改<code>user</code>为<code>root</code>只需要重新设置<code>--user</code>属性即可，步骤如下：</p><ol><li><p>删除<code>gitlab-runner</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> gitlab-runner uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装并设置<code>--user</code>(例如我想设置为root)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gitlab-runner <span class="token function">install</span> --working-directory /home/gitlab-runner <span class="token parameter variable">--user</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>重启<code>gitlab-runner</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> gitlab-runner restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>验证一下：</p><p>再次执行<code>ps aux|grep gitlab-runner</code>会发现<code>--user</code>的用户名已经更换成<code>root</code>了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/bin/gitlab-ci-multi-runner run --working-directory /home/gitlab-runner <span class="token parameter variable">--config</span> /etc/gitlab-runner/config.toml <span class="token parameter variable">--service</span> gitlab-runner <span class="token parameter variable">--syslog</span> <span class="token parameter variable">--user</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此gitlab-runner执行<code>.gitlab-cli.yaml</code>时候便是以<code>root</code>用户去执行操作，再也没有繁琐的权限问题了</p><p>来自<code>root</code>的温馨提示：<strong>能力越大责任越大!</strong></p><blockquote><p>happy coding!</p></blockquote>`,17),o=[i];function l(c,t){return a(),n("div",null,o)}const u=e(s,[["render",l],["__file","51.gitlab-gitlab-runner-change-user.html.vue"]]);export{u as default};