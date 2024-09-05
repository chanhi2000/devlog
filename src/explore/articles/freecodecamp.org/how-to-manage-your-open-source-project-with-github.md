---
lang: ko-KR
title: "How to Manage your Open Source Project with GitHub"
description: "Article(s) > How to Manage your Open Source Project with GitHub"
icon: fa-brands fa-aws
category: 
  - DevOps
  - Github
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - devops
  - git
  - github
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to Manage your Open Source Project with GitHub"
    - property: og:description
      content: "How to Manage your Open Source Project with GitHub"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-manage-your-open-source-project-with-github.html
prev: /devops/github/articles/README.md
date: 2024-09-05
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725180872053/0ea74f81-dc72-4f09-976f-4199c2e3893b.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Github > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/github/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Manage your Open Source Project with GitHub"
  desc="Managing your repository is one of the most important tasks for every open-source, individual, or proprietary software project. Small open-source project repositories are easily maintained without using additional functionality because few developers..."
  url="https://freecodecamp.org/news/how-to-manage-your-open-source-project-with-github/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725180872053/0ea74f81-dc72-4f09-976f-4199c2e3893b.png"/>

Managing your repository is one of the most important tasks for every open-source, individual, or proprietary software project.

Small open-source project repositories are easily maintained without using additional functionality because few developers work on them.

However, when working with medium or large open-source projects, the main problem lies in how to manage them.

With many developers contributing at the same time and the developer community rapidly expanding day by day, this becomes a significant challenge.

GitHub, GitLab, Gitea, and so on, have similar functionalities that help you and your team to manage your project more efficiently. Without relying on other software and tools, you can handle your project with your repository.

In this tutorial, we'll discuss three basic GitHub features that can help you to manage your repository more efficiently without using any additional tools or services:

1. Labels
2. Projects
3. Milestones

GitHub, Gitlab, or Gitea all have similar functionalities with the same name.

---

## How to Use Labels on GitHu

