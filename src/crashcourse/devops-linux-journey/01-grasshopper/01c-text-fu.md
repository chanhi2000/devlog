---
lang: ko-KR
title: GrassHopper > Text-Fu
description: 🐧Linux Journey > GrassHopper > Text-Fu
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > GrassHopper > Text-Fu
    content: Text-Fu
  - property: og:title
    content: Text-Fu
  - property: og:description
    content: 🐧Linux Journey > GrassHopper > Text-Fu
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/01-grasshopper
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Text-Fu
desc: Learn basic text manipulation and navigation.
link: https://linuxjourney.com/lesson/stdout-standard-out-redirect
logo: https://linuxjourney.com/assets/text-fu-622e3761a4638fdc72b7c21d2e6d41ae71861da119bdafe677a9bafa0627f1ca.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. `stdout` (Standard Out)

By now, we've become familiar with many commands and their output and that brings us to our next subject I/O (input/output) streams. Let's run the following command and we'll discuss how this works.

```sh
echo Hello World > peanuts.txt
```

What just happened? Well check the directory where you ran that command and lo and behold you should see a file called peanuts.txt, look inside that file and you should see the text Hello World. Lots of things just happened in one command so let's break it down.

First let's break down the first part:

```sh
echo Hello World
```

We know this prints out Hello World to the screen, but how? Processes use I/O streams to receive input and return output. By default the echo command takes the input (standard input or stdin) from the keyboard and returns the output (standard output or `stdout`) to the screen. So that's why when you type echo Hello World in your shell, you get Hello World on the screen. However, I/O redirection allows us to change this default behavior giving us greater file flexibility.

Let's proceed to the next part of the command:

```sh
 > 
```

The > is a redirection operator that allows us the change where standard output goes. It allows us to send the output of echo Hello World to a file instead of the screen. If the file does not already exist it will create it for us. However, if it does exist it will overwrite it (you can add a shell flag to prevent this depending on what shell you are using).

And that's basically how `stdout` redirection works!

Well let's say I didn't want to overwrite my <FontIcon icon="iconfont icon-file"/>`peanuts.txt`, luckily there is a redirection operator for that as well, `>>`:

```sh
echo Hello World >> peanuts.txt
```

This will append Hello World to the end of the <FontIcon icon="iconfont icon-file"/>`peanuts.txt` file, if the file doesn't already exist it will create it for us like it did with the `>` redirector!

Try a couple of commands:

```sh
ls -l /var/log > myoutput.txt
echo Hello World > rm
> somefile.txt
```

---

## 2. `stdin` (Standard In)

In our previous lesson we learned that we have different stdout streams we can use, such as a file or the screen. Well there are also different standard input (`stdin`) streams we can use as well. We know that we have `stdin` from devices like the keyboard, but we can use files, output from other processes and the terminal as well, let's see an example.

Let's use the peanuts.txt file in the previous lesson for this example, remember it had the text Hello World in it.

```sh
cat < peanuts.txt > banana.txt 
```

Just like we had `>` for `stdout` redirection, we can use `<` for `stdin` redirection.

Normally in the cat command, you send a file to it and that file becomes the `stdin`, in this case, we redirected <FontIcon icon="iconfont icon-file"/>`peanuts.txt` to be our stdin. Then the output of cat <FontIcon icon="iconfont icon-file"/>`peanuts.txt` which would be Hello World gets redirected to another file called <FontIcon icon="iconfont icon-file"/>`banana.txt`.

Try out a couple of commands:

```sh
echo < peanuts.txt > banana.txt
ls < peanuts.txt > banana.txt
pwd < peanuts.txt > banana.txt
```

---

## 3. stderr (Standard Error)

Let's try something a little different now, let's try to list the contents of a directory that doesn't exist on your system and redirect the output to the peanuts.txt file again.

```sh
ls /fake/directory > peanuts.txt
```

What you should see is:

```
ls: cannot access /fake/directory: No such file or directory
```

Now you're probably thinking, shouldn't that message have been sent to the file? There is actually another I/O stream in play here called standard error (`stderr`). By default, `stderr` sends its output to the screen as well, it's a completely different stream than `stdout`. So you'll need to redirect its output a different way.

Unfortunately the redirector is not as nice as using `<` or `>` but it's pretty close. We will have to use file descriptors. A file descriptor is a non-negative number that is used to access a file or stream. We will go in depth about this later, but for now know that the file descriptor for `stdin`, `stdout` and `stderr` is 0, 1, and 2 respectively.

