---
lang: ko-KR
title: How to Build an Expense Tracker with HTML, CSS, and JavaScript
description: Article(s) > How to Build an Expense Tracker with HTML, CSS, and JavaScript
icon: fa-brands fa-js
category: 
  - JavaScript
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - js
  - javascript
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Build an Expense Tracker with HTML, CSS, and JavaScript
    - property: og:description
      content: How to Build an Expense Tracker with HTML, CSS, and JavaScript
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-build-an-expense-tracker-with-html-css-and-javascript.html
prev: /programming/js/articles/README.md
date: 2024-09-11
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1726055511234/dcaa759f-58f9-477d-92da-c8b98b71d310.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "JavaScript > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="How to Build an Expense Tracker with HTML, CSS, and JavaScript"
  desc="Building projects is a great way to practice and improve your web development skills. And that's what we'll do in this in-depth tutorial: build a practical project using HTML, CSS, and JavaScript. If you often find yourself wondering where all your m..."
  url="https://freecodecamp.org/news/how-to-build-an-expense-tracker-with-html-css-and-javascript/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1726055511234/dcaa759f-58f9-477d-92da-c8b98b71d310.png"/>

Building projects is a great way to practice and improve your web development skills. And that's what we'll do in this in-depth tutorial: build a practical project using HTML, CSS, and JavaScript.

If you often find yourself wondering where all your money went or how you managed to spend so much, then this project is for you. I created a simple expense tracker to help manage my own finances, and I decided to share a step-by-step tutorial with the developer community.

In this tutorial, we'll walk through the process of building a basic expense tracker from scratch. Whether you're new to web development or looking to enhance your skills, this project will provide you with practical experience in HTML, CSS, and JavaScript.

By the end, you'll have a fully functional tool to track your income, manage expenses, and maintain a clear overview of your finances within a sleek and user-friendly interface.

We'll start by setting up the structure of the tracker, move on to styling it to make it visually appealing, and finally, we'll implement the functionality that will bring it to life.

[[toc]]

## Prerequisites

To get the most out of this tutorial, having a basic understanding of HTML, CSS, and JavaScript will be beneficial. Familiarity with creating simple web pages and handling basic DOM manipulation in JavaScript will help you follow along more easily.

But if you're new to these technologies, don't worry – I'll guide you through each step with detailed explanations.

---

## Setting Up the HTML Structure

First of all, we need to set up the basic HTML structure. This will serve as the foundation for everything else we'll build. Don’t worry if you’re new to HTML. I'll guide you through each step.

### 1. Create a Basic HTML Template

Start by creating a new file and naming it `index.html`. This file will hold the structure of our expense tracker. Every HTML file starts with a basic template, which includes the `<!DOCTYPE html>` declaration, the `<html>` tag, and the head and body sections.

Here’s what your initial HTML template should look like:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expense Tracker</title>
</head>
<body>

</body>
</html>
```

### 2. Adding a Container

Inside the `<body>` tag, let’s start by adding a `div` element with a class of `container`. This container will hold all the content of our expense tracker, such as the title, input fields, and summary. We use a container to center everything on the page and make sure our layout looks neat.

Here’s how you can do it:

```html
<body>
    <div class="container">
        <!-- All content will go here -->
    </div>
</body>
```

### 3. Add the Expense Tracker Title

Now, let’s add a title to our expense tracker. We’ll use the `<h1>` tag for this, which is typically used for the main heading on a webpage.

Add the following code inside the `container` div:

```html
<h1>Expense Tracker</h1>
```

This heading will display prominently at the top of your page, letting users know what the application is about.

### 4. Setting Up Sections for Income and Expenses

Next, we'll add sections for income and expenses. These sections will include input fields where users can enter their income and expense details.

Start by adding two `div` elements, each with a class of `section`. One section will be for income, and the other for expenses. Here’s the code:

```html
<div class="section">
    <h2>Income</h2>
    <!-- Income input fields will go here -->
</div>

<div class="section">
    <h2>Expenses</h2>
    <!-- Expense input fields will go here -->
</div>
```

The `<h2>` tags inside these sections serve as subheadings to label each section. We’ll add input fields in the next step.

### 5. Adding Input Fields

Now, let’s add input fields for the income section. Users will need to enter a description (for example, “Salary”) and an amount. Each input field will be wrapped in a `div` with a class of `input-group` for easy styling later.

While this example uses Nigerian Naira (₦) for the currency, you can easily adapt it to any currency you prefer. Simply replace the currency symbol in the placeholder or any labels to match your needs.

Here’s how you can add the input fields:

```html
<div class="input-group">
    <label for="income-description">Description</label>
    <input type="text" id="income-description" placeholder="e.g. Salary">
