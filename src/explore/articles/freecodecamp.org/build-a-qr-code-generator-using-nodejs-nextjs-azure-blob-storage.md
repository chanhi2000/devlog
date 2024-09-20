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

---

<SiteInfo
  name="How to Build a QR Code Generator for URLs with Node.js, Next.js, and Azure Blob Storage"
  desc="A while ago, a client asked me to help them create a special app for generating QR codes so users could receive payments.  What set this app apart was that instead of users entering a URL to generate a QR code, they would initiate a request through the app..."
  url="https://freecodecamp.org/news/build-a-qr-code-generator-using-nodejs-nextjs-azure-blob-storage/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w1000/2024/05/qr-code-image-real.jpeg"/>

A while ago, a client asked me to help them create a special app for generating QR codes so users could receive payments.

What set this app apart was that instead of users entering a URL to generate a QR code, they would initiate a request through the app. Then a unique QR code would be generated which would be associated with their account details. The QR code would then be displayed on their screen while the payer scans the QR code using their mobile device's camera.

In this tutorial, you'll learn how to develop a custom QR code generator for URLs using Node.js and Next.js. I'll walk you through the process step by step, including setting up Azure Blob Storage to store the generated URLs. These URLs will then be displayed in the form of QR codes in your Next.js frontend application.

We'll build the backend of the application using `Node.js` and the `Express` framework, and the frontend (which interacts with the backend) with `Next.js`.

I'll also provide explanations on QR codes, the concept of `buffers` for handling binary data in Node.js, and how it is being used to stream the QR code image data to Azure Blob Storage.

So, let dive in.

## Prerequisites

Before you begin you'll need an active [<FontIcon icon="iconfont icon-microsoftazure"/>Azure](https://azure.microsoft.com/en-us/get-started/azure-portal) account and subscription to create an Azure blob storage.

[[toc]]

---

## What is a QR Code?

