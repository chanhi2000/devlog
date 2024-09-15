---
lang: ko-KR
title: "6. Code Walkthrough"
description: "Article(s) > (6/8) Applied Data Science with Python – Business Intelligence for Developers [Full Book]"
category: 
  - Python
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - py
  - python
head:
  - - meta:
    - property: og:title
      content: "Article(s) > (6/8) Applied Data Science with Python – Business Intelligence for Developers [Full Book]"
    - property: og:description
      content: "6. Code Walkthrough"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/applied-data-science-with-python-book/6-code-walkthrough.html
prev: /programming/py/articles/README.md
date: 2024-06-04
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w1000/2024/06/Applied-Data-Science-with-Python-Cover-Version-2--1-.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Applied Data Science with Python – Business Intelligence for Developers [Full Book]",
  "desc": "In the high-stakes game of modern business, data isn't just an asset – it's the power you need to outpace your competition. But as a developer, you know that turning raw data into actionable insights can be a frustrating battle. Imagine having the power to effortlessly transform raw data into...",
  "link": "/explore/articles/freecodecamp.org/applied-data-science-with-python-book/READE.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Applied Data Science with Python – Business Intelligence for Developers [Full Book]"
  desc="In the high-stakes game of modern business, data isn't just an asset – it's the power you need to outpace your competition. But as a developer, you know that turning raw data into actionable insights can be a frustrating battle. Imagine having the power to effortlessly transform raw data into..."
  url="https://freecodecamp.org/news/applied-data-science-with-python-book/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w1000/2024/06/Applied-Data-Science-with-Python-Cover-Version-2--1-.png"/>

<!-- TODO: 작성 -->

<!-- 
### -code-walkthrough">Code Walkthrough:

Now we'll go through the Python code piece by piece so you can put this project together yourself. I'll explain each section and its outcome within the context of retail sales analysis.

<h4 id="heading-import-libraries">Import Libraries:</h4>
```py
import</span> pandas as</span> pd
import</span> numpy as</span> np
import</span> matplotlib.</span>pyplot as</span> plt
import</span> seaborn as</span> sns
from</span> google.</span>colab import</span> drive
```

- **`pandas`:**  The cornerstone for data manipulation and analysis. Used for working with DataFrames (like spreadsheet structures).
<li>**`numpy`:** Provides tools for numerical computations, arrays, and mathematical functions.
<li>**`matplotlib.pyplot`:**  The core plotting library in Python, enabling creation of charts and graphs.
<li>**`seaborn`:** Builds on Matplotlib, offering a higher-level interface for attractive statistical visualizations.
<li>**`google.colab import drive`:** For working with Google Drive in a Colab environment, allowing file access.

<h4 id="heading-data-loading-and-preparation">Data Loading and Preparation:</h4>
```py
drive.</span>mount(</span>'/content/drive'</span>)</span>
df =</span> pd.</span>read_csv(</span>r"/content/sample_data/train.csv"</span>)</span>
df.</span>head(</span>)</span>
df.</span>info(</span>)</span>
```

- **`drive.mount('/content/drive')`:** Mounts your Google Drive, enabling access to files within your Colab notebook.
<li>**`df = pd.read_csv(...)`:** Reads the CSV data file into a pandas DataFrame named 'df'.
<li>**`df.head()`:** Displays the first few rows of the DataFrame, giving a quick preview of the data.
<li>**`df.info()`:** Summarizes the DataFrame, showing column names, data types, and non-null counts.

<h4 id="heading-handling-missing-data">Handling Missing Data:</h4>
```py
null_count =</span> df[</span>'Postal Code'</span>]</span>.</span>isnull(</span>)</span>.</span>sum</span>(</span>)</span>
print</span>(</span>null_count)</span>
df[</span>"Postal Code"</span>]</span>.</span>fillna(</span>0</span>,</span> inplace =</span> True</span>)</span>
df[</span>'Postal Code'</span>]</span> =</span> df[</span>'Postal Code'</span>]</span>.</span>astype(</span>int</span>)</span>
df.</span>info(</span>)</span>
```

- **`null_count = ...`:** Counts the number of missing values (`NaN`) in the 'Postal Code' column.
<li>**`df["Postal Code"].fillna(0, inplace = True)`:**  Replaces missing 'Postal Code' values with 0 directly in the DataFrame.
<li>**`df['Postal Code'] = ...astype(int)`:**  Converts the 'Postal Code' column to an integer data type.
<li>**`df.info()`:** Checks the DataFrame again to ensure data types and null values are handled correctly.

<h4 id="heading-checking-for-duplicates">Checking for Duplicates:</h4>
```py
if</span> df.</span>duplicated(</span>)</span>.</span>sum</span>(</span>)</span> ></span> 0</span>:</span> 
  print</span>(</span>"Duplicates exist in the DataFrame."</span>)</span>
else</span>:</span>
  print</span>(</span>"No duplicates found in the DataFrame."</span>)</span>
```

- **`df.duplicated().sum() > 0:`** This condition checks if there are any duplicated rows in the DataFrame.
<li>**`if...else`:** Prints an appropriate message indicating whether duplicates were found.

<h4 id="heading-exploratory-data-analysis-eda">Exploratory Data Analysis (EDA)</h4>
<h5 id="heading-customer-segmentation">Customer Segmentation</h5>
Our first step in understanding our customer base is to identify the different segments that exist within it. Let's see how the code helps us do this:

```py
types_of_customers =</span> df[</span>'Segment'</span>]</span>.</span>unique(</span>)</span>
print</span>(</span>types_of_customers)</span>
```

This line of code takes a peek at your dataset's 'Segment' column and extracts all the unique values found within. It's likely that each of these values represents a distinct group of customers who share certain characteristics or behaviors.

Next, we want to know how big each of these segments is:

```py
number_of_customers =</span> df[</span>'Segment'</span>]</span>.</span>value_counts(</span>)</span>.</span>reset_index(</span>)</span>
number_of_customers =</span> number_of_customers.</span>rename(</span>columns=</span>{</span>'Segment'</span>:</span> 'Total Customers'</span>}</span>)</span>
print</span>(</span>number_of_customers.</span>head(</span>)</span>)</span>
```

This code snippet counts how many customers fall into each segment. To make the results easier to understand, we rename a column for clarity.

1. **Visualizing the Distribution**

Now, let's create a pie chart to visualize the breakdown of our customer base:

```py
plt.</span>pie(</span>number_of_customers[</span>'count'</span>]</span>,</span> labels=</span>number_of_customers[</span>'Total Customers'</span>]</span>,</span> autopct=</span>'%1.1f%%'</span>)</span> 
plt.</span>title(</span>'Distribution of Clients'</span>)</span>
plt.</span>show(</span>)</span>
```

This pie chart gives us a quick visual understanding of the relative sizes of our customer segments.

<ol start="2">
<li>**Analyzing Sales Across Segments**

Knowing which segments are the most numerous is helpful, but which ones drive the most sales? Let's find out:

```py
sales_per_segment =</span> df.</span>groupby(</span>'Segment'</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
sales_per_segment =</span> sales_per_segment.</span>rename(</span>columns=</span>{</span>'Segment'</span>:</span> 'Customer Type'</span>,</span> 'Sales'</span>:</span> 'Total Sales'</span>}</span>)</span>
print</span>(</span>sales_per_segment)</span> 

# Bar Chart:</span>
plt.</span>bar(</span>sales_per_segment[</span>'Customer Type'</span>]</span>,</span> sales_per_segment[</span>'Total Sales'</span>]</span>)</span>

# Labels and Title</span>
plt.</span>title(</span>'Sales per Customer Category'</span>)</span>
plt.</span>xlabel(</span>'Customer Type'</span>)</span>
plt.</span>ylabel(</span>'Total Sales'</span>)</span>
plt.</span>show(</span>)</span>

# Pie Chart:</span>
plt.</span>pie(</span>sales_per_segment[</span>'Total Sales'</span>]</span>,</span> labels=</span>sales_per_segment[</span>'Customer Type'</span>]</span>,</span> autopct=</span>'%1.1f%%'</span>)</span>

# Title</span>
plt.</span>title(</span>'Sales per Customer Category'</span>)</span>
plt.</span>show(</span>)</span>
```

