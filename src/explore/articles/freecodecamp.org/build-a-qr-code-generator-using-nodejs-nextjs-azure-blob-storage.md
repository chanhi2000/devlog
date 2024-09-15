---
lang: ko-KR
title: How to Build a QR Code Generator for URLs with Node.js, Next.js, and Azure Blob Storage
description: Article(s) > How to Build a QR Code Generator for URLs with Node.js, Next.js, and Azure Blob Storage
icon: iconfont icon-nextjs
category: 
  - Node.js
  - Next.js
  - Azure
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - node
  - nodej
  - next
  - nextjs
  - azure
  - qr
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Build a QR Code Generator for URLs with Node.js, Next.js, and Azure Blob Storage
    - property: og:description
      content: How to Build a QR Code Generator for URLs with Node.js, Next.js, and Azure Blob Storage
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/build-a-qr-code-generator-using-nodejs-nextjs-azure-blob-storage.html
prev: /programming/js-react/articles/README.md
date: 2024-05-10
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w1000/2024/05/qr-code-image-real.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "React.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-react/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Azure > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/azure/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Build a QR Code Generator for URLs with Node.js, Next.js, and Azure Blob Storage"
  desc="A while ago, a client asked me to help them create a special app for generating QR codes so users could receive payments.  What set this app apart was that instead of users entering a URL to generate a QR code, they would initiate a request through the app..."
  url="https://freecodecamp.org/news/build-a-qr-code-generator-using-nodejs-nextjs-azure-blob-storage/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w1000/2024/05/qr-code-image-real.jpeg"/>

<!-- TODO: 작성 -->

<!-- 
A while ago, a client asked me to help them create a special app for generating QR codes so users could receive payments. 

What set this app apart was that instead of users entering a URL to generate a QR code, they would initiate a request through the app. Then a unique QR code would be generated which would be associated with their account details. The QR code would then be displayed on their screen while the payer scans the QR code using their mobile device's camera.

In this tutorial, you'll learn how to develop a custom QR code generator for URLs using Node.js and Next.js. I'll walk you through the process step by step, including setting up Azure Blob Storage to store the generated URLs. These URLs will then be displayed in the form of QR codes in your Next.js frontend application.

We'll build the backend of the application using `Node.js` and the `Express` framework, and the frontend (which interacts with the backend) with `Next.js`.

I'll also provide explanations on QR codes, the concept of `buffers` for handling binary data in Node.js, and how it is being used to stream the QR code image data to Azure Blob Storage.

So, let dive in.

### -prerequisites">**Prerequisites**

Before you begin you'll need an active <a href="https://azure.microsoft.com/en-us/get-started/azure-portal">Azure</a> account and subscription to create an Azure blob storage.

---

## -table-of-contents">**Table of Contents**

1. <a class="post-section-overview" href="#heading-what-is-a-qr-code">What is a QR Code</a>?
<li><a class="post-section-overview" href="#heading-how-to-set-up-azure-blob-storage">How to Set Up Azure Blob Storage</a>
<li><a class="post-section-overview" href="#heading-nodejs-qr-code">Node.js QR Code</a>
<li><a class="post-section-overview" href="#code-overwiew">Code Overview</a>
<li><a class="post-section-overview" href="#heading-how-to-connect-the-frontend-application">How to Connect the Frontend Application</a>
<li><a class="post-section-overview" href="#heading-nextjs-code-walkthrough">Next.js Code Walkthrough</a>
<li><a class="post-section-overview" href="#heading-how-to-start-the-application-locally">How to Start the Application Locally</a>
<li><a class="post-section-overview" href="#heading-conclusion">Conclusion</a>

---

## -what-is-a-qr-code">What is a QR Code?

According to <a href="https://www.investopedia.com/terms/q/quick-response-qr-code.asp">Investopedia</a>, a Quick Response (QR) code functions as a specialized barcode, scannable by digital devices, that stores data within a grid of square pixels. 

QR codes are extensively employed in digital payments, cryptocurrency, and transmitting web addresses to mobile devices. They can encode URLs, facilitating webpage access.

