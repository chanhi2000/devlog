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
        text: 'G4E',
        link: "/g4e/README.md",
        icon: 'fas fa-book',
      }, {
        text: 'API - Kakao',
        link: '/g4e/api-kakao/README.md',
        icon: 'iconfont icon-kakao'
      }, {
        text: 'API - NCloud',
        link: '/g4e/api-ncloud/README.md',
        icon: 'iconfont icon-naver'
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
        icon: 'iconfont icon-powershell',
      }, {
        text: 'Git',
        link: '/g4e/git/README.md',
        icon: 'iconfont icon-git',
      }, {
        text: 'Vim',
        link: '/g4e/cli-vim/README.md',
        icon: 'iconfont icon-vim'
      }, {
        text: 'Gradle',
        link: '/g4e/lang-gradle/README.md',
        icon: 'iconfont icon-gradle'
      }, {
        text: 'Maven',
        link: '/g4e/lang-maven/README.md',
        icon: 'iconfont icon-maven',
      }, {
        text: 'Java',
        link: '/g4e/lang-java/README.md',
        icon: 'fa-brands fa-java'
      }, {
        text: 'Spring',
        link: '/g4e/lang-java-spring/README.md',
        icon: 'iconfont icon-spring',      
      }, {
        text: 'Android',
        link: '/g4e/lang-java-android/README.md',
        icon: 'fa-brands fa-android'
      }, {
        text: 'Kafka',
        link: '/g4e/lang-java-kafka/README.md',
        icon: 'iconfont icon-apachekafka',
      }, {
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
        text: 'Svelte.js',
        link: '/g4e/lang-js-svelte/README.md',
        icon: 'iconfont icon-svelte',
      }, {
        text: 'Mermaid.js',
        link: '/g4e/lang-js-mermaid/README.md',
        icon: 'iconfont icon-mermaid',
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
        icon: 'iconfont icon-lua',
      }, {
        text: 'CSharp',
        link: '/g4e/lang-csharp/README.md',
        icon: 'iconfont icon-csharp',
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
        icon: 'iconfont icon-ruby',
      }, {
        text: 'Elixir',
        link: '/g4e/lang-elixir/README.md',
        icon: 'iconfont icon-elixir',
      }, {
        text: 'Haskell',
        link: '/g4e/lang-haskell/README.md',
        icon: 'iconfont icon-haskell',
      }, {
        text: 'C',
        link: '/g4e/lang-c/README.md',
        icon: 'iconfont icon-c',
      }, {
        text: 'Cpp',
        link: '/g4e/lang-cpp/README.md',
        icon: 'iconfont icon-cpp',
      }, {
        text: 'Zig',
        link: '/g4e/lang-zig/README.md',
        icon: 'iconfont icon-zig',
      }, {
        text: 'LaTeX',
        link: '/g4e/lang-latex/README.md',
        icon: 'iconfont icon-tex',
      }
    ]
  }, {
    text: '',
    icon: 'fas fa-cubes-stacked',
    children: [ 
      {
        text: 'DevOps',
        icon: 'fas fa-cubes-stacked',
        link: '/devops/README.md',
      }, {
        text: 'Github',
        icon: 'fa-brands fa-github',
        link: '/devops/github/README.md',
      }, {
        text: 'Gitlab',
        icon: 'fa-brands fa-gitlab',
        link: '/devops/gitlab/README.md',
      }, {
        text: 'macOS',
        icon: 'iconfont icon-macos',
        link: '/devops/macos/README.md',
      }, {
        text: 'Windows',
        icon: 'fa-brands fa-windows',
        link: '/devops/windows/README.md',
      }, {
        text: 'Linux - Debian',
        icon: 'fa-brands fa-debian',
        link: '/devops/debian/README.md',
      }, {
        text: 'Proxmox',
        icon: 'iconfont icon-proxmox',
        link: '/devops/proxmox/README.md',
      }, {
        text: 'KVM',
        icon: 'fa-brands fa-linux',
        link: '/devops/kvm/README.md',
      }, {
        text: 'oVirt',
        icon: 'iconfont icon-ovirt',
        link: '/devops/ovirt/README.md',
      }, {
        text: 'Docker',
        icon: 'fa-brands fa-docker',
        link: '/devops/docker/README.md',
      }, {
        text: 'Podman',
        icon: 'iconfont icon-podman',
        link: '/devops/podman/README.md',
      }, {
        text: 'Kubernetes',
        icon: 'fas fa-dharmachakra',
        link: '/devops/kubernetes/README.md',
      }, {
        text: 'Openshift',
        icon: 'fa-brands fa-redhat',
        link: '/devops/openshift/README.md',
      }, {
        text: 'AWS',
        icon: 'fa-brands fa-aws',
        link: '/devops/aws/README.md',
      }, {
        text: 'Azure',
        icon: 'iconfont icon-microsoftazure',
        link: '/devops/azure/README.md',
      }, {
        text: 'Security',
        icon: 'fas fa-shield-halved',
        link: '/devops/security/README.md',
      }, {
        text: 'HTTP',
        icon: 'iconfont icon-http',
        link: '/devops/protocol-http/README.md',
      }, {
        text: 'Jenkins',
        icon: 'fa-brands fa-jenkins',
        link: '/devops/jenkins/README.md',
      }, {
        text: 'Appium',
        icon: 'iconfont icon-appium',
        link: '/devops/appium/README.md',
      }, {
        text: 'Nexus Repository',
        icon: 'fas fa-kaaba',
        link: '/devops/nexus/README.md',
      }, {
        text: 'Selenium',
        icon: 'iconfont icon-selenium',
        link: '/devops/selenium/README.md',
      }, {
        text: '🦖JEUS',
        link: '/devops/jeus/README.md',
      }, {
        text: 'WebtoB',
        icon: 'fas fa-sailboat',
        link: '/devops/webtob/README.md',
      }, {
        text: 'NGINX',
        icon: 'iconfont icon-nginx',
        link: '/devops/nginx/README.md',
      }, 
      //endregion
      //region: DB
      {
        text: 'MySQL',
        icon: 'iconfont icon-mysql',
        link: '/devops/mysql/README.md',
      }, {
        text: 'Oracle SQL',
        icon: 'iconfont icon-oracle',
        link: '/devops/oracle/README.md',
      }, {
        text: 'Microsoft SQL Server',
        icon: 'iconfont icon-sqlserver',
        link: '/devops/mssql/README.md',
      }, {
        text: 'Cubrid',
        icon: 'iconfont icon-cubrid',
        link: '/devops/cubrid/README.md',
      }, {
        text: 'PostgreSQL',
        icon: 'iconfont icon-postgresql',
        link: '/devops/postgres/README.md',
      }, {
        text: 'Django',
        icon: 'iconfont icon-django',
        link: '/devops/django/README.md',
      }, {
        text: '🪳Cockroach',
        link: 'devops/django/README.md',
      }, {
        text: 'Altibase',
        icon: 'iconfont icon-altibase',
        link: '/devops/altibase/README.md',
      }, {
        text: 'Tibero',
        icon: 'fas fa-magnifying-glass',
        link: '/devops/tibero/README.md',
      },
    ],
  }, {
    text: '',
    icon: 'fas fa-screwdriver-wrench',
    children: [ 
      {
        text: 'Tool',
        icon: 'fas fa-screwdriver-wrench',
        link: '/tool/README.md',
      }, {
        text: 'Dracula',
        icon: 'iconfont icon-vampire-dracula',
        link: '/tool/dracula/README.md',
      }, {
        text: 'Intellij Idea',
        icon: 'iconfont icon-intellijidea',
        link: '/tool/intellij-idea/README.md',
      },{
        text: 'VSCode',
        icon: 'iconfont icon-vscode',
        link: '/tool/vscode/README.md',
      }, {
        text: 'Sublime Text',
        icon: 'iconfont icon-sublimetext',
        link: '/tool/sublimetext/README.md',
      }, {
        text: 'DBeaver',
        icon: 'iconfont icon-dbeaver',
        link: '/tool/dbeaver/README.md',
      }, {
        text: 'Excel',
        icon: 'iconfont icon-microsoftexcel',
        link: '/tool/excel/README.md',
      }, {
        text: 'Chrome Browser',
        icon: 'fa-brands fa-chrome',
        link: '/tool/googlechrome/README.md',
      }, {
        text: 'Notion',
        icon: 'iconfont icon-notion',
        link: '/tool/notion/README.md',
      }, {
        text: 'Wireshark',
        icon: 'iconfont icon-wireshark',
        link: '/tool/wireshark/README.md',
      }
    ]
  }, {
    text: '', // ai
    icon: 'fas fa-brain',
    children: [
      {
        text: 'OpenAI',
        icon: 'iconfont icon-openai',
        link: '/ai/openai/README.md',
      }, {
        text: 'LLM',
        icon: 'fas fa-language',
        link: '/ai/llm/README.md',
      }, {
        text: 'Gemini',
        icon: 'fas fa-wand-magic-sparkles',
        link: '/ai/gemini/README.md',
      }, 
    ]
  }, {
    text: '', // explore
    icon: 'fas fa-globe',
    children: [
      { 
        text: 'Explore',
        icon: 'fas fa-globe',
        link: '/explore/README.md',
      }, {
        text: 'Newsletter',
        icon: 'fas fa-rss',
        link: '/explore/newsletter/README.md',
      }, {
        text: 'Article(s)',
        icon: 'fas fa-square-share-nodes',
        link: '/explore/articles/README.md',
      },{
        text: 'YouTube',
        icon: 'fa-brands fa-youtube',
        link: '/explore/youtube/README.md',
      }, {
        text: 'Public API',
        icon: 'iconfont icon-api  ',
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
        icon: 'iconfont icon-cpp',
        link: 'https://chanhi2000.github.io/crashcourse/cpp/'
      }, {
        text: 'Ruby',
        icon: 'iconfont icon-ruby',
        link: 'https://chanhi2000.github.io/crashcourse/ruby/'
      }, {
        text: 'Haskell',
        icon: 'iconfont icon-haskell',
        link: 'https://chanhi2000.github.io/crashcourse/haskell/'
      }, {
        text: 'Docker',
        icon: 'fa-brands fa-docker',
        link: 'https://chanhi2000.github.io/crashcourse/docker/'
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