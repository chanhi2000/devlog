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
      icon: 'iconfont icon-kakao',
      children: [
        '/g4e/api-kakao/README.md',
        '/g4e/api-kakao/local.md',
        '/g4e/api-kakao/push.md',
        '/g4e/api-kakao/references.md'
      ]
    },  {
      text: 'API - NCloud',
      collapsible: true,
      icon: 'iconfont icon-naver',
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
      icon: 'iconfont icon-powershell',
      children: [
        '/g4e/cli-pwsh/README.md',
        '/g4e/cli-pwsh/basics.md',
        {
          text: 'Scripts',
          collapsible: true,
          children: [
            '/g4e/cli-pwsh/scripts-manage-computer.md',
            '/g4e/cli-pwsh/scripts-for-desktop.md',
            '/g4e/cli-pwsh/scripts-for-files-folders.md',
            '/g4e/cli-pwsh/scripts-convert-files.md',
            '/g4e/cli-pwsh/scripts-for-git.md',
            '/g4e/cli-pwsh/scripts-for-pwsh.md',
            '/g4e/cli-pwsh/various-pwsh-scripts.md',
          ]
        },
        '/g4e/cli-pwsh/tips.md',
        '/g4e/cli-pwsh/references.md',
        '/g4e/cli-pwsh/github.md',
        '/g4e/cli-pwsh/youtube.md',
      ]
    }, {
      text: 'Vim',
      collapsible: true,
      icon: 'iconfont icon-vim',
      children: [
        '/g4e/cli-vim/README.md',
        '/g4e/cli-vim/tips.md',
        '/g4e/cli-vim/neovim.md',
        '/g4e/cli-vim/github.md',
        '/g4e/cli-vim/references.md',
        '/g4e/cli-vim/youtube.md',
      ]
    }, {
      text: 'Gradle',
      collapsible: true,
      icon: 'iconfont icon-gradle',
      children: [
        '/g4e/lang-gradle/README.md',
        '/g4e/lang-gradle/snippets.md',
        '/g4e/lang-gradle/troubleshooting.md',
        '/g4e/lang-gradle/references.md'
      ]
    }, {
      text: 'Maven',
      collapsible: true,
      icon: 'iconfont icon-maven',
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
      icon: 'iconfont icon-spring',
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
      text: 'Kafka',
      collapsible: true,
      icon: 'iconfont icon-apachekafka',
      children: [
        '/g4e/lang-java-kafka/README.md',
        '/g4e/lang-java-kafka/references.md',
        '/g4e/lang-java-kafka/github.md',
        '/g4e/lang-java-kafka/youtube.md',
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
        {
          text: 'Interview Prep',
          collapsible: true,
          icon: 'fas fa-clipboard-question',
          children: [
            '/g4e/lang-swift/interview-prep.md',
            
          ]
        },
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
      icon: 'iconfont icon-mermaid',
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
      icon: 'iconfont icon-lua',
      children: [
        '/g4e/lang-lua/README.md',
        '/g4e/lang-lua/references.md',
        '/g4e/lang-lua/github.md',
        '/g4e/lang-lua/youtube.md',
      ]
    }, {
      text: 'CSharp',
      collapsible: true,
      icon: 'iconfont icon-csharp',
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
      icon: 'iconfont icon-ruby',
      children: [
        '/g4e/lang-ruby/README.md',
        '/g4e/lang-ruby/references.md',
        '/g4e/lang-ruby/github.md',
        '/g4e/lang-ruby/youtube.md',
      ]
    }, {
      text: 'Elixir',
      collapsible: true,
      icon: 'iconfont icon-elixir',
      children: [
        '/g4e/lang-elixir/README.md',
        '/g4e/lang-elixir/tips.md',
        '/g4e/lang-elixir/references.md',
        '/g4e/lang-elixir/github.md',
        '/g4e/lang-elixir/youtube.md',
      ]
    }, {
      text: 'Haskell',
      collapsible: true,
      icon: 'iconfont icon-haskell',
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
      icon: 'iconfont icon-cpp',
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
    {
      text: 'OpenAI',
      collapsible: true,
      icon: 'iconfont icon-openai',
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
    }, 
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
  '/tool/': [
    {
      text: 'Tool',
      icon: 'fas fa-screwdriver-wrench',
      children: [ '/tool/README.md' ],
    }, {
      text: 'Dracula',
      collapsible: true,
      icon: 'iconfont icon-vampire-dracula',
      children: [
        '/tool/dracula/README.md',
        '/tool/dracula/env-setup.md',
      ],
    }, {
      text: 'Intellij Idea',
      collapsible: true,
      icon: 'iconfont icon-intellijidea',
      children: [
        '/tool/intellij-idea/README.md',
        '/tool/intellij-idea/plugins.md',
        '/tool/intellij-idea/troubleshooting.md',
        '/tool/intellij-idea/references.md',
        '/tool/intellij-idea/youtube.md',
      ]
    },{
      text: 'VSCode',
      collapsible: true,
      icon: 'iconfont icon-vscode',
      children: [
        '/tool/vscode/README.md',
        '/tool/vscode/plugins.md',
        '/tool/vscode/settings-json.md',
        '/tool/vscode/tips.md',
        '/tool/vscode/snippets.md',
        '/tool/vscode/references.md',
        '/tool/vscode/youtube.md',
      ],
    }, {
      text: 'Sublime Text',
      collapsible: true,
      icon: 'iconfont icon-sublimetext',
      children: [
        '/tool/sublimetext/README.md',
        '/tool/sublimetext/plugins.md',
        '/tool/sublimetext/snippets.md',
        '/tool/sublimetext/references.md',
      ],
    }, {
      text: 'DBeaver',
      collapsible: true,
      icon: 'iconfont icon-dbeaver',
      children: [
        '/tool/dbeaver/README.md',
        '/tool/dbeaver/hotkey.md',
        '/tool/dbeaver/jdbc.md',
        '/tool/dbeaver/qtmplt.md',
      ]
    }, {
      text: 'Excel',
      collapsible: true,
      icon: 'iconfont icon-microsoftexcel',
      children: [
        '/tool/excel/README.md',
        '/tool/excel/references.md',
        '/tool/excel/youtube.md',
      ]
    }, {
      text: 'Chrome Browser',
      collapsible: true,
      icon: 'fa-brands fa-chrome',
      children: [
        '/tool/googlechrome/README.md',
        '/tool/googlechrome/plugins.md',
        '/tool/googlechrome/references.md'
      ]
    }, {
      text: 'Notion',
      collapsible: true,
      icon: 'iconfont icon-notion',
      children: [
        '/tool/notion/README.md',
        '/tool/notion/references.md',
        '/tool/notion/youtube.md',
      ]
    }
  ],
  '/devops/': [
    {
      text: 'DevOps',
      icon: 'fas fa-cubes-stacked',
      children: [ '/devops/README.md' ],
    }, 
    //region: devops
    {
      text: 'Git',
      collapsible: true,
      icon: 'iconfont icon-git',
      children: [
        '/devops/git/README.md',
        '/devops/git/basics.md',
        '/devops/git/references.md',
        '/devops/git/youtube.md',
      ]
    }, {
      text: 'Github',
      collapsible: true,
      icon: 'fa-brands fa-github',
      children: [
        '/devops/github/README.md',
        '/devops/github/awesome-list.md',
        '/devops/github/library.md',
        '/devops/github/news.md',
        '/devops/github/tutorial.md',
        '/devops/github/portfolio.md',
        '/devops/github/github-action.md',
        '/devops/github/troubleshooting.md',
        '/devops/github/references.md',
        '/devops/github/youtube.md',
      ]
    }, {
      text: 'Gitlab',
      collapsible: true,
      icon: 'fa-brands fa-gitlab',
      children: [
        '/devops/gitlab/README.md',
        '/devops/gitlab/docker.md',
        '/devops/gitlab/docker-gitlab-runner.md',
        '/devops/gitlab/docker-compose.md',
        '/devops/gitlab/troubleshooting.md',
        '/devops/gitlab/references.md',
        '/devops/gitlab/youtube.md',
      ]
    }, {
      text: 'Linux',
      collapsible: true,
      icon: 'fa-brands fa-linux',
      children: [
        '/devops/linux/README.md',
        '/devops/linux/env-setup.md',
        '/devops/linux/references.md',
        '/devops/linux/youtube.md',
      ]
    }, {
      text: 'macOS',
      collapsible: true,
      icon: 'iconfont icon-macos',
      children: [
        '/devops/macos/README.md',
        '/devops/macos/env-setup.md',
        '/devops/macos/tips.md',
        '/devops/macos/youtube.md',
      ],
    }, {
      text: 'Windows',
      collapsible: true,
      icon: 'fa-brands fa-windows',
      children: [
        '/devops/windows/README.md',
        '/devops/windows/env-setup.md',
        '/devops/windows/ie.md',
        '/devops/windows/tips.md',
        '/devops/windows/wsl.md',
        '/devops/windows/youtube.md',
      ]
    }, {
      text: 'oVirt',
      collapsible: true,
      icon: 'fas fa-cubes',
      children: [
        '/devops/ovirt/README.md',
        '/devops/ovirt/cli.md',
        '/devops/ovirt/references.md',
        '/devops/ovirt/youtube.md',
      ]
    }, {
      text: 'Docker',
      collapsible: true,
      icon: 'fa-brands fa-docker',
      children: [
        '/devops/docker/README.md',
        '/devops/docker/basics.md',
        '/devops/docker/docker-compose.md',
        '/devops/docker/favorite-containers.md',
        '/devops/docker/references.md',
        '/devops/docker/youtube.md',
      ]
    }, {
      text: 'Podman',
      collapsible: true,
      icon: 'iconfont icon-podman',
      children: [
        '/devops/podman/README.md',
        '/devops/podman/skopeo.md',
        '/devops/podman/references.md',
        '/devops/podman/articles/you-dont-have-to-use-docker-anymore.md',
      ]
    }, {
      text: 'Kubernetes',
      collapsible: true,
      icon: 'fas fa-dharmachakra',
      children: [
        '/devops/kubernetes/README.md',
        '/devops/kubernetes/references.md',
        '/devops/kubernetes/youtube.md',
      ]
    }, {
      text: 'Openshift',
      collapsible: true,
      icon: 'fa-brands fa-redhat',
      children: [
        '/devops/openshift/README.md',
        '/devops/openshift/references.md',
      ]
    }, {
      text: 'AWS',
      collapsible: true,
      icon: 'fa-brands fa-aws',
      children: [
        '/devops/aws/README.md',
        '/devops/aws/references.md',
        '/devops/aws/youtube.md',
      ]
    }, {
      text: 'Azure',
      collapsible: true,
      icon: 'iconfont icon-microsoftazure',
      children: [
        '/devops/azure/README.md',
        '/devops/azure/references.md',
        '/devops/azure/youtube.md',
      ]
    }, {
      text: 'Security',
      collapsible: true,
      icon: 'fas fa-shield-halved',
      children: [
        '/devops/security/README.md',
        '/devops/security/references.md',
        '/devops/security/youtube.md',
      ]
    }, {
      text: 'HTTP',
      collapsible: true,
      icon: 'iconfont icon-http',
      children: [
        '/devops/protocol-http/README.md',
        '/devops/protocol-http/api.md',
        '/devops/protocol-http/references.md',
      ]
    }, {
      text: 'Jenkins',
      collapsible: true,
      icon: 'fa-brands fa-jenkins',
      children: [
        '/devops/jenkins/README.md',
        '/devops/jenkins/snippets.md',
        '/devops/jenkins/references.md',
        '/devops/jenkins/youtube.md',
      ]
    }, {
      text: 'Appium',
      collapsible: true,
      icon: 'iconfont icon-appium',
      children: [
        '/devops/appium/README.md',
        '/devops/appium/references.md',
      ]
    }, {
      text: 'Nexus Repository',
      collapsible: true,
      icon: 'fas fa-kaaba',
      children: [
        '/devops/nexus/README.md',
        '/devops/nexus/tips.md',
      ]
    }, {
      text: 'Selenium',
      collapsible: true,
      icon: 'iconfont icon-selenium',
      children: [
        '/devops/selenium/README.md',
        '/devops/selenium/youtube.md',
      ],
    }, {
      text: '🦖JEUS',
      collapsible: true,
      children: [
        '/devops/jeus/README.md',
        '/devops/jeus/basics.md',
        '/devops/jeus/references.md'
      ]
    }, {
      text: 'WebtoB',
      collapsible: true,
      icon: 'fas fa-sailboat',
      children: [
        '/devops/webtob/README.md',
        '/devops/webtob/basics.md',
        '/devops/webtob/references.md'
      ] 
    }, {
      text: 'NGINX',
      collapsible: true,
      icon: 'iconfont icon-nginx',
      children: [
        '/devops/nginx/README.md',
        '/devops/nginx/references.md',
        '/devops/nginx/youtube.md',
      ]
    }, 
    //endregion
    //region: DB
    {
      text: 'MySQL',
      collapsible: true,
      icon: 'iconfont icon-mysql',
      children: [
        '/devops/mysql/README.md',
        '/devops/mysql/query.md',
        '/devops/mysql/references.md',
        '/devops/mysql/youtube.md',
      ]
    }, {
      text: 'Oracle SQL',
      collapsible: true,
      icon: 'iconfont icon-oracle',
      children: [
        '/devops/oracle/README.md',
        '/devops/oracle/query.md',
        '/devops/oracle/references.md',
        '/devops/oracle/youtube.md',
      ]
    }, {
      text: 'Microsoft SQL Server',
      collapsible: true,
      icon: 'iconfont icon-sqlserver',
      children: [
        '/devops/mssql/README.md',
        '/devops/mssql/query.md',
        '/devops/mssql/references.md',
        '/devops/mssql/youtube.md',
      ]
    }, {
      text: 'Cubrid',
      collapsible: true,
      icon: 'iconfont icon-cubrid',
      children: [
        '/devops/cubrid/README.md',
        '/devops/cubrid/cli.md',
        '/devops/cubrid/query.md',
        '/devops/cubrid/docker.md',
        '/devops/cubrid/references.md',
      ]
    }, {
      text: 'PostgreSQL',
      collapsible: true,
      icon: 'iconfont icon-postgresql',
      children: [
        '/devops/postgres/README.md',
        '/devops/postgres/query.md',
        '/devops/postgres/references.md',
        '/devops/postgres/youtube.md',
      ]
    }, {
      text: 'Django',
      collapsible: true,
      icon: 'iconfont icon-django',
      children: [
        '/devops/django/README.md',
        '/devops/django/query.md',
        '/devops/django/github.md',
        '/devops/django/references.md',
        '/devops/django/youtube.md',      
      ]
    }, {
      text: '🪳Cockroach',
      collapsible: true,
      children: [
        '/devops/cockroach/README.md',
        '/devops/cockroach/query.md',
        '/devops/cockroach/references.md',
      ]
    }, {
      text: 'Altibase',
      collapsible: true,
      icon: 'iconfont icon-altibase',
    children: [
        '/devops/altibase/README.md',
        '/devops/altibase/query.md',
        '/devops/altibase/references.md',
      ]
    }, {
      text: 'Tibero',
      collapsible: true,
      icon: 'fas fa-magnifying-glass',
      children: [
        '/devops/tibero/README.md',
        '/devops/tibero/tibero.md',
      ]
    },
    //endregion
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
      icon: 'iconfont icon-api',
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