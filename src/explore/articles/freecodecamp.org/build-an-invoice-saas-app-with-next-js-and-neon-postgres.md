---
lang: ko-KR
title: How to Build an Invoice SaaS App with Next.js, Resend, Clerk and Neon Postgres
description: Article(s) > How to Build an Invoice SaaS App with Next.js, Resend, Clerk and Neon Postgres
icon: iconfont icon-nextjs
category: 
  - Node.js
  - Next.js
  - PostgreSQL
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - node
  - nodejs
  - node-js
  - next
  - nextjs
  - next-js
  - postgres
  - postgresql
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Build an Invoice SaaS App with Next.js, Resend, Clerk and Neon Postgres
    - property: og:description
      content: How to Build an Invoice SaaS App with Next.js, Resend, Clerk and Neon Postgres
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/build-an-invoice-saas-app-with-next-js-and-neon-postgres.html
prev: /programming/js-next/articles/README.md
date: 2024-08-01
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w1000/2024/07/Orange---Yellow-Gradient-Make-Design-Blog-Banner--79-.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Next.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-next/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "PostgreSQL > Article(s)",
  "desc": "Article(s)",
  "link": "/data-science/postgres/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Build an Invoice SaaS App with Next.js, Resend, Clerk and Neon Postgres"
  desc="In this tutorial, you will learn how to build an invoicing web app that allows users to add their bank information, manage a list of customers, and create and send invoices to customers. You'll also learn how to print and send React components as invoices and email templates directly from..."
  url="https://freecodecamp.org/news/build-an-invoice-saas-app-with-next-js-and-neon-postgres/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w1000/2024/07/Orange---Yellow-Gradient-Make-Design-Blog-Banner--79-.png"/>

<!-- TODO: 작성 -->

<!-- 
In this tutorial, you will learn how to build an invoicing web app that allows users to add their bank information, manage a list of customers, and create and send invoices to customers. You'll also learn how to print and send React components as invoices and email templates directly from the application to the customer's email.

This will be a great project to help you learn how to put together full stack apps, and how to create an app where the backend can communicate with the frontend in real time.

While building the application, you will gain hands-on experience working with the following developer tools:

- <a href="https://neon.tech/docs/introduction">**Neon**</a>: a Postgres database that enables us to store and retrieve data easily within the application.
<li><a href="https://clerk.com/">**Clerk**</a>: a complete authentication system that ensures only authenticated users can perform specific actions within the application.
<li><a href="https://www.npmjs.com/package/react-to-print">**React-to-print**</a>: a package that allows us to convert and print React components as PDF files.
<li><a href="https://resend.com/">**Resend**</a> **and** <a href="https://react.email/docs/integrations/resend">**React Email**</a>: for sending beautifully designed digital invoices directly to the customers' email.

<a href="https://github.com/tyaga001/invoice-saas-app-nextjs-neon-postgres">Here is the source code</a> (remember to give it a star ⭐).

---

## -table-of-contents">**Table of Contents**

1. <a class="post-section-overview" href="#heading-what-is-neon">What is</a> Neon?
<li><a class="post-section-overview" href="#heading-building-the-invoice-application-with-nextjs">Building the Invoice Application with Next.js</a>
<li><a class="post-section-overview" href="#heading-how-to-authenticate-users-using-clerk">How to Authenticate Users Using Clerk</a>
<li><a class="post-section-overview" href="#heading-how-to-add-neon-to-a-nextjs-app">How to Add Neon to a Next.js app</a>
<li><a class="post-section-overview" href="#heading-how-to-set-up-neon-serverless-driver-with-drizzle-orm-in-nextjs">How to Set Up Neon Serverless Driver with Drizzle ORM in Next.js</a>
<li><a class="post-section-overview" href="#heading-creating-the-api-endpoints-for-the-application">Creating the API endpoints for the application</a>
<li><a class="post-section-overview" href="#heading-how-to-print-and-download-invoices-in-nextjs">How to Print and Download Invoices in Next.js</a>
<li><a class="post-section-overview" href="#id=&quot;how-to-send-digital-invoices-with-resend-and-react-email&quot;">How to Send Digital Invoices with Resend and React Email</a>
<li><a class="post-section-overview" href="#heading-next-steps">Next Steps</a>

---

## -what-is-neon">**What is Neon?**

<a href="https://github.com/neondatabase/neon">Neon</a> is an open-source, scalable, and efficient Postgres DB that separates compute from storage. This means that database computation processes (queries, transactions, and so on) are handled by one set of resources (compute), while the data itself is stored on a separate set of resources (storage).

This architecture allows for greater scalability and performance, making Neon a solid choice for modern web applications.

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcnJDCduaAEwKDQL2fc2lHsMj6g68thVN_txmoGMyD1ep-x1sWa5d-eiZ3AWjq4xkmGlF7JWxuEvrO9Os5qcEXbzBLep6tCpv-RSuCJjbLwe3hzP9870mfL6LcsH0HvV1x-ymzJ-PU1YjTFuQcihvwEUgeB?key=QrOqhkDtPIneanOaExEDaA" alt="Neon - a serverless Postgres database" width="1600" height="416" loading="lazy">
*<a href="https://github.com/neondatabase/neon?tab=readme-ov-file">Neon - a serverless Postgres database</a>*

---

## -building-the-invoice-application-with-nextjs">**Building the Invoice Application with Next.js**

In this section, I'll guide you through building the various pages of the invoicing application using Next.js. The application is divided into six key pages, each serving a specific purpose:

- **Home Page**: This is the landing page. It provides an overview of the application and signs users into the application.
- **Settings Page**: Here, users can update their bank information as it will be displayed on the invoices.
- **Customers Page**: This page allows users to manage their customer base, and add or delete customers when needed.
- **Dashboard**: The core of the application where users can create new invoices. Users can select a customer, enter the title and description of the invoice, and generate invoices.
- **History Page**: This page displays recently created invoices. It includes links that enable users to preview each invoice, providing a quick way to review past transactions.
- **Print and Send Invoice Page**: This page allows users to print and send invoices to customers.

Before we proceed, create a TypeScript Next.js project by running the following code snippet in your terminal:

<table><colgroup></colgroup><tbody><tr><td><span>npx create-next-app invoice-app-<span>with<span>-neon

Add a **types.d.ts** file within the project folder. It will contain the type declarations for the variables within the application.

```js
interface Item {
    id: string;
    name: string;
    cost: number;
    quantity: number;
    price: number;
}

interface Invoice {
    id?: string,
    created_at?: string,
    user_id:  string,
    customer_id: number,
    title: string,
    items: string,
    total_amount: number,
}

interface Customer {
    user_id: string,
    name: string,
    email: string,
    address: string
}

interface BankInfo {
    user_id: string,
    account_name: string,
    account_number: number,
    bank_name: string,
    currency: string
}
```

### -home-page">**Home Page**

Copy the code snippet below into the **app/page.tsx** file. It displays brief information about the application and a button that redirects users to the dashboard or login page, depending on their authentication status.

