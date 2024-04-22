---
lang: ko-KR
title: Find why a CSS property is overridden
description: Article(s) > Find why a CSS property is overridden
icon: fa-brands fa-css3-alt
category: 
  - CSS
  - Article(s)
tag: 
  - blog
  - devtoolstips.org
  - browse
  - debug
  - tips
head:  
  - - meta:
    - property: og:title
      content: Article(s) > Find why a CSS property is overridden
    - property: og:description
      content: Find why a CSS property is overridden
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/devtoolstips.org/find-why-css-property-is-overridden.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "Find why a CSS property is overridden",
  "desc": "Devtools Tips > Find why a CSS property is overridden",
  "link": "https://devtoolstips.org/tips/en/find-why-css-property-is-overridden/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

In CSS, the **cascade** plays a very important role in which CSS properties apply to an element. This key concept is not explained here, but you can learn more on MDN, at [<FontIcon icon="fa-brands fa-firefox"/>Cascade, specificity, and inheritance](https://developer.mozilla.org/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

When debugging CSS, sometimes you realize that the CSS property you meant to apply to an element is actually overridden by another property. Finding the overriding property is not always easy, especially when the element is styled with many CSS rules that define many properties.

Here are ways to find the overriding CSS property.

---

## By using the computed styles

1. Open the **Computed** styles panel in your browser DevTools. In Firefox, it's located in the **Inspector** tool. In other browsers, it's in the **Elements** tool.
2. Find the property which is overridden.
3. Expand the property by clicking the triangle icon next to it.<br/><br/>The list of CSS rules that define this property appears, ordered by their specificity. The rule that wins is at the top of the list.
4. To navigate to the overriding property, click the link next to the winning rule.

---

## By filtering the applied rules

Firefox DevTools has a helpful feature that allows you to filter the applied CSS rules that are displayed in the **Rules** panel. This can help you find the overriding property:

1. Locate the CSS property that is overridden in the **Rules** panel of the **Inspector** tool.
2. Click the <FontIcon icon="iconfont icon-select"/>`[Filter rules containing this property]` icon (a funnel) next to the property name.<br/><br/> The list of CSS rules is filtered to show only the rules that contain the overridden property. In addition, the property is highlighted everywhere it appears in the panel.
3. Scroll through the list of properties to find the overriding property (i.e. the one that's not struck through).

You can achieve the same result in other browsers by using the **Filter** text box that's at the top of the **Styles** panel in the **Elements** tool.

![<FontIcon icon="fa-brands fa-firefox-browser"/>Firefox DevTools, showing the Inspector tool and the Rules panel. The filter icon was clicked next to the display property, and the other display properties from other rules are highlighted.](https://devtoolstips.org/assets/img/find-why-css-property-is-overridden.png)

::: details See also

- [Find the CSS rule that causes a specific style to apply](https://devtoolstips.org/tips/en/find-rule-that-causes-style) <!-- TODO: add VPCard -->
- [Visualize the effect of CSS transforms](https://devtoolstips.org/tips/en/visualize-css-transforms) <!-- TODO: add VPCard -->
- [Convert font property units](https://devtoolstips.org/tips/en/convert-font-units) <!-- TODO: add VPCard -->
- [Edit CSS filters](https://devtoolstips.org/tips/en/edit-css-filters) <!-- TODO: add VPCard -->

:::

---

<TagLinks />