So now if we want to redirect our stderr to the file we can do this:

```sh
ls /fake/directory 2> peanuts.txt
```

You should see just the stderr messages in <FontIcon icon="iconfont icon-file"/>`peanuts.txt`.

Now what if I wanted to see both stderr and stdout in the <FontIcon icon="iconfont icon-file"/>`peanuts.txt` file? It's possible to do this with file descriptors as well:

```sh
ls /fake/directory > peanuts.txt 2>&1
```

This sends the results of `ls` `/fake/directory` to the <FontIcon icon="iconfont icon-file"/>`peanuts.txt` file and then it redirects `stderr` to the stdout via `2>&1`. The order of operations here matters, `2>&1` sends stderr to whatever stdout is pointing to. In this case stdout is pointing to a file, so `2>&1` also sends stderr to a file. So if you open up that <FontIcon icon="iconfont icon-file"/>`peanuts.txt` file you should see both `stderr` and `stdout`. In our case, the above command only outputs stderr.

There is a shorter way to redirect both `stdout` and `stderr` to a file:

```sh
ls /fake/directory &> peanuts.txt
```

Now what if I don't want any of that cruft and want to get rid of stderr messages completely? Well you can also redirect output to a special file call <FontIcon icon="iconfont icon-file"/>`/dev/null` and it will discard any input.

```sh
ls /fake/directory 2> /dev/null
```

What is the following command doing?

```sh
ls /fake/directory >> /dev/null 2>&1
```

---

## 4. pipe and tee

Let's get into some plumbing now, not really but kinda. Let's try a command:

```sh
ls -la /etc
```

You should see a very long list of items, it's a little hard to read actually. Instead of redirecting this output to a file, wouldn't it be nice if we could just see the output in another command like less? Well we can!

```sh
ls -la /etc | less 
```

The pipe operator `|`, represented by a vertical bar, allows us to get the `stdout` of a command and make that the `stdin` to another process. In this case, we took the stdout of `ls -la /etc` and then piped it to the `less` command. The pipe command is extremely useful and we will continue to use it for all eternity.

Well what if I wanted to write the output of my command to two different streams? That's possible with the tee command:

```sh
ls | tee peanuts.txt
```

You should see the output of ls on your screen and if you open up the <FontIcon icon="iconfont icon-file"/>`peanuts.txt` file you should see the same information!

Try the following commands:

```sh
ls | tee peanuts.txt banan.txt
```

---

## 5. env (Environment)

Run the following command:

```sh
echo $HOME
```

You should see the path to your home directory, mine looks like /home/pete.

What about this command?

```sh
echo $USER 
```

You should see your username!

Where is this information coming from? It's coming from your environment variables. You can view these by typing

```sh
env 
```

This outputs a whole lot of information about the environment variables you currently have set. These variables contain useful information that the shell and other processes can use.

Here is a short example:

```sh
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/bin
PWD=/home/user
USER=pete
```

One particularly important variable is the PATH Variable. You can access these variables by sticking a `$` infront of the variable name like so:

```sh
$ echo $PATH
# /usr/local/sbin:/usr/local/bin:/usr/sbin:/bin
```

This returns a list of paths separated by a colon that your system searches when it runs a command. Let's say you manually download and install a package from the internet and put it in to a non standard directory and want to run that command, you type `$` coolcommand and the prompt says command not found. Well that's silly you are looking at the binary in a folder and know it exists. What is happening is that $PATH variable doesn't check that directory for this binary so it's throwing an error.

Let's say you had tons of binaries you wanted to run out of that directory, you can just modify the `PATH` variable to include that directory in your `PATH` environment variable.

What does the following output? Why?

```sh
echo $HOME
```

---

## 6. `cut`

We're gonna learn a couple of useful commands that you can use to process text. Before we get started, let's create a file that we'll be working with. Copy and paste the following command, once you do that add a <kbd>TAB</kbd> in between lazy and dog (hold down <kbd>Ctrl</kbd>-<kbd>v</kbd> + <kbd>TAB</kbd>).

```sh
echo 'The quick brown; fox jumps over the lazy  dog' > sample.txt
```

First command we'll be learning about is the `cut` command. It extracts portions of text from a file.

To extract contents by a list of characters:

```sh
cut -c 5 sample.txt
```