```js
import Link from "next/link";

export default function Home() {
  return (
    &lt;main className='w-full'&gt;
      &lt;section className='p-8 h-[90vh] md:w-2/3 mx-auto text-center w-full flex flex-col items-center justify-center'&gt;
        &lt;h2 className='text-3xl font-bold mb-4 md:text-4xl'&gt;
          Create invoices for your customers
        &lt;/h2&gt;
        &lt;p className='opacity-70 mb-4 text-sm md:text-base leading-loose'&gt;
          Invoicer is an online invoicing software that helps you craft and
          print professional invoices for your customers for free! Keep your
          business and clients with one invoicing software.
        &lt;/p&gt;
        &lt;Link
          href='/dashboard'
          className='rounded w-[200px] px-2 py-3 bg-blue-500 text-gray-50'
        &gt;
          LOG IN
        &lt;/Link&gt;
      &lt;/section&gt;
    &lt;/main&gt;
  );
}
```

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfxl_8niZbdRmGGgjCG66VCVO3dIZHO-oQ4TtSDjBRFqrU7qb6yGrVOBK4xqPYeFpYgddmDPA3hcw8X5bE1eqtdUP2Un9BHn_IM2CsjII17qap-VnDD8Qyo6ZW0TwFkTgWWNxXmxST6xcvr-KxIRYjK_2xg?key=QrOqhkDtPIneanOaExEDaA" alt="Invoice-app-home-page" width="1600" height="922" loading="lazy">
*Invoice-app-home-page*

### **Settings Page**

Add a **settings** folder containing a **page.tsx** file within the Next.js app directory and copy the following code snippet into the file:

```js
"use client";
import { ChangeEvent, useEffect, useState, useCallback } from "react";
import SideNav from "@/app/components/SideNav";

export default function Settings() {
    //👇🏻 default bank info
    const [bankInfo, setBankInfo] = useState({
        account_name: "",
        account_number: 1234567890,
        bank_name: "",
        currency: "",
 });

    //👇🏻 bank info from the form entries
    const [inputBankInfo, setInputBankInfo] = useState({
        accountName: "",
        accountNumber: 1234567890,
        bankName: "",
        currency: "",
 });

    //👇🏻 updates the form entries state
    const handleUpdateBankInfo = (
        e: ChangeEvent&lt;HTMLInputElement | HTMLSelectElement&gt;
 ) =&gt; {
        const { name, value } = e.target;
        setInputBankInfo((prevState) =&gt; ({
 ...prevState,
 [name]: value,
 }));
 };

    //👇🏻 updates the bank info
    const handleSubmit = (e: React.FormEvent&lt;HTMLFormElement&gt;) =&gt; {
        e.preventDefault();
        console.log("Tries to update bank info...");
 };
return ()
}
```

The code snippet above shows that the page displays the user’s bank information and also allows the user to update it when necessary.

Return the UI elements below from the component:

```js
export default function Settings() {
  //…React states and functions

  return (
    &lt;div className='w-full'&gt;
      &lt;main className='min-h-[90vh] flex items-start'&gt;
        &lt;SideNav /&gt;

        &lt;div className='md:w-5/6 w-full h-full p-6'&gt;
          &lt;h2 className='text-2xl font-bold'&gt;Bank Information&lt;/h2&gt;
          &lt;p className='opacity-70 mb-4'&gt;
            Update your bank account information
          &lt;/p&gt;

          &lt;div className='flex md:flex-row flex-col items-start justify-between w-full md:space-x-4'&gt;
            &lt;section className='md:w-1/3 w-full bg-blue-50 h-full p-3 rounded-md space-y-3'&gt;
              &lt;p className='text-sm opacity-75'&gt;
                Account Name: {bankInfo.account_name}
              &lt;/p&gt;
              &lt;p className='text-sm opacity-75'&gt;
                Account Number: {bankInfo.account_number}
              &lt;/p&gt;
              &lt;p className='text-sm opacity-75'&gt;
                Bank Name: {bankInfo.bank_name}
              &lt;/p&gt;
              &lt;p className='text-sm opacity-75'&gt;
                Currency: {bankInfo.currency}
              &lt;/p&gt;
            &lt;/section&gt;

            &lt;form
              className='md:w-2/3 w-full p-3 flex flex-col'
              method='POST'
              onSubmit={handleSubmit}
            &gt;
              &lt;label htmlFor='accountName' className='text-sm'&gt;
                Account Name
              &lt;/label&gt;
              &lt;input
                type='text'
                name='accountName'
                id='accountName'
                className='border-[1px] p-2 rounded mb-3'
                required
                value={inputBankInfo.accountName}
                onChange={handleUpdateBankInfo}
              /&gt;

              &lt;label htmlFor='accountNumber' className='text-sm'&gt;
                Account Number
              &lt;/label&gt;
              &lt;input
                type='number'
                name='accountNumber'
                id='accountNumber'
                className='border-[1px] p-2 rounded mb-3'
                required
                value={inputBankInfo.accountNumber}
                onChange={handleUpdateBankInfo}
              /&gt;

              &lt;label htmlFor='bankName' className='text-sm'&gt;
                Bank Name
              &lt;/label&gt;
              &lt;input
                type='text'
                name='bankName'
                id='bankName'
                className='border-[1px] p-2 rounded mb-3'
                required
                value={inputBankInfo.bankName}
                onChange={handleUpdateBankInfo}
              /&gt;

              &lt;label htmlFor='currency' className='text-sm'&gt;
                Currency
              &lt;/label&gt;
              &lt;select
                name='currency'
                id='currency'
                className='border-[1px] p-2 rounded mb-3'
                required
                value={inputBankInfo.currency}
                onChange={handleUpdateBankInfo}
              &gt;
                &lt;option value=''&gt;Select&lt;/option&gt;
                &lt;option value='$'&gt;USD&lt;/option&gt;
                &lt;option value='€'&gt;EUR&lt;/option&gt;
                &lt;option value='£'&gt;GBP&lt;/option&gt;
              &lt;/select&gt;
              &lt;div className='flex items-center justify-end'&gt;
                &lt;button
                  type='submit'
                  className='bg-blue-500 text-white p-2 w-[200px] rounded'
                &gt;
                  Update Bank Info
                &lt;/button&gt;
              &lt;/div&gt;
            &lt;/form&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/main&gt;
    &lt;/div&gt;
  );
}
```

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfjj47wp06nbinvyDFg1Zl8udWgJWenfeu3wQ_b8_6KWP9bJAH69wCMsX5v0_XVm5-PF2K9mR_zyP7tJHLvmp2L2aLopuRQ8NiAVUVEa6WcSKV3gQOjGb2Va0227mk5OTCxQrro1uIQdwE7vyWI-rnqUkC6?key=QrOqhkDtPIneanOaExEDaA" alt="Invoice-app-settings-page" width="1600" height="836" loading="lazy">
*Invoice-app-settings-page*

### -customers-page">**Customers Page**

Add a **customers** folder containing a **page.tsx** file within the Next.js directory and copy the code snippet below into the file:

