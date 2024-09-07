---
lang: ko-KR
title: Part 3 - Undoing Changes
description: Article(s) > (4/6) Gitting Things Done – A Visual and Practical Guide to Git [Full Book]
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
      content: Article(s) > (4/6) Gitting Things Done – A Visual and Practical Guide to Git [Full Book] 
    - property: og:description
      content: Part 3 - Undoing Changes
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/gitting-things-done-book/part-3-undoing-changes.html
date: 2024-01-08
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w2000/2023/12/Gitting-Things-Done-Cover-with-Photo.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Gitting Things Done – A Visual and Practical Guide to Git [Full Book]",
  "desc": "Introduction Git is awesome. Most software developers use Git on a daily basis. But how many truly understand Git? Do you feel like you know what's going on under the hood as you use Git to perform various tasks? For example, what happens when you us...",
  "link": "/explore/articles/freecodecamp.org/gitting-things-done-book/READE.md",
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

## heading-chapter-10-additional-tools-for-undoing-changes">Chapter 10 - Additional Tools for Undoing Changes

In the previous chapter, you met `git reset`. Indeed, `git reset` is a super powerful tool, and I highly recommend to use it until you feel completely comfortable with it.

Yet, `git reset` is not the only tool at our disposal. Some of the times, it is not the most convenient tool to use. In others, it's just not enough. This short chapter touches a few tools that are helpful for undoing changes in Git.

### heading-git-commit-amend">`git commit --amend`

Consider <a href="https://freecodecamp.org/news/p/f7b355ea-3f22-4613-8218-e95c67779d9f/scenario-1">Scenario #1</a> from the previous chapter again. As a reminder, you wrote "I love Git" into a file (`love.txt`), staged and committed this file:

<img src="https://freecodecamp.org/news/content/images/2023/12/image-52.png" alt="Image" width="1328" height="460" loading="lazy">
*The state after creating "Commit 2.3"*

And then I realized I didn't want you to commit it at that state, but rather - write some more love words in this file before committing it.

To match this state, simply checkout the tag you created, which points to "Commit 2.3":

<pre class="language-bash" tabindex="0"><code class="language-bash">git checkout scenario-1
```

In the previous chapter, when we introduced `git reset`, you solved this issue by using `git reset --mixed HEAD~1`, effectively undoing both the committing and the staging actions you took.

Now I would like you to consider another approach. Keep working at the state of the last introduced commit ("Commit 2.3", referenced by the tag "scenario-1"), and make the changes you want:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token builtin class-name">echo And I love this book >> love.txt
```

Add this change to the index:

<pre class="language-bash" tabindex="0"><code class="language-bash">git add love.txt
```

Now, you can use `git commit` with the `--amend` switch, which tells it to override the commit `HEAD` is pointing to. Actually, it will create another, new commit, pointing to `HEAD~1` ("Commit 1" in our example), and make `HEAD` point to this newly created commit. By providing the `-m` argument you can specify a new commit message as well:

<pre class="language-bash" tabindex="0"><code class="language-bash">git commit <span class="token parameter variable">--amend <span class="token parameter variable">-m "Commit 2.4"
```

After running this command, `HEAD` points to `main`, which points to "Commit 2.4", which in turn points to "Commit 1". The previous "Commit 2.3" is no longer reachable from the history.

<img src="https://freecodecamp.org/news/content/images/2023/12/commit_amend-1.png" alt="Image" width="1316" height="469" loading="lazy">
*The state after using `git commit --amend` (Commit "2.3" is unreachable and thus not included in the drawing)*

This tool is useful when you want to quickly override the last commit you created. Indeed, you could use `git reset` to accomplish the same thing, but you can view `git commit --amend` as a more convenient shortcut.

### heading-git-revert">`git revert`

Okay, so another day, another problem.

Add the following text to `love.txt`, stage and commit as follows:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token builtin class-name">echo This is more tezt >> love.txt
git add love.txt
git commit <span class="token parameter variable">-m "Commit 3"
```

<img src="https://freecodecamp.org/news/content/images/2023/12/git_revert_1-1.png" alt="Committing &quot;More changes&quot;" width="1320" height="468" loading="lazy">
*The state after committing "Commit 3"*

And push it to the remote server:

<pre class="language-bash" tabindex="0"><code class="language-bash">git push origin HEAD
```

Um, oops 😓…

I just noticed something. I had a typo there. I wrote "This is more tezt" instead of "This is more text". Whoops. So what's the big problem now? I `push`ed, which means that someone else might have already `pull`ed those changes.

