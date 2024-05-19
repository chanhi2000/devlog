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
      }, {
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
        text: 'Data Structure',
        icon: 'iconfont icon-class',
        link: '/academics/data-structure/README.md',
      }, {
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
    text: '', // programming
    icon: 'fas fa-keyboard',
    children: [
      {
        text: 'Programming',
        link: "/programming/README.md",
        icon: 'fas fa-keyboard',
      }, {
        text: 'Shell',
        link: '/programming/sh/README.md',
        icon: 'iconfont icon-shell'
      }, {
        text: 'Batchfile (Windows)',
        link: '/programming/batchfile/README.md',
        icon: 'fas fa-gears',
      }, {
        text: 'Powershell',
        link: '/programming/pwsh/README.md',
        icon: 'iconfont icon-powershell',
      }, {
        text: 'Git',
        link: '/programming/git/README.md',
        icon: 'iconfont icon-git',
      }, {
        text: 'Vim',
        link: '/programming/vim/README.md',
        icon: 'iconfont icon-vim'
      }, {
        text: 'Gradle',
        link: '/programming/gradle/README.md',
        icon: 'iconfont icon-gradle'
      }, {
        text: 'Maven',
        link: '/programming/maven/README.md',
        icon: 'iconfont icon-maven',
      }, {
        text: 'Java',
        link: '/programming/java/README.md',
        icon: 'fa-brands fa-java'
      }, {
        text: 'Spring',
        link: '/programming/java-spring/README.md',
        icon: 'iconfont icon-spring',      
      }, {
        text: 'Android',
        link: '/programming/java-android/README.md',
        icon: 'fa-brands fa-android'
      }, {
        text: 'Kafka',
        link: '/programming/java-kafka/README.md',
        icon: 'iconfont icon-apachekafka',
      }, {
        text: 'Elasticsearch',
        icon: 'iconfont icon-elasticsearch',
        link: '/programming/java-elasticsearch/README.md',
      }, {
        text: 'Swift',
        link: '/programming/swift/README.md',
        icon: 'fa-brands fa-swift',
      }, {
        text: 'JavaScript',
        icon: 'fa-brands fa-js',
        link: '/programming/js/README.md',
      }, {
        text: 'NPM',
        icon: 'fa-brands fa-npm',
        link: '/programming/npm/README.md',
      }, {
        text: 'Node.js',
        link: '/programming/js-node/README.md',
        icon: 'fa-brands fa-node',
      }, {
        text: 'React.js',
        link: '/programming/js-react/README.md',
        icon: 'fa-brands fa-react',
      }, {
        text: 'Vue.js',
        link: '/programming/js-vue/README.md',
        icon: 'fa-brands fa-vuejs',
      }, {
        text: 'Svelte.js',
        link: '/programming/js-svelte/README.md',
        icon: 'iconfont icon-svelte',
      }, {
        text: 'Angular.js',
        icon: 'fa-brands fa-angular',
        link: '/programming/js-angular/README.md',
      }, {
        text: 'Nest.js',
        icon: 'iconfont icon-nestjs',
        link: '/programming/js-nest/README.md',
      }, {
        text: 'Next.js',
        icon: 'iconfont icon-nextjs',
        link: '/programming/js-next/README.md',
      }, {
        text: 'GraphQL',
        icon: 'iconfont icon-graphql',
        link: '/programming/js-graphql/README.md',
      }, {
        text: 'Supabase',
        icon: 'iconfont icon-supabase',
        link: '/programming/js-supabase/README.md',
      }, {
        text: 'Mermaid.js',
        link: '/programming/js-mermaid/README.md',
        icon: 'iconfont icon-mermaid',
      }, {
        text: 'CSS',
        link: '/programming/css/README.md',
        icon: 'fa-brands fa-css3-alt'
      }, {
        text: 'Tailwind CSS',
        link: '/programming/css-tailwind/README.md',
        icon: 'iconfont icon-tailwindcss',
      }, {
        text: 'Python',
        link: '/programming/py/README.md',
        icon: 'fa-brands fa-python',
      }, {
        text: 'Django',
        link: '/programming/py-django/README.md',
        icon: 'iconfont icon-django',
      }, {
        text: 'Jupyter',
        icon: 'iconfont icon-jupyter',
        link: '/programming/py-jupyter/README.md',
      }, {
        text: 'Airflow',
        link: '/programming/py-airflow/README.md',
        icon: 'iconfont icon-apacheairflow',
      }, {
        text: 'Objective-C',
        icon: 'iconfont icon-objective-c',
        link: '/programming/objc/README.md',
      }, {
        text: 'Rust',
        link: '/programming/rust/README.md',
        icon: 'fa-brands fa-rust'
      }, {
        text: 'Lua',
        link: '/programming/lua/README.md',
        icon: 'iconfont icon-lua',
      }, {
        text: 'CSharp',
        link: '/programming/csharp/README.md',
        icon: 'iconfont icon-csharp',
      }, {
        text: 'Go',
        link: '/programming/go/README.md',
        icon: 'fa-brands fa-golang'
      }, {
        text: 'Dart',
        link: '/programming/dart/README.md',
        icon: 'iconfont icon-dart'
      }, {
        text: 'php',
        link: '/programming/php/README.md',
        icon: 'fa-brands fa-php'
      }, {
        text: 'Ruby',
        link: '/programming/ruby/README.md',
        icon: 'iconfont icon-ruby',
      }, {
        text: 'Elixir',
        link: '/programming/elixir/README.md',
        icon: 'iconfont icon-elixir',
      }, {
        text: 'Haskell',
        link: '/programming/haskell/README.md',
        icon: 'iconfont icon-haskell',
      }, {
        text: 'C',
        link: '/programming/c/README.md',
        icon: 'iconfont icon-c',
      }, {
        text: 'C++',
        link: '/programming/cpp/README.md',
        icon: 'iconfont icon-cpp',
      }, {
        text: 'Zig',
        link: '/programming/zig/README.md',
        icon: 'iconfont icon-zig',
      }, {
        text: 'Solidity',
        link: '/programming/solidity/README.md',
        icon: 'iconfont icon-solidity',
      }, {
        text: 'LaTeX',
        link: '/programming/latex/README.md',
        icon: 'iconfont icon-tex',
      }, 
    ]
  }, {
    text: '',
    icon: 'fas fa-network-wired',
    children: [ 
      {
        text: 'DevOps',
        icon: 'fas fa-network-wired',
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
        children: [
          '/devops/linux-debian/README.md',
          '/devops/linux-debian/ubuntu/README.md',
          '/devops/linux-debian/kali-linux/README.md',
          '/devops/linux-debian/raspberry-pi/README.md',
        ]
      }, {
        text: 'Linux - Fedora',
        icon: 'fa-brands fa-fedora',
        children: [
          '/devops/linux-fedora/README.md',
          '/devops/linux-fedora/centos/README.md',
        ]
      }, {
        text: 'Linux - NixOS',
        icon: 'iconfont icon-nixos',
        link: '/devops/linux-nixos/README.md',
      }, {
        text: 'Proxmox',
        icon: 'iconfont icon-proxmox',
        link: '/devops/proxmox/README.md',
      }, {
        text: 'KVM',
        icon: 'fa-brands fa-linux',
        link: '/devops/kvm/README.md',
      }, {
        text: 'Virtualbox',
        icon: 'iconfont icon-virtualbox',
        link: '/devops/virtualbox/README.md',
      }, {
        text: 'Vagrant',
        icon: 'iconfont icon-vagrant',
        link: '/devops/vagrant/README.md',
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
        link: '/devops/k8s/README.md',
      }, {
        text: 'Openshift',
        icon: 'fa-brands fa-redhat',
        link: '/devops/openshift/README.md',
      }, {
        text: 'Terraform',
        icon: 'iconfont icon-terraform',
        link: '/devops/terraform/README.md',
      },{
        text: 'AWS',
        icon: 'fa-brands fa-aws',
        link: '/devops/aws/README.md',
      }, {
        text: 'Azure',
        icon: 'iconfont icon-microsoftazure',
        link: '/devops/azure/README.md',
      }, {
        text: 'Google Cloud',
        icon: 'iconfont icon-gcp',
        link: '/devops/gcp/README.md',
      }, {
        text: 'OCI',
        icon: 'iconfont icon-oci',
        link: '/devops/oci/README.md',
      }, {
        text: 'NCloud',
        link: '/devops/ncloud/README.md',
        icon: 'iconfont icon-naver'
      }, {
        text: 'Ansible',
        icon: 'iconfont icon-ansible',
        link: '/devops/ansible/README.md'
      }, {
        text: 'NAS',
        icon: 'iconfont icon-nas',      
        link: '/devops/nas/README.md',
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
        text: 'Playwright',
        icon: 'iconfont icon-playwright',
        link: '/devops/playwright/README.md',
      },  {
        text: 'Tomcat',
        icon: 'iconfont icon-tomcat',
        link: '/devops/tomcat/README.md',
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
    ],
  }, {
    text: '',
    icon: 'fas fa-database',
    children: [
      {
        text: 'Data Science',
        icon: 'fas fa-database',
        link: '/data-science/README.md',
      }, {
        text: 'MySQL',
        icon: 'iconfont icon-mysql',
        link: '/data-science/mysqlREADME.md',
      }, {
        text: 'Oracle SQL',
        icon: 'iconfont icon-oracle',
        link: '/data-science/oracle/README.md',
      }, {
        text: 'Microsoft SQL Server',
        icon: 'iconfont icon-sqlserver',
        link: '/data-science/mssql/README.md',
      }, {
        text: 'Cubrid',
        icon: 'iconfont icon-cubrid',
        link: '/data-science/cubrid/README.md',
      }, {
        text: 'PostgreSQL',
        icon: 'iconfont icon-postgresql',
        link: '/data-science/postgres/README.md',
      }, {
        text: 'MongoDB',
        icon: 'iconfont icon-mongodb',
        link: '/data-science/mongodb/README.md',
      }, {
        text: 'Altibase',
        icon: 'iconfont icon-altibase',
        link: '/data-science/altibase/README.md',
      }, {
        text: 'Tibero',
        icon: 'fas fa-t',
        link: '/data-science/tibero/README.md',
      },  {
        text: 'SQLite',
        icon: 'iconfont icon-sqlite',
        link: '/data-science/sqlite/README.md',
      }, {
        text: 'Redis',
        icon: 'iconfont icon-redis',
        link: '/data-science/redis/README.md',
      }, {
        text: 'Cockroach',
        icon: 'iconfont icon-cockroach-db',
        link: 'devops/django/README.md',
      }, {
        text: 'R',
        icon: 'iconfont icon-r',
        link: '/data-science/r/README.md',
      }, {
        text: 'Cassandra',
        icon: 'iconfont icon-apachecassandra',
        link: '/data-science/cassandra/README.md',
      }, {
        text: 'Hadoop',
        icon: 'iconfont icon-hadoop',
        link: '/data-science/hadoop/README.md',
      }, 
    ]
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
        text: 'Xcode',
        icon: 'iconfont icon-xcode',
        link: '/tool/xcode/README.md',
      }, {
        text: 'Intellij Idea',
        icon: 'iconfont icon-intellijidea',
        link: '/tool/intellij-idea/README.md',
      }, {
        text: 'Visual Studio',
        icon: 'iconfont icon-visualstudio',
        link: '/tool/visualstudio/README.md',
      }, {
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
        text: 'PowerPoint',
        icon: 'iconfont icon-microsoftpowerpoint',
        link: '/tool/powerpoint/README.md',
      }, {
        text: 'Power Bi',
        icon: 'iconfont icon-power-bi',
        link: '/tool/powerbi/README.md',
      }, {
        text: 'Chrome Browser',
        icon: 'fa-brands fa-chrome',
        link: '/tool/chrome/README.md',
      }, {
        text: 'Firefox',
        icon: 'fa-brands fa-firefox-browser',
        link: '/tool/firefox/README.md',
      }, {
        text: 'Safari',
        icon: 'fa-brands fa-safari',
        link: '/tool/safari/README.md',
      }, {
        text: 'Notion',
        icon: 'iconfont icon-notion',
        link: '/tool/notion/README.md',
      }, {
        text: 'Wireshark',
        icon: 'iconfont icon-wireshark',
        link: '/tool/wireshark/README.md',
      }, {
        text: 'Tableau',
        icon: 'iconfont icon-tableau',
        link: '/tool/tableau/README.md',
      }, {
        text: 'Airtable',
        icon: 'iconfont icon-airtable',
        link: '/tool/airtable/README.md',
      },
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
        text: 'Github Copilot',
        icon: 'iconfont icon-copilot',
        link: '/ai/github-copilot/README.md',
      }, {
        text: 'LLM',
        icon: 'fas fa-language',
        link: '/ai/llm/README.md',
      }, {
        text: 'Gemini',
        icon: 'fas fa-wand-magic-sparkles',
        link: '/ai/gemini/README.md',
      },  {
        text: 'Claude',
        icon: 'iconfont icon-claude',
        link: '/ai/claude/README.md',
      }, 
    ]
  }, {
    text: '', // explore
    icon: 'fas fa-globe',
    children: [
      { 
        text: 'Explore',
        icon: 'fas fa-globe',
        children: [
          '/explore/README.md',
          '/explore/newsletter.md',
          '/explore/apis.md',
        ]
      }, {
        text: 'Public API',
        icon: 'iconfont icon-api',
        children: [
          '/explore/api/kakao/README.md',
          '/explore/api/sk/README.md',
        ]
      }, {
        text: 'System Design',
        icon: 'fas fa-pen-ruler',
        link: '/explore/system-design/README.md',
      }, {
        text: 'YouTube',
        icon: 'fa-brands fa-youtube',
        link: '/explore/youtube/README.md',
      }, {
        text: 'Devlog',
        icon: 'fas fa-timeline',
        link: '/explore/devlog/README.md',
      }, {
        text: 'Article(s)',
        icon: 'fas fa-square-share-nodes',
        link: '/explore/articles/README.md',
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
        text: 'C++',
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
        icon: 'fas fa-network-wired',
        link: 'https://chanhi2000.github.io/crashcourse/devops/'
      }, {
        text: 'Misc',
        icon: 'fas fa-object-group',
        link: 'https://chanhi2000.github.io/crashcourse/misc/'
      }
    ]
  }
])