Now, let's delve into the process of programmatically generating QR codes. Today, I'll demonstrate this step-by-step. To begin, you'll set up an `Azure Blob Storage` instance in your `Azure Portal`.

---

## -how-to-set-up-azure-blob-storage">How to Set Up Azure Blob Storage

<a href="https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview">Azure Blob Storage</a> is a cloud-based storage service provided by Microsoft Azure. It is part of the Azure Storage suite, which also includes services such as Azure Files, Azure Queues, and Azure Tables. 

Azure Blob Storage is designed to store large amounts of unstructured data, such as text or binary data, in the form of objects called blobs. If you are familiar with AWS, Azure Blob Storage is similar to an S3 bucket. Storage accounts are primarily accessed via REST API.

### -step-1-create-a-storage-account">Step 1: Create a storage account

You can create your storage account by simply searching for Storage account in the search bar at the top of the Azure Portal.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-16.08.23.png" alt="Image" width="796" height="284" loading="lazy">
*Create Storage Accounts in Azure Portal*

You can then run through the steps to create your storage account. Just note that this name needs to be unique and it also needs to be all lower case – no spaces but it can include numbers.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-16.16.46.jpeg" alt="Image" width="1280" height="729" loading="lazy">
*Create a New Resource Group*

### -step-2-create-a-container">Step 2: Create a container

After creating your storage account, you can now create a `container`.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-16.44.16.jpeg" alt="Image" width="1280" height="719" loading="lazy">
*Create a New Container*

When accessing blob storage with the `QR codes` stored in Azure Storage, the URL typically follows a structure like `https://&lt;storage_account_name&gt;.blob.core.windows.net/&lt;container_name&gt;/&lt;blob_name&gt;`. 

Having a container allows us to structure the URLs in a meaningful and organized way, making it easier to manage and share the generated QR codes.

### -step-3-obtain-azure-storage-connection-string">Step 3: Obtain Azure Storage connection string

In the `Security + networking` section, select "Access keys."

Make sure to copy the connection string and save it somewhere as it's required to establish a secure connection between the Azure Storage account and the `Node.js` application.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-16.54.39.jpeg" alt="Image" width="1280" height="734" loading="lazy">
*Obtain Access Key for the Container*

That concludes the discussion on Microsoft Azure Storage. I must say, I thoroughly enjoyed exploring and solving these challenges.

Next, you will be diving into coding, specifically around `Nodejs` and and then moving on to frontend development, where you'll be using `Next.js`.

---

## -nodejs-qr-code">Node.js QR Code

First, you need to install `Node.js` and `npm` on your computer. Go to the <a href="https://nodejs.org/">Node.js</a> website and download the version for your computer if you don't have it already.

Once you've installed them, check if Node.js and npm are installed correctly by typing these commands in your terminal:

