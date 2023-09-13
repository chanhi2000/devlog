import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  /*{
    text: '🔖',
    link: '/tags/README.md'
  },*/
  {
    text: '🗂️', // Catalog
    children: [
      {
        text: '🏁My Roadmap',
        link: '/catalogs/README.md'
      }, {
        text: '🏰Portfolio',
        children: [
          {
            text: 'Intro',
            link: '/catalogs/portfolio/README.md',
          },
        ],
      }, {
        text: '🧭Lifeguide',
        children: [
          {
            text: 'Intro',
            link: '/catalogs/lifeguide/README.md'
          }, {
            text: 'NHIS', 
            link: '/catalogs/lifeguide/nhis/README.md',
          }
        ],
      }, {
        text: '🎈TIL',
        children: [
          {
            text: 'Intro',
            link: '/catalogs/til/README.md',
          }
        ],
      }
    ],
  }, {
    text: '🎓', // academics
    children: [
      {
        text: 'Intro',
        link: '/academics/README.md'
      },
      {
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
        text: '🕊️100 Days of Swift',
        link: '/crashcourse/paul-hudson-100-days-of-swift/README.md'
      }, {
        text: '🕊️100 Days of SwiftUI',
        link: '/crashcourse/paul-hudson-100-days-of-swiftui/README.md'
      }, {
        text: '🕊️SwiftUI by Example',
        link: '/crashcourse/paul-hudson-swiftui-by-example/README.md',
      }, {
        text: '🔺Red Hat Container Tools',
        link: '/crashcourse/red-hat-container-tools/README.md',
      }, {
        text: '🔺Containerize Your Application With Buildah And Podman',
        link: '/crashcourse/red-hat-containerize-your-application-w-buildah-and-podman/README.md',
      }, {
        text: '☕️Java8 in Action',
        link: '/crashcourse/java-8-in-action/README.md',
      }, {
        text: '☕️Effective Java',
        link: '/crashcourse/effective-java/README.md',
      }, {
        text: '🅺Kodeco - Android & Kotlin',
        link: '/crashcourse/kodeco-kotlin-android/README.md'
      }, {
        text: '🕊️Kodeco - Swift',
        link: '/crashcourse/kodeco-swift/README.md'
      }, {
        text: '🦊freecodecamp.org - DevOps with GitLab CI',
        link: '/crashcourse/freecodecamp-gitlab-ci/README.md'          
      }, {
        text: '🎨Colt Steele - Mastering CSS Grid',
        link: '/crashcourse/colt-steele-mastering-css-grid/README.md'          
      }, {
        text: '🦀freecodecamp.org - Rust by Practice',
        link: '/crashcourse/rust-by-practice/README.md'          
      }, {
        text: '☸DigitalOcean - Kubernetes',
        link: '/crashcourse/digitalocean-kubernetes/README.md'
      }, {
        text: '🐧Linux Journey',
        link: '/crashcourse/linux-journey/README.md'
      }, {
        text: '🦀Rust to Assembly',
        link: '/crashcourse/eventhelix-rust-to-assembly/README.md'
      }, {
        text: '🐚Text Processing with GNU awk',
        link: '/crashcourse/cli-text-processing-w-gnu-awk/README.md'
      }, {
        text: '🐚Mastering Curl - Interactive Text Guide',
        link: '/crashcourse/cli-mastering-curl-interactive-text-guide/README.md'
      }
    ],
  }, {
    text: '📖', // g42
    link: '/g4e/README.md',
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