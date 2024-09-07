---
lang: ko-KR
title: How to Use HTML Attributes to Make Your Websites and Apps More Accessible
description: Article(s) > How to Use HTML Attributes to Make Your Websites and Apps More Accessible
icon: fa-brands fa-css3-alt
category: 
  - CSS
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - css
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Use HTML Attributes to Make Your Websites and Apps More Accessible
    - property: og:description
      content: How to Use HTML Attributes to Make Your Websites and Apps More Accessible
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-use-html-attributes-to-make-your-websites-and-apps-more-accessible.html
prev: /programming/css/articles/README.md
date: 2024-09-06
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725281991044/7edb0d70-c31e-4a41-bc24-232c75d0fae3.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CSS > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/css/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="How to Use HTML Attributes to Make Your Websites and Apps More Accessible"
  desc="Have you ever used an attribute in HTML without fully understanding its purpose? You're not alone! Over time, I've dug into the meaning behind many HTML attributes, especially those that are crucial for accessibility. In this in-depth tutorial, I'll ..."
  url="https://freecodecamp.org/news/how-to-use-html-attributes-to-make-your-websites-and-apps-more-accessible/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725281991044/7edb0d70-c31e-4a41-bc24-232c75d0fae3.jpeg"/>

Have you ever used an attribute in HTML without fully understanding its purpose? You're not alone! Over time, I've dug into the meaning behind many HTML attributes, especially those that are crucial for accessibility.

In this in-depth tutorial, I'll break down some key HTML attributes that enhance accessibility, explaining what they do, and when to use them effectively.

---

## Prerequisites

To follow along with this tutorial, you should have a basic understanding of HTML and a little bit of Javascript knowledge as well.

[[toc]]

---

## What Are ARIA Attributes?

Most of the attributes listed in this article are ARIA attributes. ARIA, which stands for **Accessible Rich Internet Applications**, is a set of attributes defined by the W3C (World Wide Web Consortium) to enhance the accessibility of web applications.

ARIA attributes provide additional information to assistive technologies like screen readers. Using them correctly can make complex web applications more accessible to individuals with visual, auditory, or motor impairments.

One key principle of using ARIA is that sometimes it's best not to use it. Although this might seem contradictory, you should only ARIA attributes when necessary. Overusing ARIA can disrupt the experience for users relying on assistive technologies. While sighted users might not notice any issues, excessive or improper use of ARIA can negatively impact accessibility.

---

## The `alt` Attribute

The `alt` attribute likely isn't new to you if you've used HTML images. You use it to provide *alternative* text that displays when an image isn't properly shown on the screen.

But the most important use of the `alt` attribute is for accessibility. If the `alt` attribute is not present in an image element, then a screen reader may announce the name of the image file or the URL of the image instead of explaining what it's showing. This can be unhelpful and we don't want that.

The content in the `alt` attribute should be concise because its primary purpose is to briefly describe an image for those who cannot see it. This includes users who rely on screen readers, search engines, and users with slow internet connections where images may not load. If the `alt` text is too long, it may include unnecessary details that don't add value to the user's understanding.

The `alt` attribute is different from an image caption. Captions are visible and can provide more context or additional information about an image. Using a caption as `alt` text can make it too long and redundant.

If the image is purely decorative, then the alt attribute should be left empty. If an image has an empty alt attribute, an assistive tool will skip it. This is important to help keep users focused on the content and not distract them with unnecessary information.

Here's an example of how you can use the alt attribute:

```html
<p>Lions are remarkable for their powerful roars, 
which can be heard up to five miles away. 
These roars are used to communicate with other 
members of the pride, as well as to ward off rival lions and intruders. 
Although lions are often associated with the African savannah, 
a small population of Asiatic lions still exists in India's Gir Forest, 
making them one of the world's most endangered big cats.</p>

<img src="lion.jpg" alt="a lion" /> <!-- brief and gives context to the paragraph -->

<img src="background-stars.png" alt="" /> <!-- This image is purely for 
decoration so it's left empty -->
```

---

## The `aria-label` Attribute

The `aria-label` attribute is used to provide an accessible name to an element that might not have visible text. A common example of this is a button that contains an image or SVG.

A lot of elements have an accessible name – the accessible name is the content inside the element. The accessible name for the heading in this example is "Frequently Asked Questions"

```html
<h1>Frequently Asked Questions</h1>
```

Everyone, including people using assistive technology, would clearly understand the meaning of the example above because it contains visible content.

But in the example below, a user relying on a screen reader might miss the content in the button if it doesn't have an `aria-label`. This is because the content in the button is an SVG and the SVG does not contain any visible content:

```html
<button aria-label="Search">
    <svg
      fill="#000000" 
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 488.4 488.4">
        <g stroke-width="0"></g>
        <g stroke-linecap="round" stroke-linejoin="round"></g>
        <g><g>
        <g>
          <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z" />
        </g> 
        </g></g>
    </svg>
</button>
```

Do not overuse the `aria-label`. Not all content needs an `aria-label` – for example, if you have a button that contains an image with `alt`, or an SVG with a `title`, then those attributes act as the accessible name for that element.

```html
<button>
    <img src="search-icon.png" alt="Search" /> <!-- no need for aria-label -->
</button>

<!-- Another example -->

<button>
  <svg
    fill="#000000"
    height="20px"
    width="20px"
    role="image"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 488.4 488.4">
        <title>Search Icon</title> <!-- Accessible name -->
        <g stroke-width="0"></g>
        <g stroke-linecap="round" stroke-linejoin="round"></g>
        <g><g>
        <g>
         <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z" />
        </g> 
        <g><g>
  </svg>
</button>
```

You should use the `aria-label` sparingly and appropriately. Overusing the attribute can lead to several issues:

- The `aria-label` content is not visible to sighted users. If a user with a cognitive disability is using a screen reader for support, they might not understand why they’re hearing different information from what they see on the screen.
- Using `aria-label` extensively across a large codebase can make the HTML harder to maintain. You may struggle to track where labels are coming from, especially if they’re set programmatically or in multiple places.

### Best Practices for Using `aria-label`

