---
lang: ko-KR
title: How Statically and Dynamically Linked Go Binaries Work
description: Article(s) > How Statically and Dynamically Linked Go Binaries Work
icon: fa-brands fa-golang
category: 
  - Go
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - go
  - golang
head:
  - - meta:
    - property: og:title
      content: Article(s) > How Statically and Dynamically Linked Go Binaries Work
    - property: og:description
      content: How Statically and Dynamically Linked Go Binaries Work
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/golang-statically-and-dynamically-linked-go-binaries.html
prev: /programming/go/articles/README.md
date: 2024-09-10
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725977444176/20f3bebf-e250-45c3-926e-146d50e4db93.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Go > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/go/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How Statically and Dynamically Linked Go Binaries Work"
  desc="One of the biggest strengths of Go is its compiler. It abstracts many things for you and lets you compile your program easily for almost any platform and architecture. And though it seems easy, there are some nuances to it and multiple ways of compil..."
  url="https://freecodecamp.org/news/golang-statically-and-dynamically-linked-go-binaries/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725977444176/20f3bebf-e250-45c3-926e-146d50e4db93.png"/>

<!-- TODO: 작성 -->

<!-- 
One of the biggest strengths of Go is its compiler. It abstracts many things for you and lets you compile your program easily for almost any <a href="https://pkg.go.dev/cmd/dist">platform and architecture</a>.

And though it seems easy, there are some nuances to it and multiple ways of compiling the same program which results in different executables.

In this article, we’ll explore statically and dynamically linked executables, internal and external linkers, and examine binaries using tools like **file, ld**, and **ldd**.

### -heres-what-well-cover">Here's what we'll cover:

- <a class="post-section-overview" href="#heading-overview">Overview</a>
<li><a class="post-section-overview" href="#heading-what-is-static-and-dynamic-linking">What is Static and Dynamic linking?</a>
<li><a class="post-section-overview" href="#heading-statically-linked-program">Statically Linked Program</a>
<li><a class="post-section-overview" href="#heading-what-is-a-binary-anyway">What is a binary anyway?</a>
<li><a class="post-section-overview" href="#heading-dynamically-linked-program">Dynamically Linked Program</a>
<li><a class="post-section-overview" href="#heading-can-we-make-it-statically-linked">Can we make it statically linked?</a>
<li><a class="post-section-overview" href="#heading-internal-vs-external-linker">Internal vs External linker</a>
<li><a class="post-section-overview" href="#heading-cross-compilation">Cross-Compilation</a>
<li><a class="post-section-overview" href="#heading-bonus-point-reduce-binary-size">Bonus Point: Reduce binary size</a>
<li><a class="post-section-overview" href="#heading-beware-ldpreload-trick">Beware: LD_PRELOAD trick</a>
<li><a class="post-section-overview" href="#heading-conclusion">Conclusion</a>
<li><a class="post-section-overview" href="#heading-further-reads">Further Reads</a>

---

## -what-is-static-and-dynamic-linking">What is Static and Dynamic linking?

**Static linking** is the practice of copying all the libraries your program needs directly into the final executable file image.

And Go *loves and wants* that whenever it’s possible. This is because it's more portable, as it doesn’t require the presence of the library on the host system where it runs. So your binary can run on any system no matter which distro/version, and it won't depend on any system libraries.

**Dynamic linking**, on the other hand, is when external or shared libraries are copied into the executable file *by name during run time*.

And it has its own advantages, too. For example the program can re-use popular **libc** libraries that are available on the host system and not re-implement them. You can also benefit from host updates without re-linking your program. It can also reduce the executable file size in many cases.

---

## -statically-linked-program">Statically Linked Program

Let’s review a program that will *always* get statically linked. This program doesn’t call C code using <a href="https://pkg.go.dev/cmd/cgo">**cgo**</a>, so everything can be packaged in a static binary. Our program only prints a simple message to stdout, which Go can do internally without needing to use something from **libc**.

<pre class="language-go" tabindex="0"><code class="language-go">package</span> main

import</span> "fmt"</span>

func</span> main</span>(</span>)</span> {</span>
    fmt.</span>Println</span>(</span>"hi, user"</span>)</span>
}</span>
```

---

## -what-is-a-binary-anyway">What is a Binary Anyway?

We can use a <a href="https://www.man7.org/linux/man-pages/man1/file.1.html">**file**</a> program to examine the file type first.

<pre class="language-bash" tabindex="0"><code class="language-bash">$ go build main1.go

$ file</span> main1 |</span> tr</span> , '\n'</span>
main1: ELF 64</span>-bit LSB executable
 ARM aarch64
 version 1</span> (</span>SYSV)</span>
 statically linked
 Go BuildID</span>=</span>..</span>.
 with debug_info
 not stripped
```