This code calculates the total sales generated by each customer segment. We then create bar and pie charts to visualize this sales performance, helping us identify the most valuable segments to the business.

<ol start="3">
<li>**The Power of Segmentation**

By understanding the composition of your customer base, their sizes, and how they contribute to sales, you gain valuable insights to guide your business strategy. This knowledge empowers you to  make informed decisions about marketing campaigns, resource allocation, and even product development to better serve your customers.

<h5 id="heading-customer-loyalty">Customer Loyalty</h5>
```py
customer_order_frequency =</span> df.</span>groupby(</span>[</span>'Customer ID'</span>,</span> 'Customer Name'</span>,</span> 'Segment'</span>]</span>)</span>[</span>'Order ID'</span>]</span>.</span>count(</span>)</span>.</span>reset_index(</span>)</span>
customer_order_frequency.</span>rename(</span>columns=</span>{</span>'Order ID'</span>:</span> 'Total Orders'</span>}</span>,</span> inplace=</span>True</span>)</span>

repeat_customers =</span> customer_order_frequency[</span>customer_order_frequency[</span>'Total Orders'</span>]</span> >=</span> 1</span>]</span>
repeat_customers_sorted =</span> repeat_customers.</span>sort_values(</span>by=</span>'Total Orders'</span>,</span> ascending=</span>False</span>)</span>
print</span>(</span>repeat_customers_sorted.</span>head(</span>12</span>)</span>.</span>reset_index(</span>drop=</span>True</span>)</span>)</span>
```

- **`customer_order_frequency = ...`**: Calculates order frequency (count) for each unique customer.
<li>**`repeat_customers = ...`**: Isolates customers who have placed more than one order.
<li>**`repeat_customers_sorted = ...`**: Sorts repeat customers by their order frequency.
<li>**`print(...)`:** Displays top repeat customers.

**Finding Your Top-Spending Customers**

Identifying who spends the most at your store is valuable. This lets you focus your marketing efforts and create special programs for your most loyal, high-value customers. Let's break down how to do this with a bit of Python and pandas.

**Prerequisites:**

- You have a dataset (usually a CSV file) loaded into a pandas DataFrame named `df`.
<li>Your DataFrame includes columns like "Customer ID", "Customer Name", "Segment", and "Sales".

**Step 1: Group and Sum**

```py
customer_sales =</span> df.</span>groupby(</span>[</span>'Customer ID'</span>,</span> 'Customer Name'</span>,</span> 'Segment'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
```

**Explanation:**

- We use `groupby` to bundle together all the purchases made by each unique customer (based on their ID and other details).
<li>We focus on the 'Sales' column and calculate the `sum` to get their total spending.
<li>`reset_index()` tidies up the output so it looks like a normal table again.

**Step 2: Sorting for the Top**

```py
top_spenders =</span> customer_sales.</span>sort_values(</span>by=</span>'Sales'</span>,</span> ascending=</span>False</span>)</span>
```

**Explanation:**

- We take our `customer_sales` table and `sort_values` based on the 'Sales' column.
<li>`ascending=False` puts the customers with the highest spending at the top of our list.

**Step 3: Print the Results**

```py
print</span>(</span>top_spenders.</span>head(</span>10</span>)</span>.</span>reset_index(</span>drop=</span>True</span>)</span>)</span>
```

**Explanation:**

- `.head(10)` grabs the first 10 rows, showing our top 10 spenders.
<li>`.reset_index(drop=True)` gives our results a clean index from 0 to 9, making it easier to read.

**The Output:**

You'll get a nice table showing your top customers, their details, and their total spending.

Now that you know who your top spenders are, you can:

- **Target promotions directly to them:** They're likely to be receptive to offers and new products.
<li>**Build loyalty programs:** Reward their spending with exclusive benefits.
<li>**Personalize their experience:** Use their purchase history to recommend other things they might like.

<h5 id="heading-understanding-your-shipping-methods">Understanding Your Shipping Methods</h5>
Let's figure out which shipping options your customers use most often. This helps you make sure you're offering the right choices and can spot any potential areas for improvement.

**Prerequisites**

- You have your sales data loaded as a pandas DataFrame named `df`.
<li>This DataFrame has a column named 'Ship Mode' that indicates the shipping method used for each order.

**Step 1:  What Shipping Methods Do You Offer?**

```py
types_of_customers =</span> df[</span>'Ship Mode'</span>]</span>.</span>unique(</span>)</span>
print</span>(</span>types_of_customers)</span>
```

**Explanation:**

- We grab the 'Ship Mode' column and find all the `unique` shipping options within it.
<li>This line neatly prints a list of the different shipping methods you use.

**Step 2: How Popular is Each Method?**

```py
shipping_model =</span> df[</span>'Ship Mode'</span>]</span>.</span>value_counts(</span>)</span>.</span>reset_index(</span>)</span>
shipping_model =</span> shipping_model.</span>rename(</span>columns=</span>{</span>'index'</span>:</span>'Use Frequency'</span>,</span> 'Ship Mode'</span>:</span> 'Mode of Shipment'</span>,</span> 'count'</span> :</span> 'Use Frequency'</span>}</span>)</span>
print</span>(</span>shipping_model)</span>
```

**Explanation:**

- `value_counts()` counts how many times each shipping method appears in your data.
<li>We do some tidying up with `reset_index()` and `rename()` to make the output look like a clear table.
<li>You now have a table showing each 'Mode of Shipment' and its 'Use Frequency'!

**Step 3: Visualizing the Results**

```py
plt.</span>pie(</span>shipping_model[</span>'Use Frequency'</span>]</span>,</span> labels=</span>shipping_model[</span>'Mode of Shipment'</span>]</span>,</span> autopct=</span>'%1.1f%%'</span>)</span> 
plt.</span>title(</span>'Popular Mode Of Shipment'</span>)</span>
plt.</span>show(</span>)</span>
```

**Explanation:**

- We create a pie chart to visualize how much each shipping method is used. Each slice represents a method, and its size shows its popularity.
<li>`autopct='%1.1f%%'` adds percentages to the pie chart for clarity.

**What This Tells You**:

- **Customer Preferences:** See which shipping methods are most popular. Do customers lean towards speed or affordability?
<li>**Potential for Improvement:** Are any important shipping methods rarely used? Maybe they're too expensive, or customers aren't aware of them.
<li>**Data for Decisions:** Use this info to negotiate better rates with carriers, offer shipping options your customers want, and streamline your operations.

<h5 id="heading-exploring-sales-across-locations">Exploring Sales Across Locations</h5>
Knowing where your customers are coming from and where the most sales happen is valuable for targeting your efforts. Let's dive into the code.

**Prerequisites**

- You have a pandas DataFrame named `df`.
<li>It contains columns named 'State' and 'City' (representing customer locations) and 'Sales'.

**Step 1: Customers by State**

```py
state =</span> df[</span>'State'</span>]</span>.</span>value_counts(</span>)</span>.</span>reset_index(</span>)</span>
state =</span> state.</span>rename(</span>columns=</span>{</span>'index'</span>:</span>'State'</span>,</span> 'State'</span>:</span>'Number_of_customers'</span>}</span>)</span>
print</span>(</span>state.</span>head(</span>20</span>)</span>)</span>
```

**Explanation:**

- We count how many customers are in each state using `value_counts()`.
<li>We tidy up the output and rename columns for clarity.
<li>This shows a table of states with the 'Number_of_customers' in each.