This outputs the 5th character in each line of the file. In this case it is "q", note that the space also counts as a character.

To extract the contents by a field, we'll need to do a little modification:

```sh
cut -f 2 sample.txt
```

The `-f` or field flag cuts text based off of fields, by default it uses TABs as delimiters, so everything separated by a <kbd>TAB</kbd> is considered a field. You should see "dog" as your output.

You can combine the field flag with the delimiter flag to extract the contents by a custom delimiter:

```sh
cut -f 1 -d ";" sample.txt
```

This will change the <kbd>TAB</kbd> delimiter to a ";" delimiter and since we are cutting the first field, the result should be "The quick brown".

What does the following command do? Why?

```sh
cut -c 5-10 sample.txt
cut -c 5- sample.txt
cut -c -5 sample.txt
```

---

## 7. `paste`

The paste command is similar to the `cat` command, it merges lines together in a file. Let's create a new file with the following contents:

```
sample2.txt
The
quick
brown
fox
```

Let's combine all these lines into one line:

```sh
paste -s sample2.txt
```

The default delimiter for paste is <kbd>TAB</kbd>, so now there is one line with TABs separating each word.

Let's change this delimiter (`-d`) to something a little more readable:

```sh
paste -d ' ' -s sample2.txt
```

Now everything should be on one line delimited by spaces.

---

## 8. `head`

Let's say we have a very long file, in fact we have many to choose from, go ahead and `cat /var/log/syslog`. You should see pages upon pages of text. What if I just wanted to see the first couple of lines in this text file? Well we can do that with the head command, by default the head command will show you the first 10 lines in a file.

```sh
head /var/log/syslog
```

You can also modify the line count to whatever you choose, let's say I wanted to see the first 15 lines instead.

```sh
head -n 15 /var/log/syslog
```

The `-n` flag stands for number of lines.

What does the following command do and why?

```sh
head -c 15 /var/log/syslog
```

---

## 9. `tail`

Similar to the head command, the tail command lets you see the last 10 lines of a file by default.

```sh
tail /var/log/syslog
```

Along with head you can change the number of lines you want to see.

```sh
tail -n 10 /var/log/syslog
```

Another great option you can use is the `-f` (follow) flag, this will follow the file as it grows. Give it a try and see what happens.

```sh
tail -f /var/log/syslog
```

Your syslog file will be continually changing while you interact with your system and using tail `-f` you can see everything that is getting added to that file.

Look at the man page of tail and read some of the other commands we didn't discuss.

```sh
man tail
```

---

## 10. `expand` and `unexpand`

In our lesson on the cut command, we had our <FontIcon icon="iconfont icon-file"/>`sample.txt` file that contained a tab. Normally TABs would usually show a noticeable difference but some text files don't show that well enough. Having TABs in a text file may not be the desired spacing you want. To change your TABs to spaces, use the expand command.

```sh
expand sample.txt
```

The command above will print output with each TAB converted into a group of spaces. To save this output in a file, use output redirection like below.

```sh
expand sample.txt > result.txt
```

Opposite to expand, we can convert back each group of spaces to a TAB with the unexpand command:

```sh
unexpand -a result.txt
```

---

## 11. `join` and `split`

The join command allows you to join multiple files together by a common field:

Let's say I had two files that I wanted to join together:

```sh
cat file1.txt
# 1 John
# 2 Jane
# 3 Mary

cat file2.txt
# 1 Doe
# 2 Doe
# 3 Sue

join file1.txt file2.txt
# 1 John Doe
# 2 Jane Doe
# 3 Mary Sue
```

See how it joined together my files? They are joined together by the first field by default and the fields have to be identical, if they are not you can sort them, so in this case the files are joined via 1, 2, 3.

How would we join the following files?

```
file1.txt
John 1
Jane 2
Mary 3

file2.txt
1 Doe
2 Doe
3 Sue
```

To join this file you need to specify which fields you are joining, in this case we want field 2 on <FontIcon icon="iconfont icon-file"/>`file1.txt` and field 1 on <FontIcon icon="iconfont icon-file"/>`file2.txt`, so the command would look like this:

```sh
$ join -1 2 -2 1 file1.txt file2.txt
# 1 John Doe
# 2 Jane Doe
# 3 Mary Sue
```

