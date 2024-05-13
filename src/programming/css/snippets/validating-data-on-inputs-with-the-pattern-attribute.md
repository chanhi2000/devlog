---
lang: ko-KR
title: Validating data on inputs with the pattern attribute
description: Snippets > Validating data on inputs with the pattern attribute
icon: fas fa-clipboard-check
category: 
  - CSS
  - Snippets
tag: 
  - css
  - scss
  - sass
  - snippets
  - validation
prev: /programming/css/snippets/README.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CSS > Snippets",
  "desc": "Snippets",
  "link": "/programming/css/snippets/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

::: normal-demo Validating data on inputs with the pattern attribute

```html
<form>
  <input 
    type="text"
    placeholder="Has to contain 4 letters and no numbers"
    pattern="[A-Za-z]{4}"
  />
  <button>Send</button>
</form>

<form>
  <input 
    type="password"
    placeholder="Has to contain 6 letters or more"
    pattern=".{6,}"
  />
  <button>Send</button>
</form>


<form>
  <input 
    type="text"
    placeholder="Can only contain numbers"
    pattern="[0-9]+"
  />
  <button>Send</button>
</form>

<form>
  <input
    type="url"
    placeholder="Must start with https:// or http://"
    pattern="http:?://.+"
  />
  <button>Send</button>
</form>
```

:::

---

<TagLinks />