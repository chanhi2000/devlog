---
lang: ko-KR
title: How to Build a Vue E-commerce App Using MSW
description: Article(s) > How to Build a Vue E-commerce App Using MSW
icon: fa-brands fa-vuejs
category: 
  - Node.js
  - Vue.js
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - node
  - nodejs
  - node-js
  - vue
  - vuejs
  - vue-js
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Build a Vue E-commerce App Using MSW
    - property: og:description
      content: How to Build a Vue E-commerce App Using MSW
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/build-a-vue-ecommerce-app-using-msw.html
prev: /programming/js-vue/articles/README.md
date: 2024-07-08
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w1000/2024/07/build-a-Vue-eCommerce-App-using-MSW.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Vue.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-vue/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Build a Vue E-commerce App Using MSW"
  desc="Building an e-commerce app can be a time-consuming task, but with the right tools, it becomes much more manageable. In this guide, we'll explore how to create a robust Vue.js e-commerce application using Mock Service Worker (MSW) to simulate backend interactions.  Whether you're a seasoned developer or just starting..."
  url="https://freecodecamp.org/news/build-a-vue-ecommerce-app-using-msw/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w1000/2024/07/mr-cup-fabien-barral-o6GEPQXnqMY-unsplash.jpg"/>

Building an e-commerce app can be a time-consuming task, but with the right tools, it becomes much more manageable. In this guide, we'll explore how to create a robust Vue.js e-commerce application using Mock Service Worker (MSW) to simulate backend interactions.

Whether you're a seasoned developer or just starting out, this step-by-step tutorial will help you understand the fundamentals of integrating MSW into your Vue project, enabling you to build and test your application more effectively without relying on a real backend.

Let's dive in and bring your e-commerce vision to life!

[[toc]]

In this article, we'll walk through the process of building an e-commerce app from scratch using [<FontIcon icon="fa-brands fa-vuejs"/>Vue.js](https://vuejs.org/) and the power of MSW for mocking API calls.

Before we start with the project, let’s take an overview of the e-commerce pages that we are going to build for the app. It'll have mainly two pages:

- Shop page.
- Product details page.

**Shop page**: This page will display all the products of the store.

