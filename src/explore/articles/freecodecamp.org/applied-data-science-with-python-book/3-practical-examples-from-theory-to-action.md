---
lang: ko-KR
title: "3. Practical Examples: From Theory to Action"
description: "Article(s) > (3/8) Applied Data Science with Python – Business Intelligence for Developers [Full Book]"
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
      content: "Article(s) > (3/8) Applied Data Science with Python – Business Intelligence for Developers [Full Book]"
    - property: og:description
      content: "3. Practical Examples: From Theory to Action"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/applied-data-science-with-python-book/3-practical-examples-from-theory-to-action.html
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

---

## -3-practical-examples-from-theory-to-action">3. Practical Examples: From Theory to Action

Data analysis is about more than just abstract concepts. It's also about applying your knowledge to solve real problems. In this chapter, you'll bridge the gap between theory and practice, gaining hands-on experience with the tools and techniques you've learned so far.

By working with concrete examples, you'll solidify your understanding of Python, Pandas, and Matplotlib, and you'll build the confidence to tackle real-world data challenges.

What you'll learn in this chapter:

**Loading and Cleaning Data:**

- Import data from CSV files, the most common format for storing structured data.
- Handle missing values—a common issue that can skew your analysis—using Pandas' powerful imputation techniques.
- Standardize data types to ensure consistency and accuracy in your calculations.

**Exploring Data with Pandas:**

- Leverage essential Pandas functions like `.describe()`, `.groupby()`, and `.value_counts()` to uncover hidden patterns and insights within your data.
- Gain a deeper understanding of your data's characteristics and relationships.

**Visualizing Trends with Matplotlib:**

- Craft informative and visually appealing plots to reveal trends, correlations, and distributions within your data.
- Use line charts, scatter plots, and other visualization techniques to communicate your findings effectively.

Are you ready to put theory into practice and witness the transformative power of data analysis? Let's dive in and discover how Python, Pandas, and Matplotlib can empower you to extract actionable insights from real-world data.

In this series of examples, we will make use of the following example CSV file. 

```
Order ID,Order Date,Customer ID,Segment,Product,Category,Sales,Quantity,Profit
1001,2023-01-01,CUST-101,Consumer,Product A,Office Supplies,27.90,2,10.34
1002,2023-01-02,CUST-102,Corporate,Product B,Technology,1024.99,1,512.49
1003,2023-01-03,CUST-103,Home Office,Product C,Furniture,436.50,3,-109.12
1004,2023-01-04,CUST-101,Consumer,Product D,Office Supplies,15.99,5,6.39
1005,2023-01-05,CUST-104,Consumer,Product E,Technology,799.99,1,239.99
1006,2023-01-06,CUST-105,Corporate,Product F,Furniture,214.70,2,-32.20
1007,2023-01-07,CUST-106,Home Office,Product G,Office Supplies,9.99,3,2.99
1008,2023-01-08,CUST-107,Corporate,Product H,Technology,549.95,2,164.98
1009,2023-01-09,CUST-108,Consumer,Product A,Office Supplies,27.90,4,20.68
1010,2023-01-10,CUST-109,Home Office,Product I,Furniture,120.00,1,60.00
```

### -31-loading-and-cleaning-data">3.1 Loading and Cleaning Data

Real-world data is rarely pristine. It often arrives in messy CSV files, riddled with missing values, inconsistent formats, and other imperfections that can derail your analysis. 

But fear not – Pandas is your trusty sidekick in this data wrangling adventure. Let's walk through the essential steps of importing and cleaning data using Pandas and our sample CSV file, `sales_data.csv`.

#### -step-1-import-your-data">Step 1: Import Your Data

First, make sure you have the `sales_data.csv` file in your working directory (or provide the correct file path). Then, use Pandas' `read_csv` function to import it into a DataFrame:

```py
import pandas as pd

df = pd.read_csv('sales_data.csv')
print(df.head())  # Display the first 5 rows for a quick overview
```