It tells us that it’s an <a href="https://wiki.osdev.org/ELF">**ELF**</a> (Executable and Linkable Format) executable file. It also tells us that it’s “statically linked“.

We won’t dive into what ELF is, but there are other executable file formats. ELF is the default one on Linux, Mach-O is the default one for macOS, PE/PE32+ for Windows, and so on.

Note: in this article we’ll be working with Linux (Ubuntu) and its tooling, but the same is possible on other platforms.

And there is another Linux program called <a href="https://man7.org/linux/man-pages/man1/ldd.1.html">**ldd**</a> that can tell us if the binary is statically or dynamically linked.

<pre class="language-bash" tabindex="0"><code class="language-bash">$ ldd main1
not a dynamic executable
```

---

## -dynamically-linked-program">Dynamically Linked Program

As mentioned above, Go has a mechanism called **cgo** to call C code from Go. Even Go’s stdlib uses it in multiple places – for example in the <a href="https://pkg.go.dev/net">**net**</a> package, where it uses the standard C library to work with DNS.

Importing such packages or using cgo in your code by default produces a dynamically-linked binary, linked to those **libc** libraries.

<pre class="language-go" tabindex="0"><code class="language-go">package</span> main

import</span> (</span>
    "fmt"</span>
    "log"</span>
    "net"</span>
)</span>

func</span> main</span>(</span>)</span> {</span>
    ipv4Addr,</span> ipv4Net,</span> err :=</span> net.</span>ParseCIDR</span>(</span>"192.0.2.1/24"</span>)</span>
    if</span> err !=</span> nil</span> {</span>
        log.</span>Fatal</span>(</span>err)</span>
    }</span>
    fmt.</span>Println</span>(</span>ipv4Addr)</span>
    fmt.</span>Println</span>(</span>ipv4Net)</span>
}</span>
```

We can use our **file** and **ldd** programs again to examine the second binary.

<pre class="language-bash" tabindex="0"><code class="language-bash">$ go build main2.go

$ file</span> main2 |</span> tr</span> , '\n'</span>
main2: ELF 64</span>-bit LSB executable
 ARM aarch64
 version 1</span> (</span>SYSV)</span>
 dynamically linked
 interpreter /lib/ld-linux-aarch64.so.1
 Go BuildID</span>=</span>..</span>.
 with debug_info
 not stripped

$ ldd main2
    linux-vdso.so.1 (</span>0x0000ffff87c81000)</span>
    libc.so.6 =</span>></span> /lib/aarch64-linux-gnu/libc.so.6 (</span>0x0000ffff87a80000)</span>
    /lib/ld-linux-aarch64.so.1 (</span>0x0000ffff87c44000)</span>
```

The **file** program now shows us that it is a **dynamically liked** binary and **ldd** shows us the dynamic dependencies of our binary. In this case it relies on **libc.so.6** and **ld-linux** which is a dynamic linker for Linux systems.

---

## -can-we-make-it-statically-linked">Can We Make it Statically Linked?

There are multiple reasons why you might want your binaries to be static, but the main one is to make deployment and distribution easier. But! It’s not always necessary, and by linking **libc** you benefit from host updates. Also, in case of our **net** package, you use those complex DNS lookup functions included in **libc**.

What’s interesting is that Go’s net package also has a pure-Go version, which makes it possible to disable cgo during compile time. You can do it by specifying build tags or by fully disabling cgo using **CGO_ENABLED=0**.

<pre class="language-bash" tabindex="0"><code class="language-bash">$ go build -tags</span> netgo main2.go
$ ldd main2
not a dynamic executable

$ CGO_ENABLED</span>=</span>0</span> go build main2.go
$ ldd main2
not a dynamic executable
```

The above proves that we end up with a static binary in both cases.

---

## -internal-vs-external-linker">Internal vs External Linker

Linker is a program that reads the Go archive or object for a package main, along with its dependencies, and combines them into an executable binary.

By default, Go’s toolchain uses its internal linker (<a href="https://pkg.go.dev/cmd/link">go tool link</a>), but you can specify which linker to use during the compilation time. This can give you a combination of benefits of a static binary as well as full-fledged libc capabilities.

On Linux, the default linker is gcc’s <a href="https://man7.org/linux/man-pages/man1/ld.1.html">**ld**</a>. And we can tell it to produce a static binary.

<pre class="language-bash" tabindex="0"><code class="language-bash">$ go build -ldflags</span> "-linkmode 'external' -extldflags '-static'"</span> main2.go
# command-line-arguments</span>
/usr/bin/ld: /tmp/go-link-629224677/000004.o: in</span> function</span> `_cgo_97ab22c4dc7b_C2func_getaddrinfo':
/tmp/go-build/cgo_unix_cgo.cgo2.c:60:(.text+0x30):
warning: Using '</span>getaddrinfo' in</span> statically linked applications requires at runtime the shared libraries from the glibc version used for</span> linking
$ ldd main2
not a dynamic executable
```

