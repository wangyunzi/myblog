---
title: "hexo博客错误锦集"
categories: [ "博客" ]
tags: [ "总结","整理" ]
draft: false
slug: "5"
date: "2022-05-28 11:49:00"
---



最近刚把博客搭建成功，自己松了一口气，准备美美的为自己博客送上几篇文章欣赏一番，却不料后面的情况又层出不穷，真就是“一波未平，一波又起”，但咱也算是见过大场面的人了，所以冷静了一下，上网迅速一搜，事情差不多就美满解决了。

<!-- more -->

就像小时候做数学题一样，这些错误经历过了，不懂得记录下来，其实也算是白白经历了一遭倒不如不去经历这一遭。所以为了弥补本人“鱼的记忆”的缺陷，我决定慢慢将这些问题收集起来，并附上我当时成功的解决经验，这只能算作我自己的解决经验，并不能作为一个普遍经验使用，毕竟人类的真理是通过广大人民群众的共同的经历总结出来的，所以我一个也不能算做正确的、唯一的做法。

### github仓库 

![1](https://blog.wangyunzi.com/article/1.png)

---

当我推送到了github上之后，好家伙，给了我这一个警告，于是连忙使用“搜索大法”，最后的解决的方案是：

1.首先将本地博客的文件里面删除`package-lock.json`这个文件夹；

![image-20220528123924449](https://blog.wangyunzi.com/article/image-20220528123924449.png)

2.然后打开`.gitignore`将`package-lock.json`输入进去：

![image-20220528124309643](https://blog.wangyunzi.com/article/image-20220528124309643.png)

3. 最后正常将本地博客push到github仓库，就会发现仓库里面没有了`package-lock.json`
   ![image-20220528124650882](https://blog.wangyunzi.com/article/image-20220528124650882.png)
4. 最后把你删除的`package-lock.json`文件再还原回来就行了，以后正常推送都没问题了。

### 推送时出现问题

![image-20220528122548731](https://blog.wangyunzi.com/article/image-20220528122548731.png)

---

依旧是git出现问题，这个我上网搜了一下原因，但是我也看不懂，有兴趣可以去知乎上看一下这个[回答](https://www.zhihu.com/question/50862500),但是对于我的解决时终端输入这个代码`git config --global core.autocrlf false` ，这是廖雪峰老师的解决方案哦 

### 发布时出现问题 

![2](https://blog.wangyunzi.com/article/2.jpg)

---

不知道什么原因我用`git add ..` 推送就会出现这个问题，但是用`git add .` 就不会出现这个问题，刚开始的解决方案是输入代码 `git master` 还能有用，但是现在还是直接用`git add .` 推送 

### 发布时出现问题 

由于自己没有截图意识所以导致问题没有图片，但是是我一次推送的时候显示`ssh_exchange_identification: Connection closed by remote host`，刚开始上网搜了很多都说是ssh的问题，就是什么公钥、私钥的问题 ，但是我还是没找到具体的解决方案，终于在[知乎](https://www.zhihu.com/question/20023544)上看到另一个解决方案:

我是直接使用第一种解决方法就可以了，因为我时刻都开着代理的，只需要关闭代理就好了 