`-1` refers to <FontIcon icon="iconfont icon-file"/>`file1.txt` and `-2` refers to <FontIcon icon="iconfont icon-file"/>`file2.txt`. Pretty neat. You can also split a file up into different files with the split command:

```sh
split somefile
```

This will split it into different files, by default it will split them once they reach a 1000 line limit. The files are named `x**` by default.

---

## 12. sort

The `sort` command is useful for sorting lines.

```sh
cat file1.txt
# dog
# cow
# cat
# elephant
# bird

sort file1.txt
# bird
# cat
# cow
# dog
# elephant
```

You can also do a reverse sort:

```sh
sort -r file1.txt
# elephant
# dog
# cow
# cat
# bird
```

And also sort via numerical value:

```sh
sort -n file1.txt
# bird
# cat
# cow
# elephant
# dog
```

The real power of sort comes with its ability to be combined with other commands, try the following command and see what happens?

```sh
ls /etc | sort -rn
```

---

## 13. `tr` (Translate)

The `tr` (translate) command allows you to translate a set of characters into another set of characters. Let's try an example of translating all lower case characters to uppercase characters.

```sh
tr a-z A-Z
# hello
# HELLO
```

As you can see we made the ranges of `a-z` into `A-Z` and all text we type that is lowercase gets uppercased.

Try the following command what happens?

```sh
tr -d ello
# hello
# h
```

---

## 14. `uniq` (Unique)

The `uniq` (unique) command is another useful tool for parsing text.

Let's say you had a file with lots of duplicates:

```sh
cat reading.txt
# book
# book
# paper
# paper
# article
# article
# magazine
```

And you wanted to remove the duplicates, well you can use the uniq command:

```sh
uniq reading.txt
# book
# paper
# article
# magazine
```

Let's get the count of how many occurrences of a line:

```sh
uniq -c reading.txt
# 2 book
# 2 paper
# 2 article
# 1 magazine
```

Let's just get unique values:

```sh
uniq -u reading.txt
# magazine
```

Let's just get duplicate values:

```sh
uniq -d reading.txt
# book
# paper
# article
```

__Note__: uniq does not detect duplicate lines unless they are adjacent. For eg:

Let's say you had a file with duplicates which are not adjacent:

```sh
cat reading.txt
# book
# paper
# book
# paper
# article
# magazine
# article
```

```sh
uniq reading.txt
# book
# paper
# book
# paper
# article
# magazine
# article
```

The result returned by uniq will contain all the entries unlike the very first
example.

To overcome this limitation of uniq we can use sort in combination with uniq:

```sh
sort reading.txt | uniq
# article
# book
# magazine
# paper
```

What result would you get if you tried `uniq -uc`?

---

## 15. `wc` and `nl`

The `wc` (word count) command shows the total count of words in a file.

```sh
wc /etc/passwd
# 96     265    5925 /etc/passwd
```

It display the number of lines, number of words and number of bytes, respectively.

To just see just the count of a certain field, use the `-l`, `-w`, or `-c` respectively.

```sh
wc -l /etc/passwd
# 96
```

Another command you can use to check the count of lines on a file is the `nl` (number lines) command.

```sh
file1.txt
# i
# like
# turtles

nl file1.txt
# 1. i
# 2. like
# 3. turtles
```

How would you get the total count of lines by using the `nl` file without searching through the entire output? __Hint__: Use some of the other commands you learned in this course.

---

## 16. `grep`

The `grep` command is quite possibly the most common text processing command you will use. It allows you to search files for characters that match a certain pattern. What if you wanted to know if a file existed in a certain directory or if you wanted to see if a string was found in a file? You certainly wouldn't dig through every line of text, you would use `grep`!

Let's use our <FontIcon icon="iconfont icon-file"/>`sample.txt` file as an example:

```sh
grep fox sample.txt
```

You should see that grep found fox in the <FontIcon icon="iconfont icon-file"/>`sample.txt` file.

You can also grep patterns that are case insensitive with the `-i` flag:

```sh
grep -i somepattern somefile
```

To get even more flexible with grep you can combine it with other commands with `|`.

```sh
env | grep -i User
```

As you can see grep is pretty versatile. You can even use regular expressions in your pattern:

```sh
ls /somedir | grep '.txt$'
```

Should return all files ending with `.txt` in somedir.

You may have heard of `egrep` or `fgrep`, these are deprecated grep calls and have since been replaced by `grep -E` and `grep -F`. Read the `grep` manpage to learn more.
