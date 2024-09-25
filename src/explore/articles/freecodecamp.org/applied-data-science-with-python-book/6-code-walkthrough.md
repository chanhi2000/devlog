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
  "link": "/explore/articles/freecodecamp.org/applied-data-science-with-python-book/README.md",
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
## Code Walkthrough:

Now we'll go through the Python code piece by piece so you can put this project together yourself. I'll explain each section and its outcome within the context of retail sales analysis.

### Import Libraries:

```py
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from google.colab import drive
```

- **`pandas`:**  The cornerstone for data manipulation and analysis. Used for working with DataFrames (like spreadsheet structures).
- **`numpy`:** Provides tools for numerical computations, arrays, and mathematical functions.
- **`matplotlib.pyplot`:**  The core plotting library in Python, enabling creation of charts and graphs.
- **`seaborn`:** Builds on Matplotlib, offering a higher-level interface for attractive statistical visualizations.
- **`google.colab import drive`:** For working with Google Drive in a Colab environment, allowing file access.

### Data Loading and Preparation:

```py
drive.mount('/content/drive')
df = pd.read_csv(r"/content/sample_data/train.csv")
df.head()
df.info()
```

- **`drive.mount('/content/drive')`:** Mounts your Google Drive, enabling access to files within your Colab notebook.
<li>**`df = pd.read_csv(...)`:** Reads the CSV data file into a pandas DataFrame named 'df'.
<li>**`df.head()`:** Displays the first few rows of the DataFrame, giving a quick preview of the data.
<li>**`df.info()`:** Summarizes the DataFrame, showing column names, data types, and non-null counts.

### Handling Missing Data:

```py
null_count = df['Postal Code'].isnull().sum()
print(null_count)
df["Postal Code"].fillna(0, inplace = True)
df['Postal Code'] = df['Postal Code'].astype(int)
df.info()
```

- **`null_count = ...`:** Counts the number of missing values (`NaN`) in the 'Postal Code' column.
- **`df["Postal Code"].fillna(0, inplace = True)`:**  Replaces missing 'Postal Code' values with 0 directly in the DataFrame.
- **`df['Postal Code'] = ...astype(int)`:**  Converts the 'Postal Code' column to an integer data type.
- **`df.info()`:** Checks the DataFrame again to ensure data types and null values are handled correctly.

### Checking for Duplicates:

```py
if df.duplicated().sum() > 0: 
  print("Duplicates exist in the DataFrame.")
else:
  print("No duplicates found in the DataFrame.")
```

- **`df.duplicated().sum() > 0:`** This condition checks if there are any duplicated rows in the DataFrame.
- **`if...else`:** Prints an appropriate message indicating whether duplicates were found.

### Exploratory Data Analysis (EDA)

##### -customer-segmentation">Customer Segmentation

Our first step in understanding our customer base is to identify the different segments that exist within it. Let's see how the code helps us do this:

```py
types_of_customers = df['Segment'].unique()
print(types_of_customers)
```

This line of code takes a peek at your dataset's 'Segment' column and extracts all the unique values found within. It's likely that each of these values represents a distinct group of customers who share certain characteristics or behaviors.

Next, we want to know how big each of these segments is:

```py
number_of_customers = df['Segment'].value_counts().reset_index()
number_of_customers = number_of_customers.rename(columns={'Segment': 'Total Customers'})
print(number_of_customers.head())
```

This code snippet counts how many customers fall into each segment. To make the results easier to understand, we rename a column for clarity.

#### 1. Visualizing the Distribution

Now, let's create a pie chart to visualize the breakdown of our customer base:

```py
plt.pie(number_of_customers['count'], labels=number_of_customers['Total Customers'], autopct='%1.1f%%') 
plt.title('Distribution of Clients')
plt.show()
```

This pie chart gives us a quick visual understanding of the relative sizes of our customer segments.

#### 2. Analyzing Sales Across Segments

Knowing which segments are the most numerous is helpful, but which ones drive the most sales? Let's find out:

```py
sales_per_segment = df.groupby('Segment')['Sales'].sum().reset_index()
sales_per_segment = sales_per_segment.rename(columns={'Segment': 'Customer Type', 'Sales': 'Total Sales'})
print(sales_per_segment) 

# Bar Chart:
plt.bar(sales_per_segment['Customer Type'], sales_per_segment['Total Sales'])

# Labels and Title
plt.title('Sales per Customer Category')
plt.xlabel('Customer Type')
plt.ylabel('Total Sales')
plt.show()

# Pie Chart:
plt.pie(sales_per_segment['Total Sales'], labels=sales_per_segment['Customer Type'], autopct='%1.1f%%')

# Title
plt.title('Sales per Customer Category')
plt.show()
```

This code calculates the total sales generated by each customer segment. We then create bar and pie charts to visualize this sales performance, helping us identify the most valuable segments to the business.

#### 3. The Power of Segmentation

By understanding the composition of your customer base, their sizes, and how they contribute to sales, you gain valuable insights to guide your business strategy. This knowledge empowers you to  make informed decisions about marketing campaigns, resource allocation, and even product development to better serve your customers.

##### -customer-loyalty">Customer Loyalty