**Step 2: Customers by City**

```py
city =</span> df[</span>'City'</span>]</span>.</span>value_counts(</span>)</span>.</span>reset_index(</span>)</span>
city=</span> city.</span>rename(</span>columns=</span>{</span>'index'</span>:</span>'City'</span>,</span> 'City'</span>:</span>'Number_of_customers'</span>}</span>)</span>
print</span>(</span>city.</span>head(</span>15</span>)</span>)</span>
```

**Explanation:**

- Very similar to the above, but we focus on 'City' to see customer concentration within states.
<li>This gives you a table of your top cities based on customer count.

**Step 3: Sales by State**

```py
state_sales =</span> df.</span>groupby(</span>[</span>'State'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
top_sales =</span> state_sales.</span>sort_values(</span>by=</span>'Sales'</span>,</span> ascending=</span>False</span>)</span>
print</span>(</span>top_sales.</span>head(</span>20</span>)</span>.</span>reset_index(</span>drop=</span>True</span>)</span>)</span>
```

**Explanation:**

- We group by 'State' and sum the 'Sales' to see total spending per state.
<li>Sorting shows your top-earning states.

**Step 4: Sales by City**

```py
city_sales =</span> df.</span>groupby(</span>[</span>'City'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
top_city_sales =</span> city_sales.</span>sort_values(</span>by=</span>'Sales'</span>,</span> ascending=</span>False</span>)</span>
print</span>(</span>top_city_sales.</span>head(</span>20</span>)</span>.</span>reset_index(</span>drop=</span>True</span>)</span>)</span>
```

**Explanation:**

- Again, we group, but now by 'City' to find total sales per city.
<li>Sorting reveals your highest-earning cities overall.

**Step 5: Sales by State and City (Optional)**

```py
state_city_sales =</span> df.</span>groupby(</span>[</span>'State'</span>,</span>'City'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
print</span>(</span>state_city_sales.</span>head(</span>20</span>)</span>)</span>
```

**Explanation:**

- Combines 'State' and 'City' for maximum detail about where your sales are concentrated.

**Insights You Gain**:

- **Target Marketing:** Focus on high-performing states/cities where your customer base is large.
<li>**Expansion Planning:** Spot states with lots of customers but low sales – maybe there's room to grow.
<li>**Localize Offers:** Tailor promotions to specific locations based on their spending habits.

<h5 id="heading-exploring-your-product-mix">Exploring Your Product Mix</h5>
Understanding what products drive your sales is crucial. Let's break down how your code helps you analyze this.

**Prerequisites**

- You have a pandas DataFrame named `df`.
<li>It contains columns named 'Category' (broad product type), 'Sub-Category' (more specific product type), and 'Sales'.

**Step 1: What Products Do You Carry?**

```py
products =</span> df[</span>'Category'</span>]</span>.</span>unique(</span>)</span>
print</span>(</span>products)</span>

product_subcategory =</span> df[</span>'Sub-Category'</span>]</span>.</span>unique(</span>)</span>
print</span>(</span>product_subcategory)</span>
```

**Explanation:**

- We use `.unique()` to find all the different categories and sub-categories in your inventory.
<li>This provides a snapshot of your product offerings.

**Step 2: How Many Sub-Categories?**

```py
product_subcategory =</span> df[</span>'Sub-Category'</span>]</span>.</span>nunique(</span>)</span>
print</span>(</span>product_subcategory)</span>
```

**Explanation:**

- `.nunique()` counts the number of unique sub-categories, showing the breadth of your product selections within broader categories.

**Step 3: Category and Sub-Category Breakdown**

```py
subcategory_count =</span> df.</span>groupby(</span>'Category'</span>)</span>[</span>'Sub-Category'</span>]</span>.</span>nunique(</span>)</span>.</span>reset_index(</span>)</span>
subcategory_count =</span> subcategory_count.</span>sort_values(</span>by=</span>'Sub-Category'</span>,</span> ascending=</span>False</span>)</span>
print</span>(</span>subcategory_count)</span>
```

**Explanation:**

- We group by 'Category' and count the unique sub-categories within each.
<li>Sorting reveals which categories offer the greatest product variety.

**Step 4: Sales by Category and Sub-Category**

```py
subcategory_count_sales =</span> df.</span>groupby(</span>[</span>'Category'</span>,</span>'Sub-Category'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
print</span>(</span>subcategory_count_sales)</span>
```

**Explanation:**

- We get granular, grouping by both 'Category' and 'Sub-Category' to calculate total sales for each combination.
<li>This helps spot your best-selling individual products as well as strong categories.

**Step 5: Top Categories by Sales**

```py
product_category =</span> df.</span>groupby(</span>[</span>'Category'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
top_product_category =</span> product_category.</span>sort_values(</span>by=</span>'Sales'</span>,</span> ascending=</span>False</span>)</span>
print</span>(</span>top_product_category.</span>reset_index(</span>drop=</span>True</span>)</span>)</span>

# Plotting a pie chart</span>
plt.</span>pie(</span>.</span>.</span>.</span>)</span> # Your pie chart code</span>
```

**Explanation:**

- We group by 'Category' and sum 'Sales' to get total revenue per category.
<li>Sorting shows your top earners.
<li>The pie chart visualizes the contribution of each category to overall sales

**Step 6: Top Sub-Categories by Sales**

```py
product_subcategory =</span> df.</span>groupby(</span>[</span>'Sub-Category'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
top_product_subcategory =</span> product_subcategory.</span>sort_values(</span>by=</span>'Sales'</span>,</span> ascending=</span>False</span>)</span>
print</span>(</span>top_product_subcategory.</span>reset_index(</span>drop=</span>True</span>)</span>)</span>

# Bar Chart</span>
top_product_subcategory =</span> .</span>.</span>.</span> # Your bar chart code</span>
```

**Explanation:**

- We focus on 'Sub-Category' to reveal your best-selling individual product types.
<li>The bar chart ranks sub-categories by their sales contribution.

**Insights You Gain**:

- **Inventory Decisions:** Stock up on items in high-performing categories and sub-categories. Consider phasing out those that sell poorly.
<li>**Spot Niche Success:** Uncover less-obvious sub-categories with surprising sales potential, suggesting areas to expand.
<li>**Targeted Promotions:** Design promotions around your top-performing categories or individual products.

<h5 id="heading-product-analysis">Product Analysis</h5>
Let's do a walkthrough of the sales analysis code, ensuring we cover each section and its role in understanding trends over time.

**Prerequisites**

- You have a pandas DataFrame named `df`.
<li>It contains columns named 'Order Date' (representing when orders were placed) and 'Sales'.

**Step 1:  Preparing Your Date Data**

```py
# Convert the "Order Date" column to datetime format</span>
df[</span>'Order Date'</span>]</span> =</span> pd.</span>to_datetime(</span>df[</span>'Order Date'</span>]</span>,</span> dayfirst=</span>True</span>)</span>
```

**Explanation:**

- We use `pd.to_datetime()` to transform 'Order Date' into a format pandas can work with for time-based analysis.
<li>`dayfirst=True` might be needed if your dates are in a format like "Day/Month/Year."

**Step 2: Yearly Sales Analysis**

```py
# Group by year and calculate total sales</span>
yearly_sales =</span> df.</span>groupby(</span>df[</span>'Order Date'</span>]</span>.</span>dt.</span>year)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
yearly_sales =</span> yearly_sales.</span>rename(</span>columns=</span>{</span>'Order Date'</span>:</span> 'Year'</span>,</span> 'Sales'</span>:</span>'Total Sales'</span>}</span>)</span>
print</span>(</span>yearly_sales)</span>

# Bar Graph</span>
plt.</span>bar(</span>yearly_sales[</span>'Year'</span>]</span>,</span> yearly_sales[</span>'Total Sales'</span>]</span>)</span> 
# ... (labels and plotting code) </span>

# Line Graph</span>
plt.</span>plot(</span>yearly_sales[</span>'Year'</span>]</span>,</span> yearly_sales[</span>'Total Sales'</span>]</span>,</span> marker=</span>'o'</span>,</span> linestyle=</span>'-'</span>)</span>
# ... (labels and plotting code)</span>
```

