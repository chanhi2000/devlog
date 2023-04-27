import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  {
    text: '🔖Tags',
    link: '/tags/'
  },
  {
    text: '📖G4E',
    link: '/g4e/',
  },
  {
    text: '🗂️Catalogs',
    link: '/catalogs/',
    children: [
      {
        text: '🏰Portfolio',
        children: [
          {
            text: 'Intro',
            link: '/catalogs/portfolio/',
          },
        ],
      }, {
        text: '🎈TIL',
        children: [
          {
            text: 'Intro',
            link: '/catalogs/til/',
          }
        ],
      }
    ],
  }, {
    text: '🌐Explore',
    link: '/explore/',
  }, {
    text: '🎓Academics',
    children: [
      {
        text: 'Intro',
        link: '/academics/'
      },
      {
        text: 'PHYS034',
        children: [
          {
            text: 'Intro',
            link: '/academics/PHYS034/'
          },
          {
            text: 'Week 01',
            link: '/academics/PHYS034/week01/' 
          },
          {
            text: 'Week 01: Lecture',
            link: '/academics/PHYS034/week01/lecture' 
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