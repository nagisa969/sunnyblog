---
title: "如何使用 GitHub Pages 和 Hugo 搭建个人网站"
date: 2023-12-22T08:31:38+08:00
lastmod: 2023-12-22T08:31:38+08:00
draft: false
keywords: []
description: "在当今数字化的时代，拥有个人网站成为展示个人品牌、分享知识和展示作品的重要途径之一。GitHub Pages 和 Hugo 是两个流行的工具，可以帮助你快速搭建并轻松管理个人网站。本文将详细介绍如何使用 GitHub Pages 和 Hugo 这两个工具建立一个专业而现代的个人网站。"
tags: ["blog"]
categories: ["技术文档"]
author: "sunny"

# weight: 1

# You can also close(false) or open(true) something for this content.
# P.S. comment can only be closed
# comment: false
# toc: false

# You can also define another contentCopyright. e.g. contentCopyright: "This is another copyright."
# contentCopyright: '<a href="https://github.com/gohugoio/hugoBasicExample" rel="noopener" target="_blank">See origin</a>'
# reward: false
# mathjax: true
# menu:
#   main:
#     parent: "docs"
#     weight: 3
---

在当今数字化的时代，拥有个人网站成为展示个人品牌、分享知识和展示作品的重要途径之一。GitHub Pages 和 Hugo 是两个流行的工具，可以帮助你快速搭建并轻松管理个人网站。本文将详细介绍如何使用 GitHub Pages 和 Hugo 这两个工具建立一个专业而现代的个人网站。

## 1. 准备工作 ##
在开始之前，确保你已经完成以下准备工作：

### 1.1 GitHub 账号 ###
如果你没有 GitHub 账号，首先需要在 GitHub 官网 注册一个账号。

### 1.2 安装 Git ###
确保你的电脑上已经安装了 Git。你可以在 Git 官网 上找到安装说明。

### 1.3 安装 Hugo ###
Hugo 是一个快速的静态网站生成器。你可以在 Hugo 官网 上找到安装说明。安装完成后，你可以在终端或命令提示符中运行 **hugo version** 来确认安装是否成功。

## 2. 创建 GitHub 仓库 ##
在 GitHub 上创建一个新的仓库用于托管你的网站。按照以下步骤进行：

### 2.1 登录 GitHub ###
使用你的 GitHub 账号登录。

### 2.2 创建新仓库 ###
点击 GitHub 页面右上角的加号（+）按钮，选择 "New repository"。

### 2.3 填写仓库信息 ###
填写仓库名称，选择是否将仓库设为私有（如果是个人网站，可以选择公开），然后点击 "Create repository"。

## 3. 使用 Hugo 初始化网站 ##
现在，你已经有了一个 GitHub 仓库，接下来我们将使用 Hugo 初始化网站。

### 3.1 在本地创建 Hugo 网站 ###
在终端或命令提示符中，进入你想要创建网站的目录，然后运行以下命令：

    hugo new site your-website

将 your-website 替换为你的网站名称。

### 3.2 选择主题 ###
Hugo 支持各种主题，你可以在 Hugo 官方主题库 中选择一个喜欢的主题。将主题克隆到你的网站目录：

    cd your-website
     git init
     git submodule add https://github.com/your-favorite-theme.git themes/your-theme-name

### 3.3 配置 Hugo 网站 ###
在网站目录中，你将找到一个名为 config.toml（或 config.yaml 或 config.json）的文件，用于配置你的网站。根据你选择的主题和个人偏好进行相应配置，比如网站标题、描述、语言等。

## 4. 创建第一篇文章 ##
使用 Hugo 创建一篇文章非常简单。在网站目录中运行以下命令：

    hugo new posts/my-first-post.md

这将在 content/posts 目录下创建一个名为 my-first-post.md 的 Markdown 文件，用于编写你的第一篇文章。

## 5. 编写和编辑文章 ##
使用你喜欢的文本编辑器打开 Markdown 文件，开始编写文章。你可以使用 Markdown 语法来添加标题、段落、链接、图片等。

## 6. 预览网站 ##
在终端或命令提示符中运行以下命令：

    hugo server -D

这将启动 Hugo 的本地服务器，并在浏览器中输入 http://localhost:1313 查看你的网站。实时预览能够帮助你调整和修改网站内容。

## 7. 将网站推送到 GitHub ##
当你对网站满意并准备发布时，将它推送到 GitHub。按照以下步骤进行：

### 7.1 提交修改 ###
在终端或命令提示符中运行以下命令：

    git add .
     git commit -m "Initial commit"

### 7.2 推送到 GitHub ###

    git remote add origin https://github.com/your-username/your-website.git
     git push -u origin main

将 your-username 和 your-website 替换为你的 GitHub 用户名和仓库名称。

## 8. 启用 GitHub Pages ##
最后一步是启用 GitHub Pages，使你的网站能够通过 GitHub 提供的域名访问。

### 8.1 进入仓库设置 ###
进入你的 GitHub 仓库，点击上方菜单中的 "Settings"。

### 8.2 找到 GitHub Pages 设置 ###
在设置页面中，向下滚动找到 "GitHub Pages" 部分。

### 8.3 选择分支 ###
在 "Source" 下拉菜单中选择 master branch（或 main 分支，取决于你的设置）。

### 8.4 保存设置 ###
保存设置后，GitHub Pages 将为你的仓库生成一个网址，你可以通过这个网址访问你的个人网站。

恭喜，你已经成功使用 GitHub Pages 和 Hugo 搭建了个人网站！现在，你可以继续添加文章、调整样式，使你的网站更加个性化。希望你在搭建个人网站的过程中能够享受到技术带来的乐趣！