This will load the CSV file into a Pandas DataFrame, a versatile table-like structure that allows for easy manipulation and analysis.

#### -step-2-assess-your-data">Step 2: Assess Your Data

Before you dive into cleaning, take a moment to assess your data. What does it look like? Are there any obvious issues? Pandas provides several functions to help you get a feel for your dataset:

```py
print(df.info())  # Get information about columns, data types, and missing values
print(df.describe())  # Get summary statistics for numerical columns
```

#### -step-3-handle-missing-values">Step 3: Handle Missing Values

Missing values are a common problem in real-world data. Pandas offers a variety of ways to handle them:

- **Dropping Rows:** If missing values are sparse and unlikely to significantly impact your analysis, you can simply drop the rows containing them.

```py
df.dropna(inplace=True)
```

- **Filling with a Value:** You can fill missing values with a specific value, such as 0 or the mean of the column.

```py
df['Sales'].fillna(df['Sales'].mean(), inplace=True)
```

- **Forward or Backward Fill:** For time series data, you can fill missing values with the previous or next valid value.

```py
df['Sales'].fillna(method='ffill', inplace=True)  # Forward fill
```

- **Interpolation:** Estimate missing values based on a pattern in the data (for example, linear interpolation).

```py
df['Sales'].interpolate(method='linear', inplace=True)
```

#### -step-4-standardize-data-types">Step 4: Standardize Data Types

Ensure consistency in your data by converting columns to the appropriate data types. For example:

```py
df['Order Date'] = pd.to_datetime(df['Order Date'])  # Convert to datetime
df['Sales'] = pd.to_numeric(df['Sales'])          # Convert to numeric
```

#### -step-5-deal-with-outliers-optional">Step 5: Deal with Outliers (Optional)

Outliers are extreme values that can distort your analysis. Depending on your data and goals, you might choose to:

- **Remove outliers:** This can be done based on statistical thresholds (for example, z-scores or interquartile range).
<li>**Cap outliers:** Replace extreme values with a more reasonable limit.
<li>**Transform the data:** Apply a transformation (for example, logarithmic) to reduce the impact of outliers.
<li>**Keep outliers:**  If they're valid data points, outliers might offer valuable insights.

#### -example-removing-outliers-using-z-scores">Example: Removing Outliers using Z-scores:

```py
from scipy import stats

z = np.abs(stats.zscore(df['Sales']))
df = df[(z < 3)]  # Keep only rows with z-score less than 3
```

By following these steps, you'll be well on your way to transforming raw, messy data into a clean and structured dataset ready for your insightful analysis.

Remember, data cleaning is an iterative process, and there's no one-size-fits-all solution. Experiment with different techniques to find the best approach for your specific data.

#### -full-code">Full Code:

```py
import pandas as pd
from scipy import stats
import numpy as np

df = pd.read_csv('sales_data.csv')

print("Data Preview:")
print(df.head().to_markdown(index=False, numalign="left", stralign="left"))

print("\nData Information:")
print(df.info())

print("\nSummary Statistics of Numeric Columns:")
print(df.describe().to_markdown(numalign="left", stralign="left"))

df.dropna(inplace=True)  
df['Sales'].fillna(df['Sales'].mean(), inplace=True) 
df['Order Date'] = pd.to_datetime(df['Order Date'])  
df['Sales'] = pd.to_numeric(df['Sales'])          

z = np.abs(stats.zscore(df['Sales']))
df = df[(z < 3)]  

print("\nData After Cleaning and Outlier Removal:")
print(df.head().to_markdown(index=False, numalign="left", stralign="left"))

# Group data by category and calculate total sales
total_sales_by_category = df.groupby('Category')['Sales'].sum()

# Display the result
print("\nTotal Sales by Category:")
print(total_sales_by_category.to_markdown(numalign="left", stralign="left"))
```

### -32-exploring-data-with-pandas">3.2 Exploring Data with Pandas

With your data loaded and cleaned, it's time to embark on the exciting journey of data exploration. Pandas equips you with a powerful suite of functions to analyze your dataset, uncover hidden patterns, and gain actionable insights.