**Explanation:**

- We group by the year portion of 'Order Date' and sum the 'Sales' for each year.
<li>This table shows your annual sales figures.
<li>The bar graph visualizes annual sales with each bar representing a year.
<li>The line graph connects your yearly sales data points, highlighting trends across time.

**Step 3: Quarterly Sales (2018 Example)**

```py
# Filter data for 2018 </span>
year_sales =</span> df[</span>df[</span>'Order Date'</span>]</span>.</span>dt.</span>year ==</span> 2018</span>]</span>

# Quarterly sales for 2018</span>
quarterly_sales =</span> year_sales.</span>resample(</span>'Q'</span>,</span> on=</span>'Order Date'</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
quarterly_sales =</span> quarterly_sales.</span>rename(</span>columns=</span>{</span>'Order Date'</span>:</span> 'Quarter'</span>,</span> 'Sales'</span>:</span>'Total Sales'</span>}</span>)</span>
print</span>(</span>quarterly_sales)</span>

# Line graph for 2018 quarterly sales</span>
plt.</span>plot(</span>quarterly_sales[</span>'Quarter'</span>]</span>,</span> quarterly_sales[</span>'Total Sales'</span>]</span>,</span> marker=</span>'o'</span>,</span> linestyle=</span>'--'</span>)</span>
# ... (labels and plotting code)</span>
```

**Explanation:**

- We isolate the data for 2018.
<li>`.resample('Q')` groups by quarter, summing 'Sales'.
<li>The table shows your quarterly sales for 2018.
<li>The line graph plots quarterly sales, potentially revealing seasonal patterns within the year.

**Step 4: Monthly Sales (2018 Example)**

```py
# Monthly sales for 2018</span>
monthly_sales =</span> year_sales.</span>resample(</span>'M'</span>,</span> on=</span>'Order Date'</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
monthly_sales =</span> monthly_sales.</span>rename(</span>columns=</span>{</span>'Order Date'</span>:</span>'Month'</span>,</span> 'Sales'</span>:</span>'Total Montly Sales'</span>}</span>)</span>
print</span>(</span>monthly_sales)</span>  

# Line graph for 2018 monthly sales</span>
plt.</span>plot(</span>monthly_sales[</span>'Month'</span>]</span>,</span> monthly_sales[</span>'Total Montly Sales'</span>]</span>,</span> marker=</span>'o'</span>,</span> linestyle=</span>'--'</span>)</span>
# ... (labels and plotting code)</span>
```

**Explanation:**

- Very similar to quarterly, but  `.resample('M')` groups by month for more fine-grained insights.
<li>The table shows your monthly sales for 2018.
<li>The line graph can uncover even shorter-term trends or month-specific spikes.

**Insights You Gain**:

- **Overall Growth:** Do sales increase year-over-year?
<li>**Seasonality:** Are there busy and slow periods during the year?
<li>**Short-Term Fluctuations:** Spot months with unusual sales patterns needing further investigation.

<h5 id="heading-sales-trends">Sales Trends</h5>
Are your sales peaking at the right times? Do you spot the early signs of upcoming slowdowns? Let's decipher the code to find the answers.

**Prerequisites:**

- You have a pandas DataFrame named `df`.
<li>It contains columns named 'Order Date' and 'Sales'.

**Step 1: Prepare Your Data**

```py
# Convert the "Order Date" column to datetime format</span>
df[</span>'Order Date'</span>]</span> =</span> pd.</span>to_datetime(</span>df[</span>'Order Date'</span>]</span>,</span> dayfirst=</span>True</span>)</span>
```

**Explanation:**

- `pd.to_datetime()` transforms the 'Order Date' column into a format suitable for time-based analysis.
<li>`dayfirst=True` might be needed if your dates are in a format like "Day/Month/Year."

**Step 2: Monthly Sales Trends**

```py
# Group by months and calculate total sales</span>
monthly_sales =</span> df.</span>groupby(</span>df[</span>'Order Date'</span>]</span>.</span>dt.</span>to_period(</span>'M'</span>)</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span> 

# Plot monthly sales trends</span>
plt.</span>figure(</span>figsize=</span>(</span>12</span>,</span> 26</span>)</span>)</span>  
plt.</span>subplot(</span>3</span>,</span> 1</span>,</span> 1</span>)</span> 
monthly_sales.</span>plot(</span>kind=</span>'line'</span>,</span> marker=</span>'o'</span>)</span> 
# ... (labels and plotting code)</span>
```

**Explanation:**

- `.dt.to_period('M')` groups dates by month.
<li>`['Sales'].sum()` calculates total sales per month.
<li>`kind='line'`, `marker='o'` create a line plot with markers for visual clarity.

**Step 3: Quarterly and Yearly Trends**

```py
# Code for quarterly sales (very similar to monthly)</span>
quarterly_sales =</span> df.</span>groupby(</span>df[</span>'Order Date'</span>]</span>.</span>dt.</span>to_period(</span>'Q'</span>)</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span> 
# ... (plotting code)</span>

# Code for yearly sales </span>
yearly_sales =</span> df.</span>groupby(</span>df[</span>'Order Date'</span>]</span>.</span>dt.</span>to_period(</span>'Y'</span>)</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span> 
# ... (plotting code)</span>
```

**Explanation:**

- The structure mirrors the monthly sales analysis. We change `to_period()` to 'Q' for quarters and 'Y' for years.

**Step 4: Daily Sales Over Time**

```py
# Group by "Order Date" and calculate the sum of sales</span>
df_summary =</span> df.</span>groupby(</span>'Order Date'</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>

# Create a line plot</span>
plt.</span>figure(</span>figsize=</span>(</span>30</span>,</span> 8</span>)</span>)</span>
plt.</span>plot(</span>df_summary[</span>'Order Date'</span>]</span>,</span> df_summary[</span>'Sales'</span>]</span>,</span> marker=</span>'o'</span>,</span> linestyle=</span>'-'</span>)</span>
# ... (labels and plotting code)</span>
```

**Explanation:**

- We group directly by 'Order Date' without any date conversion for a day-by-day sales view.
<li>This line plot can reveal very short-term fluctuations or spikes in sales.

**What You Gain From These Visualizations**:

- **Monthly Trends:** Identify seasonal sales patterns across the year.
<li>**Quarterly Trends:** Spot broader trends, perhaps tied to business cycles or marketing efforts.
<li>**Yearly Trends:** Observe long-term growth, decline, or stagnation in your sales.
<li>**Daily Fluctuation**s: Pinpoint specific days with unusually high or low sales, potentially needing more investigation.

<h5 id="heading-geographical-mapping-analysis">Geographical Mapping Analysis</h5>
Ready to target your marketing dollars? Let's visualize your sales by state to pinpoint areas with the most potential.

**Prerequisites:**

- You have a pandas DataFrame named `df`.
<li>It contains columns named 'State' (full state names) and 'Sales'.

**Step 1: Import Libraries**

```py
import</span> plotly.</span>graph_objects as</span> go 
from</span> plotly.</span>subplots import</span> make_subplots 
import</span> plotly.</span>io as</span> pio
```

**Explanation:**

- `plotly.graph_objects` provides tools for creating interactive Plotly graphs, including choropleth maps.
<li>`plotly.subplots` is for complex layouts with multiple plots (not used in this specific code).
<li>`plotly.io` prepares Plotly for use in a Jupyter Notebook environment.

**Step 2: State Mapping**

```py
all_state_mapping =</span> {</span> .</span>.</span>.</span> }</span> # Your dictionary mapping state names to abbreviations</span>
```

