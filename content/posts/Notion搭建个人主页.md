---
title: "Notion搭建个人主页"
categories: [ "生活" ]
tags: [ "notion" ]
draft: false
slug: "62"
date: "2023-04-16 11:01:00"
---


在当今数字化的时代，个人主页成为了展示个人品牌、展示个人技能和个人能力的一个非常好的方式。但是，为了搭建一个完整的个人主页，需要具备很多的技能，例如前端开发、设计和服务器管理等等。如果你想要搭建一个个人主页，但又不想花费太多时间和金钱，那么Notion可能就是你需要的工具。近年来，有不少人通过notion直接搭建个人博客，让notion功能发挥到极致。比如[NotionNext](https://github.com/tangly1024/NotionNext)、[notionic](https://github.com/izuolan/notionic)、[awesome-nextjs-notion-blog](https://github.com/VIkill33/awesome-nextjs-notion-blog)、[nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit)等优秀开源notion项目，这些都能将notion变成个人博客。
Notion是一款强大的笔记应用，如果想直接分享个人网页的一般步骤如下：
1. 创建一个新页面
   首先，在Notion中创建一个新页面。你可以选择使用Notion提供的模板或者从头开始创建。如果你选择使用模板，Notion提供了许多不同类型的模板，例如简历模板、作品集模板、个人主页模板等等。选择一个合适的模板可以大大缩短你的搭建时间。如果你选择从头开始创建，可以按照自己的需求设计页面的布局。
2. 设计页面布局
   接下来，你需要设计页面的布局。Notion提供了许多不同的块类型，包括文本块、图片块、视频块、嵌入式块等等。你可以通过拖拽这些块来组合出你想要的页面布局。你还可以使用Notion提供的样式工具来调整页面的颜色和字体等等。如果你具备设计能力，可以使用Notion来设计出一个非常独特的个人主页。
3. 发布页面
   当你完成了页面的设计之后，你可以点击页面右上角的“发布”按钮来发布你的个人主页。Notion会为你生成一个唯一的URL，你可以将它分享给别人来访问你的个人主页。但是我们会发现

通过最后一个步骤分享URL是一串很长的链接，不容易记住，这样自己的个人主页就不容也被人轻易找到。解决这一问题有很多方案，有很多notion网站可以直接帮你解决这一问题，但大多数都是需要交钱才能自定义notion分享的链接，下面我介绍一种方案通过cloudfare来自定义notion分享链接。

#### 准备一个域名
域名的购买自行选择。

#### 注册/登录Cloudfare
1. 注册/登录[Cloudfare](https://www.cloudflare-cn.com/)。
2. 将上面购买的域名解析到cloudfare。
   ![屏幕截图 2023-04-16 114659.png](https://blog.wangyunzi.com/2023/04/16/1681616913.png)
3. 上面主页找到Workers；
4. 然后创建一个服务。名字自定义，比如我创建的服务`notionworkers`； ![屏幕截图 2023-04-16 115004.png](https://blog.wangyunzi.com/2023/04/16/1681617291.png)   ![screenshot-dash.cloudflare.com-2023.04.16-11_57_02.png](https://blog.wangyunzi.com/2023/04/16/1681617554.png)
6. 创建成功后点击快速编辑。![屏幕截图 2023-04-16 120043.png](https://blog.wangyunzi.com/2023/04/16/1681617670.png)
7. 点击打开该网站：[https://fruitionsite.com/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbnJ5VGstTE1DbHZaeU8zWnhPSkp4LVRTNjdaQXxBQ3Jtc0trZ1Vjck5ibFY4NDB6V3VzLTN6UnFsalhvbVQyM3lMSC1nSVBWSXZoNUw0YXhWUDZKRVVBTEkzUXFaS2pJSFBwYTNkcklxRFlnRkhFM3pGT1QwUldoODNWWHhqVllld1NTVGJXbnhZYmlTRWRtelB6MA&q=https%3A%2F%2Ffruitionsite.com%2F&v=aw0x54PzCaI)；
8. 找到开始的Step 2，输入自己的域名和notion分享链接；![屏幕截图 2023-04-16 121238.png](https://blog.wangyunzi.com/2023/04/16/1681618469.png)
9. 删掉cloudfare里面的代码将上面复制的代码粘贴上去，保存并发布；![屏幕截图 2023-04-16 121633.png](https://blog.wangyunzi.com/2023/04/16/1681618663.png)
10. 在浏览器输入你的域名就可以看到你的notion主页了🙌🌞，我的主页地址：[https://index.wangyunzi.com](https://index.wangyunzi.com)







