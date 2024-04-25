---
title: "Hexo和Notion的神级联动"
categories: [ "博客" ]
tags: [ "Hexo","notion" ]
draft: false
slug: "64"
date: "2023-04-17 14:01:00"
---

### 完成目标

- notion 文章转化为 markdown 格式
- 在 notion 上写博客
- 发布 notion 文章到 hexo

### 项目起源

- 初代：项目由[@](https://github.com/mohuishou/notion-blog-actions)[**Mo Huishou**](https://github.com/mohuishou/notion-blog-actions) 最初创建使用，但只支持阿里云图床，且不支持文章修改。
- 目前：由[**@Doradx**](https://github.com/Doradx/notion2markdown-action) 大佬改造后支持多种图床，且支持文章修改

### 项目教程

- [**Notion-Hexo 联动发布博客 - 自动化部署方案**](https://blog.cuger.cn/p/634642fd/)
- [**使用 Notion Database 管理静态博客文章**](https://lailin.xyz/post/notion-markdown-blog.html)

### 我的个人流程

上面的教程已经够完整了，但是我喜欢自己写一写自己在这个过程中自己操作上的失误，可以选择性浏览。

1. 打开下面链接创建一个 notion 机器人，获取`Secrets`。

[机器人链接][1]

1. 复制模板[Untitled](https://www.notion.so/397943b2d0384e15ba69448900823984) 。
2. 授权数据库，打开复制过的模板，点击右上角三个点，点击下面的添加 connection，加上刚刚的机器人。
3. 在博客仓库  `settings/secrets/actions`中添加环境变量，分别是`NOTION_DATABASE_ID`, `NOTION_TOKEN`和  `PICBED_CONFIG`。下面是大佬的原文：

![](https://blog.wangyunzi.com/2023/123a424123e9d1abfbcb8c03628df90a.png)

1. 在博客中目录`.github/workflows` 新建`deploy.yml`和`notion_sync.yml` 这两个我的代码如下：

```yaml
name: Automatic deployment

on:
  push:
    branches: master
    paths:
      - "source/**"
      - "**.yml"
  workflow_dispatch:
  workflow_call:

env:
  GIT_USER: wangyunzi
  GIT_EMAIL: xueq695@gmail.com

jobs:
  build:
    name: Ubuntu and node ${{ matrix.node_version }} and ${{ matrix.os }}
    runs-on: ubuntu-latest
    strategy:
      matrix:
        os: [ubuntu-latest]
        node_version: [16.19.1]

    steps:
      - name: Checkout blog and theme
        uses: actions/checkout@v3
        with:
          submodules: "recursive"
      - name: Use Node.js ${{ matrix.node_version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node_version }}
      - name: Install dependencies
        run: |
          git pull
      - name: Depoly
        run: |
          git ls-files -z | while read -d '' path; do touch -d "$(git log -1 --format="@%ct" "$path")" "$path"; done
          npm install
          npx hexo clean
          npx hexo douban
          npx hexo g
      - name: Commit & Push
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: Automatic deployment.
```

```yaml
name: Automatic sync pages from notion

on:
  #   push:
  #     branches: master
  workflow_dispatch:
  schedule:
    - cron: "5 */1 * * *"

jobs:
  notionSyncTask:
    name: Ubuntu and node ${{ matrix.node_version }} and ${{ matrix.os }}
    runs-on: ubuntu-latest
    strategy:
      matrix:
        os: [ubuntu-latest]
        node_version: [16.x]
    outputs:
      HAS_CHANGES: ${{ steps.checkStep.outputs.HAS_CHANGES }}

    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node_version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node_version }}
      - name: Convert notion to markdown
        uses: Doradx/notion2markdown-action@latest
        with:
          notion_secret: ${{ secrets.NOTION_TOKEN }} # NOTION授权码
          database_id: ${{ secrets.NOTION_DATABASE_ID }} # Dataset ID
          migrate_image: true
          picBedConfig: ${{ secrets.PICBED_CONFIG}} # picBed的配置，JSON格式，建议为minify JSON, 否则可能报错. 不同图床的配置可参考：https://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html#picbed
          page_output_dir: "source" # page 类文章的输出目录，例如about。
          post_output_dir: "source/_posts/notion" # post 的输出目录，切记当clean_unpublished_post为true时，勿设置为 'source/_posts', 可能会删除你原目录下的文章！！！
          clean_unpublished_post: true # 是否清除未发表的文章，例如之前发表了，你又在notion中给移到草稿箱了.
      - name: Check if there is anything changed
        id: checkStep
        run: |
          if [[ -n "$(git status --porcelain)" ]]; then
            echo "HAS_CHANGES=true" >> $GITHUB_OUTPUT;
            echo "Updates available & redeployment required."
          else
            echo "HAS_CHANGES=false" >> $GITHUB_OUTPUT;
            echo "Nothing to commit & deploy."
          fi
      - name: Commit & Push
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: Automatic sync from notion.
  callDepolyTask:
    name: Call the depoly workflow
    needs: notionSyncTask
    if: ${{ needs.notionSyncTask.outputs.HAS_CHANGES=='true' }}
    uses: wangyunzi/Annie/.github/workflows/hexo_deploy.yml@master # 根据自身Github地址修改即可
```

1. 检查上面两个代码的`node`版本，改成和自己一样的即可。（ps:没有改的话就会出现一点小问题，譬如我）
2. 需要发表的文章放置在待发布这一栏，如果需要及时看到效果手动运行 action，源代码默认是 1 个小时检查一次是否有文章需要发布。

> **这次能够完美完成完全是依靠**[**@Doradx**](https://blog.cuger.cn/)**大佬的倾情帮助，写这篇文章不仅是感谢他改造这样便捷的项目，也是为了感谢大佬的不辞辛苦，一遍遍的指导我完成这些配置。**


  [1]: https://www.notion.so/my-integrations