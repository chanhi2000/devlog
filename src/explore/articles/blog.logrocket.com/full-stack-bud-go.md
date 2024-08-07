---
lang: ko-KR
title: Building a full-stack app with Bud and Go
description: Article(s) > Building a full-stack app with Bud and Go
icon: fa-brands fa-golang
category: 
  - Go
  - Node.js
  - Svelte.js
  - Article(s)
tag: 
  - blog
  - blog.logrocket.com
  - go
  - golang
  - node
  - nodejs
  - node-js
  - svelte
  - sveltejs
  - svelte-js
head:
  - - meta:
    - property: og:title
      content: Article(s) > Building a full-stack app with Bud and Go
    - property: og:description
      content: Building a full-stack app with Bud and Go
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/blog.logrocket.com/full-stack-bud-go.html
prev: /programming/go/articles/README.md
date: 2022-08-31
isOriginal: false
cover: /images/content/blog.logrocket.com/full-stack-bud-go/banner.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Go > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/go/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Svelte.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-svelte/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Building a full-stack app with Bud and Go"
  desc="Build a full-stack app using Bud, the new Go framework, with its built-in functionality for frontend development using Svelte."
  url="https://blog.logrocket.com/full-stack-bud-go"
  logo="/images/content/blog.logrocket.com/favicon.png"
  preview="/images/content/blog.logrocket.com/full-stack-bud-go/banner.png"/>

