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


## <h2 id="heading-chapter-10-additional-tools-for-undoing-changes">Chapter 10 - Additional Tools for Undoing Changes

In the previous chapter, you met <code>git reset</code>. Indeed, <code>git reset</code> is a super powerful tool, and I highly recommend to use it until you feel completely comfortable with it.

Yet, <code>git reset</code> is not the only tool at our disposal. Some of the times, it is not the most convenient tool to use. In others, it's just not enough. This short chapter touches a few tools that are helpful for undoing changes in Git.

<h3 id="heading-git-commit-amend"><code>git commit --amend</code>

Consider <a href="https://freecodecamp.org/news/p/f7b355ea-3f22-4613-8218-e95c67779d9f/scenario-1">Scenario #1</a> from the previous chapter again. As a reminder, you wrote "I love Git" into a file (<code>love.txt</code>), staged and committed this file:

<img src="https://freecodecamp.org/news/content/images/2023/12/image-52.png" alt="Image" width="1328" height="460" loading="lazy">
*The state after creating "Commit 2.3"*

And then I realized I didn't want you to commit it at that state, but rather - write some more love words in this file before committing it.

To match this state, simply checkout the tag you created, which points to "Commit 2.3":

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> checkout scenario-1
</code></pre>
In the previous chapter, when we introduced <code>git reset</code>, you solved this issue by using <code>git reset --mixed HEAD~1</code>, effectively undoing both the committing and the staging actions you took.

Now I would like you to consider another approach. Keep working at the state of the last introduced commit ("Commit 2.3", referenced by the tag "scenario-1"), and make the changes you want:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token builtin class-name">echo</span> And I love this book <span class="token operator">&gt;&gt;</span> love.txt
</code></pre>
Add this change to the index:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> <span class="token function">add</span> love.txt
</code></pre>
Now, you can use <code>git commit</code> with the <code>--amend</code> switch, which tells it to override the commit <code>HEAD</code> is pointing to. Actually, it will create another, new commit, pointing to <code>HEAD~1</code> ("Commit 1" in our example), and make <code>HEAD</code> point to this newly created commit. By providing the <code>-m</code> argument you can specify a new commit message as well:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token string">"Commit 2.4"</span>
</code></pre>
After running this command, <code>HEAD</code> points to <code>main</code>, which points to "Commit 2.4", which in turn points to "Commit 1". The previous "Commit 2.3" is no longer reachable from the history.

<img src="https://freecodecamp.org/news/content/images/2023/12/commit_amend-1.png" alt="Image" width="1316" height="469" loading="lazy">
*The state after using <code>git commit --amend</code> (Commit "2.3" is unreachable and thus not included in the drawing)*

This tool is useful when you want to quickly override the last commit you created. Indeed, you could use <code>git reset</code> to accomplish the same thing, but you can view <code>git commit --amend</code> as a more convenient shortcut.

<h3 id="heading-git-revert"><code>git revert</code>

Okay, so another day, another problem.

Add the following text to <code>love.txt</code>, stage and commit as follows:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token builtin class-name">echo</span> This is <span class="token function">more</span> tezt <span class="token operator">&gt;&gt;</span> love.txt
<span class="token function">git</span> <span class="token function">add</span> love.txt
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Commit 3"</span>
</code></pre>
<img src="https://freecodecamp.org/news/content/images/2023/12/git_revert_1-1.png" alt="Committing &quot;More changes&quot;" width="1320" height="468" loading="lazy">
*The state after committing "Commit 3"*

And push it to the remote server:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> push origin HEAD
</code></pre>
Um, oops 😓…

I just noticed something. I had a typo there. I wrote "This is more tezt" instead of "This is more text". Whoops. So what's the big problem now? I <code>push</code>ed, which means that someone else might have already <code>pull</code>ed those changes.

If I override those changes by using <code>git reset</code>, we will have different histories, and all hell might break loose. You can rewrite your own copy of the repo as much as you like until you <code>push</code> it.

