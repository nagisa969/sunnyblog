---
title: "HUGO的JANE主题添加侧边导航栏"
date: 2024-01-09T09:31:38+08:00
lastmod: 2024-01-09T09:31:38+08:00
draft: false
keywords: ["HUGO", "侧边导航栏", "sidebar"]
description: "Hugo的JANE主题是一款基于Hugo框架的主题，用于创建静态网站。之前用JANE主题建好站，总感觉要是有个侧边导航栏就好了，于是就寻思怎么添加一个侧边导航栏。"
tags: ["blog", "technical"]
categories: ["docs"]
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

Hugo的JANE主题是一款基于Hugo框架的主题，用于创建静态网站。之前用JANE主题建好站，总感觉要是有个侧边导航栏就好了，于是就寻思怎么添加一个侧边导航栏。

## 第一步：添加sidebar.html文件 ##

Jane主题本身没有sidebar.html文件的。

找到Jane主题的相关模板文件，在layouts目录下partials里创建一个sidebar.html的文件。

## 第二步：sidebar.html内容 ##
我思量着在sidebar里添加最近文章，分类，标签，及日历四部分，于是在partials里创建一个widgets的文件夹，分别加入archive.html，categories.html，tags.html，calendar.html。剩下的就是编写代码和CSS样式了。

## 第三步：编写代码 ##
剩下的就是编写代码，达成想要的功能。我把写好的代码贴在下面。
### 1. sidebar.html代码 ###
    <nav class="sidebar" id="sidebar" >
      {{ partial "widgets/archive" . }}
      {{ partial "widgets/categories" . }}
      {{ partial "widgets/tags" . }}
      {{ partial "widgets/calendar" . }}
    </nav>


### 2. archive.html代码 ###
    {{ if not (eq (len site.RegularPages) 0) }}
    <p class="asidetitle">
    <a href="{{ $.Site.BaseURL }}post/">{{ .Site.Params.Strings.Archive | default "最近文章" }}</a>
    </p>
    <div class="archiveslist">
    {{- $recent := where .Site.RegularPages "Type" "in" .Site.Params.mainSections }}
    {{- $recent_num := (.Site.Params.widgets.recent_num | default 5) }}
    
    {{- if $recent }}
    <div class="archiveslist widget">
      <h4 class="widget__title">{{ T "recent_title" }}</h4>
      <div class="widget__content">
    <ul class="widget__list">
      {{- range first $recent_num $recent }}
      <time datetime="{{ .Date.Format "2006-01-02" }}" class="archive-post-time">
    {{ .Date.Format (.Site.Params.dateFormatToUse | default "2006-01-02") }}
      </time>
      <li class="widget__item"><a class="widget__link" href="{{ .RelPermalink }}">{{ .Title }}</a></li>
      {{- end }}
    </ul>
      </div>
    </div>
    {{- end }}
    
    </div>
    {{ end }}



### 3. categories.html代码 ###
    {{ if isset .Site.Taxonomies "categories" }}
    {{ if not (eq (len .Site.Taxonomies.categories) 0) }}
    <p class="asidetitle">
      <a href="{{ $.Site.BaseURL }}categories/">{{ .Site.Params.Strings.Categories | default "分类" }}</a>
    </p>
    <div class="categorieslist">
      <ul>
    {{ range $name, $items := .Site.Taxonomies.categories }}
    <li><a href="{{ $.Site.BaseURL }}categories/{{ $name | urlize | lower }}" title="{{ $name }}">{{ $name }}</a></li>
    {{ end }}
      </ul>
    </div>
    {{ end }}
    {{ end }}
    

### 4. tags.html代码 ###
    {{ if isset .Site.Taxonomies "tags" }}
    {{ if not (eq (len .Site.Taxonomies.tags) 0) }}
    <p class="asidetitle">
      <a href="{{ $.Site.BaseURL }}tags/">{{ .Site.Params.Strings.TagCloud | default "标签" }}</a>
    </p>
    <div class="tagcloudlist">
      <div class="tagcloudlist clearfix">
    {{ range $name, $items := .Site.Taxonomies.tags }}
    <a href="{{ $.Site.BaseURL }}tags/{{ $name | urlize | lower  }}" style="font-size: 12px;">{{ $name }}</a>
    {{ end }}
      </div>
    </div>
    {{ end }}
    {{ end }}

### 5. calendar.html代码 ###
日历部分比较困难，我是直接参考这个网站https://codepen.io/ovdojoey/pen/GqRxYQ，做了一些中文变动。

### 6. _sidebar.scss代码 ###