```js
import CustomersTable from "../components/CustomersTable";
import { useCallback, useEffect, useState } from "react";
import SideNav from "@/app/components/SideNav";

export default function Customers() {
  const [customerName, setCustomerName] = useState&lt;string&gt;("");
  const [customerEmail, setCustomerEmail] = useState&lt;string&gt;("");
  const [customerAddress, setCustomerAddress] = useState&lt;string&gt;("");
  const [loading, setLoading] = useState&lt;boolean&gt;(false);
  const [customers, setCustomers] = useState([]);

  const handleAddCustomer = (e: React.FormEvent&lt;HTMLFormElement&gt;) =&gt; {
    e.preventDefault();
    // 👉🏻 createCustomer();
  };

  return (
    &lt;div className='w-full'&gt;
      &lt;main className='min-h-[90vh] flex items-start'&gt;
        &lt;SideNav /&gt;
        &lt;div className='md:w-5/6 w-full h-full p-6'&gt;
          &lt;h2 className='text-2xl font-bold'&gt;Customers&lt;/h2&gt;
          &lt;p className='opacity-70 mb-4'&gt;Create and view all your customers&lt;/p&gt;

          &lt;form className='w-full' onSubmit={handleAddCustomer} method='POST'&gt;
            &lt;div className='w-full flex items-center space-x-4 mb-3'&gt;
              &lt;section className='w-1/2'&gt;
                &lt;label&gt;Customer&apos;s Name&lt;/label&gt;
                &lt;input
                  type='text'
                  className='w-full p-2 border border-gray-200 rounded-sm'
                  value={customerName}
                  required
                  onChange={(e) =&gt; setCustomerName(e.target.value)}
                /&gt;
              &lt;/section&gt;

              &lt;section className='w-1/2'&gt;
                &lt;label&gt;Email Address&lt;/label&gt;
                &lt;input
                  type='email'
                  className='w-full p-2 border border-gray-200 rounded-sm'
                  value={customerEmail}
                  onChange={(e) =&gt; setCustomerEmail(e.target.value)}
                  required
                /&gt;
              &lt;/section&gt;
            &lt;/div&gt;
            &lt;label htmlFor='address'&gt;Billing Address&lt;/label&gt;
            &lt;textarea
              name='address'
              id='address'
              rows={3}
              className='w-full p-2 border border-gray-200 rounded-sm'
              value={customerAddress}
              onChange={(e) =&gt; setCustomerAddress(e.target.value)}
              required
            /&gt;
            &lt;button
              className='bg-blue-500 text-white p-2 rounded-md mb-6'
              disabled={loading}
            &gt;
              {loading ? "Adding..." : "Add Customer"}
            &lt;/button&gt;
          &lt;/form&gt;

          &lt;CustomersTable customers={customers} /&gt;
        &lt;/div&gt;
      &lt;/main&gt;
    &lt;/div&gt;
  );
}
```

The code snippet above allows users to view, create, and delete customers from the application.

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdd4_PjRZlb7a65BP3PJIItYL0b7GuwMqwiMstNFqPsOl7n5lNIehqAZFK33YPMSHBtbPeRg-LwRmMwv0ASz1PBfC9Bo8YWaNGJcO_heST76rrsB7R6c0PDeXeC5B9AH2TfWriGj4SNC7FGO1BcEm8cEwol?key=QrOqhkDtPIneanOaExEDaA" alt="Invoice-app-customer-page" width="1600" height="917" loading="lazy">
*Invoice-app-customer-page*

### -dashboard-page">**Dashboard Page**

Create a dashboard folder containing a page.tsx within the Next.js app directory and copy the code snippet below into the file:

```js
"use client";
import InvoiceTable from "@/app/components/InvoiceTable";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import SideNav from "@/app/components/SideNav";

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [itemList, setItemList] = useState&lt;Item[]&gt;([]);
  const [customer, setCustomer] = useState&lt;string&gt;("");
  const [invoiceTitle, setInvoiceTitle] = useState&lt;string&gt;("");
  const [itemCost, setItemCost] = useState&lt;number&gt;(1);
  const [itemQuantity, setItemQuantity] = useState&lt;number&gt;(1);
  const [itemName, setItemName] = useState&lt;string&gt;("");
  const [customers, setCustomers] = useState([]);
  const router = useRouter();

  const handleAddItem = (e: React.FormEvent) =&gt; {
    e.preventDefault();
    if (itemName.trim() && itemCost &gt; 0 && itemQuantity &gt;= 1) {
      setItemList([
        ...itemList,
        {
          id: Math.random().toString(36).substring(2, 9),
          name: itemName,
          cost: itemCost,
          quantity: itemQuantity,
          price: itemCost * itemQuantity,
        },
      ]);
    }

    setItemName("");
    setItemCost(0);
    setItemQuantity(0);
  };

  const getTotalAmount = () =&gt; {
    let total = 0;
    itemList.forEach((item) =&gt; {
      total += item.price;
    });
    return total;
  };

  const handleFormSubmit = (e: React.FormEvent&lt;HTMLFormElement&gt;) =&gt; {
    e.preventDefault();
    //👉🏻 createInvoice();
  };

  return (
    &lt;div className='w-full'&gt;
      &lt;main className='min-h-[90vh] flex items-start'&gt;
        &lt;SideNav /&gt;
        &lt;div className='md:w-5/6 w-full h-full p-6'&gt;
          &lt;h2 className='font-bold text-2xl mb-3'&gt;Add new invoice&lt;/h2&gt;

          &lt;form className='w-full flex flex-col' onSubmit={handleFormSubmit}&gt;
            &lt;label htmlFor='customer'&gt;Customer&lt;/label&gt;
            &lt;select
              className='border-[1px] p-2 rounded-sm mb-3'
              required
              value={customer}
              onChange={(e) =&gt; setCustomer(e.target.value)}
            &gt;
              {customers.map((customer: any) =&gt; (
                &lt;option key={customer.id} value={customer.name}&gt;
                  {customer.name}
                &lt;/option&gt;
              ))}
            &lt;/select&gt;

            &lt;label htmlFor='title'&gt;Title&lt;/label&gt;
            &lt;input
              className='border-[1px] rounded-sm mb-3 py-2 px-3'
              required
              value={invoiceTitle}
              onChange={(e) =&gt; setInvoiceTitle(e.target.value)}
            /&gt;

            &lt;div className='w-full flex justify-between flex-col'&gt;
              &lt;h3 className='my-4 font-bold'&gt;Items List&lt;/h3&gt;

              &lt;div className='flex space-x-3'&gt;
                &lt;div className='flex flex-col w-1/4'&gt;
                  &lt;label htmlFor='itemName' className='text-sm'&gt;
                    Name
                  &lt;/label&gt;
                  &lt;input
                    type='text'
                    name='itemName'
                    placeholder='Name'
                    className='py-2 px-4 mb-6 bg-gray-100'
                    value={itemName}
                    onChange={(e) =&gt; setItemName(e.target.value)}
                  /&gt;
                &lt;/div&gt;

                &lt;div className='flex flex-col w-1/4'&gt;
                  &lt;label htmlFor='itemCost' className='text-sm'&gt;
                    Cost
                  &lt;/label&gt;
                  &lt;input
                    type='number'
                    name='itemCost'
                    placeholder='Cost'
                    className='py-2 px-4 mb-6 bg-gray-100'
                    value={itemCost}
                    onChange={(e) =&gt; setItemCost(Number(e.target.value))}
                  /&gt;
                &lt;/div&gt;

                &lt;div className='flex flex-col justify-center w-1/4'&gt;
                  &lt;label htmlFor='itemQuantity' className='text-sm'&gt;
                    Quantity
                  &lt;/label&gt;
                  &lt;input
                    type='number'
                    name='itemQuantity'
                    placeholder='Quantity'
                    className='py-2 px-4 mb-6 bg-gray-100'
                    value={itemQuantity}
                    onChange={(e) =&gt; setItemQuantity(Number(e.target.value))}
                  /&gt;
                &lt;/div&gt;

                &lt;div className='flex flex-col justify-center w-1/4'&gt;
                  &lt;p className='text-sm'&gt;Price&lt;/p&gt;
                  &lt;p className='py-2 px-4 mb-6 bg-gray-100'&gt;
                    {Number(itemCost * itemQuantity).toLocaleString("en-US")}
                  &lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;button
                className='bg-blue-500 text-gray-100 w-[100px] p-2 rounded'
                onClick={handleAddItem}
              &gt;
                Add Item
              &lt;/button&gt;
            &lt;/div&gt;

            &lt;InvoiceTable itemList={itemList} /&gt;
            &lt;button
              className='bg-blue-800 text-gray-100 w-full p-4 rounded my-6'
              type='submit'
            &gt;
              SAVE & PREVIEW INVOICE
            &lt;/button&gt;
          &lt;/form&gt;
        &lt;/div&gt;
      &lt;/main&gt;
    &lt;/div&gt;
  );
}
```

