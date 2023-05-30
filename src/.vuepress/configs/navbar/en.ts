import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  /* 
  {
    text: '🔖Tags',
    link: '/tags/README.md'
  },
  */
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
        children: [
          {
            text: 'Intro',
            link: '/crashcourse/paul-hudson-100-days-of-swift/README.md'
          }, {
            text: 'Day 1',
            link: '/crashcourse/paul-hudson-100-days-of-swift/1.md'
          }, {
            text: 'Day 2',
            link: '/crashcourse/paul-hudson-100-days-of-swift/2.md'
          }, {
            text: 'Day 3',
            link: '/crashcourse/paul-hudson-100-days-of-swift/3.md'
          }, {
            text: 'Day 4',
            link: '/crashcourse/paul-hudson-100-days-of-swift/4.md'
          }, {
            text: 'Day 5',
            link: '/crashcourse/paul-hudson-100-days-of-swift/5.md'
          }, {
            text: 'Day 6',
            link: '/crashcourse/paul-hudson-100-days-of-swift/6.md'
          }, {
            text: 'Day 7',
            link: '/crashcourse/paul-hudson-100-days-of-swift/7.md'
          }, {
            text: 'Day 8',
            link: '/crashcourse/paul-hudson-100-days-of-swift/8.md'
          }, {
            text: 'Day 9',
            link: '/crashcourse/paul-hudson-100-days-of-swift/9.md'
          }, {
            text: 'Day 10',
            link: '/crashcourse/paul-hudson-100-days-of-swift/10.md'
          }, {
            text: 'Day 11',
            link: '/crashcourse/paul-hudson-100-days-of-swift/11.md'
          }, {
            text: 'Day 12',
            link: '/crashcourse/paul-hudson-100-days-of-swift/12.md'
          }, {
            text: 'Day 13',
            link: '/crashcourse/paul-hudson-100-days-of-swift/13.md'
          }, {
            text: 'Day 14',
            link: '/crashcourse/paul-hudson-100-days-of-swift/14.md'
          }, {
            text: 'Day 15',
            link: '/crashcourse/paul-hudson-100-days-of-swift/15.md'
          }, {
            text: 'Day 16',
            link: '/crashcourse/paul-hudson-100-days-of-swift/16.md'
          }
        ]
      }, {
        text: '🕊️100 Days of SwiftUI',
        children: [
          {
            text: 'Intro',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/README.md'
          }, {
            text: 'Day 1',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/1.md'
          }, {
            text: 'Day 2',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/2.md'
          }, {
            text: 'Day 3',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/3.md'
          }, {
            text: 'Day 4',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/4.md'
          }, {
            text: 'Day 5',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/5.md'
          }
        ],
      }, {
        text: '🕊️SwiftUI by Example',
        children: [
          {
            text: 'Intro',
            link: '/crashcourse/paul-hudson-swiftui-by-example/README.md',
          }
        ]
      }, {
        text: '🅺Kodeco - Android & Kotlin',
        children: [
          {
            text: 'Intro',
            link: '/crashcourse/kodeco-kotlin-android/README.md'
          }
        ],
      }, {
        text: '🕊️Kodeco - Swift',
        children: [
          {
            text: 'Intro',
            link: '/crashcourse/kodeco-swift/README.md'
          }
        ],
      }, {
        text: '🦊freecodecamp.org - DevOps with GitLab CI',
        children: [
          {
            text: 'Intro',
            link: '/crashcourse/freecodecamp-gitlab-ci/README.md'          
          }, {
            text: 'Unit 1',
            link: '/crashcourse/freecodecamp-gitlab-ci/1.md',
          }, {
            text: 'Unit 2',
            link: '/crashcourse/freecodecamp-gitlab-ci/2.md',
          }, {
            text: 'Unit 3',
            link: '/crashcourse/freecodecamp-gitlab-ci/3.md',          
          }, {
            text: 'Unit 4',
            link: '/crashcourse/freecodecamp-gitlab-ci/4.md',          
          }, {
            text: 'Unit 5',
            link: '/crashcourse/freecodecamp-gitlab-ci/5.md',
          }
        ]
      }, {
        text: '☸DigitalOcean - Kubernetes',
        children: [
          {
            text: 'Intro',
            link: '/crashcourse/digitalocean-kubernetes/README.md'
          }, {
            text: 'How To Run Serverless Workloads with Knative on DigitalOcean Kubernetes',
            link: '/crashcourse/digitalocean-kubernetes/2022/20221216-how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes.md'
          }
        ]
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