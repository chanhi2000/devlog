---
lang: ko-KR
title: What is Trunk Based Development? A Different Approach to the Software Development Lifecycle
description: Article(s) > What is Trunk Based Development? A Different Approach to the Software Development Lifecycle
icon: iconfont icon-git
category: 
  - Git
  - Project Management
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - git
  - project-management
  - pm
head:
  - - meta:
    - property: og:title
      content: Article(s) > What is Trunk Based Development? A Different Approach to the Software Development Lifecycle
    - property: og:description
      content: What is Trunk Based Development? A Different Approach to the Software Development Lifecycle
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/what-is-trunk-based-development.html
prev: /programming/git/articles/README.md
date: 2024-06-18
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w2000/2021/01/Trunk-based-development.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Git > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/git/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Project Management > Article(s)",
  "desc": "Article(s)",
  "link": "/academics/pm/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="What is Trunk Based Development? A Different Approach to the Software Development Lifecycle"
  desc="The Software Development Lifecycle (SDLC) is different at every company. The version control system used, peer review process, code review process, design review process, how you do CI, automated testing, and manual testing – all vary greatly depending on where you work. How a company plans, writes, builds, reviews, deploys..."
  url="https://freecodecamp.org/news/what-is-trunk-based-development/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w2000/2021/01/Trunk-based-development.png"/>

The **Software Development Lifecycle** (**SDLC**) is different at every company.

The version control system used, peer review process, code review process, design review process, how you do CI, automated testing, and manual testing – all vary greatly depending on where you work.

How a company plans, writes, builds, reviews, deploys, and releases software is optimized for their particular use-case, all with their own strengths and drawbacks in mind.

I started reading about how different big tech companies run their **Software Development Lifecycles** (**SDLC**) and heard the term **Trunk-Based Development** a few times. This is a practice Google follows and I was curious about how it's different than the way most other companies develop software.

---

## Two Different Ways to Do Branching

### Release Branching

There are two common approaches to enable multiple developers to work on one codebase.

The first we'll refer to as the **release branching** method. I've also seen it called **feature branching**. But both of these same approaches follow the same general pattern.

Usually via Git, developers all clone the codebase (so they all have identical copies on their machines). Then they make a new feature/release branch based on <FontIcon icon="fas fa-code-branch"/>`main`, and merge as the work is completed. The emphasis here is that they only merge once, at the end, when all the work is complete – and they merge the **whole branch** into <FontIcon icon="fas fa-code-branch"/>`main`.

Here's an overview for how developers use the **Release Branch** method:

![**Release Branching** development workflow visualised.](https://freecodecamp.org/news/content/images/2024/06/ex1.png)

The white dots represent commits, and the bottom solid black line is <FontIcon icon="fas fa-code-branch"/>`main`. This is a very simple example, as **release branches** often end up with far more commits than I've shown in the diagram (sometimes hundreds).

Developers branch off <FontIcon icon="fas fa-code-branch"/>`main`, make their changes, and then when it's complete/has passed code QA, it gets merged back into <FontIcon icon="fas fa-code-branch"/>`main`. That's **release branching**.

### Trunk Based Development (TBD)

**Trunk-Based Development (TBD)** is the second approach. Here, each developer splits the work they will do into small batches and merge into <FontIcon icon="fas fa-code-branch"/>`main` (which is often referred to as the **trunk**) multiple times.

In small teams, they normally don't create a branch and merge the branch into the trunk. They commit *directly* into the trunk without branches.

In a larger team (with checks and approvals necessary for MR's), they use *short-lived* branches. One **release branch** with 100 commits in TBD would be 10 merge requests with 10 commits each.

In TBD, their code changes generally don't stay around for more than a few hours. They constantly get merged and integrated with the code everyone else is writing.

Jez Humble is a Site Reliability Engineer at Google, and author of[<FontIcon icon="fa-brands fa-amazon"/>Continuous Delivery](https://amazon.com/dp/0321601912?tag=contindelive-20), who says "branching is not the problem, merging is the problem" – which is exactly what TBD tries to solve.

It aims to avoid painful merges that so often occur when it is time to merge long-lived branches that have diverged histories from the trunk, or even merge multiple branches together into one from different teams/developers before merging with the trunk.

---

## Does TBD Work at Scale?

In a [<FontIcon icon="fa-brands fa-youtube"/>Google talk](https://youtu.be/W71BTkUbdqE), Rachel Potvin, who's an Engineering Manager at Google, described one codebase that has (as of Jan 2015):

<VidStack src="youtube/W71BTkUbdqE" />

- 1 billion files
- 2 billion lines of code
- 86 terabytes of content
- 45,000 commits per workday
- 15 million lines changed in 250,000 files per week

They used TBD in this codebase and it served their use cases very well. As Google is made up of many talented (most importantly, **experienced**) engineers, they rarely break their builds.

Google also has a very thorough, strict code QA process (read about it [<FontIcon icon="fa-brands fa-free-code-camp"/>here](https://freecodecamp.org/news/what-google-taught-me-about-code-reviews/)) which, when using TBD, allows for fast, efficient software delivery. <!-- TODO: 작성 (/explore/articles/freecodecamp.org/what-google-taught-me-about-code-reviews.md) -->

TBD also works well for Agile methodologies where you have to ship software frequently to get feedback from your consumers/customers. You can continually integrate and get a good snapshot of your current state.

Let's briefly discuss some TBD strengths.

### Strengths of TBD

- Feedback (whether from code QA, or peer review) comes quickly, as you merge daily. This can stop you from doing the wrong thing for 3 weeks, and then getting feedback that your work isn't correct at the very end, causing you to miss deadlines.
- There's a mental benefit to TBD, where developers feel like the trunk is **our** code, rather than everyone having their own feature branches and thinking this branch is **my** code. This can foster a more collaborative culture, increasing communication.
- It results in early integration with all the other in-flight projects/tickets and helps you promote code re-use. It's much harder to "use code" that isn't merged into <FontIcon icon="fas fa-code-branch"/>`main` and you don't know when will be complete. It also stops merge hell when your 9 month old release branch needs to be merged back into the trunk.
- Large projects with lots of work involved are forced to be broken down into smaller deliverables. This is much better for estimating timelines and also for breaking up your code into modular pieces.
- When lots of developers work in isolation on release branches, it can be harder to spot junior developers struggling in their own branch. But if they're expected to be committing their work daily, you can monitor their daily output and assist them when necessary.
- TBD really cleanly ties in with continuous integration. With lots of small, incremental commits to an eventual finished project, you get an always tested, always ### integrated codebase with (minimal) horrible merges.

### Weaknesses of TBD

- One of the challenges of this approach is that you have an increased chance of breaking the trunk, and stopping lots of people from working. You have to make sure your commits run unit tests along with a good code review process so you don't lose time reverting commits all day.
- Your commit history into <FontIcon icon="fas fa-code-branch"/>`main` will likely be more verbose and it can be harder to see if something is wrong. If you are called at 3 AM and asked to fix a bug on your prod site with some dodgy commits that went on during business hours, would you prefer a day with 1 commit or 200 commits?
- If you don't have a fast build process, you will spend a long time waiting for things to build while your team constantly commits.
- Often times with TBD you are incrementally adding new code to do something new, but you also need the "old" paths you're replacing to still work. Because of this you need to rely on feature toggles (normally from a database) to turn things on and off. This can add an extra level of complexity with debugging.
- A final challenge can be that, when you have constant commits, you are constantly in a state of churn. You need to make sure your team regularly pulls from the trunk and doesn't end up tripping over one another while merging things.

---

## How to Release Software with Trunk-Based Development

Teams using TBD will typically have a different release process than a team using feature branches.

Generally, if you use release branches, you release <FontIcon icon="fas fa-code-branch"/>`main` whenever you have something that gets merged in (tickets, completed projects, and so on). Or some teams release <FontIcon icon="fas fa-code-branch"/>`main` on a schedule, like once every week.

Here's an overview of how TBD teams do their releases:

![Overview of TBD process](https://freecodecamp.org/news/content/images/size/w600/2024/06/ex2.png)

In TBD, branching is used for releases to allow everyone to keep committing into <FontIcon icon="fas fa-code-branch"/>`main`.

They provide a "snapshot" of your codebase at a stable state, ready for deployment and release.

The only reason the TBD diagram above may need extra details is when something goes wrong with the release of `prj-123`. Then we commit the result into the trunk and cherry pick the commits into our release branch to get it in a workable state as soon as possible.

Some places, if they are releasing regularly, don't even branch and can just release the trunk whenever it's required. It depends on your company oftentimes.

---

## Conclusion

There is a whole site based on the theory and practice of TBD. Feel free to read more [<FontIcon icon="fas fa-globe"/>here](https://trunkbaseddevelopment.com/).

I hope this has explained what **Trunk Based Development** is and why it's used. It certainly helps alleviate some of the issues around merging long-lived branches containing major rewrites.

I share my writing on [Twitter (<FontIcon icon="fa-brands fa-x-twitter"/>`kealanparr`)](https://x.com/kealanparr)if you enjoyed this article and want to see more.


---

<TagLinks />