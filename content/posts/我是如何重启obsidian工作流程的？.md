---
title: "我是如何重启obsidian工作流程的？"
categories: [ "生活" ]
tags: [ "obsidian" ]
draft: false
slug: "115"
date: "2024-04-19 23:45:00"
---

&emsp;&emsp;前几天偶然间打开了我的obsidian临时保存文件，突然发现一个主题（也可以是插件）[LifeOs](https://github.com/quanru/obsidian-example-lifeos/tree/chinese-version)，在一篇文章评论区了解到这个插件可以做到同步memos到obsidian本地，一下就心动不已，在阅读了作者的模板库之后认识到这个obsidian的工作流程的概念很不错，但是自己使用了半天之后发现这个流程还是不太适合我自己的工作流程，遂放弃只保留memos这一个功能，接下来理所当然的想自己打造一个obsidian库，网上也搜索到了很多的教程最终形成了自己的主流意识。
&emsp;&emsp;首先，厘清为什么使用obsidian。想必所有人选择obsidian而不是notion的一个重要原因在于obsidian本地保存、Markdown文档、迁移便捷这几个有点，我也不例外。所以我谨记obsidian的一个优点：迁移便捷，于是首先尽量控制obsidian插件使用，对于增加插件十分谨慎，分为两个方面：一方面是obsidian管理展示方面，比如obsidian主页设置，以及整个库的数据获取展示，这些尽量使用插件来解决痛点，虽然不是一个外观主义者，但一个简洁、漂亮的obsidian仓库能让你写笔记的时候心情舒畅，同样也能调动起你使用obsidian记录的积极性；另外一个方面就是我们的核心文件，我称之为“思想文件”，比如现在用obsidian写了一篇博文，这篇博文虽然我还是要复制到typecho发布，但是这篇博文不会使用任何一个插件，这就是一个纯Markdown文件，迁移的时候直接迁移即可。
&emsp;&emsp;其次，明确自己平时的思维方式流程。比如我，前面慢慢放弃使用obsidian的重原因在于我的工作流程一塌糊涂，我很多时候新建一个文件不知道如何归档，加上自己平时也没有多少需要记笔记的地方，所以也懒得打开obsidian了。了解自己的思维习惯尤其重要，平时网上浏览一些教程以及好文章经常不知道保存在哪，到后面想要打开回顾的时候又要开始辛苦的寻找，这就是平时我面临的一个困境，现在可以通过[obsidian-web](https://github.com/coddingtonbear/obsidian-web)这个浏览器插件就可以解决这一问题，这个插件可以单纯保存文档连接，也可以直接保存文档内容，十分优秀，这样就可以将教程网站保存到obsidian，然后制作一个表格既可以随时浏览自己的资源了。还有我最开始提及的memos to obsidian，这个是我在这个库当中最满意的一个地方，obsidian只适合在电脑端，这对于移动随时随地发布爱好者不是很友好，memos就很好解决这一点。

![S2YlEf](https://blog.wangyunzi.com/2024/04/S2YlEf.jpg)

&emsp;&emsp;最后，不要追求完美，什么都要求完美只会害了你。记笔记最重要的一定要开始写，当你开始记下来这件事情就完成了80%，至于这个笔记归属于什么类别，应该以什么样的姿态保存到你的笔记库里面，这大可不必纠结太多，若是心情好你还可以慢慢分门别类，做一些花样来玩玩，愉悦了心情又慢慢在构筑你的电子大脑，说到这个，我在搜索很多obsidian的教程的时候都会看到很多夸张的标题比如：利用obsidian构筑你的第二大脑，现在我仔细思考了一番，我认为这这样的说法其实并不太正确，认真的来说，如果你在现实中看了一本书，并做好了一本纸质笔记，你动笔了，这才是真正构筑你的第二大脑，至于使用笔记软件这种之类的，其实我更愿意称之为“电子大脑”，我看到很多人的笔记都做的很多，而且也做得很好看，但是我很疑惑的是真正的进入脑子思考了吗？当然，也会真的有人通过做电子笔记这种受益良多，但对于这么多年来一直坚持完成电子笔记的我来说并不是（好像偏题）。所以，不同于很多的主流工作流程，我给自己的文档就两类：一类是我固定能归档的，一类是我平时输入了之后根本不知道放入什么文件夹的，以前的我因为自己的我文档太多太杂了就慢慢不知道如何管理了，现在我希望精简一下文档，简化流程就可以轻松开始笔记，而且不用担心自己的笔记归类，因为未归档也算是一个归档了吧。至于我想要打开就输入内容就可以使用最开始提及的[LifeOs](https://github.com/quanru/obsidian-example-lifeos/tree/chinese-version)，这个插件可以再左上角显示一个日历，直接点击当天既可以建立当天日记文档，里面可以同步你当天的memos，还可以同步你今天收藏了哪些资源，最后就是你自己每天打开想写什么，比如我今天就在我的记录里面写下了这篇博文。

![u6ty0b](https://blog.wangyunzi.com/2024/04/u6ty0b.jpg)

&emsp;&emsp;搭建了obsidian之后有几个插件使用下来确实不错，比如我愿称之为obsidian王牌插件之[Dataview](https://github.com/blacksmithgu/obsidian-dataview),学习一点dataview语法就可以千变万化，我用来管理我的读书笔记之类的（如图）。以及搭配dataview使用的Templetes等著名插件，如果要实现我下图的图书管理也可以使用[obsidian-douban](https://github.com/Wanxp/obsidian-douban)插件，直接获取豆瓣读书，一步到位，也可以同步你的豆瓣数据，包括音乐、电影、书单等，还可以实现自己主页的标签云（[obsidian-charts-view](https://github.com/caronchen/obsidian-chartsview-plugin)插件）等。至于obsidian备份、同步问题我选择[obsidian-git](https://github.com/denolehov/obsidian-git)到GitHub备份，用[remotely-save](https://github.com/remotely-save/remotely-save)个人onedrive同步到手机端浏览，本地文件则保存在onedrive网盘。
![P5mjz2](https://blog.wangyunzi.com/2024/04/P5mjz2.jpg)
![zxFTR6](https://blog.wangyunzi.com/2024/04/zxFTR6.jpg)