![Label example in GitHub](https://cdn.hashnode.com/res/hashnode/image/upload/v1725176936595/be0c22c3-d182-40a9-917a-2b0b3f2ba87b.png)

The [<FontIcon icon="iconfont icon-github"/>label](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels) helps categorize issues, pull requests, and discussions. By default, GitHub comes with some built-in labels.

![Default Github label list](https://cdn.hashnode.com/res/hashnode/image/upload/v1725177106112/5ceb58b0-985b-4582-bb67-e4313dd833b4.png)

You can also create a custom label. You can use the label on any issue, pull request, or discussion within your repository.

You can find the list of [<FontIcon icon="iconfont icon-github"/>default labels in the GitHub documentation](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#about-default-labels).

### How to Create a Label in Your Repository

Creating a custom label in the repository is very simple. There are different ways to make a label. You need to follow these common steps:

Go to your repository > then go to issues > then click on the labels button.

![Go to Label Page](https://cdn.hashnode.com/res/hashnode/image/upload/v1725177276807/85a102cf-0817-4d96-a353-6675272f6d0b.png)

Next, click on the new label button and enter your label name, description and color.

![Create the label in Github](https://cdn.hashnode.com/res/hashnode/image/upload/v1725177420526/1a6b3752-ce12-4d01-a241-4fe469ec9f44.png)

### How to Delete and Edit Labels on GitHub

To edit and delete a label, go to the issue page and click on the **Label** button. In the label page, you should see all the existing labels.

Click on the **Edit** button to edit a label, and click on the **Delete** button to delete a label.

![Edit and delete the Labe](https://cdn.hashnode.com/res/hashnode/image/upload/v1725177545826/62926118-df86-4e82-ab05-539ca14c136b.png)

> You cannot delete multiple labels with GitHub.

---

## How to Use GitHub Projects

![Project pag](https://www.freecodecamp.org/news/content/images/2024/08/project.png)

The [<FontIcon icon="iconfont icon-github"/>Github Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects) tool is a versatile and flexible tool for planning and managing your repository work in one central location.

It functions similarly to a spreadsheet, task board, and road map, allowing you to plan and track your repository work in one place. The GitHub project is fully integrated with GitHub.

You can create and customize multiple views, filter, sort, and group your issues and pull requests, visualize work with charts, and add custom fields to track specific metadata.

You can assign users to specific issues, check issue statuses, and assign reviewers, among other functions.

GitHub projects come in two types: public and private.

- **Public** projects are visible to everyone, and the management team can make edits and changes to the project.
- **Private** projects, on the other hand, are not visible to others, and only the management team can edit and make changes to the project.

By default, projects are private in GitHub.

### How to Create Projects on GitHub

Creating a project is a straightforward task. In some cases, the projects tab may not be visible on your repository. First, go to your repository section and enable the project.

![Enable the Project Tab in the Github](https://cdn.hashnode.com/res/hashnode/image/upload/v1725178051832/fac9c92e-8527-4c28-94ea-daf102a6ba93.png)

After enabling projects on your repository, you should now be able to see a projects tab in your repository. Now click on the projects tab.

![Click on the Project Ta](https://cdn.hashnode.com/res/hashnode/image/upload/v1725178167552/383a3f8d-d4e6-4994-a4f3-c556bc4e25f4.png)

Your default project page looks like this. To create a new project, click on the dropdown icon and select the **New Project**, then click on the **New Project** option.

![Create a new projec](https://cdn.hashnode.com/res/hashnode/image/upload/v1725178437699/eec3dbff-8715-4d3b-805c-83cdfb149c06.png)

Next, select the templates for the project according to your requirements. Click on the **view all** button to view all available templates, or go with blank templates.

The template comes with pre-configuration based on what you choose.

![Select the template for your project.](https://cdn.hashnode.com/res/hashnode/image/upload/v1725178566692/29932135-3e90-42d8-8b71-092eac00d9ea.png)

I selected the feature release template for this tutorial. Next, enter your project name and click on the **Create Project** button.

![Create a project with the selected template.](https://cdn.hashnode.com/res/hashnode/image/upload/v1725178693346/211597d1-309d-4ccf-a0bd-c6fbed891111.png)

Your project should be created based on the template you chose. Your project dashboard page may be different according to your template.

![Your project dashboard looks like this.](https://cdn.hashnode.com/res/hashnode/image/upload/v1725179016256/91a10481-874b-4441-9038-0686675ca7ae.png)

### How to Delete and Edit Projects on GitHub

To edit and delete a project, go to the project page.

![GitHub projects page](https://cdn.hashnode.com/res/hashnode/image/upload/v1725179133210/2526dec0-e354-48db-b6a9-a607f644ccf7.png)

Then click on a project which you want to edit or delete. Clicking on the project title should take you to the project setting page.

![Project page](https://cdn.hashnode.com/res/hashnode/image/upload/v1725179213957/ef9aa361-3f2b-41d5-bb4a-660886120f9b.png)

In the project settings page, you can edit the project title and description, delete the project, close the project and also change the visibility of your project from private to public.

![Project settings page](https://cdn.hashnode.com/res/hashnode/image/upload/v1725179309181/5533fb7a-9dc5-42c1-81ae-9b1ee7a60b46.png)

---

## How to Use Milestones on GitHu

![Milestones in Github](https://cdn.hashnode.com/res/hashnode/image/upload/v1725179667880/661d75ba-1212-4987-a4db-1344cf8fb487.png)

The [<FontIcon icon="iconfont icon-github"/>milestone feature](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones) allows you to track the progress of issues or pull requests in a repository. With milestones, you can prioritize open issues and pull requests and set a due date for a group of related items.

In simple terms, milestones operate like a to-do list, where you can detail the amount of completed or pending work. It functions like a progress bar, helping your team manage the project more effectively and communicate the importance of specific issues to both your team and the open-source community.

Milestones allows the open-source community and your team to understand the status of completed or pending work, and the timeline for upcoming versions.

### How to Create Milestones on GitHub

First, go to the repository and then to the issue page. Click on the milestones button.

![Click on the Milestones button.](https://cdn.hashnode.com/res/hashnode/image/upload/v1725179807807/d9b3aeeb-b244-4165-af99-10eb395d5e71.png)

Now, you should see your exciting milestones list. To create milestones, click on the **new milestones** button.

![Click on the New Milestones button to create a Milestone.](https://cdn.hashnode.com/res/hashnode/image/upload/v1725179917831/f4e186c6-3bf7-4058-8de4-9a3d470c96ca.png)

Enter the milestone title, due date and description and last, then click on the **Create milestones** button to make your milestone.

![Create a new milestone in Github](https://cdn.hashnode.com/res/hashnode/image/upload/v1725180035699/e3a7d784-a33c-45a0-a2d0-4cd53d33a251.png)

By default, your created milestone should look like this:

![Enter information about milestones.](https://www.freecodecamp.org/news/content/images/2024/08/bydefault-your-milestone-look-like-this.png)

Our next task is to assign an issue to the milestone. Go to the issue and assign a milestone to it.

![Assign the milestone into a issue](https://cdn.hashnode.com/res/hashnode/image/upload/v1725180104276/ad15123a-acf9-4577-90cb-3aa294f03d8a.png)

If you have [<FontIcon icon="iconfont icon-github"/>multiple milestones](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones), you can select one of them.

![Select the milestone](https://cdn.hashnode.com/res/hashnode/image/upload/v1725180261186/4e506d15-613b-4d10-818c-2ff8168a6459.png)

Verify whether the issue is attached or not to the milestone.

![Verify whether the issue is attached or not to the milestone.](https://cdn.hashnode.com/res/hashnode/image/upload/v1725180354959/4c7a3127-df19-49bb-89dc-3409eae8e23a.png)

Now, you can attach or assign multiple issues with a single milestone. When you visit the milestone, you can see all the assigned milestone lists.

![Assigned milestone lists.](https://cdn.hashnode.com/res/hashnode/image/upload/v1725180446204/149dc05e-8e6f-4db1-816d-8b1b179b5a47.png)

If you and your teammate close the issue, your progress bar is increased automatically. This can help your team and your community understand how much work has been completed.

![The progress bar increased automatically in milestones.](https://cdn.hashnode.com/res/hashnode/image/upload/v1725180561440/6133c4c6-e60f-4176-88dc-80beb916ea30.png)

### How to Delete and Edit Milestones on GitHub

To edit and delete the milestones, you need to go to the **issues page** and click on the milestones button to see the available milestones.

To edit milestones, click on the **edit** button, and to delete the milestones, click on the **delete** button.

![Edit and delete the milestone](https://cdn.hashnode.com/res/hashnode/image/upload/v1725180673832/1b71ecd9-fadb-4feb-9b62-2c1a4fcf597c.png)

---

## Conclusion

Labels, projects, and milestones are basic features useful for managing a project on GitHub. When you use them, you automatically learn about them.

Both milestones and projects are different, and you can not compare both at the same time because both provide different functionalities and working.

As I mentioned, a milestone is used to allow you to track the progress of issues or pull requests in a repository. On the other hand, a project is used to plan and manage your repository from one central location.

For small teams, I recommend milestones, and for the large team, I recommend using projects. You can also use both projects and milestones for better productivity.

I've written other article related to GitHub, and you can check them out here:

```component VPCard
{
  "title": "What is a GitHub Wiki and How Do You Use it?",
  "desc": "A GitHub wiki is a great place for your project's documentation. You can use the wiki to create, manage, and host documentation for your repository so others can use and contribute to your project. GitHub wikis are easy to start using without install...",
  "link": "/explore/articles/freecodecamp.org/what-is-github-wiki-and-how-do-you-use-it.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

```component VPCard
{
  "title": "Learn GitHub-Flavored Markdown Syntax and Formatting – With Examples",
  "desc": "Markdown is a lightweight, open-source, easy-to-read and easy-to-write method of formatting text that you can use as plain text in any IDE or editor. When writing on GitHub, you can use Markdown syntax and HTML elements to extend Markdown's functiona...",
  "link": "/explore/articles/freecodecamp.org/github-flavored-markdown-syntax-examples.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

```component VPCard
{
  "title": "How to Run GitHub Actions Locally Using the act CLI Tool",
  "desc": "GitHub Actions help automate tasks like building, testing, and deploying in your GitHub repository.  With one click, you can publish your production-ready code or package on npm, GitHub pages, docker images, deploy your production code on a cloud pro...",
  "link": "/explore/articles/freecodecamp.org/how-to-run-github-actions-locally.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

---

<TagLinks />