<pre class="language-bash" tabindex="0"><code class="language-bash">node</span> -v</span>
npm</span> -v</span>
```

Next, go to this GitHub <a href="https://github.com/ayowilfred95/azure-qr-code-generator.git">link</a> to fork the project and then clone it to your preferred directory on your computer.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-17.26.39--2-.jpeg" alt="Image" width="922" height="508" loading="lazy">
*Github Repository Project*

Once you've cloned the project repository, open the project with your code editor. I'm using <a href="https://code.visualstudio.com/download">VS Code</a>. You'll notice that the project has of two folders: `server` and `frontend`. You'll start by navigating to the `server` folder by typing `cd server` in your terminal and then press `Enter`.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-17.48.03.jpeg" alt="Image" width="775" height="170" loading="lazy">
*Change the current directory to a directory named "server."*

Now you can install all the necessary dependencies by running `npm install`. This command will download and install all the required packages for the server-side application.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-17.55.01.jpeg" alt="Image" width="770" height="239" loading="lazy">
*installation of dependencies*

If everything went well, you should see something like this below after `npm install`:

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-17.51.59.png" alt="Image" width="770" height="158" loading="lazy">
*Successful Installation*

Next, you need to create a `.env` file in the `server` directory to store your environment variables. It's not advisable to hardcode sensitive credentials. You can do this easily by running `touch .env` in your terminal.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-17.59.38.jpeg" alt="Image" width="770" height="153" loading="lazy">
*Create a new file named ".env"*

In the newly created `.env` file, you'll define three variables that your application depends on: `CONTAINER_NAME` , `AZURE_STORAGE_CONNECTION_STRING`, and  `PORT` .

Assign 'qrcode' as the value for `CONTAINER_NAME`. This was the name of the container you created inside the Azure Storage account. Also, set the `PORT` to `8000`, which is the port your backend application will be listening on.

Now, for the `AZURE_STORAGE_CONNECTION_STRING`, you'll need to obtain the secret key from the access key you obtained earlier. Copy the connection string and paste it as the value for `AZURE_STORAGE_CONNECTION_STRING` in the `.env` file.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-18.18.00.png" alt="Image" width="684" height="412" loading="lazy">
*Store Secret Variables*

Once you've added these environment variables to the `.env` file, save it and you're all set to run the server-side of the application!

Before you run the application, let me quickly explain the code. Click on the `index.js` file. 

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-18.18.28.png" alt="Image" width="228" height="412" loading="lazy">
*View Index.js file*

### -code-overview">Code overview:

Below is the code snippet containing the necessary logic for generating QR codes and establishing a connection with the Azure storage account you previously created.

<pre class="language-bash" tabindex="0"><code class="language-bash">const express =</span> require(</span>'express'</span>)</span>;</span>
const {</span> BlobServiceClient, generateBlobSASQueryParameters, BlobSASPermissions }</span> =</span> require(</span>'@azure/storage-blob'</span>)</span>;</span>
const qrcode =</span> require(</span>'qrcode'</span>)</span>;</span>
const {</span> v4: uuidv4 }</span> =</span> require(</span>'uuid'</span>)</span>;</span>
const {</span> Readable }</span> =</span> require(</span>'stream'</span>)</span>;</span>
const dotenv =</span> require(</span>'dotenv'</span>)</span>;</span>

dotenv.config(</span>)</span>;</span>

const app =</span> express(</span>)</span>;</span>
const port =</span> process.env.PORT ||</span> 5000</span>;</span>

// Allowing CORS for</span> <span class="token builtin class-name">local</span> testing
const origins =</span> [</span>
    "http://localhost:3000"</span>
]</span>;</span>

app.use<span class="token variable">((</span>req,</span> res,</span> next)</span> =</span>&gt;</span> {
    res.header(</span>'Access-</span>Control-</span>Allow-</span>Origin',</span> origins.join(</span>',</span>'))</span></span>;</span>
    res.header(</span>'Access-Control-Allow-Headers'</span>, 'Origin, X-Requested-With, Content-Type, Accept'</span>)</span>;</span>
    next(</span>)</span>;</span>
}</span>)</span>;</span>


const containerName =</span> process.env.CONTAINER_NAME;</span>

const blobServiceClient =</span> BlobServiceClient.fromConnectionString(</span>process.env.AZURE_STORAGE_CONNECTION_STRING)</span>;</span>

app.use(</span>express.json(</span>))</span>;</span>

app.post(</span>'/generate-qr'</span>, async (</span>req, res)</span> =</span>&gt;</span> {</span>
    const {</span> url }</span> =</span> req.body;</span>

    // Generate QR Code
    console.log(</span>'Received URL:'</span>, url)</span>;</span>
    const qrCode =</span> await qrcode.toBuffer(</span>url)</span>;</span>

    const bufferStream =</span> new Readable(</span>)</span>;</span>
    bufferStream.push(</span>qrCode)</span>;</span>
    bufferStream.push(</span>null)</span>;</span>

    // Generate unique file</span> name for</span> Azure Blob Storage
    const fileName =</span> <span class="token variable"><span class="token variable">`</span>qr_codes/${</span>uuidv4(</span>)</span>}</span>.png<span class="token variable">`</span></span>;</span>

    try {</span>
        const containerClient =</span> blobServiceClient.getContainerClient(</span>containerName)</span>;</span>
        const blockBlobClient =</span> containerClient.getBlockBlobClient(</span>fileName)</span>;</span>

        await blockBlobClient.uploadStream(</span>bufferStream, 4</span> * 1024</span> * 1024</span>, 20</span>, {</span>
            blobHTTPHeaders: {</span>
                blobContentType: 'image/png'</span>
            }</span>
        }</span>)</span>;</span>

        // Generate SAS token for</span> blob
        const sasToken =</span> generateSasToken(</span>blockBlobClient)</span>;</span>

        // Generate the Blob URL with SAS token
        const blobUrlWithSasToken =</span> <span class="token variable"><span class="token variable">`</span>${</span>blockBlobClient.url}</span>?${</span>sasToken}</span><span class="token variable">`</span></span>;</span>

        // Send response with the Blob URL containing SAS token
        res.json(</span>{</span> qr_code_url: blobUrlWithSasToken }</span>)</span>;</span>
    }</span> catch (</span>error)</span> {</span>
        console.error(</span>'Error generating QR Code:'</span>, error)</span>;</span>
        res.status(</span>500</span>)</span>.json(</span>{</span> error: 'Internal Server Error'</span> }</span>)</span>;</span>
    }</span>
}</span>)</span>;</span>

// Function to generate SAS token for</span> blob
function</span> generateSasToken(</span>blobClient)</span> {</span>
    const blobSAS =</span> generateBlobSASQueryParameters(</span>{</span>
        containerName: blobClient.containerName,
        blobName: blobClient.blobName,
        permissions: BlobSASPermissions.parse(</span>"r"</span>)</span>, // Read permission
        startsOn: new Date(</span>)</span>,
        expiresOn: new Date(</span>new Date(</span>)</span>.valueOf(</span>)</span> + 86400</span>)</span> // Token expires in</span> 24</span> hours
    }</span>, blobClient.credential)</span>;</span>

    <span class="token builtin class-name">return</span> blobSAS.toString(</span>)</span>;</span>
}</span>

app.listen(</span>port, (</span>)</span> =</span>&gt;</span> {</span>
    console.log(</span><span class="token variable"><span class="token variable">`</span>Server is running on port ${</span>port}</span><span class="token variable">`</span></span>)</span>;</span>
}</span>)</span>;</span>
```