The code snippet above displays a form that accepts the invoice details, such as the customer’s name, invoice title, and items list needed to create an invoice.

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcUHH9gL0R6IRq-WSuKxwiTyNLM0Hae4uqYjIPXBswcEDG_zNfk7-QBLGj1Ht-RC5zbPkp6JddjSgIEwvkNeID6756C7i_uA-_vq8kgTDU-tuA6FqORWxtaJ8Jc53XdOULfmGOmEHSsiGRbTuXuth957Hkt?key=QrOqhkDtPIneanOaExEDaA" alt="Invoice-app-dashboard" width="1600" height="866" loading="lazy">
*Invoice-app-dashboard*

### -history-page">**History Page**

Create a **history** folder containing a **page.tsx** file within the Next.js app directory and copy the following code into the file:

```js
"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import SideNav from "@/app/components/SideNav";

export default function History() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [invoices, setInvoices] = useState&lt;Invoice[]&gt;([]);

  return (
    &lt;div className='w-full'&gt;
      &lt;main className='min-h-[90vh] flex items-start'&gt;
        &lt;SideNav /&gt;
        &lt;div className='md:w-5/6 w-full h-full p-6'&gt;
          &lt;h2 className='text-2xl font-bold'&gt;History&lt;/h2&gt;
          &lt;p className='opacity-70 mb-4'&gt;View all your invoices and their status&lt;/p&gt;

          {invoices.map((invoice) =&gt; (
            &lt;div
              className='bg-blue-50 w-full mb-3 rounded-md p-3 flex items-center justify-between'
              key={invoice.id}
            &gt;
              &lt;div&gt;
                &lt;p className='text-sm text-gray-500 mb-2'&gt;
                  Invoice - #0{invoice.id} issued to{" "}
                  &lt;span className='font-bold'&gt;{invoice.customer_id}&lt;/span&gt;
                &lt;/p&gt;
                &lt;h3 className='text-lg font-bold mb-[1px]'&gt;
                  {Number(invoice.total_amount).toLocaleString()}
                &lt;/h3&gt;
              &lt;/div&gt;
              &lt;Link
                href={{
                  pathname: `/invoices/${invoice.id}`,
                  query: { customer: invoice.customer_id },
                }}
                className='bg-blue-500 text-blue-50 rounded p-3'
              &gt;
                Preview
              &lt;/Link&gt;
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
      &lt;/main&gt;
    &lt;/div&gt;
  );
}
```

The code snippet above displays the recently created invoices and enables users to preview them when needed.

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfn94sQF287nrzVJb3FB3rO3zkfidF87Amtx4xliIM93iK_I30dAEZEZaDrt7YMX2e_Zi2o0lMJYHvqudFrlQA880nL8NbO0Rsii_n_sdMVV1Lp6DHbOT7eo-RLhAM7VUfxekxVyXjlpzqSn5LaX28_vZOz?key=QrOqhkDtPIneanOaExEDaA" alt="Invoice-app-history-page" width="1600" height="923" loading="lazy">
*Invoice-app-history-page*

---

## -how-to-authenticate-users-using-clerk">**How to Authenticate Users Using Clerk**

<a href="https://github.com/clerkinc">Clerk</a> is a complete user management platform that enables you to add various forms of authentication to your software applications. It provides easy-to-use, flexible UI components and APIs that can be integrated seamlessly into your application.

Install the <a href="https://clerk.com/docs/quickstarts/nextjs">Clerk Next.js SDK</a> by running the following code snippet in your terminal:

<table><colgroup></colgroup><tbody><tr><td><span>npm install @clerk/nextjs

Create a `middleware.ts` file within the Next.js src folder and copy the code snippet below into the file:

```js
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// the createRouteMatcher function accepts an array of routes to be protected
const protectedRoutes = createRouteMatcher([
    "/customers",
    "/settings",
    "/dashboard",
    "/history",
    "/invoices(.*)",
]);

// protects the route
export default clerkMiddleware((auth, req) =&gt; {
    if (protectedRoutes(req)) {
        auth().protect();
 }
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

The **`createRouteMatcher()`** function accepts an array containing routes to be protected from unauthenticated users, and the **`clerkMiddleware()`** function ensures the routes are protected.

Next, import the following Clerk components into the **app/layout.tsx** file and update the **`RootLayout`** function as shown below:

```js
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function RootLayout({
    children,
}: Readonly&lt;{
    children: React.ReactNode;
}&gt;) {
    return (
 &lt;ClerkProvider&gt;
 &lt;html lang='en'&gt;
 &lt;body className={inter.className}&gt;
 &lt;nav className='flex justify-between items-center h-[10vh] px-8 border-b-[1px]'&gt;
 &lt;Link href='/' className='text-xl font-extrabold text-blue-700'&gt;
 Invoicer
 &lt;/Link&gt;
 &lt;div className='flex items-center gap-5'&gt;
                            {/*-- if user is signed out --*/}
 &lt;SignedOut&gt;
 &lt;SignInButton mode='modal' /&gt;
 &lt;/SignedOut&gt;
                            {/*-- if user is signed in --*/}
 &lt;SignedIn&gt;
 &lt;Link href='/dashboard' className=''&gt;
 Dashboard
 &lt;/Link&gt;
 &lt;UserButton showName /&gt;
 &lt;/SignedIn&gt;
 &lt;/div&gt;
 &lt;/nav&gt;

                    {children}
 &lt;/body&gt;
 &lt;/html&gt;
 &lt;/ClerkProvider&gt;
 );
}
```

When a user is not signed in, the <a href="https://clerk.com/docs/components/unstyled/sign-in-button">Sign in button</a> component is rendered.

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXe7-OxFwVNEjJ_vvM9zo7j-d1jVKcYj1EXoV-Kk5_WR3k3Ie3h1wXnr2VB_Df5rbc4OJ_uK3wtJ4g1iTfYNrsOqTDu4oMrljRNxhh0xQCVMkSyO_zrrUxmBaT-iBgAkiAKk4Tkoj17stTyY-Y3VP72BbjFL?key=QrOqhkDtPIneanOaExEDaA" alt="Clerk-Auth-Signup-Page" width="1600" height="903" loading="lazy">
*Clerk-Auth-Signup-Page*

Then, after signing into the application, Clerk's <a href="https://clerk.com/docs/components/user/user-button">User Button component</a> and a link to the dashboard are displayed.

Next, create a <a href="https://clerk.com/">Clerk account</a> and add a new application project.

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcu_CxSCF4Gy9AxT0QGVt8Ia1xcU3XrqLsOMxi9v1mqs7qMIHXQGPVHabyfIUkJ9YfyzkXcy-7Q85fSUz9_r1FPxY_9R8RtFuMxiR0CeNZjLqlgkNLXLG43L_EIdeyK1Dwl5tJd7PvBrG7LeHb-NJ8-I0o?key=QrOqhkDtPIneanOaExEDaA" alt="Clerk-Auth-Project-Page" width="1600" height="939" loading="lazy">
*Clerk-Auth-Project-Page*

Select **email** as the authentication method and create the Clerk project.

Finally, add your Clerk publishable and secret keys into the .**env.local** file.

<table><colgroup></colgroup><tbody><tr><td><span>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=&lt;your_publishable_key&gt;<span><br><span>CLERK_SECRET_KEY=&lt;your_secret_key&gt;

Clerk provides various ways to <a href="https://clerk.com/docs/references/nextjs/read-session-data">read user's data</a> on the client and the server, which is essential for identifying users within the application.

---

## -how-to-add-neon-to-a-nextjs-app">**How to Add Neon to a Next.js app**

<a href="https://github.com/tyaga001/awesome-neon">Neon</a> supports multiple frameworks and libraries and provides clear and detailed documentation on adding Neon to them. The Neon serverless driver lets you connect to and interact with Neon in a Next.js application.

Before we proceed, let’s <a href="https://neon.tech/docs/guides/nextjs">create a Neon account and project</a>.

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdbDT3O2Kdn_GAbeMGyegKJB6dDkFnXRC9YyW_YTkGTyZuC3GYpb9ohemo3iatRjq7Cpx0jnwCnY5MXy0xkK6Nu7hf18rvZZOIsRXJi3zZUsTTAaOwDpN61WtnFVpIclISdBDZquVFtEFG8ZB9tg6bVg2wD?key=QrOqhkDtPIneanOaExEDaA" alt="Neon-postgres-all-project-dashboard" width="1600" height="934" loading="lazy">
*Neon-postgres-all-project-dashboard*

Within your project dashboard, you'll find a database connection string. You'll use this to interact with your Neon database.

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXf62euRKYINnsRnREwseLaCeBpGc9kKGTk1sIC4xO36QGpwCaYUhLva-71rrhJ_Z7sb9v1dN0Tz-3DtCCrKPy62duD2afc5MDVMpLi9wgvtw-rKg3o4huDZIbbxxSiwuftKwmtq6iVNAeQwkx1OohSKAA4b?key=QrOqhkDtPIneanOaExEDaA" alt="Neon-project-dashboard" width="1600" height="949" loading="lazy">
*Neon-project-dashboard*

Next, install the Neon Serverless package into the Next.js project:

<table><colgroup></colgroup><tbody><tr><td><span>npm install <span>@neondatabase<span>/serverless

Copy your database connection string into the **.env.local** file.

<table><colgroup></colgroup><tbody><tr><td><span>NEON_DATABASE_URL=<span>"postgres://&lt;user&gt;:&lt;password&gt;@&lt;endpoint_hostname&gt;.neon.tech:&lt;port&gt;/&lt;dbname&gt;?sslmode=require"

Create a **db** folder containing an **index.ts** file within the Next.js app directory and copy the code snippet below into the file:

```js
import { neon } from '@neondatabase/serverless';

if (!process.env.NEON_DATABASE_URL) {
  throw new Error('NEON_DATABASE_URL must be a Neon postgres connection string')
}

export const getDBVersion = async() =&gt; {
    const sql = neon(process.env.NEON_DATABASE_URL!);
    const response = await sql`SELECT version()`;
    return { version: response[0].version }
}
```

Convert the **app/page.tsx** file to a server component and execute the **`getDBVersion()`** function:

```js
import { getDBVersion } from "./db";

export default async function Home() {
    const { version } = await getDBVersion();
    console.log({version})

   return (&lt;div&gt;{/** -- UI elements -- */}&lt;/div&gt;)

}
```

The **`getDBVersion()`** function establishes a connection with the Neon database and allows us to run SQL queries using the Postgres client. This function returns the database version, which is then logged to the console.

<table><colgroup></colgroup><tbody><tr><td><span>{<span><br><span>version: <span>'PostgreSQL 16.3 on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit'<span><br><span>}

Congratulations – you’ve successfully added Neon to your Next.js app.

However, interacting with the Neon database by writing SQL queries directly can require extra learning or introduce complexities for developers who are not familiar with SQL. It can also lead to errors or performance issues when performing complex queries.

This is why Neon supports database ORMs such as Drizzle ORM, which provide a higher-level interface for interacting with the database. <a href="https://orm.drizzle.team/docs/overview">Drizzle ORM</a> enables you to write complex query functions and interact with the database easily using TypeScript.

---

## -how-to-set-up-neon-serverless-driver-with-drizzle-orm-in-nextjs">**How to Set Up Neon Serverless Driver with Drizzle ORM in Next.js**

Drizzle ORM lets you query data and perform various operations on the database using simple TypeScript query commands. It is lightweight, typesafe, and easy to use.

First, you'll need to install the <a href="https://orm.drizzle.team/kit-docs/overview">Drizzle Kit</a> and the <a href="https://orm.drizzle.team/docs/overview">Drizzle ORM</a> package.

Drizzle Kit lets you manage the database schema and migrations.

<table><colgroup></colgroup><tbody><tr><td><span>npm i drizzle-orm<span><br><span>npm i -D drizzle-kit

Inside the **db** folder, add an **actions.ts**, and **schema.ts** file:

<table><colgroup></colgroup><tbody><tr><td><span>cd db<span><br><span>touch actions.ts schema.ts

The actions.ts file will contain the required database queries and operations, while the schema.ts file will define the database schema for the invoicing application.

### -database-design-for-the-invoice-application">**Database Design for the invoice application**

Recall that users can add customers, update their bank information, and create invoices within the application. So you need to create database tables for the data in Neon.

The user's ID will be used as a foreign key to identify each row of data that belongs to a specific user.

Copy the code snippet below into the **db/schema.ts** file:

```js
import {  text, serial, pgTable, timestamp, numeric } from "drizzle-orm/pg-core";

//👇🏻 invoice table with its column types
export const invoicesTable = pgTable("invoices", {
    id: serial("id").primaryKey().notNull(),
    owner_id: text("owner_id").notNull(),
    customer_id: text("customer_id").notNull(),
    title: text("title").notNull(),
    items: text("items").notNull(),
    created_at: timestamp("created_at").defaultNow(),
    total_amount: numeric("total_amount").notNull(),
});

//👇🏻 customers table with its column types
export const customersTable = pgTable("customers", {
    id: serial("id").primaryKey().notNull(),
    created_at: timestamp("created_at").defaultNow(),
    owner_id: text("owner_id").notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    address: text("address").notNull(),
})