</div>
<div class="input-group">
    <label for="income-amount">Amount (₦)</label>
    <input type="number" id="income-amount" placeholder="e.g. 100000">
</div>
```

Do the same for the expenses section, but this time, we’ll also add a dropdown for the category of the expense:

```html
<div class="input-group">
    <label for="expense-description">Description</label>
    <input type="text" id="expense-description" placeholder="e.g. Rent">
</div>
<div class="input-group">
    <label for="expense-category">Category</label>
    <select id="expense-category">
        <option value="Housing">Housing</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Others">Others</option>
    </select>
</div>
<div class="input-group">
    <label for="expense-amount">Amount (₦)</label>
    <input type="number" id="expense-amount" placeholder="e.g. 50000">
</div>
```

### 6. Add a Button to Each Section

Finally, we need a button in each section that users will click to add their income or expense to the tracker. Place a `button` element inside each section like this:

```html
<div class="button-group">
    <button onclick="addIncome()">Add Income</button>
</div>
```

And for the expenses section:

```html
<div class="button-group">
    <button onclick="addExpense()">Add Expense</button>
</div>
```

### 7. Displaying the Transaction History

After the income and expenses sections, we need a place to display the transaction history. We’ll use a table for this, as it’s a clean and organized way to present data.

Add the following code after the expenses section:

```html
<div class="table-container">
    <h2>Transaction History</h2>
    <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Category</th>
                <th>Amount (₦)</th>
                <th>Type</th>
                <th>Action</th> <!-- Column for delete button -->
            </tr>
        </thead>
        <tbody id="transaction-history">
            <!-- Transactions will appear here -->
        </tbody>
    </table>
</div>
```

### 8. Adding a Summary Section

At the bottom of the container, let’s add a summary section that shows the total income, total expenses, and the balance.

Here’s the code for the summary:

```html
<div class="summary">
    <h2>Budget Summary</h2>
    <p>Total Income: ₦<span id="total-income">0</span></p>
    <p>Total Expenses: ₦<span id="total-expenses">0</span></p>
    <p>Balance: ₦<span id="balance">0</span></p>
</div>
```

### 9. Adding a Clear All Button

Lastly, include a button that will allow users to clear all the data in one click. This is particularly useful if they want to reset everything.

Here’s how to add the clear button:

```html
<div class="clear-button-group">
    <button onclick="clearAll()">Clear All</button>
</div>
```

### 10. Putting It All Together

When you put all the pieces together, your HTML structure should look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Budget Planner</title>
</head>
<body>
    <div class="container">
        <h1>Expense Tracker</h1>
        <div class="section">
            <h2>Income</h2>
            <div class="input-group">
                <label for="income-description">Description</label>
                <input type="text" id="income-description" placeholder="e.g. Salary">
            </div>
            <div class="input-group">
                <label for="income-amount">Amount (₦)</label>
                <input type="number" id="income-amount" placeholder="e.g. 100000">
            </div>
            <div class="button-group">
                <button onclick="addIncome()">Add Income</button>
            </div>
        </div>
        <div class="section">
            <h2>Expenses</h2>
            <div class="input-group">
                <label for="expense-description">Description</label>
                <input type="text" id="expense-description" placeholder="e.g. Rent">
            </div>
            <div class="input-group">
                <label for="expense-category">Category</label>
                <select id="expense-category">
                    <option value="Housing">Housing</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div class="input-group">
                <label for="expense-amount">Amount (₦)</label>
                <input type="number" id="expense-amount" placeholder="e.g. 50000">
            </div>
            <div class="button-group">
                <button onclick="addExpense()">Add Expense</button>
            </div>
        </div>
        <div class="table-container">
            <h2>Transaction History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount (₦)</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="transaction-history">
                    <!-- Transactions will appear here -->
                </tbody>
            </table>
        </div>
        <div class="summary">
    <h2>Budget Summary</h2>
    <p>Total Income: ₦<span id="total-income">0</span></p>
    <p>Total Expenses: ₦<span id="total-expenses">0</span></p>
    <p>Balance: ₦<span id="balance">0</span></p>
</div>
<div class="clear-button-group">
    <button onclick="clearAll()">Clear All</button>
</div>
```