Now I'll give a detailed explanation of the code structure, functionalities, and key components of the application.

<h4 id="heading-importing-required-modules">Importing required modules:</h4>
- `const express = require('express')`: This line imports the Express.js framework, which is a Node.js web application framework for building web applications and APIs. It allows you to define routes, handle HTTP requests, and more.
<li>`const { BlobServiceClient, generateBlobSASQueryParameters, BlobSASPermissions } = require('@azure/storage-blob')`: This line imports specific modules from the `@azure/storage-blob` package, which is the Azure Blob Storage SDK for JavaScript. It allows you to interact with Azure Blob Storage from our Node.js application.
<li>`const qrcode = require('qrcode')`: This line imports the `qrcode` module, which is a popular Node.js library for generating QR codes.
<li>`const{ v4: uuidv4 } = require('uuid')`: This line imports the `uuid` module and specifically extracts the `v4` function as `uuidv4`. The `uuid` module is used to generate universally unique identifiers (UUIDs) in Node.js.
<li>`const{ Readable } = require('stream')`: This line imports the `Readable` class from the built-in Node.js `stream` module. The `Readable` class is used to create readable streams, which are useful for handling data that can be read sequentially.

<h4 id="heading-configuring-environment-variables">Configuring environment variables:</h4>
- `dotenv.config();`: This line loads environment variables from a `.env` file into `process.env`. The `.env` file typically contains `CONTAINER_NAME` and `AZURE_STORAGE_CONNECTION_STRING` you specify in your `.env` file.

<h4 id="heading-initializing-the-express-application">Initializing the Express application:</h4>
- `const app = express();`: This line initializes an Express application instance, which you'll use to define routes, middleware, and other configurations for your web application.