//👇🏻 bank_info table with its column types
export const bankInfoTable = pgTable("bank_info", {
    id: serial("id").primaryKey().notNull(),
    owner_id: text("owner_id").notNull().unique(),
    bank_name: text("bank_name").notNull(),
    account_number: numeric("account_number").notNull(),
    account_name: text("account_name").notNull(),
    created_at: timestamp("created_at").defaultNow(),
    currency: text("currency").notNull(),
})
```

The actions.ts file will contain the various database operations required within the application. First, add the code snippet below to the file:

```js
import { invoicesDB, customersDB, bankInfoDB } from ".";
import { invoicesTable, customersTable, bankInfoTable } from './schema';
import { desc, eq } from "drizzle-orm";

//👇🏻 add a new row to the invoices table
export const createInvoice = async (invoice: any) =&gt; {
    await invoicesDB.insert(invoicesTable).values({
    owner_id: invoice.user_id,
    customer_id: invoice.customer_id,
    title: invoice.title,
    items: invoice.items,
    total_amount: invoice.total_amount,
 });
};

//👇🏻 get all user's invoices
export const getUserInvoices = async (user_id: string) =&gt; {
    return await invoicesDB.select().from(invoicesTable).where(eq(invoicesTable.owner_id, user_id)).orderBy(desc(invoicesTable.created_at));
};

//👇🏻 get single invoice
export const getSingleInvoice = async (id: number) =&gt; {
    return await invoicesDB.select().from(invoicesTable).where(eq(invoicesTable.id, id));
};
```

The **`createInvoice`** function accepts invoice details as a parameter and adds a new row of data to its invoice table. The **`getUserInvoices`** function filters the table and returns an array of invoices created by the user. The **`getSingleInvoice`** function accepts an invoice ID, filters the table, and returns the invoice with a matching ID.

Add the following functions to the db/actions file:

```js
//👇🏻 get customers list
export const getCustomers = async (user_id: string) =&gt; {
    return await customersDB.select().from(customersTable).where(eq(customersTable.owner_id, user_id)).orderBy(desc(customersTable.created_at));
};

//👇🏻 get single customer
export const getSingleCustomer = async (name: string) =&gt; {
    return await customersDB.select().from(customersTable).where(eq(customersTable.name, name));
};

//👇🏻 add a new row to the customers table
export const addCustomer = async (customer: Customer) =&gt; {
    await customersDB.insert(customersTable).values({
        owner_id: customer.user_id,
        name: customer.name,
        email: customer.email,
        address: customer.address,
 });
};

//👇🏻 delete a customer
export const deleteCustomer = async (id: number) =&gt; {
  await customersDB.delete(customersTable).where(eq(customersTable.id, id));
};
```

This code snippet enables users to retrieve all their customers from the database, get a single customer via its ID, add new customers, and delete customers from the **customers** table.

Finally, add this also to the **db/actions.ts** file:

```js
//👇🏻 get user's bank info
export const getUserBankInfo = async (user_id: string) =&gt; {
    return await bankInfoDB.select().from(bankInfoTable).where(eq(bankInfoTable.owner_id, user_id));
};

//👇🏻 update bank info table
export const updateBankInfo = async (info: any) =&gt; {
await bankInfoDB.insert(bankInfoTable)
 .values({
        owner_id: info.user_id,
        bank_name: info.bank_name,
        account_number: info.account_number,
        account_name: info.account_name,
        currency: info.currency,
 })
 .onConflictDoUpdate({
            target: bankInfoTable.owner_id,
            set: {
                bank_name: info.bank_name,
                account_number: info.account_number,
                account_name: info.account_name,
                currency: info.currency,
 },
 });
};
```

The **`getUserBankInfo`** function fetches the user’s bank information from the database, while the **`updateBankInfo`** function updates it. If the user already has one, the function updates it with the new details – otherwise, it creates a new entry.

Next, update the **db/index.ts** file to connect to the Neon database and export the Drizzle instance for each table. This will be used to execute typesafe SQL queries against your Postgres database hosted on Neon.

```js
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { invoicesTable, customersTable, bankInfoTable } from './schema';

if (!process.env.NEON_DATABASE_URL) {
  throw new Error('DATABASE_URL must be a Neon postgres connection string')
}
const sql = neon(process.env.NEON_DATABASE_URL!);


export const invoicesDB = drizzle(sql, {
  schema: { invoicesTable }
});

export const customersDB = drizzle(sql, {
  schema: { customersTable }
});

export const bankInfoDB = drizzle(sql, {
  schema: { bankInfoTable }
});
```

Create a **drizzle.config.ts** file at the root of the Next.js folder and add the following configuration. Ensure you install the <a href="https://www.npmjs.com/package/dotenv">Dotenv package</a>.

```js
import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.NEON_DATABASE_URL)
    throw new Error("NEON DATABASE_URL not found in environment");

export default {
    schema: "./src/app/db/schema.ts",
    out: "./src/app/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.NEON_DATABASE_URL,
 },
    strict: true,
} satisfies Config;
```

The **drizzle.config.ts** file contains all the information about your database connection, migration folder, and schema files.

Finally, update the **package.json** file to include the Drizzle Kit commands for generating database migrations and creating the tables.

<table><colgroup></colgroup><tbody><tr><td><span>{<span><br><span> <span>"scripts"<span> : {<span><br><span> <span>"migrate"<span>: <span>"npx drizzle-kit generate -- dotenv_config_path='.env.local'"<span>,<span><br><span> <span>"db-create"<span>: <span>"npx drizzle-kit push -- dotenv_config_path='.env.local'"<span><br><span> }<span><br><span>}

You can now run **`npm run db-create`** to push the database tables to the Neon console.

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdK9dJHITFXRrqOiK6pFL7hUZtvinCaymedYlOuWu9QUOOEEmKuweQ1z0MflHyhdsffeNJ7HGnFLlm9QQ10rH8q6gwGWB7nr-S6GDyCiHmkNAZCfJNhiwPuBY193H0W9nFLDUeLt8zaethyZ2bU9pMOKO5g?key=QrOqhkDtPIneanOaExEDaA" alt="Neon-tables-dashboard" width="1600" height="941" loading="lazy">
*Neon-tables-dashboard*

---

## -creating-the-api-endpoints-for-the-application">**Creating the API Endpoints for the Application**

In the previous section, you created the necessary functions to interact with the database. In this section, you will learn how to create the API endpoints for each database operation.

First, create an `api` folder within the Next.js app directory. It will contain all the API routes for the application.

<table><colgroup></colgroup><tbody><tr><td><span>cd app<span><br><span>mkdir api

Add a **`bank-info`** folder containing a **route.ts** within the `api` folder. This means that the API route (**/api/bank-info**) will handle updating and fetching the user’s bank information.

<table><colgroup></colgroup><tbody><tr><td><span>cd api<span><br><span>mkdir bank-info && cd bank-info<span><br><span>touch route.ts

Copy the code snippet below into the /bank-info/route.ts file. The POST request method updates the user’s bank information and returns a response and the GET request method retrieves the bank information from the database using the user’s ID.

```js
import { updateBankInfo, getUserBankInfo } from "@/app/db/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { accountName, userID, accountNumber, bankName, currency } = await req.json();
    try {
        await updateBankInfo({
            user_id: userID,
            bank_name: bankName,
            account_number: Number(accountNumber),
            account_name: accountName,
            currency: currency,
 });
        return NextResponse.json({ message: "Bank Details Updated!" }, { status: 201 });
 } catch (err) {
        return NextResponse.json(
 { message: "An error occurred", err },
 { status: 400 }
 );
 }
}

