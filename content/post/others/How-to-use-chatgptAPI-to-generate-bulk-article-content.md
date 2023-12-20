---
title: "如何用chatgptAPI生成批量文章内容自动上传到WordPress"
date: 2023-12-13T09:06:57+08:00
lastmod: 2023-12-13T09:06:57+08:00
draft: false
keywords: ["ChatGPT", "WordPress", "API"]
description: "使用ChatGPT API 批量生成文章内容并自动上传到WordPress 涉及多个步骤。你需要先获取ChatGPT API的访问凭证（API key），然后使用PHP脚本生成文章内容并通过WordPress REST API上传。"
tags: ["blog", "SEO", "technical"]
categories: [
    "others",
]
author: "sunny"

# Uncomment to pin article to front page
# weight: 1
# You can also close(false) or open(true) something for this content.
# P.S. comment can only be closed
# comment: false
# toc: false
# autoCollapseToc: false
# You can also define another contentCopyright. e.g. contentCopyright: "This is another copyright."
# contentCopyright: false
reward: true
mathjax: false

# Uncomment to add to the homepage's dropdown menu; weight = order of article
#menu:
#  main:
#    parent: "SEO"
#    weight: 1
---

使用ChatGPT API 批量生成文章内容并自动上传到WordPress 涉及多个步骤。你需要先获取ChatGPT API的访问凭证（API key），然后使用PHP脚本生成文章内容并通过WordPress REST API上传。

以下是一个简单的例子，演示如何使用ChatGPT API 和WordPress REST API完成这个任务。请注意，为了运行以下代码，你需要替换 <YOUR_CHATGPT_API_KEY> 和 <YOUR_WORDPRESS_API_ENDPOINT> 分别为你的ChatGPT API密钥和WordPress REST API端点。

```php
<?php
/**
 * Batch Content Generation and Upload Script
 * Description: A script to generate content using ChatGPT API and upload to WordPress.
 * Version: 1.0
 * Author: Your Name
 */

// Function to generate content using ChatGPT API
function generate_content_using_chatgpt($num_articles) {
    $api_key = '<YOUR_CHATGPT_API_KEY>';
    $api_url = 'https://api.openai.com/v1/chat/completions'; // Check OpenAI API documentation for the correct endpoint

    $content = array();

    for ($i = 1; $i <= $num_articles; $i++) {
        // You can customize the prompt to get the desired content
        $prompt = "Generate content for a WordPress post.";

        // Set up the HTTP headers
        $headers = array(
            'Content-Type: application/json',
            'Authorization: Bearer ' . $api_key,
        );

        // Set up the request body
        $data = array(
            'messages' => array(
                array('role' => 'system', 'content' => 'You are a helpful assistant.'),
                array('role' => 'user', 'content' => $prompt),
            ),
        );

        // Make a POST request to ChatGPT API
        $response = wp_remote_post($api_url, array(
            'headers' => $headers,
            'body' => json_encode($data),
        ));

        // Check if the request was successful
        if (!is_wp_error($response)) {
            $body = wp_remote_retrieve_body($response);
            $response_data = json_decode($body, true);

            // Extract the generated content
            $generated_content = $response_data['choices'][0]['message']['content'];

            $content[] = array(
                'title' => 'Generated Post ' . $i,
                'content' => $generated_content,
                'categories' => array('Uncategorized'), // Add category names as needed
            );
        } else {
            error_log('Error generating content: ' . $response->get_error_message());
        }
    }

    return $content;
}

// Function to upload articles to WordPress using REST API
function upload_articles_to_wp($articles) {
    $api_url = '<YOUR_WORDPRESS_API_ENDPOINT>/wp-json/wp/v2/posts'; // Replace with your WordPress site URL

    foreach ($articles as $article) {
        $response = wp_remote_post($api_url, array(
            'headers' => array(
                'Content-Type' => 'application/json',
            ),
            'body' => json_encode(array(
                'title' => $article['title'],
                'content' => $article['content'],
                'categories' => $article['categories'],
            )),
        ));

        // Check if the request was successful
        if (is_wp_error($response)) {
            error_log('Error uploading article: ' . $response->get_error_message());
        } else {
            $body = wp_remote_retrieve_body($response);
            $data = json_decode($body);

            // Output the uploaded post ID
            echo 'Article uploaded successfully. Post ID: ' . $data->id . '<br>';
        }
    }
}

// Number of articles to generate
$num_articles = 5; // Change the number of articles as needed

// Generate content using ChatGPT API
$generated_content = generate_content_using_chatgpt($num_articles);

// Upload articles to WordPress
upload_articles_to_wp($generated_content);
```

在上面的代码中，我们使用ChatGPT API生成文章内容，并通过WordPress REST API上传到WordPress站点。请确保替换 <YOUR_CHATGPT_API_KEY> 和 <YOUR_WORDPRESS_API_ENDPOINT> 为你的ChatGPT API密钥和WordPress站点的REST API端点。

在实际使用中，你可能需要调整ChatGPT的调用方式、请求参数，以及根据你的需求定制WordPress文章的上传逻辑。此外，确保遵循ChatGPT API和WordPress REST API的文档，并注意API的使用规则和配额。