<div class="embed-wrapper">
        <iframe width="100%" height="350" src="https://codepen.io/joanayebola/embed/NWZEvLy" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="CodePen embed" scrolling="no" allowtransparency="true" allowfullscreen="true" loading="lazy"></iframe></div>
 

---

## Styling the Expense Tracker with CSS

Now that we have our HTML structure in place, it’s time to make our expense tracker visually appealing by adding some CSS. We’ll start with basic styling and then move on to more specific details to ensure everything looks neat and user-friendly.

### 1. Setting Up the CSS File

First, create a new file named `styles.css` in the same directory as your `index.html` file. Link this CSS file to your HTML by adding the following line inside the `<head>` section of `index.html`:

```html
<link rel="stylesheet" href="styles.css">
```

This line tells your HTML file to use the styles defined in `styles.css`.

### 2. Styling the Body

Let’s start by adding some basic styles to the `<body>` to set a nice background color, font, and layout. Open `styles.css` and add the following code:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

- **font-family:** We’re using a simple and clean font.
- **background-color:** A light grey background will give our tracker a soft look.
- **display, justify-content, align-items, height:** These properties center the content vertically and horizontally.

### 3. Styling the Container

Next, we’ll style the `.container` to give it a clean, organized look:

```css
.container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
}
```

- **background-color:** White makes the content stand out against the grey background.
- **padding:** Adds space inside the container so the content isn’t touching the edges.
- **border-radius:** Rounds the corners for a modern look.
- **box-shadow:** Adds a subtle shadow to lift the container off the page slightly.
- **max-width and width:** Ensures the container is responsive and doesn’t exceed a certain width.

### 4. Styling the Headings

Let’s style the headings to make them more visually distinct:

```css
h1, h2 {
    color: #333;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

h2 {
    margin-bottom: 15px;
}
```

- **color:** A dark grey color for the text will keep it readable.
- **text-align:** Centers the headings to create a balanced layout.
- **margin-bottom:** Adds space below the headings.

### 5. Styling the Input Groups

Now, let’s style the input fields and labels within the `.input-group` class:

```css
.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
    color: #555;
}

.input-group input,
.input-group select {
    width: calc(100% - 10px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
}
```

- **margin-bottom:** Adds space between input groups.
- **display: block:** Ensures the labels take up the full width.
- **width:** Makes the input fields and select elements responsive.
- **padding, border, border-radius:** Creates a more polished look for the inputs.
- **box-sizing:** Ensures padding is included in the element’s total width.

### 6. Styling the Buttons

Let’s give the buttons a more interactive and appealing look:

```css
.button-group button,
.clear-button-group button {
    background-color: #FF69B4;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.button-group button:hover,
.clear-button-group button:hover {
    background-color: #FF1493;
}
```

- **background-color:** A vibrant pink for the buttons to make them stand out.
- **color:** White text for contrast against the pink background.
- **border, padding, border-radius:** No border, ample padding, and rounded corners for a modern look.
- **cursor:** Changes the cursor to a pointer on hover, indicating the button is clickable.
- **hover:** Darkens the button color when hovered for a subtle interaction effect.

### 7. Styling the Transaction History Table

We’ll also style the transaction history table to ensure it’s easy to read and visually consistent with the rest of the tracker:

```css
.table-container {
    margin-top: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th, td {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #FF69B4;
    color: white;
}

td {
    color: #333;
}

td button {
    background-color: #FF1493;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

td button:hover {
    background-color: #C71585;
}
```

- **border-collapse:** Ensures there’s no gap between table borders.
- **padding, border-bottom:** Adds padding inside table cells and a border under each row for separation.
- **background-color for th:** Matches the buttons for a cohesive design.
- **td button:** Adds a delete button inside table cells, styled similarly to the other buttons.

### 8. Styling the Summary Section

Finally, let’s style the summary section to make it stand out:

```css
.summary {
    background-color: #FFB3FF;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    color: #333;
}

.summary p {
    margin: 10px 0;
    font-size: 18px;
}

.summary span {
    font-weight: bold;
}
```

- **background-color:** A soft pink background helps distinguish the summary from the rest of the content.
- **padding, border-radius:** Adds spacing and rounded corners.
- **text-align:** Centers the text within the summary.
- **font-size, font-weight:** Increases the font size and weight to make the totals and balance more prominent.

