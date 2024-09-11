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
      content: Article(s) > How the Comma Ok Idiom and Package System Work in Go
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
  name="How the Comma Ok Idiom and Package System Work in Go"
  desc="One of the biggest strengths of Go is its compiler. It abstracts many things for you and lets you compile your program easily for almost any platform and architecture. And though it seems easy, there are some nuances to it and multiple ways of compil..."
  url="https://freecodecamp.org/news/golang-statically-and-dynamically-linked-go-binaries/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725977444176/20f3bebf-e250-45c3-926e-146d50e4db93.png"/>

<!-- TODO: 작성 -->

<!-- 
<p>One of the biggest strengths of Go is its compiler. It abstracts many things for you and lets you compile your program easily for almost any <a target="_blank" href="https://pkg.go.dev/cmd/dist">platform and architecture</a>.</p>
<p>And though it seems easy, there are some nuances to it and multiple ways of compiling the same program which results in different executables.</p>
<p>In this article, we’ll explore statically and dynamically linked executables, internal and external linkers, and examine binaries using tools like <strong>file, ld</strong>, and <strong>ldd</strong>.</p>
<h3 id="heading-heres-what-well-cover">Here's what we'll cover:</h3>
<ul>
<li><p><a class="post-section-overview" href="#heading-overview">Overview</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-what-is-static-and-dynamic-linking">What is Static and Dynamic linking?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-statically-linked-program">Statically Linked Program</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-what-is-a-binary-anyway">What is a binary anyway?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-dynamically-linked-program">Dynamically Linked Program</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-can-we-make-it-statically-linked">Can we make it statically linked?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-internal-vs-external-linker">Internal vs External linker</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-cross-compilation">Cross-Compilation</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-bonus-point-reduce-binary-size">Bonus Point: Reduce binary size</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-beware-ldpreload-trick">Beware: LD_PRELOAD trick</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-conclusion">Conclusion</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-further-reads">Further Reads</a></p>
</li>
</ul>
<h2 id="heading-what-is-static-and-dynamic-linking">What is Static and Dynamic linking?</h2>
<p><strong>Static linking</strong> is the practice of copying all the libraries your program needs directly into the final executable file image.</p>
<p>And Go <em>loves and wants</em> that whenever it’s possible. This is because it's more portable, as it doesn’t require the presence of the library on the host system where it runs. So your binary can run on any system no matter which distro/version, and it won't depend on any system libraries.</p>
<p><strong>Dynamic linking</strong>, on the other hand, is when external or shared libraries are copied into the executable file <em>by name during run time</em>.</p>
<p>And it has its own advantages, too. For example the program can re-use popular <strong>libc</strong> libraries that are available on the host system and not re-implement them. You can also benefit from host updates without re-linking your program. It can also reduce the executable file size in many cases.</p>
<h2 id="heading-statically-linked-program">Statically Linked Program</h2>
<p>Let’s review a program that will <em>always</em> get statically linked. This program doesn’t call C code using <a target="_blank" href="https://pkg.go.dev/cmd/cgo"><strong>cgo</strong></a>, so everything can be packaged in a static binary. Our program only prints a simple message to stdout, which Go can do internally without needing to use something from <strong>libc</strong>.</p>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hi, user"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<h2 id="heading-what-is-a-binary-anyway">What is a Binary Anyway?</h2>
<p>We can use a <a target="_blank" href="https://www.man7.org/linux/man-pages/man1/file.1.html"><strong>file</strong></a> program to examine the file type first.</p>
<pre class="language-bash" tabindex="0"><code class="language-bash">$ go build main1.go

$ <span class="token function">file</span> main1 <span class="token operator">|</span> <span class="token function">tr</span> , <span class="token string">'\n'</span>
main1: ELF <span class="token number">64</span>-bit LSB executable
 ARM aarch64
 version <span class="token number">1</span> <span class="token punctuation">(</span>SYSV<span class="token punctuation">)</span>
 statically linked
 Go <span class="token assign-left variable">BuildID</span><span class="token operator">=</span><span class="token punctuation">..</span>.
 with debug_info
 not stripped