Once you <code>push</code> the change, you need to be certain no one else has fetched those changes if you are going to rewrite history.

Alternatively, you can use another tool called <code>git revert</code>. This command takes the commit you're providing it with and computes the diff from its parent commit, just like <code>git cherry-pick</code>, but this time, it computes the *reverse* changes. That is, if in the specified commit you added a line, the reverse would delete the line, and vice versa. 

In our case we are reverting "Commit 3", so the reverse would be to delete the line "This is more tezt" from <code>love.txt</code>. Since "Commit 3" is referenced by <code>main</code> and <code>HEAD</code>, we can use any of these named references in this command:

<img src="https://freecodecamp.org/news/content/images/2023/12/git_revert_2.png" alt="Using  to undo the changes" width="1340" height="538" loading="lazy">
*Using <code>git revert</code> to undo the changes*

<code>git revert</code> created a new commit object, which means it's an addition to the history. By using <code>git revert</code>, you didn't rewrite history. You admitted your past mistake, and this commit is an acknowledgment that you made a mistake and now you fixed it.

Some would say it's the more mature way. Some would say it's not as clean a history as you would get if you used <code>git reset</code> to rewrite the previous commit. But this is a way to avoid rewriting history.

You can now fix the typo and commit again:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token builtin class-name">echo</span> This is <span class="token function">more</span> text <span class="token operator">&gt;&gt;</span> love.txt
<span class="token function">git</span> <span class="token function">add</span> love.txt
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Commit 3.1"</span>
</code></pre>
<img src="https://freecodecamp.org/news/content/images/2023/12/git_revert_3.png" alt="Redoing the changes" width="1340" height="519" loading="lazy">
*The resulting state after redoing the changes*

You can use <code>git revert</code> to revert a commit other than <code>HEAD</code>. Say that you want to reverse the parent of <code>HEAD</code>, you can use:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> revert HEAD~1
</code></pre>
Or you could provide the SHA-1 of the commit to revert.

Notice that since Git will apply the reverse patch of the previous patch - this operation might fail, as the patch may no longer apply and you might get a conflict.

<h3 id="heading-git-rebase-as-a-tool-for-undoing-things">Git Rebase as a Tool for Undoing Things

In <a class="post-section-overview" href="#heading-chapter-8-understanding-git-rebase">chapter 8</a>, you learned about Git rebase. We then considered it mainly as a tool to combine changes introduced in different branches. Yet, as long as you haven't <code>push</code>ed your changes, using <code>rebase</code> on your own branch can be a very convenient way to rearrange your commit history.

For that, you would usually <a class="post-section-overview" href="#heading-how-to-rebase-on-a-single-branch">rebase on a single branch</a>, and use interactive rebase. Consider again this example covered in <a class="post-section-overview" href="#heading-chapter-8-understanding-git-rebase">chapter 8</a>, where I worked from <code>feature_branch_2</code>, and specifically edited the file <code>code.py</code>. I started by changing all strings to be wrapped by double quotes rather than single quotes:

<img src="https://freecodecamp.org/news/content/images/2023/12/code_py_4-1.png" alt="Changing  into  in " width="588" height="382" loading="lazy">
*Changing <code>'</code> into <code>"</code> in <code>code.py</code>*

Then, I staged and committed:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> <span class="token function">add</span> code.py
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Commit 17"</span>
</code></pre>
I then decided to add a new function at the beginning of the file:

<img src="https://freecodecamp.org/news/content/images/2023/12/code_py_5-1.png" alt="Adding the function " width="590" height="423" loading="lazy">
_Adding the function <code>another_feature</code>_

Again, I staged and committed:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> <span class="token function">add</span> code.py
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Commit 18"</span>
</code></pre>
And now I realized I actually forgot to change the single quotes to double quotes wrapping the <code>__main__</code> (as you might have noticed), so I did that too:

<img src="https://freecodecamp.org/news/content/images/2023/12/code_py_6-1.png" alt="Changing  into " width="599" height="446" loading="lazy">
*Changing <code>'__main__'</code> into <code>"__main__"</code>*

