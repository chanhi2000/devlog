---
lang: ko-KR
title: Tips
description: CSS > Tips
icon: fas fa-lightbulb
category:
  - CSS
  - Tips
tag: 
  - css
  - scss
  - sass
  - oruga
  - css-animation
  - dark-mode
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 3 Ways to center div

::: tabs

@tab:active grid

```css
.item {
  display:grid;place-items:center;
}
```

@tab position

```css
.item {
  position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);
}
```

@tab flex

```css
.item {
  display:flex;align-items:center;justify-content:center;
}
```

---

## Truncate Text with One Line

```css
p {
    -webkit-line-clamp:3;
}
```

---

## Drop Shadow to Transparent Image

```css
.drop-shadow {
  filter: drop-shadow(2px 4px 8px #585858)
}
```

---

## Selector(s)

```css
* {}        /* Universal Selector */
#id {}      /* id selector */
.class {}   /* class selector */
h1,h2,h3 {} /* type selector */
h1 + p {}   /* adjacent sibling selector */
ul > li {}  /* child selector */
h1 ~ p {}   /* general sibling selector */
p a {}      /* descendent selector */
div[attribute="SomeValue"] {} /* attribute selector */
```

---

## Pseudo Selector(s) & Element

```css
a:hover {}          /* mouse over selector */
a:active {}         /* active link selector */
input:focus {}      /* focus selector */
a:visited {}        /* visited link selector */
.class:link {}      /* link selector */
input:checked {}    /* checked element selector */
input:disabled {}   /* disabled element selector */
input:enabled {}    /* enabled element selector */
:not(p) {}          /* not a specified element selector */
p::first-line {}    /* first line selector */
p::first-letter {}  /* first letter selector */
p:first-child {}    /* first child selector */
p:last-child {}     /* last child selector */
p:only-child {}     /* only child selector */
p:nth-child() {}    /* :nth-child selector */  
p:first-of-type {}  /* first element of its parent selector */
p:empty {}          /* elements that have no children selector */
.class::before {}   /* before element */
.class::after {}    /* after element */
```

---

## Background

```css
.example {
  background: #ffffff/*background-color*/ url("img_tree.png")/*background-image*/ no-repeat/*background-repeat*/ right top/*background-position*/
  background-image: url("https://example.com/1.jpegs"); /* background image */
  /** 
   * - repeat-x
   * - repeat-y 
   * - repeat 
   * - space
   * - round
   * - no-repeat
   */
  background-repeat: repeat-x; /* background repeat */
   /**
   * - scroll
   * - fixed
   * - local 
   * - initial
   * - inherit
   */
  background-attachment: scroll; /* background attachment */
  background-color: #2aa9e0;  /* background color */
  /**
   * top
   * right
   * bottom
   * left
   * center
   */
  background-position: top; /* background position */
}
```

---

## Box Properties

```css
.example {
  /**
   * - border-box
   * - content-box
   */
  box-sizing: border-box; /* box sizing */
  margin: 2px/*margin-top*/ 4px/*margin-right*/ 6px/*margin-bottom*/ 8px/*margin-left*/;
  margin: 0/* horizontal */ auto/* vertical */;
  
  border: 5px/*border-width*/ solid/*border-style*/ red/*border-color*/;
  border-style: none |hidden | dotted | dashed | solid | double | groove | ridge | inset | outset;
  border-color: #2aa9e0;
  padding: 2px/* top */ 4px/* right */ 6px/* bottom */ 8px/* right */;
  border-width: 10px; 
}
```

---

## List Styling

```css
.example {
  list-style: circle/*list-style-type*/ inside/*list-style-position*/ url("bullet.gif");/*list-style-image*/
  list-style-type: disc | circle | square | none;
  /**
   * inside
   * outside
   */
  list-style-position: inside;
  list-style-image: url("https://example.com/1.png")
}
```

---

## Text Styling

```css
.example {
  font: italic/*font-style*/ small-caps/*font-variant*/ bold/*font-weight*/ 12px/30px/*font-size/line-height*/ Goergia, seif/*font-family*/;
  font-style: normal | italic | oblique;
  /**
   * normal
   * small-caps
   */
  font-variant: normal;
  /**
   * normal
   * bold
   * bolder
   * lighter
   * 100-900
   */
  font-weight: normal;
   /**
    * ?px;
    * 0.8em;
    * 80%;
    */
  font-size: 12px;
   /**
    * normal
    * ?px
    */
  letter-spacing: normal;
   /**
    * normal
    * ?em
    * 34%
    */
  line-height: normal;
  /**
   * left
   * right
   * center
   * justify
   */
  text-align: left;
  /**
   * baseline
   * ?px
   * sub
   * super
   * top
   * text-top
   * middle
   * bottom
   * text-botom
   * initial
   */
  vertical-align: baseline;
  /**
   * capitalise
   * lowercase
   * uppercase
   */
  text-transform: lowercase;
  /** 
   * auto
   * left
   * right
   * center
   * justify
   * start
   * end
   * initial
   * inherit
   */
  text-align-last: auto;
  /**
   * none
   * underline
   * overline
   * line-through
   */
  text-decoration: none;
  text-indent: 12px; 
  font-family: 'Open Sans', sans-serif;
  /**
   * auto
   * inter-word
   * inter-character
   * none
   * initial
   * inherit
   */
  text-justify: auto;
  /**
   * clip
   * ellipse
   * string
   * initial
   * inherit
   */
  text-overflow: clip;
  /**
   * none
   * initial
   * inherit
   */
  text-shadow: ?
}
```

---

## Dynamic Content

```css
.example {
  --variable-name: value;  /* css variable */
  var(--variable-name);    /* variable usage */
  counter-reset: name-of-counter; /* counter reset */
  counter-increment: name-of-counter; /* counter increment */
  content: counter(name-of-counter);  /* counter dynamic value */
  content: attr(name-of-attribute);   /* attribute dynamic value */
}
```

---

## CSS Gris

```css
.example {
  grid-template-columns: 40px 50px auto 50px 40px; 
  grid-template-rows: 25% 100px auto;
  grid-template: "a a a" 20% "b b b" auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  grid-auto-columns: 100px | max-content | min-content;
  grid-auto-rows: 100px | max-content | min-content;
  grid-auto-flow: row | column | row dense | column dense;
  grid-column-start: 2 | areaname | span 2 | span areaname | auto;
  grid-column-end: 2 | areaname | span 2 | span areaname | auto;
  grid-row-start: 2 | areaname | span 2 | span areaname | auto;
  grid-row-end: 2 | areaname | span 2 | span areaname | auto;
  grid-column: 3 / span 2;
  grid-row: 3 / span 2;
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

---

<TagLinks />
