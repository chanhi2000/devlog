import { navbar } from "vuepress-theme-hope";

export const navbarEn = navbar([
  {
    text: '', // About
    icon: 'fas fa-house',
    children: [
      {
        text: 'Portfolio',
        icon: 'fas fa-pen-nib',
        link: '/about/README.md',
      }, {
        text: '(2022-2024) 아이티정보기술(주)',
        icon: '/images/about/ititinfo/logo.ico',
        link: '/about/ititinfo/README.md',
      }, {
        text: '(2021-2022) 풀이러닝(주)',
        icon: '/images/about/poole/logo.png',
        link: '/about/poole/README.md',
      }, {
        text: '(2018-2021) 지노시스템(주)',
        icon: '/images/about/ginno/logo.jpeg',
        link: '/about/ginno/README.md',
      }, {
        text: '개인 활동',
        icon: 'fas fa-person-hiking',
        link: '/about/personal/README.md',
      }  
    ]
  }, {
    text: '', // Projects
    icon: 'fas fa-industry',
    children: [
      {
        text: 'My Roadmap',
        icon: 'fas fa-flag-checkered',
        link: '/projects/roadmap/README.md'
      }, {
        text: 'Lifeguide',
        icon: 'fas fa-compass',
        link: '/projects/lifeguide/README.md'
      }, {
        text: 'Career',
        icon: 'fas fa-user-tie',
        link: '/projects/career/README.md',
      }, {
        text: 'Travel',
        icon: 'fas fa-plane',
        link: '/projects/travel/README.md'
      }, {
        text: 'Cook',
        icon: 'fas fa-fire-burner',
        link: '/projects/cook/README.md'
      },
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
        text: 'System Design',
        icon: 'fas fa-pen-ruler',
        link: '/academics/system-design/README.md',
      }, {
        text: 'Project Management',
        icon: 'fas fa-object-group',
        link: '/academics/pm/README.md',
      }, {
        text: 'Marketing',
        icon: 'fas fa-rectangle-ad',
        children: [
          '/academics/mrkt/README.md',
        ]
      }, {
        text: 'Finance',
        icon: 'fas fa-coins',
        children: [
          '/academics/fnce/README.md',
        ]
      }, {
        text: 'Mathematics',
        icon: 'fas fa-square-root-variable',
        children: [
          '/academics/math/README.md',
          '/academics/MATH011/README.md'
        ]
      }, {
        text: 'Physics',
        icon: 'fas fa-atom',
        children: [
          '/academics/phys/README.md',
          '/academics/PHYS034/README.md'
        ]
      }, {
        text: 'Computer Engineernig',
        icon: 'fas fa-computer',
        children: [
          '/academics/coen/README.md',
          '/academics/COEN020/README.md'
        ]
      }, 
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
        icon: 'iconfont icon-shell',
        link: '/programming/sh/README.md',
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
        text: 'Java',
        children: [
          '/programming/java/README.md',
          '/programming/java-android/README.md',
          '/programming/java-spring/README.md',
          '/programming/java-kafka/README.md',
          '/programming/java-quarkus/README.md',
          '/programming/java-armeria/README.md',
          '/programming/java-elasticsearch/README.md',
          '/programming/gradle/README.md',
          '/programming/mvn/README.md',
        ]
      }, {
        text: 'Swift',
        children: [
          '/programming/swift/README.md',
          '/programming/objc/README.md',
        ]
      }, {
        text: 'JavaScript',
        children: [
          '/programming/js/README.md',
          '/programming/npm/README.md',
          '/programming/ts/README.md',
          '/programming/js-node/README.md',
          '/programming/js-react/README.md',
          '/programming/js-vue/README.md',
          '/programming/js-svelte/README.md',
          '/programming/js-ng/README.md',
          '/programming/js-nest/README.md',
          '/programming/js-next/README.md',
          '/programming/js-jest/README.md',
          '/programming/js-playwright/README.md',
          '/programming/js-puppeteer/README.md',
          '/programming/js-storybook/README.md',
          '/programming/js-gatsby/README.md',
          '/programming/js-n8n/README.md',
          '/programming/js-supabase/README.md',
          '/programming/js-mermaid/README.md',
        ]
      }, {
        text: 'CSS',
        icon: 'fabrands fa-css3-alt',
        children: [
          '/programming/css/README.md',
          '/programming/css-tailwind/README.md',
        ],
      }, {
        text: 'Python',
        children: [
          '/programming/py/README.md',
          '/programming/py-numpy/README.md',
          '/programming/py-matplotlib/README.md',
          '/programming/py-pandas/README.md',
          '/programming/py-torch/README.md',
          '/programming/py-tensorflow/README.md',
          '/programming/py-keras/README.md',
          '/programming/py-django/README.md',
          '/programming/py-flask/README.md',
          '/programming/py-fastapi/README.md',
          '/programming/py-jupyter/README.md',
          '/programming/py-celery/README.md',
          '/programming/py-locust/README.md',
          '/programming/py-airflow/README.md',
        ]
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
        children: [
          '/programming/cs/README.md',
          '/programming/cs-blazor/README.md',
          '/programming/cs-unity/README.md',
        ]
      }, {
        text: 'Go',
        children: [
          '/programming/go/README.md',
          '/programming/go-grafana/README.md',
          '/programming/go-prometheus/README.md',
        ],
      }, {
        text: 'Dart',
        link: '/programming/dart/README.md',
        icon: 'iconfont icon-dart'
      }, {
        text: 'php',
        children: [
          '/programming/php/README.md',
          '/programming/php-laravel/README.md',         
        ]        
      }, {
        text: 'Ruby',
        link: '/programming/ruby/README.md',
        icon: 'iconfont icon-ruby',
      }, {
        text: 'C',
        link: '/programming/c/README.md',
        icon: 'iconfont icon-c',
      }, {
        text: 'C++',
        link: '/programming/cpp/README.md',
        icon: 'iconfont icon-cpp',
      }, {
        text: 'Elixir',
        link: '/programming/elixir/README.md',
        icon: 'iconfont icon-elixir',
      }, {
        text: 'Haskell',
        link: '/programming/hs/README.md',
        icon: 'iconfont icon-haskell',
      }, {
        text: 'Scala',
        link: '/programming/scala/README.md',
        icon: 'iconfont icon-scala',
      }, {
        text: 'Zig',
        link: '/programming/zig/README.md',
        icon: 'iconfont icon-zig',
      }, {
        text: 'Solidity',
        link: '/programming/solidity/README.md',
        icon: 'iconfont icon-solidity',
      }, {
        text: 'Qt',
        link: '/programming/qt/README.md',
        icon: 'iconfont icon-qt',
      }, {
        text: 'Common Lisp',
        link: '/programming/lisp/README.md',
        icon: 'iconfont icon-lisp',
      }, {
        text: 'OCaml',
        link: '/programming/ocaml/README.md',
        icon: 'iconfont icon-ocaml',
      }, {
        text: 'Julia',
        link: '/programming/julia/README.md',
        icon: 'iconfont icon-julia',
      }, {
        text: 'Clojure',
        link: '/programming/clojure/README.md',
        icon: 'iconfont icon-clojure',
      }, {
        text: 'Erlang',
        children: [
          '/programming/erl/README.md',
          '/programming/erl-rabbitmq/README.md',
        ]
      }, {
        text: 'Matlab',
        link: '/programming/matlab/README.md',
        icon: 'iconfont icon-matlab',
      }, {
        text: 'LaTeX',
        link: '/programming/latex/README.md',
        icon: 'iconfont icon-tex',
      }, {
        text: 'Markdown',
        link: '/programming/md/README.md',
        icon: 'fa-brands fa-markdown',
      }, {
        text: 'Godot Engine',
        link: '/programming/gd/README.md',
        icon: 'iconfont icon-godot',
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
        text: 'Atlassian',
        children: [
          '/devops/jira/README.md',
          '/devops/confluence/README.md',
        ],
      }, {
        text: 'macOS',
        icon: 'iconfont icon-macos',
        link: '/devops/macos/README.md',
      }, {
        text: 'iOS',
        icon: 'iconfont icon-macos',
        link: '/devops/ios/README.md',
      }, {
        text: 'Windows',
        icon: 'fa-brands fa-windows',
        link: '/devops/win/README.md',
      }, {
        text: 'Linux - Debain',
        children: [
          '/devops/linux-debian/README.md',
          '/devops/linux-debian/ubuntu/README.md',
          '/devops/linux-debian/kali/README.md',
          '/devops/linux-debian/parrot/README.md',
          '/devops/linux-debian/alpine/README.md',
          '/devops/linux-debian/truenas/README.md',
          '/devops/linux-debian/raspberry-pi/README.md',
        ]
      }, {
        text: 'Linux - Fedora',
        children: [
          '/devops/linux-fedora/README.md',
          '/devops/linux-fedora/centos/README.md',
          '/devops/linux-fedora/rocky/README.md',
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
        icon: 'iconfont icon-k8s',
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
        text: 'Linode',
        icon: 'fa-brands fa-linode',
        link: '/devops/linode/README.md',
      }, {
        text: 'Fly',
        icon: 'fa-brands fa-fly',
        link: '/devops/fly/README.md',
      }, {
        text: 'OCI',
        icon: 'iconfont icon-oci',
        link: '/devops/oci/README.md',
      }, {
        text: 'NCloud',
        link: '/devops/ncloud/README.md',
        icon: 'iconfont icon-naver'
      }, {
        text: 'Vercel',
        link: '/devops/vercel/README.md',
        icon: 'iconfont icon-vercel'
      }, {
      text: 'Ansible',
        icon: 'iconfont icon-ansible',
        link: '/devops/ansible/README.md'
      }, {
        text: 'Security',
        children: [
          '/devops/security/README.md',
          '/devops/security-jwt/README.md',
        ]
      }, {
        text: 'HTTP',
        icon: 'iconfont icon-http',
        link: '/devops/protocol-http/README.md',
      }, {
        text: 'Jenkins',
        icon: 'fa-brands fa-jenkins',
        link: '/devops/jenkins/README.md',
      }, {
        text: 'Travis CI',
        icon: 'iconfont icon-travis-ci',
        link: '/devops/travis-ci/README.md',
      }, {
        text: 'Appium',
        icon: 'iconfont icon-appium',
        link: '/devops/appium/README.md',
      }, {
        text: 'Selenium',
        icon: 'iconfont icon-selenium',
        link: '/devops/selenium/README.md',
      }, {
        text: 'Playwright',
        icon: 'iconfont icon-playwright',
        link: '/devops/playwright/README.md',
      }, {
        text: 'JMeter',
        icon: 'iconfont icon-apachejmeter',
        link: '/devops/jmeter/README.md',
      }, {
        text: 'Gatling',
        icon: 'iconfont icon-gatling',
        link: '/devops/gatling/README.md',
      }, {
        text: 'Nexus Repository',
        icon: 'iconfont icon-nexus',
        link: '/devops/nexus/README.md',
      }, {
        text: 'Tomcat',
        icon: 'iconfont icon-tomcat',
        link: '/devops/tomcat/README.md',
      }, {
        text: 'Wildfly',
        icon: 'iconfont icon-wildfly',
        link: '/devops/wildfly/README.md',
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
        link: '/data-science/mysql/README.md',
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
        text: 'RocksDB',
        icon: 'iconfont icon-rocksdb',
        link: '/data-science/rocksdb/README.md',
      }, {
        text: 'DuckDB',
        icon: 'iconfont icon-duckdb',
        link: '/data-science/duckdb/README.md',
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
      }, {
        text: 'Spark',
        icon: 'iconfont icon-apachespark',
        link: '/data-science/spark/README.md',
      }, {
        text: 'Splunk',
        icon: 'iconfont icon-splunk',
        link: '/data-science/splunk/README.md',
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
        text: 'Xcode',
        icon: 'iconfont icon-xcode',
        link: '/tool/xcode/README.md',
      }, {
        text: 'Jetbrains',
        children: [
          '/tool/jetbrains-idea/README.md',
          '/tool/jetbrains-pycharm/README.md',
          '/tool/jetbrains-writerside/README.md',
        ]
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
        icon: 'iconfont icon-subl',
        link: '/tool/sublimetext/README.md',
      }, {
        text: 'DBeaver',
        icon: 'iconfont icon-dbeaver',
        link: '/tool/dbeaver/README.md',
      }, {
        text: 'Browser',
        children: [
          '/tool/chrome/README.md',
          '/tool/firefox/README.md',
          '/tool/safari/README.md',
        ]
      }, {
        text: 'Productivity',
        children: [
          '/tool/xls/README.md',
          '/tool/ppt/README.md',
          '/tool/power-bi/README.md',
          '/tool/google-drive/README.md',
          '/tool/notion/README.md',
          '/tool/obsedian/README.md',
          '/tool/slack/README.md',
          '/tool/dracula/README.md',
        ]
      }, {
        text: 'Design',
        children: [
          '/tool/figma/README.md',
          '/tool/sketch/README.md',
          '/tool/davinci/README.md',
        ]
      }, { 
        text: 'crontab',
        icon: 'iconfont icon-crontab',
        link: '/tool/crontab/README.md',
      }, { 
        text: 'rsync',
        icon: 'iconfont icon-rsync',
        link: '/tool/rsync/README.md',
      }, { 
        text: 'ffmpeg',
        icon: 'iconfont icon-ffmpeg',
        link: '/tool/ffmpeg/README.md',
      }, { 
        text: 'tmux',
        icon: 'iconfont icon-tmux',
        link: '/tool/tmux/README.md',
      }, {
        text: 'vim',
        icon: 'iconfont icon-vim',
        children: [
          '/tool/vim/README.md',
          '/tool/nvim/README.md',
        ]
      }, {
        text: 'awk',
        icon: 'iconfont icon-awk',
        link: '/tool/awk/README.md',
      }, {
        text: 'wget',
        icon: 'iconfont icon-wget',
        link: '/tool/wget/README.md',
      }, {
        text: 'curl',
        icon: 'iconfont icon-curl',
        link: '/tool/curl/README.md',
      }, {
        text: 'nmap',
        icon: 'iconfont icon-nmap',
        link: '/tool/nmap/README.md',
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
        text: 'AI',
        icon: 'fas fa-brain',
        link: '/ai/README.md',
      }, {
        text: 'Github Copilot',
        icon: 'iconfont icon-copilot',
        link: '/ai/github-copilot/README.md',
      }, {
        text: 'LLM',
        icon: 'fas fa-language',
        children: [
          '/ai/llm/README.md',
          '/ai/openai/README.md',
          '/ai/llama/README.md',
          '/ai/gemini/README.md',
          '/ai/claude/README.md',
          '/ai/langchain/README.md',
        ]
      }, 
    ]
  }, { // hardware
    text: '',
    icon: 'fas fa-microchip',
    children: [
      {
        text: 'Hardware',
        icon: 'fas fa-microchip',
        link: '/hw/README.md',
      }, {
        text: 'Raspberry Pi (H/W)',
        icon: 'fa-brands fa-raspberry-pi',
        link: '/hw/raspberry-pi/README.md',
      }, {
        text: 'Flipper Zero',
        icon: 'iconfont icon-flipper-zero',
        link: '/hw/flipper-zero/README.md',
      }, {
        text: 'ST Microelectronics',
        icon: 'iconfont icon-st-microelectronics',
        link: '/hw/stm/README.md',
      }, {
        text: 'Arduino',
        icon: 'iconfont icon-arduino',
        link: '/hw/arduino/README.md',
      }, {
        text: 'NAS',
        icon: 'iconfont icon-nas',      
        link: '/hw/nas/README.md',
      }
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
          '/explore/study.md',
          '/explore/awesome-list.md',
        ]
      }, {
        text: 'API',
        icon: 'iconfont icon-api',
        children: [
          '/explore/api/README.md',
          '/explore/api/kakao/README.md',
          '/explore/api/sk/README.md',
          '/explore/api/coupang/README.md',
        ]
      }, {
        text: 'YouTube',
        icon: 'fa-brands fa-youtube',
        link: '/explore/youtube/README.md',
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
        icon: 'iconfont icon-k8s',
        link: 'https://chanhi2000.github.io/crashcourse/k8s/'
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