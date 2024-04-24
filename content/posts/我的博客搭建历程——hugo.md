---
title: "我的博客搭建历程——hugo"
categories: [ "博客" ]
tags: [ "hugo" ]
draft: false
slug: "6"
date: "2022-05-28 15:44:00"
---



继hexo搭建博客之后，完成hugo搭建博客就相对简单多了，因为hugo博客的搭建环境和hexo博客搭建环境是一样的，而且两个博客的部署都是一样的只需要记住一些简单常用的命令即可。

<!-- more -->

如果非要我选择一个博客来当自己的主站使用的话，我应该会选hugo博客，但是对于我来说，hugo博客的致命打击就是主题好看的太少了，吸引我的是他的速度，我前面搭建的hugo博客速度真的是非常快，hexo博客也有他的缺点，比如我这个博客最大的缺点就是css和图片渲染太慢了，打开我的博客第一眼看到的就是我的白板，极其影响浏览博客的观感，而且一些icon有时候也会比较慢，我刚开始时以为是我用阿里云图床慢的原因，后来发现其实这就是hexo博客的缺点。

话不多说了，直接上步骤吧！

## 安装CHOCOLATEY

其实我也不知道这是什么东西，可以去[官网](https://docs.chocolatey.org/en-us/choco/setup#more-install-options)浏览了解，我当时是稀里糊涂的安装的，因为后面安装hugo需要，官网上写了两种安装方式，我不知到这两种有啥区别，我选择简单的一种，打开终端输入

（ Install with cmd.exe）：

```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

## 安装hugo

还是老规矩，自己去[官网](https://gohugo.io/getting-started/installing)浏览，这里我们选择用到前面的**Chocolatey (Windows)**安装，这里也可以用两种方式安装，分别是：

```
choco install hugo -confirm
```

and

```
choco install hugo-extended -confirm
```

这里博主强烈建议**安装第二种方案**，因为刚开始我比较随意选择安装了第一种，后面开始上传博客的时候就出现问题了，就会出现你缺少`hugo-ectended`，没错，就是第二种，后来我安装第二种之后才解决连这个问题。

安装之后建议检查一下版本，看看安装成功没，输入代码：

```
hugo version
```

就会出现下面：

![image-20220528173536193](https://blog.wangyunzi.com/article/image-20220528173536193.png)

这里注意和hexo检查版本的代码不一样。

## 建立博客

为博客创建本地项目：

```
hugo new site blog-name
```

进入博客：

```
cd blog-name
```

生成静态文件public

```
hugo
```

## 更换主题

由于前面我说过hexo主题我很难找到自己喜欢的，但是我认为有几个主题不错，分别是：

| ghcard Ice-Hazymoon/hugo-theme-luna | ghcard reuixiy/hugo-theme-meme |
| ----------------------------------- | ------------------------------ |

自己选择喜欢的去更换即可。

## 发布文章

新建文章

```
hugo new post/我的第一篇文章.md
```

本地预览

```
hugo sever -D
```

文章根目录下生成静态文章：

```
hugo
```

进入`public`文件夹

```
cd public
```

接着输入以下代码：

```
git add . 
git commit -m 'first commit' 
git push -u origin master
```

## 引用图片

一般博客文章引用图片都是需要相对路径，在hugo博客里面的数据都是放在`static`目录下的，所以我们需要将图片放置在这个文件夹下面，步骤如下：

1.在文章目录下，hugo博客一般都是`D:\Blog\wangyunzi\content\posts`这样的目录下面的，然后新建专门放文件图片的文件夹；

2.写文章时本来需要引用这个文件夹的图片的相对路径，比如`![](images/blog.jpg)`，我们需要将它改为`![](/images/blog.jpg)`,这样后面才会图片不会出错；

3.最后将这些你引用过的文章转移到`static`文件夹下面。

最后经过我实践之后发现上面的步骤有点臃肿，固将步骤更改为下：

1.`static`目录下直接新建放置图片的文件夹比如说`D:\Blog\wangyunzi\static\imgs`,要用的图片直接放进去;

2.引用图片的时候直接按照`![](/imgs/blog.jpg)`这样的格式写就可以了。

## 总结

最后关于图片的使用其实一般有两种方式，一种就是上面的直接使用本地图片上传，还有就是会使用图床。在刚开始接触博客的时候我一直坚信本地上传图片是最好的，因为图床不仅折腾起来有点麻烦，最重要的是需要花费money，这对一个贫穷的大学生无疑是一个不小的打击。但是在后面的接触中，我慢慢“真香”了，图床使用起来确实方便了许多，而且移动性比较方便，有时候引用速度比本都引用还要快一点。目前我使用的是阿里云储存oss当做图床，感觉还不错，没有太大的问题。但是可能是我比较放肆的缘故，今天阿里云突然发给我一个**余量预警**，犹如一个晴天霹雳，因为一元钱优惠买的40G储存才几天时间几乎就被我花光了，太难了，以后还是悠着点用吧。

<img src="https://blog.wangyunzi.com/article/image-20220528191205618.png" width="" height="200">



