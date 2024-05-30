---
lang: ko-KR
title: Tips
description: C > Tips
icon: fas fa-lightbulb
category: 
  - C
  - Tips
tag: 
  - c
  - cpp
  - c++
  - process
  - forking
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Process: forking

### What?

Fork is a function that is used to create a new proces.

```c
pid_t child_pid;
child_pid = fork();
if (child_pid == 0) {
    // Child process starts here
}
// Parent process resumes here
```

`fork()` returns the process id of the child. In the parent process, because `child_pid != 0`, it will resume after the `if` statement's code block. For the child process, `fork()` returns `0` and hence `child_pid == 0`.

### Address Space

Because different processes have different address spaces, the parent and child processes also have different address spaces. However the child process will have the exact same copy of the address space of the parent process!

### Wait

To wait for the child process to terminate, the parent process can call `wait()` or `waitpid()`. This will allow the parent to get the status of the child process.

---

## Process: execv

### What?

Continuing the use of `fork()` in the previous post, we use `execv()` to replace the child process' program with another program image. This is because `fork()` only creates a child process that has the same address space and prgram image as the parent process.

Take note that the child process' stack is replaced with the arguments given to it via `execv()`. The rest of the address space is also replaced.

```c
char *args[] = {"ls", "-l", NULL};
execv("/bin/ls", args);
```

There are few parts to the function

- First argument (_e.g._ `/bin/ls`): This is the filepath of the program that you want to run. It can also be a program that you wrote
- Second argument: `args` is a char array where the first element is the pogram name (_e.g._ `ls`). The subsequent elements are arguments to the program.
A `NULL` (null pointer) is used to indicate the end of elements in the array.

---

<TagLinks />