样式文件在主题下assets/sass里。新建一个_sidebar.scss专门编写sidebar的文本样式。上面的代码用到的样式如下

    /* Make nav sticky */
    nav.sidebar {
      position: sticky;
      top: 1rem;
      width: 24em;
    }
    
    .sidebar {
      margin-top: -1em;
      margin-left: 3em;
      margin-right: 3em;
    
      a {
    text-decoration: none;
    border-bottom: 1px solid transparent;
    padding: 0.125em 0;
    // color: #ccc;
    transition: all 50ms ease-in-out; /* 💡 This small transition makes setting of the active state smooth */
      }
    }
    
    
    .asidetitle{
      font-size:1.1em;
      color:#2ca6cb;
      padding:0 0 .3125em 0;
      border-bottom:.1875em solid #ccc;
      font-weight: bold;
      a{
    color:#2ca6cb;
      }
    }
    
    
    .archiveslist {
    	
      background-color: #fff;
      border-radius: 5px;
      ul,
      ol {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: -1em;
    margin-left: 0em;
      }
      li {
    padding-left: 0em;
    border-bottom: 1px dotted #ebebeb;
    .widget__link {
      color: $theme-color;
    }
      }
    }
    
    .categorieslist {
    	
      background-color: #fff;
      border-radius: 5px;
      ul,
      ol {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
      }
      
      li {
    
    background-color: #fff;
    margin-left: .3em;
    margin-right: .3em;
    border: 1px solid #222;
    color: #222;
    float: left;
    line-height: 1.42857143;
    padding: 6px 12px;
    position: relative;
    text-decoration: none;
    margin-bottom: 0.3em;
    margin-top: 0.3em;
      }
    }
    
    .tagcloudlist {
    	
      background-color: #fff;
      border-radius: 5px;
      .clearfix {
    display: inline-block;
    
    a {
      background-color: #fff;
      margin-left: .3em;
      margin-right: .3em;
      border: 1px solid #222;
      color: #222;
      float: left;
      line-height: 1.42857143;
      padding: 6px 12px;
      position: relative;
      text-decoration: none;
      margin-bottom: 0.3em;
      margin-top: 0.3em;
    }
      }
    }
    
    @include max-screen() {
      nav.sidebar {
    display: none;
      }
    }

## 第四步：侧边栏布局 ##
代码样式都写好了，剩下的就是放在网站的哪里。看了一下前端主题显示，觉得放在主页和每个文章页面还有单页面的地方比较好看，其余的页面放侧边栏感觉都不好看。所以就决定在这2个地方加入侧边栏。

### 1. 主页添加侧边栏 ###
主页的文件是index.html，在layouts文件夹下面。稍微修改下代码使板块左右展示，找了一下主题本身有的样式代码，"content-wrapper"可以直接使用，就不用再写代码了。修改后的代码如下：

    {{ define "content" }}
    <div class="content-wrapper">
      <section id="posts" class="posts">
    {{ $pages := .Pages }}
    {{ if .IsHome }}
      {{ $pages = where .Site.RegularPages "Type" "in" site.Params.mainSections }}
    {{ end }}
    {{ $paginator := .Paginate $pages }}
    {{ range $paginator.Pages }}
      {{ .Render "summary" }}
    {{ end }}
      </section>
      
      {{ block "sidebar" . }}{{ partial "sidebar.html" . }}{{ end }}
    
    </div>
    
    
    <!-- pagination -->
    {{ partial "pagination.html" . }}
    
    {{ end }}

这里要在"content-wrapper"里调用_sidebar.scss文件，不然样式侧边栏样式不起效果。content-wrapper在_post.scss里，添加一个调用_sidebar.scss文件的代码。日历的样式代码我是新建了一个scss文件,所以这里也调用下日历的样式文件。

    .content-wrapper {
      display: flex;
      justify-content: center;
    
      @import "_toc";
      @import "_sidebar";
      @import "_calendar";
    }

### 2. 单页面添加侧边栏 ###
剩下的就比较简单了，单页面是single.html文件，在layouts/_default文件夹下面。如下，最后加入{{ partial "sidebar.html" . }}，调用下侧边栏就行了。

    {{ define "content" -}}
      <div class="content-wrapper">
    <!-- TOC -->
    {{ partial "post/toc.html" . }}
    
    <div id="content" class="content">
    </div>
    
    {{ partial "sidebar.html" . }}
    
      </div>
    {{- end }}

## 第五步：运行看效果 ##
一切准备就绪，剩下的就是看下效果了。最终的显示效果就如我现在网站的展示效果了。


## 总结 ##
整体上，这个功能并不复杂，但是一些地方却占用了我不少时间。一开始也不是很懂hugo，后来查资料，看网站，最终还是如愿以偿的添加了侧边导航栏，哈哈。如果你也感兴趣的话，可以参照这些自己加一个侧边栏哦。