Of course, I staged and committed this change:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> <span class="token function">add</span> code.py
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Commit 19"</span>
</code></pre>
Now, consider the history:

<img src="https://freecodecamp.org/news/content/images/2023/12/history_after_commit_19-1.png" alt="The commit history after introducing &quot;Commit 19&quot;" width="1600" height="462" loading="lazy">
*The commit history after introducing "Commit 19"*

As explained in <a class="post-section-overview" href="#heading-chapter-8-understanding-git-rebase">chapter 8</a>, I got to a state with two commits that are related to one another, "Commit 17" and "Commit 19" (turning <code>'</code>s into <code>"</code>s), but they are split by the unrelated "Commit 18" (where I added a new function).

This is a classic case where <code>git rebase</code> would come in handy, to undo the local changes before <code>push</code>ing a clean history.

Intuitively, I want to edit the history here:

<img src="https://freecodecamp.org/news/content/images/2023/12/plan_edit_commits_17_18-1.png" alt="These are the commits I want to edit" width="1600" height="436" loading="lazy">
*These are the commits I want to edit*

I can <code>rebase</code> the history from "Commit 17" to "Commit 19", on top of "Commit 15". To do that:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> rebase <span class="token parameter variable">--interactive</span> <span class="token parameter variable">--onto</span> <span class="token operator">&lt;</span>SHA_OF_COMMIT_1<span class="token operator"><span class="token file-descriptor important">5</span>&gt;</span> <span class="token operator">&lt;</span>SHA_OF_COMMIT_1<span class="token operator"><span class="token file-descriptor important">5</span>&gt;</span>
</code></pre>
<img src="https://freecodecamp.org/news/content/images/2023/12/rebase_onto_4-1.png" alt="Using  on a single branch" width="1023" height="391" loading="lazy">
*Using <code>rebase --onto</code> on a single branch*

This results in the following screen:

<img src="https://freecodecamp.org/news/content/images/2023/12/interactive_rebase_4-1.png" alt="Interactive rebase" width="904" height="638" loading="lazy">
*Interactive rebase*

So what would I do? I want to put "Commit 19" before "Commit 18", so it comes right after "Commit 17". I can go further and <code>squash</code> them together, like so:

<img src="https://freecodecamp.org/news/content/images/2023/12/interactive_rebase_5-1.png" alt="Interactive rebase - changing the order of commit and squashing" width="1010" height="396" loading="lazy">
*Interactive rebase - changing the order of commit and squashing*

Now when I get prompted for a commit message, I can provide the message "Commit 17+19":

<img src="https://freecodecamp.org/news/content/images/2023/12/interactive_rebase_6-1.png" alt="Providing a commit message" width="799" height="393" loading="lazy">
*Providing a commit message*

And now, see our beautiful history:

<img src="https://freecodecamp.org/news/content/images/2023/12/rebase_onto_5-1.png" alt="The resulting history" width="1030" height="493" loading="lazy">
*The resulting history*

The syntax used above, <code>git rebase --interactive --onto &lt;COMMIT X&gt; &lt;COMMIT X&gt;</code> would be the most commonly used syntax by those who use <code>rebase</code> regularly. The state of mind these developers usually have is to create atomic commits while working, all the time, without being scared to change them later. Then, before <code>push</code>ing their changes, they would <code>rebase</code> the entire set of changes since the last <code>push</code>, and rearrange it so the history becomes coherent.

<h3 id="heading-git-reflog"><code>git reflog</code>

Time to consider a more startling case.

Go back to "Commit 2.4":

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>SHA_OF_COMMIT_2_<span class="token operator"><span class="token file-descriptor important">4</span>&gt;</span>
</code></pre>
Get some work done, write some code, and add it to <code>love.txt</code>. Stage this change, and commit it:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token builtin class-name">echo</span> lots of work <span class="token operator">&gt;&gt;</span> love.txt
<span class="token function">git</span> <span class="token function">add</span> love.txt
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Commit 3.2"</span>
</code></pre>
(I'm using "Commit 3.2" to indicate that this is not the same commit as "Commit 3" we used when explaining <code>git revert</code>.)

<img src="https://freecodecamp.org/news/content/images/2023/12/reflog_commit_3-1.png" alt="Another commit" width="1320" height="468" loading="lazy">
*Another commit - "Commit 3.2"*

I did the same on my machine, and I used the <code>Up</code> arrow key on my keyboard to scroll back to previous commands, and then I hit <code>Enter</code>, and… Wow.

Whoops.

<img src="https://freecodecamp.org/news/content/images/2023/12/reflog_commit_3_reset.png" alt="Did I just ?" width="929" height="120" loading="lazy">
*Did I just <code>git reset -- hard</code>?*

Did I just use <code>git reset --hard</code>? 😨

What actually happened? As you learned in the <a class="post-section-overview" href="#heading-chapter-9-git-reset">previous chapter</a>, Git moved the pointer to <code>HEAD~1</code>, so the last commit, with all of my precious work, is not reachable from the current history. Git also removed all the changes from the staging area, and then matched the working dir to the state of the staging area.

That is, everything matches this state where my work is… gone.

Freak out time. Freaking out.

But, really, is there a reason to freak out? Not really… We're relaxed people. What do we do? Well, intuitively, is the commit really, really gone?

No. Why not? It still exists inside the internal database of Git.

If I only knew where that is, I would know the <code>SHA-1</code> value that identifies this commit, and we could restore it. I could even undo the undoing, and <code>reset</code> back to this commit.

Actually, the only thing I really need here is the <code>SHA-1</code> of the "deleted" commit.

Now the question is, how do I find it? Would <code>git log</code> be useful?

Well, not really. <code>git log</code> would go to <code>HEAD</code>, which points to <code>main</code>, which points to the parent commit of the commit we are looking for. Then, <code>git log</code> would trace back through the parent chain, which does not include the commit with my precious work.

<img src="https://freecodecamp.org/news/content/images/2023/12/reflog_git_log.png" alt=" doesn't help in this case" width="1155" height="465" loading="lazy">
*<code>git log</code> doesn't help in this case*

Thankfully, the very smart people who created Git also created a backup plan for us, and that is called the <code>reflog</code>.

While you work with Git, whenever you change <code>HEAD</code>, which you can do by using <code>git reset</code>, but also other commands like <code>git switch</code> or <code>git checkout</code>, Git adds an entry to the <code>reflog</code>.

<img src="https://freecodecamp.org/news/content/images/2023/12/git_reflog.png" alt=" shows us where  was" width="1155" height="94" loading="lazy">
*<code>git reflog</code> shows us where <code>HEAD</code> was*

We found our commit! It's the one starting with <code>0fb929e</code>.

We can also relate to it by its "nickname" - <code>HEAD@{1}</code>. Similar to the way Git uses <code>HEAD~1</code> to get to the first parent of <code>HEAD</code>, and <code>HEAD~2</code> to refer to the second parent of <code>HEAD</code> and so on, Git uses <code>HEAD@{1}</code> to refer to the first *reflog* parent of <code>HEAD</code>, that is, where <code>HEAD</code> pointed to in the previous step.

We can also ask <code>git rev-parse</code> to show us its value:

<img src="https://freecodecamp.org/news/content/images/2023/12/reflog_revparse.png" alt="Using " width="1155" height="335" loading="lazy">
*Using <code>git rev-parse HEAD@{1}</code>*

Note: In case you are using Windows, you may need to wrap it with quotation marks - like so:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> rev-parse <span class="token string">"HEAD@{1}"</span>
</code></pre>
Another way to view the <code>reflog</code> is by using <code>git log -g</code>, which asks <code>git log</code> to actually consider the <code>reflog</code>:

<img src="https://freecodecamp.org/news/content/images/2023/12/git_log_g.png" alt="The output of " width="1155" height="551" loading="lazy">
*The output of <code>git log -g</code>*

You can see in the output of <code>git log -g</code> that the <code>reflog</code>'s entry <code>HEAD@{0}</code>, just like <code>HEAD</code>, points to <code>main</code>, which points to "Commit 2". But the parent of that entry in the <code>reflog</code> points to "Commit 3".

So to get back to "Commit 3", you can just use <code>git reset --hard HEAD@{1}</code> (or the <code>SHA-1</code> value of "Commit 3"):

<img src="https://freecodecamp.org/news/content/images/2023/12/git_reflog_reset.png" alt="Image" width="1155" height="378" loading="lazy">
*<code>git reset --hard HEAD@{1}</code>*

And now, if you <code>git log</code>:

<img src="https://freecodecamp.org/news/content/images/2023/12/git_log_2.png" alt="Our history is back!!!" width="1155" height="629" loading="lazy">
*Our history is back!!!*

We saved the day!

What would happen if I used this command again? And ran <code>git reset --hard HEAD@{1}</code>?

Git would set <code>HEAD</code> to where <code>HEAD</code> was pointing before the last <code>reset</code>, meaning to "Commit 2". We can keep going all day:

<img src="https://freecodecamp.org/news/content/images/2023/12/git_reset_again.png" alt=" again" width="1155" height="389" loading="lazy">
*<code>git reset --hard</code> again*

<h3 id="heading-recap-additional-tools-for-undoing-changes">Recap - Additional Tools for Undoing Changes

In the previous chapter, you learned how to use <code>git reset</code> to undo changes.

In this chapter, you extended your toolbox for undoing changes in Git with a few new commands:

- <code>git commit --amend</code> - which "overrides" the last commit with the stage of the index. Mostly useful when you just committed something and want to modify that last commit.
- <code>git revert</code> - which creates a new commit, that reverts a past commit by adding a new commit to the history with the reversed changes. Useful especially when the "faulty" commit has already been pushed to the remote.
- <code>git rebase</code> - which you already know from <a class="post-section-overview" href="#heading-chapter-8-understanding-git-rebase">chapter 8</a>, and is useful for rewriting the history of multiple commits, especially before pushing them.
- <code>git reflog</code> (and <code>git log -g</code>) - which tracks all changes to <code>HEAD</code>, so you might find the SHA-1 value of a commit you need to get back to.

The most important tool, even more important than the tools I just listed, is to whiteboard the current situation vs the desired one. Trust me on this, it will make every situation seem less daunting and the solution more clear.

There are additional tools that allow you to reverse changes in Git (I will provide links in the <a class="post-section-overview" href="#heading-additional-references-by-part">appendix</a>), but the collection of tools covered here should prepare you to tackle any challenge with confidence.

---

## <h2 id="heading-chapter-11-exercises">Chapter 11 - Exercises

This chapter includes a few exercises to deepen your understanding of the tools you learned in Part 3. The full version of this book also includes detailed solutions for each.

The exercises are found on this repository:

<a href="https://github.com/Omerr/undo-exercises.git">https://github.com/Omerr/undo-exercises.git</a>

Each exercise exists on a branch with the name <code>exercise_XX</code>, so Exercise 1 is found on branch <code>exercise_01</code>, Exercise 2 is found on branch <code>exercise_02</code> and so on.

Note: As explained in previous chapters, if you work with commits that can be found on a remote server (which you are in this case, as you are using my repository "undo-exercises"), you should probably use <code>git revert</code> instead of <code>git reset</code>. Similar to <code>git rebase</code>, the command <code>git reset</code> also rewrites history - and thus you should refrain from using it on commits that others may have relied on. 

For the purposes of these exercises, you can assume no one else has cloned or pulled code from the remote repository. Just remember - in real life, you should probably use <code>git revert</code> instead of commands that rewrite history in such cases.

<h3 id="heading-exercise-1">Exercise 1

On branch <code>exercise_01</code>, consider the file <code>hello.txt</code>:

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_01_1.png" alt="The file " width="1068" height="110" loading="lazy">
*The file <code>hello.txt</code>*

This file includes a typo (in the last character). Find the commit that introduced this typo.

<h4 id="heading-exercise-1a">Exercise (1a)

Remove this commit from the reachable history using <code>git reset</code> (with the right arguments), fix the typo, and commit again. Consider your history.

Revert to the previous state.

<h4 id="heading-exercise-1b">Exercise (1b)

Remove the faulty commit using <code>git commit --amend</code>, and get to the same state of the history as in the end of exercise (1a).

Revert to the previous state.

<h4 id="heading-exercise-1c">Exercise (1c)

<code>revert</code> the faulty commit using <code>git revert</code> and fix the typo. Consider your history.

Revert to the previous state.

<h4 id="heading-exercise-1d">Exercise (1d)

Using <code>git rebase</code>, get to the same state as in the end of exercise (1a).

<h3 id="heading-exercise-2">Exercise 2

Switch to <code>exercise_02</code>, and consider the contents of <code>exercise_02.txt</code>:

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_02_1.png" alt="The contents of " width="462" height="359" loading="lazy">
_The contents of <code>exercise_02.txt</code>_

A simple file, with one character at each line.

Consider the history (using <code>git lol</code>):

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_02_2.png" alt="Image" width="1339" height="450" loading="lazy">
*<code>git lol</code>*

Oh my. Each character was introduced in a separate commit. That doesn't make any sense!

Use the tools you've acquired to create a history where the creation of <code>exercise_02.txt</code> is all done in a single commit.

<h3 id="heading-exercise-3">Exercise 3

Consider the history on branch <code>exercise_03</code>:

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_03_1.png" alt="The history on " width="1083" height="296" loading="lazy">
_The history on <code>exercise_03</code>_

This seems like a mess. You will notice that:

- The order is skewed. We need "Commit 1" to be the earliest commit on this branch, and have "Initial Commit" as its parent, followed by "Commit 2" and so on.
- We shouldn't have "Commit 2a" and "Commit 2b", or "Commit 4a" and "Commit 4b" - these two pairs need to be combined into a single commit each - "Commit 2" and "Commit 4".
- There is a typo on the commit message of "Commit 1", it should not have 3 <code>m</code>s.

Fix these issues, but rely on the changes of each original commit. The resulting history should look like so:

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_03_2.png" alt="The desired history" width="1076" height="244" loading="lazy">
*The desired history*

<h3 id="heading-exercise-4">Exercise 4

This exercise actually consists of three branches: <code>exercise_04</code>, <code>exercise_04_a</code>, and <code>exercise_04_b</code>.

To see the history of these branches without others, use the following syntax:

<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">git</span> lol <span class="token parameter variable">--branches</span><span class="token operator">=</span><span class="token string">"exercise_04*"</span>
</code></pre>
The result is:

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_04_1.png" alt="The output of " width="1104" height="337" loading="lazy">
_The output of <code>git lol --branches="exercise_04*"</code>_

Your goal is to make <code>exercise_04_b</code> independent of <code>exercise_04_a</code>. That is, get to this history:

<img src="https://freecodecamp.org/news/content/images/2023/12/ex_04_2.png" alt="The desired history" width="1098" height="304" loading="lazy">
*The desired history*

**Good luck!**

<h1 id="heading-part-4-amazing-and-useful-git-tools">Part 4 - Amazing and Useful Git Tools</h1>
Git has lots of commands, and these commands have so many options and arguments. I could try to cover them all (though they do change over time), but I don't see a point in that. You should probably know a subset of these commands really well, those that you use regularly. Then, you can always search for a specific command to perform a task at hand.

This part relies on the basics you acquired in the previous parts, and covers specific commands and options that you may find useful. Given your understanding of how Git works, having these small tools can make you a real pro in Gitting things done.
-->

---

<TagLinks />