**Explanation:** 

- Creates a dictionary for converting full state names to their standard 2-letter abbreviations, which are used by Plotly for map labels.

**Step 3: Prepare Data**

```py
# Add Abbreviation</span>
df[</span>'Abbreviation'</span>]</span> =</span> df[</span>'State'</span>]</span>.</span>map</span>(</span>all_state_mapping)</span>

# Calculate Sales per State</span>
sum_of_sales =</span> df.</span>groupby(</span>'State'</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>

# Add Abbreviation to sum_of_sales (for joining later in Plotly)</span>
sum_of_sales[</span>'Abbreviation'</span>]</span> =</span> sum_of_sales[</span>'State'</span>]</span>.</span>map</span>(</span>all_state_mapping)</span>
```

**Explanation:**

- We add a new 'Abbreviation' column to the main DataFrame.
<li>We group by 'State' and calculate total 'Sales' for each state.
<li>We add the 'Abbreviation' column to the sales summary, too, to connect it with the map data.

**Step 4: Create Choropleth Map (Plotly)**

```py
fig =</span> go.</span>Figure(</span>data=</span>go.</span>Choropleth(</span>
    locations=</span>sum_of_sales[</span>'Abbreviation'</span>]</span>,</span> # State abbreviations</span>
    locationmode=</span>'USA-states'</span>,</span> 
    z=</span>sum_of_sales[</span>'Sales'</span>]</span>,</span> # Sales values determine color intensity</span>
    hoverinfo=</span>'location+z'</span>,</span> # Hover shows state + sales value</span>
    showscale=</span>True</span> # Add a color scale for interpreting values visually</span>
)</span>)</span>

fig.</span>update_geos(</span>projection_type=</span>"albers usa"</span>)</span> 
fig.</span>update_layout(</span>
    geo_scope=</span>'usa'</span>,</span>
    title=</span>'Total Sales by U.S. State'</span>
)</span>

fig.</span>show(</span>)</span>
```

**Explanation:**

- `go.Choropleth` creates a US map where state colors represent sales figures.
<li>`update_geos` and `geo_scope` are for proper map display.

**Step 5: Horizontal Bar Graph (Seaborn)**

```py
# Calculate sales per state (repeated - you already have this)</span>
sum_of_sales =</span> .</span>.</span>.</span> 

# Sort by sales in descending order</span>
sum_of_sales =</span> sum_of_sales.</span>sort_values(</span>by=</span>'Sales'</span>,</span> ascending=</span>False</span>)</span>

# Create bar graph</span>
plt.</span>figure(</span>figsize=</span>(</span>10</span>,</span> 13</span>)</span>)</span>
ax =</span> sns.</span>barplot(</span>x=</span>'Sales'</span>,</span> y=</span>'State'</span>,</span> data=</span>sum_of_sales,</span> errorbar=</span>None</span>)</span>
# ... (labels and plotting code)</span>
```

**Explanation:**

- We re-calculate our sales summary (this was already done earlier).
<li>Sorting positions states with the highest sales at the top.
<li>Seaborn's `barplot` creates a horizontal bar chart for easy state name reading.

**Insights You Gain**:

- **Geographical Sales Leaders:** See which states drive the most sales.
<li>**Regional Variations:** Spot high-performing and underperforming regions at a glance.
<li>**Interactive Details (Map):** Hover over states for precise sales figures.

<h5 id="heading-sales-data-by-category">Sales Data by Category</h5>
This will help you make smarter inventory and shipping decisions. Let's analyze how your categories, sub-categories, and shipping choices impact sales.

**Prerequisites:**

- You have a pandas DataFrame named `df`.
<li>It contains columns named 'Category', 'Sub-Category', 'Ship Mode', and 'Sales'.

**Step 1: Import Plotly Express**

```py
import</span> plotly.</span>express as</span> px
```

**Explanation:**  

- We use Plotly Express for its high-level functions that streamline complex visualization creation.

**Step 2: Prepare Data for Pie Chart**

```py
# Summarize sales by Category and Sub-Category</span>
df_summary =</span> df.</span>groupby(</span>[</span>'Category'</span>,</span> 'Sub-Category'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
```

**Explanation:**

- We group by both 'Category' and 'Sub-Category', summing 'Sales' to get total sales for each combination.

**Step 3: Create a Nested Pie Chart**

```py
fig =</span> px.</span>sunburst(</span>df_summary,</span> path=</span>[</span>'Category'</span>,</span> 'Sub-Category'</span>]</span>,</span> values=</span>'Sales'</span>)</span>
fig.</span>show(</span>)</span>
```

**Explanation:**

- `px.sunburst` creates a hierarchical pie chart where the outer ring represents categories and inner slices represent sub-categories.
<li>`path` specifies the hierarchical structure.
<li>`values` determines the size of each slice based on sales contribution.

**Step 4: Prepare Data for Treemap**

```py
# Summarize sales (with Ship Mode)</span>
df_summary =</span> df.</span>groupby(</span>[</span>'Category'</span>,</span> 'Ship Mode'</span>,</span> 'Sub-Category'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
```

**Explanation:**

- We expand the grouping to include 'Ship Mode', calculating sales at an even more granular level.

**Step 5: Create a Treemap**

```py
fig =</span> px.</span>treemap(</span>df_summary,</span> path=</span>[</span>'Category'</span>,</span> 'Ship Mode'</span>,</span> 'Sub-Category'</span>]</span>,</span> values=</span>'Sales'</span>)</span>
fig.</span>show(</span>)</span>
```

**Explanation:**

- `px.treemap` creates a visualization where rectangles represent hierarchical data.
<li>Larger rectangles denote higher sales.
<li>This lets you compare sales performance across different category/sub-category/shipping method combinations.

**Insights You Gain**:

**Nested Pie Chart**

- Dominant categories and their top-selling sub-categories.
<li>Relative sales contribution of each sub-category within a broader category.

**Treemap**

- Sales performance within category/sub-category/shipping method combinations.
<li>Quickly spot the most profitable combinations.

**Benefits of Using Plotly Express**

- **Interactive visualizations:** Hover for details, zoom, explore the data.
<li>**Concise code:** Create complex visuals with minimal code.

### -full-code-3">Full Code:

Here is the full code we have written:

```py
# importation of python libraries</span>

import</span> pandas as</span> pd
import</span> numpy as</span> np
import</span> matplotlib.</span>pyplot as</span> plt
import</span> seaborn as</span> sns



from</span> google.</span>colab import</span> drive
drive.</span>mount(</span>'/content/drive'</span>)</span>

df =</span> pd.</span>read_csv(</span>r"/content/sample_data/train.csv"</span>)</span>

df.</span>head(</span>)</span>

df.</span>info(</span>)</span>

# calculating number of null values in column postal code</span>

null_count =</span> df[</span>'Postal Code'</span>]</span>.</span>isnull(</span>)</span>.</span>sum</span>(</span>)</span>
print</span>(</span>null_count)</span>

# filling null values</span>
df[</span>"Postal Code"</span>]</span>.</span>fillna(</span>0</span>,</span> inplace =</span> True</span>)</span>

df[</span>'Postal Code'</span>]</span> =</span> df[</span>'Postal Code'</span>]</span>.</span>astype(</span>int</span>)</span>

df.</span>info(</span>)</span>

df.</span>describe(</span>)</span>

### Checking for duplicates</span>

if</span> df.</span>duplicated(</span>)</span>.</span>sum</span>(</span>)</span> ></span> 0</span>:</span>  #</span>
    print</span>(</span>"Duplicates exist in the DataFrame."</span>)</span>
else</span>:</span>
    print</span>(</span>"No duplicates found in the DataFrame."</span>)</span>

# Exploratory Data Analysis</span>
## Customer Analysis</span>

df.</span>head(</span>3</span>)</span>

### Customer segmentation</span>

-</span> Group customers based on segments

# Types of customers</span>

types_of_customers =</span> df[</span>'Segment'</span>]</span>.</span>unique(</span>)</span>
print</span>(</span>types_of_customers)</span>

# Count unique values in 'Segment' and reset the index to turn them into a column</span>
number_of_customers =</span> df[</span>'Segment'</span>]</span>.</span>value_counts(</span>)</span>.</span>reset_index(</span>)</span>

# Correct the renaming of columns based on your requirements</span>
number_of_customers =</span> number_of_customers.</span>rename(</span>columns=</span>{</span>'Segment'</span>:</span> 'Total Customers'</span>}</span>)</span>

# Print the renamed DataFrame to confirm correct renaming</span>
print</span>(</span>number_of_customers.</span>head(</span>)</span>)</span>

plt.</span>pie(</span>number_of_customers[</span>'count'</span>]</span>,</span> labels=</span>number_of_customers[</span>'Total Customers'</span>]</span>,</span> autopct=</span>'%1.1f%%'</span>)</span>

# Set the title of the pie chart</span>
plt.</span>title(</span>'Distribution of Clients'</span>)</span>
plt.</span>show(</span>)</span>
print</span>(</span>number_of_customers.</span>columns)</span>

# Customers and Sales</span>

# Group the data by the "Segment" column and calculate the total sales for each segment</span>

sales_per_segment =</span> df.</span>groupby(</span>'Segment'</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>
sales_per_segment =</span> sales_per_segment.</span>rename(</span>columns=</span>{</span>'Segment'</span>:</span> 'Customer Type'</span>,</span> 'Sales'</span>:</span> 'Total Sales'</span>}</span>)</span>

print</span>(</span>sales_per_segment)</span>

# Ploting a bar graph</span>

plt.</span>bar(</span>sales_per_segment[</span>'Customer Type'</span>]</span>,</span> sales_per_segment[</span>'Total Sales'</span>]</span>)</span>

# Labels</span>
plt.</span>title(</span>'Sales per Customer Category'</span>)</span>
plt.</span>xlabel(</span>'Customer Type'</span>)</span>
plt.</span>ylabel(</span>'Total Sales'</span>)</span>

plt.</span>show(</span>)</span>


plt.</span>pie(</span>sales_per_segment[</span>'Total Sales'</span>]</span>,</span> labels=</span>sales_per_segment[</span>'Customer Type'</span>]</span>,</span> autopct=</span>'%1.1f%%'</span>)</span>

# Set the title of the pie chart</span>
plt.</span>title(</span>'Sales per Customer Category'</span>)</span>
plt.</span>show(</span>)</span>

# Number of customers in each segment</span>

customer_segmentation =</span> df[</span>'Segment'</span>]</span>.</span>value_counts(</span>)</span>.</span>reset_index(</span>)</span>
customer_segmentation =</span> customer_segmentation.</span>rename(</span>columns=</span>{</span>'index'</span>:</span> 'Customer Type'</span>,</span> 'Segment'</span>:</span> 'Total Customers'</span>}</span>)</span>

# customer_segmentation = df['Segment'].value_counts().reset_index().rename(columns={'index': 'Customer Type', 'Segment': 'Total Customers'})</span>

print</span>(</span>customer_segmentation)</span>

**</span>Customer Loyalty**</span>
-</span> Examine the repeat purchase behavior of customers



df.</span>head(</span>2</span>)</span>

# Group the data by Customer ID, Customer Name, Segments, and calculate the frequency of orders for each customer</span>
customer_order_frequency =</span> df.</span>groupby(</span>[</span>'Customer ID'</span>,</span> 'Customer Name'</span>,</span> 'Segment'</span>]</span>)</span>[</span>'Order ID'</span>]</span>.</span>count(</span>)</span>.</span>reset_index(</span>)</span>

# Rename the column to represent the frequency of orders</span>
customer_order_frequency.</span>rename(</span>columns=</span>{</span>'Order ID'</span>:</span> 'Total Orders'</span>}</span>,</span> inplace=</span>True</span>)</span>

# Identify repeat customers (customers with order frequency greater than 1)</span>
repeat_customers =</span> customer_order_frequency[</span>customer_order_frequency[</span>'Total Orders'</span>]</span> >=</span> 1</span>]</span>

# Sort "repeat_customers" in descending order based on the "Order Frequency" column</span>
repeat_customers_sorted =</span> repeat_customers.</span>sort_values(</span>by=</span>'Total Orders'</span>,</span> ascending=</span>False</span>)</span>

# Print the result- the first 10 and reset index</span>
print</span>(</span>repeat_customers_sorted.</span>head(</span>12</span>)</span>.</span>reset_index(</span>drop=</span>True</span>)</span>)</span>

### Sales by Customer</span>
-</span> Identify top-</span>spending customers based on their total purchase amount

# Group the data by customer IDs and calculate the total purchase (sales) for each customer</span>
customer_sales =</span> df.</span>groupby(</span>[</span>'Customer ID'</span>,</span> 'Customer Name'</span>,</span> 'Segment'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>

# Sort the customers based on their total purchase in descending order to identify top spenders</span>
top_spenders =</span> customer_sales.</span>sort_values(</span>by=</span>'Sales'</span>,</span> ascending=</span>False</span>)</span>

# Print the top-spending customers</span>
print</span>(</span>top_spenders.</span>head(</span>10</span>)</span>.</span>reset_index(</span>drop=</span>True</span>)</span>)</span>

### Shipping</span>

# Types of Shipping methods</span>

types_of_customers =</span> df[</span>'Ship Mode'</span>]</span>.</span>unique(</span>)</span>
print</span>(</span>types_of_customers)</span>

df.</span>head(</span>2</span>)</span>

# Frequency of use of a shipping methods</span>

shipping_model =</span> df[</span>'Ship Mode'</span>]</span>.</span>value_counts(</span>)</span>.</span>reset_index(</span>)</span>
shipping_model =</span> shipping_model.</span>rename(</span>columns=</span>{</span>'index'</span>:</span>'Use Frequency'</span>,</span> 'Ship Mode'</span>:</span> 'Mode of Shipment'</span>,</span> 'count'</span> :</span> 'Use Frequency'</span>}</span>)</span>

print</span>(</span>shipping_model)</span>


# Plotting a Pie chart</span>

plt.</span>pie(</span>shipping_model[</span>'Use Frequency'</span>]</span>,</span> labels=</span>shipping_model[</span>'Mode of Shipment'</span>]</span>,</span> autopct=</span>'%1.1f%%'</span>)</span>

# Set the title of the pie chart</span>
plt.</span>title(</span>'Popular Mode Of Shipment'</span>)</span>
plt.</span>show(</span>)</span>


### Geographical Analysis</span>

# Customers per state</span>

state =</span> df[</span>'State'</span>]</span>.</span>value_counts(</span>)</span>.</span>reset_index(</span>)</span>
state =</span> state.</span>rename(</span>columns=</span>{</span>'index'</span>:</span>'State'</span>,</span> 'State'</span>:</span>'Number_of_customers'</span>}</span>)</span>

print</span>(</span>state.</span>head(</span>20</span>)</span>)</span>

# Customers per city</span>

city =</span> df[</span>'City'</span>]</span>.</span>value_counts(</span>)</span>.</span>reset_index(</span>)</span>
city=</span> city.</span>rename(</span>columns=</span>{</span>'index'</span>:</span>'City'</span>,</span> 'City'</span>:</span>'Number_of_customers'</span>}</span>)</span>

print</span>(</span>city.</span>head(</span>15</span>)</span>)</span>

# Sales per state</span>

# Group the data by state and calculate the total purchases (sales) for each state</span>
state_sales =</span> df.</span>groupby(</span>[</span>'State'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>

# Sort the states based on their total sales in descending order to identify top spenders</span>
top_sales =</span> state_sales.</span>sort_values(</span>by=</span>'Sales'</span>,</span> ascending=</span>False</span>)</span>

# Print the states</span>
print</span>(</span>top_sales.</span>head(</span>20</span>)</span>.</span>reset_index(</span>drop=</span>True</span>)</span>)</span>

# Group the data by state and calculate the total purchase (sales) for each city</span>
city_sales =</span> df.</span>groupby(</span>[</span>'City'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>

# Sort the cities based on their sales in descending order to identify top cities</span>
top_city_sales =</span> city_sales.</span>sort_values(</span>by=</span>'Sales'</span>,</span> ascending=</span>False</span>)</span>

# Print the states</span>
print</span>(</span>top_city_sales.</span>head(</span>20</span>)</span>.</span>reset_index(</span>drop=</span>True</span>)</span>)</span>

state_city_sales =</span> df.</span>groupby(</span>[</span>'State'</span>,</span>'City'</span>]</span>)</span>[</span>'Sales'</span>]</span>.</span>sum</span>(</span>)</span>.</span>reset_index(</span>)</span>

print</span>(</span>state_city_sales.</span>head(</span>20</span>)</span>)</span>
```