- Whenever possible, use visible text labels. They’re easier to understand and maintain, and they ensure consistent experiences for all users.
- When Possible: If there is already a visible label on the page, use `aria-labelledby` to link the element to the existing text instead of creating a new label with `aria-label` (we'll talk about this below).
- If you use `aria-label`, keep the text short and to the point. It should describe the element’s purpose in as few words as possible.

---

## The `aria-labelledby` Attribute

The `aria-labelledby` attribute is used to associate an element with another element that serves as its label. It links the target element to one or more other elements on the page that contain the text that should be used as the label.

You can use this attribute when there is already a visible text label or when the label needs to be composed of multiple text elements.

For example, you can use `aria-labelledby` in a `<section>` element to associate it with a heading or other text that serves as a label for the entire section.

```html
<h2 id="about-heading">About Us</h2> 
<section aria-labelledby="about-heading"> <!-- use the id of the h2 -->
    <p>We are a company dedicated to providing excellent service...</p>
</section>

<h2 id="services-heading">Our Services</h2>
<section aria-labelledby="services-heading">
    <p>We offer a wide range of services including...</p>
</section>
```

Sometimes, you might want to combine multiple pieces of text as the label. You can do this by listing multiple IDs in the `aria-labelledby` attribute:

```html
<h1 id="dialog-title">Confirmation Required</h1>
<p id="dialog-description">Are you sure you want to delete this item?</p>
<button aria-labelledby="dialog-title dialog-description">Yes</button>
```

The `aria-labelledby` is similar to the `aria-label` in that its purpose is to provide an accessible element.

### How is `aria-label` Different from `aria-labelledby`?

`aria-label` directly assigns a string of text as a label for an element. This text is not visible on the screen but is announced by assistive technologies like screen readers. It’s typically used when there is no visible text label.

`aria-labelledby` points to one or more existing elements on the page (using their `id` attributes) that should be used as the label for the element. The label text is visible to all users because it’s part of the content of another element.

### Best Practices for Using `aria-labelledby`

- Use `aria-labelledby` over `aria-label` when there is already text on the page that can serve as the label. This reduces redundancy and ensures that both sighted users and screen reader users see the same content.
- The `id` attributes referenced by `aria-labelledby` must be unique on the page and correctly point to existing elements. If the ID is missing or incorrect, the label won’t work, leading to accessibility issues.
- When combining multiple labels, ensure that the resulting label makes sense when read together. The order of IDs in `aria-labelledby` matters, as screen readers will read the labels in the order they are listed.
- Like `aria-label`, avoid overusing `aria-labelledby` in situations where a simpler approach (like using a visible `label` element directly) would suffice. This helps keep the code maintainable and reduces the cognitive load for users.

---

## The `aria-describedby` Attribute

The `aria-describedby` attribute is used to associate an element with one or more elements that provide additional descriptive information about it. The `aria-describedby` attribute is used to provide additional context or instructions to an element.

Unlike `aria-labelledby`, which is meant to provide a label or name, `aria-describedby` is intended to give users more detailed information or context about an element, often to supplement what they already know from the label.

```html
<label id="full-name">Full name</label>
<input type="text" aria-labelledby="full-name" aria-describedby="info">
<span id="info">Enter your full name.</span>
```

When both `aria-labelledby` and `aria-describedby` are used on the same element, screen readers will first announce the label (from `aria-labelledby`), then the role of the element (for example, "button"), and finally the description (from `aria-describedby`).

### Best Practices for Using `aria-describedby`

- Apply `aria-describedby` when you need to provide users with additional context or instructions that go beyond the label. This is particularly useful for forms, complex controls, or any element that might require clarification.
- While `aria-describedby` is meant for more detailed descriptions, avoid overly long text. Keep the description focused on what the user needs to know to interact with the element effectively.
- Just like with `aria-labelledby`, ensure that the elements referenced by `aria-describedby` have unique and relevant `id` attributes. The content of these elements should be directly relevant to the element they describe.

---

## The `role` Attribute

The role attribute is used to specify the role of an element. You can use it to override the default role of a semantic element. It helps assistive technologies understand how an element should be interpreted or interacted with.

When using non-semantic elements (like `<div>` or `<span>`) to create interactive controls (buttons, dialogs, tabs, and so on), the `role` attribute informs assistive technologies of the element’s intended behavior. You can also use the role to define landmark roles that assist in navigation, such as `banner` or `complementary`, which defines the structure of the page for screen reader users.

### Common `role` Values

Roles for Landmark Regions:

- `banner`: Represents the site header.
- `navigation`: Defines a navigation section of the page, often for site or page navigation links.
- `main`: Marks the main content of a document, distinct from sidebars, footers, and so on.
- `contentinfo`: Represents the footer information.

This example below is just for demonstration purposes – you should use the right semantic element when possible:

```html
<div role="banner">
    <h1>My Website</h1>
</div>

<div role="navigation">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
    </ul>
</div>

<div role="main">
    <h2>Welcome to My Website</h2>
    <p>Here is some main content...</p>
</div>

<div role="contentinfo">
    <p>&copy; 2024 My Website</p>
</div>
```

Roles for Widgets and Interactive Elements:

- `button`: Represents a button element, which users can click to trigger an action.
- `dialog`: Marks a dialog box or modal that requires user interaction.
- `alert`: Identifies an element as an important message or alert that requires user attention.
- `tablist`, `tab`, `tabpanel`: Used for tabbed interfaces, where `tablist` contains the tabs, and each `tab` controls the visibility of its corresponding `tabpanel`.

```html
<div role="button" tabindex="0" onclick="submitForm()">Submit</div>

<div role="dialog" aria-labelledby="dialog-title" aria-modal="true">
    <h2 id="dialog-title">Confirmation</h2>
    <p>Are you sure you want to proceed?</p>
    <button onclick="closeDialog()">Close</button>
</div>
```

Example of Tabbed panel:

```html
<div role="tablist" aria-label="Sample Tabs">
    <button role="tab" id="tab-1" aria-controls="panel-1" aria-selected="true" tabindex="0">Tab 1</button>
    <button role="tab" id="tab-2" aria-controls="panel-2" aria-selected="false" tabindex="-1">Tab 2</button>
    <button role="tab" id="tab-3" aria-controls="panel-3" aria-selected="false" tabindex="-1">Tab 3</button>
</div>

<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
    <h2>Content for Tab 1</h2>
    <p>This is the content of the first tab.</p>
</div>

<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
    <h2>Content for Tab 2</h2>
    <p>This is the content of the second tab.</p>
</div>

<div role="tabpanel" id="panel-3" aria-labelledby="tab-3" hidden>
    <h2>Content for Tab 3</h2>
    <p>This is the content of the third tab.</p>
</div>
```

### Best Practices for Using the `role` Attribute

- Always prefer using native HTML elements that already have the appropriate role (for example, `<button>`, `<header>`, `<nav>`, `<main>`). This provides better accessibility support across a wider range of browsers and devices.
- Don't **overuse** or **misuse** the `role` attribute as this can lead to confusion and reduced accessibility. Use `role` to enhance or clarify when needed, not to replace semantic HTML.
- Understand implicit roles. Many HTML elements have implicit roles. For example, an `<a>` element with an `href` attribute automatically has the `link` role. Avoid adding redundant `role` attributes to these elements.

---

## The `aria-controls` Attribute

The `aria-controls` attribute informs a screen reader that the element is controlled or affected by another element. It's commonly used to indicate that a component (like a button or a tab) controls or interacts with another part of the page (like a panel or a menu). It is also used in interactive components such as tabs, accordions, and sliders to describe which parts of the page are affected when the user interacts with the component.

For example, you can use `aria-controls` on a tab button to indicate which panel each button controls:

```html
<!-- Tab Buttons -->
<button id="tab1" aria-controls="panel1">Tab 1</button>
<button id="tab2" aria-controls="panel2">Tab 2</button>

<!-- Content Panels -->
<div id="panel1" role="tabpanel">Content for Tab 1</div>
<div id="panel2" role="tabpanel">Content for Tab 2</div>
```

### Best Practices for Using `aria-controls`

- Ensure that the ID used in `aria-controls` matches the `id` of the controlled element exactly.
- Use `aria-controls` in conjunction with role and state attributes like `aria-selected`, or `role="tabpanel"` to provide more complete information about the controlled elements and their states.
- Apply `aria-controls` to interactive elements such as buttons or links that have a direct effect on other elements. It is not typically used for non-interactive content.

---

## The `aria-selected` Attribute

The `aria-selected` attribute is used to indicate the current selection state of an element within a group of selectable items. A selectable item could be an option in a menu, a tab in a tabbed panel, or an item in a list box.

Here's an example of the selection state in a list box. `aria-selected="true"` in option 1 indicates that Option 1 is currently selected.

```html
<!-- Listbox -->
<ul role="listbox">
  <li role="option" aria-selected="true">Option 1</li>
  <li role="option" aria-selected="false">Option 2</li>
  <li role="option" aria-selected="false">Option 3</li>
</ul>
```

### Best Practices for Using `aria-selected`

- Use `aria-selected="true"` for the selected item and `aria-selected="false"` for non-selected items. The value should be a string, not a boolean.
- Ensure that the visual state of the element (for example, active tab or selected option) matches the `aria-selected` value. Inconsistent states can lead to confusion for users of assistive technologies.
- Use `aria-selected` in conjunction with appropriate `role` attributes (for example, `role="option"` for listbox items) to provide complete context.
- Ensure that `aria-selected` is updated dynamically as users interact with the interface. For example, when a user selects a new option, update the `aria-selected` attribute accordingly.

---

## The `tabindex` Attribute

The `tabindex` attribute is used to control the keyboard navigation of an element. You can use it to activate focus for non-interactive elements like `div`, `p`, or `span` or disable focus for interactive elements like `button`, `a`, `input`. You can also use it to control focus order on a page.

### Possible `tabindex` Values

::: tabs

@tab:active Positive values

Elements with positive values become focusable and are included in the tab order with their numbers determining the order in which they are focused. Elements with lower numbers are focused before elements with higher numbers.

```html
<button tabindex="2">Cancel</button> <!-- This will recieve focus last -->
<button tabindex="1">Submit</button> <!-- This will recieve focus first -->
```

Elements with the same values will be navigated in the order in which they appear.

> Using positive `tabindex` values can lead to a confusing and non-intuitive tab order. It is generally better to use `tabindex="0"` for elements that should be part of the natural tab order.

@tab Zero

You use this to make an element focusable and include it in the natural tab order based on its position in the document. It's useful for making elements focusable that are not normally focusable (like `<div>` or `<span>`).

```html
<div role="button" tabindex="0">Submit</div> 
<!-- The element becomes focusable using the keyboard -->
```

@tab Negative values

You use this to remove an element from the tab order, meaning it cannot be focused using the `Tab` key. But it can still be focused programmatically (via JavaScript). It's useful for elements that should not be focusable by default but may need to be focusable under certain conditions.

```html
<input type="text" name="name">
<input type="text" name="other-names" tabindex="-1">
<input type="text" placeholder="email">

<!-- other-names will be skipped when tabbing through the inputs; 
only name and email will receive focus -->
```

:::

### Best Practices for Using `tabindex`

- Rely on the natural tab order as much as possible. Use `tabindex="0"` to include elements in the tab order and avoid using positive values unless absolutely necessary.
- Using positive `tabindex` values can create an unpredictable tab order and make it harder for users to navigate. It's better to use the default flow and `tabindex="0"`.
- Use `tabindex="-1"` for elements not intended to be focused.
- Ensure that the focus order follows a logical and intuitive sequence, which matches the visual layout and interaction flow of the page.
- Test with keyboard and assistive technologies.
- When dynamically adding or removing focusable elements (for example, through JavaScript), ensure that focus management is handled properly to maintain a smooth experience.

---

## The `title` Attribute

The `title` attribute in HTML is used to provide additional information about an element. The content in the attribute shows in a tooltip when a user hovers over the element containing the title. It can be applied to most HTML elements, including links, images, and form fields.

You can use the title attribute to provide a brief explanation or description of the content of an element. For example, you can use it to clarify the meaning of abbreviations or acronyms when used with the `<abbr>` tag.

```html
<abbr title="World Wide Web">WWW</abbr>
<!-- Hovering over "WWW" displays the tooltip "World Wide Web," 
explaining the abbreviation. -->

<img src="logo.png" 
alt="Company Logo" 
title="This is the logo of our company">
<!-- Users will see "This is the logo of our company" 
when hovering over the image. -->
```

### Accessibility Concerns with the `title` Attribute

The title attribute can be useful, but it comes with some accessibility concerns:

- Screen readers do not consistently announce the `title` attribute, especially when there is also an `alt` attribute – or they may ignore it altogether. Users of assistive technologies may miss out on the information provided by the `title` attribute, especially if they rely solely on screen readers.
- The tooltip generated by the `title` attribute typically appears only on hover with a mouse or trackpad. Users who navigate with a keyboard or touch screen may not have access to this information.
- The content of the `title` attribute is hidden by default and only revealed on hover. This makes it less accessible to users who don't know they need to hover to get additional information.
- Tooltips can be difficult to read because they often disappear quickly, and their content might be truncated or too long to fit within the tooltip window.

### Best Practices for Using the `title` Attribute

- Avoid relying solely on the `title` attribute. Ensure that critical information is available in a more accessible manner, such as visible text or ARIA attributes.
- Use the `title` attribute for supplementary, non-essential information that enhances user experience but isn’t critical to understanding the content.
- For form inputs, use the `aria-describedby` attribute to associate additional instructions with a form element. Use visible labels or descriptions instead of or in addition to the `title` attribute to ensure that all users have access to the information.
- If you use the `title` attribute, keep the text brief and to the point. Long tooltips can be difficult to read and may get truncated.

---

## Using the `for` Attribute in `label`

The `for` attribute, when used in `<label>`, is used to connect a label to its corresponding form control element – that is `<input>`, `<select>`, or `<textarea>`. Screen readers will announce the label when the assigned input is focused. When used correctly, clicking on the label will focus on the corresponding input.

The value of the `for` attribute should match the `id` of the input it is associated with:

```html
<label for="fullname">Full Name</label>
<input type="text" id="fullname">
<!-- When the user clicks on the "Full Name" label, 
the cursor will focus on the corresponding input field. -->
```

### Best Practices for Using the `for` Attribute

- Ensure that each form control has a unique `id` attribute so that the `for` attribute can correctly reference it. Avoid using duplicate `id` values on the same page.
- Avoid empty `for` attributes. If there’s no associated form control, it can confuse users of assistive technologies.
- Position labels close to their associated form controls. Typically, labels should be placed above or to the left of the form controls for optimal readability and usability.

---

## The `scope` Attribute

The `scope` attribute is used in HTML tables to define the relationship between table headers and the cells they describe. The attribute is particularly important for accessibility because it helps screen readers and other assistive technologies understand the structure of the table and convey the correct information to users.

The `scope` attribute is applied to `<th>` (table header) elements to specify whether the header applies to a row, a column, or a group of rows or columns

### Possible `scope` Values

- `row`: Indicates that the `<th>` element is a header for a row. In the example below, `scope="row"` is used for the first `<th>` element in each row, indicating that the header applies to the entire row.

```html
<table>
    <tbody>
        <tr>
            <th scope="row">Product A</th>
            <td>$1000</td>
            <td>$1200</td>
            <td>$1100</td>
        </tr>
        <tr>
            <th scope="row">Product B</th>
            <td>$900</td>
            <td>$950</td>
            <td>$1000</td>
        </tr>
    </tbody>
</table>
```

- `col`: Indicates that the `<th>` element is a header for a column.

```html
<table>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Occupation</th>
        </tr>
<!-- The scope="col" attribute indicates that each <th> element 
serves as a header for the corresponding column beneath it. -->
    </thead>
    <tbody>
        <tr>
            <td>Jane</td>
            <td>30</td>
            <td>Engineer</td>
        </tr>
        <tr>
            <td>Tobe</td>
            <td>25</td>
            <td>Designer</td>
        </tr>
    </tbody>
</table>
```

- `rowgroup`: Indicates that the `<th>` element is a header for a group of rows. In the example below, the rows "Marketing Department" and "Sales Department" have the `scope="rowgroup"` attribute to indicate that these rows act as headers for the groups of rows that follow:

```html
<table>
  <thead>
    <tr>
      <th scope="col">Department</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Position</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <!-- Row Group for the Marketing Department -->
    <tr>
      <th scope="rowgroup" colspan="4">Marketing Department</th>
    </tr>
    <tr>
      <th scope="row">Amari Pere</th>
      <td>Marketing Manager</td>
      <td>$75,000</td>
    </tr>
    <tr>
      <th scope="row">Uyati Hope</th>
      <td>SEO Specialist</td>
      <td>$65,000</td>
    </tr>

    <!-- Row Group for the Sales Department -->
    <tr>
      <th scope="rowgroup" colspan="4">Sales Department</th>
    </tr>
    <tr>
      <th scope="row">Timini Prosper</th>
      <td>Sales Manager</td>
      <td>$80,000</td>
    </tr>
    <tr>
      <th scope="row">Delilu Pink</th>
      <td>Account Executive</td>
      <td>$70,000</td>
    </tr>
  </tbody>
</table>
```

- `colgroup`: Indicates that the `<th>` element is a header for a group of columns. In the example below, `scope="colgroup"` is used to indicate that the first row of headers applies to groups of columns (Q1 and Q2), while `scope="col"` and `scope="row"` are used for individual columns and rows.

```html
<table>
    <thead>
        <tr>
            <th scope="colgroup">Region</th>
            <th scope="colgroup">Q1</th>
            <th scope="colgroup">Q2</th>
        </tr>
        <tr>
            <th scope="col">Sales</th>
            <th scope="col">Profit</th>
            <th scope="col">Sales</th>
            <th scope="col">Profit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">North</th>
            <td>$2000</td>
            <td>$400</td>
            <td>$2500</td>
            <td>$500</td>
        </tr>
        <tr>
            <th scope="row">South</th>
            <td>$1500</td>
            <td>$300</td>
            <td>$1800</td>
            <td>$350</td>
        </tr>
    </tbody>
</table>
```

### Best Practices for Using the `scope` Attribute

- Always define `scope` for complex tables to clarify the relationship between headers and data cells.
- Simplify table structures when possible. While the `scope` attribute helps with accessibility, consider simplifying table structures where possible. If a table is too complex, it might be difficult for all users to understand, even with proper markup.
- For particularly complex tables, consider using ARIA attributes like `aria-labelledby` or `aria-describedby` to provide additional context and ensure that all users can navigate the table effectively.
- After applying the `scope` attribute, test the table with screen readers to ensure that the relationships between headers and data cells are announced correctly.
- Don’t use `scope` in situations where it’s unnecessary. For simple tables where each header is clearly associated with a single row or column, HTML’s default behavior is usually sufficient.

---

## The `aria-hidden` Attribute

The aria-hidden attribute is used to control the visibility of an element for assistive technologies while it's still visible on the screen. You can use it to hide purely decorative elements, like icons or images, that don't add meaningful information to the content. This helps prevent screen readers from reading unnecessary information.

```html
<button>
    <span aria-hidden="true">🔍</span>
    Search
</button>
```

You can also use it to hide content that has already been announced to prevent redundancy in what screen readers announce. For content that is toggled on and off (like modals, or expandable sections), you can use `aria-hidden` to hide the inactive content from screen readers, ensuring that they only interact with the visible, active content.

```html
<button>
    <span aria-hidden="true">✉</span> <!-- hide decorative icon -->
    <span>Messages</span>
</button>
```

You can also use `aria-hidden` when creating complex widgets (like carousels or tabbed interfaces) to hide inactive panels or slides from assistive technologies, focusing their attention on the active part of the widget.

```html
<div id="menu" aria-hidden="true">
    <!-- Menu content here -->
</div>

<button onclick="toggleMenu()">Toggle Menu</button>

<script>
    const toggleMenu = () => {
        const menu = document.getElementById('menu');
        const isHidden = menu.getAttribute('aria-hidden') === 'true';

        menu.setAttribute('aria-hidden', !isHidden);
    }
</script>
```

### Best Practices for Using `aria-hidden`

- Only use `aria-hidden` when you need to hide content from screen readers to avoid overwhelming users with redundant or irrelevant information.
- Do not use on elements that users need to interact with, like buttons or links.
- Ensure that `aria-hidden` accurately reflects the visibility of elements on the screen. If an element becomes visible or hidden via JavaScript or CSS, update `aria-hidden` accordingly to maintain accessibility.
- In a team environment, document why and where `aria-hidden` is used in your codebase, so that other team members understand its purpose and can maintain it properly.

---

## The `inert` Attribute

The `inert` attribute prevents an element and all of its descendants from being focusable, interactive, or perceivable by assistive technologies. When an element has the `inert` attribute, it cannot receive focus, be clicked on, or be interacted with in any way. It's also hidden from assistive technologies like screen readers.

Unlike `aria-hidden`, which only affects accessibility, `inert` applies to all user interactions. The inert attribute can be used to disable sections of a page that are temporarily irrelevant, such as during form validation errors, while loading data, or when a certain section is hidden but still in the DOM. It can also be used in complex user interfaces like multi-step forms or wizards to ensure that users only interact with the current step or section

The most common use of inert, however, is in a modal, where you want to prevent users from interacting with the background content while the modal is open.

Like in the example below, when the modal is open the `inert` attribute is added to the main content, making it non-interactive and hidden from screen readers. When the modal is closed, the `inert` attribute is removed, and the main content becomes interactive again.

```html
<div id="main-content" inert>
    <p>This is the main content of the page. It will be inactive when the modal is open.</p>
</div>

<div id="modal" role="dialog" aria-modal="true">
    <h2>Modal Title</h2>
    <p>This is the content inside the modal.</p>
    <button onclick="closeModal()">Close Modal</button>
</div>

<script>
function openModal() {
    document.getElementById('main-content').setAttribute('inert', '');
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('main-content').removeAttribute('inert');
    document.getElementById('modal').style.display = 'none';
}
</script>
```

### Best Practices for Using the `inert` Attribute

- Ensure that when you use `inert`, the visually inactive or disabled state of elements is clear to sighted users. For example, dimming or blurring background content when a modal is open can complement the `inert` attribute.
- Don't overuse `inert`, as doing so might unintentionally make significant portions of your page non-interactive and inaccessible. Use it judiciously to manage user focus and interaction only when necessary.
- When dynamically adding and removing the `inert` attribute, ensure that it is properly removed when no longer needed so that users can regain access to previously disabled content.

---

## The `aria-live` Attribute

You can use the `aria-live` attribute to notify assistive technologies about dynamic content changes on a webpage. When `aria-live` is applied to an element, screen readers are alerted when the content inside that element is updated, ensuring that users are informed about important changes that occur after the page has initially loaded.

This attribute can be useful for content that updates dynamically, such as notifications, alerts, chat messages, or stock prices. It ensures that users are aware of changes that might otherwise go unnoticed.

### Possible Values for `aria-live`

There are three main values: `off`, `polite`, and `assertive`.

- `off`: Default value, updates to the element will not be announced by screen readers.
- `polite`: Updates will be announced by the screen reader, but only after the user has finished interacting with the current task or reading other content. This ensures that the update does not interrupt the user’s current activity.

In the example below, each new message is added to the `#messages` container, which has `aria-live="polite"`. The screen reader will announce the new message only after the user finishes their current activity.

```html
<div id="chat-window">
    <div id="messages" aria-live="polite">
        <!-- Existing messages are here -->
        <div>John: Hello!</div>
        <div>You: Hi there!</div>
    </div>
</div>

<button onclick="addMessage()">Send Message</button>

<script>
function addMessage() {
    const newMessage = document.createElement('div');
    newMessage.textContent = 'Alice: How are you?';
    document.getElementById('messages').appendChild(newMessage);
}
</script>
```

- `assertive`: Updates will be announced immediately, interrupting whatever the screen reader is currently announcing. Use this for urgent or critical information that requires the user’s immediate attention.

In the example below, updates to the stock prices are placed within a container that has `aria-live="assertive"`.

```html
<div id="stock-ticker" aria-live="assertive">
    <!-- Initial stock prices -->
    <div id="stock1">Stock A: $100</div>
    <div id="stock2">Stock B: $150</div>
</div>

<button onclick="updateStockPrices()">Update Prices</button>

<script>
function updateStockPrices() {
    document.getElementById('stock1').textContent = 'Stock A: $95';
    document.getElementById('stock2').textContent = 'Stock B: $155';
}
</script>
```

### Best Practices for Using `aria-live`

- Use `aria-live="polite"` for non-critical updates to avoid disrupting the user’s experience. Reserve `aria-live="assertive"` for urgent updates that require immediate attention, such as critical errors or security warnings.
- Be mindful of how often you use `aria-live` elements on a page. Overusing it can lead to an overstimulating experience for users who rely on screen readers, as they may be overwhelmed by frequent announcements.
- Don’t use `aria-live` on content that doesn’t need to be announced, or on content that’s already being communicated to the user in another way.
- `aria-live` is particularly useful for content that is updated dynamically, such as live sports scores, breaking news, or chat applications. Make sure that the user is kept informed of important updates as they occur.

---

## The `aria-roledescription` Attribute

You can use `aria-roledescription` to provide a human-readable, localized description for the role of an element. It overrides the implicit or explicit `role` value for screen readers, and allows developers to create more intuitive and context-specific descriptions for complex or unconventional user interface components that may not have a standard role name.

You can use it to provide a clearer explanation of the element’s purpose or functionality.

In the example below, screen readers will announce it as "Bookmark Button" instead of just "Button."

```html
<button role="button" aria-roledescription="Bookmark Button">
    <span aria-hidden="true">⭐</span> Save this page
</button>
```

You can also use it to support internationalization, like providing role descriptions in different languages.

```html
<button role="button" aria-roledescription="Search Button" lang="en">
    <span aria-hidden="true">🔍</span> Search
</button>

<button role="button" aria-roledescription="Botón de busqueda" lang="es">
    <span aria-hidden="true">🔍</span> Buscar
</button>

<button role="button" aria-roledescription="Bouton de recherche" lang="fr">
    <span aria-hidden="true">🔍</span> Recherche
</button>
```

### Best Practices for Using `aria-roledescription`

- Only use `aria-roledescription` when the standard role does not sufficiently describe the element's purpose.
- The description should be short, clear, and directly related to the element's function. Avoid using jargon or overly technical language.
- `aria-roledescription` should be used alongside an appropriate ARIA role, not as a replacement. The `role` provides the foundational context (like `"button"` or `"listbox"`), while the description adds clarity.
- If your application supports multiple languages, ensure that the `aria-roledescription` values are localized to match the user's language preferences. This helps provide a consistent and understandable experience.
- Ensure that the `aria-roledescription` does not repeat or conflict with other ARIA attributes or element labels. It should complement, not duplicate, the information already provided.

---

## The `aria-atomic` Attribute

You can use the `aria-atomic` attribute to control how updates to an element are announced by assistive technologies. When `aria-atomic` is set to `true`, it indicates that when changes occur within the element, the entire content of the element should be treated as a single unit and announced in full by the screen reader (rather than announcing only the changed parts).

In cases where updates to part of an element might make the overall context unclear, `aria-atomic` helps by providing a full announcement of the element's content, giving users a complete understanding of the context.

It is often used in conjunction with `aria-live`. While `aria-live` determines how updates are announced (politely or assertively), `aria-atomic` controls whether the entire content is read or just the changes.

```html
<div id="news-ticker" role="region" aria-live="polite" aria-atomic="true">
  Breaking News: Major storm expected this weekend.
</div>
<button onclick="updateHeadline()">Update Headline</button>
<script>
function updateHeadline() {
    document.getElementById('news-ticker').innerText = 'Breaking News: Stock market hits record high!';
}
</script>
```

### Best Practices for Using `aria-atomic`

- Apply `aria-atomic="true"` only to elements where a full announcement of updates is essential for understanding the context.
- When using `aria-atomic="true"`, ensure that the content within the element provides consistent and complete context to users.
- Use `aria-atomic` in combination with `aria-live` to specify how updates should be announced. This ensures that the updates are announced in the appropriate manner and with full context.

---

## Conclusion

Understanding and effectively using HTML attributes for accessibility is crucial for creating inclusive web experiences. By understanding and using these attributes appropriately, you can ensure that your application has a great user experience for all visitors.

### Resources

<SiteInfo
  name="Providing Accessible Names and Descriptions | APG | WAI | W3C"
  desc="Accessibility resources free online from the international standards organization: W3C Web Accessibility Initiative (WAI)."
  url="https://w3.org/WAI/ARIA/apg/practices/names-and-descriptions/"
  logo="https://w3.org/favicon.ico"
  preview="https://w3.org/WAI/assets/images/social-sharing-default.jpg"/>

<SiteInfo
  name="ARIA - Accessibility | MDN"
  desc="Accessible Rich Internet Applications (ARIA) is a set of roles and attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities."
  url="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
  logo="https://developer.mozilla.org/favicon-48x48.cbbd161b.png"
  preview="https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png"/>

<SiteInfo
  name="Read Me First | APG | WAI | W3C"
  desc="Accessibility resources free online from the international standards organization: W3C Web Accessibility Initiative (WAI)."
  url="https://w3.org/WAI/ARIA/apg/practices/read-me-first/"
  logo="https://w3.org/favicon.ico"
  preview="https://w3.org/WAI/assets/images/social-sharing-default.jpg"/>

<SiteInfo
  name="Index | APG | WAI | W3C"
  desc="Accessibility resources free online from the international standards organization: W3C Web Accessibility Initiative (WAI)."
  url="https://w3.org/WAI/ARIA/apg/example-index/#examples_by_props_label"
  logo="https://w3.org/favicon.ico"
  preview="https://w3.org/WAI/assets/images/social-sharing-default.jpg"/>

Thank you so much for reading, I hope this guide helps you create more accessible web content. If you found it helpful, consider sharing.

You can connect with me on [LinkedIn (<FontIcon icon="fa-brands fa-linkedin"/>`elizabeth-meshioye`)](https://linkedin.com/in/elizabeth-meshioye/).

---

<TagLinks />