<h4 id="heading-defining-port-configuration">Defining port configuration:</h4>
- `const port = process.env.PORT || 5000`: This line sets the port number for the Express application. It retrieves the port number from the `process.env.PORT` environment variable, if it exists. If not, it defaults to port `5000`. This allows flexibility for deploying the application in different environments where the port may be specified externally.

<h4 id="heading-allowing-cors-for-local-testing">Allowing CORS for local testing:</h4>
- CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict resources from being requested from another domain or application.
<li>In this section, CORS is being configured to allow requests from a specific origin (`http://localhost:3000`), which is typically used during local development.
<li>The `app.use()` function is used to add middleware to the Express application. Here, a middleware function is defined that sets the necessary CORS headers on every HTTP response.
<li>`res.header('Access-Control-Allow-Origin', origins.join(','))`: Sets the value of the `Access-Control-Allow-Origin` header to allow requests from the specified origins (in this case, `http://localhost:3000`).
<li>`res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')`: Sets the allowed headers for the CORS request.
<li>`next()`: Calls the next middleware function in the stack.

<h4 id="heading-azure-blob-storage-configuration">Azure Blob Storage configuration:</h4>
- `containerName` and `blobServiceClient` are initialized using environment variables (`process.env.CONTAINER_NAME` and `process.env.AZURE_STORAGE_CONNECTION_STRING`) configured earlier.
<li>`blobServiceClient` is initialized using the `fromConnectionString()` method from the `BlobServiceClient` class provided by the `@azure/storage-blob` package. This allows the application to interact with Azure Blob Storage using the provided connection string.

<h4 id="heading-express-application-configuration">Express application configuration:</h4>
- `app.use(express.json())`: Adds middleware to parse JSON bodies of incoming requests. This enables the application to handle JSON data in requests.

<h4 id="heading-endpoint-for-generating-qr-codes">Endpoint for generating QR codes:</h4>
- Defines a POST endpoint at `/generate-qr` to handle requests for generating QR codes.
<li>Upon receiving a request, the endpoint extracts the URL from the request body and generates a QR code image using the `qrcode.toBuffer()` function.
<li>The generated QR code image is then uploaded to Azure Blob Storage as a blob with a unique file name.
<li>After successfully uploading the image, a Shared Access Signature (SAS) token is generated for the blob, which provides temporary access to the blob with specified permissions (in this case, read-only).
<li>Finally, the endpoint responds with a JSON object containing the URL of the generated QR code image along with the SAS token.

<h4 id="heading-function-to-generate-sas-token-for-blob">Function to generate SAS token for blob:</h4>
- Defines a function `generateSasToken()` to generate a SAS token for a given blob client (block blob client in this case). The SAS token is generated with read permissions and an expiration time set to 24 hours.

<h4 id="heading-listening-on-port">Listening on port:</h4>
- The Express application listens on the configured port (`port`) for incoming HTTP requests. When the server starts, it prints a message indicating the port it is listening on.

Now, you can start the application locally.

To start the application, simply run `npm start` as shown below. If all goes well, you'll observe the message `Server is running on port 8000` printed on your console.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-18.36.50.png" alt="Image" width="687" height="108" loading="lazy">
*Start the Application locally*

---

## -how-to-connect-the-frontend-application">How to Connect the Frontend Application

Now it is time to connect the frontend application with the backend application that is listening on Port 8000.

A typical full-stack application usually consists of at least two main components: a frontend (client-side) and a backend (server-side).

**Frontend Component**: This is the part of the application that users interact with directly. It's typically built using technologies like HTML, CSS, and JavaScript frameworks like React, Angular, or Next.js. 

**Backend Component**: This is the part of the application that handles data storage, retrieval, and server side connectivity. It's usually built using server-side programming languages like Node.js (with frameworks like Express.js or Nest.js), Python (with frameworks like Django or Flask), Java (with frameworks like Spring), or Ruby (with frameworks like Ruby on Rails). 

The backend communicates with the frontend, processes requests from users, interacts with databases, and generates responses.

To navigate to the frontend folder, open a new terminal by clicking the `+` , then use `cd frontend` to enter the frontend folder.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-18.57.14.jpeg" alt="Image" width="864" height="194" loading="lazy">
*Navigate to Frontend Directory*