### 9. Putting It All Together

Here’s how your `styles.css` file should look with all the styles combined:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
}

h1, h2 {
    color: #333;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

h2 {
    margin-bottom: 15px;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
    color: #555;
}

.input-group input,
.input-group select {
    width: calc(100% - 10px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
}

.button-group button,
.clear-button-group button {
    background-color: #FF69B4;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.button-group button:hover,
.clear-button-group button:hover {
    background-color: #FF1493;
}

.table-container {
    margin-top: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th, td {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #FF69B4;
    color: white;
}

td {
    color: #333;
}

td button {
    background-color: #FF1493;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

td button:hover {
    background-color: #C71585;
}

.summary {
    background-color: #FFB3FF;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    color: #333;
}

.summary p {
    margin: 10px 0;
    font-size: 18px;
}

.summary span {
    font-weight: bold;
}
```

With this CSS, your expense tracker should now look clean, modern, and easy to use. You can always tweak the colors, fonts, or layout to better suit your style or branding.

https://codepen.io/joanayebola/embed/rNEQzqb

---

## How to Implement Functionality with JavaScript

Now that we have our HTML structure and CSS styling in place, it’s time to bring our expense tracker to life using JavaScript. We’ll add functionality so users can add expenses, view a summary, and remove items from the list.

### 1. Setting Up the JavaScript File

First, create a new file named `script.js` in the same directory as your `index.html` file. Link this JavaScript file to your HTML by adding the following line just before the closing `</body>` tag in `index.html`:

```html
<script src="script.js"></script>
```

This line tells your HTML file to execute the JavaScript code from `script.js`.

### 2. Defining Variables

Let’s start by defining some variables to reference key elements in our HTML. Open `script.js` and add the following code:

```js
const expenseForm = document.getElementById('expense-form');
const expenseInput = document.getElementById('expense-input');
const amountInput = document.getElementById('amount-input');
const categoryInput = document.getElementById('category-input');
const transactionList = document.getElementById('transaction-list');
const totalExpense = document.getElementById('total-expense');
const totalIncome = document.getElementById('total-income');
const balance = document.getElementById('balance');
```

Here’s what each variable does:

- **expenseForm:** References the form where users enter new expenses.
- **expenseInput:** References the input field for the expense description.
- **amountInput:** References the input field for the expense amount.
- **categoryInput:** References the dropdown for selecting the expense category.
- **transactionList:** References the table where we’ll display the transactions.
- **totalExpense, totalIncome, balance:** Reference the elements showing the summary of expenses, income, and balance.

### 3. Adding an Expense

Next, let’s create a function that handles the addition of a new expense when the form is submitted:

```js
expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = expenseInput.value.trim();
    const amount = parseFloat(amountInput.value.trim());
    const category = categoryInput.value;

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense description and amount.');
        return;
    }

    addTransaction(description, amount, category);
    updateSummary();
    clearInputs();
});

function addTransaction(description, amount, category) {
    const transactionRow = document.createElement('tr');

    transactionRow.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount.toFixed(2)}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    transactionList.appendChild(transactionRow);

    transactionRow.querySelector('.delete-btn').addEventListener('click', function() {
        transactionRow.remove();
        updateSummary();
    });
}
```

Here’s what’s happening in this code:

- `event.preventDefault()`**:** Prevents the form from refreshing the page when submitted.
- `addTransaction`**:** Adds a new transaction to the table.
- `updateSummary`**:** Updates the total expenses, income, and balance.
- `clearInputs`**:** Clears the form inputs after the transaction is added.
- **delete button:** Allows users to remove a transaction from the list.

### 4. Updating the Summary

To keep track of the total expenses, income, and balance, we’ll create an `updateSummary` function:

```js
function updateSummary() {
    let totalExpenses = 0;
    let totalIncomes = 0;

    const transactions = transactionList.querySelectorAll('tr');

    transactions.forEach(function(transaction) {
        const amount = parseFloat(transaction.children[2].textContent);
        const category = transaction.children[1].textContent;

        if (category === 'Income') {
            totalIncomes += amount;
        } else {
            totalExpenses += amount;
        }
    });

    totalExpense.textContent = totalExpenses.toFixed(2);
    totalIncome.textContent = totalIncomes.toFixed(2);
    balance.textContent = (totalIncomes - totalExpenses).toFixed(2);
}
```

This function loops through each transaction in the table:

- `totalExpenses` **and** `totalIncomes`**:** Calculated by summing the amounts in each category.
- `totalExpense`**,** `totalIncome`**,** `balance`**:** Updated with the calculated values.

### 5. Clearing Form Inputs

To reset the form after adding a transaction, we’ll create a `clearInputs` function:

```js
function clearInputs() {
    expenseInput.value = '';
    amountInput.value = '';
    categoryInput.value = 'Expense';
}
```

This function simply clears the values of the form inputs.

### 6. Putting It All Together

Here’s what your `script.js` file should look like with all the code combined:

```js
const expenseForm = document.getElementById('expense-form');
const expenseInput = document.getElementById('expense-input');
const amountInput = document.getElementById('amount-input');
const categoryInput = document.getElementById('category-input');
const transactionList = document.getElementById('transaction-list');
const totalExpense = document.getElementById('total-expense');
const totalIncome = document.getElementById('total-income');
const balance = document.getElementById('balance');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = expenseInput.value.trim();
    const amount = parseFloat(amountInput.value.trim());
    const category = categoryInput.value;

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense description and amount.');
        return;
    }

    addTransaction(description, amount, category);
    updateSummary();
    clearInputs();
});

