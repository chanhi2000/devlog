import { sidebar } from 'vuepress-theme-hope'

export const sidebarEn = sidebar({
  '/g4e/': [
    {
      text: 'G4E',
      icon: 'fas fa-book',
      children: [ '/g4e/README.md' ],
    },
    //region: api
    {
      text: 'API - Kakao',
      collapsible: true,
      icon: 'fas fa-seedling',
      children: [
        '/g4e/api-kakao/README.md',
        '/g4e/api-kakao/local.md',
        '/g4e/api-kakao/push.md',
        '/g4e/api-kakao/references.md'
      ]
    },  {
      text: 'API - NCloud',
      collapsible: true,
      icon: 'fas fa-frog',
      children: [
         '/g4e/api-ncloud/README.md',
         '/g4e/api-ncloud/geolocation.md',
       ]
    }, {
      text: 'Shell',
      collapsible: true,
      icon: 'iconfont icon-shell',
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
      text: 'Batchfile',
      collapsible: true,
      icon: 'fas fa-gears',
      children: [
        '/g4e/cli-batchfile/README.md',
        '/g4e/cli-batchfile/basics.md',
        '/g4e/cli-batchfile/tips.md',
        '/g4e/cli-batchfile/snippets.md',
        '/g4e/cli-batchfile/references.md',
        '/g4e/cli-batchfile/github.md',
      ]
    }, {
      text: 'Powershell',
      collapsible: true,
      icon: 'fas fa-hat-wizard',
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
      text: 'Vim',
      collapsible: true,
      icon: 'fas fa-pen-nib',
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
      text: 'Maven',
      collapsible: true,
      icon: 'fas fa-feather-pointed',
      children: [
        '/g4e/lang-maven/README.md',
        '/g4e/lang-maven/snippets.md',
        '/g4e/lang-maven/references.md',
        '/g4e/lang-maven/youtube.md',
      ]
    }, {
      text: 'Java',
      collapsible: true,
      icon: 'fa-brands fa-java',
      children: [
        '/g4e/lang-java/README.md',
        '/g4e/lang-java/basics.md',
        '/g4e/lang-java/singleton.md',
        '/g4e/lang-java/log4j.md',
        '/g4e/lang-java/webservice.md',
        '/g4e/lang-java/tips.md',
        '/g4e/lang-java/snippets.md',
        '/g4e/lang-java/crashcourse.md',
        '/g4e/lang-java/news.md',
        '/g4e/lang-java/references.md',
        '/g4e/lang-java/github.md',
        '/g4e/lang-java/youtube.md',
      ]
    }, {
      text: 'Spring',
      collapsible: true,
      icon: 'fa-brands fa-envira',
      children: [
        '/g4e/lang-java-spring/README.md',
        '/g4e/lang-java-spring/snippets-gradle.md',
        '/g4e/lang-java-spring/was.md',
        '/g4e/lang-java-spring/crashcourse.md',
        '/g4e/lang-java-spring/references.md',
        '/g4e/lang-java-spring/github.md',
        '/g4e/lang-java-spring/youtube.md',
      ]
    }, {
      text: 'Android',
      collapsible: true,
      icon: 'fa-brands fa-android',
      children: [
        '/g4e/lang-java-android/README.md',
        '/g4e/lang-java-android/adb.md',
        '/g4e/lang-java-android/proguard.md',
        '/g4e/lang-java-android/tips.md',
        '/g4e/lang-java-android/troubleshooting.md',
        '/g4e/lang-java-android/snippets-kotlin.md',
        '/g4e/lang-java-android/snippets-jetpack-compose.md',
        '/g4e/lang-java-android/snippets-gradle.md',
        '/g4e/lang-java-android/crashcourse.md',
        '/g4e/lang-java-android/news.md',
        '/g4e/lang-java-android/references.md',
        '/g4e/lang-java-android/github.md',
        '/g4e/lang-java-android/youtube.md',
      ]
    }, {
      text: 'Swift',
      collapsible: true,
      icon: 'fa-brands fa-swift',
      children: [
        '/g4e/lang-swift/README.md',
        '/g4e/lang-swift/tips.md',
        '/g4e/lang-swift/snippets.md',
        '/g4e/lang-swift/crashcourse.md',
        '/g4e/lang-swift/news.md',
        '/g4e/lang-swift/references.md',
        '/g4e/lang-swift/github.md',
        '/g4e/lang-swift/youtube.md',
      ]
    }, {
      text: 'Node.js',
      collapsible: true,
      icon: 'fa-brands fa-node',
      children: [
        '/g4e/lang-js-node/README.md',
        '/g4e/lang-js-node/troubleshooting.md',
        '/g4e/lang-js-node/sandbox.md',
        '/g4e/lang-js-node/cordova.md',
        {
          text: 'Tips',
          collapsible: true,
          icon: 'fas fa-lightbulb',
          children: [
            '/g4e/lang-js-node/tips.md',
            '/g4e/lang-js-node/tips/see-accessibility-tree.md',
            '/g4e/lang-js-node/tips/name-evaluated-files.md',
            '/g4e/lang-js-node/tips/simulate-pwa-wco.md',
            '/g4e/lang-js-node/tips/inspect-user-agent-dom.md',
            '/g4e/lang-js-node/tips/explain-errors-with-ai.md',
            '/g4e/lang-js-node/tips/enable-safari-devtools.md',
            '/g4e/lang-js-node/tips/block-devtools.md',
            "/g4e/lang-js-node/tips/list-all-event-listeners.md",
            "/g4e/lang-js-node/tips/debug-popups-on-hover.md",
            "/g4e/lang-js-node/tips/force-execution-at-breakpoint.md",
            "/g4e/lang-js-node/tips/see-viewport-size.md",
          ]
        },
        '/g4e/lang-js-node/snippets.md',
        '/g4e/lang-js-node/references.md',
        '/g4e/lang-js-node/github.md',
        '/g4e/lang-js-node/youtube.md',
      ]
    }, {
      text: 'React.js',
      collapsible: true,
      icon: 'fa-brands fa-react',
      children: [
        '/g4e/lang-js-react/README.md',
        '/g4e/lang-js-react/snippets.md',
        '/g4e/lang-js-react/snippets-serpiko.md',
        '/g4e/lang-js-react/references.md',
        '/g4e/lang-js-react/github.md',
        '/g4e/lang-js-react/youtube.md',
      ]
    }, {
      text: 'Vue.js',
      collapsible: true,
      icon: 'fa-brands fa-vuejs',
      children: [
        '/g4e/lang-js-vue/README.md',
        '/g4e/lang-js-vue/snippets.md',
        '/g4e/lang-js-vue/references.md',
        '/g4e/lang-js-vue/github.md',
        '/g4e/lang-js-vue/youtube.md',
      ]
    }, {
      text: 'Mermaid.js',
      collapsible: true,
      icon: 'fas fa-person-swimming',
      children: [
        '/g4e/lang-js-mermaid/README.md',
        '/g4e/lang-js-mermaid/examples.md',
      ]
    }, {
      text: 'Python',
      collapsible: true,
      icon: 'fa-brands fa-python',
      children: [
        '/g4e/lang-python/README.md',
        '/g4e/lang-python/references.md',
        '/g4e/lang-python/github.md',
        '/g4e/lang-python/youtube.md',
      ]
    }, {
      text: 'CSS',
      collapsible: true,
      icon: 'fa-brands fa-css3-alt',
      children: [
        '/g4e/lang-css/README.md',
        '/g4e/lang-css/tips.md',
        '/g4e/lang-css/snippets.md',
        '/g4e/lang-css/references.md',
        '/g4e/lang-css/youtube.md',
      ]
    }, {
      text: 'Rust',
      collapsible: true,
      icon: 'fa-brands fa-rust',
      children: [
        '/g4e/lang-rust/README.md',
        '/g4e/lang-rust/references.md',
        '/g4e/lang-rust/github.md',
        '/g4e/lang-rust/youtube.md',
      ]
    }, 
    {
      text: 'Lua',
      collapsible: true,
      icon: 'fas fa-meteor',
      children: [
        '/g4e/lang-lua/README.md',
        '/g4e/lang-lua/references.md',
        '/g4e/lang-lua/github.md',
        '/g4e/lang-lua/youtube.md',
      ]
    }, {
      text: 'CSharp',
      collapsible: true,
      icon: 'fas fa-hashtag',
      children: [
        '/g4e/lang-csharp/README.md',
        '/g4e/lang-csharp/references.md',
        '/g4e/lang-csharp/github.md',
        '/g4e/lang-csharp/youtube.md',
      ]
    }, {
      text: 'Go',
      collapsible: true,
      icon: 'fa-brands fa-golang',
      children: [
        '/g4e/lang-go/README.md',
        '/g4e/lang-go/references.md',
        '/g4e/lang-go/github.md',
        '/g4e/lang-go/youtube.md',
      ]
    }, {
      text: 'Dart',
      collapsible: true,
      icon: 'iconfont icon-dart',
      children: [
        '/g4e/lang-dart/README.md',
        '/g4e/lang-dart/snippets.md',
        '/g4e/lang-dart/references.md',
        '/g4e/lang-dart/github.md',
        '/g4e/lang-dart/youtube.md',
      ]
    }, {
      text: 'php',
      collapsible: true,
      icon: 'fa-brands fa-php',
      children: [
        '/g4e/lang-php/README.md',
        '/g4e/lang-php/references.md',
        '/g4e/lang-php/github.md',
        '/g4e/lang-php/youtube.md',
      ]
    }, {
      text: 'Ruby',
      collapsible: true,
      icon: 'fas fa-gem',
      children: [
        '/g4e/lang-ruby/README.md',
        '/g4e/lang-ruby/references.md',
        '/g4e/lang-ruby/github.md',
        '/g4e/lang-ruby/youtube.md',
      ]
    }, {
      text: 'Elixir',
      collapsible: true,
      icon: 'fas fa-droplet',
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
      text: 'C',
      collapsible: true,
      icon: 'iconfont icon-c',
      children: [
        '/g4e/lang-c/README.md',
        '/g4e/lang-c/tips.md',
        '/g4e/lang-c/references.md',
        '/g4e/lang-c/github.md',
        '/g4e/lang-c/youtube.md',
      ]
    }, {
      text: 'Cpp',
      collapsible: true,
      icon: 'fas fa-dice-two',
      children: [
        '/g4e/lang-cpp/README.md',
        '/g4e/lang-cpp/tips.md',
        '/g4e/lang-cpp/references.md',
        '/g4e/lang-cpp/github.md',
        '/g4e/lang-cpp/youtube.md',
      ]
    }, {
      text: 'Zig',
      icon: 'fas fa-person-snowboarding',
      collapsible: true,
      children: [
        '/g4e/lang-zig/README.md',
        '/g4e/lang-zig/tips.md',
        '/g4e/lang-zig/references.md',
        '/g4e/lang-zig/github.md',
        '/g4e/lang-zig/youtube.md',
      ]
    }, {
      text: 'LaTeX',
      collapsible: true,
      icon: 'iconfont icon-tex',
      children: [
        '/g4e/lang-latex/README.md',
        '/g4e/lang-latex/references.md',
        '/g4e/lang-latex/github.md', 
      ]
    },
    //endregion
    //region: devops
    {
      text: 'Git',
      collapsible: true,
      icon: 'iconfont icon-git',
      children: [
        '/g4e/devops-git/README.md',
        '/g4e/devops-git/basics.md',
        '/g4e/devops-git/references.md',
        '/g4e/devops-git/youtube.md',
      ]
    }, {
      text: 'Github',
      collapsible: true,
      icon: 'fa-brands fa-github',
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
      text: 'Gitlab',
      collapsible: true,
      icon: 'fa-brands fa-gitlab',
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
      text: 'Linux',
      collapsible: true,
      icon: 'fa-brands fa-linux',
      children: [
        '/g4e/devops-os-linux/README.md',
        '/g4e/devops-os-linux/env-setup.md',
        '/g4e/devops-os-linux/references.md',
        '/g4e/devops-os-linux/youtube.md',
      ]
    }, {
      text: 'macOS',
      collapsible: true,
      icon: 'fa-brands fa-apple',
      children: [
        '/g4e/devops-os-mac/README.md',
        '/g4e/devops-os-mac/env-setup.md',
        '/g4e/devops-os-mac/tips.md',
        '/g4e/devops-os-mac/youtube.md',

      ],
    }, {
      text: 'Windows',
      collapsible: true,
      icon: 'fa-brands fa-windows',
      children: [
        '/g4e/devops-os-win/README.md',
        '/g4e/devops-os-win/env-setup.md',
        '/g4e/devops-os-win/ie.md',
        '/g4e/devops-os-win/tips.md',
        '/g4e/devops-os-win/wsl.md',
        '/g4e/devops-os-win/youtube.md',
      ]
    }, {
      text: 'oVirt',
      collapsible: true,
      icon: 'fas fa-cubes',
      children: [
        '/g4e/devops-ovirt/README.md',
        '/g4e/devops-ovirt/cli.md',
        '/g4e/devops-ovirt/references.md',
        '/g4e/devops-ovirt/youtube.md',
      ]
    }, {
      text: 'Docker',
      collapsible: true,
      icon: 'fa-brands fa-docker',
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
      text: 'Kubernetes',
      collapsible: true,
      icon: 'fas fa-dharmachakra',
      children: [
        '/g4e/devops-kubernetes/README.md',
        '/g4e/devops-kubernetes/references.md',
        '/g4e/devops-kubernetes/youtube.md',
      ]
    }, {
      text: 'Openshift',
      collapsible: true,
      icon: 'fa-brands fa-redhat',
      children: [
        '/g4e/devops-openshift/README.md',
        '/g4e/devops-openshift/references.md',
      ]
    }, {
      text: 'AWS',
      collapsible: true,
      icon: 'fa-brands fa-aws',
      children: [
        '/g4e/devops-aws/README.md',
        '/g4e/devops-aws/references.md',
        '/g4e/devops-aws/youtube.md',
      ]
    }, {
      text: 'Azure',
      collapsible: true,
      icon: 'fa-brands fa-microsoft',
      children: [
        '/g4e/devops-azure/README.md',
        '/g4e/devops-azure/references.md',
        '/g4e/devops-azure/youtube.md',
      ]
    }, {
      text: 'Security',
      collapsible: true,
      icon: 'fas fa-shield-halved',
      children: [
        '/g4e/devops-security/README.md',
        '/g4e/devops-security/references.md',
        '/g4e/devops-security/youtube.md',
      ]
    }, {
      text: 'HTTP',
      collapsible: true,
      icon: 'iconfont icon-http',
      children: [
        '/g4e/protocol-http/README.md',
        '/g4e/protocol-http/api.md',
        '/g4e/protocol-http/references.md',
      ]
    }, {
      text: 'Jenkins',
      collapsible: true,
      icon: 'fa-brands fa-jenkins',
      children: [
        '/g4e/ci-jenkins/README.md',
        '/g4e/ci-jenkins/snippets.md',
        '/g4e/ci-jenkins/references.md',
        '/g4e/ci-jenkins/youtube.md',
      ]
    }, {
      text: 'Appium',
      collapsible: true,
      icon: 'fas fa-hurricane',
      children: [
        '/g4e/ci-appium/README.md',
        '/g4e/ci-appium/references.md',
      ]
    }, {
      text: 'Nexus Repository',
      collapsible: true,
      icon: 'fas fa-kaaba',
      children: [
        '/g4e/devops-nexus/README.md',
        '/g4e/devops-nexus/tips.md',
      ]
    }, {
      text: 'Selenium',
      collapsible: true,
      icon: 'fas fa-square-check',
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
      text: 'VSCode',
      collapsible: true,
      icon: 'iconfont icon-vscode',
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
      text: 'Sublime Text',
      collapsible: true,
      icon: 'fas fa-file-lines',
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
      text: 'Excel',
      collapsible: true,
      icon: 'fas fa-table',
      children: [
        '/g4e/tool-excel/README.md',
        '/g4e/tool-excel/references.md',
        '/g4e/tool-excel/youtube.md',
      ]
    }, {
      text: 'Chrome Browser',
      collapsible: true,
      icon: 'fa-brands fa-chrome',
      children: [
        '/g4e/tool-chrome-browser/README.md',
        '/g4e/tool-chrome-browser/plugins.md',
        '/g4e/tool-chrome-browser/references.md'
      ]
    }, {
      text: 'Notion',
      collapsible: true,
      icon: 'fas fa-n',
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
      text: 'Gemini',
      collapsible: true,
      icon: 'fas fa-wand-magic-sparkles',
      children: [
        '/g4e/ai-gemini/README.md',
        '/g4e/ai-gemini/references.md',
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
      text: 'WebtoB',
      collapsible: true,
      icon: 'fas fa-sailboat',
      children: [
        '/g4e/ws-webtob/README.md',
        '/g4e/ws-webtob/basics.md',
        '/g4e/ws-webtob/references.md'
      ]
    }, 
    //endregion
    //region: DB
    {
      text: 'MySQL',
      collapsible: true,
      icon: 'iconfont icon-mysql',
      children: [
        '/g4e/db-mysql/README.md',
        '/g4e/db-mysql/query.md',
        '/g4e/db-mysql/references.md',
        '/g4e/db-mysql/youtube.md',
      ]
    }, {
      text: 'Oracle SQL',
      collapsible: true,
      icon: 'fas fa-eye',
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
      text: 'Cubrid',
      collapsible: true,
      icon: 'fas fa-cube',
      children: [
        '/g4e/db-cubrid/README.md',
        '/g4e/db-cubrid/cli.md',
        '/g4e/db-cubrid/query.md',
        '/g4e/db-cubrid/docker.md',
        '/g4e/db-cubrid/references.md',
      ]
    }, {
      text: 'PostgreSQL',
      collapsible: true,
      icon: 'fa-brands fa-deskpro',
      children: [
        '/g4e/db-postgres/README.md',
        '/g4e/db-postgres/query.md',
        '/g4e/db-postgres/references.md',
        '/g4e/db-postgres/youtube.md',
      ]
    }, {
      text: 'Django',
      collapsible: true,
      icon: 'fas fa-hat-cowboy',
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
      text: 'Altibase',
      collapsible: true,
      icon: 'fas fa-campground',
      children: [
        '/g4e/db-altibase/README.md',
        '/g4e/db-altibase/query.md',
        '/g4e/db-altibase/references.md',
      ]
    }, {
      text: 'SQL',
      collapsible: true,
      icon: 'fas fa-magnifying-glass',
      children: [
        '/g4e/sql/README.md',
        '/g4e/sql/tibero.md',
      ]
    }, 
    //endregion
    {
      text: 'Regex',
      collapsible: true,
      icon: 'iconfont icon-regexp',
      children: [
        '/g4e/regex/README.md',
        '/g4e/regex/tips.md',
        '/g4e/regex/references.md',
      ],
    }, {
      text: 'Hardware',
      collapsible: true,
      icon: 'fas fa-microchip',
      children: [
        '/g4e/hardware/README.md',
        '/g4e/hardware/references.md',
        '/g4e/hardware/youtube.md',
      ]
    },{
      text: 'Markdown',
      collapsible: true,
      icon: 'fa-brands fa-markdown',
      children: [
        '/g4e/lang-markdown/README.md',
        '/g4e/lang-markdown/template.md',
        '/g4e/lang-markdown/references.md',
      ]
    }, 
  ],
  '/projects/': [
    {
      text: 'Project',
      icon: 'fas fa-industry',
      children: [ '/projects/README.md' ],
    }, {
      text: 'My Roadmap',
      icon: 'fas fa-flag-checkered',
      children: [ '/projects/roadmap/README.md' ],
    }, {
      text: 'Portfolio',
      icon: 'fa-brands fa-fort-awesome',
      collapsible: true,
      children: [ '/projects/portfolio/README.md', ],
    }, {
      text: 'Lifeguide',
      collapsible: true,
      icon: 'fas fa-compass',
      children: [
        '/projects/lifeguide/README.md',
        '/projects/lifeguide/nhis.md',
        '/projects/lifeguide/youtube.md',
        '/projects/lifeguide/references.md',
      ]
    }, {
      text: 'Travel',
      collapsible: true,
      icon: 'fas fa-plane',
      children: [
        '/projects/travel/README.md',
        '/projects/travel/asia.md',
        '/projects/travel/references.md',
      ]
    }, {
      text: 'Cook',
      collapsible: true,
      icon: 'fas fa-fire-burner',
      children: [
        '/projects/cook/README.md',
        '/projects/cook/youtube.md',
        '/projects/cook/references.md',

      ]
    }
  ],
  '/explore/': [
    {
      text: 'Explore',
      icon: 'fas fa-globe',
      children: [ '/explore/README.md' ],
    }, {
      text: 'Newsletter',
      collapsible: true,
      icon: 'fas fa-rss',
      children: [
        '/explore/newsletter/README.md',
        '/explore/newsletter/data-science.md',
      ]
    }, {
      text: 'Youtube',
      collapsible: true,
      icon: 'fa-brands fa-youtube',
      children: [
        '/explore/youtube/README.md',
        '/explore/youtube/watch-later.md',
        '/explore/youtube/watch-later-tutorial.md',
        '/explore/youtube/watch-later-keynote.md',
        '/explore/youtube/edu-compsci.md',
      ]
    }, {
      text: 'Public API',
      collapsible: true,
      icon: 'fas fa-bullseye',
      children: [
        '/explore/api/README.md',
        '/explore/api/list.md',
        '/explore/api/popular.md',
      ],
    }, {
      text: 'Devlog',
      collapsible: true,
      icon: 'fas fa-timeline',
      children: [
        '/explore/devlog/README.md',
        '/explore/devlog/list.md',
      ]
    }, {
      text: 'Career',
      collapsible: true,
      icon: 'fas fa-user-tie',
      children: [
        '/explore/career/README.md',
        '/explore/career/hiring.md',
        '/explore/career/exam.md',
        '/explore/career/youtube.md',
        '/explore/career/references.md',
      ]
    }
  ],
  '/academics/': [
    {
      text: 'Academics',
      icon: 'fas fa-graduation-cap',
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