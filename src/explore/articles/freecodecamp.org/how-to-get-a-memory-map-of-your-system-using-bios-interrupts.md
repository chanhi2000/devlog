---
lang: ko-KR
title: "How to Get a Memory Map of Your System using BIOS Interrupts"
description: "Article(s) > How to Get a Memory Map of Your System using BIOS Interrupts"
icon: fas fa-microchip
category: 
  - Hardware
  - Kernel
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - hardware
  - hw
  - kernel
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to Get a Memory Map of Your System using BIOS Interrupts"
    - property: og:description`
      content: "How to Get a Memory Map of Your System using BIOS Interrupts"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-get-a-memory-map-of-your-system-using-bios-interrupts.html
prev: /hw/articles/README.md
date: 2024-09-23
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/iar-afB0QQw/upload/7b7f724f7260216b7427408112d5f8c4.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hardware > Article(s)",
  "desc": "Article(s)",
  "link": "/hw/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Get a Memory Map of Your System using BIOS Interrupts"
  desc="When you are developing a kernel, one of the most important things is memory. The kernel must know how much memory is available and where it's located to avoid overwriting crucial system resources. But not all memory is freely available for use. Some..."
  url="https://freecodecamp.org/news/how-to-get-a-memory-map-of-your-system-using-bios-interrupts/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/iar-afB0QQw/upload/7b7f724f7260216b7427408112d5f8c4.jpeg"/>

<!-- TODO: 작성 -->

<!-- 
<p>When you are developing a kernel, one of the most important things is memory. The kernel must know how much memory is available and where it's located to avoid overwriting crucial system resources.</p>
<p>But not all memory is freely available for use. Some memory sections are reserved for system functions and others may be occupied by hardware devices. That’s why it is very important to get the system’s memory map.</p>
<h3 id="heading-what-is-a-memory-map">What is a Memory Map?</h3>
<p>But what is a memory map? A memory map is a representation (think about it like a table) that shows how physical memory is organized in your system. It shows the address of each memory region, it’s length and it’s type.</p>
<p>Type 1 means that the region is available for you to use freely and type 2 means that it is reserved by your system. Type 3 means that the region is reserved for the Advanced configuration and power interface (ACPI 3.x). While a type 3 region might not be used by the system, it can be reclaimed later.</p>
<p>Using a memory map will allow you to manage memory resources successfully without any issues such as crashes or system instability.</p>
<p>There are some ways you can detect your system’s available memory. One is by using the BIOS and interrupt 15h. Another one is by doing memory probing.</p>
<p>In this article you will learn which tools are available to help you get a memory map of your system, which ones you should use, and which ones you should avoid and why. Then finally, you will see some assembly code that you can use in your own bootloader / kernel.</p>
<h3 id="heading-prerequisites">Prerequisites</h3>
<p>if you want to follow along with the code shown in this article, you’ll need:</p>
<ul>
<li><p>A Linux operating system</p>
</li>
<li><p>Some knowledge of assembly language</p>
</li>
<li><p>A text editor of your choice</p>
</li>
<li><p>An emulator installed. For this example I use QEMU.</p>
</li>
<li><p>FASM assembler installed</p>
</li>
<li><p>Git to be able to clone the repository (<a target="_blank" href="https://github.com/nikolaospanagopoulos/memoryMapBoot">https://github.com/nikolaospanagopoulos/memoryMapBoot</a>)</p>
</li>
</ul>
<h3 id="heading-a-few-words-about-bios-int-15h">A Few Words about BIOS int 15h</h3>
<p>In Real mode, the BIOS offers many interrupts that interact with the hardware and can give you information.</p>
<p>There are some interrupts that can help with getting a memory map, but the most powerful one is int15h with E820h function (hexadecimal numbers! very important to remember. Decimal numbers will not work). This method offers a detailed memory map that you can use to safely determine which areas of memory can be used for vital tasks like setting up paging, memory allocation, and more.</p>
<p>In this article you will see how you can use this interrupt to get a detailed memory map of your system.</p>
<p>Now, before we go deeper, I would like to add a few things about memory probing and why you should avoid it.</p>
<h3 id="heading-memory-probing-and-why-you-should-avoid-it">Memory probing and why you should avoid it</h3>
<p>Memory probing is the process of manually accessing physical memory and determining whether it is available or not. The issue is that not all memory is designed to be accessed directly.</p>
<p>Accessing parts of memory that you shouldn’t can cause unpredictable behavior like:</p>
<ul>
<li><p><strong>System Crashes:</strong> some memory is reserved for BIOS structures, hardware devices etc. Accessing those areas can lead to system crashes or system instability.</p>
</li>
<li><p><strong>Memory Corruption:</strong> accessing reserved memory areas can lead to corruption of those areas. This can cause again crashes, instability, malfunctions etc</p>
</li>
</ul>
<p>So, you should avoid memory probing because it’s an unnecessary risk to your kernel development process.</p>
<h2 id="heading-the-code">The Code</h2>
<h3 id="heading-step-1-prepare-to-call-int-15h">Step 1: Prepare to Call int 15h</h3>
<p>In this part, you will basically setup the environment needed to invoke int 15h. The general purpose registers need to be stored so that no important data on them is lost during the interrupt invocation. Then the registers <code>bp</code>, <code>ebx</code> are cleared so that they can be set to their initial values.</p>
<p>The “SMAP” value is stored in the <code>edx</code> register to ensure the correct format that the BIOS will return. Finally, we setup the <code>0xe820</code> function and request memory map data.</p>
<pre class="language-plaintext" tabindex="0"><code class="language-plaintext">pusha
mov di, 0x0504        ; Set DI register for memory storage
xor ebx, ebx          ; EBX must be 0
xor bp, bp            ; BP must be 0 (to keep an entry count)
mov edx, 0x534D4150   ; Place "SMAP" into edx | The "SMAP" signature ensures that the BIOS provides the correct memory map format
mov eax, 0xe820       ; Function 0xE820 to get memory map
mov dword [es:di + 20], 1 ; force a valid ACPI 3.X entry | allows us to get additional information (extended attributes)
mov ecx, 24           ; Request 24 bytes of data
</code></pre>
<ul>
<li><p>The <code>pusha</code> command pushed all general purpose registers to the stack to save their values during the interrupt call. They can be restored after the interrupt call to avoid corruption of other areas.</p>
</li>
<li><p>The <code>mov di, 0x0504</code> instruction sets the di register to 0×0504 (where the memory map entries will be stored).</p>
</li>
<li><p><code>xor ebx, ebx</code> the xor instruction uses the xor operator to clear the ebx register. It must be set to 0 to start retrieving entries.</p>
</li>
<li><p><code>xor bp, bp</code> use of the same xor operator here to set bp to 0. This will keep track of your memory entries.</p>
</li>
<li><p><code>mov edx, 0x534D4150</code> this instruction will store <code>0x534D4150</code> (ASCII string “SMAP”) into the edx register. It makes certain that the BIOS will return the correct format for your memory map.</p>
</li>
<li><p><code>mov eax, 0xe820</code> this instruction sets the function 0xe280 which will get the memory map along with int15h.</p>
</li>
<li><p><code>mov dword [es:di + 20], 1</code> this instruction forces a valid ACPI (Advanced Configuration and Power Interface) 3.x entry. This way the BIOS provides extra information in the form of extra attributes.</p>
</li>
<li><p><code>mov ecx, 24</code> this instruction asks the BIOS for 24 bytes of memory data. This is the size that ACPI 3.x entries need to include extra information.</p>
</li>
</ul>
<h3 id="heading-step-2-call-int15h">Step 2: Call int15h</h3>
<p>Here, you can finally invoke the interrupt to fetch the memory map. You need to check that the function is supported by the BIOS and that valid data is being fetched. You also need to ensure that the correct format is being fetched by setting again the “SMAP” into the <code>edx</code> register.</p>
<pre class="language-plaintext" tabindex="0"><code class="language-plaintext">    int 0x15                 ; using interrupt
    jc short .failed         ; carry set on first call means "unsupported function"
    mov edx, 0x534D4150      ; Some BIOSes apparently trash this register? lets set it again
    cmp eax, edx             ; on success, eax must have been reset to "SMAP"
    jne short .failed
    test ebx, ebx            ; ebx = 0 implies list is only 1 entry long (worthless)
    je short .failed
</code></pre>
<ul>
<li><p><code>int 0x15</code> this instruction invokes the interrupt 0×15.</p>
</li>
<li><p><code>jc short .failed</code> is the carry flag that is set. It means the function is unsupported and the call has failed. It jumps to our error handler.</p>
</li>
<li><p><code>mov edx, 0x534D4150</code> set again the “SMAP” because some BIOSes corrupt this register after the call.</p>
</li>
<li><p><code>cmp eax, edx</code> if the call is successfull, on success the BIOS will return the “SMAP” value in eax.</p>
</li>
<li><p><code>jne short .failed</code> if it doesn’t, it means the call has failed and it jumps to our error handling label.</p>
</li>
<li><p><code>test ebx, ebx</code> this instruction checks if ebx is 0 after the first call. This means that the memory map only contains one entry. This entry is probably invalid, so it jumps to the error handling label.</p>
</li>
</ul>
<h3 id="heading-step-3-loop-through-memory-entries">Step 3: Loop Through Memory Entries</h3>
<p>After a successful first invocation, you need to loop through each entry of the memory map.</p>
<p>In the loop, you will invoke again int 15h to get all subsequent memory entries while checking each entry’s length and other attributes. If it meets the criteria, you increment the counter and you store the entry. This continues until there are no entries left to process.</p>
<pre class="language-plaintext" tabindex="0"><code class="language-plaintext">    jmp short .jmpin
.e820lp:
    mov eax, 0xe820          ; eax, ecx get trashed on every int 0x15 call
    mov dword [es:di + 20], 1 ; force a valid ACPI 3.X entry
    mov ecx, 24              ; ask for 24 bytes again
    int 0x15
    jc short .e820f          ; carry set means "end of list already reached"
    mov edx, 0x534D4150      ; repair potentially trashed register
.jmpin:
    jcxz .skipent            ; skip any 0 length entries (If ecx is zero, skip this entry (indicates an invalid entry length))
    cmp cl, 20               ; got a 24 byte ACPI 3.X response?
    jbe short .notext
    test byte [es:di + 20], 1 ;if bit 0 is clear, the entry should be ignored
    je short .skipent         ; jump if bit 0 is clear 
.notext:
    mov eax, [es:di + 8]     ; get lower uint32_t of memory region length
    or eax, [es:di + 12]     ; "or" it with upper uint32_t to test for zero and form 64 bits (little endian)
    jz .skipent              ; if length uint64_t is 0, skip entry
    inc bp                   ; got a good entry: ++count, move to next storage spot
    add di, 24               ; move next entry into buffer
.skipent:
    test ebx, ebx            ; if ebx resets to 0, list is complete
    jne short .e820lp
</code></pre>
<ul>
<li><code>.e820lp</code> is a label for looping through each memory map entry.</li>
</ul>
<p>The next lines are used to call int15h to get the next memory entry:</p>
<ul>
<li><p><code>jc short .e820f</code> if the carry flag is set, it means that we have reached the end of the list.</p>
</li>
<li><p><code>jcxz .skipent</code> if ecx register is 0, it means the length of the memory entry is invalid. So the code skips it.</p>
</li>
<li><p><code>cmp cl, 20</code> checks if the memory entry is a valid ACPI 3.x entry. (It would be 24 bytes long). If it is not, the code jumps to <code>.notext</code>.</p>
</li>
<li><p><code>test byte [es:di + 20], 1</code> checks if bit 0 is set in the memory entry's extended attributes, indicating a valid entry. If it's clear, the entry is skipped.</p>
</li>
<li><p><code>mov eax, [es:di + 8]</code> gets the lower 32 bits of the memory region length and then we combine it using the or operator, with the upper 32 bits. If the total length is 0, then the entry is skipped.</p>
</li>
<li><p><code>inc bp</code> increments entry count.</p>
</li>
<li><p><code>add di, 24</code> moves the pointer di forward to the next memory entry. Each entry is 24 bytes long.</p>
</li>
</ul>
<h3 id="heading-step-4-end-of-memory-entries-handling">Step 4: End of Memory Entries Handling</h3>
<p>Finally, you can store the entry count. And by using the <code>popa</code> instruction, you will restore all general purpose registers to their previous values. If an error occurs during the process, the code jumps to <code>.failed</code> label which is our error handling function.</p>
<pre class="language-plaintext" tabindex="0"><code class="language-plaintext">.e820f:
    mov [mmap_ent], bp       ; store the entry count
    clc                      ; there is "jc" on end of list to this point, so the carry must be cleared

    popa
    ret
.failed:
    stc                      ; "function unsupported" error exit
    ret
</code></pre>
<ul>
<li><p><code>mov [mmap_ent], bp</code> stores the entry count.</p>
</li>
<li><p><code>clc</code> clears the carry flag because it is already set.</p>
</li>
<li><p><code>popa</code> pops all general purpose registers back from the stack.</p>
</li>
<li><p><code>.failed</code> we use this label for error handling.</p>
</li>
</ul>
<p>Here is a video from my YouTube account where I implement and explain the above code:</p>
<div class="embed-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WW3pduHMWkc" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe></div>
<p> </p>
<h3 id="heading-epilogue">Epilogue</h3>
<p>In kernel development, one of the most important tasks is managing memory. The above is a reliable way to detect your system’s memory layout information. This means that you can make safe decisions when allocating resources, implementing paging, and so on.</p>
<p>It might appear to be complex and it maybe is, but if you follow the code line by line you will be able to understand it. These techniques will allow you to build a robust kernel capable of running on different hardware configurations.</p>
<p>Keep Coding!</p>
-->

---

<TagLinks />