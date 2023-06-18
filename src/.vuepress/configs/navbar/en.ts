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
        children: [
          /*
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
          }, {
            text: 'Day 17',
            link: '/crashcourse/paul-hudson-100-days-of-swift/17.md'
          }, {
            text: 'Day 18',
            link: '/crashcourse/paul-hudson-100-days-of-swift/18.md'
          }, {
            text: 'Day 19',
            link: '/crashcourse/paul-hudson-100-days-of-swift/19.md'
          }, {
            text: 'Day 20',
            link: '/crashcourse/paul-hudson-100-days-of-swift/20.md'
          }, {
            text: 'Day 21',
            link: '/crashcourse/paul-hudson-100-days-of-swift/21.md'
          }, {
            text: 'Day 22',
            link: '/crashcourse/paul-hudson-100-days-of-swift/22.md'
          }, {
            text: 'Day 23',
            link: '/crashcourse/paul-hudson-100-days-of-swift/23.md'
          }, 
          */
          {
            text: 'Day 24',
            link: '/crashcourse/paul-hudson-100-days-of-swift/24.md'
          }, {
            text: 'Day 25',
            link: '/crashcourse/paul-hudson-100-days-of-swift/25.md'
          }, {
            text: 'Day 26',
            link: '/crashcourse/paul-hudson-100-days-of-swift/26.md'
          }, {
            text: 'Day 27',
            link: '/crashcourse/paul-hudson-100-days-of-swift/27.md'
          }, {
            text: 'Day 28',
            link: '/crashcourse/paul-hudson-100-days-of-swift/28.md'
          }, {
            text: 'Day 29',
            link: '/crashcourse/paul-hudson-100-days-of-swift/29.md'
          }, {
            text: 'Day 30',
            link: '/crashcourse/paul-hudson-100-days-of-swift/30.md'
          }, {
            text: 'Day 31',
            link: '/crashcourse/paul-hudson-100-days-of-swift/31.md'
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
          }, {
            text: 'Day 6',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/6.md'
          }, {
            text: 'Day 7',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/7.md'
          }, {
            text: 'Day 8',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/8.md'
          }, {
            text: 'Day 9',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/9.md'
          }, {
            text: 'Day 10',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/10.md'
          }, {
            text: 'Day 11',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/11.md'
          }, {
            text: 'Day 12',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/12.md'
          }, {
            text: 'Day 13',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/13.md'
          }, {
            text: 'Day 14',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/14.md'
          }, {
            text: 'Day 15',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/15.md'
          }, {
            text: 'Day 16',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/16.md'
          }, {
            text: 'Day 17',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/17.md'
          }, {
            text: 'Day 18',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/18.md'
          }, {
            text: 'Day 19',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/19.md'
          }, {
            text: 'Day 20',
            link: '/crashcourse/paul-hudson-100-days-of-swiftui/20.md'
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
        text: '☕️Java8 in Action',
        children: [
          {
            text: 'Intro',
            link: '/crashcourse/java-8-in-action/README.md',
          }, {
            text: 'Part 1 기초',
            link: '/crashcourse/java-8-in-action/1.md',
          }, {
            text: 'Part 2-1 함수형 데이터 처리',
            link: '/crashcourse/java-8-in-action/2-1.md',
          }, {
            text: 'Part 2-2 함수형 데이터 처리',
            link: '/crashcourse/java-8-in-action/2-2.md',
          }, {
            text: 'Part 3-1 효과적인 자바8 프로그래밍',
            link: '/crashcourse/java-8-in-action/3-1.md',
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
          }, {
            text: 'How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt',
            link: '/crashcourse/digitalocean-kubernetes/2022/20221118-how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt.md',
          }
        ]
      }, {
        text: '🦀Rust to Assembly',
        children: [
          {
            text: 'Intro',
            link: '/crashcourse/eventhelix-rust-to-assembly/README.md'
          }, {
            text: 'Rust enum and match representation in assembly',
            link: '/crashcourse/eventhelix-rust-to-assembly/rust-enum-and-match-representation-in-assembly.md'
          }, {
            text: 'Assembly code generated when self is passed by value, reference or as a smart pointer',
            link: '/crashcourse/eventhelix-rust-to-assembly/assembly-code-generated-when-self-is-passed-by-value-reference-or-as-a-smart-pointer.md'
          }, {
            text: 'Mapping Arrays, Tuples, Box and Option to assembly',
            link: '/crashcourse/eventhelix-rust-to-assembly/mapping-arrays-tuples-box-and-option-to-assembly.md'
          }, {
            text: 'Map Rust vector iteration to assembly',
            link: '/crashcourse/eventhelix-rust-to-assembly/rust-to-assembly-vector-iteration.md'
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