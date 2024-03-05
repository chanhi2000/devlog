import { navbar } from "vuepress-theme-hope";

export const navbarEn = navbar([
  /* 
  {
    text: '🔖', // Tags
    link: '/tag/README.md'
  }, 
  */
  {
    text: '🏭', // Projects
    children: [
      {
        text: '🏭Projects',
        link: '/projects/README.md'
      }, {
        text: '🏁My Roadmap',
        link: '/projects/roadmap/README.md'
      }, {
        text: '🏰Portfolio',
        link: '/projects/portfolio/README.md',
      }, {
        text: '🧭Lifeguide',
        link: '/projects/lifeguide/README.md'
      }, {
        text: '🍽Cook',
        link: '/projects/cook/README.md'
      }
    ],
  }, {
    text: '🎓', // academics
    children: [
      {
        text: 'MATH011',
        link: '/academics/MATH011/README.md'
      }, {
        text: 'COEN020',
        link: '/academics/COEN020/README.md'
      }, {
        text: 'PHYS034',
        link: '/academics/PHYS034/README.md'
      }
    ],
  }, {
    text: '📖', // g4e
    children: [
      {
        text: '🌱API - Kakao',
        link: '/g4e/api-kakao/README.md',
      }, {
        text: 'Shell',
        link: '/g4e/cli-shell/README.md',
        icon: 'fas fa-terminal'
      }, {
        text: '🧢Batchfile (Windows)',
        link: '/g4e/cli-batchfile/README.md',
      }, {
        text: '🧙‍♂️Powershell',
        link: '/g4e/cli-pwsh/README.md',
      }, {
        text: '🗡Vim',
        link: '/g4e/cli-vim/README.md',
      }, {
        text: '🐘Gradle',
        link: '/g4e/lang-gradle/README.md',
      }, {
        text: '🐦Maven',
        link: '/g4e/lang-maven/README.md',
      }, {
        text: '🅺Kotlin',
        link: '/g4e/lang-kotlin/README.md',
      }, {
        text: 'Java',
        link: '/g4e/lang-java/README.md',
        icon: 'fa-brands fa-java'
      }, {
        text: 'Spring',
        link: '/g4e/lang-java-spring/README.md',
        icon: 'fas fa-leaf',
      }, {
        text: 'Android',
        link: '/g4e/lang-java-android/README.md',
        icon: 'fa-brands fa-android'
      },  {
        text: 'Swift',
        link: '/g4e/lang-swift/README.md',
        icon: 'fas fa-dove',
      }, {
        text: 'Node.js',
        link: '/g4e/lang-js-node/README.md',
        icon: 'fa-brands fa-node',
      }, {
        text: 'React.js',
        link: '/g4e/lang-js-react/README.md',
        icon: 'fa-brands fa-react',
      }, {
        text: 'Vue.js',
        link: '/g4e/lang-js-vue/README.md',
        icon: 'fa-brands fa-vuejs',
      }, {
        text: '🧜‍♀️Mermaid.js',
        link: '/g4e/lang-js-mermaid/README.md',
      }, {
        text: 'Python',
        link: '/g4e/lang-python/README.md',
        icon: 'fa-brands fa-python',
      }, {
        text: 'CSS',
        link: '/g4e/lang-css/README.md',
        icon: 'fa-brands fa-css3-alt'
      }, {
        text: 'Rust',
        link: '/g4e/lang-rust/README.md',
        icon: 'fa-brands fa-rust'
      }, {
        text: '🪐Lua',
        link: '/g4e/lang-lua/README.md',
      }, {
        text: '♯CSharp',
        link: '/g4e/lang-csharp/README.md',
      }, {
        text: 'Go',
        link: '/g4e/lang-go/README.md',
        icon: 'fa-brands fa-golang'
      }, {
        text: '🔰Dart',
        link: '/g4e/lang-dart/README.md',
      }, {
        text: 'php',
        link: '/g4e/lang-php/README.md',
        icon: 'fa-brands fa-php'
      }, {
        text: '🔻Ruby',
        link: '/g4e/lang-ruby/README.md',
      }, {
        text: '💧Elixir',
        link: '/g4e/lang-elixir/README.md',
      }, {
        text: '🐑Haskell',
        link: '/g4e/lang-haskell/README.md',
      }, {
        text: '🦕C',
        link: '/g4e/lang-c/README.md',
      }, {
        text: '🏂Zig',
        link: '/g4e/lang-zig/README.md',
      }, {
        text: 'LaTeX',
        link: '/g4e/lang-latex/README.md',
        icon: 'iconfont icon-tex',
      }
    ]
  }, {
    text: '🌐', // explore
    link: '/explore/README.md',
  }
// {
//   text: '📍Misc.',
//   children: [
//     {
//       text: '🅽Notion',
//       link: 'https://www.notion.so/MarkiiimarK-c231ae6c157d4baba89a3713c92449dd',
//     },{
//       text: "📢Tell Me What's Wrong",
//       link: "https://github.com/chanhi2000/devlog/issues",
//     }
//   ]
// }, 
])