If I override those changes by using `git reset`, we will have different histories, and all hell might break loose. You can rewrite your own copy of the repo as much as you like until you `push` it.

Once you `push` the change, you need to be certain no one else has fetched those changes if you are going to rewrite history.

Alternatively, you can use another tool called `git revert`. This command takes the commit you're providing it with and computes the diff from its parent commit, just like `git cherry-pick`, but this time, it computes the *reverse* changes. That is, if in the specified commit you added a line, the reverse would delete the line, and vice versa. 

In our case we are reverting "Commit 3", so the reverse would be to delete the line "This is more tezt" from `love.txt`. Since "Commit 3" is referenced by `main` and `HEAD`, we can use any of these named references in this command:

<img src="https://freecodecamp.org/news/content/images/2023/12/git_revert_2.png" alt="Using  to undo the changes" width="1340" height="538" loading="lazy">
*Using `git revert` to undo the changes*

`git revert` created a new commit object, which means it's an addition to the history. By using `git revert`, you didn't rewrite history. You admitted your past mistake, and this commit is an acknowledgment that you made a mistake and now you fixed it.

Some would say it's the more mature way. Some would say it's not as clean a history as you would get if you used `git reset` to rewrite the previous commit. But this is a way to avoid rewriting history.

You can now fix the typo and commit again:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token builtin class-name">echo This is more text >> love.txt
git add love.txt
git commit <span class="token parameter variable">-m "Commit 3.1"
```

<img src="https://freecodecamp.org/news/content/images/2023/12/git_revert_3.png" alt="Redoing the changes" width="1340" height="519" loading="lazy">
*The resulting state after redoing the changes*

You can use `git revert` to revert a commit other than `HEAD`. Say that you want to reverse the parent of `HEAD`, you can use:

<pre class="language-bash" tabindex="0"><code class="language-bash">git revert HEAD~1
```

Or you could provide the SHA-1 of the commit to revert.

Notice that since Git will apply the reverse patch of the previous patch - this operation might fail, as the patch may no longer apply and you might get a conflict.

### heading-git-rebase-as-a-tool-for-undoing-things">Git Rebase as a Tool for Undoing Things

In <a class="post-section-overview" href="#heading-chapter-8-understanding-git-rebase">chapter 8</a>, you learned about Git rebase. We then considered it mainly as a tool to combine changes introduced in different branches. Yet, as long as you haven't `push`ed your changes, using `rebase` on your own branch can be a very convenient way to rearrange your commit history.

For that, you would usually <a class="post-section-overview" href="#heading-how-to-rebase-on-a-single-branch">rebase on a single branch</a>, and use interactive rebase. Consider again this example covered in <a class="post-section-overview" href="#heading-chapter-8-understanding-git-rebase">chapter 8</a>, where I worked from `feature_branch_2`, and specifically edited the file `code.py`. I started by changing all strings to be wrapped by double quotes rather than single quotes:

<img src="https://freecodecamp.org/news/content/images/2023/12/code_py_4-1.png" alt="Changing  into  in " width="588" height="382" loading="lazy">
*Changing `'` into `"` in `code.py`*

Then, I staged and committed:

<pre class="language-bash" tabindex="0"><code class="language-bash">git add code.py
git commit <span class="token parameter variable">-m "Commit 17"
```

I then decided to add a new function at the beginning of the file:

<img src="https://freecodecamp.org/news/content/images/2023/12/code_py_5-1.png" alt="Adding the function " width="590" height="423" loading="lazy">
_Adding the function `another_feature`_

Again, I staged and committed:

<pre class="language-bash" tabindex="0"><code class="language-bash">git add code.py
git commit <span class="token parameter variable">-m "Commit 18"
```

And now I realized I actually forgot to change the single quotes to double quotes wrapping the `__main__` (as you might have noticed), so I did that too:

<img src="https://freecodecamp.org/news/content/images/2023/12/code_py_6-1.png" alt="Changing  into " width="599" height="446" loading="lazy">
*Changing `'__main__'` into `"__main__"`*

Of course, I staged and committed this change:

<pre class="language-bash" tabindex="0"><code class="language-bash">git add code.py
git commit <span class="token parameter variable">-m "Commit 19"
```

Now, consider the history:

<img src="https://freecodecamp.org/news/content/images/2023/12/history_after_commit_19-1.png" alt="The commit history after introducing &quot;Commit 19&quot;" width="1600" height="462" loading="lazy">
*The commit history after introducing "Commit 19"*

As explained in <a class="post-section-overview" href="#heading-chapter-8-understanding-git-rebase">chapter 8</a>, I got to a state with two commits that are related to one another, "Commit 17" and "Commit 19" (turning `'`s into `"`s), but they are split by the unrelated "Commit 18" (where I added a new function).

