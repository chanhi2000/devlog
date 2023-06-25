---
lang: ko-KR
title: 01. CSS Grid Basics > 
description: 🎨Colt Steele - Mastering CSS Grid > 01. CSS Grid Basics
tags: ["crashcourse", "swift" , "paul-hudson" , "xcode", "appstore"]
meta:
  - name: 🎨Colt Steele - Mastering CSS Grid > 01. CSS Grid Basics
    content: 01. CSS Grid Basics
  - property: og:title
    content: 01. CSS Grid Basics
  - property: og:description
    content: 🎨Colt Steele - Mastering CSS Grid > 01. CSS Grid Basics
  - property: og:url
    content: https://chanhi2000.github.io/explore/crashcourse/colt-steele-mastering-css-grid/01-css-grid-basics.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

<!-- https://stream.mux.com/qr7EZ02ekkXDffeBlUmE8nwBabUJpk74Vnmqprm301HgU.m3u8?redundant_streams=true -->

## 01. Enabling CSS Grid

```card
title: 01. CSS Grid Basics > 01. Enabling CSS Grid
desc: 🎨Colt Steele - Mastering CSS Grid
link: https://www.coltsteele.com/tutorials/mastering-css-grid/css-grid-basics/enabling-css-grid
logo: https://www.coltsteele.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwppkb069%2Fimage%2Fupload%2Fv1684239486%2Fcss-grid-tutorial_dfsfgn.png&w=1080&q=100
color: rgba(225, 176, 102, 0.2)
```


Let's enable CSS Grid in a container element and explore the difference between `grid` and `inline-grid`.

### Turning on Grid

First, let's look at a simple container with 10 colored boxes inside it:

