import{_ as n,o as s,c as e,d as a}from"./app-04d7a41c.js";const i={},l=a(`<h1 id="错误" tabindex="-1"><a class="header-anchor" href="#错误" aria-hidden="true">#</a> 错误</h1><ul><li>The process &#39;/usr/bin/git&#39; failed with exit code 128</li><li>There was an error initializing the repository: The process &#39;/usr/bin/git&#39; failed with exit code 129 ❌</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Simple workflow for deploying static content to GitHub Pages</span>
name: Deploy static content to Pages

on:
  <span class="token comment"># Runs on pushes targeting the default branch</span>
  push:
    branches: <span class="token punctuation">[</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">]</span>

  <span class="token comment"># Allows you to run this workflow manually from the Actions tab</span>
  <span class="token comment"># workflow_dispatch:</span>

<span class="token comment"># Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages</span>
<span class="token comment"># permissions:</span>
<span class="token comment">#   contents: read</span>
<span class="token comment">#   pages: write</span>
<span class="token comment">#   id-token: write</span>

<span class="token comment"># Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.</span>
<span class="token comment"># However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.</span>
<span class="token comment"># concurrency:</span>
<span class="token comment">#   group: &quot;pages&quot;</span>
<span class="token comment">#   cancel-in-progress: false</span>

jobs:
  <span class="token comment"># Single deploy job since we&#39;re just deploying</span>
  deploy:
    <span class="token comment"># environment:</span>
    <span class="token comment">#   name: github-pages</span>
    <span class="token comment">#   url: \${{ steps.deployment.outputs.page_url }}</span>
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Install Dependencies
        run: <span class="token function">npm</span> <span class="token function">install</span> vuepress@next <span class="token parameter variable">-D</span>
      - name: Build
        run: <span class="token function">npm</span> run build
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with: 
          ssh-key: <span class="token variable">\${{ secrets.SSH }</span><span class="token punctuation">}</span> <span class="token comment"># GitHub token，用于访问仓库和部署</span>
          branch: gh-pages <span class="token comment"># 部署到 gh-pages 分支</span>
          clean: <span class="token boolean">true</span> <span class="token comment"># 清空 gh-pages 分支上的旧文件</span>
          folder: docs/.vuepress/dist <span class="token comment"># 部署 dist 文件夹</span>
          <span class="token comment"># dir: docs/.vuepress/dist # 指定要部署的目录</span>
      

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[l];function c(o,d){return s(),e("div",null,t)}const m=n(i,[["render",c],["__file","error.html.vue"]]);export{m as default};
