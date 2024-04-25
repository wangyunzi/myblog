---
title: "hexo博客安装PWA"
categories: [ "博客" ]
tags: [ "Hexo" ]
draft: false
slug: "54"
date: "2023-04-06 20:15:00"
---

随着移动设备的普及，越来越多的人开始使用移动设备浏览网页。为了提高用户的体验，许多网站都已经实现了PWA（渐进式Web应用程序）功能。
#### 安装hexo-pwa插件
在Hexo博客中，我们可以使用hexo-pwa插件来实现PWA功能。首先，我们需要在命令行中输入以下命令进行安装：

```
npm install hexo-pwa --save
```
注意：这一步我的博客安装之后会报错，所以我最后卸载的，但是很多教程都有些到这一步。

#### 安装hexo-service-worker插件
在终端输入下面代码：
```
npm install hexo-service-worker --save
```

#### 配置manifest.json文件

PWA功能的核心是manifest.json文件。这个文件包含了应用程序的名称、图标、主题颜色等信息，浏览器可以根据这些信息来显示应用程序的图标，以及为其创建应用快捷方式。

在这个文件中，我们需要指定应用程序的各种信息
我们可以在Hexo博客的根目录中创建一个新的文件夹`source/`，并在其中创建一个名为`manifest.json`的文件。
同样可以直接通过工具生成，推荐该网站：[Need help building your headless eCommerce storefront?](https://www.simicart.com/manifest-generator.html/)。
![image.png](https://blog.wangyunzi.com/2023/04/06/1680784854.png)

下面是一个示例（我的示例）：

```
{

    "theme_color": "#f69435",

    "background_color": "#f69435",

    "display": "fullscreen",

    "scope": "/",

    "start_url": "/",

    "name": "\u957f\u8857\u77ed\u68a6",

    "short_name": "\u957f\u8857\u77ed\u68a6",

    "description": "\u6b64\u8def\u5c71\u9ad8\u8def\u8fdc\uff0c\u6211\u53ea\u5269\u53e3\u888b\u73ab\u7470\u4e00\u7bc7",

    "icons": [

        {

            "src": "/img/icon-192x192.png",

            "sizes": "192x192",

            "type": "image/png"

        },

        {

            "src": "/img/icon-256x256.png",

            "sizes": "256x256",

            "type": "image/png"

        },

        {

            "src": "/img/icon-384x384.png",

            "sizes": "384x384",

            "type": "image/png"

        },

        {

            "src": "/img/icon-512x512.png",

            "sizes": "512x512",

            "type": "image/png"

        }

    ]

}
```
其中，`name`指定了应用程序的名称，`short_name`指定了应用程序的短名称，`icons`指定了应用程序的图标，`start_url`指定了应用程序的首页地址，`theme_color`指定了应用程序的主题颜色，`background_color`指定了应用程序的背景颜色，`display`指定了应用程序的展示方式。

#### 配置sw.js文件

PWA功能还需要使用Service Worker（服务工作者）来实现离线缓存等功能。我们可以在Hexo博客的根目录中创建一个新的文件夹`source/sw.js`，并在其中创建一个名为`sw.js`的文件。在这个文件中，我们需要编写一些代码来实现离线缓存等功能。下面是一个示例：

```
const cacheName = 'my-cache';

  

self.addEventListener('install', event => {

    event.waitUntil(

        caches.open(cacheName).then(cache => {

            return cache.addAll([

                '/',

                '/index.html',

                '/css/style.css',

                '/js/script.js',

                '/images/logo.png'

            ]);

        })

    );

});

  

self.addEventListener('fetch', event => {

    event.respondWith(

    caches.match(event.request).then(response => {

    return response || fetch(event.request);

    })

    );

    });

```

其中，`cacheName`指定了缓存的名称，在`install`事件中，我们可以将需要缓存的资源添加到缓存中；在`fetch`事件中，我们可以从缓存中读取资源，如果缓存中没有需要的资源，则从网络上获取。

#### 部署博客并测试

配置完成后，我们可以将博客部署到服务器上，并测试PWA功能是否正常工作。首先，在命令行中输入以下命令来生成静态页面：
```bash
# 清理缓存 / 生成静态页面 / 本地预览
$ hexo clean && hexo g && hexo s
```



#### 参考文章
1. [Hexo博客适配并支持PWA](https://senorui.top/posts/bce7.html)
2. [优化打开博客速度，给您的Hexo添加上PWA吧](https://jaryoung.com/2022/02/03/Add-PWA-to-hexo-in-fluid-theme/#)
3. [让PWA支持HEXO](https://blog.naaln.com/2017/09/hexo-with-pwa/)
4. [给 Hexo 博客添加 PWA 支持_](https://hexo.fluid-dev.com/posts/hexo-pwa/)
5. [Hexo博客配置PWA](http://syean.cn/2018/12/17/hexo%E5%8D%9A%E5%AE%A2%E9%85%8D%E7%BD%AEPWA/#%E5%AE%89%E8%A3%85hexo-pwa)
6. [Need help building your headless eCommerce storefront?](https://www.simicart.com/manifest-generator.html/)
7. [让hexo支持pwa](https://www.bboy.app/2020/01/11/%E8%AE%A9hexo%E6%94%AF%E6%8C%81pwa/)
8. [【Hexo】hexo 博客添加到桌面应用程序](https://www.mobaijun.com/posts/1630447354.html)



