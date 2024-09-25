---
lang: ko-KR
title: Part 1 - Main Objects and Introducing Changes
description: Article(s) > (2/6) Gitting Things Done – A Visual and Practical Guide to Git [Full Book]
category: 
  - Git
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - git
head:
  - - meta:
    - property: og:title
      content: Article(s) > (2/6) Gitting Things Done – A Visual and Practical Guide to Git [Full Book] 
    - property: og:description
      content: Part 1 - Main Objects and Introducing Changes
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/gitting-things-done-book/part-1-main-objects-and-introducing-changes.html
date: 2024-01-08
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w2000/2023/12/Gitting-Things-Done-Cover-with-Photo.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Gitting Things Done – A Visual and Practical Guide to Git [Full Book]",
  "desc": "Introduction Git is awesome. Most software developers use Git on a daily basis. But how many truly understand Git? Do you feel like you know what's going on under the hood as you use Git to perform various tasks? For example, what happens when you us...",
  "link": "/explore/articles/freecodecamp.org/gitting-things-done-book/README.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Gitting Things Done – A Visual and Practical Guide to Git [Full Book]"
  desc="Introduction Git is awesome. Most software developers use Git on a daily basis. But how many truly understand Git? Do you feel like you know what's going on under the hood as you use Git to perform various tasks? For example, what happens when you us..."
  url="https://freecodecamp.org/news/gitting-things-done-book/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w2000/2023/12/Gitting-Things-Done-Cover-with-Photo.png"/>

## Chapter 1 - Git Objects

It's time to start your journey into the depths of Git. In this chapter - starting with the basics - you will learn about the most important Git objects, and adopt a way of thinking about Git. Let's get to it!

### Git as a System for Maintaining a File System

While there are different ways to use Git, I'll adopt here the way I've found to be the most clear and useful: Viewing Git as a system maintaining a file system, and specifically  -  snapshots of that file system over time.