```py
customer_order_frequency = df.groupby(['Customer ID', 'Customer Name', 'Segment'])['Order ID'].count().reset_index()
customer_order_frequency.rename(columns={'Order ID': 'Total Orders'}, inplace=True)

repeat_customers = customer_order_frequency[customer_order_frequency['Total Orders'] >= 1]
repeat_customers_sorted = repeat_customers.sort_values(by='Total Orders', ascending=False)
print(repeat_customers_sorted.head(12).reset_index(drop=True))
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
customer_sales = df.groupby(['Customer ID', 'Customer Name', 'Segment'])['Sales'].sum().reset_index()
```

**Explanation:**

- We use `groupby` to bundle together all the purchases made by each unique customer (based on their ID and other details).
<li>We focus on the 'Sales' column and calculate the `sum` to get their total spending.
<li>`reset_index()` tidies up the output so it looks like a normal table again.

**Step 2: Sorting for the Top**

```py
top_spenders = customer_sales.sort_values(by='Sales', ascending=False)
```

**Explanation:**

- We take our `customer_sales` table and `sort_values` based on the 'Sales' column.
<li>`ascending=False` puts the customers with the highest spending at the top of our list.

**Step 3: Print the Results**

```py
print(top_spenders.head(10).reset_index(drop=True))
```

**Explanation:**

- `.head(10)` grabs the first 10 rows, showing our top 10 spenders.
- `.reset_index(drop=True)` gives our results a clean index from 0 to 9, making it easier to read.

**The Output:**

You'll get a nice table showing your top customers, their details, and their total spending.

Now that you know who your top spenders are, you can:

- **Target promotions directly to them:** They're likely to be receptive to offers and new products.
- **Build loyalty programs:** Reward their spending with exclusive benefits.
- **Personalize their experience:** Use their purchase history to recommend other things they might like.

##### -understanding-your-shipping-methods">Understanding Your Shipping Methods

Let's figure out which shipping options your customers use most often. This helps you make sure you're offering the right choices and can spot any potential areas for improvement.

**Prerequisites**

- You have your sales data loaded as a pandas DataFrame named `df`.
- This DataFrame has a column named 'Ship Mode' that indicates the shipping method used for each order.

**Step 1:  What Shipping Methods Do You Offer?**

```py
types_of_customers = df['Ship Mode'].unique()
print(types_of_customers)
```

**Explanation:**

- We grab the 'Ship Mode' column and find all the `unique` shipping options within it.
<li>This line neatly prints a list of the different shipping methods you use.

**Step 2: How Popular is Each Method?**

```py
shipping_model = df['Ship Mode'].value_counts().reset_index()
shipping_model = shipping_model.rename(columns={'index':'Use Frequency', 'Ship Mode': 'Mode of Shipment', 'count' : 'Use Frequency'})
print(shipping_model)
```

**Explanation:**

- `value_counts()` counts how many times each shipping method appears in your data.
<li>We do some tidying up with `reset_index()` and `rename()` to make the output look like a clear table.
<li>You now have a table showing each 'Mode of Shipment' and its 'Use Frequency'!

**Step 3: Visualizing the Results**

```py
plt.pie(shipping_model['Use Frequency'], labels=shipping_model['Mode of Shipment'], autopct='%1.1f%%') 
plt.title('Popular Mode Of Shipment')
plt.show()
```

**Explanation:**

- We create a pie chart to visualize how much each shipping method is used. Each slice represents a method, and its size shows its popularity.
<li>`autopct='%1.1f%%'` adds percentages to the pie chart for clarity.

**What This Tells You**:

- **Customer Preferences:** See which shipping methods are most popular. Do customers lean towards speed or affordability?
<li>**Potential for Improvement:** Are any important shipping methods rarely used? Maybe they're too expensive, or customers aren't aware of them.
<li>**Data for Decisions:** Use this info to negotiate better rates with carriers, offer shipping options your customers want, and streamline your operations.

##### -exploring-sales-across-locations">Exploring Sales Across Locations

Knowing where your customers are coming from and where the most sales happen is valuable for targeting your efforts. Let's dive into the code.

**Prerequisites**

- You have a pandas DataFrame named `df`.
<li>It contains columns named 'State' and 'City' (representing customer locations) and 'Sales'.

**Step 1: Customers by State**

```py
state = df['State'].value_counts().reset_index()
state = state.rename(columns={'index':'State', 'State':'Number_of_customers'})
print(state.head(20))
```

**Explanation:**

- We count how many customers are in each state using `value_counts()`.
<li>We tidy up the output and rename columns for clarity.
<li>This shows a table of states with the 'Number_of_customers' in each.

**Step 2: Customers by City**

```py
city = df['City'].value_counts().reset_index()
city= city.rename(columns={'index':'City', 'City':'Number_of_customers'})
print(city.head(15))
```

**Explanation:**

- Very similar to the above, but we focus on 'City' to see customer concentration within states.
<li>This gives you a table of your top cities based on customer count.

**Step 3: Sales by State**

```py
state_sales = df.groupby(['State'])['Sales'].sum().reset_index()
top_sales = state_sales.sort_values(by='Sales', ascending=False)
print(top_sales.head(20).reset_index(drop=True))
```

**Explanation:**

- We group by 'State' and sum the 'Sales' to see total spending per state.
<li>Sorting shows your top-earning states.

**Step 4: Sales by City**

```py
city_sales = df.groupby(['City'])['Sales'].sum().reset_index()
top_city_sales = city_sales.sort_values(by='Sales', ascending=False)
print(top_city_sales.head(20).reset_index(drop=True))
```

**Explanation:**

- Again, we group, but now by 'City' to find total sales per city.
<li>Sorting reveals your highest-earning cities overall.

