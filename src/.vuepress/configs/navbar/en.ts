import { navbar } from "vuepress-theme-hope";

export const navbarEn = navbar([
  {
    text: '', // Projects
    icon: 'fas fa-industry',
    children: [
      {
        text: 'My Roadmap',
        icon: 'fas fa-flag-checkered',
        link: '/projects/roadmap/README.md'
      }, {
        text: 'Portfolio',
        icon: 'fa-brands fa-fort-awesome',
        link: '/projects/portfolio/README.md',
      }, {
        text: 'Lifeguide',
        icon: 'fas fa-compass',
        link: '/projects/lifeguide/README.md'
      },  {
        text: 'Travel',
        icon: 'fas fa-plane',
        link: '/projects/travel/README.md'
      }, {
        text: 'Cook',
        icon: 'fas fa-fire-burner',
        link: '/projects/cook/README.md'
      }
    ],
  }, {
    text: '', // academics
    icon: 'fas fa-graduation-cap',
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
    text: '', // g4e
    icon: 'fas fa-book',
    children: [
      {
        text: 'API - Kakao',
        link: '/g4e/api-kakao/README.md',
        icon: 'fas fa-seedling'
      }, {
        text: 'API - NCloud',
        link: '/g4e/api-ncloud/README.md',
        icon: 'fas fa-frog'
      }, {
        text: 'Shell',
        link: '/g4e/cli-shell/README.md',
        icon: 'iconfont icon-shell'
      }, {
        text: 'Batchfile (Windows)',
        link: '/g4e/cli-batchfile/README.md',
        icon: 'fas fa-gears',
      }, {
        text: 'Powershell',
        link: '/g4e/cli-pwsh/README.md',
        icon: 'fas fa-hat-wizard',
      }, {
        text: '🗡Vim',
        link: '/g4e/cli-vim/README.md',
      }, {
        text: '🐘Gradle',
        link: '/g4e/lang-gradle/README.md',
      }, {
        text: 'Maven',
        link: '/g4e/lang-maven/README.md',
        icon: 'fas fa-feather-pointed',
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
        icon: 'fa-brands fa-swift',
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
        text: 'Mermaid.js',
        link: '/g4e/lang-js-mermaid/README.md',
        icon: 'fas fa-person-swimming',
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
        text: 'Lua',
        link: '/g4e/lang-lua/README.md',
        icon: 'fas fa-meteor'
      }, {
        text: 'CSharp',
        link: '/g4e/lang-csharp/README.md',
        icon: 'fas fa-hashtag'
      }, {
        text: 'Go',
        link: '/g4e/lang-go/README.md',
        icon: 'fa-brands fa-golang'
      }, {
        text: 'Dart',
        link: '/g4e/lang-dart/README.md',
        icon: 'iconfont icon-dart'
      }, {
        text: 'php',
        link: '/g4e/lang-php/README.md',
        icon: 'fa-brands fa-php'
      }, {
        text: 'Ruby',
        link: '/g4e/lang-ruby/README.md',
        icon: 'fas fa-gem'
      }, {
        text: 'Elixir',
        link: '/g4e/lang-elixir/README.md',
        icon: 'fas fa-droplet'
      }, {
        text: '🐑Haskell',
        link: '/g4e/lang-haskell/README.md',
      }, {
        text: 'C',
        link: '/g4e/lang-c/README.md',
        icon: 'iconfont icon-c',
      }, {
        text: 'Cpp',
        link: '/g4e/lang-cpp/README.md',
        icon: 'fas fa-dice-two',
      }, {
        text: 'Zig',
        link: '/g4e/lang-zig/README.md',
        icon: 'fas fa-person-snowboarding',
      }, {
        text: 'LaTeX',
        link: '/g4e/lang-latex/README.md',
        icon: 'iconfont icon-tex',
      }
    ]
  }, {
    text: '', // explore
    icon: 'fas fa-globe',
    children: [
      {
        text: 'Newsletter',
        icon: 'fas fa-rss',
        link: '/explore/newsletter/README.md',
      }, {
        text: 'YouTube',
        icon: 'fa-brands fa-youtube',
        link: '/explore/youtube/README.md',
      }, {
        text: 'Public API',
        icon: 'fas fa-bullseye',
        link: '/explore/api/README.md',
      }, {
        text: 'Devlog',
        icon: 'fas fa-timeline',
        link: '/explore/devlog/README.md',
      }, {
        text: 'Career',
        icon: 'fas fa-user-tie',
        link: '/explore/career/README.md',
      }
    ]
  }, { /* https://chanhi2000.github.io/crashcourse */
    text: '', // crashcourse (외부)
    icon: 'fas fa-drum',
    children: [
      {
        text: 'CLI',
        icon: 'iconfont icon-shell',
        link: 'https://chanhi2000.github.io/crashcourse/cli/'
      }, {
        text: 'Swift',
        icon: 'fa-brands fa-swift',
        link: 'https://chanhi2000.github.io/crashcourse/swift/'
      }, {
        text: 'Java / Kotlin / Spring',
        icon: 'fa-brands fa-java',
        link: 'https://chanhi2000.github.io/crashcourse/java/',
      }, {
        text: 'JavaScript / TypeScript',
        icon: 'fa-brands fa-js',
        link: 'https://chanhi2000.github.io/crashcourse/js/'
      }, {
        text: 'Python',
        icon: 'fa-brands fa-python',
        link: 'https://chanhi2000.github.io/crashcourse/python/'
      }, {
        text: 'Rust',
        icon: 'fa-brands fa-rust',
        link: 'https://chanhi2000.github.io/crashcourse/rust/'
      }, {
        text: 'Cpp',
        icon: 'fas fa-dice-two',
        link: 'https://chanhi2000.github.io/crashcourse/cpp/'
      }, {
        text: 'Ruby',
        icon: 'fas fa-gem',
        link: 'https://chanhi2000.github.io/crashcourse/ruby/'
      }, {
        text: '🐑Haskell',
        link: 'https://chanhi2000.github.io/crashcourse/haskell/'
      }, {
        text: 'Kubernetes',
        icon: 'fas fa-dharmachakra',
        link: 'https://chanhi2000.github.io/crashcourse/kubernetes/'
      },{
        text: 'DevOps',
        icon: 'fas fa-cubes-stacked',
        link: 'https://chanhi2000.github.io/crashcourse/devops/'
      }, {
        text: 'Misc',
        icon: 'fas fa-object-group',
        link: 'https://chanhi2000.github.io/crashcourse/misc/'
      }
    ]
  }
])