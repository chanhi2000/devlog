import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/g4e/': [
    {
      text: 'Intro',
      children: [ '/g4e/README.md' ],
    },
    //region: lang
    {
      text: '🐚Shell',
      collapsible: true,
      children: [
        '/g4e/cli-shell/README.md',
        '/g4e/cli-shell/basics.md',
        '/g4e/cli-shell/tips.md',
        '/g4e/cli-shell/troubleshooting.md',
        '/g4e/cli-shell/references.md',        
        '/g4e/cli-shell/github.md',
        '/g4e/cli-shell/youtube.md',
      ]
    }, {
      text: '🧢Batchfile (Windows)',
      collapsible: true,
      children: [
        '/g4e/cli-batchfile/README.md',
        '/g4e/cli-batchfile/basics.md',
        '/g4e/cli-batchfile/tips.md',
        '/g4e/cli-batchfile/references.md',
        '/g4e/cli-batchfile/github.md',
      ]
    }, {
      text: '🧙‍♂️Powershell',
      collapsible: true,
      children: [
        '/g4e/cli-pwsh/README.md',
        '/g4e/cli-pwsh/basics.md',
        '/g4e/cli-pwsh/tips.md',
        '/g4e/cli-pwsh/references.md',
        '/g4e/cli-pwsh/github.md',
        '/g4e/cli-pwsh/youtube.md',
      ]
    }, {
      text: '🐘Gradle',
      collapsible: true,
      children: [
        '/g4e/lang-gradle/README.md',
        '/g4e/lang-gradle/snippets.md',
        '/g4e/lang-gradle/troubleshooting.md',
        '/g4e/lang-gradle/references.md'
      ]
    }, {
      text: '🐦Maven',
      collapsible: true,
      children: [
        '/g4e/lang-maven/README.md',
        '/g4e/lang-maven/snippets.md',
      ]
    }, {
      text: '🅺Kotlin',
      collapsible: true,
      children: [
        '/g4e/lang-kotlin/README.md',
        '/g4e/lang-kotlin/basics.md',
        '/g4e/lang-kotlin/ktx.md',
        '/g4e/lang-kotlin/tips.md',
        '/g4e/lang-kotlin/references.md',
      ]
    }, {
      text: '☕️Java',
      collapsible: true,
      children: [
        '/g4e/lang-java/README.md',
        '/g4e/lang-java/basics.md',
        '/g4e/lang-java/spring.md',
        '/g4e/lang-java/was.md',
        '/g4e/lang-java/webservice.md',
        '/g4e/lang-java/references.md',        
        '/g4e/lang-java/github.md',
        '/g4e/lang-java/youtube.md',
      ]
    }, {
      text: '🤖Android',
      collapsible: true,
      children: [
        '/g4e/lang-java-android/README.md',
        '/g4e/lang-java-android/tips.md',
        '/g4e/lang-java-android/troubleshooting.md',
        '/g4e/lang-java-android/snippets-gradle.md',
        '/g4e/lang-java-android/references.md',
        '/g4e/lang-java-android/youtube.md',
      ]
    }, {
      text: '🕊️Swift',
      collapsible: true,
      children: [
        '/g4e/lang-swift/README.md',
        '/g4e/lang-swift/tips.md',
        '/g4e/lang-swift/snippets.md',
        '/g4e/lang-swift/references.md',
        '/g4e/lang-swift/github.md',
        '/g4e/lang-swift/youtube.md',
      ]
    }, {
      text: '🧶Node.js',
      collapsible: true,
      children: [
        '/g4e/lang-js-node/README.md',
        '/g4e/lang-js-node/troubleshooting.md',
        '/g4e/lang-js-node/sandbox.md',
        '/g4e/lang-js-node/cordova.md',
        '/g4e/lang-js-node/tips.md',
        '/g4e/lang-js-node/snippets.md',
        '/g4e/lang-js-node/references.md',
        '/g4e/lang-js-node/github.md',
        '/g4e/lang-js-node/youtube.md',
      ]
    }, {
      text: '🧜‍♀️Mermaid.js',
      collapsible: true,
      children: [
        '/g4e/lang-js-mermaid/README.md',
        '/g4e/lang-js-mermaid/examples.md',
      ]
    }, {
      text: '🐍Python',
      collapsible: true,
      children: [
        '/g4e/lang-python/README.md',
        '/g4e/lang-python/references.md',
        '/g4e/lang-python/github.md',
        '/g4e/lang-python/youtube.md',
      ]
    }, {
      text: '🎨CSS',
      collapsible: true,
      children: [
        '/g4e/lang-css/README.md',
        '/g4e/lang-css/tips.md',
        '/g4e/lang-css/snippets.md',
        '/g4e/lang-css/references.md',
        '/g4e/lang-css/youtube.md',
      ]
    }, {
      text: '🦀Rust',
      collapsible: true,
      children: [
        '/g4e/lang-rust/README.md',
        '/g4e/lang-rust/references.md',
        '/g4e/lang-rust/github.md',
        '/g4e/lang-rust/youtube.md',
      ]
    }, 
    {
      text: '🪐Lua',
      collapsible: true,
      children: [
        '/g4e/lang-lua/README.md',
        '/g4e/lang-lua/references.md',
        '/g4e/lang-lua/github.md',
        '/g4e/lang-lua/youtube.md',
      ]
    }, {
      text: '♯CSharp',
      collapsible: true,
      children: [
        '/g4e/lang-csharp/README.md',
        '/g4e/lang-csharp/references.md',
        '/g4e/lang-csharp/github.md',
        '/g4e/lang-csharp/youtube.md',
      ]
    }, {
      text: '🦦Go',
      collapsible: true,
      children: [
        '/g4e/lang-go/README.md',
        '/g4e/lang-go/references.md',
        '/g4e/lang-go/github.md',
        '/g4e/lang-go/youtube.md',
      ]
    }, {
      text: '🔰Dart',
      collapsible: true,
      children: [
        '/g4e/lang-dart/README.md',
        '/g4e/lang-dart/snippets.md',
        '/g4e/lang-dart/references.md',
        '/g4e/lang-dart/github.md',
        '/g4e/lang-dart/youtube.md',
      ]
    }, {
      text: '⛵php',
      collapsible: true,
      children: [
        '/g4e/lang-php/README.md',
        '/g4e/lang-php/references.md',
        '/g4e/lang-php/github.md',
        '/g4e/lang-php/youtube.md',
      ]
    }, {
      text: '🦕C',
      collapsible: true,
      children: [
        '/g4e/lang-c/README.md',
        '/g4e/lang-c/tips.md',
        '/g4e/lang-c/references.md',
        '/g4e/lang-c/github.md',
        '/g4e/lang-c/youtube.md',
      ]
    }, {
      text: '🏂Zig',
      collapsible: true,
      children: [
        '/g4e/lang-zig/README.md',
        '/g4e/lang-zig/tips.md',
        '/g4e/lang-zig/references.md',
        '/g4e/lang-zig/github.md',
        '/g4e/lang-zig/youtube.md',
      ]
    }, {
      text: '🦢LaTeX',
      collapsible: true,
      children: [
        '/g4e/lang-latex/README.md',
        '/g4e/lang-latex/references.md',
      ]
    },
    //endregion
    //region: devops
    {
      text: '🛠️Git',
      collapsible: true,
      children: [
        '/g4e/devops-git/README.md',
        '/g4e/devops-git/basics.md',
        '/g4e/devops-git/troubleshooting.md',
        '/g4e/devops-git/references.md',
        '/g4e/devops-git/youtube.md',
      ]
    }, {
      text: '🦊Gitlab',
      collapsible: true,
      children: [
        '/g4e/devops-gitlab/README.md',
        '/g4e/devops-gitlab/docker.md',
        '/g4e/devops-gitlab/docker-gitlab-runner.md',
        '/g4e/devops-gitlab/docker-compose.md',
        '/g4e/devops-gitlab/troubleshooting.md',
        '/g4e/devops-gitlab/references.md',
        '/g4e/devops-gitlab/youtube.md',
      ]
    }, {
      text: '🐧Linux',
      collapsible: true,
      children: [
        '/g4e/devops-os-linux/README.md',
        '/g4e/devops-os-linux/env-setup.md',
        '/g4e/devops-os-linux/references.md',
        '/g4e/devops-os-linux/youtube.md',
      ]
    }, {
      text: '🖥️macOS',
      collapsible: true,
      children: [
        '/g4e/devops-os-mac/README.md',
        '/g4e/devops-os-mac/env-setup.md',
        '/g4e/devops-os-mac/tips.md',
        '/g4e/devops-os-mac/youtube.md',

      ],
    }, {
      text: '👓Windows',
      collapsible: true,
      children: [
        '/g4e/devops-os-win/README.md',
        '/g4e/devops-os-win/env-setup.md',
        '/g4e/devops-os-win/ie.md',
        '/g4e/devops-os-win/tips.md',
        '/g4e/devops-os-win/wsl.md',
        '/g4e/devops-os-win/youtube.md',
      ]
    }, {
      text: '👽oVirt',
      collapsible: true,
      children: [
        '/g4e/devops-ovirt/README.md',
        '/g4e/devops-ovirt/cli.md',
        '/g4e/devops-ovirt/references.md',
        '/g4e/devops-ovirt/youtube.md',
      ]
    }, {
      text: '🐋Docker',
      collapsible: true,
      children: [
        '/g4e/devops-docker/README.md',
        '/g4e/devops-docker/basics.md',        
        '/g4e/devops-docker/docker-compose.md',
        '/g4e/devops-docker/favorite-containers.md',
        '/g4e/devops-docker/references.md',
        '/g4e/devops-docker/youtube.md',
      ]
    }, {
      text: '🍄Podman',
      collapsible: true,
      children: [
        '/g4e/devops-podman/README.md',
        '/g4e/devops-podman/skopeo.md',
        '/g4e/devops-podman/references.md',
        '/g4e/devops-podman/articles/you-dont-have-to-use-docker-anymore.md',
      ]
    }, {
      text: '☸️Kubernetes',
      collapsible: true,
      children: [
        '/g4e/devops-kubernetes/README.md',
        '/g4e/devops-kubernetes/references.md',
        '/g4e/devops-kubernetes/youtube.md',
      ]
    }, {
      text: '📦AWS',
      collapsible: true,
      children: [
        '/g4e/devops-aws/README.md',
        '/g4e/devops-aws/references.md',
      ]
    }, {
      text: '🛡Security',
      collapsible: true,
      children: [
        '/g4e/devops-security/README.md',
        '/g4e/devops-security/references.md',
        '/g4e/devops-security/youtube.md',
      ]
    }, {
      text: '🌤️HTTP',
      collapsible: true,
      children: [
        '/g4e/protocol-http/README.md',
        '/g4e/protocol-http/api.md',
      ]
    }, {
      text: '🤵🏻Jenkins',
      collapsible: true,
      children: [
        '/g4e/ci-jenkins/README.md',
        '/g4e/ci-jenkins/template.md',
        '/g4e/ci-jenkins/references.md',
        '/g4e/ci-jenkins/youtube.md',
      ]
    }, {
      text: '🍐Appium',
      collapsible: true,
      children: [
        '/g4e/ci-appium/README.md',
        '/g4e/ci-appium/references.md',
      ]
    }, {
      text: '📚Nexus Repository',
      collapsible: true,
      children: [
        '/g4e/devops-nexus/README.md',
        '/g4e/devops-nexus/tips.md',
      ]
    }, {
      text: '🧐Selenium',
      collapsible: true,
      children: [
        '/g4e/test-selenium/README.md',
        '/g4e/test-selenium/youtube.md',
      ],
    }, {
      text: '🧛‍♀️Dracula',
      collapsible: true,
      children: [
        '/g4e/dracula/README.md',
        '/g4e/dracula/env-setup.md',
      ],
    }, {
      text: '🆚VSCode',
      collapsible: true,
      children: [
        '/g4e/tool-ide-vscode/README.md',
        '/g4e/tool-ide-vscode/plugins.md',
        '/g4e/tool-ide-vscode/settings-json.md',
        '/g4e/tool-ide-vscode/tips.md',
        '/g4e/tool-ide-vscode/snippets.md',
        '/g4e/tool-ide-vscode/references.md',
        '/g4e/tool-ide-vscode/youtube.md',
      ],
    }, {
      text: '⌨Sublime Text',
      collapsible: true,
      children: [
        '/g4e/tool-te-sublime-text/README.md',
        '/g4e/tool-te-sublime-text/plugins.md',
        '/g4e/tool-te-sublime-text/snippets.md',
        '/g4e/tool-te-sublime-text/references.md',
      ],
    }, {
      text: '🎩IDE & Text Editor',
      collapsible: true,
      children: [
        '/g4e/tool-ide/README.md',
        '/g4e/tool-ide/idea-plugins.md',
        '/g4e/tool-ide/idea-troubleshooting.md',
        '/g4e/tool-ide/vim-tips.md',
        '/g4e/tool-ide/dbeaver-hotkey.md',
        '/g4e/tool-ide/dbeaver-jdbc.md',
        '/g4e/tool-ide/dbeaver-qtmplt.md',
      ]
    }, {
      text: '🧩Excel',
      collapsible: true,
      children: [
        '/g4e/tool-excel/README.md',
        '/g4e/tool-excel/youtube.md',
      ]
    }, {
      text: '🌈Chrome Browser',
      collapsible: true,
      children: [
        '/g4e/tool-chrome-browser/README.md',
        '/g4e/tool-chrome-browser/plugins.md',
      ]
    }, {
      text: '💬ChatGPT',
      collapsible: true,
      children: [
        '/g4e/tool-ai-chatgpt/README.md',
        '/g4e/tool-ai-chatgpt/references.md',
        '/g4e/tool-ai-chatgpt/youtube.md',
      ]
    },
    //endregion
    //region: DB
    {
      text: '🐬MySQL',
      collapsible: true,
      children: [
        '/g4e/db-mysql/README.md',
        '/g4e/db-mysql/query.md',
        '/g4e/db-mysql/references.md',
      ]
    }, {
      text: '🙆‍♂️Oracle SQL',
      collapsible: true,
      children: [
        '/g4e/db-oracle/README.md',
        '/g4e/db-oracle/query.md',
        '/g4e/db-oracle/references.md',
        '/g4e/db-oracle/youtube.md',
      ]
    }, {
      text: '❇️Cubrid',
      collapsible: true,
      children: [
        '/g4e/db-cubrid/README.md',
        '/g4e/db-cubrid/query.md',
        '/g4e/db-cubrid/docker.md',
        '/g4e/db-cubrid/references.md',
      ]
    }, {
      text: '🦏PostgreSQL',
      collapsible: true,
      children: [
        '/g4e/db-postgres/README.md',
        '/g4e/db-postgres/query.md',
        '/g4e/db-postgres/references.md',
      ]
    }, {
      text: '🪳Cockroach',
      collapsible: true,
      children: [
        '/g4e/db-cockroach/README.md',
        '/g4e/db-cockroach/query.md',
        '/g4e/db-cockroach/references.md',
      ]
    }, {
      text: '🔎SQL',
      collapsible: true,
      children: [
        '/g4e/sql/README.md',
        '/g4e/sql/altibase.md',
        '/g4e/sql/mssql.md',
        '/g4e/sql/tibero.md',
      ]
    }, 
    //endregion
    {
      text: '🥋Regex',
      collapsible: true,
      children: [
        '/g4e/regex/README.md',
        '/g4e/regex/tips.md',
        '/g4e/regex/references.md',
      ],
    }, {
      text: 'Markdown',
      collapsible: true,
      children: [
        '/g4e/lang-markdown/README.md',
        '/g4e/lang-markdown/mermaid.md',
        '/g4e/lang-markdown/template.md',
      ]
    }, 
  ],
  '/catalogs/': [
    {
      text: '🏁My Roadmap',
      children: [ '/catalogs/README.md' ],
    },
    {
      text: '🏰Portfolio',
      collapsible: true,
      children: [
        '/catalogs/portfolio/README.md',
      ],
    }, {
      text: '🧭Lifeguide',
      collapsible: true,
      children: [
        '/catalogs/lifeguide/README.md',
        '/catalogs/lifeguide/nhis/README.md',
      ]
    }, {
      text: '🎈TIL',
      collapsible: true,
      children: [
        '/catalogs/til/README.md',
      ],
    }
  ],
  '/explore/': [
    {
      text: 'Intro',
      children: [ '/explore/README.md' ],
    }, {
      text: '🗞️Newsletter',
      collapsible: true,
      children: [
        '/explore/newsletter/README.md',
        '/explore/newsletter/data-science.md',
        '/explore/newsletter/github.md',
      ]
    }, {
      text: '🕶️Github',
      collapsible: true,
      children: [
        '/explore/github/README.md',
        '/explore/github/awesome-list.md',
        '/explore/github/library.md',
        '/explore/github/news.md',
        '/explore/github/tutorial.md',
        '/explore/github/portfolio.md',
      ]
    }, {
      text: '📺Youtube',
      collapsible: true,
      children: [
        '/explore/youtube/README.md',
        '/explore/youtube/watch-later.md',
        '/explore/youtube/watch-later-tutorial.md',
        '/explore/youtube/watch-later-keynote.md',
        '/explore/youtube/edu-compsci.md',
      ]
    }, {
      text: "DB Server 성능 향상 분석 및 튜닝 전문가 향상과정",
      collapsible: true,
      children: [
        '/explore/oracle-sql-db-tuning/README.md',
        '/explore/oracle-sql-db-tuning/01a.md',
        '/explore/oracle-sql-db-tuning/01b.md',
        '/explore/oracle-sql-db-tuning/01c.md',
      ],
    }, {
      text: '🎓Tutorial',
      collapsible: true,
      children: [
        '/explore/tutorial/README.md',
        '/explore/tutorial/list.md',
      ]
    },{
      text: '🧭Public API',
      collapsible: true,
      children: [
        '/explore/api/README.md',
        '/explore/api/list.md',
        '/explore/api/popular.md',
      ],
    }, {
      text: '✏️Devlog',
      collapsible: true,
      children: [
        '/explore/devlog/README.md',
        '/explore/devlog/list.md',
      ]
    }, {
      text: '🦺Career',
      collapsible: true,
      children: [
        '/explore/career/README.md',
        '/explore/career/hiring.md',
        '/explore/career/resource.md',
        '/explore/career/exam.md',
      ]
    }
  ],
  '/academics/': [
    {
      text: 'Intro',
      children: [ '/academics/README.md' ],
    }, {
      text: 'MATH011',
      collapsible: true,
      children: [
        '/academics/MATH011/README.md',
        '/academics/MATH011/lect01.md',
      ]
    }, {
      text: 'PHYS034',
      collapsible: true,
      children: [
        '/academics/PHYS034/README.md',
        '/academics/PHYS034/week01/README.md',
        '/academics/PHYS034/week01/lecture.md',
      ]
    }
  ], '/crashcourse/' : [
    {
      text: 'Intro',
      children: [ '/crashcourse/README.md' ]
    }, {
      text: '🕊️100 Days of Swift',
      collapsible: true,
      children: [
        '/crashcourse/paul-hudson-100-days-of-swift/README.md',
        '/crashcourse/paul-hudson-100-days-of-swift/1.md',
        '/crashcourse/paul-hudson-100-days-of-swift/2.md',
        '/crashcourse/paul-hudson-100-days-of-swift/3.md',
        '/crashcourse/paul-hudson-100-days-of-swift/4.md',
        '/crashcourse/paul-hudson-100-days-of-swift/5.md',
        '/crashcourse/paul-hudson-100-days-of-swift/6.md',
        '/crashcourse/paul-hudson-100-days-of-swift/7.md',
        '/crashcourse/paul-hudson-100-days-of-swift/8.md',
        '/crashcourse/paul-hudson-100-days-of-swift/9.md',
        '/crashcourse/paul-hudson-100-days-of-swift/10.md',
        '/crashcourse/paul-hudson-100-days-of-swift/11.md',
        '/crashcourse/paul-hudson-100-days-of-swift/12.md',
        '/crashcourse/paul-hudson-100-days-of-swift/13.md',
        '/crashcourse/paul-hudson-100-days-of-swift/14.md',
        '/crashcourse/paul-hudson-100-days-of-swift/15.md',
        '/crashcourse/paul-hudson-100-days-of-swift/16.md',
        '/crashcourse/paul-hudson-100-days-of-swift/17.md',
        '/crashcourse/paul-hudson-100-days-of-swift/18.md',
      ]
    }, {
      text: '🕊️100 Days of SwiftUI',
      collapsible: true,
      children: [
        '/crashcourse/paul-hudson-100-days-of-swiftui/README.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/1.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/2.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/3.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/4.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/5.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/6.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/7.md'
      ]
    }, {
      text: '🕊️SwiftUI by Example',
      collapsible: true,
      children: [
        '/crashcourse/paul-hudson-swiftui-by-example/README.md',
      ]
    }, {
      text: '🅺Kodeco - Android & Kotlin',
      collapsible: true,
      children: [
        '/crashcourse/kodeco-kotlin-android/README.md',
      ]
    }, {
      text: '🕊️Kodeco - Swift',
      collapsible: true,
      children: [
        '/crashcourse/kodeco-swift/README.md'
      ]
    }, {
      text: '🦊freecodecamp.org - DevOps with GitLab CI',
      collapsible: true,
      children: [
        '/crashcourse/freecodecamp-gitlab-ci/README.md',
        '/crashcourse/freecodecamp-gitlab-ci/1.md',
        '/crashcourse/freecodecamp-gitlab-ci/2.md',
        '/crashcourse/freecodecamp-gitlab-ci/3.md',
        '/crashcourse/freecodecamp-gitlab-ci/4.md',
        '/crashcourse/freecodecamp-gitlab-ci/5.md',
      ]
    }, {
      text: '☸DigitalOcean - Kubernetes',
      collapsible: true,
      children: [
        '/crashcourse/digitalocean-kubernetes/README.md',        
        '/crashcourse/digitalocean-kubernetes/2022/20221216-how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes.md',
        '/crashcourse/digitalocean-kubernetes/2022/20221118-how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt.md',
      ]
    }, {
      text: '🐧Linux Journey',
      collapsible: true,
      children: [
        '/crashcourse/linux-journey/README.md',
        '/crashcourse/linux-journey/01-grasshopper/01a-getting-started.md',
        '/crashcourse/linux-journey/01-grasshopper/01b-command-line.md',
        '/crashcourse/linux-journey/01-grasshopper/01c-text-fu.md',
        '/crashcourse/linux-journey/01-grasshopper/01d-advanced-text-fu.md',
        '/crashcourse/linux-journey/01-grasshopper/01e-user-management.md',
        '/crashcourse/linux-journey/01-grasshopper/01f-permissions.md',
        '/crashcourse/linux-journey/01-grasshopper/01g-processes.md',
        '/crashcourse/linux-journey/01-grasshopper/01h-packages.md',
        '/crashcourse/linux-journey/02-journeyman/02a-devices.md',
        '/crashcourse/linux-journey/02-journeyman/02b-the-filesystem.md',
        '/crashcourse/linux-journey/02-journeyman/02c-boot-the-system.md',
        '/crashcourse/linux-journey/02-journeyman/02d-kernel.md',
        '/crashcourse/linux-journey/02-journeyman/02e-init.md',
        '/crashcourse/linux-journey/02-journeyman/02f-process-utilization.md',
        '/crashcourse/linux-journey/02-journeyman/02g-logging.md'
      ]
    }, {
      text: '🦀Rust to Assembly',
      collapsible: true,
      children: [
        '/crashcourse/eventhelix-rust-to-assembly/README.md',
      ]
    }, {
      text: '🧶Must Know JavaScript API',
      collapsible: true,
      children: [
        '/crashcourse/must-know-javascript-api/README.md',
        '/crashcourse/must-know-javascript-api/page-visibility.md',
        '/crashcourse/must-know-javascript-api/broadcast-channel.md',
        '/crashcourse/must-know-javascript-api/resize-observer.md',
        '/crashcourse/must-know-javascript-api/beacon.md',
        '/crashcourse/must-know-javascript-api/clipboard.md',
        '/crashcourse/must-know-javascript-api/fetch.md'
      ]
    }
  ]
}