#### -dfdescribe-quantitative-snapshot">`df.describe()` – Quantitative Snapshot

This function provides a concise statistical summary of your numerical columns. It's your initial reconnaissance mission, revealing central tendencies (mean, median), dispersion (standard deviation, range), and distribution quartiles. 

This high-level overview quickly reveals potential outliers and distributions that warrant further investigation.

```py
print(df.describe().to_markdown(numalign="left", stralign="left"))
```

#### -dfgroupby-segmenting-for-deeper-insights">`df.groupby()` – Segmenting for Deeper Insights

Grouping is a fundamental technique in data analysis. Pandas' `groupby()` function allows you to segment your data based on categorical variables. 

For instance, you can group your sales data by customer segment or product category to understand how these factors influence sales performance.

```py
sales_by_segment = df.groupby('Segment')['Sales'].sum()
print(sales_by_segment.to_markdown(numalign="left", stralign="left"))
```

#### -dfvaluecounts-distribution-analysis">`df.value_counts()` –  Distribution Analysis

Understanding the frequency distribution of categorical variables is crucial for identifying common patterns and potential anomalies. `.value_counts()` reveals how often each unique value appears in a column, giving you a snapshot of the distribution.

```py
product_popularity = df['Product'].value_counts()
print(product_popularity.to_markdown(numalign="left", stralign="left"))
```

#### -beyond-the-basics">Beyond the Basics

These essential functions are just the tip of the iceberg. Pandas offers a multitude of other tools to explore your data. For instance, you can use the `df.corr()` method to calculate correlations between numerical columns, revealing potential relationships.

```py
sales_profit_correlation = df['Sales'].corr(df['Profit'])
print("Correlation between Sales and Profit:", sales_profit_correlation)
```

Remember, data exploration is an iterative process. Start with these basic functions to gain a broad understanding of your data, then refine your analysis with more targeted questions and techniques. The insights you uncover will guide you towards making informed decisions and maximizing the value of your data.

Beyond the basics, Pandas offers a wealth of advanced tools for exploratory data analysis (EDA), allowing you to dig deeper into your data and uncover nuanced patterns, correlations, and trends that can inform your business strategies. Let's dive into some more sophisticated techniques using our `sales_data.csv` example.

#### -segment-performance-deep-dive">Segment Performance Deep Dive:

We've already seen how `groupby` can summarize total sales by segment. But let's take it a step further:

```py
# Calculate total sales, quantity, and profit by segment
segment_summary = df.groupby("Segment")[["Sales", "Quantity", "Profit"]].sum()

print("\nSales, Quantity, and Profit Summary by Segment:")
print(segment_summary.to_markdown(numalign="left", stralign="left"))

# Calculate average profit margin per sale by segment
segment_summary["Profit_Margin"] = segment_summary["Profit"] / segment_summary["Sales"]
print("\nAverage Profit Margin by Segment:")
print(segment_summary[["Profit_Margin"]].to_markdown(numalign="left", stralign="left", floatfmt=".2%"))
```

This expanded analysis reveals not only total sales but also quantity and profit for each segment. We even calculate the average profit margin, uncovering which segment yields the most profit per sale.

#### -uncover-customer-buying-patterns">Uncover Customer Buying Patterns:

Let's delve into individual customer behavior to identify potential high-value customers or patterns in purchasing frequency.

```py
# Identify customers who have made more than one purchase
repeat_customers = df['Customer ID'].value_counts()[df['Customer ID'].value_counts() > 1]
print("\nRepeat Customers:")
print(repeat_customers.to_markdown(numalign="left", stralign="left"))

# Analyze the time between purchases for repeat customers
from datetime import timedelta
df['Days_Since_Last_Purchase'] = df.sort_values('Order Date').groupby('Customer ID')['Order Date'].diff()
repeat_customer_purchase_frequency = df[df['Customer ID'].isin(repeat_customers.index)]['Days_Since_Last_Purchase'].describe()
print("\nRepeat Customer Purchase Frequency (Days):")
print(repeat_customer_purchase_frequency.to_markdown(numalign="left", stralign="left"))
```