**Step 5: Sales by State and City (Optional)**

```py
state_city_sales = df.groupby(['State','City'])['Sales'].sum().reset_index()
print(state_city_sales.head(20))
```

**Explanation:**

- Combines 'State' and 'City' for maximum detail about where your sales are concentrated.

**Insights You Gain**:

- **Target Marketing:** Focus on high-performing states/cities where your customer base is large.
<li>**Expansion Planning:** Spot states with lots of customers but low sales – maybe there's room to grow.
<li>**Localize Offers:** Tailor promotions to specific locations based on their spending habits.

##### -exploring-your-product-mix">Exploring Your Product Mix

Understanding what products drive your sales is crucial. Let's break down how your code helps you analyze this.

**Prerequisites**

- You have a pandas DataFrame named `df`.
<li>It contains columns named 'Category' (broad product type), 'Sub-Category' (more specific product type), and 'Sales'.

**Step 1: What Products Do You Carry?**

```py
products = df['Category'].unique()
print(products)

product_subcategory = df['Sub-Category'].unique()
print(product_subcategory)
```

**Explanation:**

- We use `.unique()` to find all the different categories and sub-categories in your inventory.
<li>This provides a snapshot of your product offerings.

**Step 2: How Many Sub-Categories?**

```py
product_subcategory = df['Sub-Category'].nunique()
print(product_subcategory)
```

**Explanation:**

- `.nunique()` counts the number of unique sub-categories, showing the breadth of your product selections within broader categories.

**Step 3: Category and Sub-Category Breakdown**

```py
subcategory_count = df.groupby('Category')['Sub-Category'].nunique().reset_index()
subcategory_count = subcategory_count.sort_values(by='Sub-Category', ascending=False)
print(subcategory_count)
```

**Explanation:**

- We group by 'Category' and count the unique sub-categories within each.
<li>Sorting reveals which categories offer the greatest product variety.

**Step 4: Sales by Category and Sub-Category**

```py
subcategory_count_sales = df.groupby(['Category','Sub-Category'])['Sales'].sum().reset_index()
print(subcategory_count_sales)
```

**Explanation:**

- We get granular, grouping by both 'Category' and 'Sub-Category' to calculate total sales for each combination.
<li>This helps spot your best-selling individual products as well as strong categories.

**Step 5: Top Categories by Sales**

```py
product_category = df.groupby(['Category'])['Sales'].sum().reset_index()
top_product_category = product_category.sort_values(by='Sales', ascending=False)
print(top_product_category.reset_index(drop=True))

# Plotting a pie chart
plt.pie(...) # Your pie chart code
```

**Explanation:**

- We group by 'Category' and sum 'Sales' to get total revenue per category.
<li>Sorting shows your top earners.
<li>The pie chart visualizes the contribution of each category to overall sales

**Step 6: Top Sub-Categories by Sales**

```py
product_subcategory = df.groupby(['Sub-Category'])['Sales'].sum().reset_index()
top_product_subcategory = product_subcategory.sort_values(by='Sales', ascending=False)
print(top_product_subcategory.reset_index(drop=True))

# Bar Chart
top_product_subcategory = ... # Your bar chart code
```

**Explanation:**

- We focus on 'Sub-Category' to reveal your best-selling individual product types.
<li>The bar chart ranks sub-categories by their sales contribution.

**Insights You Gain**:

- **Inventory Decisions:** Stock up on items in high-performing categories and sub-categories. Consider phasing out those that sell poorly.
<li>**Spot Niche Success:** Uncover less-obvious sub-categories with surprising sales potential, suggesting areas to expand.
<li>**Targeted Promotions:** Design promotions around your top-performing categories or individual products.

##### -product-analysis">Product Analysis

Let's do a walkthrough of the sales analysis code, ensuring we cover each section and its role in understanding trends over time.

**Prerequisites**

- You have a pandas DataFrame named `df`.
<li>It contains columns named 'Order Date' (representing when orders were placed) and 'Sales'.

**Step 1:  Preparing Your Date Data**

```py
# Convert the "Order Date" column to datetime format
df['Order Date'] = pd.to_datetime(df['Order Date'], dayfirst=True)
```

**Explanation:**

- We use `pd.to_datetime()` to transform 'Order Date' into a format pandas can work with for time-based analysis.
<li>`dayfirst=True` might be needed if your dates are in a format like "Day/Month/Year."

**Step 2: Yearly Sales Analysis**

```py
# Group by year and calculate total sales
yearly_sales = df.groupby(df['Order Date'].dt.year)['Sales'].sum().reset_index()
yearly_sales = yearly_sales.rename(columns={'Order Date': 'Year', 'Sales':'Total Sales'})
print(yearly_sales)

# Bar Graph
plt.bar(yearly_sales['Year'], yearly_sales['Total Sales']) 
# ... (labels and plotting code) 

# Line Graph
plt.plot(yearly_sales['Year'], yearly_sales['Total Sales'], marker='o', linestyle='-')
# ... (labels and plotting code)
```

**Explanation:**

- We group by the year portion of 'Order Date' and sum the 'Sales' for each year.
- This table shows your annual sales figures.
- The bar graph visualizes annual sales with each bar representing a year.
- The line graph connects your yearly sales data points, highlighting trends across time.

**Step 3: Quarterly Sales (2018 Example)**

