---
lang: ko-KR
title: Git Cheat Sheet – Helpful Git Commands with Examples
description: Article(s) > Git Cheat Sheet – Helpful Git Commands with Examples
icon: iconfont icon-git
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
      content: Article(s) > Git Cheat Sheet – Helpful Git Commands with Examples
    - property: og:description
      content: Git Cheat Sheet – Helpful Git Commands with Examples
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/git-cheat-sheet-helpful-git-commands-with-examples.html
prev: /programming/git/articles/README.md
date: 2024-08-20
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1723993272242/896730cc-3e03-43be-83d9-06d37ebab5a5.jpeg
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

<SiteInfo
  name="Git Cheat Sheet – Helpful Git Commands with Examples"
  desc="This Git Cheat Sheet will provide you with a handy list of common (and not so common) commands that will make your life easier when working with Git. You can also download the Git Cheat Sheet in PDF format (along with some other resources) for free b..."
  url="https://freecodecamp.org/news/git-cheat-sheet-helpful-git-commands-with-examples/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1723993272242/896730cc-3e03-43be-83d9-06d37ebab5a5.jpeg"/>

This Git Cheat Sheet will provide you with a handy list of common (and not so common) commands that will make your life easier when working with Git.

You can also download the Git Cheat Sheet in PDF format (along with some other resources) for free by joining my newsletter at [<FontIcon icon="iconfont icon-github"/>flaviocopes.com/access](https://flaviocopes.com/access/).

[[toc]]

---

## Preface

Welcome to this Git Cheat Sheet! It's an extensive guide I created to help empower both novice and seasoned developers with the knowledge you need to effectively utilize Git, the most popular version control system in the software industry.

This cheat sheet is designed to be your go-to resource, whether you're managing a solo project or collaborating within a large team. By providing clear explanations and practical examples, it should help demystify Git's complexities and transform them into intuitive, actionable insights.

Throughout this guide, you will explore a wide array of Git commands and concepts that form the backbone of software version control. From fundamental operations like initializing repositories and committing changes, to more advanced techniques such as branching, merging, and rebasing, this cheat sheet covers it all.

You'll also delve into specialized topics like squashing commits, bisecting to debug, handling submodules, and implementing subtrees. All this will help ensure that you're well-prepared to tackle any challenge that arises in your development process.

As you progress, you'll learn how to maintain data integrity, manage multiple working trees, and resolve merge conflicts efficiently. By the end, you'll not only have a deeper understanding of Git but also the confidence to use it to streamline your workflow and enhance collaboration with peers.

### Prerequisites

To fully benefit from this cheat sheet, you should have a foundational knowledge of command-line operations and general programming principles. You should also be familiar with using a terminal or command prompt so you can better understand and apply the examples provided. Finally, having a basic grasp of version control concepts will enhance your ability to navigate through this guide effectively.

---

## Basic Git Commands

In this section, you'll learn the fundamental Git commands that serve as the building blocks for efficiently managing and navigating your Git repositories.

Git is a distributed version control system that's essential for tracking changes in your codebase, collaborating with other developers, and maintaining the integrity of your project history. Understanding these basic commands is crucial for anyone looking to leverage the full power of Git in their development workflow.

We'll explore a variety of commands that cover key aspects of Git usage, such as initializing new repositories, committing changes, branching, and merging.

Each command is explained with a short sentence that describes its purpose along with its syntax, so you can effectively use it in real-world scenarios. Whether you're setting up a new project or working on an existing codebase, these commands will help you keep your work organized and maintain a seamless workflow.

::: info git help

The `git help` command prints Git help information. It provides a quick reference to Git's basic usage and the most commonly used Git commands.

This command is useful when you need a quick reminder of Git's functionality or want to explore available commands.

You can also use `git help <COMMAND>` to display help information for any specific Git command.

For example, `git help git` prints the Git help specifically for the Git command itself.

These help commands are valuable resources for both beginners and experienced users to quickly access information about Git's features and usage.

:::

::: info <code>git version</code>

The `git version` command displays the version of Git installed on your system.

This command is useful for verifying which version of Git you are currently using, which can be important for compatibility with certain features or when troubleshooting issues.

:::

::: info <code>git init</code>

The command `git init` is used to initialize a new Git repository in the current directory. 
 
This command creates a new subdirectory named <FontIcon icon="fas fa-folder-open"/>`.git` that contains all the necessary metadata for the new repository.

It's typically the first command you run when starting a new project that you want to manage with Git.
 
After running this command, you can begin tracking files and making commits in your new Git repository.

:::

::: info <code>git clone &lt;REPOSITORY_URL&gt;</code>

The `git clone <REPOSITORY_URL>` command creates a copy of a remote Git repository on your local machine.

It downloads all the files, branches, and commit history, allowing you to start working with the project immediately.

:::

::: info <code>git status</code>

The `git status` command shows the current state of the Git repository's working directory and staging area.

It displays information about which files have been modified, added, or deleted, and whether these changes are staged for the next commit.

:::

---

## The Working Directory and the Staging Area

The working directory and the staging area are fundamental concepts in Git that play crucial roles in the version control process.

The working directory is the environment where you actively make changes to your files, representing the current state of your project. It is essentially a sandbox where you can freely edit, delete, and create files as you develop your project. But these changes are local to your machine and not yet part of the version history.

On the other hand, the staging area, also known as the index, serves as an intermediary space between the working directory and the repository. It acts as a checkpoint where you can selectively organize changes before they are committed to the repository's history. This allows you to prepare a set of changes that are logically related, ensuring that each commit is meaningful and coherent.

The commands below will help you manage changes between the working directory and the staging area. They'll let you add files to the staging area, remove them, or modify the existing ones, giving you control over what will be included in the next commit.

By using these commands, you can ensure that only the intended updates are committed, making your project's history clear and organized. This process is essential for maintaining a clean and understandable history, as it allows you to track the evolution of your project with precision and clarity.

::: info <code>git checkout .</code>

This command discards all changes in the working directory, reverting files to their last committed state.

This command is useful for quickly undoing local modifications and restoring the working directory to a clean state.

:::

::: info <code>git reset -p</code>

This command allows you to interactively reset changes in the working directory.
 
It provides a way to selectively undo modifications, giving you fine-grained control over which changes to keep or discard.

:::

::: info <code>git add &lt;FILE&gt;</code>

This command adds a specific file to the staging area in Git.

This prepares the file for inclusion in the next commit, allowing you to selectively choose which changes to include in your version history.

:::

::: info <code>git add -p</code>

Allows you to interactively stage changes from your working directory by breaking them into chunks (hunks). 

This lets you review and selectively add parts of the changes to the index before committing.

:::

::: info <code>git add -i</code>

Enters the interactive mode of adding files.

Provides a text-based interactive menu where you can select various actions to perform, such as staging individual changes, updating files, or viewing the status.

:::

::: info <code>git rm &lt;FILE&gt;</code>

Removes a file from the working directory and stages the removal.

:::

::: info <code>git rm --cached &lt;FILE&gt;</code>

Removes the specified file from the staging area (index) but leaves it intact in your working directory. 

This effectively un-tracks the file from version control.

:::

::: info <code>git mv &lt;OLD_PATH&gt; &lt;NEW_PATH&gt;</code>

This command is used to move or rename a file or directory within a Git repository.

It automatically stages the change, making it ready for the next commit.

:::

::: info <code>git commit -m "&lt;MESSAGE&gt;"</code>

This command is used to create a new commit in your Git repository.

It saves the changes that have been staged (added to the index) along with a descriptive message. 

This message should briefly explain what changes were made in this commit.

:::

---

## Working with Branches

Git branches are parallel lines of development within a Git repository. They allow you to work on different features, bug fixes, or experiments independently from the main codebase.

Each branch can have its own commit history, and changes made in one branch do not affect others until they are merged. This helps you organize your work, and facilitates collaboration by enabling multiple developers to work on different aspects of a project simultaneously without interfering with each other's progress.

In this section we'll introduce commands that allow you to create, switch, list, rename, and delete branches in your Git repository. These commands help manage parallel lines of development, enabling you to work on different features or bug fixes independently. You'll also learn how to display commit histories and branch relationships, as well as manage remote branches.

::: info <code>git branch &lt;BRANCH_NAME&gt;</code>

Creates a new branch.

:::

::: info <code>git checkout &lt;BRANCH_NAME&gt;</code>

Switches to the specified branch and updates the working directory.

:::

::: info <code>git branch</code>

Lists all branches.

:::

::: info <code>git branch -d &lt;BRANCH_NAME&gt;</code>

Deletes a branch.

:::

::: info <code>git push --delete &lt;REMOTE&gt; &lt;BRANCH&gt;</code>

Deletes a remote branch.

:::

::: info <code>git branch -m &lt;OLD_NAME&gt; &lt;NEW_NAME&gt;</code>

Renames a branch.

:::

::: info <code>git checkout -b &lt;NEW_BRANCH&gt;</code>

Creates and switches to a new branch named `<NEW_BRANCH>`, based on the current branch.

:::

::: info <code>git switch &lt;BRANCH&gt;</code>

Switches the working directory to the specified branch.

:::

::: info <code>git show-branch &lt;BRANCH&gt;</code>

Displays a summary of the commit history and branch relationships for all or selected branches, showing where each branch diverged.

:::

::: info <code>git show-branch --all</code>

Same as above, but for all branches and their commits.

:::

::: info <code>git branch -r</code>

Lists all remote branches that your local repository is aware of.

:::

::: info <code>git branch -a</code>

Lists all branches in your repository, including both local and remote branches (the ones the local repository is aware of).

:::

::: info <code>git branch --merged</code>

Lists all branches that have been fully merged into the current branch, and can be safely deleted if no longer needed.

:::

::: info <code>git branch --no-merged</code>

Lists all branches that have not been fully merged into your current branch, showing branches with changes that haven't been integrated yet.

:::

---

## Merging in Git

The git merge command is used to combine the changes from one branch into another branch. It integrates the histories of both branches, creating a new commit that includes the changes from both sources.

This process allows multiple lines of development to be brought together, facilitating collaboration and ensuring that all updates are incorporated into the main project.

During a merge, conflicts may arise if changes overlap, requiring manual resolution to ensure a coherent final result.

::: info <code>git merge &lt;BRANCH&gt;</code>

Integrates the changes from the specified branch into your current branch, combining their histories.

:::

::: info <code>git merge --no-ff &lt;BRANCH&gt;</code>

Merges the specified branch into your current branch, always creating a new merge commit even if a fast-forward merge is possible.

:::

::: info <code>git merge --squash &lt;BRANCH&gt;</code>

Combines all the changes from the specified branch into a single commit, preparing the changes for a commit in the current branch without merging the branch’s history.

This allows you to manually edit the commit message.

:::

::: info <code>git merge --abort</code>

Cancels an ongoing merge process and restores the state of your working directory and index to what it was before the merge started.

:::

::: info <code>git merge -s ours &lt;BRANCH&gt;</code>

> or `git merge —-strategy=ours <BRANCH>`

These commands are functionally the same, but the second is the expanded (more explicit) version, while `git merge -s ours <BRANCH>` is the shorthand version (which is commonly used). You'll see this a few times throughout this guide.

The `git merge —-strategy=ours <BRANCH>` command (`git merge -s ours <BRANCH>` for short) performs a merge using the "ours" strategy, which keeps the current branch's changes and discards changes from the specified branch.

This effectively merges the histories without integrating the changes from the other branch.

:::

::: info <code>git merge --strategy=theirs &lt;BRANCH&gt;</code>

Merges the specified branch into the current branch using the "theirs" strategy, which resolves all conflicts by favoring changes from the branch being merged.

Note that the "theirs" strategy is not a built-in strategy and usually requires custom scripting or is used with tools to handle conflict resolution.

:::

---

## Git Remotes

Git remotes are references to remote repositories, which are versions of your project hosted on the internet or another network. They enable collaboration by allowing multiple users to share and sync changes with a central repository.

Common operations with remotes include `git fetch` to retrieve updates, `git pull` to fetch and merge changes, and `git push` to upload local commits to the remote repository.

Managing remotes involves adding, removing, and renaming remote connections, as well as configuring URLs for seamless collaboration.

::: info <code>git fetch</code>

Fetches changes from a remote repository but does not merge them into your current branch.

:::

::: info <code>git pull</code>

Fetches changes from a remote repository and immediately merges them into your current branch.

:::

::: info <code>git push</code>

Uploads your local branch's changes to a remote repository.

:::

::: info <code>git remote</code>

Lists the names of remote repositories configured for your local repository.

:::

::: info <code>git remote -v</code>

Displays the URLs of the remote repositories associated with your local repository, showing both the fetched and pushed URLs.

:::

::: info <code>git remote add &lt;NAME&gt; &lt;REPOSTIORY_URL&gt;</code>

Adds a new remote repository with the specified name and URL to your local repository configuration.

:::

::: info <code>git remote remove &lt;NAME&gt;</code>

> or `git remote rm <NAME>`

Deletes the specified remote repository connection from your local git configuration. 

`git remote rm <NAME>` is the shorthand version of the command.

:::

::: info <code>git remote rename &lt;OLD_NAME&gt; &lt;NEW_NAME&gt;</code>

Changes the name of an existing remote repository connection in your local Git configuration

:::

::: info <code>git remote set-url &lt;NAME&gt; &lt;NEW_URL&gt;</code>

Changes the URL of an existing remote repository connection in your local Git configuration.

:::

::: info <code>git fetch &lt;REMOTE&gt;</code>

Retrieves the latest changes from the specified remote repository, updating your local copy of the remote branches without merging them into your local branches.

:::

::: info <code>git pull &lt;REMOTE&gt;</code>

Fetches changes from the specified remote repository and merges them into your current branch.

:::

::: info <code>git remote update</code>

Fetches updates for all remotes tracked by the repository.

:::

::: info <code>git push &lt;REMOTE&gt; &lt;BRANCH&gt;</code>

Uploads the specified branch from your local repository to the given remote repository.

:::

::: info <code>git push &lt;REMOTE&gt; --delete &lt;BRANCH&gt;</code>

Removes the specified branch from the remote repository.

:::

::: info <code>git remote show &lt;REMOTE&gt;</code>

Displays detailed information about the specified remote repository, including its URL, fetch and push configurations, and the branches it tracks.

:::

::: info <code>git ls-remote &lt;REPOSITORY&gt;</code>

Lists references (such as branches and tags) and their commit IDs from the specified remote repository. 

This command allows you to view the branches and tags available in a remote repository without cloning it.

:::

::: info <code>git push origin &lt;BRANCH&gt; --set-upstream</code>

Pushes the local branch `<BRANCH>` to the remote repository origin and sets up the local branch to track the remote branch. 

This lets future git push and git pull commands default to this remote branch.

:::

::: info <code>git remote add upstream &lt;REPOSITORY&gt;</code>

Adds a new remote named upstream to your local repository, pointing to the specified `<REPOSITORY>`.

This is commonly used to track the original repository from which you forked, while origin typically refers to your own fork.

:::

::: info <code>git fetch upstream</code>

Retrieves updates from the upstream remote repository, updating your local references to the branches and tags from that remote without modifying your working directory or merging changes.

:::

::: info <code>git pull upstream &lt;BRANCH&gt;</code>

Fetches updates from the `<BRANCH>` of the upstream remote repository and merges those changes into your current branch. 

This is often used to integrate changes from the original repository into your own local branch.

:::

::: info <code>git push origin &lt;BRANCH&gt;</code>

Uploads the local branch `<BRANCH>` to the origin remote repository, making your branch and its commits available on the remote.

:::

---

## Amending Commits

Amending Git commits allows you to modify the most recent commit, typically to correct or update its contents or message. You can do this using the `git commit --amend` command, which opens the commit in your default text editor for changes.

Amending is particularly useful for fixing small mistakes or adding forgotten changes without creating a new commit, resulting in a cleaner and more accurate commit history.

::: info <code>git commit --amend</code>

Modifies the most recent commit, combining staged changes.

:::

::: info <code>git commit --amend -m "&lt;MESSAGE&gt;"</code>

Amends the commit message of the most recent commit.

:::

::: info <code>git commit --fixup=HEAD</code>

Creates a new commit with the `--fixup` option that is intended to correct or amend the most recent commit (`HEAD`). 

The new commit is marked with a `fixup!` prefix in the commit message and will be used to automatically fix or amend the specified commit during an interactive rebase.

:::

---

## Stashing in Git

Git stashing is a feature that allows you to temporarily save changes in your working directory that are not yet ready to be committed.

By using the git stash command, you can set aside these changes and revert your working directory to a clean state, enabling you to switch branches or perform other tasks without losing progress. Later, you can reapply the stashed changes with git stash apply or git stash pop, allowing you to continue where you left off.

This functionality is especially useful for managing work in progress when you need to address an urgent issue or experiment with a different code path.

::: info <code>git stash</code>

Temporarily saves your uncommitted changes, allowing you to switch branches or perform other operations without committing incomplete work.

There's an older version, `git stash save`, that allows you to specify a custom message. 

But it's largely been deprecated in favor of the simpler `git stash`.

:::

::: info <code>git stash -m "&lt;MESSAGE&gt;"</code>

Same as above, but stores changes with a message. It also has an older version, `git stash save "message"`, but `git stash -m "message"` is preferred for versions of Git 2.13 and newer.

:::

::: info <code>git stash show</code>

Displays a summary of the changes in the most recent stash entry, showing which files were modified.

:::

::: info <code>git stash list</code>

Shows all the stashed changes in your repository, displaying them in a numbered list.

:::

::: info <code>git stash pop</code>

Applies the most recent stash and then immediately removes it from the stash list.

:::

::: info <code>git stash drop</code>

Removes the most recent stash entry from the stash list without applying it to your working directory.

:::

::: info <code>git stash apply</code>

Reapplies the most recently stashed changes to your working directory without removing them from the stash list.

:::

::: info <code>git stash clear</code>

Clears and removes all stashed entries, permanently deleting all saved changes in your stash.

:::

::: info <code>git stash branch &lt;BRANCH&gt;</code>

Creates a new branch named `<BRANCH>` from the commit where you were before stashing your changes. 

Then it applies the stashed changes to that new branch.

This command effectively allows you to continue working on your stashed changes in a separate branch, preserving the original context and changes.

:::

---

## Git Tagging

Git tagging is a feature that allows you to mark specific points in your repository's history as important with a meaningful name, often used for releases or significant milestones.

Unlike branches, tags are typically immutable and do not change, serving as a permanent reference to a particular commit.

There are two types of tags in Git: lightweight tags, which are simple pointers to a commit, and annotated tags, which store additional metadata like the tagger's name, email, date, and a message.

Tags can be easily created, listed, pushed to remote repositories, and deleted, providing a convenient way to manage and reference key points in your project's development timeline.

::: info <code>git tag &lt;TAG_NAME&gt;</code>

Creates a new tag with the specified name pointing to the current commit (typically used to mark specific points in the commit history, like releases).

:::

::: info <code>git tag -a &lt;TAG_NAME&gt; -m "&lt;MESSAGE&gt;"</code>

Creates an annotated tag with the specified name and message, which includes additional metadata like the tagger's name, email, and date, and points to the current commit.

:::

::: info <code>git tag -d &lt;TAG_NAME&gt;</code>

Deletes the specified tag from your local repository.

:::

::: info <code>git tag -f &lt;TAG&gt; &lt;COMMIT&gt;</code>

Forces a tag to point to a different commit.

:::

::: info <code>git show &lt;TAG_NAME&gt;</code>

Displays detailed information about the specified tag, including the commit it points to and any associated tag messages or annotations.

:::

::: info <code>git push origin &lt;TAG_NAME&gt;</code>

Uploads the specified tag to the remote repository, making it available to others.

:::

::: info <code>git push origin --tags</code>

Pushes all local tags to the remote repository, ensuring that all tags are synchronized with the remote.

:::

::: info <code>git push --follow-tags</code>

Pushes both commits and tags.

:::

::: info <code>git fetch --tags</code>

Retrieves all tags from the default remote repository and updates your local repository with them, without affecting your current branches.

:::

---

## Reverting Changes in Git

Reverting changes in Git involves undoing modifications made to a repository's history. You can do this using several commands, such as `git revert`. It creates a new commit that negates the changes of a specified previous commit, effectively reversing its effects while preserving the commit history.

Another method is using `git reset`, which changes the current HEAD to a specified commit and can update the staging area and working directory depending on the chosen options (`--soft`, `--mixed`, or `--hard`).

You can also use `git checkout` to discard changes in the working directory, reverting files to their state in the last commit.

These tools provide flexibility in managing and correcting changes, ensuring the repository remains accurate and clean.

::: info <code>git checkout -- &lt;FILE&gt;</code>

Discards changes in the specified file from the working directory, reverting it to the state of the last commit and effectively undoing any modifications that haven't been staged.

:::

::: info <code>git revert &lt;COMMIT&gt;</code>

Creates a new commit that undoes the changes in the specified commit, effectively reversing its effects while preserving the history.

:::

::: info <code>git revert -n &lt;COMMIT&gt;</code>

Reverts a commit but does not commit the result.

:::

::: info <code>git reset</code>

Resets the current HEAD to the specified state, and optionally updates the staging area and working directory, depending on the options used (`--soft`, `--mixed`, or `--hard`).

:::

::: info <code>git reset --soft &lt;COMMIT&gt;</code>

Moves HEAD to the specified commit, while keeping the index (staging area) and working directory unchanged, so all changes after the specified commit remain staged for committing. 

This is useful when you want to undo commits but keep the changes ready to be committed again.

:::

::: info <code>git reset --mixed &lt;COMMIT&gt;</code>

Moves HEAD to the specified commit and updates the index (staging area) to match that commit. 

But it leaves the working directory unchanged, so changes after the specified commit are kept but are untracked.

:::

::: info <code>git reset --hard &lt;COMMIT&gt;</code>

Moves HEAD to the specified commit and updates both the index (staging area) and working directory to match that commit. 

It discards all changes and untracked files after the specified commit.

:::

---

## Viewing History Logs

Git history refers to the record of all changes made to a repository over time. It includes a chronological sequence of commits, each representing a snapshot of the repository at a specific point.

This history allows you to track modifications, understand the evolution of the codebase, and collaborate effectively by providing a detailed log of who made changes, when, and why.

Tools like git log help you navigate this history, offering insights into the development process and aiding in debugging and project management.

::: info <code>git log</code>

Displays the commits log.

:::

::: info <code>git log --oneline</code>

Displays a summary of commits with one line each.

:::

::: info <code>git log --graph</code>

Shows a graphical representation of the commit history.

:::

::: info <code>git log --stat</code>

Displays file statistics along with the commit history.

:::

::: info <code>git log --pretty=format:"%h %s"</code>

Formats the log output according to the specified format.

:::

::: info <code>git log --pretty=format:"%h - %an, %ar : %s"</code>

Provides a more human-readable format for logs.

:::

::: info <code>git log --author=&lt;AUTHOR&gt;</code>

Shows commits made by the specified author.

:::

::: info <code>git log --before=&lt;DATE&gt;</code>

Shows commits made before the specified date.

:::

::: info <code>git log --after=&lt;DATE&gt;</code>

Shows commits made after the specified date (same as `git log --since=<DATE>`)

:::

::: info <code>git log --cherry-pick</code>

Omits commits that are equivalent between two branches.

:::

::: info <code>git log --follow &lt;FILE&gt;</code>

Shows commits for a file, including renames.

:::

::: info <code>git log --show-signature</code>

Displays GPG signature information for commits.

:::

::: info <code>git shortlog</code>

Summarizes git log output by author.

:::

::: info <code>git shortlog -sn</code>

Summarizes git log output by author, with commit counts.

:::

::: info <code>git log --simplify-by-decoration</code>

Shows only commits that are referenced by tags or branches.

:::

::: info <code>git log --no-merges</code>

Omits merge commits from the log.

:::

::: info <code>git whatchanged</code>

Lists commit data in a format similar to a commit log.

:::

::: info <code>git diff-tree --pretty --name-only --root &lt;COMMIT&gt;</code>

Shows detailed information for a commit tree.

:::

::: info <code>git log --first-parent</code>

Only shows commits of the current branch and excludes those merged from other branches.

:::

---

## Git Diffs

Git diffs are a feature in Git that allows you to see the differences between various states in your repository. This can include differences between your working directory and the staging area, between the staging area and the last commit, or between any two commits or branches.

By displaying line-by-line changes in files, diffs help you review modifications before committing, merging, or applying changes, thus ensuring accuracy and consistency in your codebase.

::: info <code>git diff</code>

Shows the differences between various states in your repository, such as between your working directory and the index (staging area), between the index and the last commit, or between two commits.

It displays line-by-line changes in files, helping you review modifications before committing or merging.

:::

::: info <code>git diff --stat</code>

Shows a summary of changes between your working directory and the index (staging area), helping you see what files have been modified and how many lines have been added or removed.

:::

::: info <code>git diff --stat &ltCOMMIT&gt;</code>

Views changes between a commit and the working directory.

:::

::: info <code>git diff --stat &ltCOMMIT1&gt; &ltCOMMIT2&gt;</code>

Provides a summary of changes between two commits, showing which files were altered and the extent of changes between them.

:::

::: info <code>git diff --stat &ltBRANCH1&gt; &ltBRANCH2&gt;</code>

Summarizes the differences between the two branches, indicating the files changed and the magnitude of changes.

:::

::: info <code>git diff --name-only &ltCOMMIT&gt;</code>

Shows only the names of files that changed in the specified commit.

:::

::: info <code>git diff --cached</code>

Shows the differences between the staged changes (index) and the last commit, helping you review what will be included in the next commit.

:::

::: info <code>git diff HEAD</code>

Shows the differences between the working directory and the latest commit (HEAD), allowing you to see what changes have been made since the last commit.

:::

::: info <code>git diff &ltBRANCH1&gt; &ltBRANCH2&gt;</code>

Shows the differences between the tips of two branches, highlighting the changes between the commits at the end of each branch.

:::

::: info <code>git difftool</code>

Launches a diff tool to compare changes.

:::

::: info <code>git difftool &ltCOMMIT1&gt; &ltCOMMIT2&gt;</code>

Uses the diff tool to show the differences between two specified commits.

:::

::: info <code>git difftool &ltBRANCH1&gt; &ltBRANCH2&gt;</code>

Opens the diff tool to compare changes between two branches.

:::

::: info <code>git cherry &ltBRANCH&gt;</code>

Compares the commits in your current branch against another branch and shows which commits are unique to each branch. It is commonly used to identify which commits in one branch have not been applied to another branch.

:::

---

## Git Flow

Git Flow is a branching model for Git that provides a robust framework for managing larger projects. It defines a strict branching strategy designed around the project release cycle, with two primary branches (main and develop) and supporting branches for features, releases, and hotfixes.

This model helps in organizing work, ensuring a clean and manageable history, and facilitating collaboration by clearly defining roles and processes for different types of development work.

::: info <code>git flow init</code>

Initializes a repository for a git-flow branching model.

:::

::: info <code>git flow feature start &lt;FEATURE&gt;</code>

Starts a new feature branch in git-flow.

:::

::: info <code>git flow feature finish &lt;FEATURE&gt;</code>

Finishes a feature branch in git-flow.

:::

---

## Exploring Git References

Git references, often referred to as refs, are pointers to specific commits or objects within a Git repository. These can include branches, tags, and other references like HEAD, which points to the current commit checked out in your working directory.

References are used to keep track of the structure and history of the repository. They help Git efficiently manage and navigate different points in the project's timeline.

Refs also provide a way to name and refer to particular commits, making it easier to work with and manipulate the repository's history.

::: info <code>git show-ref --heads</code>

Lists references to all heads (branches).

:::

::: info <code>git show-ref --tags</code>

Lists references to all tags.

:::

---

## How to Configure Git

Git configuration involves setting up various options and preferences that control the behavior of your Git environment. This can include specifying your username and email, setting up default text editors, creating aliases for commonly used commands, and configuring global ignore files.

You can apply configuration settings at different levels: global (affecting all repositories on your system), local (affecting a single repository), and system-wide. These settings ensure a customized and consistent user experience, streamline workflows, and enhance the overall efficiency of version control operations.

::: info <code>git config --global user.name "Your Name"</code>

Sets the user name on a global level.

:::

::: info <code>git config --global user.email "your_email@example.com"</code>

Sets the user email on a global level.

:::

::: info <code>git config --global core.editor &lt;EDITOR&gt;</code>

Sets the default text editor.

:::

::: info <code>git config --global core.excludesfile &lt;FILE&gt;</code>

Sets the global ignore file.

:::

::: info <code>git config --list</code>

Lists all the configuration settings.

:::

::: info <code>git config --list --show-origin</code>

Lists all config variables, showing their origins.

:::

::: info <code>git config &lt;KEY&gt;</code>

Retrieves the value for the specified key.

:::

::: info <code>git config --get &lt;KEY&gt;</code>

Retrieves the value for the specified configuration key.

:::

::: info <code>git config --unset &lt;KEY&gt;</code>

Removes the specified configuration key.

:::

::: info <code>git config --global --unset &lt;KEY&gt;</code>

Removes the specified configuration key globally.

:::

---

## Git Security

Git GPG security involves using GNU Privacy Guard (GPG) to sign commits and tags, ensuring their authenticity and integrity. By configuring a GPG key and enabling automatic signing, you can verify that commits and tags were created by a trusted source. This helps prevent tampering and ensures the integrity of the repository's history.

This practice enhances security by providing cryptographic assurance that the changes come from a legitimate contributor.

::: info <code>git config --global user.signingKey &lt;KEY&gt;</code>

Configures the GPG key for signing commits and tags.

:::

::: info <code>git config --global commit.gpgSign true</code>

Automatically signs all commits with GPG.

:::

---

## How to Set Aliases in Git

Git aliases are custom shortcuts that you can create to simplify and speed up your workflow by mapping longer Git commands to shorter, more memorable names.

By configuring aliases in your Git settings, you can quickly execute frequently used commands with less typing. This not only enhances productivity but also reduces the likelihood of errors.

For example, you can set an alias like git st to replace `git status`, or `git co` to replace `git checkout`.

You can define aliases globally to apply across all repositories or locally for individual projects, providing flexibility in how you streamline your Git operations.

::: info <code>git config --global alias.ci commit</code>

Sets git ci as an alias for git commit.

:::

::: info <code>git config --global alias.st status</code>

Sets git st as an alias for git status.

:::

::: info <code>git config --global alias.co checkout</code>

Sets git co as an alias for git checkout.

:::

::: info <code>git config --global alias.br branch</code>

Sets git br as an alias for git branch.

:::

::: info <code>git config --global alias.graph "log --graph --all --oneline --decorate"</code>

Creates an alias for a detailed graph of the repository history.

:::

---

## Rebasing in Git

Git rebasing re-applies your changes on top of another branch's history, creating a cleaner and more linear project history.

In practice, this helps integrate updates smoothly by avoiding unnecessary merge commits, ensuring that the commit sequence is straightforward, and making it easier to understand the evolution of the project.

::: info <code>git rebase &lt;BRANCH&gt;</code>

The git rebase command is used to re-apply commits on top of another base tip. It allows you to move or combine a sequence of commits to a new base commit. This is commonly used to:
 
1. Keep a linear project history.
2. Integrate changes from one branch into another.
3. Update a feature branch with the latest changes from the main branch.
 
The basic usage is `git rebase <BRANCH>`, which will rebase the current branch onto the specified branch.

:::

::: info <code>git rebase --interactive &lt;BRANCH&gt;</code>

Starts an interactive rebase session, allowing you to modify commits starting from `<BASE>` up to the current HEAD. This lets you reorder, squash, edit, or delete commits, providing a way to clean up and refine commit history before pushing changes.

Shorter version: `git rebase -i <BRANCH>`

:::

::: info <code>git rebase --continue</code>

Continues the rebase process after resolving conflicts.

:::

::: info <code>git rebase --abort</code>

Aborts the rebase process and returns to the original branch.

:::

::: info <code>git fetch --rebase</code>

Fetches from the remote repository and rebases local changes.

:::

---

## What is Cherry-Picking?

Git cherry-picking is a process that allows you to apply the changes introduced by a specific commit from one branch into another branch. This is particularly useful when you want to selectively incorporate individual changes from different branches without merging the entire branch.

By using the git cherry-pick command, you can isolate and integrate only the desired commits, ensuring that specific modifications are included in your current branch while avoiding potential conflicts and unwanted changes from other parts of the branch.

::: info <code>git cherry-pick &lt;COMMIT&gt;</code>

Applies the changes introduced by an existing commit.

:::

::: info <code>git cherry-pick --continue</code>

Continues cherry-picking after resolving conflicts.

:::

::: info <code>git cherry-pick --abort</code>

Aborts the cherry-pick process.

:::

::: info <code>git cherry-pick --no-commit &lt;COMMIT&gt;</code>

Cherry-picks a commit without automatically committing and allows further changes. Shorter version: `git cherry-pick -n <COMMIT>`

:::

---

## Patching in Git

Git patching is a method used to apply changes from one repository to another or from one branch to another within the same repository. It involves creating patch files, which are text files representing differences between commits or branches. These patch files can then be applied to a repository using commands like `git apply` or `git am`, allowing changes to be transferred and integrated without directly merging branches.

Patching is particularly useful for sharing specific changes or updates across different codebases, ensuring that only the intended modifications are applied.

::: info <code>git apply &lt;PATCH_FILE&gt;</code>

Applies changes to the working directory from a patch file.

:::

::: info <code>git apply --check</code>

Checks if patches can be applied cleanly.

:::

::: info <code>git format-patch &lt;SINCE_COMMIT&gt;</code>

Creates patch files for each commit since the specified commit.

:::

::: info <code>git am &lt;PATCH_FILE&gt;</code>

Applies patches from a mailbox.

:::

::: info <code>git am --continue</code>

Continues applying patches after resolving conflicts.

:::

::: info <code>git am --abort</code>

Aborts the patch application process.

:::

::: info <code>git diff > &lt;FILE.PATCH&gt;</code>

Creates a patch file from differences.

:::

---

## Relative Dates in Git

Git relative dates allow users to refer to specific points in the repository's history using human-readable time expressions. For instance, commands like main@{1.week.ago} or @{3.days.ago} enable you to access the state of a branch or view changes made since a certain time period relative to the current date.

This feature simplifies navigating the repository's timeline by using intuitive terms like "yesterday," "2 weeks ago," or specific dates, making it easier to track and manage the evolution of the codebase without needing to remember exact commit hashes or timestamps.

::: info <code>git show main@{1.week.ago}</code>

Lets you see the state of your main branch one week ago.

:::

::: info <code>git diff @{3.days.ago}</code>

Shows what changes you've made in the last 3 days.

:::

::: info <code>git checkout main@{2.weeks.ago}</code>

Checks out your repository as it was 2 weeks ago.

::::

::: info <code>git log @{1.month.ago}..HEAD</code>

Shows you the log of commits from 1 month ago until now.

`@{2024-06-01}`

`@{yesterday}`

`@{"1 week 2 days ago"}`
 
Other usage examples.

:::

---

## Git Blame

Git blaming is a feature in Git that identifies the last modification made to each line of a file, attributing changes to specific commits and authors. You can do this using the `git blame` command, which provides a detailed annotation of the file, showing who made changes and when they were made.

This tool is particularly useful for tracking the history of a file, understanding the evolution of the code, and identifying the source of bugs or changes.

By pinpointing the exact commit and author responsible for each line, developers can gain insights into the development process and facilitate better collaboration and accountability within a team.

::: info <code>git blame &lt;FILE&gt;</code>

Shows the last modification for each line of a file.

:::

::: info <code>git blame &lt;FILE&gt; -L &lt;START&gt;,&lt;END&gt;</code>

Limits the blame output to the specified line range.

:::

::: info <code>git blame &lt;FILE&gt; &lt;COMMIT&gt;</code>

Shows the blame information up to the specified commit.

:::

::: info <code>git blame &lt;FILE&gt; -C -C</code>

Shows which revisions and authors last modified each line of a file, with copying detection.

The `-C` option detects lines moved or copied within the same file. 

Using it once (`-C`) detects lines moved or copied within the same file. 

Using the `-C` option twice (`-C -C`) makes Git inspect unmodified files as candidates for the source of copy. 

This means it will try to find the origin of copied lines not just in the same file but in other files as well.

:::

::: info <code>git blame &lt;FILE&gt; --reverse</code>

Works backwards, showing who last altered each line in the specified file.

:::

::: info <code>git blame &lt;FILE&gt; --first-parent</code>

Shows who most recently modified each line in a file, following only the first parent commit for merge changes.

:::

---

## Archiving in Git

Git archiving is a feature that allows you to create archive files, such as .tar or .zip, containing the contents of a specific commit, branch, or tag. This is useful for packaging a snapshot of your repository at a specific point in time, enabling you to distribute or backup the repository's state without including the entire Git history.

The git archive command is typically used for this purpose, providing a convenient way to export the current state of the project into a portable format.

::: info <code>git archive &lt;FORMAT&gt; &lt;TREE-ISH&gt;</code>

Creates an archive file (for example, a .tar or .zip file) containing the contents of the specified tree-ish (like a commit, branch, or tag) in the given format. For example:

- `git archive --format=tar HEAD` creates a .tar archive of the current commit (HEAD).
- `git archive --format=zip v1.0` creates a .zip archive of the files in the v1.0 tag.

This command is useful for packaging a snapshot of your repository at a specific point in time.

:::

---

## How to Track Files in Git

Git tracking refers to the process of monitoring and managing the files in a repository.

The command `git ls-files` lists all files that are being tracked by Git, providing a clear view of the files that are currently under version control. On the other hand, `git ls-tree <BRANCH>` displays the contents of a tree object for a specified branch, showing the structure and files at that point in the repository.

Together, these commands help developers understand which files are included in the repository and how they are organized, ensuring efficient tracking and management of the project's codebase.

::: info <code>git ls-files</code>

Lists all tracked files.

:::

::: info <code>git ls-tree &lt;BRANCH&gt;</code>

Lists the contents of a tree object.

:::

---

## Index Manipulation in Git

Git index manipulation involves managing the staging area (also known as the index) where changes are prepared before committing. This can include marking files as "assume unchanged" to temporarily ignore changes, or resetting these markings to track changes again.

Index manipulation commands, such as `git update-index`, allow you to control which files are included in the next commit, providing flexibility in handling changes and optimizing the workflow for specific tasks.

::: info <code>git update-index --assume-unchanged &lt;FILE&gt;</code>

Marks a file as assume unchanged.

:::

::: info <code>git update-index --no-assume-unchanged &lt;FILE&gt;</code>

Unmarks a file as assume unchanged.

:::

---

## Squashing in Git

Git squashing is the process of combining multiple commits into a single commit. Devs often do this to clean up the commit history before merging changes into a main branch, making the history more concise and easier to read.

Squashing can be performed using the interactive rebase command (`git rebase -i`), which lets you selectively merge, reorder, or edit commits. By squashing commits, you can consolidate redundant or minor changes, presenting a clearer narrative of the development process.

::: info <code>git rebase -i HEAD~&lt;N&gt;</code>

Squashes commits interactively.

:::

---

## Data Integrity in Git

Git data integrity refers to the mechanisms and processes Git employs to ensure the accuracy and consistency of data within a repository.

Git uses cryptographic hashes (SHA-1 or SHA-256) to uniquely identify objects such as commits, trees, and blobs. This hashing not only provides a unique identifier for each object but also ensures that any modification to the object's content will result in a different hash, thus detecting any corruption or tampering.

You can use commands like `git fsck` to verify the connectivity and validity of objects in the database, ensuring the overall health and integrity of the repository.

::: info <code>git fsck</code>

Verifies the connectivity and validity of objects in the database.

:::

::: info <code>git fsck --unreachable</code>

Finds objects in the repository that are not reachable from any reference.

:::

::: info <code>git prune</code>

Removes unreachable objects.

:::

::: info <code>git gc</code>

Runs a garbage collection process.

Git garbage collection is a maintenance process that cleans up and optimizes the repository by removing unnecessary files and compressing file revisions to save space.

This process, triggered by the `git gc` command, consolidates and deletes unreachable objects, such as orphaned commits and unreferenced blobs, ensuring the repository remains efficient and performant.

Regular garbage collection helps manage storage effectively and keeps the repository's structure organized.

:::

---

## Cleaning Up in Git

Cleaning up in Git involves removing unnecessary files, references, and branches that are no longer needed. This helps to keep your repository organized and efficient.

Regular cleanup activities, such as pruning remote-tracking branches, deleting untracked files, and removing stale references, ensure that your repository remains manageable and free from clutter.

In practice, these actions can improve performance, reduce storage requirements, and make it easier to navigate and work within your project.

::: info <code>git fetch --prune</code>

Removes references that no longer exist on the remote.

:::

::: info <code>git remote prune &lt;NAME&gt;</code>

Prunes all stale remote-tracking branches.

:::

::: info <code>git fetch origin --prune</code>

Cleans up outdated references from the remote repository.

:::

::: info <code>git clean -f</code>

Removes untracked files from the working directory, forcing the deletion of files not being tracked by Git.

:::

::: info <code>git clean -fd</code>

Removes untracked files and directories from the working directory, including any files and directories not tracked by Git.

:::

::: info <code>git clean -i</code>

Enters interactive mode for cleaning untracked files.

:::

::: info <code>git clean -X</code>

Removes only ignored files from the working directory.

:::

---

## Git Subtree

Git subtree is a mechanism for managing and integrating subprojects into a main repository. Unlike submodules, which treat the subproject as a separate entity with its own repository, subtrees allow you to include the contents of another repository directly within a subdirectory of your main repository.

This approach simplifies the workflow by eliminating the need for multiple repositories and enabling seamless integration, merging, and pulling of updates from the subproject. Subtrees provide a flexible and convenient way to manage dependencies and collaborate on projects that require incorporating external codebases.

::: info <code>git subtree add --prefix=&lt;DIR&gt; &lt;REPOSITORY&gt; &lt;BRANCH&gt;</code>

Adds a repository as a subtree.

:::

::: info <code>git subtree merge --prefix=&lt;DIR&gt; &lt;BRANCH&gt;</code>

Merges a subtree.

:::

::: info <code>git subtree pull --prefix=&lt;DIR&gt; &lt;REPOSITORY&gt; &lt;BRANCH&gt;</code>

Pulls in new changes from the subtree's repository.

:::

---

## How to Search in Git

`git grep` is a powerful search command in Git that allows users to search for specific strings or patterns within the files of a repository. It searches through the working directory and the index, providing a quick and efficient way to locate occurrences of a specified pattern across multiple files.

This command is particularly useful for developers looking to find instances of code, comments, or text within a project, enabling them to navigate and understand large codebases with ease. With various options and flags, git grep lets you perform targeted searches, making it an essential tool for code analysis and maintenance.

::: info <code>git grep &lt;PATTERN&gt;</code>

Searches for a string in the working directory and the index.

:::

::: info <code>git grep -e &lt;PATTERN&gt;</code>

Searches for a specific pattern.

:::

---

## Bisecting in Git

Git bisecting is a powerful debugging tool that helps identify the specific commit that introduced a bug or issue in a project. By performing a binary search through the commit history, git bisect efficiently narrows down the range of potential problem commits.

The process involves marking a known good commit and a known bad commit, and then repeatedly testing intermediate commits to determine whether they are good or bad.

This iterative approach quickly isolates the faulty commit, allowing developers to pinpoint the exact change that caused the problem. This facilitates faster and more accurate debugging.

::: info <code>git bisect start</code>

Starts a bisect session.

:::

::: info <code>git bisect bad</code>

Marks the current version as bad.

:::

::: info <code>git bisect good &lt;COMMIT&gt;</code>

Marks the specified commit as good.

:::

::: info <code>git bisect reset</code>

Ends a bisect session and returns to the original branch.

:::

::: info <code>git bisect visualize</code>

Launches a visual tool to assist with bisecting.

:::

---

## Git Attributes

Git attributes are settings that define how Git should handle specific files or paths within a repository. These attributes are defined in a file named .gitattributes, and they can control various behaviors such as text encoding, line-ending normalization, merge strategies, and diff algorithms.

By setting attributes, you can ensure consistent behavior across different environments and collaborators, making it easier to manage files with special requirements or complexities.

For example, you can mark certain files as binary to prevent Git from attempting to merge them, or specify custom diff drivers for more meaningful comparisons.

::: info <code>git check-attr &lt;ATTRIBUTE&gt; -- &lt;FILE&gt;</code>

Shows the value of a specific attribute for the given file as defined in the .gitattributes configuration, helping you understand how Git is treating the file with respect to attributes like text encoding, merge behavior, or diff handling.

:::

---

## Git Checkout

`git checkout` is a versatile command in Git used to switch between different branches, tags, or commits within a repository. By updating the working directory and index to match the specified branch or commit, it allows you to view or work with the state of the repository at that point.

You can also use `git checkout` to create new branches, restore specific files from a commit, or even start a new branch with no history using the `--orphan` option. This command is essential for navigating and managing different versions of a project's codebase.

::: info <code>git checkout &lt;COMMIT&gt;</code>

Updates the working directory and index to match the specified commit, allowing you to view or work with the state of the repository at that commit.

Just keep in mind that this leaves you in a "detached HEAD" state, meaning you're not on any branch.

:::

::: info <code>git checkout -b &lt;BRANCH&gt; &lt;COMMIT&gt;</code>

Creates a new branch named `<BRANCH>` starting from the specified commit and switches to that branch, allowing you to begin working from that point in the commit history.

:::

::: info <code>git checkout &lt;COMMIT&gt; -- &lt;FILE&gt;</code>

Restores the specified file from a specific commit into your working directory, replacing the current version of the file with the version from that commit without changing the commit history or index.

:::

::: info <code>git checkout --orphan &lt;NEW_BRANCH&gt;</code>

Creates a new branch named `<NEW_BRANCH>` with no commit history, effectively starting a new branch that begins with a clean working directory and index, as if it were a new repository.

:::

---

## Git Reflog

Git reflog is a powerful tool that records all changes made to the tips of branches and the `HEAD` reference in a Git repository. This includes actions such as commits, checkouts, merges, and resets.

By maintaining a history of these changes, reflog allows users to track recent modifications and recover lost commits, even if they are not part of the current branch history. It provides a way to navigate through the repository's state changes, making it an invaluable resource for debugging and undoing mistakes.

::: info <code>git reflog</code>

Displays a log of all the changes to the `HEAD` reference and branch tips, including commits, checkouts, merges, and resets, allowing you to recover lost commits or track recent changes to the repository's state.

:::

::: info <code>git reflog show &lt;REF&gt;</code>

Displays the reflog for the specified reference (`<REF>`), showing a log of changes to that reference, including updates to `HEAD` or branch tips, along with associated commit messages and timestamps.

:::

---

## How to Handle Untracked Files in Git

::: info <code>git clean</code>

`git clean` removes untracked files and directories from the working directory. 

By default, it only shows what would be removed without actually deleting anything.

To perform the actual cleanup, you need to use additional flags:

- `git clean -f`: Removes untracked files.
- `git clean -fd`: Removes untracked files and directories.
- `git clean -fx`: Removes untracked files, including those ignored by .gitignore.
- `git clean -n`: Shows which files would be removed without actually deleting them.

:::

---

## Force Pushing in Git

::: info <code>git push --force</code>

Forces a push of your local branch to the remote repository, even if it results in a non-fast-forward merge. 

It overwrites the remote branch with your local changes.

This can be necessary when you have rewritten history (for example, with a rebase) and need to update the remote branch to match your local branch.

But it can also potentially overwrite others' changes – so use it with caution.

:::

---

## Git Fetching and Pulling

::: info <code>git fetch --all</code>

Retrieves updates from all remote repositories configured for your local repository, fetching changes from all branches and tags without modifying your local branches.

:::

::: info <code>git pull --rebase</code>

Fetches changes from the remote repository and rebases your local commits on top of the updated remote branch, rather than merging them. This keeps the commit history linear and avoids unnecessary merge commits.

:::

---

## How to Handle Merge Conflicts in Git

Handling merge conflicts in Git is an essential skill for collaborating on projects with multiple contributors.

Merge conflicts occur when changes in different branches or commits overlap or contradict each other, preventing an automatic merge. Resolving these conflicts involves reviewing and manually reconciling the differences to ensure that the final code integrates contributions from all parties accurately.

In practice, effectively managing merge conflicts helps maintain code integrity and facilitates smooth collaboration by ensuring that everyone's changes are correctly incorporated into the project's history.

::: info <code>git mergetool</code>

This launches a merge tool to help you resolve conflicts that arise during a merge or rebase. 

It opens a graphical interface or a text-based tool configured in your Git settings, allowing you to manually resolve conflicts and finalize the merge.

:::

::: info <code>git rerere</code>

`rerere` stands for "reuse recorded resolution" and is a feature that helps automatically resolve conflicts in future merges or rebases by reusing conflict resolutions you've previously recorded.

Once enabled, Git records how you resolved conflicts. If the same conflicts arise again, it can apply the same resolutions automatically.

:::

---

## Working Trees in Git

Working trees in Git allow you to have multiple working directories associated with a single repository. This is particularly useful for working on multiple branches simultaneously without the need to constantly switch branches in the same directory.

By using working trees, you can easily manage different features, bug fixes, or experiments in isolated environments, improving workflow efficiency and reducing the risk of conflicts.

::: info <code>git worktree add ../new-branch feature-branch</code>

Creates a new working tree in a directory named "new-branch" based on the "feature-branch".

:::

::: info <code>git worktree list</code>

Lists all working trees associated with the current repository, showing their paths and the branches they are checked out to.

:::

::: info <code>git worktree remove &lt;PATH&gt;</code>

Removes the specified working tree at the given `<PATH>`, deleting the working directory and detaching the branch.

:::

::: info <code>git worktree prune</code>

Removes references to nonexistent working trees, cleaning up the working tree list.

:::

::: info <code>git worktree lock &lt;PATH&gt;</code>

Locks the specified working tree at the given `<PATH>`, preventing it from being pruned.

:::

::: info <code>git worktree unlock &lt;PATH&gt;</code>

Unlocks the specified working tree at the given `<PATH>`, allowing it to be pruned if necessary.

:::

---

## Submodules in Git

Submodules in Git are a way to include and manage external repositories within your own repository. They are particularly useful for reusing code across multiple projects, maintaining dependencies, or integrating third-party libraries.

By using submodules, you can keep your main repository clean and modular, while still ensuring that all necessary components are included and version-controlled.

::: info <code>git submodule init</code>

Initializes submodules in your repository. This command sets up the configuration necessary for the submodules, but doesn't actually clone them.

:::

::: info <code>git submodule update</code>

Clones and checks out the submodules into the specified paths. This is typically run after git submodule init.

:::

::: info <code>git submodule add &lt;REPOSITORY&gt; &lt;PATH&gt;</code>

Adds a new submodule to your repository at the specified path, linking it to the specified repository.

:::

::: info <code>git submodule status</code>

Displays the status of all submodules, showing their commit hashes and whether they are up-to-date, modified, or uninitialized.

:::

::: info <code>git submodule foreach &lt;COMMAND&gt;</code>

Runs the specified command in each submodule. This is useful for performing batch operations across all submodules.

:::

::: info <code>git submodule sync</code>

Synchronizes the submodule URLs in your configuration file with those in the .gitmodules file, ensuring they are up-to-date.

:::

::: info <code>git submodule deinit &lt;PATH&gt;</code>

Unregisters the specified submodule, removing its configuration. This doesn't delete the submodule's working directory.

:::

::: info <code>git submodule update --remote</code>

Fetches and updates the submodules to the latest commit from their remote repositories.

:::

::: info <code>git submodule set-url &lt;PATH&gt; &lt;NEW_URL&gt;</code>

Changes the URL of the specified submodule to the new URL.

:::

::: info <code>git submodule absorbgitdirs</code>

Absorbs the submodule's Git directory into the superproject to simplify the structure.

:::

Thank you for reading! I hope this cheatsheet helps you work more easily in Git.

---

<TagLinks />