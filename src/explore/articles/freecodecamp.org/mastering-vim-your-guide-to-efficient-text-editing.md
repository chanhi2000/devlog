---
lang: ko-KR
title: "Mastering VIM: Your Guide to Efficient Text Editing"
description: "Article(s) > Mastering VIM: Your Guide to Efficient Text Editing"
icon: iconfont icon-vim
category: 
  - Linux
  - Shell
  - Vim
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - vi
  - vim
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Mastering VIM: Your Guide to Efficient Text Editing"
    - property: og:description
      content: "Mastering VIM: Your Guide to Efficient Text Editing"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/mastering-vim-your-guide-to-efficient-text-editing.html
prev: /tool/vim/articles/README.md
date: 2024-06-24
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1719244279807/32ef1ce5-423b-4762-b0fa-5f6420d67788.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Vim > Article(s)",
  "desc": "Article(s)",
  "link": "/tool/vim/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Mastering VIM: Your Guide to Efficient Text Editing"
  desc="VIM is a highly configurable text editor that enables efficient text editing, and it's favored by many developers and system administrators for its powerful capabilities and extensive customization options. We just posted a course on the freeCodeCamp..."
  url="https://freecodecamp.org/magazine/detail/mastering-vim-your-guide-to-efficient-text-editing/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1719244279807/32ef1ce5-423b-4762-b0fa-5f6420d67788.jpeg"/>

VIM is a highly configurable text editor that enables efficient text editing, and it's favored by many developers and system administrators for its powerful capabilities and extensive customization options.

We just posted a course on the freeCodeCamp.org YouTube channel that will help you to master the VIM editor. Whether you're new to VIM or looking to deepen your understanding, this course will equip you with the essential skills to leverage VIM effectively in your development workflow. Andrew Brown from ExamPro developed this course.

By the end of this course, you will understand the historical context and evolution of VIM, gain proficiency in its core commands and modes, learn how to customize VIM to suit your personal workflow, explore advanced features, including plugins and scripting with VimScript, and develop the ability to integrate VIM into various development environments.

VIM is known for its steep learning curve, and it's not uncommon to hear about the frustrations of beginners. The initial challenges, however, give way to a powerful, efficient, and highly productive editing experience. This course aims to smooth your learning curve and transform your VIM experience from daunting to delightful.

Below you will find a description of the core sections in this course, starting with the Prelude and then covering core commands.

---

## Prelude

### PDP-7 and the Birth of Unix

To truly understand VIM, we need to start with the PDP-7, a minicomputer from the 1960s where the Unix operating system was born. The development of Unix led to the creation of various text editors that served as precursors to VIM. Unix introduced a host of command-line tools foundational to modern computing, and emulating Unix 1 allows us to appreciate the environment in which early text editors like Ed and Ex were developed.

### What is Ed and EX?

Ed is one of the earliest text editors for Unix, known for its simplicity and command-based interface. Engaging with Ed directly helps us understand its command structure and functionality, laying the groundwork for subsequent editors. Ex, on the other hand, extended Ed's capabilities, adding more features and improving user interaction. Following along with Ex, we can experience its enhancements and see how it set the stage for Vi, the next evolution in text editing.

### What is VI?

Vi, or visual editor, was a significant leap forward, offering a screen-oriented approach to text editing. Exploring Vi's interface and basic commands reveals why it became so popular among developers. Vi was further improved into VIM (Vi IMproved), which builds upon Vi with extensive enhancements, making it a powerful editor for modern development. Starting with Vimtutor, an interactive tutorial, and exploring the built-in help system is an excellent way to get acquainted with VIM.

### Evolution and Versions of VIM

Understanding the different versions of VIM and their evolution over time is crucial for appreciating its current capabilities. Experimenting with various VIM versions allows us to appreciate their differences and how VIM has adapted to meet the needs of developers. Additionally, learning to install and use GVim, the graphical version of VIM, offers a more accessible introduction for new users.

### Customization and Plugins

Discovering VimScript, the scripting language used to extend VIM's functionality, enables you to automate tasks and create custom commands. Diving into VIM's configuration files, we learn to personalize our editing environment. Using plugin managers, we can extend VIM's capabilities with community-developed plugins. Janus, a popular VIM distribution that comes pre-configured with a suite of plugins and settings, offers a streamlined setup. Installing and experimenting with Janus, and learning to use Vim Plug, a minimalist plugin manager, helps us manage VIM plugins efficiently. NeoVIM, a modern refactor of VIM designed to improve performance and extendibility, offers enhanced features and improved user experience. Exploring NeoVIM and its capabilities further enhances our understanding of VIM's versatility. Finally, Vimium, a browser extension that brings VIM-style navigation to the web, showcases the influence of VIM's keybindings beyond traditional text editing.

---

## VIM Core Commands

### Integration with IDEs

Learning how VIM can be integrated into other Integrated Development Environments (IDEs) combines VIM's efficiency with the features of modern IDEs. Installing VIM extensions in popular IDEs like Visual Studio Code allows us to use VIM's editing capabilities within a familiar environment.

### Basic Navigation and Editing

Mastering the home row keys, which are central to VIM's command structure, increases our editing speed and efficiency. VIM operates in different modes, each designed for specific types of tasks, and understanding and switching between these modes is crucial for effective use. Practicing normal, insert, visual, and command-line modes helps us become comfortable with VIM's modal nature.

### File and Motion Commands

Learning commands for opening, saving, and closing files is essential for managing our work in VIM. Motion commands allow us to navigate text efficiently, with directional motions (h, j, k, l) being the basic movements used to navigate text. Practicing using directional motion commands to move through text quickly, as well as learning goto motions for jumping to specific locations within the file, enhances our text navigation skills. Word motions allow for navigation by words, making it easier to move through text, and joining lines of text seamlessly is a useful command for text formatting. Commands to quickly navigate to the start or end of a line, the replace command for quick substitutions of text, and undo and redo commands for managing changes effectively are all part of our core VIM toolkit.

### Advanced Editing

The change command allows us to replace portions of text efficiently, while the delete command helps us remove text quickly. Yanking (copying) and pasting text are fundamental operations in VIM, and learning insert and append commands allows us to add text in different ways. The line insert command for inserting lines of text efficiently, the find command for locating specific text quickly, and the substitute command for replacing text patterns are all advanced editing techniques that increase our efficiency. The leader key is a customizable shortcut that simplifies complex command sequences, and mastering visual mode for text selection and manipulation is essential for effective editing. Indentation commands help us format code and text properly, and window splitting allows us to work with multiple files or views simultaneously. Understanding buffers for managing multiple open files, and registers for storing and retrieving text snippets for reuse, rounds out our advanced editing capabilities.

---

## Conclusion

By the end of this course, you'll have a solid foundation in VIM, enabling you to use it effectively in your development work. Watch the full course on the [<FontIcon icon="fa-brands fa-youtube"/>freeCodeCamp.org YouTube channel](https://youtu.be/JYNA9j8SXs4) (4-hour watch).

<VidStack src="youtube/JYNA9j8SXs4" />

---

<TagLinks />