This is a classic case where `git rebase` would come in handy, to undo the local changes before `push`ing a clean history.

Intuitively, I want to edit the history here:

<img src="https://freecodecamp.org/news/content/images/2023/12/plan_edit_commits_17_18-1.png" alt="These are the commits I want to edit" width="1600" height="436" loading="lazy">
*These are the commits I want to edit*

I can `rebase` the history from "Commit 17" to "Commit 19", on top of "Commit 15". To do that:

<pre class="language-bash" tabindex="0"><code class="language-bash">git rebase <span class="token parameter variable">--interactive <span class="token parameter variable">--onto <SHA_OF_COMMIT_1<span class="token file-descriptor important">5> <SHA_OF_COMMIT_1<span class="token file-descriptor important">5>
```

<img src="https://freecodecamp.org/news/content/images/2023/12/rebase_onto_4-1.png" alt="Using  on a single branch" width="1023" height="391" loading="lazy">
*Using `rebase --onto` on a single branch*

This results in the following screen:

<img src="https://freecodecamp.org/news/content/images/2023/12/interactive_rebase_4-1.png" alt="Interactive rebase" width="904" height="638" loading="lazy">
*Interactive rebase*

So what would I do? I want to put "Commit 19" before "Commit 18", so it comes right after "Commit 17". I can go further and `squash` them together, like so:

<img src="https://freecodecamp.org/news/content/images/2023/12/interactive_rebase_5-1.png" alt="Interactive rebase - changing the order of commit and squashing" width="1010" height="396" loading="lazy">
*Interactive rebase - changing the order of commit and squashing*

Now when I get prompted for a commit message, I can provide the message "Commit 17+19":

<img src="https://freecodecamp.org/news/content/images/2023/12/interactive_rebase_6-1.png" alt="Providing a commit message" width="799" height="393" loading="lazy">
*Providing a commit message*

And now, see our beautiful history:

<img src="https://freecodecamp.org/news/content/images/2023/12/rebase_onto_5-1.png" alt="The resulting history" width="1030" height="493" loading="lazy">
*The resulting history*

The syntax used above, `git rebase --interactive --onto <COMMIT X> <COMMIT X>` would be the most commonly used syntax by those who use `rebase` regularly. The state of mind these developers usually have is to create atomic commits while working, all the time, without being scared to change them later. Then, before `push`ing their changes, they would `rebase` the entire set of changes since the last `push`, and rearrange it so the history becomes coherent.

### heading-git-reflog">`git reflog`

Time to consider a more startling case.

Go back to "Commit 2.4":

<pre class="language-bash" tabindex="0"><code class="language-bash">git reset <span class="token parameter variable">--hard <SHA_OF_COMMIT_2_<span class="token file-descriptor important">4>
```

