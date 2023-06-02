import{_ as i,r as e,o as r,c as d,d as a,w as t,a as n,b as s,e as p}from"./app.4659d0e0.js";const u={},k=p(`<h1 id="leetcode第278题-第一个错误的版本" tabindex="-1"><a class="header-anchor" href="#leetcode第278题-第一个错误的版本" aria-hidden="true">#</a> Leetcode第278题 - 第一个错误的版本</h1><h2 id="🌟-题目描述" tabindex="-1"><a class="header-anchor" href="#🌟-题目描述" aria-hidden="true">#</a> 🌟 题目描述</h2><p>你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。</p><p>假设你有 n 个版本<code> [1, 2, ..., n]</code>，你想找出导致之后所有版本出错的第一个错误的版本。</p><p>你可以通过调用 <code>bool isBadVersion(version)</code> 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。</p><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：n = 5, bad = 4
输出：4
解释：
调用 isBadVersion(3) -&gt; false 
调用 isBadVersion(5) -&gt; true 
调用 isBadVersion(4) -&gt; true
所以，4 是第一个错误的版本。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：n = 1, bad = 1
输出：1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><p><code>1 &lt;= bad &lt;= n &lt;= 231 - 1</code></p><h2 id="🐂-解题方法" tabindex="-1"><a class="header-anchor" href="#🐂-解题方法" aria-hidden="true">#</a> 🐂 解题方法</h2><h3 id="_1⃣️-方法一-二分查找" tabindex="-1"><a class="header-anchor" href="#_1⃣️-方法一-二分查找" aria-hidden="true">#</a> 1⃣️ 方法一：二分查找</h3><p>因为题目要求尽量减少调用检查接口的次数，所以不能对每个版本都调用检查接口，而是应该将调用检查接口的次数降到最低。</p><p>注意到一个性质：当一个版本为正确版本，则该版本之前的所有版本均为正确版本；当一个版本为错误版本，则该版本之后的所有版本均为错误版本。我们可以利用这个性质进行二分查找。</p><p>具体地，将左右边界分别初始化为 1 和 n，其中 n 是给定的版本数量。设定左右边界之后，每次我们都依据左右边界找到其中间的版本，检查其是否为正确版本。如果该版本为正确版本，那么第一个错误的版本必然位于该版本的右侧，我们缩紧左边界；否则第一个错误的版本必然位于该版本及该版本的左侧，我们缩紧右边界。</p><p>这样我们每判断一次都可以缩紧一次边界，而每次缩紧时两边界距离将变为原来的一半，因此我们至多只需要缩紧 O(logn) 次。</p>`,17),m=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},`/* The isBadVersion API is defined in the parent class VersionControl.
    boolean isBadVersion(int version); */`),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Solution"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"VersionControl"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"firstBadVersion"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" n"),n("span",{class:"token punctuation"},";"),s(`
      
      `),n("span",{class:"token keyword"},"int"),s(" l "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(` 
      `),n("span",{class:"token keyword"},"int"),s(" r "),n("span",{class:"token operator"},"="),s(" n"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("l "),n("span",{class:"token operator"},"<"),s(" r"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"int"),s(" m "),n("span",{class:"token operator"},"="),s(" l "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("r "),n("span",{class:"token operator"},"-"),s(" l"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"isBadVersion"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
              r `),n("span",{class:"token operator"},"="),s(" m"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
              l `),n("span",{class:"token operator"},"="),s(" m "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" l"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("img",{src:"https://file.pandacode.cn/blog/202201271524785.png",alt:"image-20220127115203101",style:{zoom:"50%"}},null,-1),b=n("p",null,[n("strong",null,"复杂度分析")],-1),h=n("p",null,"时间复杂度： O(logn)，其中 n 是给定版本的数量。 空间复杂度： O(1)。我们只需要常数的空间保存若干变量。",-1),_=n("h2",{id:"🙏-感谢",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🙏-感谢","aria-hidden":"true"},"#"),s(" 🙏 感谢")],-1),g={href:"https://leetcode-cn.com/",target:"_blank",rel:"noopener noreferrer"};function f(x,w){const o=e("code-block"),l=e("code-group"),c=e("ExternalLinkIcon");return r(),d("div",null,[k,a(l,null,{default:t(()=>[a(o,{title:"JAVA 二分查找",active:""},{default:t(()=>[m]),_:1})]),_:1}),v,b,h,_,n("ul",null,[n("li",null,[n("a",g,[s("力扣（LeetCode）"),a(c)])])])])}const V=i(u,[["render",f],["__file","278.html.vue"]]);export{V as default};