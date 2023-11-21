import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/g4e/': [
    {
      text: 'Intro',
      children: [ '/g4e/README.md' ],
    },
    //region: api
    {
      text: '🌱API - Kakao',
      collapsible: true,
      children: [
        '/g4e/api-kakao/README.md',
        '/g4e/api-kakao/local.md',
        '/g4e/api-kakao/push.md',
        '/g4e/api-kakao/references.md'
      ]
    }, 
    // {
    //   text: '🐸API - NCloud',
    //   collapsible: true,
    //   children: [
    //     '/g4e/api-ncloud/README.md',
    //     '/g4e/api-ncloud/geolocation.md',
    //   ]
    // },
    //endregion
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
        '/g4e/cli-batchfile/snippets.md',
        '/g4e/cli-batchfile/references.md',
        '/g4e/cli-batchfile/github.md',
      ]
    }, {
      text: '🧙‍♂️Powershell',
      collapsible: true,
      children: [
        '/g4e/cli-pwsh/README.md',
        '/g4e/cli-pwsh/basics.md',
        '/g4e/cli-pwsh/scripts-manage-computer.md',
        '/g4e/cli-pwsh/scripts-for-desktop.md',
        '/g4e/cli-pwsh/scripts-for-files-folders.md',
        '/g4e/cli-pwsh/scripts-convert-files.md',
        '/g4e/cli-pwsh/scripts-for-git.md',
        '/g4e/cli-pwsh/scripts-for-pwsh.md',
        '/g4e/cli-pwsh/various-pwsh-scripts.md',
        '/g4e/cli-pwsh/tips.md',
        '/g4e/cli-pwsh/references.md',
        '/g4e/cli-pwsh/github.md',
        '/g4e/cli-pwsh/youtube.md',
      ]
    }, {
      text: '🗡Vim',
      collapsible: true,
      children: [
        '/g4e/cli-vim/README.md',
        '/g4e/cli-vim/neovim.md',
        '/g4e/cli-vim/github.md',
        '/g4e/cli-vim/references.md',
        '/g4e/cli-vim/youtube.md',
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
        '/g4e/lang-kotlin/spring.md',
        '/g4e/lang-kotlin/ktx.md',
        '/g4e/lang-kotlin/tips.md',
        '/g4e/lang-kotlin/news.md',
        '/g4e/lang-kotlin/snippets.md',
        '/g4e/lang-kotlin/references.md',
      ]
    }, {
      text: '☕️Java',
      collapsible: true,
      children: [
        '/g4e/lang-java/README.md',
        '/g4e/lang-java/basics.md',
        '/g4e/lang-java/singleton.md',
        '/g4e/lang-java/spring.md',
        '/g4e/lang-java/was.md',
        '/g4e/lang-java/webservice.md',
        '/g4e/lang-java/news.md',
        '/g4e/lang-java/references.md',
        '/g4e/lang-java/github.md',
        '/g4e/lang-java/youtube.md',
      ]
    }, {
      text: '🤖Android',
      collapsible: true,
      children: [
        '/g4e/lang-java-android/README.md',
        '/g4e/lang-java-android/adb.md',
        '/g4e/lang-java-android/proguard.md',
        '/g4e/lang-java-android/tips.md',
        '/g4e/lang-java-android/troubleshooting.md',
        '/g4e/lang-java-android/snippets-kotlin.md',
        '/g4e/lang-java-android/snippets-jetpack-compose.md',
        '/g4e/lang-java-android/snippets-gradle.md',
        '/g4e/lang-java-android/references.md',
        '/g4e/lang-java-android/youtube.md',
      ]
    }, {
      text: '🕊️Swift',
      collapsible: true,
      children: [
        '/g4e/lang-swift/README.md',
        '/g4e/lang-swift/learn-essential-swift-in-one-hour.md',
        '/g4e/lang-swift/tips.md',
        '/g4e/lang-swift/snippets.md',
        '/g4e/lang-swift/news.md',
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
      text: '⚛React.js',
      collapsible: true,
      children: [
        '/g4e/lang-js-react/README.md',
        '/g4e/lang-js-react/snippets.md',
        '/g4e/lang-js-react/references.md',
        '/g4e/lang-js-react/github.md',
        '/g4e/lang-js-react/youtube.md',
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
      text: '🔻Ruby',
      collapsible: true,
      children: [
        '/g4e/lang-ruby/README.md',
        '/g4e/lang-ruby/references.md',
        '/g4e/lang-ruby/github.md',
        '/g4e/lang-ruby/youtube.md',
      ]
    }, {
      text: '💧Elixir',
      collapsible: true,
      children: [
        '/g4e/lang-elixir/README.md',
        '/g4e/lang-elixir/tips.md',
        '/g4e/lang-elixir/references.md',
        '/g4e/lang-elixir/github.md',
        '/g4e/lang-elixir/youtube.md',
      ]
    }, {
      text: '🐑Haskell',
      collapsible: true,
      children: [
        '/g4e/lang-haskell/README.md',
        '/g4e/lang-haskell/references.md',
        '/g4e/lang-haskell/github.md',
        '/g4e/lang-haskell/youtube.md',
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
        '/g4e/lang-latex/github.md', 
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
        '/g4e/devops-git/references.md',
        '/g4e/devops-git/youtube.md',
      ]
    }, {
      text: '🕶️Github',
      collapsible: true,
      children: [
        '/g4e/devops-github/README.md',
        '/g4e/devops-github/awesome-list.md',
        '/g4e/devops-github/library.md',
        '/g4e/devops-github/news.md',
        '/g4e/devops-github/tutorial.md',
        '/g4e/devops-github/portfolio.md',
        '/g4e/devops-github/github-action.md',
        '/g4e/devops-github/troubleshooting.md',
        '/g4e/devops-github/references.md',
        '/g4e/devops-github/youtube.md',
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
      text: '⭕Openshift',
      collapsible: true,
      children: [
        '/g4e/devops-openshift/README.md',
        '/g4e/devops-openshift/references.md',
      ]
    }, {
      text: '📦AWS',
      collapsible: true,
      children: [
        '/g4e/devops-aws/README.md',
        '/g4e/devops-aws/references.md',
        '/g4e/devops-aws/youtube.md',
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
        '/g4e/protocol-http/references.md',
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
        '/g4e/tool-excel/references.md',
        '/g4e/tool-excel/youtube.md',
      ]
    }, {
      text: '🌈Chrome Browser',
      collapsible: true,
      children: [
        '/g4e/tool-chrome-browser/README.md',
        '/g4e/tool-chrome-browser/plugins.md',
        '/g4e/tool-chrome-browser/references.md'
      ]
    }, {
      text: '🅽Notion',
      collapsible: true,
      children: [
        '/g4e/tool-notion/README.md',
        '/g4e/tool-notion/references.md',
        '/g4e/tool-notion/youtube.md',
      ]
    }, {
      text: '🎼OpenAI',
      collapsible: true,
      children: [
        '/g4e/ai-openai/README.md',
        '/g4e/ai-openai/references.md',
        '/g4e/ai-openai/youtube.md',
      ]
    }, {
      text: '🦙Llama',
      collapsible: true,
      children: [
        '/g4e/ai-llama/README.md',
        '/g4e/ai-llama/references.md',
      ]
    }, {
      text: '🦖JEUS',
      collapsible: true,
      children: [
        '/g4e/was-jeus/README.md',
        '/g4e/was-jeus/basics.md',
        '/g4e/was-jeus/references.md'
      ]
    }, {
      text: '🏹WebtoB',
      collapsible: true,
      children: [
        '/g4e/ws-webtob/README.md',
        '/g4e/ws-webtob/basics.md',
        '/g4e/ws-webtob/references.md'
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
        '/g4e/db-mysql/youtube.md',
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
      text: '🎡Microsoft SQL Server',
      collapsible: true,
      children: [
        '/g4e/db-mssql/README.md',
        '/g4e/db-mssql/query.md',
        '/g4e/db-mssql/references.md',
        '/g4e/db-mssql/youtube.md',
      ]
    }, {
      text: '🧊Cubrid',
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
      text: '🤠Django',
      collapsible: true,
      children: [
        '/g4e/db-django/README.md',
        '/g4e/db-django/query.md',
        '/g4e/db-django/github.md',
        '/g4e/db-django/references.md',
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
      text: '🦉Altibase',
      collapsible: true,
      children: [
        '/g4e/db-altibase/README.md',
        '/g4e/db-altibase/query.md',
        '/g4e/db-altibase/references.md',
      ]
    }, {
      text: '🔎SQL',
      collapsible: true,
      children: [
        '/g4e/sql/README.md',
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
        '/g4e/lang-markdown/references.md',
      ]
    }, 
  ],
  '/projects/': [
    {
      text: 'Intro',
      children: [ '/projects/README.md' ],
    }, {
      text: '🏁My Roadmap',
      children: [ '/projects/roadmap/README.md' ],
    }, {
      text: '🏰Portfolio',
      collapsible: true,
      children: [
        '/projects/portfolio/README.md',
      ],
    }, {
      text: '🧭Lifeguide',
      collapsible: true,
      children: [
        '/projects/lifeguide/README.md',
        '/projects/lifeguide/youtube.md',
        '/projects/lifeguide/nhis/README.md',
        '/projects/lifeguide/nhis/references.md',
        '/projects/lifeguide/travel/README.md',
        '/projects/lifeguide/travel/china.md',
        '/projects/lifeguide/travel/references.md',
      ]
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
        '/academics/PHYS034/w01.md',
        '/academics/PHYS034/w02.md',
        '/academics/PHYS034/w03.md',
        '/academics/PHYS034/w04.md',
        '/academics/PHYS034/hw01.md',
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
        '/crashcourse/paul-hudson-100-days-of-swift/19.md',
        '/crashcourse/paul-hudson-100-days-of-swift/20.md',
        '/crashcourse/paul-hudson-100-days-of-swift/21.md',
        '/crashcourse/paul-hudson-100-days-of-swift/22.md',
        '/crashcourse/paul-hudson-100-days-of-swift/23.md',
        '/crashcourse/paul-hudson-100-days-of-swift/24.md',
        '/crashcourse/paul-hudson-100-days-of-swift/25.md',
        '/crashcourse/paul-hudson-100-days-of-swift/26.md',
        '/crashcourse/paul-hudson-100-days-of-swift/27.md',
        '/crashcourse/paul-hudson-100-days-of-swift/28.md',
        '/crashcourse/paul-hudson-100-days-of-swift/29.md',
        '/crashcourse/paul-hudson-100-days-of-swift/30.md',
        '/crashcourse/paul-hudson-100-days-of-swift/31.md',
        '/crashcourse/paul-hudson-100-days-of-swift/32.md',
        '/crashcourse/paul-hudson-100-days-of-swift/33.md',
        '/crashcourse/paul-hudson-100-days-of-swift/34.md',
        '/crashcourse/paul-hudson-100-days-of-swift/35.md',
        '/crashcourse/paul-hudson-100-days-of-swift/36.md',
        '/crashcourse/paul-hudson-100-days-of-swift/37.md',
        '/crashcourse/paul-hudson-100-days-of-swift/38.md',
        '/crashcourse/paul-hudson-100-days-of-swift/39.md',
        '/crashcourse/paul-hudson-100-days-of-swift/40.md',
        '/crashcourse/paul-hudson-100-days-of-swift/41.md',
        '/crashcourse/paul-hudson-100-days-of-swift/42.md',
        '/crashcourse/paul-hudson-100-days-of-swift/43.md',
        '/crashcourse/paul-hudson-100-days-of-swift/44.md',
        '/crashcourse/paul-hudson-100-days-of-swift/45.md',
        '/crashcourse/paul-hudson-100-days-of-swift/46.md',
        '/crashcourse/paul-hudson-100-days-of-swift/47.md',
        '/crashcourse/paul-hudson-100-days-of-swift/48.md',
        '/crashcourse/paul-hudson-100-days-of-swift/49.md',
        '/crashcourse/paul-hudson-100-days-of-swift/50.md',
        '/crashcourse/paul-hudson-100-days-of-swift/51.md',
        '/crashcourse/paul-hudson-100-days-of-swift/52.md',
        '/crashcourse/paul-hudson-100-days-of-swift/53.md',
        '/crashcourse/paul-hudson-100-days-of-swift/54.md',
        '/crashcourse/paul-hudson-100-days-of-swift/55.md',
        '/crashcourse/paul-hudson-100-days-of-swift/56.md',
        '/crashcourse/paul-hudson-100-days-of-swift/57.md',
        '/crashcourse/paul-hudson-100-days-of-swift/58.md',
        '/crashcourse/paul-hudson-100-days-of-swift/59.md',
        '/crashcourse/paul-hudson-100-days-of-swift/60.md',
        '/crashcourse/paul-hudson-100-days-of-swift/61.md',
        '/crashcourse/paul-hudson-100-days-of-swift/62.md',
        '/crashcourse/paul-hudson-100-days-of-swift/63.md',
        '/crashcourse/paul-hudson-100-days-of-swift/64.md',
        '/crashcourse/paul-hudson-100-days-of-swift/65.md',
        '/crashcourse/paul-hudson-100-days-of-swift/66.md',
        '/crashcourse/paul-hudson-100-days-of-swift/67.md',
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
        '/crashcourse/paul-hudson-100-days-of-swiftui/7.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/8.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/9.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/10.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/11.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/12.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/13.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/14.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/15.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/16.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/17.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/18.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/19.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/20.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/21.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/22.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/23.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/24.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/25.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/26.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/27.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/28.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/29.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/30.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/31.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/32.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/33.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/34.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/35.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/36.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/37.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/38.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/39.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/40.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/41.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/42.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/43.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/44.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/45.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/46.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/47.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/48.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/49.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/50.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/51.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/52.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/53.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/54.md',
        '/crashcourse/paul-hudson-100-days-of-swiftui/55.md',
      ]
    }, {
      text: '🕊️SwiftUI by Example',
      collapsible: true,
      children: [
        '/crashcourse/paul-hudson-swiftui-by-example/README.md',
      ]
    }, {
      text: '🕊️Kodeco - Swift',
      collapsible: true,
      children: [
        '/crashcourse/kodeco-swift/README.md',
        '/crashcourse/kodeco-swift/6398124-swiftui-tutorial-for-ios-creating-charts.md',
        '/crashcourse/kodeco-swift/6334294-my-app-crashed-now-what.md',
        '/crashcourse/kodeco-swift/6620276-sqlite-with-swift-tutorial-getting-started.md',
        '/crashcourse/kodeco-swift/6747815-uigesturerecognizer-tutorial-getting-started.md',
      ]
    }, {
      text: '🔺Red Hat Container Tools',
      collapsible: true,
      children: [
        '/crashcourse/red-hat-container-tools/README.md',
        '/crashcourse/red-hat-container-tools/01.md',
        '/crashcourse/red-hat-container-tools/02.md',
        '/crashcourse/red-hat-container-tools/03.md',
        '/crashcourse/red-hat-container-tools/04.md',
        '/crashcourse/red-hat-container-tools/05.md',
        '/crashcourse/red-hat-container-tools/06.md',
        '/crashcourse/red-hat-container-tools/07.md',
        '/crashcourse/red-hat-container-tools/08.md'
      ]
    }, {
      text: '🔺Containerize Your Application With Buildah And Podman',
      collapsible: true,
      children: [
        '/crashcourse/red-hat-containerize-your-application-w-buildah-and-podman/README.md',
        '/crashcourse/red-hat-containerize-your-application-w-buildah-and-podman/01.md',
        '/crashcourse/red-hat-containerize-your-application-w-buildah-and-podman/02.md',
        '/crashcourse/red-hat-containerize-your-application-w-buildah-and-podman/03.md'
      ]
    }, {
      text: '☕️Java8 in Action',
      collapsible: true,
      children: [
        '/crashcourse/java-8-in-action/README.md',
        '/crashcourse/java-8-in-action/1.md',
        '/crashcourse/java-8-in-action/2-1.md',
        '/crashcourse/java-8-in-action/2-2.md',
        '/crashcourse/java-8-in-action/3-1.md',
      ]
    }, {
      text: '☕️Effective Java',
      collapsible: true,
      children: [
        '/crashcourse/effective-java/README.md',
        '/crashcourse/effective-java/01-creating-and-destroying-objects.md',
        '/crashcourse/effective-java/02-methods-common-to-all-objects.md',
        '/crashcourse/effective-java/03-classes-and-interfaces.md',
        '/crashcourse/effective-java/04-generics.md',
        '/crashcourse/effective-java/05-enums-and-annotations.md',
        '/crashcourse/effective-java/06-lambda-and-stream.md',
        '/crashcourse/effective-java/07-methods.md',
        '/crashcourse/effective-java/08-general-programming.md',
        '/crashcourse/effective-java/09-exceptions.md',
        '/crashcourse/effective-java/10-concurrency.md',
        '/crashcourse/effective-java/11-serialization.md'
      ]
    }, {
      text: '☕️Jump to Spring Boot',
      collapsible: true,
      children: [
        '/crashcourse/java-jump-to-spring-boot/README.md',
        '/crashcourse/java-jump-to-spring-boot/01.md',
        '/crashcourse/java-jump-to-spring-boot/02.md',
        '/crashcourse/java-jump-to-spring-boot/02A.md',
        '/crashcourse/java-jump-to-spring-boot/02B.md',
        '/crashcourse/java-jump-to-spring-boot/02C.md',
        '/crashcourse/java-jump-to-spring-boot/02D.md',
        '/crashcourse/java-jump-to-spring-boot/02E.md',
        '/crashcourse/java-jump-to-spring-boot/03.md',
        '/crashcourse/java-jump-to-spring-boot/03A.md',
        '/crashcourse/java-jump-to-spring-boot/03B.md',
        '/crashcourse/java-jump-to-spring-boot/03C.md',
        '/crashcourse/java-jump-to-spring-boot/03D.md',
        '/crashcourse/java-jump-to-spring-boot/03E.md',
        '/crashcourse/java-jump-to-spring-boot/03F.md',
        '/crashcourse/java-jump-to-spring-boot/03G.md',
        '/crashcourse/java-jump-to-spring-boot/03H.md',
        '/crashcourse/java-jump-to-spring-boot/03I.md',
        '/crashcourse/java-jump-to-spring-boot/03J.md',
        '/crashcourse/java-jump-to-spring-boot/03K.md',
        '/crashcourse/java-jump-to-spring-boot/03L.md',
        '/crashcourse/java-jump-to-spring-boot/04.md',
        '/crashcourse/java-jump-to-spring-boot/a.md',
      ]
    }, {
      text: '🅺Kodeco - Android & Kotlin',
      collapsible: true,
      children: [
        '/crashcourse/kodeco-kotlin-android/README.md',
        '/crashcourse/kodeco-kotlin-android/272-intermediate-recyclerview-tutorial-with-kotlin.md',
        '/crashcourse/kodeco-kotlin-android/853-couchbase-tutorial-for-android-getting-started.md',
        '/crashcourse/kodeco-kotlin-android/523-augmented-reality-in-android-with-google-s-face-api.md',
        '/crashcourse/kodeco-kotlin-android/324-viewpager-tutorial-getting-started-in-kotlin.md',
        // 2022
        '/crashcourse/kodeco-kotlin-android/30067669-documenting-kotlin-code-for-android-using-kdoc-and-dokka.md',
        '/crashcourse/kodeco-kotlin-android/31290959-kotlin-sequences-getting-started.md',
      ]
    }, {
      text: '☕️Java Web App with Quarkus and JPAStreamer',
      collapsible: true,
      children: [
        '/crashcourse/java-freecodecamp-quarkus-jpastreamer/README.md',
        '/crashcourse/java-freecodecamp-quarkus-jpastreamer/01.md',
        '/crashcourse/java-freecodecamp-quarkus-jpastreamer/02.md',
        '/crashcourse/java-freecodecamp-quarkus-jpastreamer/03.md',
      ]
    },{
      text: '🐍Finance with Python',
      collapsible: true,
      children: [
        '/crashcourse/py-finance-w-python/README.md',
        '/crashcourse/py-finance-w-python/01.md',
        '/crashcourse/py-finance-w-python/02.md',
        '/crashcourse/py-finance-w-python/03.md',
        '/crashcourse/py-finance-w-python/04.md',
        '/crashcourse/py-finance-w-python/05.md',
        '/crashcourse/py-finance-w-python/06.md',
        '/crashcourse/py-finance-w-python/07.md',
        '/crashcourse/py-finance-w-python/08.md',
        '/crashcourse/py-finance-w-python/09.md', 
        '/crashcourse/py-finance-w-python/10.md', 
        '/crashcourse/py-finance-w-python/11.md', 
        '/crashcourse/py-finance-w-python/12.md', 
      ]
    }, {
      text: '🐍사장님 몰래 하는 파이썬 업무자동화 (들키면 일 많아짐)',
      collapsible: true,
      children: [
        '/crashcourse/py-rpa-excel/README.md',
        '/crashcourse/py-rpa-excel/01.md',
        '/crashcourse/py-rpa-excel/02a.md',
        '/crashcourse/py-rpa-excel/02b.md',
        '/crashcourse/py-rpa-excel/02c.md',
        '/crashcourse/py-rpa-excel/02d.md',
        '/crashcourse/py-rpa-excel/02e.md',
        '/crashcourse/py-rpa-excel/02f.md',
        '/crashcourse/py-rpa-excel/02g.md',
        '/crashcourse/py-rpa-excel/02h.md',
        '/crashcourse/py-rpa-excel/02i.md',
        '/crashcourse/py-rpa-excel/03.md',
      ]
    },{
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
      text: '🎨Colt Steele - Mastering CSS Grid',
      collapsible: true,
      children: [
        '/crashcourse/colt-steele-mastering-css-grid/README.md',
        '/crashcourse/colt-steele-mastering-css-grid/01-css-grid-basics',
        '/crashcourse/colt-steele-mastering-css-grid/02-units-and-utilities',
        '/crashcourse/colt-steele-mastering-css-grid/03-positioning-elements-by-lines',
        '/crashcourse/colt-steele-mastering-css-grid/04-grid-areas',
        '/crashcourse/colt-steele-mastering-css-grid/05-the-implicit-grid',
        '/crashcourse/colt-steele-mastering-css-grid/06-creating-responsive-grids',
        '/crashcourse/colt-steele-mastering-css-grid/07-building-an-example-layout',
      ]
    }, {
      text: '🦀freecodecamp.org - Rust by Practice',
      collapsible: true,
      children: [
        '/crashcourse/freecodecamp-rust-by-practice/README.md',
        '/crashcourse/freecodecamp-rust-by-practice/01-elegant-code-base.md',
        '/crashcourse/freecodecamp-rust-by-practice/02-variables.md',
        '/crashcourse/freecodecamp-rust-by-practice/03-basic-types.md',
        '/crashcourse/freecodecamp-rust-by-practice/04-ownership.md',
        '/crashcourse/freecodecamp-rust-by-practice/05-compound-types.md',
        '/crashcourse/freecodecamp-rust-by-practice/06-flow-contro.md',
        '/crashcourse/freecodecamp-rust-by-practice/07-pattern-match.md',
        '/crashcourse/freecodecamp-rust-by-practice/08-method.md',
        '/crashcourse/freecodecamp-rust-by-practice/09-generics-traits.md',
        '/crashcourse/freecodecamp-rust-by-practice/10-collections.md',
        '/crashcourse/freecodecamp-rust-by-practice/11-type-conversions.md',
        '/crashcourse/freecodecamp-rust-by-practice/12-result-panic.md',
        '/crashcourse/freecodecamp-rust-by-practice/13-crate-module.md',
        '/crashcourse/freecodecamp-rust-by-practice/14-comments-docs.md',
        '/crashcourse/freecodecamp-rust-by-practice/15-formatted-output.md',
        '/crashcourse/freecodecamp-rust-by-practice/16-lifetime.md',
        '/crashcourse/freecodecamp-rust-by-practice/17-functional-programing.md',
        '/crashcourse/freecodecamp-rust-by-practice/18-newtype-sized.md',
        '/crashcourse/freecodecamp-rust-by-practice/19-smart-pointers.md',
        '/crashcourse/freecodecamp-rust-by-practice/20-weak.md',
        '/crashcourse/freecodecamp-rust-by-practice/21-self-referential.md',
        '/crashcourse/freecodecamp-rust-by-practice/22-threads.md',
        '/crashcourse/freecodecamp-rust-by-practice/23-global-variables.md',
        '/crashcourse/freecodecamp-rust-by-practice/24-errors.md',
        '/crashcourse/freecodecamp-rust-by-practice/25-unsafe.md',
        '/crashcourse/freecodecamp-rust-by-practice/26-macro.md',
        '/crashcourse/freecodecamp-rust-by-practice/27-tests.md',
        '/crashcourse/freecodecamp-rust-by-practice/28-async.md',
        '/crashcourse/freecodecamp-rust-by-practice/29-std.md',
        '/crashcourse/freecodecamp-rust-by-practice/30-fight-compiler.md',
      ]
    }, {
      text: '🦀Wasm by Example',
      collapsible: true,
      children: [
        '/crashcourse/rust-wasm-by-example/README.md',
        '/crashcourse/rust-wasm-by-example/01-concepts.md',
        '/crashcourse/rust-wasm-by-example/02-applying-the-concepts.md',
        '/crashcourse/rust-wasm-by-example/03-ecosystem-tools-and-language-features.md',
        '/crashcourse/rust-wasm-by-example/04-webassembly-outside-of-the-browser.md',
      ]
    }, {
      text: '📦아마존 웹 서비스를 다루는 기술 - 실무에서 필요한 AWS 클라우드의 모든 것!',
      collapsible: true,
      children: [
        '/crashcourse/devops-art-of-aws/README.md',
        '/crashcourse/devops-art-of-aws/01.md',
        '/crashcourse/devops-art-of-aws/02.md',
        '/crashcourse/devops-art-of-aws/03.md',
        '/crashcourse/devops-art-of-aws/04.md',
        '/crashcourse/devops-art-of-aws/05.md',
        '/crashcourse/devops-art-of-aws/06.md',
        '/crashcourse/devops-art-of-aws/07.md',
        '/crashcourse/devops-art-of-aws/08.md',
        '/crashcourse/devops-art-of-aws/09.md',
        '/crashcourse/devops-art-of-aws/10.md',
        '/crashcourse/devops-art-of-aws/11.md',
        '/crashcourse/devops-art-of-aws/12.md',
        '/crashcourse/devops-art-of-aws/13.md',
        '/crashcourse/devops-art-of-aws/14.md',
        '/crashcourse/devops-art-of-aws/15.md',
        '/crashcourse/devops-art-of-aws/16.md',
        '/crashcourse/devops-art-of-aws/17.md',
        '/crashcourse/devops-art-of-aws/18.md',
        '/crashcourse/devops-art-of-aws/19.md',
        '/crashcourse/devops-art-of-aws/20.md',
        '/crashcourse/devops-art-of-aws/21.md',
        '/crashcourse/devops-art-of-aws/22.md',
        '/crashcourse/devops-art-of-aws/23.md',
        '/crashcourse/devops-art-of-aws/24.md',
        '/crashcourse/devops-art-of-aws/25.md',
        '/crashcourse/devops-art-of-aws/26.md',
        '/crashcourse/devops-art-of-aws/27.md',
        '/crashcourse/devops-art-of-aws/28.md',
        '/crashcourse/devops-art-of-aws/29.md',
        '/crashcourse/devops-art-of-aws/30.md',
        '/crashcourse/devops-art-of-aws/31.md',
        '/crashcourse/devops-art-of-aws/32.md',
        '/crashcourse/devops-art-of-aws/33.md',
        '/crashcourse/devops-art-of-aws/a.md',        
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
        '/crashcourse/linux-journey/02-journeyman/02g-logging.md',
        '/crashcourse/linux-journey/03-networking-nomad/03a-network-sharing.md',
        '/crashcourse/linux-journey/03-networking-nomad/03b-network-basics.md',
        '/crashcourse/linux-journey/03-networking-nomad/03c-subnetting.md',
        '/crashcourse/linux-journey/03-networking-nomad/03d-routing.md',
        '/crashcourse/linux-journey/03-networking-nomad/03e-network-config.md',
        '/crashcourse/linux-journey/03-networking-nomad/03f-troubleshooting.md',
        '/crashcourse/linux-journey/03-networking-nomad/03g-dns.md'
      ]
    }, {
      text: '🦀Rust to Assembly',
      collapsible: true,
      children: [
        '/crashcourse/eventhelix-rust-to-assembly/README.md',
        '/crashcourse/eventhelix-rust-to-assembly/rust-enum-and-match-representation-in-assembly.md',
        '/crashcourse/eventhelix-rust-to-assembly/assembly-code-generated-when-self-is-passed-by-value-reference-or-as-a-smart-pointer.md',
        '/crashcourse/eventhelix-rust-to-assembly/mapping-arrays-tuples-box-and-option-to-assembly.md',
        '/crashcourse/eventhelix-rust-to-assembly/rust-to-assembly-vector-iteration.md'
      ]
    }, {
      text: '🐚Text Processing with GNU awk',
      collapsible: true,
      children: [
        '/crashcourse/cli-text-processing-w-gnu-awk/README.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/01-installation-and-documentation.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/02-awk-introduction.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/03-regular-expressions.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/04-field-separators.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/05-record-separators.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/06-in-place-file-editing.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/07-using-shell-variables.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/08-control-structures.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/09-built-in-functions.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/10-multiple-file-input.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/11-processing-multiple-records.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/12-two-file-processing.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/13-dealing-with-duplicates.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/14-awk-scripts.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/15-gotchas-and-tips.md',
        '/crashcourse/cli-text-processing-w-gnu-awk/16-further-reading.md',
      ]
    }, {
      text: '🐚Mastering Curl - Interactive Text Guide',
      collapsible: true,
      children: [
        '/crashcourse/cli-mastering-curl-interactive-text-guide/README.md',
        '/crashcourse/cli-mastering-curl-interactive-text-guide/01-the-curl-project.md',
        '/crashcourse/cli-mastering-curl-interactive-text-guide/02-command-line-options.md',
        '/crashcourse/cli-mastering-curl-interactive-text-guide/03-urls.md',
        '/crashcourse/cli-mastering-curl-interactive-text-guide/04-curl-basics.md',
        '/crashcourse/cli-mastering-curl-interactive-text-guide/05-http.md'
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
    }, {
      text: "DB Server 성능 향상 분석 및 튜닝 전문가 향상과정",
      collapsible: true,
      children: [
        '/crashcourse/oracle-sql-db-tuning/README.md',
        '/crashcourse/oracle-sql-db-tuning/01a.md',
        '/crashcourse/oracle-sql-db-tuning/01b.md',
        '/crashcourse/oracle-sql-db-tuning/01c.md',
        '/crashcourse/oracle-sql-db-tuning/01d.md',
        '/crashcourse/oracle-sql-db-tuning/02a.md',
        '/crashcourse/oracle-sql-db-tuning/03a.md',
        '/crashcourse/oracle-sql-db-tuning/03b.md',
        '/crashcourse/oracle-sql-db-tuning/03c.md',
      ],
    }
  ]
}