Get some work done, write some code, and add it to `love.txt`. Stage this change, and commit it:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token builtin class-name">echo lots of work >> love.txt
git add love.txt
git commit <span class="token parameter variable">-m "Commit 3.2"
```

(I'm using "Commit 3.2" to indicate that this is not the same commit as "Commit 3" we used when explaining `git revert`.)

<img src="https://freecodecamp.org/news/content/images/2023/12/reflog_commit_3-1.png" alt="Another commit" width="1320" height="468" loading="lazy">
*Another commit - "Commit 3.2"*

I did the same on my machine, and I used the `Up` arrow key on my keyboard to scroll back to previous commands, and then I hit `Enter`, and… Wow.

Whoops.

<img src="https://freecodecamp.org/news/content/images/2023/12/reflog_commit_3_reset.png" alt="Did I just ?" width="929" height="120" loading="lazy">
*Did I just `git reset -- hard`?*

Did I just use `git reset --hard`? 😨

What actually happened? As you learned in the <a class="post-section-overview" href="#heading-chapter-9-git-reset">previous chapter</a>, Git moved the pointer to `HEAD~1`, so the last commit, with all of my precious work, is not reachable from the current history. Git also removed all the changes from the staging area, and then matched the working dir to the state of the staging area.

That is, everything matches this state where my work is… gone.

Freak out time. Freaking out.

But, really, is there a reason to freak out? Not really… We're relaxed people. What do we do? Well, intuitively, is the commit really, really gone?

No. Why not? It still exists inside the internal database of Git.

If I only knew where that is, I would know the `SHA-1` value that identifies this commit, and we could restore it. I could even undo the undoing, and `reset` back to this commit.

Actually, the only thing I really need here is the `SHA-1` of the "deleted" commit.

Now the question is, how do I find it? Would `git log` be useful?

Well, not really. `git log` would go to `HEAD`, which points to `main`, which points to the parent commit of the commit we are looking for. Then, `git log` would trace back through the parent chain, which does not include the commit with my precious work.

<img src="https://freecodecamp.org/news/content/images/2023/12/reflog_git_log.png" alt=" doesn't help in this case" width="1155" height="465" loading="lazy">
*`git log` doesn't help in this case*

Thankfully, the very smart people who created Git also created a backup plan for us, and that is called the `reflog`.

While you work with Git, whenever you change `HEAD`, which you can do by using `git reset`, but also other commands like `git switch` or `git checkout`, Git adds an entry to the `reflog`.

<img src="https://freecodecamp.org/news/content/images/2023/12/git_reflog.png" alt=" shows us where  was" width="1155" height="94" loading="lazy">
*`git reflog` shows us where `HEAD` was*

We found our commit! It's the one starting with `0fb929e`.

We can also relate to it by its "nickname" - `HEAD@{1}`. Similar to the way Git uses `HEAD~1` to get to the first parent of `HEAD`, and `HEAD~2` to refer to the second parent of `HEAD` and so on, Git uses `HEAD@{1}` to refer to the first *reflog* parent of `HEAD`, that is, where `HEAD` pointed to in the previous step.

We can also ask `git rev-parse` to show us its value:

<img src="https://freecodecamp.org/news/content/images/2023/12/reflog_revparse.png" alt="Using " width="1155" height="335" loading="lazy">
*Using `git rev-parse HEAD@{1}`*

Note: In case you are using Windows, you may need to wrap it with quotation marks - like so:

<pre class="language-bash" tabindex="0"><code class="language-bash">git rev-parse "HEAD@{1}"
```

Another way to view the `reflog` is by using `git log -g`, which asks `git log` to actually consider the `reflog`:

<img src="https://freecodecamp.org/news/content/images/2023/12/git_log_g.png" alt="The output of " width="1155" height="551" loading="lazy">
*The output of `git log -g`*

You can see in the output of `git log -g` that the `reflog`'s entry `HEAD@{0}`, just like `HEAD`, points to `main`, which points to "Commit 2". But the parent of that entry in the `reflog` points to "Commit 3".

So to get back to "Commit 3", you can just use `git reset --hard HEAD@{1}` (or the `SHA-1` value of "Commit 3"):

<img src="https://freecodecamp.org/news/content/images/2023/12/git_reflog_reset.png" alt="Image" width="1155" height="378" loading="lazy">
*`git reset --hard HEAD@{1}`*

And now, if you `git log`:

<img src="https://freecodecamp.org/news/content/images/2023/12/git_log_2.png" alt="Our history is back!!!" width="1155" height="629" loading="lazy">
*Our history is back!!!*

We saved the day!

What would happen if I used this command again? And ran `git reset --hard HEAD@{1}`?

Git would set `HEAD` to where `HEAD` was pointing before the last `reset`, meaning to "Commit 2". We can keep going all day:

<img src="https://freecodecamp.org/news/content/images/2023/12/git_reset_again.png" alt=" again" width="1155" height="389" loading="lazy">
*`git reset --hard` again*

### heading-recap-additional-tools-for-undoing-changes">Recap - Additional Tools for Undoing Changes

In the previous chapter, you learned how to use `git reset` to undo changes.

In this chapter, you extended your toolbox for undoing changes in Git with a few new commands:

- `git commit --amend` - which "overrides" the last commit with the stage of the index. Mostly useful when you just committed something and want to modify that last commit.
- `git revert` - which creates a new commit, that reverts a past commit by adding a new commit to the history with the reversed changes. Useful especially when the "faulty" commit has already been pushed to the remote.
- `git rebase` - which you already know from <a class="post-section-overview" href="#heading-chapter-8-understanding-git-rebase">chapter 8</a>, and is useful for rewriting the history of multiple commits, especially before pushing them.
- `git reflog` (and `git log -g`) - which tracks all changes to `HEAD`, so you might find the SHA-1 value of a commit you need to get back to.

The most important tool, even more important than the tools I just listed, is to whiteboard the current situation vs the desired one. Trust me on this, it will make every situation seem less daunting and the solution more clear.

There are additional tools that allow you to reverse changes in Git (I will provide links in the <a class="post-section-overview" href="#heading-additional-references-by-part">appendix</a>), but the collection of tools covered here should prepare you to tackle any challenge with confidence.

---

## ---

## heading-chapter-11-exercises">Chapter 11 - Exercises