function addTransaction(description, amount, category) {
    const transactionRow = document.createElement('tr');

    transactionRow.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount.toFixed(2)}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    transactionList.appendChild(transactionRow);

    transactionRow.querySelector('.delete-btn').addEventListener('click', function() {
        transactionRow.remove();
        updateSummary();
    });
}

function updateSummary() {
    let totalExpenses = 0;
    let totalIncomes = 0;

    const transactions = transactionList.querySelectorAll('tr');

    transactions.forEach(function(transaction) {
        const amount = parseFloat(transaction.children[2].textContent);
        const category = transaction.children[1].textContent;

        if (category === 'Income') {
            totalIncomes += amount;
        } else {
            totalExpenses += amount;
        }
    });

    totalExpense.textContent = totalExpenses.toFixed(2);
    totalIncome.textContent = totalIncomes.toFixed(2);
    balance.textContent = (totalIncomes - totalExpenses).toFixed(2);
}

function clearInputs() {
    expenseInput.value = '';
    amountInput.value = '';
    categoryInput.value = 'Expense';
}
```

https://codepen.io/joanayebola/embed/rNEQzQb

### 7. Testing the Expense Tracker

With all the code in place, open your `index.html` file in a web browser. Try adding some expenses and incomes to see how they appear in the transaction table. You should see the total expenses, total income, and balance update automatically as you add and delete transactions.

Congratulations! You’ve now implemented a fully functional expense tracker using JavaScript. This tracker is a simple but powerful tool for managing personal finances, and you can further expand it by adding features like data persistence, additional categories, or more detailed reporting.

---

## How to Enhance the User Experience

Now that the core functionality of our expense tracker is up and running, it’s time to improve the user experience. Adding small details and thoughtful enhancements can make your application more intuitive, interactive, and enjoyable to use.

Here are some ideas for enhancing the user experience of our expense tracker:

### 1. Adding Real-Time Feedback

It’s helpful for users to receive feedback as they interact with your application. Let’s add a notification feature to confirm that a transaction was successfully added. We’ll do this by showing a brief message after a transaction is submitted.

In your HTML, add a `div` below the form for the notification message:

```html
<div id="notification" class="hidden"></div>
```

In your CSS, style the notification to make it more visible:

```css
#notification {
  background-color: #28a745;
  color: white;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  border-radius: 5px;
}

.hidden {
  display: none;
}
```

Now, in your JavaScript file, we’ll show this notification for a few seconds after a transaction is added:

```js
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('hidden');

    setTimeout(function() {
        notification.classList.add('hidden');
    }, 2000); // Notification will disappear after 2 seconds
}
```

Update the `addTransaction` function to show this notification when a new transaction is added:

```js
addTransaction(description, amount, category);
showNotification('Transaction added successfully!');
updateSummary();
clearInputs();
```

This way, each time a user submits a transaction, they get immediate feedback.

### 2. Displaying a Balance Indicator

To give users a clearer visual understanding of their financial status, you can implement a balance indicator. This could be a simple color change for the balance display depending on whether the balance is positive or negative.

In your CSS, add styles for different balance states:

```css
.positive {
  color: #28a745; /* Green for positive balance */
}