```py
# Filter data for 2018 
year_sales = df[df['Order Date'].dt.year == 2018]

# Quarterly sales for 2018
quarterly_sales = year_sales.resample('Q', on='Order Date')['Sales'].sum().reset_index()
quarterly_sales = quarterly_sales.rename(columns={'Order Date': 'Quarter', 'Sales':'Total Sales'})
print(quarterly_sales)

# Line graph for 2018 quarterly sales
plt.plot(quarterly_sales['Quarter'], quarterly_sales['Total Sales'], marker='o', linestyle='--')
# ... (labels and plotting code)
```

**Explanation:**

- We isolate the data for 2018.
<li>`.resample('Q')` groups by quarter, summing 'Sales'.
<li>The table shows your quarterly sales for 2018.
<li>The line graph plots quarterly sales, potentially revealing seasonal patterns within the year.

**Step 4: Monthly Sales (2018 Example)**

```py
# Monthly sales for 2018
monthly_sales = year_sales.resample('M', on='Order Date')['Sales'].sum().reset_index()
monthly_sales = monthly_sales.rename(columns={'Order Date':'Month', 'Sales':'Total Montly Sales'})
print(monthly_sales)  

# Line graph for 2018 monthly sales
plt.plot(monthly_sales['Month'], monthly_sales['Total Montly Sales'], marker='o', linestyle='--')
# ... (labels and plotting code)
```

**Explanation:**

- Very similar to quarterly, but  `.resample('M')` groups by month for more fine-grained insights.
<li>The table shows your monthly sales for 2018.
<li>The line graph can uncover even shorter-term trends or month-specific spikes.

**Insights You Gain**:

- **Overall Growth:** Do sales increase year-over-year?
<li>**Seasonality:** Are there busy and slow periods during the year?
<li>**Short-Term Fluctuations:** Spot months with unusual sales patterns needing further investigation.

##### -sales-trends">Sales Trends

Are your sales peaking at the right times? Do you spot the early signs of upcoming slowdowns? Let's decipher the code to find the answers.

**Prerequisites:**

- You have a pandas DataFrame named `df`.
<li>It contains columns named 'Order Date' and 'Sales'.

**Step 1: Prepare Your Data**

```py
# Convert the "Order Date" column to datetime format
df['Order Date'] = pd.to_datetime(df['Order Date'], dayfirst=True)
```

**Explanation:**

- `pd.to_datetime()` transforms the 'Order Date' column into a format suitable for time-based analysis.
<li>`dayfirst=True` might be needed if your dates are in a format like "Day/Month/Year."

**Step 2: Monthly Sales Trends**

```py
# Group by months and calculate total sales
monthly_sales = df.groupby(df['Order Date'].dt.to_period('M'))['Sales'].sum() 

# Plot monthly sales trends
plt.figure(figsize=(12, 26))  
plt.subplot(3, 1, 1) 
monthly_sales.plot(kind='line', marker='o') 
# ... (labels and plotting code)
```

**Explanation:**

- `.dt.to_period('M')` groups dates by month.
<li>`['Sales'].sum()` calculates total sales per month.
<li>`kind='line'`, `marker='o'` create a line plot with markers for visual clarity.

**Step 3: Quarterly and Yearly Trends**

```py
# Code for quarterly sales (very similar to monthly)
quarterly_sales = df.groupby(df['Order Date'].dt.to_period('Q'))['Sales'].sum() 
# ... (plotting code)

# Code for yearly sales 
yearly_sales = df.groupby(df['Order Date'].dt.to_period('Y'))['Sales'].sum() 
# ... (plotting code)
```

**Explanation:**

- The structure mirrors the monthly sales analysis. We change `to_period()` to 'Q' for quarters and 'Y' for years.

**Step 4: Daily Sales Over Time**

```py
# Group by "Order Date" and calculate the sum of sales
df_summary = df.groupby('Order Date')['Sales'].sum().reset_index()

# Create a line plot
plt.figure(figsize=(30, 8))
plt.plot(df_summary['Order Date'], df_summary['Sales'], marker='o', linestyle='-')
# ... (labels and plotting code)
```

**Explanation:**

- We group directly by 'Order Date' without any date conversion for a day-by-day sales view.
<li>This line plot can reveal very short-term fluctuations or spikes in sales.

**What You Gain From These Visualizations**:

- **Monthly Trends:** Identify seasonal sales patterns across the year.
<li>**Quarterly Trends:** Spot broader trends, perhaps tied to business cycles or marketing efforts.
<li>**Yearly Trends:** Observe long-term growth, decline, or stagnation in your sales.
<li>**Daily Fluctuation**s: Pinpoint specific days with unusually high or low sales, potentially needing more investigation.

##### -geographical-mapping-analysis">Geographical Mapping Analysis

Ready to target your marketing dollars? Let's visualize your sales by state to pinpoint areas with the most potential.

**Prerequisites:**

- You have a pandas DataFrame named `df`.
<li>It contains columns named 'State' (full state names) and 'Sales'.

**Step 1: Import Libraries**

```py
import plotly.graph_objects as go 
from plotly.subplots import make_subplots 
import plotly.io as pio
```

**Explanation:**

- `plotly.graph_objects` provides tools for creating interactive Plotly graphs, including choropleth maps.
<li>`plotly.subplots` is for complex layouts with multiple plots (not used in this specific code).
<li>`plotly.io` prepares Plotly for use in a Jupyter Notebook environment.

**Step 2: State Mapping**