Now, you can install all the necessary dependencies by running `npm install`. This command will download and install all the required packages for the Nextjs client-side application.

If everything went well, you should see something like this after `npm install`. 

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-17.51.59-1.png" alt="Image" width="770" height="158" loading="lazy">
*Successful Installation of Dependencies*

Before you run the application, let me quickly explain the code.Navigate to the frontend folder, then inside the `src/app` directory, click on the page.js file.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-18.50.17.jpeg" alt="Image" width="292" height="526" loading="lazy">
*View page.js file*

### -nextjs-code-walkthrough">Next.js Code Walkthrough

This code represents a React component serving as the frontend for the QR code generator backend application you've recently built. This component allows users to input a URL, submit it, and receive the corresponding QR code image for display.

<pre class="language-bash" tabindex="0"><code class="language-bash">'use client'</span>

import</span> {</span> useState }</span> from 'react'</span>;</span>
import</span> axios from 'axios'</span>;</span>

<span class="token builtin class-name">export</span> default function</span> <span class="token function-name function">Home</span>(</span>)</span> {</span>
  const [</span>url, setUrl]</span> =</span> useState(</span>''</span>)</span>;</span>
  const [</span>qrCodeUrl, setQrCodeUrl]</span> =</span> useState(</span>''</span>)</span>;</span>

  const handleSubmit =</span> async (</span>e)</span> =</span>&gt;</span> {</span>
    e.preventDefault(</span>)</span>;</span>
    try {</span>
      const response =</span> await axios.post(</span>'http://localhost:8000/generate-qr'</span>, {</span> url }</span>)</span>;</span>
      setQrCodeUrl(</span>response.data.qr_code_url)</span>;</span>
    }</span> catch (</span>error)</span> {</span>
      console.error(</span>'Error generating QR Code:'</span>, error)</span>;</span>
    }</span>
  }</span>;</span>

  <span class="token builtin class-name">return</span> (</span>
    &lt;</span>div style</span>=</span>{</span>styles.container}</span>&gt;</span>
      &lt;</span>h1 style</span>=</span>{</span>styles.title}</span>&gt;</span>QR Code Generator&lt;</span>/h<span class="token file-descriptor important">1</span>&gt;</span>
      &lt;</span>form onSubmit</span>=</span>{</span>handleSubmit}</span> style</span>=</span>{</span>styles.form}</span>&gt;</span>
        &lt;</span>input
          type</span>=</span>"text"</span>
          value</span>=</span>{</span>url}</span>
          onChange</span>=</span>{</span>(</span>e)</span> =</span>&gt;</span> setUrl(</span>e.target.value)</span>}</span>
          placeholder</span>=</span>"Enter URL like https://www.google.com"</span>
          style</span>=</span>{</span>styles.input}</span>
        /&gt;</span>
        &lt;</span>button type</span>=</span>"submit"</span> style</span>=</span>{</span>styles.button}</span>&gt;</span>Generate QR Code&lt;</span>/button&gt;</span>
      &lt;</span>/form&gt;</span>
      {</span>qrCodeUrl &&</span> &lt;</span>img src</span>=</span>{</span>qrCodeUrl}</span> alt</span>=</span>"QR Code"</span> style</span>=</span>{</span>styles.qrCode}</span> width</span>=</span>"200"</span> height</span>=</span>"200"</span> /&gt;</span>}</span>
    &lt;</span>/div&gt;</span>
  )</span>;</span>
}</span>