According to [<FontIcon icon="fas fa-globe"/>Investopedia](https://investopedia.com/terms/q/quick-response-qr-code.asp), a Quick Response (QR) code functions as a specialized barcode, scannable by digital devices, that stores data within a grid of square pixels. 

QR codes are extensively employed in digital payments, cryptocurrency, and transmitting web addresses to mobile devices. They can encode URLs, facilitating webpage access.

Now, let's delve into the process of programmatically generating QR codes. Today, I'll demonstrate this step-by-step. To begin, you'll set up an `Azure Blob Storage` instance in your `Azure Portal`.

---

## How to Set Up Azure Blob Storage

[<FontIcon icon="fa-brands fa-microsoft"/>Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview) is a cloud-based storage service provided by Microsoft Azure. It is part of the Azure Storage suite, which also includes services such as Azure Files, Azure Queues, and Azure Tables.

Azure Blob Storage is designed to store large amounts of unstructured data, such as text or binary data, in the form of objects called blobs. If you are familiar with AWS, Azure Blob Storage is similar to an S3 bucket. Storage accounts are primarily accessed via REST API.

### Step 1: Create a storage account

You can create your storage account by simply searching for Storage account in the search bar at the top of the Azure Portal.

![Create Storage Accounts in Azure Portal](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-16.08.23.png)

You can then run through the steps to create your storage account. Just note that this name needs to be unique and it also needs to be all lower case – no spaces but it can include numbers.

![Create a New Resource Group](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-16.16.46.jpeg)

### Step 2: Create a container

After creating your storage account, you can now create a `container`.

![Create a New Container](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-16.44.16.jpeg)

When accessing blob storage with the `QR codes` stored in Azure Storage, the URL typically follows a structure like `https://<storage_account_name>.blob.core.windows.net/<container_name>/<blob_name>`.

Having a container allows us to structure the URLs in a meaningful and organized way, making it easier to manage and share the generated QR codes.

### Step 3: Obtain Azure Storage connection string

In the `Security + networking` section, select "Access keys."

Make sure to copy the connection string and save it somewhere as it's required to establish a secure connection between the Azure Storage account and the `Node.js` application.

![Obtain Access Key for the Container](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-16.54.39.jpeg)

That concludes the discussion on Microsoft Azure Storage. I must say, I thoroughly enjoyed exploring and solving these challenges.

Next, you will be diving into coding, specifically around `Nodejs` and and then moving on to frontend development, where you'll be using `Next.js`.

---

## Node.js QR Code

First, you need to install `Node.js` and `npm` on your computer. Go to the [<FontIcon icon="fa-brands fa-node"/>Node.js](https://nodejs.org/) website and download the version for your computer if you don't have it already.

Once you've installed them, check if Node.js and npm are installed correctly by typing these commands in your terminal:

```sh
node -v
npm -v
```

Next, go to this GitHub [link (<FontIcon icon="iconfont icon-github"/>`ayowilfred95/azure-qr-code-generator`)](https://github.com/ayowilfred95/azure-qr-code-generator) to fork the project and then clone it to your preferred directory on your computer.

![Github Repository Project](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-17.26.39--2-.jpeg)

Once you've cloned the project repository, open the project with your code editor. I'm using [<FontIcon icon="iconfont icon-vscode"/>VS Code](https://code.visualstudio.com/download). You'll notice that the project has of two folders: `server` and `frontend`. You'll start by navigating to the `server` folder by typing `cd server` in your terminal and then press `Enter`.

![Change the current directory to a directory named "server."](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-17.48.03.jpeg)

Now you can install all the necessary dependencies by running `npm install`. This command will download and install all the required packages for the server-side application.

![installation of dependencies](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-17.55.01.jpeg)

If everything went well, you should see something like this below after `npm install`:

![Successful Installation](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-17.51.59.png)

Next, you need to create a `.env` file in the `server` directory to store your environment variables. It's not advisable to hardcode sensitive credentials. You can do this easily by running `touch .env` in your terminal.

![Create a new file named `.env`](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-17.59.38.jpeg)

In the newly created `.env` file, you'll define three variables that your application depends on: `CONTAINER_NAME` , `AZURE_STORAGE_CONNECTION_STRING`, and  `PORT` .

Assign 'qrcode' as the value for `CONTAINER_NAME`. This was the name of the container you created inside the Azure Storage account. Also, set the `PORT` to `8000`, which is the port your backend application will be listening on.

Now, for the `AZURE_STORAGE_CONNECTION_STRING`, you'll need to obtain the secret key from the access key you obtained earlier. Copy the connection string and paste it as the value for `AZURE_STORAGE_CONNECTION_STRING` in the `.env` file.

![Store Secret Variables](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-18.18.00.png)

Once you've added these environment variables to the `.env` file, save it and you're all set to run the server-side of the application!

Before you run the application, let me quickly explain the code. Click on the <FontIcon icon="fa-brands fa-js"/>`index.js` file.

![View Index.js file](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-18.18.28.png)

### Code overview

Below is the code snippet containing the necessary logic for generating QR codes and establishing a connection with the Azure storage account you previously created.

```js
const express = require('express');
const { BlobServiceClient, generateBlobSASQueryParameters, BlobSASPermissions } = require('@azure/storage-blob');
const qrcode = require('qrcode');
const { v4: uuidv4 } = require('uuid');
const { Readable } = require('stream');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Allowing CORS for local testing
const origins = [
    "http://localhost:3000"
];

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', origins.join(','));
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


const containerName = process.env.CONTAINER_NAME;

const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);

app.use(express.json());

app.post('/generate-qr', async (req, res) => {
    const { url } = req.body;

    // Generate QR Code
    console.log('Received URL:', url);
    const qrCode = await qrcode.toBuffer(url);

    const bufferStream = new Readable();
    bufferStream.push(qrCode);
    bufferStream.push(null);

    // Generate unique file name for Azure Blob Storage
    const fileName = `qr_codes/${uuidv4()}.png`;

    try {
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(fileName);

        await blockBlobClient.uploadStream(bufferStream, 4 * 1024 * 1024, 20, {
            blobHTTPHeaders: {
                blobContentType: 'image/png'
            }
        });

        // Generate SAS token for blob
        const sasToken = generateSasToken(blockBlobClient);

        // Generate the Blob URL with SAS token
        const blobUrlWithSasToken = `${blockBlobClient.url}?${sasToken}`;

        // Send response with the Blob URL containing SAS token
        res.json({ qr_code_url: blobUrlWithSasToken });
    } catch (error) {
        console.error('Error generating QR Code:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Function to generate SAS token for blob
function generateSasToken(blobClient) {
    const blobSAS = generateBlobSASQueryParameters({
        containerName: blobClient.containerName,
        blobName: blobClient.blobName,
        permissions: BlobSASPermissions.parse("r"), // Read permission
        startsOn: new Date(),
        expiresOn: new Date(new Date().valueOf() + 86400) // Token expires in 24 hours
    }, blobClient.credential);

    return blobSAS.toString();
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```

Now I'll give a detailed explanation of the code structure, functionalities, and key components of the application.

::: tabs

@tab:active Importing required modules

- `const express = require('express')`: This line imports the Express.js framework, which is a Node.js web application framework for building web applications and APIs. It allows you to define routes, handle HTTP requests, and more.
- `const { BlobServiceClient, generateBlobSASQueryParameters, BlobSASPermissions } = require('@azure/storage-blob')`: This line imports specific modules from the `@azure/storage-blob` package, which is the Azure Blob Storage SDK for JavaScript. It allows you to interact with Azure Blob Storage from our Node.js application.
- `const qrcode = require('qrcode')`: This line imports the `qrcode` module, which is a popular Node.js library for generating QR codes.
- `const{ v4: uuidv4 } = require('uuid')`: This line imports the `uuid` module and specifically extracts the `v4` function as `uuidv4`. The `uuid` module is used to generate universally unique identifiers (UUIDs) in Node.js.
- `const{ Readable } = require('stream')`: This line imports the `Readable` class from the built-in Node.js `stream` module. The `Readable` class is used to create readable streams, which are useful for handling data that can be read sequentially.

@tab Configuring environment variables

- `dotenv.config();`: This line loads environment variables from a `.env` file into `process.env`. The `.env` file typically contains `CONTAINER_NAME` and `AZURE_STORAGE_CONNECTION_STRING` you specify in your `.env` file.

@tab Initializing the Express application

- `const app = express();`: This line initializes an Express application instance, which you'll use to define routes, middleware, and other configurations for your web application.

@tab Defining port configuration

- `const port = process.env.PORT || 5000`: This line sets the port number for the Express application. It retrieves the port number from the `process.env.PORT` environment variable, if it exists. If not, it defaults to port `5000`. This allows flexibility for deploying the application in different environments where the port may be specified externally.

@tab Allowing CORS for local testing

- CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict resources from being requested from another domain or application.
- In this section, CORS is being configured to allow requests from a specific origin (`http://localhost:3000`), which is typically used during local development.
- The `app.use()` function is used to add middleware to the Express application. Here, a middleware function is defined that sets the necessary CORS headers on every HTTP response.
- `res.header('Access-Control-Allow-Origin', origins.join(','))`: Sets the value of the `Access-Control-Allow-Origin` header to allow requests from the specified origins (in this case, `http://localhost:3000`).
- `res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')`: Sets the allowed headers for the CORS request.
- `next()`: Calls the next middleware function in the stack.

@tab Azure Blob Storage configuration

- `containerName` and `blobServiceClient` are initialized using environment variables (`process.env.CONTAINER_NAME` and `process.env.AZURE_STORAGE_CONNECTION_STRING`) configured earlier.
- `blobServiceClient` is initialized using the `fromConnectionString()` method from the `BlobServiceClient` class provided by the `@azure/storage-blob` package. This allows the application to interact with Azure Blob Storage using the provided connection string.

@tab Express application configuration

- `app.use(express.json())`: Adds middleware to parse JSON bodies of incoming requests. This enables the application to handle JSON data in requests.

@tab Endpoint for generating QR codes

- Defines a POST endpoint at `/generate-qr` to handle requests for generating QR codes.
- Upon receiving a request, the endpoint extracts the URL from the request body and generates a QR code image using the `qrcode.toBuffer()` function.
- The generated QR code image is then uploaded to Azure Blob Storage as a blob with a unique file name.
- After successfully uploading the image, a Shared Access Signature (SAS) token is generated for the blob, which provides temporary access to the blob with specified permissions (in this case, read-only).
- Finally, the endpoint responds with a JSON object containing the URL of the generated QR code image along with the SAS token.

@tab Function to generate SAS token for blob

- Defines a function `generateSasToken()` to generate a SAS token for a given blob client (block blob client in this case). The SAS token is generated with read permissions and an expiration time set to 24 hours.

@tab Listening on port

- The Express application listens on the configured port (`port`) for incoming HTTP requests. When the server starts, it prints a message indicating the port it is listening on.

:::

Now, you can start the application locally.

To start the application, simply run `npm start` as shown below. If all goes well, you'll observe the message `Server is running on port 8000` printed on your console.

![Start the Application locally](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-18.36.50.png)

---

## How to Connect the Frontend Application

Now it is time to connect the frontend application with the backend application that is listening on Port 8000.

A typical full-stack application usually consists of at least two main components: a frontend (client-side) and a backend (server-side).

**Frontend Component**: This is the part of the application that users interact with directly. It's typically built using technologies like HTML, CSS, and JavaScript frameworks like React, Angular, or Next.js.

**Backend Component**: This is the part of the application that handles data storage, retrieval, and server side connectivity. It's usually built using server-side programming languages like Node.js (with frameworks like Express.js or Nest.js), Python (with frameworks like Django or Flask), Java (with frameworks like Spring), or Ruby (with frameworks like Ruby on Rails).

The backend communicates with the frontend, processes requests from users, interacts with databases, and generates responses.

To navigate to the frontend folder, open a new terminal by clicking the `+` , then use `cd frontend` to enter the frontend folder.

![Navigate to Frontend Directory](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-18.57.14.jpeg)

Now, you can install all the necessary dependencies by running `npm install`. This command will download and install all the required packages for the Nextjs client-side application.

If everything went well, you should see something like this after `npm install`. 

![Successful Installation of Dependencies](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-17.51.59-1.png)

Before you run the application, let me quickly explain the code.Navigate to the frontend folder, then inside the `src/app` directory, click on the page.js file.

![View page.js file](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-18.50.17.jpeg)

### Next.js Code Walkthrough

This code represents a React component serving as the frontend for the QR code generator backend application you've recently built. This component allows users to input a URL, submit it, and receive the corresponding QR code image for display.

```jsx
'use client'

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [url, setUrl] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/generate-qr', { url });
      setQrCodeUrl(response.data.qr_code_url);
    } catch (error) {
      console.error('Error generating QR Code:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>QR Code Generator</h<span class="token file-descriptor important">1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL like https://google.com"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Generate QR Code</button>
      </form>
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" style={styles.qrCode} width="200" height="200" />}
    </div>
  );
}

// Styles
const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    color: 'white',
  },
  title: {
    margin: '0',
    lineHeight: '1.15',
    fontSize: '4rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    marginTop: '20px',
    width: '300px',
    color: '#121212'

  },
  button: {
    padding: '10px 20px',
    marginTop: '20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#0070f3',
    color: 'white',
    cursor: 'pointer',
  },
  qrCode: {
    marginTop: '20px',
  },
};
```

Now I'll give a detailed explanation of the frontend application's code structure, functionalities, and key components.

::: tabs

@tab:active State management

- `import { useState } from 'react'` imports the `useState` hook from React to manage state within the component.
- `const [url, setUrl] = useState('')`  and `const [qrCodeUrl, setQrCodeUrl] = useState('')`: This state variables, `url` and `qrCodeUrl`, are initialized using the `useState` hook. These variables hold the input URL and the generated QR code URL, respectively.

@tab Form submission

- When the form is submitted, the `handleSubmit` function is triggered.
- This function prevents the default form submission behavior by using `e.preventDefault()`.
- It sends a POST request to the server (`http://localhost:8000/generate-qr`) with the input URL using the [<FontIcon icon="fas fa-globe"/>Axios](https://axios-http.com/docs/intro) library.
- Upon successful response, the generated QR code URL is stored in the `qrCodeUrl` state variable.

@tab Rendering

- The component renders a title, a form with an input field for entering the URL, and a button to generate the QR code.
- When the QR code URL is available (`qrCodeUrl` is not empty), an image element is rendered to display the generated QR code.

@tab Styling

- The component includes inline styles defined using JavaScript objects.
- Styles are applied to the container, title, form, input field, button, and QR code image.

:::

---

## -how-to-start-the-application-locally">How to Start the Application Locally

Now, you can start the application locally.

To start the application, simply run `npm run dev` as shown below. If all goes well, you'll observe the message [<FontIcon icon="fas fa-globe"/>`http://localhost:3000`](http://localhost:3000) printed in your console.

![Application ready to start](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-08-at-15.18.18.png)

Open your browser and paste the URL [<FontIcon icon="fas fa-globe"/>`http://localhost:3000`](http://localhost:3000). The browser should render the application and look exactly as shown below.

![Application running in Browser](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-09-at-11.32.04.png)

Paste in the URL of a website – either your portfolio website or any website you wish to generate a QR code for. I pasted my portfolio website URL, [<FontIcon icon="fas fa-globe"/>`https://wilfred-portfolio.vercel.app/`](https://wilfred-portfolio.vercel.app), into the URL box. See the result below:

![QR Code generated successfully](https://freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-07-at-20.32.40.png)

---

## Conclusion

When it comes to picking the right tools, technology choices are important. Next.js is great for making the front end of a website, while Node.js works well for handling server-side tasks. Also Azure blob storage is great for storing unstructured data such as binary data like QR code.

But remember, this journey is not just about writing code. It's also about learning about different technologies and picking the best ones for what you need to do.

As I finish up this tutorial, I'd like to keep asking for feedback to ensure that this tutorial stays helpful. Feel free to share your thoughts or comments with me.

Thanks for reading!

Happy coding! 🚀

---

<TagLinks />