```py
all_state_mapping = { ... } # Your dictionary mapping state names to abbreviations
```

**Explanation:** 

- Creates a dictionary for converting full state names to their standard 2-letter abbreviations, which are used by Plotly for map labels.

**Step 3: Prepare Data**

```py
# Add Abbreviation
df['Abbreviation'] = df['State'].map(all_state_mapping)

# Calculate Sales per State
sum_of_sales = df.groupby('State')['Sales'].sum().reset_index()

# Add Abbreviation to sum_of_sales (for joining later in Plotly)
sum_of_sales['Abbreviation'] = sum_of_sales['State'].map(all_state_mapping)
```

**Explanation:**

- We add a new 'Abbreviation' column to the main DataFrame.
<li>We group by 'State' and calculate total 'Sales' for each state.
<li>We add the 'Abbreviation' column to the sales summary, too, to connect it with the map data.

**Step 4: Create Choropleth Map (Plotly)**

```py
fig = go.Figure(data=go.Choropleth(
    locations=sum_of_sales['Abbreviation'], # State abbreviations
    locationmode='USA-states', 
    z=sum_of_sales['Sales'], # Sales values determine color intensity
    hoverinfo='location+z', # Hover shows state + sales value
    showscale=True # Add a color scale for interpreting values visually
))

fig.update_geos(projection_type="albers usa") 
fig.update_layout(
    geo_scope='usa',
    title='Total Sales by U.S. State'
)

fig.show()
```

**Explanation:**

- `go.Choropleth` creates a US map where state colors represent sales figures.
- `update_geos` and `geo_scope` are for proper map display.

**Step 5: Horizontal Bar Graph (Seaborn)**

```py
# Calculate sales per state (repeated - you already have this)
sum_of_sales = ... 

# Sort by sales in descending order
sum_of_sales = sum_of_sales.sort_values(by='Sales', ascending=False)

# Create bar graph
plt.figure(figsize=(10, 13))
ax = sns.barplot(x='Sales', y='State', data=sum_of_sales, errorbar=None)
# ... (labels and plotting code)
```

**Explanation:**

- We re-calculate our sales summary (this was already done earlier).
- Sorting positions states with the highest sales at the top.
- Seaborn's `barplot` creates a horizontal bar chart for easy state name reading.

**Insights You Gain**:

- **Geographical Sales Leaders:** See which states drive the most sales.
- **Regional Variations:** Spot high-performing and underperforming regions at a glance.
- **Interactive Details (Map):** Hover over states for precise sales figures.

##### Sales Data by Category

This will help you make smarter inventory and shipping decisions. Let's analyze how your categories, sub-categories, and shipping choices impact sales.

**Prerequisites:**

- You have a pandas DataFrame named `df`.
- It contains columns named 'Category', 'Sub-Category', 'Ship Mode', and 'Sales'.

**Step 1: Import Plotly Express**

```py
import plotly.express as px
```

**Explanation:**  

- We use Plotly Express for its high-level functions that streamline complex visualization creation.

**Step 2: Prepare Data for Pie Chart**

```py
# Summarize sales by Category and Sub-Category
df_summary = df.groupby(['Category', 'Sub-Category'])['Sales'].sum().reset_index()
```

**Explanation:**

- We group by both 'Category' and 'Sub-Category', summing 'Sales' to get total sales for each combination.

**Step 3: Create a Nested Pie Chart**

```py
fig = px.sunburst(df_summary, path=['Category', 'Sub-Category'], values='Sales')
fig.show()
```

**Explanation:**

- `px.sunburst` creates a hierarchical pie chart where the outer ring represents categories and inner slices represent sub-categories.
- `path` specifies the hierarchical structure.
- `values` determines the size of each slice based on sales contribution.

**Step 4: Prepare Data for Treemap**

```py
# Summarize sales (with Ship Mode)
df_summary = df.groupby(['Category', 'Ship Mode', 'Sub-Category'])['Sales'].sum().reset_index()
```

**Explanation:**

- We expand the grouping to include 'Ship Mode', calculating sales at an even more granular level.

**Step 5: Create a Treemap**

```py
fig = px.treemap(df_summary, path=['Category', 'Ship Mode', 'Sub-Category'], values='Sales')
fig.show()
```

**Explanation:**

- `px.treemap` creates a visualization where rectangles represent hierarchical data.
- Larger rectangles denote higher sales.
- This lets you compare sales performance across different category/sub-category/shipping method combinations.

**Insights You Gain**:

**Nested Pie Chart**

- Dominant categories and their top-selling sub-categories.
- Relative sales contribution of each sub-category within a broader category.

**Treemap**

- Sales performance within category/sub-category/shipping method combinations.
- Quickly spot the most profitable combinations.

**Benefits of Using Plotly Express**

- **Interactive visualizations:** Hover for details, zoom, explore the data.
- **Concise code:** Create complex visuals with minimal code.

### Full Code:

Here is the full code we have written:

```py
# importation of python libraries

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns



from google.colab import drive
drive.mount('/content/drive')

df = pd.read_csv(r"/content/sample_data/train.csv")

df.head()

df.info()

# calculating number of null values in column postal code

null_count = df['Postal Code'].isnull().sum()
print(null_count)

# filling null values
df["Postal Code"].fillna(0, inplace = True)

df['Postal Code'] = df['Postal Code'].astype(int)

df.info()

df.describe()

### Checking for duplicates

if df.duplicated().sum() > 0:  #
    print("Duplicates exist in the DataFrame.")
else:
    print("No duplicates found in the DataFrame.")

# Exploratory Data Analysis
## Customer Analysis

df.head(3)

### Customer segmentation

- Group customers based on segments

# Types of customers

types_of_customers = df['Segment'].unique()
print(types_of_customers)

# Count unique values in 'Segment' and reset the index to turn them into a column
number_of_customers = df['Segment'].value_counts().reset_index()

# Correct the renaming of columns based on your requirements
number_of_customers = number_of_customers.rename(columns={'Segment': 'Total Customers'})

# Print the renamed DataFrame to confirm correct renaming
print(number_of_customers.head())

plt.pie(number_of_customers['count'], labels=number_of_customers['Total Customers'], autopct='%1.1f%%')

# Set the title of the pie chart
plt.title('Distribution of Clients')
plt.show()
print(number_of_customers.columns)

# Customers and Sales

# Group the data by the "Segment" column and calculate the total sales for each segment

sales_per_segment = df.groupby('Segment')['Sales'].sum().reset_index()
sales_per_segment = sales_per_segment.rename(columns={'Segment': 'Customer Type', 'Sales': 'Total Sales'})

print(sales_per_segment)

# Ploting a bar graph

plt.bar(sales_per_segment['Customer Type'], sales_per_segment['Total Sales'])

# Labels
plt.title('Sales per Customer Category')
plt.xlabel('Customer Type')
plt.ylabel('Total Sales')

plt.show()


plt.pie(sales_per_segment['Total Sales'], labels=sales_per_segment['Customer Type'], autopct='%1.1f%%')

# Set the title of the pie chart
plt.title('Sales per Customer Category')
plt.show()

# Number of customers in each segment

customer_segmentation = df['Segment'].value_counts().reset_index()
customer_segmentation = customer_segmentation.rename(columns={'index': 'Customer Type', 'Segment': 'Total Customers'})

# customer_segmentation = df['Segment'].value_counts().reset_index().rename(columns={'index': 'Customer Type', 'Segment': 'Total Customers'})

print(customer_segmentation)

**Customer Loyalty**
- Examine the repeat purchase behavior of customers

df.head(2)

# Group the data by Customer ID, Customer Name, Segments, and calculate the frequency of orders for each customer
customer_order_frequency = df.groupby(['Customer ID', 'Customer Name', 'Segment'])['Order ID'].count().reset_index()

# Rename the column to represent the frequency of orders
customer_order_frequency.rename(columns={'Order ID': 'Total Orders'}, inplace=True)

# Identify repeat customers (customers with order frequency greater than 1)
repeat_customers = customer_order_frequency[customer_order_frequency['Total Orders'] >= 1]

# Sort "repeat_customers" in descending order based on the "Order Frequency" column
repeat_customers_sorted = repeat_customers.sort_values(by='Total Orders', ascending=False)

# Print the result- the first 10 and reset index
print(repeat_customers_sorted.head(12).reset_index(drop=True))

### Sales by Customer
- Identify top-spending customers based on their total purchase amount

# Group the data by customer IDs and calculate the total purchase (sales) for each customer
customer_sales = df.groupby(['Customer ID', 'Customer Name', 'Segment'])['Sales'].sum().reset_index()

# Sort the customers based on their total purchase in descending order to identify top spenders
top_spenders = customer_sales.sort_values(by='Sales', ascending=False)

# Print the top-spending customers
print(top_spenders.head(10).reset_index(drop=True))

### Shipping

# Types of Shipping methods

types_of_customers = df['Ship Mode'].unique()
print(types_of_customers)

df.head(2)

# Frequency of use of a shipping methods

shipping_model = df['Ship Mode'].value_counts().reset_index()
shipping_model = shipping_model.rename(columns={'index':'Use Frequency', 'Ship Mode': 'Mode of Shipment', 'count' : 'Use Frequency'})

print(shipping_model)

# Plotting a Pie chart

plt.pie(shipping_model['Use Frequency'], labels=shipping_model['Mode of Shipment'], autopct='%1.1f%%')

# Set the title of the pie chart
plt.title('Popular Mode Of Shipment')
plt.show()

### Geographical Analysis

# Customers per state

state = df['State'].value_counts().reset_index()
state = state.rename(columns={'index':'State', 'State':'Number_of_customers'})

print(state.head(20))

# Customers per city

city = df['City'].value_counts().reset_index()
city= city.rename(columns={'index':'City', 'City':'Number_of_customers'})

print(city.head(15))

# Sales per state

# Group the data by state and calculate the total purchases (sales) for each state
state_sales = df.groupby(['State'])['Sales'].sum().reset_index()

# Sort the states based on their total sales in descending order to identify top spenders
top_sales = state_sales.sort_values(by='Sales', ascending=False)

# Print the states
print(top_sales.head(20).reset_index(drop=True))

# Group the data by state and calculate the total purchase (sales) for each city
city_sales = df.groupby(['City'])['Sales'].sum().reset_index()

# Sort the cities based on their sales in descending order to identify top cities
top_city_sales = city_sales.sort_values(by='Sales', ascending=False)

# Print the states
print(top_city_sales.head(20).reset_index(drop=True))

state_city_sales = df.groupby(['State','City'])['Sales'].sum().reset_index()

print(state_city_sales.head(20))
```

