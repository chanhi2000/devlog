import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const getFileAbsPath = (url) => fileURLToPath(url);
export const __IS_DEBUG__ = process.env.IS_DEBUG ?? false;

export const convertDateFormat = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const currentYYYYMMDD = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const parseOgData = ($) => {
  const ogData = {};
  $('meta[property^="og:"]').each((i, element) => {
    const property = $(element).attr('property');
    const content = $(element).attr('content');
    ogData[property] = content;
  });
  return ogData
}

export const createFrontMatter = (meta) => {
  console.log(`createFrontMatter ... meta: ${JSON.stringify(meta)}`)
  let _pageName = ''
  let _icon = ''
  let _category = ''
  let _tag = ''
  let _relatedPath = ''
  switch(meta.topic) {
  case 'react':
    console.log(`${meta.topic}!!!`)
    _pageName = 'React.js'
    _icon='fa-brands fa-react'
    _category=`Node.js\n  - ${_pageName}`
    _tag='node\n  - nodejs\n  - node-js\n  - react\n  - reactjs\n  - react-js'
    _relatedPath='/programming/js-react'
    break;
  case 'python':
    console.log(`${meta.topic}!!!`)
    _pageName = 'Python'
    _icon='fa-brands fa-python'
    _category=`${_pageName}`
    _tag='python\n  - py'
    _relatedPath='/programming/py'
    break;
  case 'cs':
    console.log(`${meta.topic}!!!`)
    _pageName = 'C#'
    _icon='iconfont icon-csharp'
    _category=`${_pageName}\n  - DotNet`
    _tag='cs\n  - c#\n  - csharp\n  - dotnet'
    _relatedPath='/programming/cs'
    break;
  default: break;
  }
  return `---
lang: en-US
title: "${meta.title}"
description: "Article(s) > ${meta.title}"
icon: ${_icon}
category:
  - ${_category}
  - Article(s)
tag:
  - blog
  - freecodecamp.org
  - ${_tag}
head:
  - - meta:
    - property: og:title
      content: "Article(s) > ${meta.title}"
    - property: og:description
      content: "${meta.title}"
    - property: og:url
      content: https://chanhi2000.github.iohttps://chanhi2000.github.io/bookshelf/${meta.articleBasePath}/${meta.articlePath}.html
prev: ${_relatedPath}/articles/README.md
date: ${meta.datePublished}
isOriginal: false
author: ${meta.author}
cover: ${meta.coverUrl}
---

# {{ $frontmatter.title }} 관련

\`\`\`component VPCard
{
  "title": "${_pageName} > Article(s)",
  "desc": "Article(s)",
  "link": "${_relatedPath}/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
\`\`\`

[[toc]]

---

<SiteInfo
  name="${meta.title}"
  desc="${meta.description}"
  url="${meta.baseUrl}/${meta.articlePath}"
  logo="${meta.logo}"
  preview="${meta.coverUrl}"/>

`
}

export const createEndMatter = (meta) => {
  console.log(`createEndMatter ... meta: ${JSON.stringify(meta)}`)
  return `
---

<TagLinks />

<!-- START: ARTICLE CARD -->
\`\`\`component VPCard
{
  "title": "${meta.title}",
  "desc": "${meta.description}",
  "link": "https://chanhi2000.github.io/bookshelf/${meta.articleBasePath}/${meta.articlePath}.html",
  "logo": "${meta.logo}",
  "background": "rgba(${meta.bgRGBA},0.2)"
}
\`\`\`
<!-- END: ARTICLE CARD -->`
}


function removeTag($, selector) {
  $(selector).remove();
  return $;
}

export async function doFetch(url, outputFName, parsingHtmlContent, removeSelector = '') {
  console.log(`START doFetch ... url: ${url}`)
  try {
    const response = await axios.get(url);
    const html = response.data;
    let $ = cheerio.load(html);
    if (removeSelector && removeSelector !== '') {
      console.log(`removeSelector FOUND! ... ${removeSelector}`)
      $ = removeTag($, removeSelector)
    }
    
    const content = await parsingHtmlContent($);

    const filePath = path.join(path.resolve(), 'src', outputFName);
    fs.writeFileSync(filePath, content, 'utf8');

    console.log(`Markdown content saved to src/${outputFName}`);
  } catch (error) {
    console.error(`Error fetching the URL: ${error}`);
  }
}