![Mock-up created using Pika Style](https://freecodecamp.org/news/content/images/2024/07/eCommerce-Products-Page.png)

**Product details page**: This page displays all the details regarding the product.

![](https://freecodecamp.org/news/content/images/2024/07/eCommerce-product-details-page.png)

Before building an e-commerce app, let’s clarify some basics about the mock server.

---

## What is a Mock Server?

A mock server simply mimics a real server by providing predefined responses for an API request. A mock server is useful for testing and development as it can generate different test cases without risking the integrity of real data. You can configure a mock server to return specific responses, error messages and timeouts.

There are various tools/libraries out there that you can use to set up a mock server. In this article, we will use MSW (Mock Service Worker) to set up a mock server. You can learn more about MSW from its official [<FontIcon icon="fas fa-globe"/>documentation](https://mswjs.io/).

Now, let’s set up a mock server (using MSW) for our Vue e-commerce app.

---

## How to Set Up a Vue E-commerce App

For our e-commerce app, we'll need two API endpoints. Below is a brief description of API endpoints.

1. `/api/apps/ecommerce/products`: This will fetch the data of all products we have in store.
2. `/api/apps/ecommerce/product/:id`: This will fetch the product details of a specific product by its ID.

We'll use a free Vue admin dashboard that offers essential features such as:

- Beautifully crafted components
- Auto import capabilities
- Premade layout, and so on.

These features will make it easier and faster to develop the Vue e-commerce app.

---

## Getting Started With Vue E-commerce App

There are plenty of [<FontIcon icon="fa-brands fa-vuejs"/>Vue.js themes](https://vuejs.org/ecosystem/themes) available that you can consider for creating an e-commerce app.

Here, we'll use the Materio Vue.js admin free template*.* First, go to the [GitHub repo (<FontIcon icon="iconfont icon-github"/>`themeselection/materio-vuetify-vuejs-admin-template-free`)](https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free).

To clone it, simply open your terminal. Navigate to the directory where you would like to clone the project and run the following command:

```sh
git clone <https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free.git>
```

Open the project in your favorite IDE and run the command below in the terminal to install all the dependencies. 

We'll use the [<FontIcon icon="fa-brands fa-npm"/>`pnpm`](https://pnpm.io/) package manager as recommended by the dashboard we're using. However, you are free to use your preferred package manager like npm or yarn.

```sh
pnpm install
# npm install
# yarn
```

Next, install MSW in your project directory:

```sh
pnpm add -D msw@latest
# npm install msw@latest --save-dev
# yarn install -D msw@latest
```

Run the theme using the following command:

```sh
pnpm run dev
# npm run dev
# yarn run dev
```

Next, initialize MSW using the command below. Running this command will create a **mockServiceWorker.js** file in a public directory.

```sh
npx msw init public
```

To manage all API endpoints and fake data, create a new folder called **fake-server** inside the **plugins** directory. We’ll set up our mock server in this **fake-server** directory. Create an **index.ts** file and paste the below code to register `MSW`.

```tsx
// file: src/plugins/fake-server/index.ts

import { setupWorker } from 'msw/browser'

const worker = setupWorker()

export default function () {
  const workerUrl = `${import.meta.env.BASE_URL ?? '/'}mockServiceWorker.js`

  worker.start({
    serviceWorker: {
      url: workerUrl,
    },
    onUnhandledRequest: 'bypass',
  })
}
```

Congratulations, you have now successfully set up `MSW` in the project. Now, we can start building an e-commerce app.

---

## How to Build an E-commerce App Using Vue 3

In the **fake-server** directory, create a **handlers** directory for maintaining handlers. Inside the **handlers** directory, create an **ecommerce** directory for the e-commerce app’s handlers. Then, create a **db.ts** file inside **ecommerce** to store the fake data.

Your folder structure should look like this:

```
└── fake-server/
    └── handlers/
        └── ecommerce/
            └── db.ts
```

I have generated some fake data for displaying products. Let’s place this fake data in **db.ts**:

```tsx
// file: src/plugins/fake-server/handlers/ecommerce/db.ts

import product5 from '@images/eCommerce/1.png'
import product3 from '@images/eCommerce/11.png'
import product6 from '@images/eCommerce/18.png'
import product1 from '@images/eCommerce/27.png'
import product4 from '@images/eCommerce/5.png'
import product2 from '@images/eCommerce/7.png'

export const db = {
  products: [
    {
      id: 1,
      productName: 'Gaming Mouse',
      category: 'Electronics',
      price: '$999',
      image: product1,
      rating: 5,
      productDescription: 'A mouse specifically designed for gamers.',
    },
    {
      id: 2,
      productName: 'Google Home',
      category: 'Electronics',
      price: '$25.50',
      image: product2,
      rating: 4,
      productDescription: 'A Smart speaker with Google Assistant.',
    },
    {
      id: 3,
      productName: 'INZCOU Running Shoes',
      category: 'Shoes',
      price: '$36.98',
      image: product3,
      rating: 5,
      productDescription: 'Lightweight Tennis Shoes Non Slip Gym Workout Shoes',
    },
    {
      id: 4,
      productName: 'MacBook Pro 16',
      category: 'Electronics',
      price: '$2648.95',
      image: product4,
      rating: 5,
      productDescription: 'Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU',
    },
    {
      id: 5,
      productName: 'Apple Watch Series 7',
      category: 'Office',
      price: '$799',
      image: product5,
      rating: 5,
      productDescription: 'Starlight Aluminum Case with Starlight Sport Band.',
    },
    {
      id: 6,
      productName: 'Meta Quest 2',
      category: 'Office',
      price: '$299',
      image: product6,
      rating: 5,
      productDescription: 'Advanced All-In-One Virtual Reality Headset',
    },
  ],
}
```

As discussed in this app structure, we need to define two endpoints. Create an **index.ts** file in your e-commerce handler and define your endpoints in it:

```tsx
// file: src/plugins/fake-server/handlers/ecommerce/index.ts

import { HttpResponse, http } from 'msw'
import { db } from './db'

export const handlerEcommerce = [
  http.get('/api/ecommerce/products', () => {
    const products = db.products

    return HttpResponse.json(products, { status: 200 })
  }),

  http.get('/api/ecommerce/products/:id', ({ params }) => {
    const id = Number(params.id)

    const product = db.products.find(item => item.id === id)

    if (!product)
      return HttpResponse.error()

    return HttpResponse.json(product, { status: 200 })
  }),
]
```

Register the handler in the **index.ts** file in the **fake-server** direrctory. The updated **index.ts** file should look like this:

```tsx
// file: src/plugins/fake-server/index.ts

import { setupWorker } from 'msw/browser'

import { handlerEcommerce } from './handlers/ecommerce'

const worker = setupWorker(...handlerEcommerce)

export default function () {
  const workerUrl = `${import.meta.env.BASE_URL ?? '/'}mockServiceWorker.js`

  worker.start({
    serviceWorker: {
      url: workerUrl,
    },
    onUnhandledRequest: 'bypass',
  })
}
```

The setup of the mock server has been completed. Whenever you make an API call to your endpoint, MSW will intercept the HTTP request using the service worker and will provide a predefined response from the handlers.

Congratulations, you have successfully set up the mock server👍.🏻

---

## How to Build the User Interface

Let's move on to the UI part of the e-commerce app. Create an **apps** directory in the **pages** directory. Inside **apps**, create a new directory called **ecommerce**. We'll place the e-commerce app in this directory.

The folder structure should look like this:

```tsx
.
└── pages/
    └── apps/
        └── ecommerce
```

The first page is a product listing page. Create a new directory of **products** inside **ecommerce**. Create an **index.vue** file in the **products** directory and paste the following code snippet:

```tsx
// file: src/pages/apps/ecommerce/products/index.vue

<script setup lang="ts"><span class="token plain-text">
const router = useRouter()
const { data: products } = await useFetch('/api/ecommerce/products').json()
</script>

<template><span class="token plain-text">
  <div><span class="token plain-text">
    <div class="d-flex flex-wrap gap-6 justify-center"><span class="token plain-text">
      <template
        v-for="(product, index) in products"
        :key="index"
      ><span class="token plain-text">
        <VCard width="300"><span class="token plain-text">
          <VImg
            :src="product.image"
            cover
          /><span class="token plain-text">
          <VCardItem><span class="token plain-text">
            <VCardTitle>{{ product.productName }}</VCardTitle><span class="token plain-text">
            <VCardSubtitle><span class="token plain-text">Price: {{ product.price }}</VCardSubtitle><span class="token plain-text">
          </VCardItem><span class="token plain-text">
          <VCardText><span class="token plain-text">
            <p class="mb-0"><span class="token plain-text">
              {{ product.productDescription }}<span class="token plain-text">
            </p><span class="token plain-text">
            <VRating
              :model-value="product.rating"
              readonly
              density="compact"
              class="my-3"
            /><span class="token plain-text">
            <VBtn
              block
              @click="() => router.push({ path: `/apps/ecommerce/products/${product.id}` })"
            >
              Buy Now
            </VBtn><span class="token plain-text">
          </VCardText><span class="token plain-text">
        </VCard><span class="token plain-text">
      </template><span class="token plain-text">
    </div><span class="token plain-text">
  </div><span class="token plain-text">
</template>
```

In this product listing page, we made an API call to the `'/api/ecommerce/products'` endpoint. This endpoint returns the array of all products. We'll use this data to display products on the page.

The second page in this app is the product display page. On this page, we'll display all the details of the product. To do so, create a new file **[id].vue** inside the **products** directory. Below is the code for the product details page.

Note that I have used Lorem ipsum to keep it generic. You can replace it with your desired description. 

```tsx
// file: src/pages/apps/ecommerce/products/[id].vue

<script setup lang="ts"><span class="token plain-text">
const route = useRoute()
const router = useRouter()

const { data: product } = await useFetch(`/api/ecommerce/products/${route.params.id}`).json()
const quantity = ref(0)
</script>

<template><span class="token plain-text">
  <VCard class="pa-10"><span class="token plain-text">
    <VRow><span class="token plain-text">
      <VCol
        md="4"
        cols="12"
      ><span class="token plain-text">
        <div class="py-10 bg-background d-flex justify-center"><span class="token plain-text">
          <VImg
            :src="product.image"
            width="auto"
            max-height="40vh"
          /><span class="token plain-text">
        </div><span class="token plain-text">
      </VCol><span class="token plain-text">

      <VCol
        md="8"
        cols="12"
      ><span class="token plain-text">
        <div><span class="token plain-text">
          <div class="text-h3 mb-4"><span class="token plain-text">
            {{ product.productName }}<span class="token plain-text">
          </div><span class="token plain-text">

          <div class="text-h4 mb-4"><span class="token plain-text">
            {{ product.price }}<span class="token plain-text">
          </div><span class="token plain-text">

          <div><span class="token plain-text">
            <p><span class="token plain-text">
              {{ product.productDescription }}<span class="token plain-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eum quam dolore ratione aspernatur nobis. Assumenda dicta voluptatibus reiciendis repudiandae?
            </p><span class="token plain-text">
            <VRating
              :model-value="product.rating"
              readonly
              density="compact"
              class="mb-2 d-block"
            /><span class="token plain-text">

            <VList><span class="token plain-text">
              <VListItem><span class="token plain-text">
                <template #prepend>
                  <VIcon
                    icon="ri-circle-fill"
                    size="10"
                  /><span class="token plain-text">
                </template><span class="token plain-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, deserunt!
              </VListItem><span class="token plain-text">
              <VListItem><span class="token plain-text">
                <template #prepend>
                  <VIcon
                    icon="ri-circle-fill"
                    size="10"
                  /><span class="token plain-text">
                </template><span class="token plain-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, deserunt!
              </VListItem><span class="token plain-text">
              <VListItem><span class="token plain-text">
                <template #prepend>
                  <VIcon
                    icon="ri-circle-fill"
                    size="10"
                  /><span class="token plain-text">
                </template><span class="token plain-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, deserunt!
              </VListItem><span class="token plain-text">
              <VListItem><span class="token plain-text">
                <template #prepend>
                  <VIcon
                    icon="ri-circle-fill"
                    size="10"
                  /><span class="token plain-text">
                </template><span class="token plain-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, deserunt!
              </VListItem><span class="token plain-text">
            </VList><span class="token plain-text">

            <VBtn
              prepend-icon="ri-shopping-cart-line"
              class="text-center"
              size="large"
              @click="quantity += 1"
            >
              Add to Cart
            </VBtn><span class="token plain-text">
          </div><span class="token plain-text">
        </div><span class="token plain-text">
      </VCol><span class="token plain-text">
    </VRow><span class="token plain-text">
  </VCard><span class="token plain-text">
  <div class="text-center"><span class="token plain-text">
    <VBtn
      class="my-6 text-center"
      @click="() => router.push({ path: '/apps/ecommerce/products' })"
    >
      Continue Shopping
    </VBtn><span class="token plain-text">
  </div><span class="token plain-text">
</template>
```

On this page, we made an API request to our second API endpoint: `/api/ecommerce/products/:id`. This endpoint returns product details related to a given product ID. We will use this data on our page to display product details.

Let’s add routes for the e-commerce app. All the routes are located in the **src/plugins/router/routes.ts** file. In the file, add the e-commerce app’s routes.

```tsx
// file: src/plugins/router/routes.ts
{
  path: '/apps/ecommerce/products',
  component: () => import('@/pages/apps/ecommerce/products/index.vue'),
},
{
  name: 'apps-ecommerce-products-id',
  path: '/apps/ecommerce/products/:id',
  component: () => import('@/pages/apps/ecommerce/products/[id].vue'),
},
```

Now, let’s add an e-commerce app to our navigation menu. We'll list all our menu items and groups in `NavItems.vue` components. We'll use a `VerticalNavGroup` component for adding a nav group and a `VerticleNavLink` component for adding a nav item. For adding an e-commerce app in the navigation menu, add the code below in the `Apps & Pages` section.

```tsx
//file: src/layouts/components/NavItems.vue

<VerticalNavGroup
    :item="{
      title: 'e-commerce',
      icon: 'ri-shopping-cart-line',
    }"
  ><span class="token plain-text">
    <VerticalNavLink
      :item="{
        title: 'Shop',
        to: '/apps/ecommerce/products',
      }"
    /><span class="token plain-text">
    <VerticalNavLink
      :item="{
        title: 'Product',
        to: { name: 'apps-ecommerce-products-id', params: { id: 1 } },
      }"
    /><span class="token plain-text">
</VerticalNavGroup>
```

Congrats, you’ve built a Vue e-commerce app using Vue.js and MSW. You can visit the dev server to see the e-commerce app we just crafted.

---

## Conclusion

In this article, you built an e-commerce app using Vue.js and MSW to mock API calls. We created two main pages: the shop page to display products and the product details page to show product information.

The mock server setup helped us to create a realistic development environment without building an actual backend. At the end of this guide, you had a working e-commerce app prototype. This setup provides a strong foundation for further customization and development.

For the complete implementation of the e-commerce app built in this article, please refer to this GitHub repository: 

<SiteInfo
  name="themeselection/e-commerce-app"
  desc="e-commerce app with msw"
  url="https://github.com/themeselection/e-commerce-app"
  logo="https://avatars.githubusercontent.com/u/40233791?s=200&v=4"
  preview="https://opengraph.githubassets.com/846818b5fb5ccb936d65445360f9598bbcd8202952c9954f10b4d6c3709ddd9f/themeselection/e-commerce-app"/>

I hope you all find this article helpful. In case you want to develop a full-fledged e-commerce app, you can use the pre-built [<FontIcon icon="fas fa-globe"/>Vuejs admin template](https://themeselection.com/item/category/vuejs-admin-templates/) as it offers many components and features that can be helpful in creating a professional e-commerce app.

I have prepared this article with help of [Jayendrasinh Solanki (<FontIcon icon="fa-brands fa-x-twitter"/>`me_jd_solanki`)](https://x.com/me_jd_solanki). He is an expert in VueJS with over 7 years of experience. BTW, he is followed by Vue creator Evan You! Isn't it great?

### Some helpful guides for e-commerce product development:

- [How to Develop a Reusable eCommerce Platform (freecodecamp.org)](/explore/articles/freecodecamp.org/develop-a-reusable-ecommerce-platform.md).
- [How to Create an eCommerce Website Using WooCommerce (freecodecamp.org)](/explore/articles/freecodecamp.org/how-to-create-an-ecommere-website-using-woocomerce.md).

---

<TagLinks />