.negative {
  color: #dc3545; /* Red for negative balance */
}
```

Then, in your `updateSummary` function, apply the appropriate class based on the balance:

```js
function updateSummary() {
    let totalExpenses = 0;
    let totalIncomes = 0;

    const transactions = transactionList.querySelectorAll('tr');

    transactions.forEach(function(transaction) {
        const amount = parseFloat(transaction.children[2].textContent);
        const category = transaction.children[1].textContent;

        if (category === 'Income') {
            totalIncomes += amount;
        } else {
            totalExpenses += amount;
        }
    });

    totalExpense.textContent = totalExpenses.toFixed(2);
    totalIncome.textContent = totalIncomes.toFixed(2);

    const currentBalance = totalIncomes - totalExpenses;
    balance.textContent = currentBalance.toFixed(2);

    // Apply positive/negative class
    if (currentBalance >= 0) {
        balance.classList.remove('negative');
        balance.classList.add('positive');
    } else {
        balance.classList.remove('positive');
        balance.classList.add('negative');
    }
}
```

Now, when users are in the positive, the balance will show up in green. If they are in the negative, it will appear in red.

### 3. Preserving Data with Local Storage

One major enhancement is saving the transactions even after the page is refreshed. For this, we can use the browser’s local storage. By saving the transactions in local storage, the tracker will retain the data between sessions.

First, modify the `addTransaction` function to store the transactions in local storage:

```js
function addTransaction(description, amount, category) {
    const transaction = {
        description: description,
        amount: amount,
        category: category
    };

    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));

    const transactionRow = document.createElement('tr');
    transactionRow.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount.toFixed(2)}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;
    transactionList.appendChild(transactionRow);

    transactionRow.querySelector('.delete-btn').addEventListener('click', function() {
        transactionRow.remove();
        removeTransaction(transaction);
        updateSummary();
    });
}
```

Next, create a `removeTransaction` function to handle deletion from local storage:

```js
function removeTransaction(transactionToRemove) {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    transactions = transactions.filter(function(transaction) {
        return !(transaction.description === transactionToRemove.description &&
                 transaction.amount === transactionToRemove.amount &&
                 transaction.category === transactionToRemove.category);
    });

    localStorage.setItem('transactions', JSON.stringify(transactions));
}
```

To load saved transactions when the page is loaded, create a `loadTransactions` function:

```js
function loadTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    transactions.forEach(function(transaction) {
        addTransaction(transaction.description, transaction.amount, transaction.category);
    });

    updateSummary();
}

window.addEventListener('load', loadTransactions);
```

Now, each time the page loads, the saved transactions are retrieved from local storage and displayed in the table.

### 4. How to Improve Form UX

Let’s make the form more user-friendly by automatically focusing on the description input field when the page loads and clearing the form fields when a user submits a transaction. We can also restrict the amount field to only accept numbers.

To automatically focus on the description field:

```js
window.addEventListener('load', function() {
    expenseInput.focus();
});
```

To restrict the amount input to numbers only, you can add the following attribute to the `amount-input` in your HTML:

```html
<input type="number" id="amount-input" min="0" step="0.01" required>
```

### 5. Using Icons for Better UI

Consider replacing the 'Delete' button text with an icon to improve the visual appeal. You can use an icon library like Font Awesome to add a trash icon.

First, include Font Awesome in your HTML file by adding this line inside the `<head>` section:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
```

Then, in your `addTransaction` function, replace the delete button with an icon:

```js
transactionRow.innerHTML = `
    <td>${description}</td>
    <td>${category}</td>
    <td>${amount.toFixed(2)}</td>
    <td><button class="delete-btn"><i class="fas fa-trash"></i></button></td>
`;
```

This little tweak makes your tracker look more modern and visually appealing.

---

## Testing and Debugging

After implementing the functionality and enhancing the user experience, it’s crucial to test the expense tracker thoroughly to ensure everything works as expected. Testing helps you catch any bugs or issues before they become a problem for users.

In this section, we’ll go over some basic testing and debugging strategies to make sure our expense tracker is solid.

### 1. Testing Basic Functionality

Start by testing the core features of your expense tracker:

- **Adding Transactions**: Enter a few transactions and ensure they appear correctly in the table, with the description, category, and amount displayed properly.
- **Deleting Transactions**: Test the delete functionality by removing transactions and verifying that they are deleted both from the table and from local storage.
- **Updating the Summary**: Check that the total income, total expenses, and balance update correctly as you add and remove transactions.

If any of these functionalities don’t work as expected, double-check the relevant code sections. Ensure that the JavaScript functions are correctly manipulating the DOM and updating local storage.

### >2. Cross-Browser Testing

Your expense tracker should work consistently across different web browsers. Test the application on multiple browsers like Chrome, Firefox, Safari, and Edge. Make sure the layout, functionality, and styling are consistent across all platforms.

If you encounter any browser-specific issues, you might need to adjust your CSS or JavaScript. For instance, some CSS properties might behave differently on different browsers, so ensure compatibility or provide fallbacks.

### 3. Mobile Responsiveness

Test your expense tracker on various devices to ensure it’s fully responsive. Open the application on your phone or use the browser’s developer tools to simulate different screen sizes. Check how the layout adapts, and make sure the tracker is usable on smaller screens.

Look out for issues like:

- Text or buttons being too small or hard to tap.
- The layout breaking or elements overlapping.
- The form fields not fitting the screen.

If you spot any problems, consider adjusting your CSS to improve the mobile experience. You might need to use media queries to tweak the layout for smaller screens.

### 4. Testing Edge Cases

Think about how users might interact with the expense tracker in unexpected ways. Consider testing the following edge cases:

- **Empty Inputs**: Try submitting a transaction with empty fields. Does your form validation prevent this? Ensure that your `required` attributes and JavaScript validations are working.
- **Negative Amounts**: Enter negative numbers in the amount field. Does the tracker handle this correctly? You may want to restrict the input to prevent negative values.
- **Large Numbers**: Test with very large numbers in the amount field. Does the application handle large values without breaking?
- **Duplicate Transactions**: Add the same transaction multiple times. Does your tracker manage duplicates gracefully?

By testing these edge cases, you can identify and address potential bugs before they affect users.

### 5. Debugging Common Issues

If you run into issues while testing, debugging is your next step. Here are some common problems you might encounter and how to troubleshoot them:

- **JavaScript Errors**: If something isn’t working, check the browser’s console for any JavaScript errors. The console will usually provide information about what went wrong and which line of code caused the issue.
- **Layout Problems**: If the layout doesn’t look right, inspect the elements using the browser’s developer tools. Check the CSS properties being applied and see if there are any issues with margins, padding, or Flexbox/Grid settings.
- **Data Not Persisting**: If transactions aren’t being saved or loaded correctly, revisit the local storage code. Make sure you’re correctly saving and retrieving data, and that the JSON is being parsed and stringified properly.
- **Event Listeners Not Firing**: If buttons or other interactive elements aren’t working, ensure that your event listeners are properly attached. Double-check the selectors and make sure the elements exist when you’re trying to attach the listeners.

### 6. User Testing

Finally, consider asking others to test your expense tracker. They might use the application in ways you didn’t anticipate, helping you identify usability issues or bugs that you missed. Watch how they interact with the tracker and gather feedback on any confusing elements or unexpected behaviors.

### Conclusion

Building an expense tracker from scratch is not only a great way to sharpen your web development skills but also provides you with a practical tool to manage your finances.

Throughout this tutorial, we’ve walked through the entire process, from setting up the HTML structure to styling it with CSS, adding functionality with JavaScript, enhancing the user experience, and testing and debugging the final product.

By following these steps, you’ve created a fully functional expense tracker that allows you to easily add, view, and delete transactions, while keeping track of your income and expenses. You’ve also learned how to handle data persistence with local storage, ensuring that your data remains available even after a page refresh.

Remember, the principles and techniques you’ve applied here can be extended to more complex projects. Whether you’re looking to add more features to this tracker or take on a new challenge, the skills you’ve gained will be invaluable.

Thank you for following along with this tutorial. I hope you found it helpful and that you feel more confident in your ability to build web applications.

If you have any questions or suggestions, feel free to reach out on [LinkedIn (<FontIcon icon="fa-brands fa-linkedin"/>`joan-ayebola`)](https://linkedin.com/in/joan-ayebola). If you enjoyed this content, consider [<FontIcon icon="fas fa-globe"/>buying me a coffee](https://buymeacoffee.com/joanayebola) to support the creation of more developer-friendly contents.

---

<TagLinks />