![screenshot](https://res.cloudinary.com/dwppkb069/image/upload/v1684351360/tutorials/images-01_Enabling_Grid.mp4/01_enabling_grid_4_00-18520-so-this-is-what-it-looks-like-when-i-have-no-grid-involved_esurth.png)

```html
<div id="container">
  <div class="box" style="background-color: #FF5722;">FIRST</div>
  ...
  <div class="box" style="background-color: #3F51B5;">TENTH</div>
</div>
```

With no grid involved, the container is centered with a black border and each colored box is an individual `div`. Each `div` goes all the way across the screen, and the height is dictated by the text inside.


![screenshot rainbow](https://res.cloudinary.com/dwppkb069/image/upload/v1684351359/tutorials/images-01_Enabling_Grid.mp4/01_enabling_grid_7_00-27240-and-then-each-of-these-little-rainbow-boxes_ook46y.png)

Here's the starting point of the CSS:

```css
#container {
  margin: 0 auto;
  width: 90%;
  height: 1000px;
  border: 4px solid black;
}
```

To turn on grid, set the `display` property of the container element to `grid`:

```css
#container {
  /* styles from above */
  display: grid;
}
```

Here's what the result looks like:

![empty space screenshot](https://res.cloudinary.com/dwppkb069/image/upload/v1684351359/tutorials/images-01_Enabling_Grid.mp4/01_enabling_grid_16_01-31480-so-there-isnt-any-empty-space_rvs25p.png)

The elements go all the way across the container, but they're taller. Each element grows to take up as much available space as possible.

### Inline Grid

There's a second grid-related option for the display property: `inline-grid`.

```css
#container {
  /* other styles */
  display: inline-grid;
}
```

At first, it looks the same as what we saw before.

However, the difference is that the overall container now behaves as an inline element.

For example, a `span` element and the container will share the same space.

Update the HTML to include a `span` with "I AM INLINE!!":

```html
<span>I AM INLINE!!</span>
<div id="container">
  <!-- colored boxes -->
</div>
```

And notice that the container is inline:

![grid container](https://res.cloudinary.com/dwppkb069/image/upload/v1684351362/tutorials/images-01_Enabling_Grid.mp4/01_enabling_grid_32_02-17600-our-span-and-this-whole-container-are-both-inline_o4ecba.png)

Switching the CSS back to `display: grid`, the container behaves as a block element and doesn't share space like an inline element:


![enabling grid](https://res.cloudinary.com/dwppkb069/image/upload/v1684351361/tutorials/images-01_Enabling_Grid.mp4/01_enabling_grid_35_02-31880-because-it-is-not-an-inline-element_cp3ygi.png)

### Recap

You have two choices to turn on the grid system in a container:

- `display: grid`: The container behaves as a block element.
- `display: inline-grid`: The container behaves as an inline element.

---

## 02. Visualize CSS Grid with DevTools

<!-- https://stream.mux.com/X1X01Vpqml8RGYGbyxUsJfxXEP9WHCA55NW7LCl1ATcA.m3u8?redundant_streams=true -->

```card
title: 01. CSS Grid Basics > 02. Visualize CSS Grid with DevTools
desc: 🎨Colt Steele - Mastering CSS Grid
link: https://www.coltsteele.com/tutorials/mastering-css-grid/css-grid-basics/visualize-css-grid-with-devtools
logo: https://www.coltsteele.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwppkb069%2Fimage%2Fupload%2Fv1684239486%2Fcss-grid-tutorial_dfsfgn.png&w=1080&q=100
color: rgba(225, 176, 102, 0.2)
```

Modern browsers have grid developer tools that you can use to visualize and inspect grid layouts.

In this example, we'll use Chrome DevTools on the rainbow container.

First, open Chrome DevTools by right-clicking on the page and selecting "_Inspect_" or using the keyboard shortcut <kbd>Ctrl</kbd>+<kbd>Shift</kbd><kbd>i</kbd> (Windows) or <kbd>Cmd</kbd>+<kbd>Option</kbd>+<kbd>i</kbd> (Mac).

Go to the __Elements__ tab, then locate the __Layout__ tab in the lower pane and click on it.

Inside of the __Grid Overlays__ section, you will see a list of detected grids.

In our case, there's a single grid with the ID `container`:

![grid dev tools screenshot](https://res.cloudinary.com/dwppkb069/image/upload/v1684351361/tutorials/images-02_grid_dev_tools.mp4/02_grid_dev_tools_8_00-32400-with-a-single-grid-that-it-found--the-div-with-the-id-of-container_mg1tlz.png)

Check the box next to the grid to display grid lines on the page.

In this case the lines were somewhat hard to see, so some transparency was added:

![grid dev tools](https://res.cloudinary.com/dwppkb069/image/upload/v1684351361/tutorials/images-02_grid_dev_tools.mp4/02_grid_dev_tools_8_00-32400-with-a-single-grid-that-it-found--the-div-with-the-id-of-container_mg1tlz.png)

For this simple row example the overlay may not seem useful, but it becomes extremely helpful when working with complex grids with multiple rows, columns, and elements.

You can toggle the grid overlay on and off by checking or unchecking the box in the Layout tab.

---

## 03. Define CSS Grid Columns with `grid-template-columns`

<!-- https://stream.mux.com/OUowQUs1eRPquGOGU8MQjtX4W7Z70002QI1jFQxEW02VWU.m3u8?redundant_streams=true -->

```card
title: 01. CSS Grid Basics > 03. Define CSS Grid Columns with `grid-template-columns`
desc: 🎨Colt Steele - Mastering CSS Grid
link: https://www.coltsteele.com/tutorials/mastering-css-grid/css-grid-basics/converting-a-single-column-layout
logo: https://www.coltsteele.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwppkb069%2Fimage%2Fupload%2Fv1684239486%2Fcss-grid-tutorial_dfsfgn.png&w=1080&q=100
color: rgba(225, 176, 102, 0.2)
```


Now that we have grid enabled for our container of 10 boxes, let's set up some rows and columns.

We will start with the `grid-template-columns` property to define the columns in our grid container.

The `grid-template-columns` property takes a space-separated list of dimensions.

Let's set `grid-template-columns: 200px 100px 200px;`:

```css
#container {
  margin: 0 auto;
  width: 90%;
  height: 1000px;
  border: 4px solid black;

  /* GRID STUFF BELOW THIS LINE */
  display: grid;
  grid-template-columns: 200px 100px 200px;
}
```

This will tell the grid container that we want three columns defined: a 200 pixel wide column, a 100 pixel wide column, and another 200 pixel wide column.

Here's the result:

![grid space screenshot](https://res.cloudinary.com/dwppkb069/image/upload/v1684351359/tutorials/images-03_grid_template_columns.mp4/03_grid_template_columns_9_00-50840-weve-got-a-lot-of-empty-space-here-_fqc2ba.png)

The boxes inside the container will fill these columns from left to right, and then from top to bottom. The widths are 200px, 100px, and 200px as we defined.

If we comment out the HTML markup and open the grid DevTools, we can see the column widths:

![grid column template](https://res.cloudinary.com/dwppkb069/image/upload/v1684351364/tutorials/images-03_grid_template_columns.mp4/03_grid_template_columns_26_01-47320-as-we-just-saw--if-there-is-content-_czuxic.png)

### Creating Equal Sized Columns

If we change the `width` property from 90% to 1000px, we could have four evenly sized columns by updating the `grid-template-columns` property to `grid-template-columns: 250px 250px 250px 250px`:

```css
#container {
  margin: 0 auto;
  width: 1000px;
  height: 1000px;
  border: 4px solid black;

  /* GRID STUFF BELOW THIS LINE */
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
}
```

We'll see a shorthand for this later, but the result is as expected:

![going accross](https://res.cloudinary.com/dwppkb069/image/upload/v1684351363/tutorials/images-03_grid_template_columns.mp4/03_grid_template_columns_34_02-29640-i-now-have-four-evenly-sized-columns-going-across-_jdiour.png)

### Changing Individual Column Sizes

We can also change the size of individual columns.

For example, if we wanted to create small columns on the left and the right, and a wider column in the middle, we could set:

```css
grid-template-columns: 100px 500px 100px;
```

Which results in:

![grid template](https://res.cloudinary.com/dwppkb069/image/upload/v1684351359/tutorials/images-03_grid_template_columns.mp4/03_grid_template_columns_38_02-50560-were-not-controlling-the-height-of-these-rows-right-now_uxyazt.png)

### Recap

Note that in these examples we haven't touched the individual elements yet– they're just filling in the columns that we defined first.

We also haven't controlled the height of the rows yet, only the width of each column.

We have so far only used the `grid-template-columns` property to define columns in a container with grid enabled.

---

## 04. Converting a Single-Column Layout

```card
title: 01. CSS Grid Basics >  > 04. Converting a Single-Column Layout
desc: 🎨Colt Steele - Mastering CSS Grid
link: https://www.coltsteele.com/tutorials/mastering-css-grid/css-grid-basics/converting-a-single-column-layout
logo: https://www.coltsteele.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwppkb069%2Fimage%2Fupload%2Fv1684239486%2Fcss-grid-tutorial_dfsfgn.png&w=1080&q=100
color: rgba(225, 176, 102, 0.2)
```

<!-- https://stream.mux.com/GBpoVloI328OToQi2WSHpVPt3gUfOL6BEFDRXU89mrE.m3u8?redundant_streams=true -->

### Problem

<!-- https://www.coltsteele.com/tutorials/mastering-css-grid/css-grid-basics/converting-a-single-column-layout/exercise -->

---

## 05. Define CSS Grid Rows with `grid-template-rows`

```card
title: 01. CSS Grid Basics > 05. Define CSS Grid Rows with `grid-template-rows`
desc: 🎨Colt Steele - Mastering CSS Grid
link: https://www.coltsteele.com/tutorials/mastering-css-grid/css-grid-basics/define-css-grid-rows-with-grid-template-rows
logo: https://www.coltsteele.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwppkb069%2Fimage%2Fupload%2Fv1684239486%2Fcss-grid-tutorial_dfsfgn.png&w=1080&q=100
color: rgba(225, 176, 102, 0.2)
```

<!-- https://stream.mux.com/sJ6s00mktrrm010266hWFBLgOWHBOTzegXVdG4CcOxO0101c.m3u8?redundant_streams=true -->

---

## 06. Adjust Row Heights in an Existing Layout

```card
title: 01. CSS Grid Basics > 06. Adjust Row Heights in an Existing Layout
desc: 🎨Colt Steele - Mastering CSS Grid
link: https://www.coltsteele.com/tutorials/mastering-css-grid/css-grid-basics/adjust-row-heights-in-an-existing-layout
logo: https://www.coltsteele.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwppkb069%2Fimage%2Fupload%2Fv1684239486%2Fcss-grid-tutorial_dfsfgn.png&w=1080&q=100
color: rgba(225, 176, 102, 0.2)
```

<!-- https://stream.mux.com/XqZSMWTir01puBB56mp0200j9wMLSMtOW9m7woMZlzRNfk.m3u8?redundant_streams=true -->

---

## 07. Combining Rows and Columns to Create Layouts

```card
title: 01. CSS Grid Basics > 07. Combining Rows and Columns to Create Layouts
desc: 🎨Colt Steele - Mastering CSS Grid
link: https://www.coltsteele.com/tutorials/mastering-css-grid/css-grid-basics/combining-rows-and-columns-to-create-layouts
logo: https://www.coltsteele.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwppkb069%2Fimage%2Fupload%2Fv1684239486%2Fcss-grid-tutorial_dfsfgn.png&w=1080&q=100
color: rgba(225, 176, 102, 0.2)
```

<!-- https://stream.mux.com/JwWeJBvbCrm3uw9hEVFWxm996U8oFQcrHe7cCVNkk5M.m3u8?redundant_streams=true -->

---

## 08. Practice Creating a Two-Column, Three-Row Layout

```card
title: 01. CSS Grid Basics > 08. Practice Creating a Two-Column, Three-Row Layout
desc: 🎨Colt Steele - Mastering CSS Grid
link: https://www.coltsteele.com/tutorials/mastering-css-grid/css-grid-basics/practice-creating-a-two-column-three-row-layout
logo: https://www.coltsteele.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwppkb069%2Fimage%2Fupload%2Fv1684239486%2Fcss-grid-tutorial_dfsfgn.png&w=1080&q=100
color: rgba(225, 176, 102, 0.2)
```

<!-- https://stream.mux.com/jrLFVRjCTJrSbTDqjUvZB008CISfKLnNlcSQR7G6xo4k.m3u8?redundant_streams=true -->

---

## 09. Paragraph Layout with CSS Grid

```card
title: 01. CSS Grid Basics > 09. Paragraph Layout with CSS Grid
desc: 🎨Colt Steele - Mastering CSS Grid
link: https://www.coltsteele.com/tutorials/mastering-css-grid/css-grid-basics/paragraph-layout-with-css-grid
logo: https://www.coltsteele.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwppkb069%2Fimage%2Fupload%2Fv1684239486%2Fcss-grid-tutorial_dfsfgn.png&w=1080&q=100
color: rgba(225, 176, 102, 0.2)
```
<!-- https://stream.mux.com/E02E0102cPp801GmD026y5008gbNuxLqNKyFsjPOtCw9jGq0100.m3u8?redundant_streams=true -->

---

<TagLinks />