We identify repeat customers and then analyze how frequently they make purchases. By understanding the typical time between purchases, you can tailor marketing strategies or loyalty programs to encourage repeat business.

**Practical Advice:**

- **Go Beyond the Obvious:** Don't stop at basic summaries. Use Pandas' flexibility to dig deeper into your data.
<li>**Think Strategically:** How can you use the insights you uncover to drive action and improve business outcomes?
<li>**Iterate and Refine:** Data exploration is an ongoing process. As you learn more, refine your questions and explore new avenues of analysis.
<li>**Don't be afraid to experiment:** Pandas is a powerful tool. Try out different functions and combinations to see what reveals the most interesting patterns.

By mastering these advanced EDA techniques with Pandas, you'll gain the ability to extract deeper insights from your data, making you an invaluable asset to your organization.

#### -full-code-1">Full Code:

```py
print(df.describe().to_markdown(numalign="left", stralign="left"))

sales_by_segment = df.groupby('Segment')['Sales'].sum()
print(sales_by_segment.to_markdown(numalign="left", stralign="left"))

product_popularity = df['Product'].value_counts()
print(product_popularity.to_markdown(numalign="left", stralign="left"))

sales_profit_correlation = df['Sales'].corr(df['Profit'])
print("Correlation between Sales and Profit:", sales_profit_correlation)

# Calculate total sales, quantity, and profit by segment
segment_summary = df.groupby("Segment")[["Sales", "Quantity", "Profit"]].sum()

print("\nSales, Quantity, and Profit Summary by Segment:")
print(segment_summary.to_markdown(numalign="left", stralign="left"))

# Calculate average profit margin per sale by segment
segment_summary["Profit_Margin"] = segment_summary["Profit"] / segment_summary["Sales"]
print("\nAverage Profit Margin by Segment:")
print(segment_summary[["Profit_Margin"]].to_markdown(numalign="left", stralign="left", floatfmt=".2%"))

# Identify customers who have made more than one purchase
repeat_customers = df['Customer ID'].value_counts()[df['Customer ID'].value_counts() > 1]
print("\nRepeat Customers:")
print(repeat_customers.to_markdown(numalign="left", stralign="left"))

# Analyze the time between purchases for repeat customers
from datetime import timedelta
df['Days_Since_Last_Purchase'] = df.sort_values('Order Date').groupby('Customer ID')['Order Date'].diff()
repeat_customer_purchase_frequency = df[df['Customer ID'].isin(repeat_customers.index)]['Days_Since_Last_Purchase'].describe()
print("\nRepeat Customer Purchase Frequency (Days):")
print(repeat_customer_purchase_frequency.to_markdown(numalign="left", stralign="left"))
```

### 3.3 Visualizing Trends with Matplotlib

**1. Total Sales Over Time (Line Chart):**

```py
import matplotlib.pyplot as plt

# Convert 'Order Date' to datetime for proper plotting
df['Order Date'] = pd.to_datetime(df['Order Date'])

# Group sales by order date and sum them up
daily_sales = df.groupby('Order Date')['Sales'].sum()

plt.figure(figsize=(12, 6))
plt.plot(daily_sales, marker='o')  # Plot line chart with markers for data points
plt.title('Total Sales Over Time')
plt.xlabel('Order Date')
plt.ylabel('Total Sales')
plt.xticks(rotation=45) 
plt.grid(axis='y')
plt.show()
```

This line chart illustrates how your total sales have fluctuated over time, revealing trends, peaks, and valleys. It can help you identify seasonal patterns, the impact of marketing campaigns, or other factors influencing sales performance.

**2. Sales vs. Profit by Segment (Scatter Plot):**