Full-stack frameworks come in many shapes and sizes, but they often come in two general molds. The first mold includes frameworks like [<FontIcon icon="iconfont icon-ruby"/>Ruby on Rails](https://rubyonrails.org/) and [<FontIcon icon="fa-brands fa-laravel"/>Laravel](https://laravel.com/), which are backend-centric with features to help you build your frontend within the same project, and easy-to-use conventions and templating. Then there is the second mold, which includes [<FontIcon icon="iconfont icon-nextjs"/>Next.js](https://nextjs.org/), [<FontIcon icon="fas fa-globe"/>Nuxt.js](https://nuxtjs.org/), and [<FontIcon icon="iconfont icon-svelte"/>SvelteKit](https://kit.svelte.dev/), which are more frontend-centric but allow you to create serverless functions as your backend within the same project.

![Building A Full-Stack App With Bud And Go](https://blog.logrocket.com/wp-content/uploads/2022/08/full-stack-bud-go-1.png)

New Go framework [<FontIcon icon="fas fa-globe"/>Bud](https://denim-cub-301.notion.site/Hey-Bud-4d81622cc49942f9917c5033e5205c69) differs from these full-stack frameworks by having a framework that starts quite minimalistic but allows frontend and backend code to expand based on the needs of its users instead of sprawling out a complicated CLI with potentially unnecessary files and configurations. Bud is a framework that keeps things simple but can scale up when needed.

Bud comes with built-in functionality for frontend development with Svelte and uses Go for the backend, using the faster toolsets for their respective parts of the web stack. Let’s take Bud for a test spin and create a page that calls to some backend endpoints.

To jump ahead in this article:

[[toc]]

---

## Setting up the Bud framework

Prerequisites:

- Curl installed in your terminal environment
- Go v1.6+
- Node.js

To install Bud, run the following command:
`curl -sf https://raw.githubusercontent.com/livebud/bud/main/install.sh | sh`

Confirm that all has gone well using command `bud -h`. Then, create a new app with `bud create first-app`.

This will give you a module name. The standard for module names in Go is the name of the repository you’re pushing it to, such as `github.com/username/repo-name`. Let’s change directories into our new app folder, `cd first-app`.

Run `npm install` to install all dependencies.

To run the development server, run the command `bud run`, and a server should allow your web app to be visible at `localhost:3000`.

---

## Bud folder structure

When you examine your project, you’ll see the following structure:

```
/first-app
├─ /bud 
├─ /node_modules 
├─ .gitignore
├─ go.mod
├─ go.sum
├─ package.json
└─ package.lock.json
```

Whenever you run `bud run`, the framework will look at your code and generate the necessary Go app in this folder, and you won’t need to touch the files in this folder. When you’re ready to deploy the application, run `bud build`, which will bundle everything into a single binary in the `/bud/app` folder.

The following directories can be added and will be recognized by the framework:

- `controller`: this folder will contain controller files that represent the backend routes of your app. Each file can provide standard CRUD routes for an endpoint by the name of the file
- `view`: this folder can contain Svelte files and will auto-generate routes for them based on the file name
- `public`: hosts static assets like images and CSS files
- `internal`: this directory will be ignored, so it is a good place to host application-specific code that shouldn’t be treated as a backend or frontend route

---

## Creating the root page in Bud

Although our pages are defined using Svelte, we should always have a corresponding controller for the page. Let’s first create a `controller` folder and, in that folder, create a file called `controller.go`. This will handle the endpoint `/`.

For all other controllers, you will create a folder with a similarly named Go file inside of it.

For example, the endpoint `/posts` would be `/controller/posts/posts.go`, and so forth.

In each of these files, we should declare a `Controller` struct, then define methods that have this struct as a receiver. Here is what the `controller.go` for our root route would look like:

```go
package Controller
// Controller Struct to house all Action methods
type Controller struct {}
// Index shows a list of users
// Will automatically render view/index.svelte
// GET /users
func (c *Controller) Index() {}
```

The name of the methods trigger is what you’d expect from RESTful conventions without us having to type out all the code. Here, the `index` method would return a view from a file called `index.svelte` in our `view` folder.

Views are essentially done through file-based routing, which will be familiar if you’ve ever used Next, Nuxt, or SvelteKit. Because Bud uses Svelte, `index.svelte` should represent your main page. So, create a `view` folder in your project and, inside it, create `index.svelte` with the following code.

```xml
<div>
    <h1>Here is the Main page of your app</h1>
    <section>
        <button on:click={handleClick}>Click This</button>
    </section>
</div>
<script>
    const handleClick = (event) => {
        alert("You Clicked the button")
    }
</script>
<style>
    h1, section {
        text-align: center;
    }
    button {
        border: none;
        padding: 10px;
        font-size: 1em;
        background-color: brown;
        color: white;
        border-radius: 40px;
    }
</style>
```

Now, if we run our Bud server and head over to `localhost:3000`, we will see our page in action. Right now, Bud can handle the following actions in any controller:

| Action method | HTTP method | URL | Template rendered |
| :--- | :--- | :--- | :--- |
| `index` | GET | /endpoint | `/view/endpoint/index.svelte` |
| `show` | GET | /endpoint/:id | `/view/endpoint/show.svelte` |
| `new` | GET | /endpoint/new | `/view/endpoint/new.svelte` |
| `create` | POST | /endpoint | no template |
| `edit` | GET | /endpoint/:id/edit | `/view/endpoint/edit.svelte` |
| `update` | PUT | /endpoint/:id | no template |
| `delete` | DELETE | /endpoint/:id | no template |

---

## Delivering data to your view

The return value of a method that renders a view will be passed as a prop to the Svelte template:

- If the action returns a single struct, such as a `Dog` struct, it is delivered as a prop called `dog`
- If the action returns an array of `Dog` structs, the prop is called `dogs`
- If the action returns named return values, then each return value is a prop of the matching name

Let’s send some props to our root view and update `controller/controller.go`:

```go
package controller
// Controller Struct to house all Action methods
type Controller struct {}
// Define a Struct of data to send to template
type Alex struct {
    Name string
    Age int
}
// Index shows a list of users
// Will automatically render view/index.svelte
// Define our struct as the return value and return it
// GET /users
func (c *Controller) Index() Alex {
    return Alex{"Alex Merced", 37}
}
```

Now, let’s update our view to bring in the prop and use it when we click the button. Update `view/index.svelte` accordingly:

```html
<div>
    <h1>Here is the Main page of your app</h1>
    <section>
        <button on:click={handleClick}>Click This</button>
    </section>
</div>
<script>
    export let alex;
    const handleClick = (event) => {
        alert(`My name is ${alex.Name} and age is ${alex.Age}`)
    }
</script>
<style>
    h1, section {
        text-align: center;
    }
    button {
        border: none;
        padding: 10px;
        font-size: 1em;
        background-color: brown;
        color: white;
        border-radius: 40px;
    }
</style>
```

Click on the button. Notice the data returned by our Go method is being used in our Svelte template. Neat!

---

## How Bud compares to other frameworks

There are still many features Bud doesn’t have yet, but given that it’s early in its life, it is quite impressive. Let’s compare Bud to other frameworks and features we hope to see with Bud in the future.

### Bud vs. Ruby on Rails and Laravel

These frameworks can easily add features like web sockets, channels, and more. Bud has reserved some future directory names that allude to eventually including these features.

### Bud vs. Next.js, Nuxt.js, and SvelteKit

While allowing some level of server-side rendering, Next, Nuxt, and SvelteKit still heavily rely on the client-side nature of React, Vue, and Svelte, respectively. This enables the possibility of using state management solutions like Redux inside of them. Meanwhile, Bud uses the more traditional approach of letting the backend manage state and doesn’t yet have a clear path to similar state management patterns. In its reliance on RESTful conventions and web standards, it is probably more similar to Remix.js.

---

## Conclusion

Bud embraces many of the conventions, such as file-based routing and RESTful controller methods, that we see in frameworks like Next and Ruby on Rails, and bundles them into one framework. While Bud is still working on building more functionality and features to be a robust framework with a solution for all scenarios like Laravel, Bud provides a simple convention-based workflow, making working with and getting the benefits of Go and Svelte a breeze.

---

<TagLinks />