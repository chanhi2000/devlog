---
lang: ko-KR
title: Part 4 - Amazing and Useful Git Tools
description: Article(s) > (5/6) Gitting Things Done – A Visual and Practical Guide to Git [Full Book]
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
      content: Article(s) > (5/6) Gitting Things Done – A Visual and Practical Guide to Git [Full Book] 
    - property: og:description
      content: Part 4 - Amazing and Useful Git Tools
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/gitting-things-done-book/part-4-amazing-and-useful-git-tools.html
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

<!-- TODO: 작성 -->

<!--
## ---

## heading-chapter-12-git-log">Chapter 12 - Git Log

You used `git log` many times across different chapters, and you had probably used it many times before reading this book.

Most developers use `git log`, few use it effectively. In this chapter you will learn useful tweaks for making the most of `git log`. Once you feel comfortable with the different switches of this command, it will be a game changer in your day to day work with Git.

Thinking about it, `git log` encompasses the essence of every version control system - that is, to record changes in versions. You record versions so that you can consider the history of your project - perhaps revert or apply specific changes, prefer to switch to a different point in time and test things there. Perhaps you would like to know who contributed a certain piece of code or when they did that.

While `git` does preserve this information by using commit objects, that also point to their parent commits, and references to commit objects (such as branches or `HEAD`), this storing of versions is not enough. Without being able to find the relevant commit you would like to consider, or gather the relevant information about it, having this data stored is pretty useless.

You can think of your commit objects as different books that pile up in a huge stack, or in a library, filling long shelves. The information you might need is in these books, but if you don't have an index - a way to know in which book the information you seek lies, or where this book is located within the library - you wouldn't be able to make much use of it. `git log` is this indexing of your library - it's a way to find the relevant commits and the information about them.

The useful arguments for `git log` that you will learn in this chapter either format how commits are displayed in the log, or filter specific commits.

`git lol`, an alias which I have used throughout the book, uses some of these switches, as I will demonstrate. Feel free to tweak this alias (or create another from scratch) after reading this chapter.

As in other chapters, the goal is not to provide a complete reference, therefore I will not provide *all* different switches of `git log`. I will focus on the switches I believe you will find useful.

### heading-filtering-commits">Filtering Commits

Consider the default output of `git log`:

![The output of `git log` without additional switches](https://freecodecamp.org/news/content/images/2023/12/git_log_1.png)

The log starts from `HEAD`, and follows the parent chain.

<h4 id="heading-commits-not-reachable-from">Commits (Not) Reachable From...

When you write `git log <revision>`, `git log` will include all entries reachable from `<revision>`. By "reachable", I refer to reachable by following the parent chain. So running `git log` without any arguments is equivalent to running `git log HEAD`.

You can specify multiple revisions for `git log` - if you write `git log branch_1 branch_2`, you ask `git log` to include every commit that is reachable from `branch_1` or `branch_2` (or both).

`git log` will **exclude** any commits that are reachable from revisions preceded by a `^`.

For example, the following command:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log branch_1 ^branch_2
```

asks `git log` to include every commit that is reachable from `branch_1`, but not those reachable from `branch_2`.

Consider the history when I use `git log feature_branch_1` on this repo:

![](https://freecodecamp.org/news/content/images/2023/12/git_log_2-1.png)Image" width="937" height="854" loading="lazy">
_`git log feature_branch_1`_

The history includes all commits reachable by `feature_branch_1`. Since this branch "branched off" `main` (that is, "Commit 12", which `main` points to, is reachable from the parent chain) - the log also includes the commits reachable from `main`.

What would happen if I ran this command?

<pre class="language-bash" tabindex="0"><code class="language-bash">git log feature_branch_1 ^main
```

![](https://freecodecamp.org/news/content/images/2023/12/git_log_3.png)Image" width="952" height="325" loading="lazy">
_`git log feature_branch_1 ^main`_

Indeed, `git log` outputs only "Commit 13" and "Commit 16", which are reachable from `feature_branch_1` but not from `main`.

<h4 id="heading-git-log-all">`git log --all`

To follow commits that are reachable from any named reference or (any refs in `refs/`) or `HEAD`.

<h4 id="heading-by-author">By Author

If you know you are looking for a commit that a specific person has authored, you can filter these commits by using that user's name or email, like so:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log --author="Name"
```

You can use regular expressions to look for author names that match a specific pattern, for example:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log --author="John\|Jane"
```

will filter commits authored by either John or Jane.

<h4 id="heading-by-date">By Date

When you know that the change you are looking for has been committed within a specific timeframe, you can use `--before` or `--after` to filter commits from that timeframe.

For example, to get all commits introduced after April 12th, 2023 (inclusive), use:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log --after="2023-04-12"
```

<h4 id="heading-by-paths">By Paths

You can ask `git log` to only show commits where *changes* to files in specific paths have been introduced. Notice that this does not mean any commit that points to a tree that includes the files in question, but rather that if we compute the difference between the commit in question and its parent, we would see that at least one of the paths has been modified.

For example, you can use:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log --all -- 1.py
```

to find all commits that are reachable from any named pointer, or `HEAD`, and introduce a change to `1.py`. You can specify multiple paths:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log --all -- 1.py 2.py
```

The previous command will make `git log` include reachable commits that introduced a change to `1.py` or `2.py` (or both).

You can also use a glob pattern, for example:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log -- *.py
```

will include commits reachable from `HEAD` that include a change to any file in the root directory whose name ends with a `.py`. To look for any file whose name ends with `.py`, you can use:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log -- **/*.py
```

<h4 id="heading-by-commit-message">By Commit Message

If you know the commit message (or parts of it) of the commit you are searching, you can use the `--grep` switch for "git log", for example:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log --grep="Commit 12"
```

yields back the commit with the message "Commit 12".

<h4 id="heading-by-diff-content">By Diff Content

This one is super useful, and it saved me countless times. By using `git log -S`, you can search for commits that introduce or remove a particular line of source code. 

This comes in handy, for example, when you know you have created something in the repo, but you don't know where it is now. You can't find it anywhere on your filesystem (it's not in `HEAD`), and you know it must be there - lurking somewhere in this library (bunch of commits) that you have.

Say I remember I wrote a line with the text `Git is awesome`, but I can't find it now. I could run:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log --all -S"Git is awesome"
```

Notice I used `--all` to avoid restraining myself to commits reachable from `HEAD`.

You can also search for a regular expression, using `-G`:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log --all -G"Git .* awesome"
```

### heading-formatting-log">Formatting Log

Consider the default output of `git log` again:

![](https://freecodecamp.org/news/content/images/2023/12/git_log_1-1.png)The output of  without additional switches]
*The output of `git log` without additional switches*

The log starts from `HEAD`, and follows the parent chain.

Each log entry begins with a line starting with `commit` and then the SHA-1 of the commit, perhaps followed by additional pointers that point to this commit.<br>It is then followed by the author, date, and commit message.

<h4 id="heading-oneline">`--oneline`

The main difficulty with the default output of `git log` is that it is hard to understand a history with more than a few commits, as you simply don't see them all. 

In the output of `git log` shown before, only four commit objects appeared on my screen. Using `git log --oneline` provides a more concise view, showing the SHA-1 of the commit, next to its message, and named references if relevant:

![](https://freecodecamp.org/news/content/images/2023/12/git_log_5.png)The output of " width="473" height="214" loading="lazy">
*The output of `git log --oneline`*

If you wish to omit the named references, you can add the `--no-decorate` switch:

![](https://freecodecamp.org/news/content/images/2023/12/git_log_6.png)The output of " width="262" height="217" loading="lazy">
*The output of `git log --oneline --no-decorate`*

To explicitly ask for `git log` to show decorations, you can use `git log --decorate`.

<h4 id="heading-graph">`--graph`

`git log --oneline` shows a compact representation. That is great when we have a linear history, perhaps on a single branch. But what happens when we have multiple branches, that may diverge from one another?

Consider the output of the following command on my repository:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log --oneline feature_branch_1 feature_branch_2
```

![](https://freecodecamp.org/news/content/images/2023/12/git_log_7.png)The output of " width="532" height="386" loading="lazy">
_The output of `git log --oneline feature_branch_1 feature_branch_2`_

`git log` outputs any commit reachable by `feature_branch_1`, `feature_branch_2`, or both. But what does the history look like? Did `feature_branch_2` diverge from `feature_branch_1`? Or did it diverge from `main`? It is impossible to tell from this view. 

This is where `--graph` comes in handy, drawing an ASCII graph representing the branch structure of the commit history. If we add this option to the previous command:

![](https://freecodecamp.org/news/content/images/2023/12/git_log_8.png)The output of " width="584" height="414" loading="lazy">
_The output of `git log --oneline --graph feature_branch_1 feature_branch_2`_

You can actually *see* that `feature_branch_1` branched from `main` (as "Commit 12", `main`, is the parent of "Commit 13"), and also that `feature_branch_2` branched from `main` (as the parent of "Commit 14" is also "Commit 12").

The `*` symbol tells us which branch a certain commit is "on", so you can know for sure that "Commit 13" is on `feature_branch_1`, and not `feature_branch_2`.

<h4 id="heading-prettyformat">`--pretty=format`

The above result is already very useful! Yet, it lacks a few things. We don't know the author or the time of the commit. These two information details were included in the default output of `git log` which was very long. Perhaps we can add them in a more compact way?

By using `--pretty=format:`, you can display the information of each commit in various ways using `printf`-style placeholders.

In the following command, the `%s`, `%an` and `%cd` placeholders are replaced by the commit's subject (message), author name, and the commit's date, respectively.

<pre class="language-bash" tabindex="0"><code class="language-bash">git log --oneline --graph feature_branch_1 feature_branch_2 --pretty=format:"%s (%an) [%cd]"
```

The output looks like this:

![](https://freecodecamp.org/news/content/images/2023/12/git_log_9.png)Image" width="905" height="385" loading="lazy">
_`git log --oneline --graph feature_branch_1 feature_branch_2 --pretty=format:"%s (%an) [%cd]`_

That's useful, but not really great to look at. We can then use other formatting tricks, specifically `%C(color)` that will switch the color to `color`, until reaching a `%Creset` that resets the color. To make the author name's yellow, you can use:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log --oneline --graph feature_branch_1 feature_branch_2 --pretty=format:"%s %C(yellow)(%an)%Creset [%cd]"
```

![](https://freecodecamp.org/news/content/images/2023/12/git_log_10.png)Image" width="922" height="427" loading="lazy">
_`git log --oneline --graph feature_branch_1 feature_branch_2 --pretty=format:"%s %C(yellow)(%an)%Creset [%cd]"`_

For some colors, like `red` or `green`, it is unnecessary to include the parenthesis, so `Cred` is enough.

<h4 id="heading-how-is-git-lol-structured">How is `git lol` Structured?

When I run `git lol`, it actually executes the following:

`git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit`

Can you take this bit by bit?

You already know `--graph`, which makes the output include an ASCII graph.

`--abbrev-commit` uses a short prefix from the full SHA-1 of the commit (in my configuration, the first seven characters).

The rest is just coloring of various details about the commit:

<pre class="language-bash" tabindex="0"><code class="language-bash">git lol --all
```

![](https://freecodecamp.org/news/content/images/2023/12/git_log_11.png)Image" width="1051" height="386" loading="lazy">
*`git lol --all`*

I like this output because I find it clear. It gives me the information I need, with enough coloring so that every detail stands out without hurting my eyes. But if you prefer other information, other colors, a different order, or anything else - go ahead and tweak it to your liking.

### heading-setting-an-alias">Setting an alias

As you know, I set `git lol` as an alias - that is, when I run `git lol`, it executes the long command I provided previously.

How can you create an alias in Git?

The easiest way is to use `git alias`, like so:

<pre class="language-bash" tabindex="0"><code class="language-bash">git config --global alias.co checkout
```

This command sets `co` to be an alias for the command `checkout`, so you can use `git co main` instead of `git checkout main`.

To define `git lol` as an alias, you can use:

<pre class="language-bash" tabindex="0"><code class="language-bash">git config --global alias.lol 'log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit'
```

---

## ---

## heading-chapter-13-git-bisect">Chapter 13 - Git Bisect

Oops.

I have a bug.

Yes, that happens some times, to all of us. Something in my system is broken, and I can't tell why. I have been debugging for a while, but the solution is not clear.

I can tell that two weeks ago, this didn't happen. Luckily for me, I have been using Git (obviously, I know...), so I can go back in time and test a past version of my code. Indeed, in this version - everything worked fine.

But... I have made many changes in these two weeks. Alas, not just me - my entire team has contributed commits that add, delete, or modify parts of the code base. Where do I begin? Should I go over every change introduced in those two weeks?

Enter - `git bisect`.

The goal of `git bisect` is help you find the commit where a bug was introduced, in an effective manner.

### heading-how-does-git-bisect-work">How Does `git bisect` Work?

`git bisect` first asks you to mark one commit as "bad" (where the bug occurs), and another commit as "good" (one without the bug). Then, it checks out a commit halfway between these two commits, and then asks you to identify the commit as either "good" or "bad". This process is repeated until you find the first "bad" commit.

The key here is using binary search - by looking at the halfway point and deciding if it is the new top or bottom of the list of commits, you can find the right commit efficiently. Even if you have 10,000 commits to hunt through, it only takes a maximum of 13 steps to find the first commit that introduced the bug.

### heading-git-bisect-example">`git bisect` Example

For this example, I will use the repository on <a href="https://github.com/Omerr/bisect-exercise.git">https://github.com/Omerr/bisect-exercise.git</a>. To create it, I adapted the open source repository <a href="https://github.com/bast/git-bisect-exercise">https://github.com/bast/git-bisect-exercise</a> (according to its license).

In this repository, we have a single python file that is used to compute the value of pi (which is approximately `3.14`). If you run `python3 get_pi.py` on `main`, however, you will get a wrong result:

![](https://freecodecamp.org/news/content/images/2023/12/bisect_1.png)A wrong result, we have a bug" width="677" height="63" loading="lazy">
*A wrong result, we have a bug*

This branch consists of more than 500 commits.

Find the first commit on this branch by using:

<pre class="language-bash" tabindex="0"><code class="language-bash">git log --oneline | tail -n 1
```

![](https://freecodecamp.org/news/content/images/2023/12/bisect_2.png)Image" width="839" height="66" loading="lazy">
*`git log --oneline | tail -n 1`*

If you `checkout` to this commit and run `python3 get_pi.py` again, the result is correct:

![](https://freecodecamp.org/news/content/images/2023/12/commit_1_pi.png)From the first commit, the result is valid" width="1125" height="658" loading="lazy">
*From the first commit, the result is valid*

So somewhere between `HEAD` and commit `f0ea950`, a change was introduced that resulted in this wrong output.

To find it using `git bisect`, `start` the bisect process, and mark this commit as "good":

<pre class="language-bash" tabindex="0"><code class="language-bash">git bisect start
git bisect good
```

By default, `git bisect good` would take `HEAD` as the "good" commit. To mark `main` as "bad", you can use `git bisect bad main`:

![](https://freecodecamp.org/news/content/images/2023/12/bisect_3.png)Image" width="947" height="174" loading="lazy">
*`git bisect bad main`*

`git bisect` checked out commit number `251`, the "middle point" of `main` branch. Does the state in this commit produce the right or wrong output?

![](https://freecodecamp.org/news/content/images/2023/12/bisect_4.png)Trying again..." width="953" height="172" loading="lazy">
*Trying again...*

We still get the wrong output, which means we can discard commits `252` through `500` (and additional commits after that), and narrow our search to commits `2` through `251`. Mark this as `bad`:

![](https://freecodecamp.org/news/content/images/2023/12/bisect_5.png)Mark as " width="929" height="148" loading="lazy">
*Mark as `bad`*

`git bisect` checked out the "middle" commit (number `126`), and running the code again results in the right answer! This means that this commit is "good", and that the first "bad" commit is somewhere between `127` and `251`. Mark it as "good":

![](https://freecodecamp.org/news/content/images/2023/12/bisect_6.png)Mark as " width="928" height="146" loading="lazy">
*Mark as `good`*

Nice, `git bisect` takes us to commit `188`, as this is the "middle" commit between `127` and `251`. By running the code again, you can see that the result is wrong, so this is actually a "bad" commit, which means the first faulty commit is somewhere between `127` and `188`. As you can see, `git bisect` narrows down the search space by half on each iteration.

Come on, now it's your turn - keep going from here! Test the result of `python3 get_pi.py` and use `git bisect good` or `git bisect bad` to mark the commit accordingly. What is the faulty commit?

When you are done, use `git bisect reset` to stop the bisect process.

### heading-automatic-git-bisect">Automatic `git bisect`

In the previous example, you could simply run `python3 get_pi.py` and check the result. Other times, the process of validating whether a certain commit is "good" or "bad" can be tricky, error prone, or just time consuming. 

It is possible to automate the process of `git bisect` by creating code that would be executed on each iteration, returning `0` when the current commit is "good", and a value between `1-127` (inclusive), except `125`, if it should be considered "bad".

The syntax is:

<pre class="language-bash" tabindex="0"><code class="language-bash">git bisect run my_script arguments
```

As this book is not about programming and doesn't assume you know a specific programming language, I will not show an example of implementing `my_script`. The `README.md` file in the repository used in this chapter (<a href="https://github.com/Omerr/bisect-exercise.git">https://github.com/Omerr/bisect-exercise.git</a>) includes an example for a script that you can run with `git bisect run` to automatically find the faulty commit for the previous example.

---

## ---

## heading-chapter-14-other-useful-commands">Chapter 14 - Other Useful Commands

This chapter highlights a few commands that had have already been mentioned in previous chapters. I am putting them here together so that you can come back to them as a reference when needed.

### heading-git-cherry-pick">`git cherry-pick`

Introduced in <a class="post-section-overview" href="#heading-chapter-8-understanding-git-rebase">chapter 8</a>, this command takes a given commit, computes the **patch** this commit introduces by computing the difference between the parent's commit and the commit itself, and then `cherry-pick` "replays" this difference. It is like "copy-pasting" a commit, that is, the diff this commit introduced.

In <a class="post-section-overview" href="#heading-chapter-8-understanding-git-rebase">chapter 8</a> we considered the difference introduced by "Commit 5" (using `git diff main <SHA_OF_COMMIT_5>`):

![](https://freecodecamp.org/news/content/images/2023/12/git_diff_main_commit_5-1.png)Running  to observe the patch introduced by 'Commit 5'" width="791" height="362" loading="lazy">
*Running `git diff` to observe the patch introduced by "Commit 5"*

You can see that in this commit, John started working on a song called "Lucy in the Sky with Diamonds":

![](https://freecodecamp.org/news/content/images/2023/12/git_diff_main_commit_5_output-1.png)The output of  - the patch introduced by 'Commit 5'" width="1189" height="786" loading="lazy">
*The output of `git diff` - the patch introduced by "Commit 5"*

As a reminder, you can also use the command `git show` to get the same output:

<pre class="language-bash" tabindex="0"><code class="language-bash">git show <SHA_OF_COMMIT_<span class="token file-descriptor important">5>
```

Now, if you `cherry-pick` this commit, you will introduce *this change* specifically, on the active branch. You can switch to `main` branch:

<pre class="language-bash" tabindex="0"><code class="language-bash">git checkout main (or git switch main)
```

And create another branch:

<pre class="language-bash" tabindex="0"><code class="language-bash">git checkout -b my_branch (or git switch -c my_branch)
```

![](https://freecodecamp.org/news/content/images/2023/12/create_my_branch-1.png)Creating  that branches from " width="801" height="493" loading="lazy">
_Creating `my_branch` that branches from `main`_

Next, `cherry-pick` "Commit 5":

<pre class="language-bash" tabindex="0"><code class="language-bash">git cherry-pick <SHA_OF_COMMIT_<span class="token file-descriptor important">5>
```

![](https://freecodecamp.org/news/content/images/2023/12/cherry_pick_commit_5-1.png)Using  to apply the changes introduced in 'Commit 5' onto " width="801" height="685" loading="lazy">
*Using `cherry-pick` to apply the changes introduced in "Commit 5" onto `main`*

Consider the log (output of `git lol`):

![](https://freecodecamp.org/news/content/images/2023/12/git_lol_commit_5-1.png)The output of " width="1055" height="191" loading="lazy">
*The output of `git lol`*

It seems like you *copy-pasted* "Commit 5". Remember that even though it has the same commit message, and introduces the same changes, and even points to the same tree object as the original "Commit 5" in this case - it is still a different commit object, as it was created with a different timestamp.

Looking at the changes, using `git show HEAD`:

![](https://freecodecamp.org/news/content/images/2023/12/git_show_HEAD-3.png)The output of " width="862" height="643" loading="lazy">
*The output of `git show HEAD`*

They are the same as "Commit 5"'s.

### heading-git-revert-1">`git revert`

`git revert` is essentially the reverse of `git cherry-pick`, introduced in <a class="post-section-overview" href="#heading-chapter-10-additional-tools-for-undoing-changes">chapter 10</a>. This command takes the commit you're providing it with and computes the diff from its parent commit, just like `git cherry-pick`, but this time, it computes the *reverse* changes. That is, if in the specified commit you added a line, the reverse would delete the line, and vice versa.

### heading-git-add-p">`git add -p`

Staging changes is an integral part of introducing changes to Git. Sometimes, you wish to stage all changes together (with `git add .`), or perhaps stage all changes of a specific file (using `git add <file_path>`). Yet there are times where it would be convenient to stage only certain parts of modified files.

In <a href="https://freecodecamp.org/news/p/f7b355ea-3f22-4613-8218-e95c67779d9f/chapter-6-diffs-and-patches">chapter 6</a>, we introduced `git add -p`. This command allows you to stage certain parts of files, by splitting them into hunks (`p` stands for `patch`). For example, say you have this file, `my_file.py`:

![`my_file.py`](https://freecodecamp.org/news/content/images/2023/12/my_file_py_1.png)

You then modify this file - by changing text within `function_1`, and also adding a new function, `function_5`:

![`my_file.py` after the changes](https://freecodecamp.org/news/content/images/2023/12/my_file_py_2.png)

If you used `git add my_file.py` at this point, you would stage both of these changes together. In case you want to separate them into different commits, you could use `git add -p`, which splits these two changes and asks you about each one as a standalone hunk:

![`git add -p`](https://freecodecamp.org/news/content/images/2023/12/add_p_1.png)

By typing `?`, you can see what the different options stand for:

![Using a `?` to get a description of the different options](https://freecodecamp.org/news/content/images/2023/12/add_p_2.png)

In this case, say we only want to stage the change introducing `function_5`. We do not want to stage the change of `function_1`, so we select `n`:

![Not staging the change to `function_1`](https://freecodecamp.org/news/content/images/2023/12/add_p_3.png)
__

Next, we are prompted for the second change - the one introducing `function_5`. We want to stage this hunk indeed, to can do so we can type `y`.

-->

---

<TagLinks />