// Styles
const styles =</span> {</span>
  container: {</span>
    minHeight: '100vh'</span>,
    display: 'flex'</span>,
    flexDirection: 'column'</span>,
    alignItems: 'center'</span>,
    justifyContent: 'center'</span>,
    backgroundColor: '#121212'</span>,
    color: 'white'</span>,
  }</span>,
  title: {</span>
    margin: '0'</span>,
    lineHeight: '1.15'</span>,
    fontSize: '4rem'</span>,
    textAlign: 'center'</span>,
  }</span>,
  form: {</span>
    display: 'flex'</span>,
    flexDirection: 'column'</span>,
    alignItems: 'center'</span>,
  }</span>,
  input: {</span>
    padding: '10px'</span>,
    borderRadius: '5px'</span>,
    border: 'none'</span>,
    marginTop: '20px'</span>,
    width: '300px'</span>,
    color: '#121212'</span>

  }</span>,
  button: {</span>
    padding: '10px 20px'</span>,
    marginTop: '20px'</span>,
    border: 'none'</span>,
    borderRadius: '5px'</span>,
    backgroundColor: '#0070f3'</span>,
    color: 'white'</span>,
    cursor: 'pointer'</span>,
  }</span>,
  qrCode: {</span>
    marginTop: '20px'</span>,
  }</span>,
}</span>;</span>
```

Now I'll give a detailed explanation of the frontend application's code structure, functionalities, and key components. 

<h4 id="heading-state-management">State management:</h4>
- `import { useState } from 'react'` imports the `useState` hook from React to manage state within the component.
<li>`const [url, setUrl] = useState('')`  and `const [qrCodeUrl, setQrCodeUrl] = useState('')`: This state variables, `url` and `qrCodeUrl`, are initialized using the `useState` hook. These variables hold the input URL and the generated QR code URL, respectively.

<h4 id="heading-form-submission">Form submission:</h4>
- When the form is submitted, the `handleSubmit` function is triggered.
<li>This function prevents the default form submission behavior by using `e.preventDefault()`.
<li>It sends a POST request to the server (`http://localhost:8000/generate-qr`) with the input URL using the <a href="https://axios-http.com/docs/intro">Axios</a> library.
<li>Upon successful response, the generated QR code URL is stored in the `qrCodeUrl` state variable.

<h4 id="heading-rendering">Rendering:</h4>
- The component renders a title, a form with an input field for entering the URL, and a button to generate the QR code.
<li>When the QR code URL is available (`qrCodeUrl` is not empty), an image element is rendered to display the generated QR code.

<h4 id="heading-styling">Styling:</h4>
- The component includes inline styles defined using JavaScript objects.
<li>Styles are applied to the container, title, form, input field, button, and QR code image.

---

## -how-to-start-the-application-locally">How to Start the Application Locally

Now, you can start the application locally.

To start the application, simply run `npm run dev` as shown below. If all goes well, you'll observe the message <a href="http://localhost:3000">`http://localhost:3000`</a> printed in your console.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-08-at-15.18.18.png" alt="Image" width="858" height="178" loading="lazy">
*Application ready to start*

Open your browser and paste the URL <a href="http://localhost:3000">`http://localhost:3000`</a>. The browser should render the application and look exactly as shown below.

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-09-at-11.32.04.png" alt="Image" width="896" height="660" loading="lazy">
*Application running in Browser*

Paste in the URL of a website – either your portfolio website or any website you wish to generate a QR code for. I pasted my portfolio website URL, <a href="https://wilfred-portfolio.vercel.app/">`https://wilfred-portfolio.vercel.app/`</a>, into the URL box. See the result below:

<img src="https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-20.32.40.png" alt="Image" width="965" height="552" loading="lazy">
*QR Code generated successfully*

---

## -conclusion">Conclusion

When it comes to picking the right tools, technology choices are important. Next.js is great for making the front end of a website, while Node.js works well for handling server-side tasks. Also Azure blob storage is great for storing unstructured data such as binary data like QR code. 

But remember, this journey is not just about writing code. It's also about learning about different technologies and picking the best ones for what you need to do.

As I finish up this tutorial, I'd like to keep asking for feedback to ensure that this tutorial stays helpful. Feel free to share your thoughts or comments with me.

Thanks for reading!

Happy coding! 🚀

### -contact-me">**Contact Me:**

- <a href="https://twitter.com/ayomidewilfred9">Twitter</a>
<li><a href="https://www.linkedin.com/in/ayomide-wilfred-95083a104/">LinkedIn</a>
<li><a href="https://github.com/Ayowilfred95">GitHub</a>

-->

---

<TagLinks />