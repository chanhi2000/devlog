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
        children: [
          {
            text: 'Intro',
            link: '/academics/PHYS034/README.md'
          }, {
            text: 'Week 01',
            link: '/academics/PHYS034/week01/README.md' 
          }, {
            text: 'Week 01: Lecture',
            link: '/academics/PHYS034/week01/lecture.md' 
          },
        ],
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
            link: '/crashcourse/paul-hudson-100-days-of-swift/README.md'
          }, {
            text: '🕊️100 Days of SwiftUI',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/README.md'
          }, {
            text: '🕊️SwiftUI by Example',
            link: '/crashcourse/paul-hudson-swiftui-by-example/README.md',
          }, {
            text: '🕊️Kodeco - Swift',
            link: '/crashcourse/kodeco-swift/README.md'
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
            link: '/crashcourse/effective-java/README.md',
          }, {
            text: '🅺Kodeco - Android & Kotlin',
            link: '/crashcourse/kodeco-kotlin-android/README.md'
          }, {
            text: '🍃Jump to Spring Boot',
            link: '/crashcourse/java-jump-to-spring-boot/README.md',
          }
        ]
      }, {
        text: 'Python',
        children: [
          {
            text: '🐍Finance with Python',
            link: '/crashcourse/py-finance-w-python/README.md',
          }
        ]
      },{
        text: 'DevOps',
        children: [
          {
            text: '🔺Red Hat Container Tools',
            link: '/crashcourse/red-hat-container-tools/README.md',
          }, {
            text: '🔺Containerize Your Application With Buildah And Podman',
            link: '/crashcourse/red-hat-containerize-your-application-w-buildah-and-podman/README.md',
          }, {
            text: '🦊freecodecamp.org - DevOps with GitLab CI',
            link: '/crashcourse/freecodecamp-gitlab-ci/README.md'          
          }, {
            text: '☸DigitalOcean - Kubernetes',
            link: '/crashcourse/digitalocean-kubernetes/README.md'
          }, {
            text: '🐧Linux Journey',
            link: '/crashcourse/linux-journey/README.md'
          }
        ]
      }, {
        text: 'Misc.',
        children: [
          {
            text: '🎨Colt Steele - Mastering CSS Grid',
            link: '/crashcourse/colt-steele-mastering-css-grid/README.md'          
          }, {
            text: '🦀freecodecamp.org - Rust by Practice',
            link: '/crashcourse/rust-by-practice/README.md'          
          }, {
            text: '🦀Rust to Assembly',
            link: '/crashcourse/eventhelix-rust-to-assembly/README.md'
          }, {
            text: '🙆‍♂️DB Server 성능 향상, 분석 및 튜닝 전문가 향상과정',
            link: '/crashcourse/oracle-sql-db-tuning/README.md'
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