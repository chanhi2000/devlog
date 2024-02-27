import { sidebar } from 'vuepress-theme-hope'

export const sidebarEn = sidebar({
  '/g4e/': [
    {
      text: '📖G4E',
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
      text: '🧢Batchfile',
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
        '/g4e/cli-vim/tips.md',
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
        '/g4e/lang-maven/references.md',
        '/g4e/lang-maven/youtube.md',
      ]
    }, {
      text: '☕️Java',
      collapsible: true,
      children: [
        '/g4e/lang-java/README.md',
        '/g4e/lang-java/basics.md',
        '/g4e/lang-java/singleton.md',
        '/g4e/lang-java/log4j.md',
        '/g4e/lang-java/webservice.md',
        '/g4e/lang-java/news.md',
        '/g4e/lang-java/tips.md',
        '/g4e/lang-java/snippets.md',
        '/g4e/lang-java/references.md',
        '/g4e/lang-java/github.md',
        '/g4e/lang-java/youtube.md',
      ]
    }, {
      text: '🍃Spring',
      collapsible: true,
      children: [
        '/g4e/lang-java-spring/README.md',
        '/g4e/lang-java-spring/snippets-gradle.md',
        '/g4e/lang-java-spring/was.md',
        '/g4e/lang-java-spring/references.md',
        '/g4e/lang-java-spring/github.md',
        '/g4e/lang-java-spring/youtube.md',
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
      text: '🌲Vue.js',
      collapsible: true,
      children: [
        '/g4e/lang-js-vue/README.md',
        '/g4e/lang-js-vue/snippets.md',
        '/g4e/lang-js-vue/references.md',
        '/g4e/lang-js-vue/github.md',
        '/g4e/lang-js-vue/youtube.md',
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
      text: '🦙Llm',
      collapsible: true,
      children: [
        '/g4e/ai-llm/README.md',
        '/g4e/ai-llm/references.md',
        '/g4e/ai-llm/youtube.md',
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
        '/g4e/db-cubrid/cli.md',
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
        '/g4e/db-postgres/youtube.md',
      ]
    }, {
      text: '🤠Django',
      collapsible: true,
      children: [
        '/g4e/db-django/README.md',
        '/g4e/db-django/query.md',
        '/g4e/db-django/github.md',
        '/g4e/db-django/references.md',
        '/g4e/db-django/youtube.md',      
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
      text: '🏭Project',
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
      text: 'General',
      collapsible: true,
      children: [
        '/academics/general/README.md',
        '/academics/general/youtube.md',
      ]
    }, {
      text: 'MATH011',
      collapsible: true,
      children: [
        '/academics/MATH011/README.md',
        '/academics/MATH011/lect01.md',
      ]
    }, {
      text: 'COEN020',
      collapsible: true,
      children: [
        '/academics/COEN020/README.md',
        '/academics/COEN020/read01a.md',
        '/academics/COEN020/read01b.md',
        '/academics/COEN020/read01c.md',
        '/academics/COEN020/read01d.md',
        '/academics/COEN020/lect02.md',
        '/academics/COEN020/ex01.md',
        '/academics/COEN020/hw.md',
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
  ],
})