export async function GET(req: NextRequest) {
   const userID  = req.nextUrl.searchParams.get("userID");

    try {
        const bankInfo = await getUserBankInfo(userID!);
        return NextResponse.json({ message: "Fetched bank details", bankInfo }, { status: 200 });
 } catch (err) {
        return NextResponse.json(
 { message: "An error occurred", err },
 { status: 400 }
 );
 }
}
```

Next, add an **invoice** folder containing a **route.ts** file to the **`api`** directory. Copy the code snippet below into the /api/invoice/route.ts file:

```js
import { createInvoice, getUserInvoices } from "@/app/db/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { customer, title, items, total, ownerID } = await req.json();

    try {
        await createInvoice({
            user_id: ownerID,
            customer_id: customer,
            title,
            total_amount: total,
            items: JSON.stringify(items),
 })
        return NextResponse.json(
 { message: "New Invoice Created!" },
 { status: 201 }
 );
 } catch (err) {
        return NextResponse.json(
 { message: "An error occurred", err },
 { status: 400 }
 );
 }
}

export async function GET(req: NextRequest) {
    const userID = req.nextUrl.searchParams.get("userID");

    try {
        const invoices = await getUserInvoices(userID!);
        return NextResponse.json({message: "Invoices retrieved successfully!", invoices}, { status: 200 });
 } catch (err) {
        return NextResponse.json(
 { message: "An error occurred", err },
 { status: 400 }
 );
 }
}
```

The POST request method creates a new invoice and the GET request method returns all the user’s invoices from the database.

You can also create a sub-folder named **`single`** within the **/api/invoices** folder, and add a **route.ts** file within it.

```js
import { NextRequest, NextResponse } from "next/server";
import { getSingleInvoice } from "@/app/db/actions";