</code></pre>
<p>It tells us that it’s an <a target="_blank" href="https://wiki.osdev.org/ELF"><strong>ELF</strong></a> (Executable and Linkable Format) executable file. It also tells us that it’s “statically linked“.</p>
<p>We won’t dive into what ELF is, but there are other executable file formats. ELF is the default one on Linux, Mach-O is the default one for macOS, PE/PE32+ for Windows, and so on.</p>
<p>Note: in this article we’ll be working with Linux (Ubuntu) and its tooling, but the same is possible on other platforms.</p>
<p>And there is another Linux program called <a target="_blank" href="https://man7.org/linux/man-pages/man1/ldd.1.html"><strong>ldd</strong></a> that can tell us if the binary is statically or dynamically linked.</p>
<pre class="language-bash" tabindex="0"><code class="language-bash">$ ldd main1
not a dynamic executable
</code></pre>
<h2 id="heading-dynamically-linked-program">Dynamically Linked Program</h2>
<p>As mentioned above, Go has a mechanism called <strong>cgo</strong> to call C code from Go. Even Go’s stdlib uses it in multiple places – for example in the <a target="_blank" href="https://pkg.go.dev/net"><strong>net</strong></a> package, where it uses the standard C library to work with DNS.</p>
<p>Importing such packages or using cgo in your code by default produces a dynamically-linked binary, linked to those <strong>libc</strong> libraries.</p>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"log"</span>
    <span class="token string">"net"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ipv4Addr<span class="token punctuation">,</span> ipv4Net<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ParseCIDR</span><span class="token punctuation">(</span><span class="token string">"192.0.2.1/24"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ipv4Addr<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ipv4Net<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<p>We can use our <strong>file</strong> and <strong>ldd</strong> programs again to examine the second binary.</p>
<pre class="language-bash" tabindex="0"><code class="language-bash">$ go build main2.go

$ <span class="token function">file</span> main2 <span class="token operator">|</span> <span class="token function">tr</span> , <span class="token string">'\n'</span>
main2: ELF <span class="token number">64</span>-bit LSB executable
 ARM aarch64
 version <span class="token number">1</span> <span class="token punctuation">(</span>SYSV<span class="token punctuation">)</span>
 dynamically linked
 interpreter /lib/ld-linux-aarch64.so.1
 Go <span class="token assign-left variable">BuildID</span><span class="token operator">=</span><span class="token punctuation">..</span>.
 with debug_info
 not stripped

$ ldd main2
    linux-vdso.so.1 <span class="token punctuation">(</span>0x0000ffff87c81000<span class="token punctuation">)</span>
    libc.so.6 <span class="token operator">=</span><span class="token operator">&gt;</span> /lib/aarch64-linux-gnu/libc.so.6 <span class="token punctuation">(</span>0x0000ffff87a80000<span class="token punctuation">)</span>
    /lib/ld-linux-aarch64.so.1 <span class="token punctuation">(</span>0x0000ffff87c44000<span class="token punctuation">)</span>
</code></pre>
<p>The <strong>file</strong> program now shows us that it is a <strong>dynamically liked</strong> binary and <strong>ldd</strong> shows us the dynamic dependencies of our binary. In this case it relies on <strong>libc.so.6</strong> and <strong>ld-linux</strong> which is a dynamic linker for Linux systems.</p>
<h2 id="heading-can-we-make-it-statically-linked">Can We Make it Statically Linked?</h2>
<p>There are multiple reasons why you might want your binaries to be static, but the main one is to make deployment and distribution easier. But! It’s not always necessary, and by linking <strong>libc</strong> you benefit from host updates. Also, in case of our <strong>net</strong> package, you use those complex DNS lookup functions included in <strong>libc</strong>.</p>
<p>What’s interesting is that Go’s net package also has a pure-Go version, which makes it possible to disable cgo during compile time. You can do it by specifying build tags or by fully disabling cgo using <strong>CGO_ENABLED=0</strong>.</p>
<pre class="language-bash" tabindex="0"><code class="language-bash">$ go build <span class="token parameter variable">-tags</span> netgo main2.go
$ ldd main2
not a dynamic executable

$ <span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> go build main2.go
$ ldd main2
not a dynamic executable
</code></pre>
<p>The above proves that we end up with a static binary in both cases.</p>
<h2 id="heading-internal-vs-external-linker">Internal vs External Linker</h2>
<p>Linker is a program that reads the Go archive or object for a package main, along with its dependencies, and combines them into an executable binary.</p>
<p>By default, Go’s toolchain uses its internal linker (<a target="_blank" href="https://pkg.go.dev/cmd/link">go tool link</a>), but you can specify which linker to use during the compilation time. This can give you a combination of benefits of a static binary as well as full-fledged libc capabilities.</p>
<p>On Linux, the default linker is gcc’s <a target="_blank" href="https://man7.org/linux/man-pages/man1/ld.1.html"><strong>ld</strong></a>. And we can tell it to produce a static binary.</p>
<pre class="language-bash" tabindex="0"><code class="language-bash">$ go build <span class="token parameter variable">-ldflags</span> <span class="token string">"-linkmode 'external' -extldflags '-static'"</span> main2.go
<span class="token comment"># command-line-arguments</span>
/usr/bin/ld: /tmp/go-link-629224677/000004.o: <span class="token keyword">in</span> <span class="token keyword">function</span> `_cgo_97ab22c4dc7b_C2func_getaddrinfo<span class="token string">':
/tmp/go-build/cgo_unix_cgo.cgo2.c:60:(.text+0x30):
warning: Using '</span>getaddrinfo' <span class="token keyword">in</span> statically linked applications requires at runtime the shared libraries from the glibc version used <span class="token keyword">for</span> linking
$ ldd main2
not a dynamic executable
</code></pre>
<p>It works, but we have a warning here. In our case <strong>glibc</strong> uses <strong>libnss</strong> to support a number of different providers for address resolution services and you cannot statically link libnss.</p>
<p>Other cgo packages may produce similar warnings and you’ll have to check the documentation to see if they’re critical or not.</p>
<h2 id="heading-cross-compilation">Cross-Compilation</h2>
<p>As mentioned in the introduction, cross-compilation is a very nice feature of Go. It lets you compile your program for almost any platform/architecture. But it can be very tricky if your program uses <strong>cgo</strong>, because it’s generally tricky to cross-compile C code.</p>
<pre class="language-bash" tabindex="0"><code class="language-bash">$ <span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>darwin <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>arm64 go build main2.go
$ <span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>darwin <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>arm64 go build main2.go
<span class="token comment"># runtime/cgo</span>
cgo: C compiler <span class="token string">"clang"</span> not found: exec: <span class="token string">"clang"</span><span class="token builtin class-name">:</span>
executable <span class="token function">file</span> not found <span class="token keyword">in</span> <span class="token environment constant">$PATH</span>
</code></pre>
<p>You can overcome that by installing the toolchain for the target OS and/or architecture.</p>
<p>If you can, it’s always better to just not use <strong>cgo</strong> for cross-compilation. You’ll get stable binaries which are statically linked.</p>
<h2 id="heading-bonus-point-reduce-binary-size">Bonus Point: Reduce Binary Size</h2>
<p>As you may notice, the output of the <strong>file</strong> command above had the following: “with debug_info not stripped“. This means that our binary has debugging information in it. But we usually don’t need it, and removing it may reduce the binary size.</p>
<pre class="language-bash" tabindex="0"><code class="language-bash">$ go build main1.go
$ <span class="token function">du</span> <span class="token parameter variable">-sh</span> main1
<span class="token number">1</span>.9M    main1

$ go build <span class="token parameter variable">-ldflags</span><span class="token operator">=</span><span class="token string">"-w -s"</span> main1.go
$ <span class="token function">du</span> <span class="token parameter variable">-sh</span> main1
<span class="token number">1</span>.3M    main1

$ <span class="token function">file</span> main1 <span class="token operator">|</span> <span class="token function">tr</span> , <span class="token string">'\n'</span>
main1: ELF <span class="token number">64</span>-bit LSB executable
 ARM aarch64
 version <span class="token number">1</span> <span class="token punctuation">(</span>SYSV<span class="token punctuation">)</span>
 statically linked
 Go <span class="token assign-left variable">BuildID</span><span class="token operator">=</span><span class="token punctuation">..</span>.
 stripped
</code></pre>
<h2 id="heading-beware-ldpreload-trick">Beware: LD_PRELOAD Trick</h2>
<p>The Linux system program ld-linux.so (dynamic linker/loader) uses <strong>LD_PRELOAD</strong> to load specified shared libraries. In particular, before any other library, the dynamic loader will first load shared libraries that are in LD_PRELOAD.</p>
<p>The LD_PRELOAD trick is a powerful technique used in dynamically linked binaries to override or intercept function calls to shared libraries.</p>
<p>By setting the LD_PRELOAD environment variable to point to a custom shared object file, users can inject their own code into a program's execution, effectively replacing or augmenting existing library functions.</p>
<p>This method allows for various applications, such as debugging, testing, and even modifying program behaviour without altering the original source code.</p>
<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token assign-left variable">LD_PRELOAD</span><span class="token operator">=</span>/path/to/my/malloc.so /bin/ls
</code></pre>
<p>It also shows that <strong>statically linked binaries</strong> are more secure, as they don’t have this issue since they don’t seek any external libraries. Also, there is a “<strong>secure-execution mode”</strong> – a security feature implemented by the dynamic linker on Linux systems to restrict certain behaviours when running programs that require elevated privileges.</p>
<h2 id="heading-conclusion">Conclusion</h2>
<p>Computers are not magic, you just have to understand them.</p>
<p>And understanding Go compilation and execution processes is crucial for developing robust cross-platform applications.</p>
<p>Hopefully, after reading this article, you now have a better understanding of how Go compilation works.</p>
<h3 id="heading-further-reads">Further Reads</h3>
<ul>
<li><p><a target="_blank" href="https://packagemain.tech/">Explore more articles from packagemain.tech</a></p>
</li>
<li><p><a target="_blank" href="https://github.com/plutov/packagemain/tree/master/static-dynamic-linking">Source Code</a></p>
</li>
<li><p><a target="_blank" href="https://cs.opensource.google/go/go/+/refs/tags/go1.19.3:src/cmd/cgo/doc.go">src/cmd/cgo/doc.go</a></p>
</li>
<li><p><a target="_blank" href="https://pkg.go.dev/cmd/link">cmd/link</a></p>
</li>
<li><p><a target="_blank" href="https://jvns.ca/blog/2021/11/17/debugging-a-weird--file-not-found--error/">Debugging a weird 'file not found' error</a></p>
</li>
<li><p><a target="_blank" href="http://dbp-consulting.com/tutorials/debugging/linuxProgramStartup.html">How the heck do we get to main()</a></p>
</li>
<li><p><a target="_blank" href="https://embeddedartistry.com/blog/2019/04/08/a-general-overview-of-what-happens-before-main/">A General Overview of What Happens Before main()</a></p>
</li>
<li><p><a target="_blank" href="https://www.youtube.com/watch?v=q8irLfXwaFM">Rust Before Main</a></p>
</li>
</ul>
-->

---

<TagLinks />