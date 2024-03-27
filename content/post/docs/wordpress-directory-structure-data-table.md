---
title: "wordpress目录结构，数据表 "
date: 2024-03-15T09:31:38+08:00
lastmod: 2024-03-15T09:31:38+08:00
draft: false
keywords: []
description: "wordpress目录结构，数据表详细列表"
tags: ["blog"]
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

## 1，Wordpress目录结构 ##
### 根目录 ###
1. index.php：wordpress核心索引文件，即博客输出文件。
1. license.txt：WordPress GPL许可证文件。
1. my-hacks.php：定义了博客输出之前处理的追加程序。默认安装中并没有这个文件，但如果存在，它就会被管理页面引用。
1. readme.html：WordPress安装导言。
1. wp-atom.php：输出Atom信息聚合内容。
1. wp-blog-header.php：根据博客参数定义博客页面显示内容。
1. wp-cron.php
1. wp-comments-post.php：接收评论，并把其添加到数据库。
1. wp-commentsrss2.php：用来生成日志评论的RSS2信息聚合内容。
1. wp-config-sample.php：把WordPress连接到MySQL数据库的示例配置文件。
1. wp-config.php：这是真正把WordPress连接到MySQL数据库的配置文件。默认安装中虽不包括它，但由于WordPress运行需要这一文件，因此，用户需要编辑这个文件以更改相关设置。
1. wp-feed.php：根据请求定义feed类型并其返回feed请求文件。
1. wp-links-opml.php：生成OPML格式的链接(通过WordPress管理菜单添加）列表。
1. wp-login.php：定义注册用户的登陆页面。
1. wp-mail.php：用来获取通过邮件提交的博文。这个文件的URL通常被添加到cron任务中，这样cron就会定期检索文件并接收邮件日志。
1. wp-pass.php：审核受密码保护文章的密码并显示被保护文章。
1. wp-rdf.php：生成RDF信息聚合内容。
1. wp-register.php：允许新用户通过联机表单注册用户名。
1. wp-rss.php：生成RSS信息聚合内容。
1. wp-rss2.php：生成RSS2信息聚合内容。
1. wp-settings.php：运行执行前的例行程序，包括检查安装是否正确，使用辅助函数，应用用户
1. wp-trackback.php：处理trackback请求。
1. wp.php：显示博客日志的简单模板。并没有什么神奇之处，但包括了部分index.php内容。
1. xmlrpc.php：处理xmlrpc请求。用户无需通过内置的网络管理界面就可发布文章。
1. wp-activate.php 处理登录信息
### wp-admin目录 ###
1. wp-admin/admin.php：管理文件的核心文件。用来连接数据库，整合动态菜单数据，显示非核心控制页面等。
1. wp-admin/admin-db.php
1. wp-admin/admin-footer.php：定义所有管理控制台的页脚。
1. wp-admin/admin-functions.php：定义了管理控制台使用的多种函数。   
1. wp-admin/admin- header.php：定义了管理控制台的上半部分内容，包括菜单逻辑 （menu logic）的 menu-header.php文件。
1. wp-admin/bookmarklet.php：使用书签功能时，定义弹出页面。撰写日志时使用默认的edit-form.php文件。
1. wp-admin/categories.php：定义管理页面的类别管理。参考: Manage – Categories
1. wp-admin/cat-js.php
1. wp-admin/edit.php：定义管理页面的日志管理。参考: Manage – Posts
1. wp-admin/edit-comments.php：定义管理页面的评论管理。参考: Manage – Comments
1. wp-admin/edit-form-advanced.php：定义管理页面的日志高级编辑形式管理，包括post.php。参考: Write – Write Post – Advanced
1. wp-admin/edit-form.php：定义管理页面的日志简单编辑形式管理，包括post.php。参考: Write – Write Post
1. wp-admin/edit-form-comment.php：编辑特定日志评论。
1. wp-admin/edit-form-ajax-cat.php
1. wp-admin/edit-link-form.php
1. wp-admin/edit-page-form.php：定义管理模块页面的页面编辑，包括post.php和page-new.php。参考: Write – Write Page
1. wp-admin/edit-pages.php：定义管理模块页面的页面管理。参考: Manage – Pages
1. wp-admin/execute-pings.php
1. wp-admin/import.php
1. wp-admin/index.php：默认管理页面。根据用户请求显示相应的页面。
1. wp-admin/inline-uploading.php
1. wp-admin/install-helper.php：定义数据库维护函数，包括popular-in-plugins maybe_create_table() 和maybe_add_column()。
1. wp-admin/install.php：安装WordPress。
1. wp-admin/link-add.php：链接添加。参考: Links – Add Link
1. wp-admin/link-categories.php：链接分类管理。参考: Links – Link Categories
1. wp-admin/link-import.php：导入链接。参考: Links – Import Links
1. wp-admin/link-manager.php：链接管理。参考: Links – Manage Links
1. wp-admin/link-parse-opml.ph：导入链接时，用来解析OPML文件。
1. wp-admin/list-manipulation.js
1. wp-admin/list-manipulation.php
1. wp-admin/menu-header.php：用于在管理界面显示菜单。
1. wp-admin/menu.php：定义了默认管理菜单结构。
1. wp-admin/moderation.php：定义了评论审核函数。
1. wp-admin/options.php：升级后，用来更改所有设置。
1. wp-admin/options-discussion.php：管理评论和trackback相关选项。参考: Options – Discussion
1. wp-admin/options-general.php：管理基本配置选项。参考: Options – General
1. wp-admin/options-head.php
1. wp-admin/options-misc.php：设置文件上传，链接跟踪，自定义”hacks”等相关选项。参考：Options – Miscellaneous
1. wp-admin/options-permalink.php：管理永久链接选项。参考: Options – Permalinks
1. wp-admin/options-reading.php：设置如何把网站信息发送到读者浏览器或其它应用程序。参考: Options – Reading
1. wp-admin/options-writing.php：管理日志撰写界面。参考:Options – Writing
1. wp-admin/page-new.php：创建新页面。
1. wp-admin/plugin-editor.php：编辑插件文件。
1. wp-admin/plugins.php：管理插件。
1. wp-admin/post.php：创建新日志。
1. wp-admin/profile-update.php
1. wp-admin/profile.php：管理个人资料或配置。
1. wp-admin/setup-config.php：安装时，用来创建wp-config.php文件。
1. wp-admin/sidebar.php
1. wp-admin/templates.php：编辑服务器可写文件。
1. wp-admin/theme-editor.php：编辑特定主题中的文件。
1. wp-admin/themes.php：管理主题。
1. wp-admin/update-links.php
1. wp-admin/upgrade-functions.php：定义了版本升级函数。
1. wp-admin/upgrade-schema.php：定义了升级中使用的默认表格结构和选项。
1. wp-admin/upgrade.php：版本升级。
1. wp-admin/user-edit.php：编辑用户。
1. wp-admin/users.php：管理用户。
1. wp-admin/wp-admin.css：定义了管理控制台的默认样式表。
1. wp-admin/xfn.js
### wp-includes目录 ###
1. wp-includes/cache.php
1. wp-includes/capabilities.php
1. wp-includes/class-IXR.php：Incutio XML-RPC库。包括了 XML RPC支持函数。由http://scripts.incutio.com/xmlrpc/提供支持。
1. wp-includes/classes.php：包括了基本的类，如核心文章提取机制WP_Query和改写管理WP_Rewrite。
1. wp-includes/class-pop3.php：包括了支持使用POP邮箱的类。可供wp-mail.php 使用。
1. wp-includes/class-snoopy.php：Snoopy是一个PHP类，用来模仿Web浏览器的功能，它能自动完成检索网页和发送表单的任务。
1. wp-includes/comment-functions.php
1. wp-includes/default-filters.php
1. wp-includes/feed-functions.php
1. wp-includes/functions-compat.php：即新版本PHP中用来支持老版本PHP的函数文件。
1. wp-includes/functions-formatting.php：用于清理XHTML和用特定字符集正确格式化文本。
1. wp-includes/functions-post.php：定义了在数据库中管理日志，查询用户权限，提取和撰写评论等函数。
1. wp-includes/functions.php：包含许多重要的支持函数，它是WordPress中最大的文件，函数数量几乎是第二大文件的两倍。
1. wp-includes/gettext.php：PHP-gettext GPL 翻译库组成部分。
1. wp-includes/kses.php：用来渲染和过滤日志或评论中的HTML。
1. wp-includes/links.php：用来管理和使用WordPress的链接功能。
1. wp-includes/locale.php：用来替代默认的星期和月份值。
1. wp-includes/pluggable-functions.php
1. wp-includes/registration-functions.php
1. wp-includes/rss-functions.php
1. wp-includes/streams.php：定义了包装文件流和字符流的类。
1. wp-includes/template-functions-author.php：包含了与日志作者或评论人相关的主题函数。
1. wp-includes/template-functions-category.php：包含了与类别相关的主题函数。
1. wp-includes/template-functions-comment.php：包含了与评论相关的主题函数。
1. wp-includes/template-functions-general.php：包含了常规主题函数。
1. wp-includes/template-functions-links.php：包含了与链接相关的主题函数。
1. wp-includes/template-functions-post.php：包含了与日志相关的主题函数。
1. wp-includes/template-functions.php：包含了以上所有”template-”文件。
1. wp-includes/template-loader.php
1. wp-includes/vars.php：用来设置杂项变量。
1. wp-includes/version.php：用来设置当前使用的WordPress版本。
1. wp-includes/wp-db.php：包含了用来连接MySQL数据库的函数。
1. wp-includes/wp-l10n.php：提供支持多语言版本的函数。
## 2，数据表结构 ##
### wp_commentmeta：文章评论额外信息表 ###

|  字段   | 类型  | 备注  |
|  ----  | ----  | ----  |
| meta_id  | BIGINT | 自增唯一ID |
| comment_id  | BIGINT | 对应评论ID |
| meta_key  | VARCHAR | 键名 |
| meta_value  | LONGTEXT | 键值 |


### wp_comments：文章评论信息表 ###


|字段	|类型	|备注|
|  ----  | ----  | ----  |
|comment_ID	|BIGINT	|自增唯一ID|
|comment_post_ID	|BIGINT	|对应文章ID|
|comment_author|	TINYTEXT	|评论者|
|comment_author_email	|VARCHAR|	评论者邮箱|
|comment_author_url	|VARCHAR	|评论者网址|
|comment_author_IP	|VARCHAR|	评论者IP|
|comment_date	|DATETIME|	评论时间|
|comment_date_gmt	|DATETIME	|评论时间（GMT+0时间）|
|comment_content	|TEXT	|评论正文|
|comment_karma|	INT	||
|comment_approved	|VARCHAR|	评论是否被批准|
|comment_agent	|VARCHAR	|评论者的USER AGENT|
|comment_type|	VARCHAR	|评论类型(pingback/普通)|
|comment_parent|	BIGINT|	父评论ID|
|user_id	|BIGINT|	评论者用户ID（不一定存在）|
### wp_links：存储友情链接（Blogroll） ###

|字段|	类型|	备注|
|  ----  | ----  | ----  |
|link_id|	BIGINT	|自增唯一ID|
|link_url|	VARCHAR	|链接URL|
|link_name|	VARCHAR	|链接标题|
|link_image|	VARCHAR|	链接图片|
|link_target|	VARCHAR	|链接打开方式|
|link_description|	VARCHAR|	链接描述|
|link_visible|	VARCHAR	|是否可见（Y/N）|
|link_owner|	BIGINT	|添加者用户ID|
|link_rating|	INT	|评分等级|
|link_updated|	DATETIME|	|
|link_rel|	VARCHAR	|XFN关系|
|link_notes|	MEDIUMTEXT|	XFN注释|
|link_rss|	VARCHAR	|链接RSS地址|
### wp_options：基本配置信息表  ###
存储WordPress系统选项和插件、主题配置 ，通常通过get_option来操作，该表通常作为插件存储数据的一个地方。

|字段	|类型	|备注|
|  ----  | ----  | ----  |
|option_id|	BIGINT|	自增唯一ID|
|option_name|	VARCHAR	|键名|
|option_value|	LONGTEXT|	键值|
|autoload|	VARCHAR|	在WordPress载入时自动载入（yes/no）|

### wp_postmeta：文章额外数据表 ###
例如文章浏览次数，文章的自定义字段等都存储在这里。

|字段	|类型	|备注|
|  ----  | ----  | ----  |
|meta_id|	BIGINT|	自增唯一ID|
|post_id|	BIGINT|	博客ID，用于多用户博客，默认0|
|meta_key|	VARCHAR|	键名|
|meta_value|	LONGTEXT|	键值|

### wp_posts：文章信息表 ###
包括了日志、附件、页面等等信息。是WordPress最重要的一个数据表。

|字段	|类型	|备注|
|  ----  | ----  | ----  |
|ID	|BIGINT|	自增唯一ID|
|post_author|	BIGINT|	对应作者ID|
|post_date|	DATETIME	|发布时间|
|post_date_gmt|	DATETIME|	发布时间（GMT+0时间）|
|post_content|	LONGTEXT|	正文|
|post_title|	TEXT	|标题|
|post_excerpt|	TEXT	|摘录|
|post_status|	VARCHAR	|文章状态（publish/auto-draft/inherit等）|
|comment_status|	VARCHAR|	评论状态（open/closed）|
|ping_status|	VARCHAR	|PING状态（open/closed）|
|post_password|	VARCHAR|	文章密码|
|post_name|	VARCHAR|	文章缩略名|
|to_ping|	TEXT	||
|pinged|	TEXT|	已经PING过的链接|
|post_modified|	DATETIME	|修改时间|
|post_modified_gmt|	DATETIME|	修改时间（GMT+0时间）|
|post_content_filtered|	LONGTEXT	|
|post_parent|	BIGINT|	父文章，主要用于PAGE|
|guid|	VARCHAR	|
|menu_order|	INT|	排序ID|
|post_type|	VARCHAR|	文章类型（post/page等）|
|post_mime_type|	VARCHAR	|MIME类型|
|comment_count|	BIGINT	|评论总数|
### wp_term_relationships：分类与文章信息表（wp_posts）、链接表(wp_links)的关联表。 ###

|字段	|类型	|备注|
|  ----  | ----  | ----  |
|object_id|	BIGINT	|对应文章ID/链接ID|
|term_taxonomy_id	|BIGINT|	对应分类方法ID|
|term_order	|INT|	排序|

### wp_term_taxonomy：分类信息表 ###
区分wp_terms信息的分类类型，有category、link_category和tag三种分类类型。

|字段	|类型	|备注|
|  ----  | ----  | ----  |
|term_taxonomy_id	|BIGINT	|分类方法ID|
|term_id	|BIGINT	|分类ID|
|taxonomy	|VARCHAR	|分类方法(category/post_tag)|
|description	|LONGTEXT|	|
|parent	|BIGINT|	所属父分类方法ID|
|count	|BIGINT	|文章数统计|

### wp_termmeta ###

|字段	|类型	|备注|
|  ----  | ----  | ----  |
|meta_id	|BIGINT|	自增唯一ID|
|term_id	|BIGINT|	分类ID|
|meta_key	|VARCHAR|	键名|
|meta_value|	LONGTEXT	|键值|

### wp_terms：文章分类、链接分类、标签的信息表。 ###

|字段	|类型	|备注|
|  ----  | ----  | ----  |
|term_id	|BIGINT	|分类ID|
|name	|VARCHAR	|分类名|
|slug	|VARCHAR	|缩略名|
|term_group	|BIGINT	||

### wp_usermeta：用户额外信息表 ###

|字段	|类型	|备注|
|  ----  | ----  | ----  |
|umeta_id	|BIGINT	|自增唯一ID|
|user_id	|BIGINT	|对应用户ID|
|meta_key	|VARCHAR|	键名|
|meta_value	|LONGTEXT|	键值|

### wp_users：用户基本信息表。 ###
存放系统所有用户基本信息。

|字段	|类型	|备注|
|  ----  | ----  | ----  |
|ID|	BIGINT	|自增ID|
|user_login|	VARCHAR	|登录名|
|user_pass	|VARCHAR	|密码|
|user_nicename|	VARCHAR|	昵称|
|user_email	|VARCHAR	|Email|
|user_url|	VARCHAR	|网址|
|user_registered|	DATETIME|	注册时间|
|user_activation_key	|VARCHAR|	激活码|
|user_status|	INT	|用户状态|
|display_name|	VARCHAR	|显示名称|

### WordPress数据库表之间的关系 ###

要搞明白这个问题以及对WordPress数据表之间的关系有更加深刻的理解，让我们先来想想WordPress博客系统的功能，默认安装的WordPress版本博客系统涉及的数据信息主要包括了用户信息、分类信息、链接信息、文章信息、文章评论信息、基本配置信息这6类信息。

用户信息：系统中所有注册用户的帐号信息。
分类信息：包括了文章分类、链接分类、标签这3中分类信息。
链接信息：就是博客系统中的友情链接信息。
文章信息：博客系统中的日志、日志产生的附件、页面等信息。
文章评论信息：对具体日志或者附件的评论信息。
基本配置信息：系统中的基本配置信息，例如博客名称，博客地址等等。
WordPress数据库的11个数据表就是为了存储以上6类数据信息而设计，这些表之间的总体关系结构如下图所示：

image

|信息 类型|	涉及数据表及关联关系|
|  ----  | ----  | 
|用户信息|	数据表：wp_users、wp_usermeta，关联关系：wp_users.ID->wp_usermeta.user_id|
|分类信息|	数据表：wp_terms、wp_term_taxonomy关联关系：wp_terms.term_id->wp_term_taxonomy.term_id|
|链接信息|	数据表：wp_links、wp_term_relationships、wp_terms、wp_term_taxonomy、 wp_users、wp_usermeta关联关系：一，确定链接所属分类 （1）wp_links.link_id->wp_term_relationships.object_id， （2）wp_term_relationships.term_taxonomy_id->wp_term_taxonomy.term_taxonomy_id （该关系还要取决与wp_term_taxonomy表中的taxonomy分类类型为“link_category”） （3）wp_terms.term_id->wp_term_taxonom.term_id二、确定链接所有者 （4）wp_links.link_owner->wp_users.ID（5）wp_users.ID->wp_usermeta.user_id|
|文章信息	|数据表：wp_posts、wp_postmeta、wp_comments、wp_term_relationships、wp_terms、 wp_term_taxonomy、wp_users、wp_usermeta关联关系：一、确定文章信息 （1）wp_posts.ID->wp_postsmeta.post_id二、确定文章评论 （2）wp_posts.ID->wp_comments.comment_post_id三、确定文章评论的作者 （3）wp_comments.comment_author->wp_users.ID（4）wp_users.ID->wp_usermeta.user_id四、确定文章所属分类（5）wp_posts.ID->wp_term_relationships.object_id，（6）wp_term_relationships.term_taxonomy_id->wp_term_taxonomy.term_taxonomy_id （该关系还要取决与wp_term_taxonomy表中的taxonomy分类类型为“category”或者“tag”）（7）wp_terms->term_id->wp_term_taxonomy五、确定文章作者（8）wp_posts.author->wp_users.ID;（9）wp_users.ID->wp_usermeta.user_id|
|文章评论信息|	数据表：wp_comments、wp_posts、wp_users、wp_usermeta关联关系： 一、确定评论的文章 （1）wp_comments.comment_post_id->wp_posts.ID 二、确定评论的作者 （2）wp_comments.comment_author->wp_users.ID（3）wp_users.ID->wp_usermeta.user_id|
|基本配置信息|	数据表：wp_options没有关联关系|