export async function GET(req: NextRequest) {
   const invoiceID = req.nextUrl.searchParams.get("id");

    try {
        const invoice = await getSingleInvoice(invoiceID);
        return NextResponse.json({ message: "Inovice retrieved successfully!", invoice }, { status: 200 });
 } catch (err) {
        return NextResponse.json(
 { message: "An error occurred", err },
 { status: 400 }
 );
 }
}
```

The code snippet above accepts an invoice ID and retrieves all its data available within the database table. You can do the same with the **customers** table as well.

Congratulations! You’ve learned how to *create*, *store*, and *retrieve* data from the Neon Postgres database. In the upcoming sections, you’ll uncover how to print and send invoices to customers.

---

## -how-to-print-and-download-invoices-in-nextjs">**How to Print and Download Invoices in Next.js**

The <a href="https://www.npmjs.com/package/react-to-print">React-to-print</a> package is a simple JavaScript library that allows you to print the contents of a React component easily without tampering with the component's CSS styles. It converts React components exactly as they are into downloadable PDF files.

First, execute the following code snippet in your terminal to install the package:

<table><colgroup></colgroup><tbody><tr><td><span>npm install -save react-to-print

Create a client page (**/invoice/[id].tsx**). 

To do this, add an **invoice** folder containing a **[id]** sub-folder to the Next.js app directory. Inside the **[id]** folder, add a **page.tsx** file. This page displays all the information about an invoice and allows users to print, download, and send invoices to customers.

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcnG8Yav_Xnqpmk5lO4PXkKjrWqMzEkOat42mTkGR-bvAEA5VTiZ1nasFEc05H_JR6pwlyars_oWMRuBNg4CCLCNpghvnZUQ8eBen-I0OvdPGYfItoUkcXC-Abz87MjBQdacIFUotw2WGYp7YyJFq6NeOrr?key=QrOqhkDtPIneanOaExEDaA" alt="Invoice-app-download-page-ui" width="1600" height="1022" loading="lazy">
*Invoice-app-download-page-ui*

Create a invoice design similar to the image above by copying the code snippet below into the page.tsx file:

```js
const ComponentToPrint = forwardRef&lt;HTMLDivElement, Props&gt;((props, ref) =&gt; {
  const { id, customer, invoice, bankInfo } = props as Props;

  return (
    &lt;div className='w-full px-2 py-8' ref={ref}&gt;
      &lt;div className='lg:w-2/3 w-full mx-auto shadow-md border-[1px] rounded min-h-[75vh] p-5'&gt;
        &lt;header className='w-full flex items-center space-x-4 justify-between'&gt;
          &lt;div className='w-4/5'&gt;
            &lt;h2 className='text-lg font-semibold mb-3'&gt;INVOICE #0{id}&lt;/h2&gt;
            &lt;section className='mb-6'&gt;
              &lt;p className='opacity-60'&gt;Issuer Name: {bankInfo?.account_name}&lt;/p&gt;
              &lt;p className='opacity-60'&gt;Date: {formatDateString(invoice?.created_at!)}&lt;/p&gt;
            &lt;/section&gt;
            &lt;h2 className='text-lg font-semibold mb-2'&gt;TO:&lt;/h2&gt;
            &lt;section className='mb-6'&gt;
              &lt;p className='opacity-60'&gt;Name: {invoice?.customer_id}&lt;/p&gt;
              &lt;p className='opacity-60'&gt;Address: {customer?.address}&lt;/p&gt;
              &lt;p className='opacity-60'&gt;Email: {customer?.email}&lt;/p&gt;
            &lt;/section&gt;
          &lt;/div&gt;

          &lt;div className='w-1/5 flex flex-col'&gt;
            &lt;p className='font-extrabold text-2xl'&gt;
              {`${bankInfo?.currency}${Number(invoice?.total_amount).toLocaleString()}`}
            &lt;/p&gt;
            &lt;p className='text-sm opacity-60'&gt;Total Amount&lt;/p&gt;
          &lt;/div&gt;
        &lt;/header&gt;
        &lt;div&gt;
          &lt;p className='opacity-60'&gt;Subject:&lt;/p&gt;
          &lt;h2 className='text-lg font-semibold'&gt;{invoice?.title}&lt;/h2&gt;
        &lt;/div&gt;

        &lt;InvoiceTable itemList={invoice?.items ? JSON.parse(invoice.items) : []} /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
});

ComponentToPrint.displayName = "ComponentToPrint";
```

The code snippet accepts invoice details, including the customer and user’s bank information and renders them within the component.

Finally, you need to wrap this component with another parent one and instruct **React-to-print** to print the sub-component. Add the following code snippet below the **`ComponentToPrint`** component.

```js
import { useReactToPrint } from "react-to-print";

export default function Invoices() {
  const { id } = useParams&lt;{ id: string }&gt;();
  // Reference to the component to be printed
  const componentRef = useRef&lt;any&gt;();

  // States for the data
  const [customer, setCustomer] = useState&lt;Customer&gt;();
  const [bankInfo, setBankInfo] = useState&lt;BankInfo&gt;();
  const [invoice, setInvoice] = useState&lt;Invoice&gt;();

  // Function that sends invoice via email
  const handleSendInvoice = async () =&gt; {};

  // Function that prints the invoice
  const handlePrint = useReactToPrint({
    documentTitle: "Invoice",
    content: () =&gt; componentRef.current,
  });

  return (
    &lt;main className='w-full min-h-screen'&gt;
      &lt;section className='w-full flex p-4 items-center justify-center space-x-5 mb-3'&gt;
        &lt;button
          className='p-3 text-blue-50 bg-blue-500 rounded-md'
          onClick={handlePrint}
        &gt;
          Download
        &lt;/button&gt;
        &lt;button
          className='p-3 text-blue-50 bg-green-500 rounded-md'
          onClick={() =&gt; {
            handleSendInvoice();
          }}
        &gt;
          Send Invoice
        &lt;/button&gt;
      &lt;/section&gt;

      &lt;ComponentToPrint
        ref={componentRef}
        id={id}
        customer={customer}
        bankInfo={bankInfo}
        invoice={invoice}
      /&gt;
    &lt;/main&gt;
  );
}
```

The component renders the **`ComponentToPrint`** component, creates a reference to it, and prints it using the <a href="https://github.com/MatthewHerbst/react-to-print?tab=readme-ov-file#usage">**useReactToPrint**</a> hook.

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeMjZeFBZ_-Y-mP7tH9rmlBYUwSsGIJfOiCQ7VvYOtLhZBJhgZn60bWpFBNlqOWFIGtwMDizCTooXoWtSX6soKbiGr2xKU3PGMC-5YG9wA-9er21DORGzX4IsdtaxoipsQqQVKlGCu7Ix2igPgLEBaWB_I?key=QrOqhkDtPIneanOaExEDaA" alt="Invoice-app-print-ui" width="1600" height="1010" loading="lazy">
*Invoice-app-print-ui*

---

## -how-to-send-digital-invoices-with-resend-and-react-email">**How to Send Digital Invoices with Resend and React Email**

<a href="https://resend.com/">Resend</a> is an API service that enables us to send and manage emails programmatically, making it easy to integrate email functionality into software applications. 

<a href="https://react.email/">React Email</a> is a library that allows us to create reusable, beautifully designed email templates using React components. Both packages are created by the person, allowing for smooth integration between the two services.

Install both packages by running the code snippet below:

<table><colgroup></colgroup><tbody><tr><td><span>npm install resend <span><br><span>npm install react-email <span>@react<span>-email/components -E

Configure React Email by including the following script in your **package.json** file.

The **`--dir`** flag gives React Email access to the email templates located within the project. In this case, the email templates are located in the **src/app/emails** folder.

<table><colgroup></colgroup><tbody><tr><td><span>{<span><br><span>&nbsp; &nbsp; <span>"scripts"<span>: {<span><br><span>&nbsp; &nbsp; &nbsp; &nbsp; <span>"email"<span>: <span>"email dev --dir src/app/emails"<span><br><span>&nbsp; &nbsp; }<span><br><span>}

Next, create the emails folder containing the email template to be sent to the customers’ email:

```js
import { Heading, Hr, Text } from "@react-email/components";

export default function EmailTemplate({
    invoiceID,
    items,
    amount,
    issuerName,
    accountNumber,
    currency,
}: Props) {
    return (
 &lt;div&gt;
 &lt;Heading as='h2' style={{ color: "#0ea5e9" }}&gt;
 Purhcase Invoice from {issuerName}
 &lt;/Heading&gt;
 &lt;Text style={{ marginBottom: 5 }}&gt;Invoice No: INV0{invoiceID}&lt;/Text&gt;
 &lt;Heading as='h3'&gt; Payment Details:&lt;/Heading&gt;
 &lt;Text&gt;Account Details: {issuerName}&lt;/Text&gt;
 &lt;Text&gt;Account Number: {accountNumber}&lt;/Text&gt;
 &lt;Text&gt;Total Amount: {`${currency}${amount}`}&lt;/Text&gt;
 &lt;Hr /&gt;
 &lt;Heading as='h3'&gt; Items: &lt;/Heading&gt;
            {items &&
                items.map((item, index) =&gt; (
 &lt;div key={index}&gt;
 &lt;Text&gt;
                            {item.cost} x {item.quantity} = {item.price}
 &lt;/Text&gt;
 &lt;/div&gt;
 ))}
 &lt;/div&gt;
 );
}
```

The email template accepts all the invoice details as props and sends a dynamic email template to the user. You can also preview the invoice layout by running **`npm run email`** within your terminal.

Next, create a <a href="https://resend.com/docs/introduction">Resend account</a>, and select **API Keys** from the sidebar menu on your dashboard to create one.

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdTkbkk-f3JIvcGLXoFdeQGpFNF6gDgqZWVL5NnJjcbu17I4dRp3rF8GYNUHXkvF2Gs59OQgjuknTVXWzOjknrJVeZ7xv90LhLZLPeqGgYI-il5PyKEcL3g-E3_VAem-sX13pkRlz-AhqPdgXgVQo884Uce?key=QrOqhkDtPIneanOaExEDaA" alt="resend-api-keys-dashboard" width="1600" height="938" loading="lazy">
*resend-api-keys-dashboard*

Copy the API key into the .env.local file.

Finally, create an API endpoint that accepts the invoice details from the frontend and sends an invoice containing the data to a customer.

```js
import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "@/app/emails/email";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
    const {
        invoiceID,
        items,
        title,
        amount,
        customerEmail,
        issuerName,
        accountNumber,
        currency,
 } = await req.json();

    try {
        const { data, error } = await resend.emails.send({
            from: "Acme &lt;onboarding@resend.dev&gt;",
            to: [customerEmail],
            subject: title,
            react: EmailTemplate({
                invoiceID,
                items: JSON.parse(items),
                amount: Number(amount),
                issuerName,
                accountNumber,
                currency,
 }) as React.ReactElement,
 });

        if (error) {
            return Response.json(
 { message: "Email not sent!", error },
 { status: 500 }
 );
 }

        return NextResponse.json({ message: "Email delivered!" }, { status: 200 });
 } catch (error) {
        return NextResponse.json(
 { message: "Email not sent!", error },
 { status: 500 }
 );
 }
}
```

The code snippet above accepts invoice details from the frontend, passes the required data into the email template, and sends an email to the user.

---

## -next-steps">**Next Steps**

Congratulations. By now, you should have a good understanding of how to build full-stack applications with Clerk, Resend, Neon Postgres and Next.js.

If you'd like to learn more about how you can leverage Neon Postgres to build advanced and scalable apps, you can check out the following resources:

- <a href="https://neon.tech/docs/introduction">Neon documentation</a>
- <a href="https://github.com/tyaga001/awesome-neon">Awesome Neon</a>
- <a href="https://github.com/neondatabase/examples">Neon example projects</a>
- <a href="https://neon.tech/docs/guides/vercel">How to integrate Neon with Vercel</a>
- <a href="https://neon.tech/docs/import/import-from-postgres">How to import your data from a Postgres database to Neon</a>

---

## -thank-you-for-reading">Thank you for reading

If you found this article useful, you can:

- <a href="https://bytesizedbets.com/">Subscribe to my newsletter.</a>
- <a href="https://x.com/TheAnkurTyagi">Follow me on Twitter</a> where I post about my business and writing journey, side projects, and current learnings.
- Checkout <a href="https://theankurtyagi.com/">my blog</a> for more tutorials like this on developer tools.   

-->

---

<TagLinks />