<h1 id="heading-this-is-formatted-as-code">This is formatted as code</h1>
<pre>`
## Product Analysis

### Product Category Analysis

- Investigate the sales performance of different product

# Types of products in the Stores

products = df['Category'].unique()
print(products)

product_subcategory = df['Sub-Category'].unique()
print(product_subcategory)

# Types of sub category

product_subcategory = df['Sub-Category'].nunique()
print(product_subcategory)

# Group the data by product category and how many sub-category it has
subcategory_count = df.groupby('Category')['Sub-Category'].nunique().reset_index()
# sort by ascending order
subcategory_count = subcategory_count.sort_values(by='Sub-Category', ascending=False)
# Print the states
print(subcategory_count)

subcategory_count_sales = df.groupby(['Category','Sub-Category'])['Sales'].sum().reset_index()

print(subcategory_count_sales)

# Group the data by product category versus the sales from each product category
product_category = df.groupby(['Category'])['Sales'].sum().reset_index()

# Sort the product category in their descending order and identify top product category
top_product_category = product_category.sort_values(by='Sales', ascending=False)

# Print the states
print(top_product_category.reset_index(drop=True))

# Plotting a pie chart
plt.pie(top_product_category['Sales'], labels=top_product_category['Category'], autopct='%1.1f%%')

# set the labels of the pie chart
plt.title('Top Product Categories Based on Sales')

plt.show()

# Group the data by product sub category versus the sales
product_subcategory = df.groupby(['Sub-Category'])['Sales'].sum().reset_index()

# Sort the product category in their descending order and identify top product category
top_product_subcategory = product_subcategory.sort_values(by='Sales', ascending=False)

# Print the states
print(top_product_subcategory.reset_index(drop=True))

top_product_subcategory = top_product_subcategory.sort_values(by='Sales', ascending=True)

# Ploting a bar graph

plt.barh(top_product_subcategory['Sub-Category'], top_product_subcategory['Sales'])

# Labels
plt.title('Top Product Categories Based on Sales')
plt.xlabel('Product Sub-Category')
plt.ylabel('Total Sales')
plt.xticks(rotation=0)

plt.show()


## Sales

# Convert the "Order Date" column to datetime format

df['Order Date'] = pd.to_datetime(df['Order Date'], dayfirst=True)

# Group the data by years and calculate the total sales amount for each year
yearly_sales = df.groupby(df['Order Date'].dt.year)['Sales'].sum()

yearly_sales = yearly_sales.reset_index()
yearly_sales = yearly_sales.rename(columns={'Order Date': 'Year', 'Sales':'Total Sales'})

# yearly_sales =
# Print the total sales for each year
print(yearly_sales)

# Ploting a bar graph

plt.bar(yearly_sales['Year'], yearly_sales['Total Sales'])

# Labels
plt.title('Yearly Sales')
plt.xlabel('Year')
plt.ylabel('Total Sales')
plt.xticks(rotation=45)

plt.show()


# Create a line graph for total sales by year
plt.plot(yearly_sales['Year'], yearly_sales['Total Sales'], marker='o', linestyle='-')
plt.xlabel('Year')
plt.ylabel('Total Sales')
plt.title('Total Sales by Year')

# Display the plot
plt.tight_layout()

plt.show()

# Convert the "Order Date" column to datetime format
df['Order Date'] = pd.to_datetime(df['Order Date'], dayfirst=True)

# Filter the data for the year 2018
year_sales = df[df['Order Date'].dt.year == 2018]

# Calculate the quarterly sales for 2018
quarterly_sales = year_sales.resample('Q', on='Order Date')['Sales'].sum()

quarterly_sales = quarterly_sales.reset_index()
quarterly_sales = quarterly_sales.rename(columns={'Order Date': 'Quarter', 'Sales':'Total Sales'})


print("Quarterly Sales for 2018:")
print(quarterly_sales)

# Create a line graph for total sales by year
plt.plot(quarterly_sales['Quarter'], quarterly_sales['Total Sales'], marker='o', linestyle='--')

plt.xlabel('Year')
plt.ylabel('Total Sales')
plt.title('Total Sales by Year')

# Display the plot
plt.tight_layout()
plt.xticks(rotation=75)

plt.show()

# Convert the "Order Date" column to datetime format
df['Order Date'] = pd.to_datetime(df['Order Date'], dayfirst=True)

# Filter the data for the year 2018
year_sales = df[df['Order Date'].dt.year == 2018]

# Calculate the monthly sales for 2018
monthly_sales = year_sales.resample('M', on='Order Date')['Sales'].sum()

# Renaming the columns
monthly_sales = monthly_sales.reset_index()
monthly_sales = monthly_sales.rename(columns={'Order Date':'Month', 'Sales':'Total Montly Sales'})

# Print the monthly and quarterly sales for 2018
print("Monthly Sales for 2018:")
print(monthly_sales)


# Create a line graph for total sales by year
plt.plot(monthly_sales['Month'], monthly_sales['Total Montly Sales'], marker='o', linestyle='--')

plt.xlabel('Year')
plt.ylabel('Total Sales')
plt.title('Total Sales by Month')

# Display the plot
plt.tight_layout()
plt.xticks(rotation=75)

plt.show()

## Sales Trends

# Convert the "Order Date" column to datetime format
df['Order Date'] = pd.to_datetime(df['Order Date'], dayfirst=True)

# Group the data by months and calculate the total sales amount for each month
monthly_sales = df.groupby(df['Order Date'].dt.to_period('M'))['Sales'].sum()

# Plot the sales trends for months
plt.figure(figsize=(12, 26))

# Monthly Sales Trend
plt.subplot(3, 1, 1)
monthly_sales.plot(kind='line', marker='o')
plt.title('Monthly Sales Trend')
plt.xlabel('Month')
plt.ylabel('Sales Amount')

# Adjust layout and display the plots
# plt.tight_layout()
plt.show()

# Assuming you have a DataFrame named "df" with columns "Order Date" and "Sales amount"

# Convert the "Order Date" column to datetime format
df['Order Date'] = pd.to_datetime(df['Order Date'], dayfirst=True)

# Group the data by quarters and calculate the total sales amount for each quarter
quarterly_sales = df.groupby(df['Order Date'].dt.to_period('Q'))['Sales'].sum()

# Plot the sales trends for months, quarters, and years
plt.figure(figsize=(12, 20))

# Quarterly Sales Trend
plt.subplot(3, 1, 2)
quarterly_sales.plot(kind='line', marker='o')
plt.title('Quarterly Sales Trend')
plt.xlabel('Quarter')
plt.ylabel('Sales Amount')

# Adjust layout and display the plots
#plt.tight_layout()
plt.show()

# Assuming you have a DataFrame named "df" with columns "Order Date" and "Sales amount"

# Convert the "Order Date" column to datetime format
df['Order Date'] = pd.to_datetime(df['Order Date'], dayfirst=True)

# Group the data by years and calculate the total sales amount for each year
yearly_sales = df.groupby(df['Order Date'].dt.to_period('Y'))['Sales'].sum()

# Plot the sales trends for quarters
plt.figure(figsize=(12, 26))

# Yearly Sales Trend
plt.subplot(3, 1, 3)
yearly_sales.plot(kind='line', marker='o')
plt.title('Yearly Sales Trend')
plt.xlabel('Year')
plt.ylabel('Sales Amount')

# Adjust layout and display the plots

plt.show()

# Group by "Order Date" and calculate the sum of sales
df_summary = df.groupby('Order Date')['Sales'].sum().reset_index()

# Create a line plot
plt.figure(figsize=(30, 8))
plt.plot(df_summary['Order Date'], df_summary['Sales'], marker='o', linestyle='-')
plt.xlabel('Order Date')
plt.ylabel('Sales')
plt.title('Sales Over Time')
plt.grid(True)
plt.show()

import plotly.graph_objects as go
from plotly.subplots import make_subplots

# Initialize Plotly in Jupyter Notebook mode
import plotly.io as pio

# Create a mapping for all 50 states
all_state_mapping = {
    "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR",
    "California": "CA", "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE",
    "Florida": "FL", "Georgia": "GA", "Hawaii": "HI", "Idaho": "ID", "Illinois": "IL",
    "Indiana": "IN", "Iowa": "IA", "Kansas": "KS", "Kentucky": "KY", "Louisiana": "LA",
    "Maine": "ME", "Maryland": "MD", "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN",
    "Mississippi": "MS", "Missouri": "MO", "Montana": "MT", "Nebraska": "NE", "Nevada": "NV",
    "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY",
    "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK",
    "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC",
    "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX", "Utah": "UT", "Vermont": "VT",
    "Virginia": "VA", "Washington": "WA", "West Virginia": "WV", "Wisconsin": "WI", "Wyoming": "WY"
}

# Add the Abbreviation column to the DataFrame
df['Abbreviation'] = df['State'].map(all_state_mapping)

# Group by state and calculate the sum of sales
sum_of_sales = df.groupby('State')['Sales'].sum().reset_index()

# Add Abbreviation to sum_of_sales
sum_of_sales['Abbreviation'] = sum_of_sales['State'].map(all_state_mapping)

# Create a choropleth map using Plotly
fig = go.Figure(data=go.Choropleth(
    locations=sum_of_sales['Abbreviation'],
    locationmode='USA-states',
    z=sum_of_sales['Sales'],
    hoverinfo='location+z',
    showscale=True
))

fig.update_geos(projection_type="albers usa")
fig.update_layout(
    geo_scope='usa',
    title='Total Sales by U.S. State'
)

fig.show()

# Group by state and calculaye the sum of sales
sum_of_sales = df.groupby('State')['Sales'].sum().reset_index()

# Sort the DataFrame by the 'Sales' column in descending order
sum_of_sales = sum_of_sales.sort_values(by='Sales', ascending=False)

# Create a horinzontal bar graph
plt.figure(figsize=(10, 13))
ax = sns.barplot(x='Sales', y='State', data=sum_of_sales, errorbar=None)

plt.xlabel('Sales')
plt.ylabel('State')
plt.title('Total Sales by State')
plt.show()

import plotly.express as px

# Summarize the Sales data by Category and Sub-Category
df_summary = df.groupby(['Category', 'Sub-Category'])['Sales'].sum().reset_index()

# Create a nested pie chart
fig = px.sunburst(
    df_summary, path=['Category', 'Sub-Category'], values='Sales')

fig.show()

# Summarize the Sales data by Category, Ship Mode and Sub-Category
df_summary = df.groupby(['Category', 'Ship Mode', 'Sub-Category'])['Sales'].sum().reset_index()

#Create a treemap
fig = px.treemap(df_summary, path=['Category', 'Ship Mode', 'Sub-Category'], values='Sales')

fig.show()
```

-->

---

<TagLinks />