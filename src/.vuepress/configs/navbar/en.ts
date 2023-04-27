import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  /* 
  {
    text: '🔖Tags',
    link: '/tags/README.md'
  },
  */
  {
    text: '📖G4E',
    link: '/g4e/README.md',
  },
  {
    text: '🗂️Catalogs',
    link: '/catalogs/README.md',
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
    text: '🌐Explore',
    link: '/explore/README.md',
  }, {
    text: '🎓Academics',
    children: [
      {
        text: 'Intro',
        link: '/academics/README.md'
      },
      {
        text: 'PHYS034',
        children: [
          {
            text: 'Intro',
            link: '/academics/PHYS034/README.md'
          },
          {
            text: 'Week 01',
            link: '/academics/PHYS034/week01/README.md' 
          },
          {
            text: 'Week 01: Lecture',
            link: '/academics/PHYS034/week01/lecture.md' 
          },
        ],
      }
    ],
  },{
    text: '📍Misc.',
    children: [
      {
        text: '🕶️Github',
        link: 'https://github.com/chanhi2000',
      }, {
        text: '🅽Notion',
        link: 'https://www.notion.so/MarkiiimarK-c231ae6c157d4baba89a3713c92449dd',
      },{
        text: "📢Tell Me What's Wrong",
        link: "https://github.com/chanhi2000/devlog/issues",
      }
    ]
  }
];