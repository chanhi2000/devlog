import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  {
    text: '🔖',
    link: '/tag/README.md'
  }, {
    text: '🪠', // Projects
    children: [
      {
        text: 'Intro',
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
      }
    ],
  }, {
    text: '🎓', // academics
    children: [
      {
        text: 'Intro',
        link: '/academics/README.md'
      }, {
        text: 'MATH011',
        children: [
          {
            text: 'Intro',
            link: '/academics/MATH011/README.md'
          }, {
            text: 'Lecture 1',
            link: '/academics/MATH011/lect01.md'
          }
        ]
      }, {
        text: 'COEN020',
        children: [],
      }, {
        text: 'PHYS034',
        link: '/academics/PHYS034/README.md'
      }
    ],
  }, {
    text: '🥁', // crashcourses
    children: [
      {
        text: 'Intro',
        link: '/crashcourse/README.md'
      }, {
        text: '🐚CLI',
        children: [
          {
            text: '🐚Text Processing with GNU awk',
            link: '/crashcourse/cli-text-processing-w-gnu-awk/README.md'
          }, {
            text: '🐚Mastering Curl - Interactive Text Guide',
            link: '/crashcourse/cli-mastering-curl-interactive-text-guide/README.md'
          }
        ]
      }, {
        text: '🕊️Swift',
        children: [
          {
            text: '🕊️100 Days of Swift',
            link: '/crashcourse/swift-100-days-of-swift/74.md'
          }, {
            text: '🕊️100 Days of SwiftUI',
            link: '/crashcourse/swift-100-days-of-swiftui/62.md'
          }, {
            text: '🕊️SwiftUI by Example',
            link: '/crashcourse/swift-swiftui-by-example/README.md',
          }, {
            text: '🕊️Kodeco - Swift',
            link: '/crashcourse/swift-kodeco/README.md'
          }          
        ]
      }, {
        text: '☕️Java / 🅺Kotlin / 🍃Spring',
        children: [
          {
            text: '☕️Java8 in Action',
            link: '/crashcourse/java-8-in-action/README.md',
          }, {
            text: '☕️Effective Java',
            link: '/crashcourse/java-effective-java/README.md',
          }, {
            text: '🅺Kodeco - Android & Kotlin',
            link: '/crashcourse/kotlin-android-kodeco/README.md'
          }, {
            text: '🍃Jump to Spring Boot',
            link: '/crashcourse/java-jump-to-spring-boot/README.md',
          }, {
            text: '☕️Java Web App with Quarkus and JPAStreamer',
            link: '/crashcourse/java-freecodecamp-quarkus-jpastreamer/README.md',
          }
        ]
      }, {
        text: '🐍Python',
        children: [
          {
            text: '🐍Finance with Python',
            link: '/crashcourse/py-finance-w-python/README.md',
          }, {
            text: '🐍사장님 몰래 하는 파이썬 업무자동화 (들키면 일 많아짐)',
            link: '/crashcourse/py-rpa-excel/README.md',
          }
        ]
      }, {
        text: '🦀Rust',
        children: [
          {
            text: '🦀freecodecamp.org - Rust by Practice',
            link: '/crashcourse/rs-freecodecamp-rust-by-practice/README.md'          
          }, {
            text: '🦀Rust to Assembly',
            link: '/crashcourse/rs-eventhelix-rust-to-assembly/README.md'
          }, {
            text: '🦀Wasm by Example',
            link: '/crashcourse/rs-wasm-by-example/README.md',
          }
        ]
      }, {
        text: '🔻Ruby',
        children: [
          {
            text: '🔻Jets - Learning Content',
            link: '/crashcourse/ruby-rubyonjets-learning-content/README.md',
          }
        ]
      }, {
        text: 'DevOps',
        children: [
          {
            text: '🔺Red Hat Container Tools',
            link: '/crashcourse/devops-red-hat-container-tools/README.md',
          }, {
            text: '🔺Containerize Your Application With Buildah And Podman',
            link: '/crashcourse/devops-red-hat-containerize-your-application-w-buildah-and-podman/README.md',
          }, {
            text: '🦊freecodecamp.org - DevOps with GitLab CI',
            link: '/crashcourse/devops-freecodecamp-gitlab-ci/README.md'          
          }, {
            text: '☸DigitalOcean - Kubernetes',
            link: '/crashcourse/devops-digitalocean-kubernetes/README.md'
          }, {
            text: '📦아마존 웹 서비스를 다루는 기술 - 실무에서 필요한 AWS 클라우드의 모든 것!',
            link: '/crashcourse/devops-art-of-aws/README.md',
          }, {
            text: '🐧Linux Journey',
            link: '/crashcourse/devops-linux-journey/README.md'
          }
        ]
      }, {
        text: 'Misc.',
        children: [
          {
            text: '🎨Colt Steele - Mastering CSS Grid',
            link: '/crashcourse/colt-steele-mastering-css-grid/README.md'          
          }, {
            text: '🧶Must Know JavaScript API',
            link: '/crashcourse/js-must-know-javascript-api/README.md',
          }, {
            text: '🙆‍♂️DB Server 성능 향상, 분석 및 튜닝 전문가 향상과정',
            link: '/crashcourse/oracle-sql-db-tuning/README.md'
          }, {
            text: '🦙Microsoft - Generative AI for Beginners',
            link: '/crashcourse/llm-generative-ai-for-beginners/README.md'
          }
        ]
      }
    ],
  }, {
    text: '📖', // g42
    children: [
      {
        text: '🌱API - Kakao',
        link: '/g4e/api-kakao/README.md',
      }, {
        text: '🐚Shell',
        link: '/g4e/cli-shell/README.md',
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
        text: '☕️Java',
        link: '/g4e/lang-java/README.md',
      }, {
        text: '🤖Android',
        link: '/g4e/lang-java-android/README.md',
      },  {
        text: '🕊️Swift',
        link: '/g4e/lang-swift/README.md',
      }, {
        text: '🧶Node.js',
        link: '/g4e/lang-js-node/README.md',
      }, {
        text: '⚛React.js',
        link: '/g4e/lang-js-react/README.md',
      }, {
        text: '🧜‍♀️Mermaid.js',
        link: '/g4e/lang-js-mermaid/README.md',
      }, {
        text: '🐍Python',
        link: '/g4e/lang-python/README.md',
      }, {
        text: '🎨CSS',
        link: '/g4e/lang-css/README.md',
      }, {
        text: '🦀Rust',
        link: '/g4e/lang-rust/README.md',
      }, {
        text: '🪐Lua',
        link: '/g4e/lang-lua/README.md',
      }, {
        text: '♯CSharp',
        link: '/g4e/lang-csharp/README.md',
      }, {
        text: '🦦Go',
        link: '/g4e/lang-go/README.md',
      }, {
        text: '🔰Dart',
        link: '/g4e/lang-dart/README.md',
      }, {
        text: '⛵php',
        link: '/g4e/lang-php/README.md',
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
        text: '🦢LaTeX',
        link: '/g4e/lang-latex/README.md',
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
//       text: '🕶️Github',
//       link: 'https://github.com/chanhi2000',
//     }, {
//       text: '🅽Notion',
//       link: 'https://www.notion.so/MarkiiimarK-c231ae6c157d4baba89a3713c92449dd',
//     },{
//       text: "📢Tell Me What's Wrong",
//       link: "https://github.com/chanhi2000/devlog/issues",
//     }
//   ]
// }, 
];