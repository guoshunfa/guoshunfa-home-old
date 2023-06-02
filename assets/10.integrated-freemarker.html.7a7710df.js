import{_ as p,r as e,o,c,a as n,b as s,d as t,e as l}from"./app.4659d0e0.js";const i={},u=n("h1",{id:"集成freemarker-模板引擎",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#集成freemarker-模板引擎","aria-hidden":"true"},"#"),s(" 集成FreeMarker(模板引擎)")],-1),k={href:"https://freemarker.apache.org",target:"_blank",rel:"noopener noreferrer"},r={href:"http://freemarker.foofun.cn",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"本文暂不介绍freemarker api，以案例的方式进行介绍。",-1),m=l(`<p>项目引入freemarker</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.freemarker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>freemarker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.31<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="freemarker使用doc模板" tabindex="-1"><a class="header-anchor" href="#freemarker使用doc模板" aria-hidden="true">#</a> FreeMarker使用doc模板</h2><p>使用doc模版，将数据引入。</p><p>模版示例：</p><p><img src="https://file.pandacode.cn/blog/202208150900661.png" alt="image-20220815090000392"></p><p>结果示例：</p><p><img src="https://file.pandacode.cn/blog/202208150904035.png" alt="image-20220815090416991"></p><ol><li>先准备doc模版文件。将需要放入值的属性加上<code>\${}</code>，如：<code>\${aa}</code>。</li><li>将准备好的doc文件转换成html文件。</li><li>将html文件放入同项目的templates中（如要调整存放文件位置，可以同步把下方工具类里路径也调整了。）</li><li>引入下方工具类。</li><li>使用工具类。</li></ol><blockquote><p>工具类可以根据个人需求进行调整。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 工具类</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ruoyi<span class="token punctuation">.</span>common<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">RuoYiConfig</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ruoyi<span class="token punctuation">.</span>common<span class="token punctuation">.</span>core<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">AjaxResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">freemarker<span class="token punctuation">.</span>template<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">freemarker<span class="token punctuation">.</span>template<span class="token punctuation">.</span></span><span class="token class-name">Template</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">UUID</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WordUtil</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Configuration</span> configuration <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        configuration <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        configuration<span class="token punctuation">.</span><span class="token function">setDefaultEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        configuration<span class="token punctuation">.</span><span class="token function">setClassForTemplateLoading</span><span class="token punctuation">(</span><span class="token class-name">WordUtil</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">&quot;/templates&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">WordUtil</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">AssertionError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AjaxResult</span> <span class="token function">exportMillCertificateWord</span><span class="token punctuation">(</span><span class="token class-name">Map</span> map<span class="token punctuation">,</span> <span class="token class-name">String</span> title<span class="token punctuation">,</span> <span class="token class-name">String</span> ftlFile<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Template</span> freemarkerTemplate <span class="token operator">=</span> configuration<span class="token punctuation">.</span><span class="token function">getTemplate</span><span class="token punctuation">(</span>ftlFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> fileName <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> title <span class="token operator">+</span> <span class="token string">&quot;.doc&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> downloadPath <span class="token operator">=</span> <span class="token class-name">RuoYiConfig</span><span class="token punctuation">.</span><span class="token function">getDownloadPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> fileName<span class="token punctuation">;</span>
        <span class="token class-name">File</span> desc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>downloadPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>desc<span class="token punctuation">.</span><span class="token function">getParentFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            desc<span class="token punctuation">.</span><span class="token function">getParentFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 调用工具类的createDoc方法生成Word文档</span>
        <span class="token function">createDoc</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span>freemarkerTemplate<span class="token punctuation">,</span>downloadPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">File</span> <span class="token function">createDoc</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> dataMap<span class="token punctuation">,</span> <span class="token class-name">Template</span> template<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Template</span> t <span class="token operator">=</span> template<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 这个地方不能使用FileWriter因为需要指定编码类型否则生成的Word文档会因为有无法识别的编码而无法打开</span>
            <span class="token class-name">Writer</span> w <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            t<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
            w<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ex<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> f<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 使用工具类</span>
<span class="token class-name">Map</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;aa&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;bb&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;cc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;dd&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;赵六&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;ee&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;孙七&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token class-name">WordUtil</span><span class="token punctuation">.</span><span class="token function">exportMillCertificateWord</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span><span class="token string">&quot;offer&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;test.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,13),v={href:"https://blog.51cto.com/u_15067246/4534434",target:"_blank",rel:"noopener noreferrer"},g=n("strong",null,"java使用freemarker通过模板导出word(基于若依)",-1);function f(b,w){const a=e("ExternalLinkIcon");return o(),c("div",null,[u,n("blockquote",null,[n("p",null,[n("a",k,[s("官网"),t(a)]),s(" | "),n("a",r,[s("中文官网"),t(a)])]),d]),m,n("ul",null,[n("li",null,[n("a",v,[g,t(a)])])])])}const y=p(i,[["render",f],["__file","10.integrated-freemarker.html.vue"]]);export{y as default};