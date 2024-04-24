---
title: "docker项目记录"
categories: [ "博客" ]
tags: [ "docker" ]
draft: false
slug: "113"
date: "2024-04-15 16:10:00"
---

### 2024/4/17 问题再现
&emsp;&emsp;执行`sudo docker compose up -d`命令的时候出现这个报错：
```
WARN[0000] /www/wwwroot/memos.wangyunzi.com/docker-compose.yml: `version` is obsolete 
```
&emsp;&emsp;这个是说版本过期，因为最新版本的docker不支持版本这种（其实我也是因为一个报错才知道的，所以compose里面的代码第一样关于version可以注释掉的，等我找到这个GitHub网页在说）。
### 2024/4/16 
&emsp;&emsp;因为昨天关闭防火墙忘记重新打开了，所以今天的好多个docker安装项目都出现问题，评论通知收不到，freshrss导入不了文档，询问杜老师才知道“Docker是需要防火墙转发数据的”，所以记录一下自己的一个小失误。
### 2024/4/15
&emsp;&emsp;最近因为买了服务器之后比较兴奋，把几个自己没有尝试的过的项目都安装了一遍，包括Alist、FreshRSS、Artalk、等，因为前面都是随意安装，比如docker一键安装之类的，所以导致文件夹部分比较混乱，加上自己不熟悉docker所以出现了很多bugs，比如因为没有提前关闭镜像导致升级新docker之后镜像一直删不掉，还有就是莫名奇妙删掉了好几个文档，统一docker安装方式，采用docker-compose方式，方便整理。因为这些项目都需要设置反代理，所以首先新建网站xxx.wangyunzi.com，这时候就会有一个网站目录，接下来所有的操作都会在这个网站目录下进行。