This chapter includes a few exercises to deepen your understanding of the tools you learned in Part 3. The full version of this book also includes detailed solutions for each.

The exercises are found on this repository:

<a href="https://github.com/Omerr/undo-exercises.git">https://github.com/Omerr/undo-exercises.git</a>

Each exercise exists on a branch with the name `exercise_XX`, so Exercise 1 is found on branch `exercise_01`, Exercise 2 is found on branch `exercise_02` and so on.

Note: As explained in previous chapters, if you work with commits that can be found on a remote server (which you are in this case, as you are using my repository "undo-exercises"), you should probably use `git revert` instead of `git reset`. Similar to `git rebase`, the command `git reset` also rewrites history - and thus you should refrain from using it on commits that others may have relied on. 

For the purposes of these exercises, you can assume no one else has cloned or pulled code from the remote repository. Just remember - in real life, you should probably use `git revert` instead of commands that rewrite history in such cases.

### heading-exercise-1">Exercise 1

On branch `exercise_01`, consider the file `hello.txt`:

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_01_1.png" alt="The file " width="1068" height="110" loading="lazy">
*The file `hello.txt`*

This file includes a typo (in the last character). Find the commit that introduced this typo.

<h4 id="heading-exercise-1a">Exercise (1a)

Remove this commit from the reachable history using `git reset` (with the right arguments), fix the typo, and commit again. Consider your history.

Revert to the previous state.

<h4 id="heading-exercise-1b">Exercise (1b)

Remove the faulty commit using `git commit --amend`, and get to the same state of the history as in the end of exercise (1a).

Revert to the previous state.

<h4 id="heading-exercise-1c">Exercise (1c)

`revert` the faulty commit using `git revert` and fix the typo. Consider your history.

Revert to the previous state.

<h4 id="heading-exercise-1d">Exercise (1d)

Using `git rebase`, get to the same state as in the end of exercise (1a).

### heading-exercise-2">Exercise 2

Switch to `exercise_02`, and consider the contents of `exercise_02.txt`:

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_02_1.png" alt="The contents of " width="462" height="359" loading="lazy">
_The contents of `exercise_02.txt`_

A simple file, with one character at each line.

Consider the history (using `git lol`):

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_02_2.png" alt="Image" width="1339" height="450" loading="lazy">
*`git lol`*

Oh my. Each character was introduced in a separate commit. That doesn't make any sense!

Use the tools you've acquired to create a history where the creation of `exercise_02.txt` is all done in a single commit.

### heading-exercise-3">Exercise 3

Consider the history on branch `exercise_03`:

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_03_1.png" alt="The history on " width="1083" height="296" loading="lazy">
_The history on `exercise_03`_

This seems like a mess. You will notice that:

- The order is skewed. We need "Commit 1" to be the earliest commit on this branch, and have "Initial Commit" as its parent, followed by "Commit 2" and so on.
- We shouldn't have "Commit 2a" and "Commit 2b", or "Commit 4a" and "Commit 4b" - these two pairs need to be combined into a single commit each - "Commit 2" and "Commit 4".
- There is a typo on the commit message of "Commit 1", it should not have 3 `m`s.

Fix these issues, but rely on the changes of each original commit. The resulting history should look like so:

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_03_2.png" alt="The desired history" width="1076" height="244" loading="lazy">
*The desired history*

### heading-exercise-4">Exercise 4

This exercise actually consists of three branches: `exercise_04`, `exercise_04_a`, and `exercise_04_b`.

To see the history of these branches without others, use the following syntax:

<pre class="language-bash" tabindex="0"><code class="language-bash">git lol <span class="token parameter variable">--branches="exercise_04*"
```

The result is:

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_04_1.png" alt="The output of " width="1104" height="337" loading="lazy">
_The output of `git lol --branches="exercise_04*"`_

Your goal is to make `exercise_04_b` independent of `exercise_04_a`. That is, get to this history:

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_04_2.png" alt="The desired history" width="1098" height="304" loading="lazy">
*The desired history*

**Good luck!**

<h1 id="heading-part-4-amazing-and-useful-git-tools">Part 4 - Amazing and Useful Git Tools</h1>
Git has lots of commands, and these commands have so many options and arguments. I could try to cover them all (though they do change over time), but I don't see a point in that. You should probably know a subset of these commands really well, those that you use regularly. Then, you can always search for a specific command to perform a task at hand.

This part relies on the basics you acquired in the previous parts, and covers specific commands and options that you may find useful. Given your understanding of how Git works, having these small tools can make you a real pro in Gitting things done.
-->

---

<TagLinks />