<h1 id="heading-this-is-formatted-as-code">This is formatted as code</h1>
<pre>`
## Product Analysis

### Product Category Analysis

- Investigate the sales performance of</span> different product

# Types of</span> products in</span> the Stores

products = df['Category'</span>].unique()
print(products)

product_subcategory = df['Sub-Category'</span>].unique()
print(product_subcategory)

# Types of</span> sub category

product_subcategory = df['Sub-Category'</span>].nunique()
print(product_subcategory)

# Group the data by product category and how many sub-category it has
subcategory_count = df.groupby('Category'</span>)['Sub-Category'</span>].nunique().reset_index()
# sort by ascending order
subcategory_count = subcategory_count.sort_values(by='Sub-Category'</span>, ascending=False)
# Print the states
print(subcategory_count)

subcategory_count_sales = df.groupby(['Category'</span>,'Sub-Category'</span>])['Sales'</span>].sum().reset_index()

print(subcategory_count_sales)

# Group the data by product category versus the sales from</span> each product category
product_category = df.groupby(['Category'</span>])['Sales'</span>].sum().reset_index()

# Sort the product category in</span> their descending order and identify top product category
top_product_category = product_category.sort_values(by='Sales'</span>, ascending=False)

# Print the states
print(top_product_category.reset_index(drop=True))

# Plotting a pie chart
plt.pie(top_product_category['Sales'</span>], labels=top_product_category['Category'</span>], autopct='%1.1f%%'</span>)

# set the labels of</span> the pie chart
plt.title('Top Product Categories Based on Sales'</span>)

plt.show()


# Group the data by product sub category versus the sales
product_subcategory = df.groupby(['Sub-Category'</span>])['Sales'</span>].sum().reset_index()

# Sort the product category in</span> their descending order and identify top product category
top_product_subcategory = product_subcategory.sort_values(by='Sales'</span>, ascending=False)

# Print the states
print(top_product_subcategory.reset_index(drop=True))


top_product_subcategory = top_product_subcategory.sort_values(by='Sales'</span>, ascending=True)

# Ploting a bar graph

plt.barh(top_product_subcategory['Sub-Category'</span>], top_product_subcategory['Sales'</span>])

# Labels
plt.title('Top Product Categories Based on Sales'</span>)
plt.xlabel('Product Sub-Category'</span>)
plt.ylabel('Total Sales'</span>)
plt.xticks(rotation=0</span>)

plt.show()


## Sales

# Convert the "Order Date"</span> column to datetime format

df['Order Date'</span>] = pd.to_datetime(df['Order Date'</span>], dayfirst=True)

# Group the data by years and calculate the total sales amount for</span> each year
yearly_sales = df.groupby(df['Order Date'</span>].dt.year)['Sales'</span>].sum()

yearly_sales = yearly_sales.reset_index()
yearly_sales = yearly_sales.rename(columns={'Order Date'</span>: 'Year'</span>, 'Sales'</span>:'Total Sales'</span>})

# yearly_sales =
# Print the total sales for</span> each year
print(yearly_sales)

# Ploting a bar graph

plt.bar(yearly_sales['Year'</span>], yearly_sales['Total Sales'</span>])

# Labels
plt.title('Yearly Sales'</span>)
plt.xlabel('Year'</span>)
plt.ylabel('Total Sales'</span>)
plt.xticks(rotation=45</span>)

plt.show()


# Create a line graph for</span> total sales by year
plt.plot(yearly_sales['Year'</span>], yearly_sales['Total Sales'</span>], marker='o'</span>, linestyle='-'</span>)
plt.xlabel('Year'</span>)
plt.ylabel('Total Sales'</span>)
plt.title('Total Sales by Year'</span>)

# Display the plot
plt.tight_layout()

plt.show()

# Convert the "Order Date"</span> column to datetime format
df['Order Date'</span>] = pd.to_datetime(df['Order Date'</span>], dayfirst=True)

# Filter the data for</span> the year 2018</span>
year_sales = df[df['Order Date'</span>].dt.year == 2018</span>]

# Calculate the quarterly sales for</span> 2018</span>
quarterly_sales = year_sales.resample('Q'</span>, on='Order Date'</span>)['Sales'</span>].sum()

quarterly_sales = quarterly_sales.reset_index()
quarterly_sales = quarterly_sales.rename(columns={'Order Date'</span>: 'Quarter'</span>, 'Sales'</span>:'Total Sales'</span>})


print("Quarterly Sales for 2018:"</span>)
print(quarterly_sales)

# Create a line graph for</span> total sales by year
plt.plot(quarterly_sales['Quarter'</span>], quarterly_sales['Total Sales'</span>], marker='o'</span>, linestyle='--'</span>)

plt.xlabel('Year'</span>)
plt.ylabel('Total Sales'</span>)
plt.title('Total Sales by Year'</span>)

# Display the plot
plt.tight_layout()
plt.xticks(rotation=75</span>)

plt.show()

# Convert the "Order Date"</span> column to datetime format
df['Order Date'</span>] = pd.to_datetime(df['Order Date'</span>], dayfirst=True)

# Filter the data for</span> the year 2018</span>
year_sales = df[df['Order Date'</span>].dt.year == 2018</span>]

# Calculate the monthly sales for</span> 2018</span>
monthly_sales = year_sales.resample('M'</span>, on='Order Date'</span>)['Sales'</span>].sum()

# Renaming the columns
monthly_sales = monthly_sales.reset_index()
monthly_sales = monthly_sales.rename(columns={'Order Date'</span>:'Month'</span>, 'Sales'</span>:'Total Montly Sales'</span>})

# Print the monthly and quarterly sales for</span> 2018</span>
print("Monthly Sales for 2018:"</span>)
print(monthly_sales)


# Create a line graph for</span> total sales by year
plt.plot(monthly_sales['Month'</span>], monthly_sales['Total Montly Sales'</span>], marker='o'</span>, linestyle='--'</span>)

plt.xlabel('Year'</span>)
plt.ylabel('Total Sales'</span>)
plt.title('Total Sales by Month'</span>)

# Display the plot
plt.tight_layout()
plt.xticks(rotation=75</span>)

plt.show()

## Sales Trends

# Convert the "Order Date"</span> column to datetime format
df['Order Date'</span>] = pd.to_datetime(df['Order Date'</span>], dayfirst=True)

# Group the data by months and calculate the total sales amount for</span> each month
monthly_sales = df.groupby(df['Order Date'</span>].dt.to_period('M'</span>))['Sales'</span>].sum()

# Plot the sales trends for</span> months
plt.figure(figsize=(12</span>, 26</span>))

# Monthly Sales Trend
plt.subplot(3</span>, 1</span>, 1</span>)
monthly_sales.plot(kind='line'</span>, marker='o'</span>)
plt.title('Monthly Sales Trend'</span>)
plt.xlabel('Month'</span>)
plt.ylabel('Sales Amount'</span>)

# Adjust layout and display the plots
# plt.tight_layout()
plt.show()

# Assuming you have a DataFrame named "df"</span> with</span> columns "Order Date"</span> and "Sales amount"</span>

# Convert the "Order Date"</span> column to datetime format
df['Order Date'</span>] = pd.to_datetime(df['Order Date'</span>], dayfirst=True)

# Group the data by quarters and calculate the total sales amount for</span> each quarter
quarterly_sales = df.groupby(df['Order Date'</span>].dt.to_period('Q'</span>))['Sales'</span>].sum()

# Plot the sales trends for</span> months, quarters, and years
plt.figure(figsize=(12</span>, 20</span>))

# Quarterly Sales Trend
plt.subplot(3</span>, 1</span>, 2</span>)
quarterly_sales.plot(kind='line'</span>, marker='o'</span>)
plt.title('Quarterly Sales Trend'</span>)
plt.xlabel('Quarter'</span>)
plt.ylabel('Sales Amount'</span>)

# Adjust layout and display the plots
#plt.tight_layout()
plt.show()

# Assuming you have a DataFrame named "df"</span> with</span> columns "Order Date"</span> and "Sales amount"</span>

# Convert the "Order Date"</span> column to datetime format
df['Order Date'</span>] = pd.to_datetime(df['Order Date'</span>], dayfirst=True)

# Group the data by years and calculate the total sales amount for</span> each year
yearly_sales = df.groupby(df['Order Date'</span>].dt.to_period('Y'</span>))['Sales'</span>].sum()

# Plot the sales trends for</span> quarters
plt.figure(figsize=(12</span>, 26</span>))

# Yearly Sales Trend
plt.subplot(3</span>, 1</span>, 3</span>)
yearly_sales.plot(kind='line'</span>, marker='o'</span>)
plt.title('Yearly Sales Trend'</span>)
plt.xlabel('Year'</span>)
plt.ylabel('Sales Amount'</span>)

# Adjust layout and display the plots

plt.show()

# Group by "Order Date"</span> and calculate the sum of</span> sales
df_summary = df.groupby('Order Date'</span>)['Sales'</span>].sum().reset_index()

# Create a line plot
plt.figure(figsize=(30</span>, 8</span>))
plt.plot(df_summary['Order Date'</span>], df_summary['Sales'</span>], marker='o'</span>, linestyle='-'</span>)
plt.xlabel('Order Date'</span>)
plt.ylabel('Sales'</span>)
plt.title('Sales Over Time'</span>)
plt.grid(True)
plt.show()

import</span> plotly.graph_objects as</span> go
from</span> plotly.subplots import</span> make_subplots

# Initialize Plotly in</span> Jupyter Notebook mode
import</span> plotly.io as</span> pio

# Create a mapping for</span> all 50</span> states
all_state_mapping = {
    "Alabama"</span>: "AL"</span>, "Alaska"</span>: "AK"</span>, "Arizona"</span>: "AZ"</span>, "Arkansas"</span>: "AR"</span>,
    "California"</span>: "CA"</span>, "Colorado"</span>: "CO"</span>, "Connecticut"</span>: "CT"</span>, "Delaware"</span>: "DE"</span>,
    "Florida"</span>: "FL"</span>, "Georgia"</span>: "GA"</span>, "Hawaii"</span>: "HI"</span>, "Idaho"</span>: "ID"</span>, "Illinois"</span>: "IL"</span>,
    "Indiana"</span>: "IN"</span>, "Iowa"</span>: "IA"</span>, "Kansas"</span>: "KS"</span>, "Kentucky"</span>: "KY"</span>, "Louisiana"</span>: "LA"</span>,
    "Maine"</span>: "ME"</span>, "Maryland"</span>: "MD"</span>, "Massachusetts"</span>: "MA"</span>, "Michigan"</span>: "MI"</span>, "Minnesota"</span>: "MN"</span>,
    "Mississippi"</span>: "MS"</span>, "Missouri"</span>: "MO"</span>, "Montana"</span>: "MT"</span>, "Nebraska"</span>: "NE"</span>, "Nevada"</span>: "NV"</span>,
    "New Hampshire"</span>: "NH"</span>, "New Jersey"</span>: "NJ"</span>, "New Mexico"</span>: "NM"</span>, "New York"</span>: "NY"</span>,
    "North Carolina"</span>: "NC"</span>, "North Dakota"</span>: "ND"</span>, "Ohio"</span>: "OH"</span>, "Oklahoma"</span>: "OK"</span>,
    "Oregon"</span>: "OR"</span>, "Pennsylvania"</span>: "PA"</span>, "Rhode Island"</span>: "RI"</span>, "South Carolina"</span>: "SC"</span>,
    "South Dakota"</span>: "SD"</span>, "Tennessee"</span>: "TN"</span>, "Texas"</span>: "TX"</span>, "Utah"</span>: "UT"</span>, "Vermont"</span>: "VT"</span>,
    "Virginia"</span>: "VA"</span>, "Washington"</span>: "WA"</span>, "West Virginia"</span>: "WV"</span>, "Wisconsin"</span>: "WI"</span>, "Wyoming"</span>: "WY"</span>
}

# Add the Abbreviation column to the DataFrame
df['Abbreviation'</span>] = df['State'</span>].map(all_state_mapping)

# Group by state and calculate the sum of</span> sales
sum_of_sales = df.groupby('State'</span>)['Sales'</span>].sum().reset_index()

# Add Abbreviation to sum_of_sales
sum_of_sales['Abbreviation'</span>] = sum_of_sales['State'</span>].map(all_state_mapping)

# Create a choropleth map using Plotly
fig = go.Figure(data=go.Choropleth(
    locations=sum_of_sales['Abbreviation'</span>],
    locationmode='USA-states'</span>,
    z=sum_of_sales['Sales'</span>],
    hoverinfo='location+z'</span>,
    showscale=True
))

fig.update_geos(projection_type="albers usa"</span>)
fig.update_layout(
    geo_scope='usa'</span>,
    title='Total Sales by U.S. State'</span>
)

fig.show()

# Group by state and calculaye the sum of</span> sales
sum_of_sales = df.groupby('State'</span>)['Sales'</span>].sum().reset_index()

# Sort the DataFrame by the 'Sales'</span> column in</span> descending order
sum_of_sales = sum_of_sales.sort_values(by='Sales'</span>, ascending=False)

# Create a horinzontal bar graph
plt.figure(figsize=(10</span>, 13</span>))
ax = sns.barplot(x='Sales'</span>, y='State'</span>, data=sum_of_sales, errorbar=None)

plt.xlabel('Sales'</span>)
plt.ylabel('State'</span>)
plt.title('Total Sales by State'</span>)
plt.show()

import</span> plotly.express as</span> px

# Summarize the Sales data by Category and Sub-Category
df_summary = df.groupby(['Category'</span>, 'Sub-Category'</span>])['Sales'</span>].sum().reset_index()

# Create a nested pie chart
fig = px.sunburst(
    df_summary, path=['Category'</span>, 'Sub-Category'</span>], values='Sales'</span>)

fig.show()

# Summarize the Sales data by Category, Ship Mode and Sub-Category
df_summary = df.groupby(['Category'</span>, 'Ship Mode'</span>, 'Sub-Category'</span>])['Sales'</span>].sum().reset_index()

#Create a treemap
fig = px.treemap(df_summary, path=['Category'</span>, 'Ship Mode'</span>, 'Sub-Category'</span>], values='Sales'</span>)

fig.show()
```

-->

---

<TagLinks />