```py
# Create a scatter plot for each segment
segments = df['Segment'].unique()
colors = ['blue', 'green', 'orange']  # Choose distinct colors for each segment

plt.figure(figsize=(10, 6))
for i, segment in enumerate(segments):
    segment_data = df[df['Segment'] == segment]
    plt.scatter(segment_data['Sales'], segment_data['Profit'], c=colors[i], label=segment)

plt.title('Sales vs. Profit by Segment')
plt.xlabel('Sales')
plt.ylabel('Profit')
plt.legend()
plt.show()
```

This scatter plot visualizes the relationship between sales and profit for each customer segment (Consumer, Corporate, Home Office). It helps you identify which segments are most profitable and whether there are any correlations between sales volume and profitability.

**3. Distribution of Sales by Category (Bar Chart):**

```py
# Calculate total sales by category
sales_by_category = df.groupby('Category')['Sales'].sum()

plt.figure(figsize=(10, 6))
plt.bar(sales_by_category.index, sales_by_category.values, color='skyblue')
plt.title('Total Sales by Category')
plt.xlabel('Category')
plt.ylabel('Total Sales')
plt.xticks(rotation=45)
plt.show()
```

This bar chart provides a clear comparison of total sales across different product categories, highlighting which categories are driving your revenue.

**4. Distribution of Order Quantities (Histogram):**

```py
plt.figure(figsize=(10, 6))
plt.hist(df['Quantity'], bins=5, color='salmon', alpha=0.7, rwidth=0.8)
plt.title('Distribution of Order Quantities')
plt.xlabel('Quantity')
plt.ylabel('Frequency')
plt.show()
```

This histogram illustrates the distribution of order quantities, showing how often customers order different quantities of products. It helps you understand your typical order sizes and identify any unusual patterns.

**Key Insights from Visualizations:**

- The line chart reveals trends in total sales over time.
- The scatter plot unveils potential relationships between sales and profit for different customer segments.
- The bar chart clearly shows which product categories generate the most sales.
- The histogram provides insights into how order quantities are distributed.

Remember: These are just a few examples. You can experiment with different types of plots and customizations to uncover even more insights from your data. Matplotlib offers a rich set of tools to explore your data visually and communicate your findings effectively.

#### -full-code-2">Full code:

```py
import matplotlib.pyplot as plt

# Convert 'Order Date' to datetime for proper plotting
df['Order Date'] = pd.to_datetime(df['Order Date'])

# Group sales by order date and sum them up
daily_sales = df.groupby('Order Date')['Sales'].sum()

plt.figure(figsize=(12, 6))
plt.plot(daily_sales, marker='o')  # Plot line chart with markers for data points
plt.title('Total Sales Over Time')
plt.xlabel('Order Date')
plt.ylabel('Total Sales')
plt.xticks(rotation=45) 
plt.grid(axis='y')
plt.show()


# Create a scatter plot for each segment
segments = df['Segment'].unique()
colors = ['blue', 'green', 'orange']  # Choose distinct colors for each segment

plt.figure(figsize=(10, 6))
for i, segment in enumerate(segments):
    segment_data = df[df['Segment'] == segment]
    plt.scatter(segment_data['Sales'], segment_data['Profit'], c=colors[i], label=segment)

plt.title('Sales vs. Profit by Segment')
plt.xlabel('Sales')
plt.ylabel('Profit')
plt.legend()
plt.show()

# Calculate total sales by category
sales_by_category = df.groupby('Category')['Sales'].sum()

plt.figure(figsize=(10, 6))
plt.bar(sales_by_category.index, sales_by_category.values, color='skyblue')
plt.title('Total Sales by Category')
plt.xlabel('Category')
plt.ylabel('Total Sales')
plt.xticks(rotation=45)
plt.show()

plt.figure(figsize=(10, 6))
plt.hist(df['Quantity'], bins=5, color='salmon', alpha=0.7, rwidth=0.8)
plt.title('Distribution of Order Quantities')
plt.xlabel('Quantity')
plt.ylabel('Frequency')
plt.show()
```

-->

---

<TagLinks />