It works, but we have a warning here. In our case **glibc** uses **libnss** to support a number of different providers for address resolution services and you cannot statically link libnss.

Other cgo packages may produce similar warnings and you’ll have to check the documentation to see if they’re critical or not.

---

## -cross-compilation">Cross-Compilation

As mentioned in the introduction, cross-compilation is a very nice feature of Go. It lets you compile your program for almost any platform/architecture. But it can be very tricky if your program uses **cgo**, because it’s generally tricky to cross-compile C code.

<pre class="language-bash" tabindex="0"><code class="language-bash">$ CGO_ENABLED</span>=</span>0</span> GOOS</span>=</span>darwin GOARCH</span>=</span>arm64 go build main2.go
$ CGO_ENABLED</span>=</span>1</span> GOOS</span>=</span>darwin GOARCH</span>=</span>arm64 go build main2.go
# runtime/cgo</span>
cgo: C compiler "clang"</span> not found: exec: "clang"</span><span class="token builtin class-name">:</span>
executable file</span> not found in</span> <span class="token environment constant">$PATH</span>
```

You can overcome that by installing the toolchain for the target OS and/or architecture.

If you can, it’s always better to just not use **cgo** for cross-compilation. You’ll get stable binaries which are statically linked.

---

## -bonus-point-reduce-binary-size">Bonus Point: Reduce Binary Size

As you may notice, the output of the **file** command above had the following: “with debug_info not stripped“. This means that our binary has debugging information in it. But we usually don’t need it, and removing it may reduce the binary size.

<pre class="language-bash" tabindex="0"><code class="language-bash">$ go build main1.go
$ du</span> -sh</span> main1
1</span>.9M    main1

$ go build -ldflags</span>=</span>"-w -s"</span> main1.go
$ du</span> -sh</span> main1
1</span>.3M    main1

$ file</span> main1 |</span> tr</span> , '\n'</span>
main1: ELF 64</span>-bit LSB executable
 ARM aarch64
 version 1</span> (</span>SYSV)</span>
 statically linked
 Go BuildID</span>=</span>..</span>.
 stripped
```

---

## -beware-ldpreload-trick">Beware: LD_PRELOAD Trick

The Linux system program ld-linux.so (dynamic linker/loader) uses **LD_PRELOAD** to load specified shared libraries. In particular, before any other library, the dynamic loader will first load shared libraries that are in LD_PRELOAD.

The LD_PRELOAD trick is a powerful technique used in dynamically linked binaries to override or intercept function calls to shared libraries.

By setting the LD_PRELOAD environment variable to point to a custom shared object file, users can inject their own code into a program's execution, effectively replacing or augmenting existing library functions.

This method allows for various applications, such as debugging, testing, and even modifying program behaviour without altering the original source code.

<pre class="language-bash" tabindex="0"><code class="language-bash">LD_PRELOAD</span>=</span>/path/to/my/malloc.so /bin/ls
```

It also shows that **statically linked binaries** are more secure, as they don’t have this issue since they don’t seek any external libraries. Also, there is a “**secure-execution mode”** – a security feature implemented by the dynamic linker on Linux systems to restrict certain behaviours when running programs that require elevated privileges.

---

## -conclusion">Conclusion

Computers are not magic, you just have to understand them.

And understanding Go compilation and execution processes is crucial for developing robust cross-platform applications.

Hopefully, after reading this article, you now have a better understanding of how Go compilation works.

### -further-reads">Further Reads

- <a href="https://packagemain.tech/">Explore more articles from packagemain.tech</a>
<li><a href="https://github.com/plutov/packagemain/tree/master/static-dynamic-linking">Source Code</a>
<li><a href="https://cs.opensource.google/go/go/+/refs/tags/go1.19.3:src/cmd/cgo/doc.go">src/cmd/cgo/doc.go</a>
<li><a href="https://pkg.go.dev/cmd/link">cmd/link</a>
<li><a href="https://jvns.ca/blog/2021/11/17/debugging-a-weird--file-not-found--error/">Debugging a weird 'file not found' error</a>
<li><a href="http://dbp-consulting.com/tutorials/debugging/linuxProgramStartup.html">How the heck do we get to main()</a>
<li><a href="https://embeddedartistry.com/blog/2019/04/08/a-general-overview-of-what-happens-before-main/">A General Overview of What Happens Before main()</a>
<li><a href="https://www.youtube.com/watch?v=q8irLfXwaFM">Rust Before Main</a>

-->

---

<TagLinks />