A file system begins with a root directory (in UNIX-based systems, `/`), which usually contains other directories (for example, <FontIcon icon="fas fa-folder-open"/>`/usr` or <FontIcon icon="fas fa-folder-open"/>`/bin`). These directories contain other directories, and/or files (for example, `/usr/1.txt`). On a Windows machine, a root directory of a drive would be `C:\`, and a subdirectory could be `C:\users`. I will adopt the convention of UNIX-based systems throughout this book.

### Blobs

In Git, the contents of files are stored in objects called **blob**s, short for binary large objects.

The difference between blobs and files is that files also contain meta-data. For example, a file "remembers" when it was created, so if you move that file from one directory into another directory, its creation time remains the same.

Blobs, in contrast, are just binary streams of data, like a file's contents. A blob does not register its creation date, its name, or anything other than its contents.

Every blob in Git is identified by its [<FontIcon icon="fa-brands fa-wikipedia-w"/>SHA-1 hash](https://en.wikipedia.org/wiki/SHA-1). SHA-1 hashes consist of 20 bytes, usually represented by 40 characters in hexadecimal form. Throughout this book I will sometimes show just the first characters of that hash. As hashes, and specifically SHA-1 hashes are so ubiquitous within Git, it is important you understand the basic characteristics of hashes.

### Hashes

A hash is a deterministic, one-way mathematical function.

*Deterministic* means that the same input will provide the same output. That is - you take a stream of data, run a hash function on that stream, and you get a result. 

For example, if you provide the SHA-1 hash function with the stream `hello`, you will get `0xaaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d`. If you run the SHA-1 hash function again, from a different machine, and provide it the same data (`hello`), you will get the same value.

Git uses SHA-1 as its hash function in order to identify objects. It relies on it being deterministic, such that an object will always have the same identifier.

A *one-way* function is a function that is hard to invert given an output. That is,  it is impossible (or at least, very hard) to tell, given the result of the hash function (for example `0xaaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d`), what input yielded that result (in this example, `hello`).

### Back to Git

Back to Git - Blobs, just like other Git objects, have SHA-1 hashes associated with them.

![Blobs have corresponding SHA-1 values](https://freecodecamp.org/news/content/images/2023/12/blob_sha.png)

As I said in the beginning, Git can be viewed as a system to maintain a file system. File systems consist of files and directories. A blob is the Git object representing the contents of a file.

### Trees

In Git, the equivalent of a directory is a **tree**. A tree is basically a directory listing, referring to blobs, as well as other trees.

Trees are identified by their SHA-1 hashes as well. Referring to these objects, either blobs or other trees, happens via the SHA-1 hash of the objects.

![A tree is a directory listing](https://freecodecamp.org/news/content/images/2023/12/tree_objs.png)

Consider the drawing above. Note that the tree `CAFE7` refers to the blob `F92A0` as the file `pic.png`. In another tree, that same blob may have another name - but as long as the contents are the same, it will still be the same blob object, and still have the same SHA-1 value.

![A tree may contain sub-trees, as well as blobs](https://freecodecamp.org/news/content/images/2023/12/tree_sub_trees.png)

The diagram above is equivalent to a file system with a root directory that has one file at `/test.js`, and a directory named <FontIcon icon="fas fa-folder-open"/>`/docs` consisting of two files: `/docs/pic.png`, and `/docs/1.txt`.

### Commits

Now it's time to take a snapshot of that file system — and store all the files that existed at that time, along with their contents.

In Git, a snapshot is a **commit**. A commit object includes a pointer to the main tree (the root directory of the file system), as well as other meta-data such as the committer (the user who authored the commit), a commit message, and the commit time.

In most cases, a commit also has one or more parent commits — the previous snapshot (or snapshots). Of course, commit objects are also identified by their SHA-1 hashes. These are the hashes you are probably used to seeing when you use commands such as `git log`.

![A commit is a snapshot in time. It refers to the root tree. As this is the first commit, it has no parents](https://freecodecamp.org/news/content/images/2023/12/commit.png)

Every commit holds the entire snapshot, not just differences between itself and its parent commit or commits.

How can that work? Doesn't that mean that Git has to store a lot of data for every commit?

Examine what happens if you change the contents of a file. Say that you edit the file `1.txt`, and add an exclamation mark — that is, you changed the content from `HELLO WORLD`, to `HELLO WORLD!`.

Well, this change means that Git creates a new blob object, with a new SHA-1 hash. This makes sense, as `sha1("HELLO WORLD")` is different from `sha1("HELLO WORLD!")`.

![Changing the blob results in a new SHA-1](https://freecodecamp.org/news/content/images/2023/12/new_blob_new_sha.png)

Since you have a new hash, then the tree's listing should also change. After all, your tree no longer points to blob `73D8A`, but rather blob `62E7A` instead. Since you change the tree's contents, you also change its hash.

![The tree that points to the changed blob needs to change as well](https://freecodecamp.org/news/content/images/2023/12/new_tree_new_hash.png)

And now, since the hash of that tree is different, you also need to change the parent tree — as the latter no longer points to tree `CAFE7`, but rather to tree `24601`. Consequently, the parent tree will also have a new hash.

![The root tree also changes, and so does its hash](https://freecodecamp.org/news/content/images/2023/12/new_root_tree.png)

Almost ready to create a new commit object, and it seems like you are going to store a lot of data — the entire file system, once more! But is that really necessary?

Actually, some objects, specifically blob objects, haven't changed since the previous commit — the blob `F92A0` remained intact, and so did the blob `F00D1`.

So this is the trick — as long as an object doesn't change, Git doesn't store it again. In this case, Git doesn't need to store blob `F92A0` or blob `F00D1` once more. Git can refer to them using only their hash values. You can then create your commit object.

![Blobs that remained intact are referenced by their hash values](https://freecodecamp.org/news/content/images/2023/12/new_commit.png)

Since this commit is not the first commit, it also has a parent commit — commit `A1337`.

### Considering Hashes

After introducing blobs, trees, and commits - consider the hashes of these objects. Assume I wrote the string `Git is awesome!`, and created a blob object from it. You did the same on your system. Would we have the same hash?

The answer is — Yes. Since the blobs consist of the same data, they'll have the same SHA-1 values.

What if I made a tree that references the blob of `Git is awesome!`, and gave it a specific name and metadata, and you did exactly the same on your system. Would we have the same hash?

Again, yes. Since the tree objects are the same, they would have the same hash.

What if I created a commit pointing to that tree with the commit message `Hello`, and you did the same on your system? Would we have the same hash?

In this case, the answer is — No. Even though our commit objects refer to the same tree, they have different commit details — time, committer, and so on.

### How Are Objects Stored?

You now understand the purpose of blobs, trees, and commits. In the next chapters, you will also create these objects yourself. Despite being interesting, understanding how these objects are actually encoded and stored is not vital to your understanding, and for gitting things done.

#### Short Recap - Git Objects

To recap, in this section we introduced three Git objects:

- **Blob** — contents of a file.
- **Tree** — a directory listing (of blobs and trees).
- **Commit** — a snapshot of the working tree.

In the next chapter, we will understand branches in Git.

---

## Chapter 2 - Branches in Git

In the previous chapter, I suggested that we should view Git as a system for maintaining a file system.

One of the wonders of Git is that it enables multiple people to work on that file system, in parallel, (mostly) without interfering with each other's work. Most people would say that they are "working on branch <FontIcon icon="fas fa-coe-branch"/>`X`." But what does that *actually* mean?

**A branch is just a named reference to a commit.**

You can always reference a commit by its SHA-1 hash, but humans usually prefer other ways to name objects. A branch is one way to reference a commit, but it's really just that.

In most repositories, the main line of development is done in a branch called <FontIcon icon="fas fa-code-branch"/>`main`. This is just a name, and it's created when you use `git init`, making it widely used. However, you could use any other name you'd like.

Typically, the branch points to the latest commit in the line of development you are currently working on.

![A branch is just a named reference to a commit](https://freecodecamp.org/news/content/images/2023/12/branch_01.png)

To create another branch, you can use the `git branch` command. When you do that, Git creates another pointer. If you created a branch called <FontIcon icon="fas fa-code-branch"/>`test`, by using `git branch test`, you would be creating another pointer that points to the same commit as the branch you are on:

![Using `git branch` creates another pointer](https://freecodecamp.org/news/content/images/2023/12/git_branch.png)

How does Git know which branch you're currently on? It keeps another designated pointer, called `HEAD`. Usually, `HEAD` points to a branch, which in turns points to a commit. In the case described, `HEAD` might point to <FontIcon icon="fas fa-code-branch"/>`main`, which in turn points to commit `B2424`. In some cases, `HEAD` can also point to a commit directly.

![`HEAD` points to the branch you are currently on](https://freecodecamp.org/news/content/images/2023/12/head_main.png)

To switch the active branch to be <FontIcon icon="fas fa-code-branch"/>`test`, you can use the command `git checkout test`, or `git switch test`. Now you can already guess what this command actually does — it just changes `HEAD` to point to `test`.

![`git checkout test` changes where `HEAD` points](https://freecodecamp.org/news/content/images/2023/12/head_test.png)

You could also use `git checkout -b test` before creating the <FontIcon icon="fas fa-code-branch"/> `test` branch, which is the equivalent of running `git branch test` to create the branch, and then `git checkout test` to move `HEAD` to point to the new branch.

At the point represented in the drawing above, what would happen if you made some changes and created a new commit using `git commit`? Which branch will the new commit be added to?

The answer is the <FontIcon icon="fas fa-code-branch"/>`test` branch, as this is the active branch (since `HEAD` points to it). Afterwards, the `test` pointer will move to the newly added commit. Note that `HEAD` still points to <FontIcon icon="fas fa-code-branch"/>`test`.

![Every time we use `git commit`, the branch pointer moves to the newly created commit](https://freecodecamp.org/news/content/images/2023/12/test_commit-1.png)

If you go back to <FontIcon icon="fas fa-code-branch"/>`main` by using `git checkout main`, Git will move `HEAD` to point to <FontIcon icon="fas fa-code-branch"/>`main` again.

![The resulting state after using `git checkout main`](https://freecodecamp.org/news/content/images/2023/12/back_to_main-1.png)

Now, if you create another commit, which branch will it be added to?

That's right, it will be added to the <FontIcon icon="fas fa-code-branch"/>`main` branch (and its parent would be commit `B2424`).

![The resulting state after creating another commit on the <FontIcon icon="fas fa-code-branch"/>`main` branch](https://freecodecamp.org/news/content/images/2023/12/commit_to_main-1.png)

### Short Recap - Branches

- A branch is a named reference to a commit.
- When you use `git commit`, Git creates a commit object, and moves the branch to point to the newly created commit.
- `HEAD` is a special pointer telling Git which branch is the active branch (in rare cases, it can point directly to a commit).

In the next chapters, you will learn how to introduce changes to Git. You will create a repository from scratch — without using `git init`, `git add`, or `git commit`. This will allow you to deepen your understanding of what is happening under the hood when you work with Git. You will also create new branches, switch branches, and create additional commits — all without using `git branch` or `git checkout`. I don't know about you, but I am excited already!

---

## Chapter 3 - How to Record Changes in Git

So far, we've learned about four different entities in Git:

1. **Blob** — contents of a file.
2. **Tree** — a directory listing (of blobs and trees).
3. **Commit** — a snapshot of the working tree, with some meta-data such as the time or the commit message.
4. **Branch** — a named reference to a commit.

The first three are *objects*, whereas the fourth is one way to refer to objects (specifically, commits).

Now, it's time to understand how to introduce changes in Git.

When you work on your source code, you work from a **working dir**. A working dir(ectory) (also called "working tree") is any directory on your file system which has a repository associated with it. It contains the folders and files of your project, and also a directory called <FontIcon icon="fas fa-folder-open"/>`.git` that we will talk more about later. Remember that we said that Git is a system to maintain a file system. The working directory is the root of the file system for Git.

After you make some changes, you might want to record them in your repository. A **repository** (in short: "repo") is a collection of commits, each of which is an archive of what the project's working tree looked like at a past date, whether on your machine or someone else's. That is, as I said before, a commit is a snapshot of the working tree.

A repository also includes things other than your code files, such as `HEAD` and `branches`.

![A working dir alongside the repository](https://freecodecamp.org/news/content/images/2023/12/working_dir_repo.png)

Note regarding the drawing conventions I use: I include `.git` within the working directory, to remind you that it is a folder within the project's folder on the filesystem. The `.git` folder actually contains the objects of the repository, as we will see in [chapter 4](#heading-chapter-4-how-to-create-a-repo-from-scratch).

There are other version control systems where changes are committed directly from the working dir to the repository. In Git, this is not the case. Instead, changes are first registered in something called the **index**, or the **staging area**.

Both of these terms refer to the same thing, and they are used often in Git's documentation. I will use these terms interchangeably throughout this book, as you should feel comfortable with both of them.

You can think of adding changes to the index as a way of "confirming" your changes, one by one, before creating a commit (which records all your approved changes at once).

When you `checkout` a branch, Git populates the index and the working dir with the contents of the files as they exist in the commit that branch is pointing to. When you use `git commit`, Git creates a new commit object based on the state of the index.

![The three "states" - working dir, index, and repository](https://freecodecamp.org/news/content/images/2023/12/working_dir_index_repo.png)

Using the index allows you to carefully prepare each commit. For example, you may have two files with changes in your working dir:

![Working dir includes two files with changes](https://freecodecamp.org/news/content/images/2023/12/working_dir_index_repo_02.png)

For example, assume these two files are <FontIcon icon="fas fa-file-lines"/>`1.txt` and <FontIcon icon="fas fa-file-lines"/>`2.txt`. It is possible to only add one of them (for instance, <FontIcon icon="fas fa-file-lines"/>`1.txt`) to the index, by using `git add 1.txt`:

![The state after staging <FontIcon icon="fas fa-file-lines"/>`1.txt`](https://freecodecamp.org/news/content/images/2023/12/working_dir_index_repo_03.png)

As a result, the state of the index matches the state of `HEAD` (in this case, "Commit 2"), with the exception of the file `1.txt`, which matches the state of `1.txt` in the working directory. Since you did not stage `2.txt`, the index does not include the updated version of `2.txt`. So the state of `2.txt` in the index matches the state of `2.txt` in "Commit 2".

Behind the scenes - once you stage a version of a file, Git creates a blob object with the file's contents. This blob object is then added to the index. As long as you only modify the file on the working directory, without staging it, the changes you make are not recorded in blob objects. 

When considering the previous figure, note that I do not draw the staged version of the file as part of the "repository", as in this representation, the "repository" refers to a tree of commits and their references, and this blob has not been a part of any commit.

Now, you can use `git commit` to record the change to `1.txt` *only*:

![The state after using `git commit`](https://freecodecamp.org/news/content/images/2023/12/working_dir_index_repo_04.png)

Using `git commit` performs two main operations:

1. It creates a new commit object. This commit object reflects the state of the index when you ran the `git commit` command.
2. Updates the active branch to point to the newly created commit. In this example, `main` now points to "Commit 3", the new commit object.

### How to Create a Repo — The Conventional Way

Let's make sure that you understand how the terms we've introduced relate to the process of creating a new repository. This is a quick high-level view, before diving much deeper into this process.

Initialize a new repository using `git init my_repo`, and then change your directory to that of the repository using `cd my_repo`:

![`git init`](https://freecodecamp.org/news/content/images/2023/12/git_init.png)

By using `tree -f .git` you can see that running `git init my_repo` resulted in quite a few sub-directories inside <FontIcon icon="fas fa-folder-open"/>`.git`. (The flag `-f` includes files in tree's output).

::: note

if you're using <FontIcon icon="fa-brands fa-windows"/>Windows, run `tree /f .git`.

:::

![The output of `tree -f .git` after using `git init`](https://freecodecamp.org/news/content/images/2023/12/git_init_tree_f.png)

Create a file inside the <FontIcon icon="fas fa-folder-open"/>`my_repo` directory:

![Creating <FontIcon icon="fas fa-file-lines"/>`f.txt`](https://freecodecamp.org/news/content/images/2023/12/create_f_txt.png)

This file is within your working directory. If you run `git status`, you'll see this file is untracked:

![The result of `git status`](https://freecodecamp.org/news/content/images/2023/12/create_f_txt_git_status.png)

Files in your working directory can be in one of two states: **tracked** or **untracked**.

**Tracked** files are files that Git "knows" about. They either were in the last commit, or they are staged now (that is, they are in the staging area).

**Untracked** files are everything else — any files in your working directory that were not in your last commit, and are not in your staging area.

The new file (<FontIcon icon="fas fa-file-lines"/>`f.txt`) is currently untracked, as you haven't added it to the staging area, and it hasn't been included in a previous commit.

![.<FontIcon icon="fas fa-file-lines"/>`f.txt` is in the working directory (and untracked)](https://freecodecamp.org/news/content/images/2023/12/drawing_new_untracked_file.png)

You can now add this file to the staging area (also referred to as staging this file) by using `git add f.txt`. You can verify that it has been staged by running `git status`:

![Adding the new file to the staging area](https://freecodecamp.org/news/content/images/2023/12/git_add_status.png)

So now the state of the index matches that of the working dir:

![The state after adding the new file](https://freecodecamp.org/news/content/images/2023/12/drawing_new_staged_file.png)

You can now create a commit using `git commit`:

![Committing an initial commit](https://freecodecamp.org/news/content/images/2023/12/initial_commit.png)

If you run `git status` again, you'll see that the status is clean - that is, the state of `HEAD` (which points to your initial commit) equals the state of the index, and also the state of the working dir. By using `git log` you will see indeed that `HEAD` points to <FontIcon icon="fas fa-code-branch"/>`main` which in turn points to your new commit:

![The output of `git log` after introducing the first commit](https://freecodecamp.org/news/content/images/2023/12/initial_commit_git_log.png)

Has something changed within the <FontIcon icon="fas fa-folder-open"/>`.git` directory? Run `tree -f .git` to check:

![A lot of things have changed within `.git`](https://freecodecamp.org/news/content/images/2023/12/tree_f_after_initial_commit.png)

Apparently, quite a lot has changed. It's time to dive deeper into the structure of <FontIcon icon="fas fa-folder-open"/>`.git` and understand what is going on under the hood when you run `git init`, `git add` or `git commit`. That's exactly what the next chapter will cover.

### Recap - How to Record Changes in Git

You learned about the three different "states" of the file system that Git maintains:

- **Working dir(ectory)** (also called "working tree") - any directory on your file system which has a repository associated with it.
- **Index**, or the **Staging Area** - a playground for the next commit.
- **Repository** (in short: "repo") - a collection of commits, each of which is a snapshot of the working tree.

When you introduce changes in Git, you almost always follow this order:

1. You change the working directory first
2. Then you stage these changes (or some of them) to the index
3. And finally, you commit these changes - thereby updating the repository with a new commit. The state of this new commit matches the state of the index.

Ready to dive deeper?

---

## Chapter 4 - How to Create a Repo From Scratch

So far we've covered some Git fundamentals, and now you should be ready to really *Git* going (I can't seem to get enough of that pun).

In order to deeply understand how Git works, you will create a repository, but this time — you will build it from scratch. As in other chapters, I encourage you to try out the commands alongside this chapter.

### How to Set Up <FontIcon icon="fas fa-folder-open"/>`.git`

Create a new directory, and run `git status` within it:

![`git status` in a new directory](https://freecodecamp.org/news/content/images/2023/12/new_dir_git_status.png)

Alright, so Git seems unhappy as you don't yet have a `.git` folder. The natural thing to do would be to create that directory and try again:

![`git status` after creating `.git`](https://freecodecamp.org/news/content/images/2023/12/mkdir_git_git_status.png)

Apparently, creating a `.git` directory is just not enough. You need to add some content to that directory.

A Git repository has two main components:

- A collection of **objects** — blobs, trees, and commits.
- A system of **naming** those objects — called references.

A repository may also contain other things, such as hooks, but at the very least — it must include objects and references.

Create a directory for the objects at `.git/objects`, and a directory for the references (in short: "refs") at <FontIcon icon="fas fa-folder-open"/>`.git/refs` (on Windows systems — <FontIcon icon="fas fa-folder-open"/>`.git\objects` and <FontIcon icon="fas fa-folder-open"/>`.git\refs`, respectively).

![Considering the directory tree](https://freecodecamp.org/news/content/images/2023/12/create_folders_git_tree.png)

One type of reference is branches. Internally, Git calls branches by the name `heads`. Create a directory for branches — `.git/refs/heads`.

![The directory tree](https://freecodecamp.org/news/content/images/2023/12/create_heads_folder_git_tree.png)

This still doesn't change the result of `git status`:

![`git status` after creating <FontIcon icon="fas fa-folder-open"/>`.git/refs/heads`](https://freecodecamp.org/news/content/images/2023/12/create_heads_folder_git_status.png)

How does Git know where to start when looking for a commit in the repository? As I explained earlier, it looks for `HEAD`, which points to the current active branch (or commit, in some cases).

So, you need to create `HEAD`, which is just a file residing at `.git/HEAD`. You can apply the following:

::: code-tabs#sh

@tab:active <FontIcon icon="fa-brands fa-linux"/>Linux

```sh
echo "ref: refs/heads/main" > .git/HEAD
```

@tab <FontIcon icon="fa-brands fa-windows"/>Windows

```batch
echo ref: refs/heads/main > .git\HEAD
```

:::

So you now know how `HEAD` is implemented — it is simply a file, and its contents describe what it points to.

Following the command above, `git status` seems to change its mind:

![`HEAD` is just a file](https://freecodecamp.org/news/content/images/2023/12/create_head_git_status.png)

Notice that Git "believes" you are on a branch called <FontIcon icon="fas fa-code-branch"/>`main`, even though you haven't created this branch. <FontIcon icon="fas fa-code-branch"/>`main` is just a name. You can also make Git believe you are on a branch called <FontIcon icon="fas fa-code-branch"/>`banana` if you wish:

![Creating a branch named <FontIcon icon="fas fa-code-branch"/>`banana`](https://freecodecamp.org/news/content/images/2023/12/banana.png)

Switch back to <FontIcon icon="fas fa-code-branch"/>`main`, as you will keep working from (mostly) there throughout this chapter, just to adhere to the regular convention:

```sh
echo "ref: refs/heads/main" > .git/HEAD
```

Now that you have your <FontIcon icon="fas fa-code-branch"/>`.git` directory ready, you can work your way to make a commit (again, without using `git add` or `git commit`).

### Plumbing vs Porcelain Commands in Git

At this point, it would be helpful to make a distinction between two types of Git commands: plumbing and porcelain. The application of the terms oddly comes from toilets, traditionally made of porcelain, and the infrastructure of plumbing (pipes and drains).

The porcelain layer provides a user-friendly interface to the plumbing. Most people only deal with the porcelain. Yet, when things go (terribly) wrong, and someone wants to understand why, they would have to roll up their sleeves and deal with the plumbing.

Git uses this terminology as an analogy to separate the low-level commands that users don't usually need to use directly ("plumbing" commands) from the more user-friendly high level commands ("porcelain" commands).

So far, you have dealt with porcelain commands — `git init`, `git add` or `git commit`. It's time to go deeper, and get yourself acquainted with some plumbing commands.

### How to Create Objects in Git

Start by creating an object and writing it into the objects database of Git, residing within <FontIcon icon="fas fa-folder-open"/>`.git/objects`. To know the SHA-1 hash value of a blob, you can `git hash-object` (yes, a plumbing command), in the following way:

::: code-tabs#sh

@tab:active <FontIcon icon="fa-brands fa-linux"/>Linux

```sh
echo "Git is awesome" | git hash-object --stdin
```

@tab <FontIcon icon="fa-brands fa-windows"/>Windows

```sh
echo Git is awesome | git hash-object --stdin
```

:::

By using `--stdin` you are instructing `git hash-object` to take its input from the standard input. This will provide you with the relevant hash value:

![Getting a blob's SHA-1](https://freecodecamp.org/news/content/images/2023/12/hash_object.png)

In order to actually write that blob into Git's object database, you can add the `-w` switch for `git hash-object`. Then, you check the contents of the <FontIcon icon="fas fa-folder-open"/>`.git` folder, and see that they have changed:

![Writing a blob to the objects' database](https://freecodecamp.org/news/content/images/2023/12/write_blob.png)

You can see that the hash of your blob is `7a9bd34a0244eaf2e0dda907a521f43d417d94f6`. You can also see that a directory has been created under <FontIcon icon="fas fa-folder-open"/>`.git/objects`, a directory named `7a`, and within it, a file by the name of `9bd34a0244eaf2e0dda907a521f43d417d94f6`.

What Git did here is take the *first two characters* of the SHA-1 hash, and use them as the name of a directory. The remaining characters are used as the filename for the file that actually contains the blob.

Why is that so? Consider a fairly big repository, one that has 400,000 objects (blobs, trees, and commits) in its database. Looking up a hash inside that list of 400,000 hashes might take a while. Thus, Git simply divides that problem by `256`.

To look up the hash above, Git would first look for the directory named `7a` inside the directory `.git/objects`, which may have up to 256 directories (`00` through `FF`). Then, it will search within that directory, narrowing down the search as it goes.

Back to the process of generating a commit. You have just created an object. What is the type of that object? You can use another plumbing command, `git cat-file -t` (`-t` stands for "type"), to check that out:

![Using `git cat-file -t <object_sha>` reveals the type of the Git object](https://freecodecamp.org/news/content/images/2023/12/cat_file_t_blob.png)

Not surprisingly, this object is a blob. You can also use `git cat-file -p` (`-p` stands for "pretty-print") to see its contents:

![`git cat-file -p`](https://freecodecamp.org/news/content/images/2023/12/cat_file_p_blob.png)

This process of creating a blob object under <FontIcon icon="fas fa-folder-open"/>`.git/objects` usually happens when you add something to the staging area — that is, when you use `git add`. So blobs are not created every time you save a file to the file system (the working dir), but only when you stage it.

Remember that Git creates a blob of the *entire* file that is staged. Even if a single character is modified or added, the file has a new blob with a new hash (as in the example in [chapter 1](#heading-chapter-1-git-objects) where you added `!` at the end of a line).

Will there be any change to `git status`?

![`git status` after creating a blob object](https://freecodecamp.org/news/content/images/2023/12/git_status_after_blob.png)

Apparently, no. Adding a blob object to Git's internal database does not change the status, as Git does not know of any tracked (or untracked) files at this stage.

You need to track this file — add it to the staging area. To do that, you can use another plumbing command, `git update-index`, like so:

```sh
git update-index --add --cacheinfo 100644 <BLOB-HASH> <FILENAME>
```

Note: The `cacheinfo` is a 16-bit file mode as stored by Git, following the layout of POSIX types and modes. This is not within the scope of this book, as it is really not important for you to Git things done.

Running the command above will result in a change to <FontIcon icon="fas fa-folder-open"/>`.git`'s contents:

![The state of <FontIcon icon="fas fa-folder-open"/>`.git` after updating the index](https://freecodecamp.org/news/content/images/2023/12/update_index.png)

Can you spot the change? A new file by the name of `index` has been created. This is it — the famous index (or staging area), is basically a file that resides within `.git/index`.

So now that your blob has been added to the index, do you expect `git status` to look different?

![`git status` after using `git update-index`](https://freecodecamp.org/news/content/images/2023/12/git_status_after_update_index.png)

That's interesting! Two things happened here.

First, you can see that <FontIcon icon="fas fa-file-lines"/>`awesome.txt` appears in *green*, in the "Changes to be committed" area. That is so because the index now includes <FontIcon icon="fas fa-file-lines"/>`awesome.txt`, waiting to be committed.

Second, we can see that <FontIcon icon="fas fa-file-lines"/>`awesome.txt` appears in *red* — because Git believes the file <FontIcon icon="fas fa-file-lines"/>`awesome.txt` has been deleted, and the fact that the file has been deleted is not staged.

(Note: You may have noticed that I sometimes refer to Git with words such as "believes", "thinks", or "wants". As I explained in the [introduction of this book](#heading-introduction) - in order for us to enjoy playing around with Git, and reading (and writing) this book, I feel like referring to Git as more than just code makes it all so much more enjoyable.)

This happens as you added the blob with the contents `Git is awesome` to the objects' database, and updated the index that the file <FontIcon icon="fas fa-file-lines"/>`awesome.txt` holds the contents of that blob, but you never actually created that file on disk.

You can easily solve this by taking the contents of the blob and writing them to our file system, to a file called <FontIcon icon="fas fa-file-lines"/>`awesome.txt`:

```sh
echo "Git is awesome" > awesome.txt
```

As a result, it will no longer appear in red by `git status`:

![`git status` after creating <FontIcon icon="fas fa-folder-open"/>`awesome.txt` on disk](https://freecodecamp.org/news/content/images/2023/12/git_status_after_creating_file_on_disk.png)

So now it's time to create a commit object from your staging area. As explained in [chapter 1](#heading-chapter-1-git-objects), a commit object has a reference to a tree, so you need to create a tree.

You can achieve this using the command `git write-tree`, which records the contents of the index in a tree object. Of course, you can use git `cat-file -t` to see that it's indeed a tree:

![And you can use `git cat-file -p` to see its contents](https://freecodecamp.org/news/content/images/2023/12/write_tree.png)

![Great, so you created a tree, and now you need to create a commit object that references this tree. To do that, you can use the command](https://freecodecamp.org/news/content/images/2023/12/cat_file_p_tree.png)

```sh
git commit-tree <TREE-HASH> -m <COMMIT-MESSAGE>
```

![Committing using the tree object](https://freecodecamp.org/news/content/images/2023/12/commit-tree.png)

You should now feel comfortable with the commands used to check the created object's type, and print its contents

![Creating a commit object](https://freecodecamp.org/news/content/images/2023/12/commit_object_cat_file.png)

Note that this commit object doesn't have a parent, because it is the first commit. When you add another commit you will probably want to declare its parent — don't worry, you will do so later

The last hash that we got — `b6d05ee40344ef5d53502539772086da14ad2b07` – is a commit's hash. You should actually be used to using these hashes — you probably look at them all the time (when using `git log`, for instance). Note that this commit object points to a tree object, with its own hash, which you rarely specify explicitly.

Will something change in `git status`?

![`git status` after creating a commit object](https://freecodecamp.org/news/content/images/2023/12/git_status_after_creating_commit_object.png)

No, nothing has changed. Why is that?

Well, to know that your file has been committed, Git needs to know about the latest commit. How does Git do that? It goes to the `HEAD`:

![Looking at the contents of `HEAD`](https://freecodecamp.org/news/content/images/2023/12/looking_at_head_1.png)

`HEAD` points to <FontIcon icon="fas fa-code-branch"/>`main`, but what is <FontIcon icon="fas fa-code-branch"/>`main`? You haven't really created it yet.

As we explained earlier in [chapter 2](#heading-chapter-2-branches-in-git), a branch is simply a named reference to a commit. And in this case, we would like <FontIcon icon="fas fa-code-branch"/>`main` to refer to the commit object with the hash `b6d05ee40344ef5d53502539772086da14ad2b07`.

You can achieve this by creating a file at `.git/refs/heads/main`, with the contents of this hash, like so:

![Creating `main`](https://freecodecamp.org/news/content/images/2023/12/creating_main.png)

In sum, a branch is just a file inside `.git/refs/heads`, containing a hash of the commit it refers to.

Now, finally, `git status` and `git log` seem to appreciate our efforts:

![`git status`](https://freecodecamp.org/news/content/images/2023/12/git_status_commit_1.png)

![`git log`](https://freecodecamp.org/news/content/images/2023/12/git_log_commit_1.png)

You have successfully created a commit without using porcelain commands! How cool is that?

### Recap - How to Create a Repo From Scratch

In this chapter, you fearlessly deep-dived into Git. You stopped using porcelain commands and switched to plumbing commands.

By using echo and low-level commands such as `git hash-object`, you were able to create a blob, add it to the index, create a tree of the index, and create a commit object pointing to that tree.

You also learned that `HEAD` is a file, located in `.git/HEAD`. Branches are also files, located under <FontIcon icon="fas fa-folder-open"/>`.git/refs/heads`. When you understand how Git operates, those abstract notions of `HEAD` or "branches" become very tangible.

The next chapter will deepen your understanding of how branches work under the hood.

---

## Chapter 5 - How to Work with Branches in Git — Under the Hood

In the previous chapter you created a repository and a commit without using `git init`, `git add` or `git commit`. In this chapter, you we will create and switch between branches without using porcelain commands (`git branch`, `git switch`, or `git checkout`).

It's perfectly understandable if you are excited, I am too!

Continuing from the previous chapter - you only have one branch, named <FontIcon icon="fas fa-code-branch"/>`main`. To create another one with the name <FontIcon icon="fas fa-code-branch"/>`test` (as the equivalent of `git branch test`), you would need to create a file named `test` within <FontIcon icon="fas fa-folder-open"/>`.git/refs/heads`, and the contents of that file would be the same commit's hash as the <FontIcon icon="fas fa-code-branch"/>`main` branch points to.

![Creating `test` branch](https://freecodecamp.org/news/content/images/2023/12/create_test_branch.png)

If you use `git log`, you can see that this is indeed the case — both <FontIcon icon="fas fa-code-branch"/>`main` and <FontIcon icon="fas fa-code-branch"/>`test` point to this commit:

![`git log` after creating `test` branch](https://freecodecamp.org/news/content/images/2023/12/git_log_after_creating_test_branch.png)

(Note: if you run this command and don't see a valid output, you may have written something other than the commit's hash into `.git/refs/heads/test`.)

Next, switch to our newly created branch (the equivalent of `git checkout test`). How would you do that? Try to answer for yourself before moving on to the next paragraph.

To change the active branch, you should change `HEAD` to point to your new branch:

![Switching to branch `test` by changing `HEAD`](https://freecodecamp.org/news/content/images/2023/12/change_head_to_test.png)

As you can see, `git status` confirms that `HEAD` now points to <FontIcon icon="fas fa-code-branch"/>`test`, which is, therefore, the active branch.

You can now use the commands you have already used in the previous chapter to create another file and add it to the index:

![Writing and staging another file](https://freecodecamp.org/news/content/images/2023/12/writing_another_file.png)

Following the commands above, you:

- Create a blob with the content of `Another File` (using `git hash-object`).
- Add it to the index by the name `another_file.txt` (using `git update-index`).
- Create a corresponding file on disk with the contents of the blob (using `git cat-file -p`).
- Create a tree object representing the index (using `git write-tree`).

It's now time to create a commit referencing this tree. This time, you should also specify the parent of this commit — which would be the previous commit. You specify the parent using the `-p` switch of `git commit-tree`:

![Creating another commit object](https://freecodecamp.org/news/content/images/2023/12/commit_2.png)

We have just created a commit, with a tree as well as a parent, as you can see:

![Observing the new commit object](https://freecodecamp.org/news/content/images/2023/12/cat_file_commit_2.png)

(Note: the SHA-1 value of your commit object will be different than the one shown in the screenshot above, as it includes the timestamp of the commit, and also author's details - which would be different on your machine.)

Will `git log` show us the new commit?

![`git log` after creating "Commit 2"](https://freecodecamp.org/news/content/images/2023/12/git_log_after_creating_commit_2.png)

As you can see, `git log` doesn't show anything new. Why is that?

Remember that `git log` traces the branches to find relevant commits to show. It shows us now `test` and the commit it points to, and it also shows `main` which points to the same commit.

That's right — you need to change `test` to point to the new commit object. You can do that by changing the contents of `.git/refs/heads/test`:

```sh
echo 22267a945af8fde78b62ee7f705bbecfdd276b3d > .git/refs/heads/test
```

And now if you run `git log`:

![`git log` after updating `test` branch](https://freecodecamp.org/news/content/images/2023/12/git_log_after_updating_test_branch.png)

It worked!

`git log` goes to `HEAD`, which tells Git to go to the branch `test`, which points to commit `222..3d`, which links back to its parent commit `b6d..07`.

Feel free to admire the beauty, I Git you. 😊

By inspecting your repository's folder, you can see that you have six different objects under the folder <FontIcon icon="fas fa-foler-open"/>`.git/objects` - these are the two blobs you created (one for <FontIcon icon="fas fa-file-lines"/>`awesome.txt` and one for <FontIcon icon="fas fa-file-lines"/>`file.txt`), two commit objects ("Commit 1" and "Commit 2"), and the tree objects - each pointed to by one of the commit objects.

![The tree listing after creating "Commit 2"](https://freecodecamp.org/news/content/images/2023/12/tree_after_commit_2.png)

You also have `.git/HEAD` that points to the active branch or commit, and two branches - within <FontIcon icon="fas fa-folder-open"/>`.git/refs/heads`.

### Recap - How to Work with Branches in Git — Under the Hood

In this chapter you understood how branches actually work in Git.

The main things we covered:

- A branch is a file under <FontIcon icon="fas fa-folder-open"/>`.git/refs/heads`, where the content of the file is a SHA-1 value of a commit.
- To create a new branch, Git simply creates a new file under <FontIcon icon="fas fa-folder-open"/>`.git/refs/heads` with the name of the branch - for example, `.git/refs/heads/my_branch` for the branch `my_branch`.
- To switch the active branch, Git modifies the contents of `.git/HEAD` to refer to the new active branch. `.git/HEAD` may also point to a commit object directly.
- When committing using `git commit`, Git creates a commit object, and also moves the current branch (that is, the contents of the file under <FontIcon icon="fas fa-folder-open"/>`.git/refs/heads`) to point to the newly created commit object.

---

## Part 1 - Summary

This part introduced you to the internals of Git. We started by covering [the basic objects](#heading-chapter-1-git-objects) — blobs, trees, and commits.

You learned that a **blob** holds the contents of a file. A **tree** is a directory-listing, containing blobs and/or sub-trees. A **commit** is a snapshot of our working directory, with some meta-data such as the time or the commit message.

You learned about [**branches**](#heading-chapter-2-branches-in-git), seeing that they are nothing but a named reference to a commit.

You learned the process of [recording changes in Git](#heading-chapter-3-how-to-record-changes-in-git), and that it involves the **working directory**, a directory that has a repository associated with it, the **staging area (index)** which holds the tree for the next commit, and the **repository**, which is a collection of commits and references.

We clarified how these terms relate to Git commands we know by creating a new repository and committing a file using the well-known `git init`, `git add`, and `git commit`.

Then you [created a new repository from scratch](#heading-chapter-4-how-to-create-a-repo-from-scratch), by using `echo` and low-level commands such as `git hash-object`. You created a blob, added it to the index, created a tree object representing the index, and even created a commit object pointing to that tree.

You were also able to create and [switch between branches by modifying files directly](#heading-chapter-5-how-to-work-with-branches-in-git-under-the-hood). Kudos to those of you who tried this on your own!

All together, after following along through this part, you should feel that you've deepened your understanding of what is happening under the hood when working with Git.

The next part will explore different strategies for integrating changes when working in different branches in Git - specifically, merge and rebase.

---

<TagLinks />