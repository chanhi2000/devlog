import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/g4e/': [
    {
      text: 'Intro',
      children: [ '/g4e/README.md' ],
    },
    //region: lang
    {
      text: '👑Bash (Linux)',
      collapsible: true,
      children: [
        '/g4e/cli-bash/README.md',
        '/g4e/cli-bash/basics.md',
        '/g4e/cli-bash/tips.md',
        '/g4e/cli-bash/troubleshooting.md',
      ]
    }, {
      text: '🧢Batch & Pwsh (Windows)',
      collapsible: true,
      children: [
        '/g4e/cli-batch/README.md',
        '/g4e/cli-batch/batch-basics.md',
        '/g4e/cli-batch/batch-tips.md',
        '/g4e/cli-batch/pwsh-basics.md',
      ]
    }, {
      text: '🐘Gradle',
      collapsible: true,
      children: [
        '/g4e/lang-gradle/README.md',
        '/g4e/lang-gradle/useful-snippets.md',
        '/g4e/lang-gradle/useful-snippets-android.md',
        '/g4e/lang-gradle/troubleshooting.md',
        '/g4e/lang-gradle/reference.mds'
      ]
    }, {
      text: '🐦Maven',
      collapsible: true,
      children: [
        '/g4e/lang-maven/README.md',
        '/g4e/lang-maven/useful-snippets.md',
      ]
    }, {
      text: '🅺Kotlin',
      collapsible: true,
      children: [
        '/g4e/lang-kotlin/README.md',
        '/g4e/lang-kotlin/basics.md',
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
        '/g4e/lang-java/youtube.md',
      ]
    }, {
      text: '🤖Android',
      collapsible: true,
      children: [
        '/g4e/lang-java-android/README.md',
        '/g4e/lang-java-android/troubleshooting.md',
        '/g4e/lang-java-android/references.md',
        '/g4e/lang-java-android/youtube.md',
      ]
    }, {
      text: '🕊️Swift',
      collapsible: true,
      children: [
        '/g4e/lang-swift/README.md',
        '/g4e/lang-swift/tips.md',
        '/g4e/lang-swift/references.md',
        '/g4e/lang-swift/youtube.md',
      ]
    }, {
      text: '⚡️Javascript',
      collapsible: true,
      children: [
        '/g4e/lang-js/README.md',
        '/g4e/lang-js/mermaid-example.md',
        '/g4e/lang-js/youtube.md',
      ]
    }, {
      text: '🧶Node.js',
      collapsible: true,
      children: [
        '/g4e/lang-js-node/README.md',
        '/g4e/lang-js-node/troubleshooting.md',
        '/g4e/lang-js-node/sandbox.md',
        '/g4e/lang-js-node/cordova.md',
      ]
    }, {
      text: '🐍Python',
      collapsible: true,
      children: [
        '/g4e/lang-python/README.md',
        '/g4e/lang-python/references.md',
        '/g4e/lang-python/youtube.md',
      ]
    }, {
      text: '🎨CSS',
      collapsible: true,
      children: [
        '/g4e/lang-css/README.md',
        '/g4e/lang-css/references.md',
        '/g4e/lang-css/youtube.md',
      ]
    }, {
      text: '🦀Rust',
      collapsible: true,
      children: [
        '/g4e/lang-rust/README.md',
        '/g4e/lang-rust/references.md',
        '/g4e/lang-rust/youtube.md',
      ]
    }, {
      text: '♯CSharp',
      collapsible: true,
      children: [
        '/g4e/lang-csharp/README.md',
        '/g4e/lang-csharp/references.md',
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
      ]
    }, {
      text: '🧠Linux',
      collapsible: true,
      children: [
        '/g4e/devops-os/README.md',
        '/g4e/devops-os/macos-env-setup.md',
        '/g4e/devops-os/macos-useful-commands.md',
        '/g4e/devops-os/debian-env-setup.md',
      ]
    }, {
      text: '👓Windows',
      collapsible: true,
      children: [
        '/g4e/devops-os-win/README.md',
        '/g4e/devops-os-win/env-setup.md',
        '/g4e/devops-os-win/ie.md',
        '/g4e/devops-os-win/useful-tips.md',
        '/g4e/devops-os-win/youtube.md',
      ]
    }, {
      text: '👽oVirt',
      collapsible: true,
      children: [
        '/g4e/devops-ovirt/README.md',
        '/g4e/devops-ovirt/cli.md',
        '/g4e/devops-ovirt/resources.md',
      ]
    }, {
      text: '🐋Docker',
      collapsible: true,
      children: [
        '/g4e/devops-docker/README.md',
        '/g4e/devops-docker/basics.md',
        '/g4e/devops-docker/docker-compose.md',
        '/g4e/devops-docker/favorite-containers.md',
      ]
    }, {
      text: '🤵🏻Jenkins',
      collapsible: true,
      children: [
        '/g4e/devops-jenkins/README.md',
        '/g4e/devops-jenkins/template.md',
      ]
    }, {
      text: '📚Nexus Repository',
      collapsible: true,
      children: [
        '/g4e/devops-nexus/README.md',
        '/g4e/devops-nexus/tips.md',
      ]
    }, { 
      text: '🎩IDE & Text Editor',
      collapsible: true,
      children: [
        '/g4e/devops-ide/README.md',
        '/g4e/devops-ide/idea-plugins.md',
        '/g4e/devops-ide/idea-troubleshooting.md',
        '/g4e/devops-ide/vscode-plugins.md',
        '/g4e/devops-ide/vim-tips.md',
        '/g4e/devops-ide/dbeaver-hotkey.md',
        '/g4e/devops-ide/dbeaver-jdbc.md',
        '/g4e/devops-ide/dbeaver-qtmplt.md',
      ]
    },
    //endregion
    //region: DB
    {
      text: '🔎SQL',
      collapsible: true,
      children: [
        '/g4e/sql/README.md',
        '/g4e/sql/postgresql.md',
        '/g4e/sql/mysql.md',
        '/g4e/sql/cubrid.md',
        '/g4e/sql/oracle.md',
        '/g4e/sql/tibero.md',
      ]
    }, 
    //endregion
    {
      text: 'Regex',
      collapsible: true,
      children: [
        '/g4e/regex/',
        '/g4e/regex/tips',
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
      text: 'Intro',
      children: [ '/catalogs/README.md' ],
    },
    {
      text: '🏰Portfolio',
      collapsible: true,
      children: [
        '/catalogs/portfolio/README.md',
      ],
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
    },
    {
      text: 'Github',
      collapsible: true,
      children: [
        '/explore/github/README.md',
        '/explore/github/awesome-list.md',
        '/explore/github/library.md',
        '/explore/github/library-java.md',
        '/explore/github/library-js.md',
        '/explore/github/library-python.md',
        '/explore/github/library-swift.md',
        '/explore/github/library-rust.md',
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
        '/explore/youtube/edu-devops.md',
        '/explore/youtube/edu-js.md',
        '/explore/youtube/edu-c+cpp.md',
      ]
    }, {
      text: '🥁Crashcourse',
      collapsible: true,
      children: [
        '/explore/crashcourse/README.md',
        '/explore/crashcourse/paul-hudson-100-days-of-swift',
        '/explore/crashcourse/paul-hudson-100-days-of-swiftui',
        '/explore/crashcourse/paul-hudson-swiftui-by-example',
        '/explore/crashcourse/kodeco-kotlin-android',
      ]
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
    },
    {
      text: 'PHYS034',
      children: [
        '/academics/PHYS034/README.md',
        '/academics/PHYS034/week01/README.md',
        '/academics/PHYS034/week01/lecture.md',
      ]
    }
  ],
}