#### docker升级步骤
&emsp;&emsp;直接参考这篇文章，[更新docker到最新版本](https://weiliang-ms.github.io/wl-awesome/2.%E5%AE%B9%E5%99%A8/%E8%BF%90%E8%A1%8C%E6%97%B6/docker/%E5%AE%89%E5%85%A8%E5%8A%A0%E5%9B%BA/%E4%B8%BB%E6%9C%BA%E5%AE%89%E5%85%A8%E9%85%8D%E7%BD%AE/03%E6%9B%B4%E6%96%B0Docker%E5%88%B0%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC.html)，前面随便找了一篇教程安装docker就开始乱弄，教程如下
##### 老的教程
直接脚本安装，安装命令如下：
```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
##### 新教程
1. 较旧的 Docker 版本称为 docker 或 docker-engine 。如果已安装这些程序，请卸载它们以及相关的依赖项。
```
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```
2. 按照这个教程吧：[菜鸟教程](https://www.runoob.com/docker/centos-docker-install.html)
```
##检查docker版本
docker version  
#安装一些必要的系统工具
yum -y install yum-utils device-mapper-persistent-data lvm2
#添加软件源信息
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
#更新 yum 缓存
yum makecache fast
#安装docker-ce
yum -y install docker-ce
# 或更新
yum -y update docker-ce
```

#### Alist安装

1. 新建`docker-compose.yml`文件，输入下面的代码：
```
version: '3.3'
services:
    alist:
        image: 'xhofe/alist:latest'
        container_name: alist
        volumes:
            - '/etc/alist:/opt/alist/data'
        ports:
            - '5244:5244'
        environment:
            - PUID=0
            - PGID=0
            - UMASK=022
        restart: unless-stopped
```

2. 接着打开终端，输入下面代码部署：
```
sudo docker compose up -d
```

3. 因为上面的那个代码alist路径不是保存到当前目录，所以我希望数据在我所熟悉的文件夹内，改之后${PWD}/alist发现报错，也不知道为什么${PWD}不是保存在当前路径，一直报错`WARN[0000] The "PWD" variable is not set. Defaulting to a blank string. `最后还是改成了下面的代码，根据这个[Docker compose won't find $PWD environment variable](https://stackoverflow.com/questions/41948232/docker-compose-wont-find-pwd-environment-variable)找到了答案，话说真的好爱这个网站，什么问题都能在这上面找到答案：
```
# version: "3.8"

services:

  # Alist 的官方部署文档: https://alist-doc.nn.ci/en/docs/install/docker/
  # docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:latest
  alist:
    image: xhofe/alist:latest
    container_name: alist
    ports:
      - "5244:5244"
    restart: always
    volumes:
      - ".:/opt/alist/data"
```


#### Artalk安装
1. 新建`docker-compose.yml`文件，输入下面的代码：
```
version: '3.5'
services:
  artalk:
    container_name: artalk
    image: artalk/artalk-go
    restart: always
    ports:
      - 8080:23366
    volumes:
      - ./data:/data
```

2. 执行命令创建容器：
```
docker-compose up -d
```

#### Freshrss安装
1. 新建`docker-compose.yml`文件，输入下面的代码，记得更改自己的端口（我的是8282）：
```
version: "3"

services:
  freshrss:
    image: freshrss/freshrss:latest
    container_name: freshrss
    hostname: freshrss-app
    restart: always
    ports:
      - '8282:80'
    volumes:
      - ./data:/var/www/FreshRSS/data
      - ./extensions:/var/www/FreshRSS/extensions
    environment:
      CRON_MIN: '*/20' # 刷新频率
      TZ: Asia/Shanghai

```
2. 按道理说第二步应该执行命令创建镜像，但是按照这篇教程———[突破信息茧房，拥抱内容自由：使用宝塔面板docker-compose十分钟极速部署FreshRSS，开启自主阅读新篇章](https://liuyude.com/archives/break-out-information-cocoon-embrace-content-freedom-deploy-freshrss-in-ten-minutes-with-pagoda-panel-docker-compose-open-new-chapter-in-autonomous.html)，按照他的操作也可以的。但是应该也可以一步创建命令执行：`docker-compose up -d`;
3. 这过程中我找到一篇不错的教程——[shRSS如何持久化配置？](https://meta.appinn.net/t/topic/48598)，这篇教程里的答案很有参考价值，做法就是创建文件后输入下面的代码：
```
version: "2.4"

services:
  freshrss-db:
    image: postgres:15
    container_name: freshrss-db
    hostname: freshrss-db
    restart: unless-stopped
    logging:
      options:
        max-size: 10m
    volumes:
      - ./freshrss-db:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: ${DB_BASE:-freshrss}
      POSTGRES_USER: ${DB_USER:-freshrss}
      POSTGRES_PASSWORD: ${DB_PASSWORD:-freshrss}
    #command:
      # Examples of PostgreSQL tuning.
      # https://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server
      # When in doubt, skip and stick to default PostgreSQL settings.
    #  - -c
    #  - shared_buffers=1GB
    #  - -c
    #  - work_mem=32MB

  freshrss-app:
    image: freshrss/freshrss:latest
    container_name: freshrss-app
    hostname: freshrss-app
    restart: unless-stopped
    ports:
      - "8080:80"
    depends_on:
      - freshrss-db
    logging:
      options:
        max-size: 10m
    volumes:
      - ./data:/var/www/FreshRSS/data
      - ./extensions:/var/www/FreshRSS/extensions
    environment:
      TZ: Asia/Shanghai
      CRON_MIN: '*/45'
    #  TRUSTED_PROXY: 172.16.0.1/12 192.168.0.1/16

volumes:
  freshrss-db:
  data:
  extensions:
```
然后执行：`sudo docker compose up -d`

#### Memos安装
新建`docker-compose.yml`文件，然后输入以下代码：
```
version: "3"
services:
  memos:
    image: neosmemo/memos:latest
    container_name: memeos
    hostname: memeos
    ports:
      - "5230:5230"
    volumes:
      - ./memos/.memos/:/var/opt/memos
    restart: always

```

