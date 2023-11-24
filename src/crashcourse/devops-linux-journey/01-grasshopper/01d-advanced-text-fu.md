---
lang: ko-KR
title: GrassHopper > Advanced Text-Fu
description: 🐧Linux Journey > GrassHopper > Advanced Text-Fu
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > GrassHopper > Advanced Text-Fu
    content: Advanced Text-Fu
  - property: og:title
    content: Advanced Text-Fu
  - property: og:description
    content: 🐧Linux Journey > GrassHopper > Advanced Text-Fu
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/01-grasshopper
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Advanced Text-Fu
desc: Navigate text like a Linux spider monkey with vim and emacs.
link: https://linuxjourney.com/lesson/regular-expressions-regex
logo: https://linuxjourney.com/assets/text-fu-advanced-384999618925a5ad54abb9113cfab05f5bd3f7e341d16aecbcbf1c83711e2378.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. regex (Regular Expressions)

Regular expressions are a powerful tool to do pattern based selection. It uses special notations similar to those we've encountered already such as the `*` wildcard.

We'll go through a couple of the most common regular expressions, these are almost universal with any programming language.

Well use this phrase as our test string:

```
sally sells seashells 
by the seashore
```

### 1. Beginning of a line with `^`

```
^by
would match the line "by the seashore"
```

### 2. End of a line with `$`

```
seashore$
would match the line "by the seashore"
```

### 3. Matching any single character with `.`

```
b.
would match by
```

### 4. Bracket notation with `[]`

This can be a little tricky, brackets allow us to specify characters found within the bracket.

```
d[iou]g
would match: dig, dog, dug
```

The previous anchor tag `^` when used in a bracket means anything except the characters within the bracket.

```
d[^i]g
would match: dog and dug but not dig
```

Brackets can also use ranges to increase the amount of characters you want to use.

```
d[a-c]g
will match patterns like dag, dbg, and dcg
```

Be careful though as brackets are case sensitive:

```
d[A-C]g
will match dAg, dBg and dCg but not dag, dbg and dcg
```

And those are some basic regular expressions.


Try to combine regular expressions with grep and search through some files.

```sh
grep [regular expression here] [file]
```

---

## 2. Text Editors

If you get a couple of diehard Linux users in a room and ask them what is the best text editor to use, you'll hear a never ending banter about the godliness of either vim or emacs. Don't even try to bring up using a GUI editor if you value your life.

Vim and emacs are popular text editors that are installed by default on most Linux distributions and they both have their pros and cons. If you want to get around your system like a ninja, you'll need to pick up one of these text editors to use. They are essentially coding, word document processing and basically all in one editors.

Take a little tour of vim and emacs:

- [Vim](http://www.vim.org)
- [emacs](https://www.gnu.org/software/emacs)

---

## 3. Vim (Vi Improved)

Vim stands for `vi` (Improved) just like its name it stands for an improved version of the `vi` text editor command.

It's super lightweight, opening and editing a file with vim is quick and easy. It's also almost always available, if you booted up a random Linux distribution, chances are vim is installed by default.

To fire up vim just type:

```sh
vim
```

---

## 4. Vim Search Patterns

To search for an expression just type the `/` key and then your search result while you are in a vim session. Once you hit <kbd>Enter</kbd>, you can press <kbd>n</kbd> to go forward or <kbd>N</kbd> to go backward in your search results.

```
My pretty file is very pretty.

/pretty
will find the pretty words in the text file.
```

The `?` search command will search the text file backwards, so in the previous example, the last pretty would come up first.

```
My pretty file is very pretty.

?pretty
will find the pretty words in the text file.
```

Play with the search key, open a text file in vim with: `vim [textfile]` and start searching!

---

## 5. Vim Navigation

Now you may notice, the mouse is nowhere is use here. To navigate a text document in vim, use the following keys:

| key(s) | description |
| :--- | :--- |
| <kbd>h</kbd> or the <kbd>←</kbd> | move you left one character |
| <kbd>k</kbd> or the <kbd>↑</kbd> | move you up one line |
| <kbd>j</kbd> or the <kbd>↓</kbd> | move you down one line |
| <kbd>l</kbd> or the <kbd>→</kbd> | move you right one character |

---

## 6. Vim Appending Text

Now you may have noticed if you tried to type something you wouldn't be able to. That's because you are in command mode. This can get pretty confusing especially if you just want to open a file and enter text. The command mode is used for when you enter commands like <kbd>h</kbd>,<kbd>j</kbd>,<kbd>k</kbd>.<kbd>l</kbd> etc. To insert text you'll need to enter insert mode first.

| key(s) | description |
| :--- | :--- |
| <kbd>i</kbd> | insert text before the cursor |
| <kbd>O</kbd> | insert text on the previous line |
| <kbd>o</kbd> | insert text on the next line |
| <kbd>a</kbd> | append text after the cursor |
| <kbd>A</kbd> | append text at the end of the line |

Notice how when you type any of these insertion modes, you'll see that vim has entered `insert mode` at the bottom of the shell. To exit `insert mode` and go back to command mode, just hit the <kbd>Esc</kbd> key.

Play around with entering and exiting insertion mode.

---

## 7. Vim Editing

Now that we have a couple of lines written, let's edit it a bit more and remove some cruft.

| key(s) | description |
| :--- | :--- |
 <kbd>x</kbd> | used to cut the selected text also used for deleting characters
 <kbd>d</kbd> + <kbd>d</kbd> | used to delete the current line
 <kbd>y</kbd> | yank or copy whatever is selected
 <kbd>y</kbd> + <kbd>y</kbd> | yank or copy the current line
 <kbd>p</kbd> | paste the copied text before the cursor

I know this lesson added some oddballs, open up a text editor and play around with these.

---

## 8. Vim Saving and Exiting

Now that you've done your editing it's time to actually save and quit out of vim:

| key(s) | description |
| :--- | :--- |
| <kbd>:</kbd> + <kbd>w</kbd> | writes or saves the file |
| <kbd>:</kbd> + <kbd>q</kbd> | quit out of vim |
| <kbd>:</kbd> + <kbd>w</kbd> + <kbd>q</kbd> | write and then quit |
| <kbd>:</kbd> + <kbd>q</kbd> + <kbd>!</kbd> | quit out of vim without saving the file |
| <kbd>Z</kbd> + <kbd>Z</kbd> | equivalent of `:wq`, but one character faster |
| <kbd>u</kbd> | undo your last action |
| <kbd>Ctrl</kbd> + <kbd>r</kbd> | redo your last action |

You may not think ZZ is necessary, but you'll eventually see that your fingers may tend to lean towards this rather than :wq.

Whew that was a lot of information to take about Vim. Now that you know some basic commands and navigation, you can start editing some text files. There are many more options you can use in vim to increase your ability to master this text editor, head on to Vim's online guide to take a look.

---

## 9. Emacs

Emacs is for users who want an extremely powerful text editor, which may be an understatement because you essentially live in emacs. You can do all your code editing, file manipulation, etc all within emacs. It's a bit slower to load up and the learning curve is a bit steeper than vim, but if you want a powerful editor that is extremely extensible, this is the one for you. When I say extensible, I literally mean you can write up scripts for emacs that extend its functionality.

To start emacs just use:

```sh
emacs
```

You should be greeted with the default welcome buffer.

Buffers in emacs is what your text resides in. So if you open up a file, a buffer is used to store that file's content. You can have multiple buffers open at the same time and you can easily switch between buffers.

---

## 10. Emacs Manipulate Files

In a lot (if not all) of Emacs documentation, you will see the syntax `C`-[letter]. This just means hit the <kbd>Ctrl</kbd> `letter`, but for shorthand purposes, we'll call <kbd>Ctrl</kbd> with `C`. If you see syntax such as `M-[letter]`, that means use the Meta key, most commonly the <kbd>Alt</kbd> key.

### Saving files

```
C-x C-s - Save a file
C-x C-w - Save file as
C-x s - Save all
```

The save file options will prompt you if you want to save each file.

### Opening a file

```
C-x C-f
```

This will prompt you to type a filename to open. If you do not have a file that already exists, it will create a new file. You can load up a directory as well.

Play around with opening files and saving files.

---

## 11. Emacs Buffer Navigation

To move around buffers (or files you're visiting) use the following commands:

### Switch buffers

```
C-x b - switch buffer
C-x right arrow - right-cycle through buffer
C-x left arrow - left-cycle through buffer
```

### Close the buffer

```
C-x k
```

### Split the current buffer

```
C-x 2
```

This allows you see multiple buffers on one screen. To move between these buffers use: `C-x o`

### Set a single buffer as the current screen

```
C-x 1
```

If you ever used a terminal multiplexer like `screen` and `tmux`, the buffer commands will feel very familiar.

Play around with buffers.

---

## 12. Emacs Editing

Text Navigation

```
C-up arrow : move up one paragraph
C-down arrow: move down one paragraph
C-left arrow: move one word left
C-right arrow: move one word right
M-> : move to the end of the buffer
```

With text navigation, your regular text buttons work as they should, <kbd>home</kbd>, <kbd>end</kbd>, <kbd>page up</kbd>, <kbd>page down</kbd> and the arrow keys, etc.

### Cutting and Pasting

To cut (kill) or paste (yank) in Emacs you'll need to be able to select text first. To select text, move your cursor to where you want to cut or paste and hit

```
C-space key
```

then you can use the navigation keys to select the text you want. Now you can do the cut and paste like so:

```
C-w : cut
C-y : yank
```

Play around with text navigation.

---

## 13. Emacs Exiting and Help

### To close out of emacs

```
C-x C-c
```

If you have any open buffers, it will ask you to save it before closing out of emacs.

### Confused?

```
C-h C-h : help menu
```

### Undo

```
C-x u
```

As you can see Emacs has more moving parts, so the learning curve is a little steeper. In exchange though, you get a very powerful text editor.

Visit the Emacs site to learn about more commands. [Emacs](https://www.gnu.org/software/emacs)

