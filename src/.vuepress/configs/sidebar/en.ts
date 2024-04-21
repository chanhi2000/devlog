import { sidebar } from 'vuepress-theme-hope'

export const sidebarEn = sidebar({
  '/programming/': [
    {
      text: 'Programming',
      icon: 'fas fa-keyboard',
      children: [ '/programming/README.md' ],
    },
    //region: api
    {
      text: 'API - Kakao',
      collapsible: true,
      icon: 'iconfont icon-kakao',
      children: [
        '/programming/api-kakao/README.md',
        '/programming/api-kakao/local.md',
        '/programming/api-kakao/push.md',
        '/programming/api-kakao/references.md'
      ]
    },  {
      text: 'API - NCloud',
      collapsible: true,
      icon: 'iconfont icon-naver',
      children: [
         '/programming/api-ncloud/README.md',
         '/programming/api-ncloud/geolocation.md',
         '/programming/api-ncloud/references.md',
        ]
    }, {
      text: 'Shell',
      collapsible: true,
      icon: 'iconfont icon-shell',
      children: [
        '/programming/sh/README.md',
        '/programming/sh/basics.md',
        '/programming/sh/tips.md',
        '/programming/sh/troubleshooting.md',
        '/programming/sh/references.md',
        '/programming/sh/github.md',
        '/programming/sh/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/sh/articles/README.md',
            {
              text: 'devkuma.com',
              collapsible: true,
              icon: 'https://www.devkuma.com/favicons/favicon.ico',
              children: [
                '/explore/articles/devkuma.com/makefile.md',
              ]
            }
          ]
        }
      ]
    }, {
      text: 'Batchfile',
      collapsible: true,
      icon: 'fas fa-gears',
      children: [
        '/programming/batchfile/README.md',
        '/programming/batchfile/basics.md',
        '/programming/batchfile/tips.md',
        '/programming/batchfile/snippets.md',
        '/programming/batchfile/references.md',
        '/programming/batchfile/github.md',
      ]
    }, {
      text: 'Powershell',
      collapsible: true,
      icon: 'iconfont icon-powershell',
      children: [
        '/programming/pwsh/README.md',
        '/programming/pwsh/basics.md',
        {
          text: 'Scripts',
          collapsible: true,
          children: [
            '/programming/pwsh/scripts-manage-computer.md',
            '/programming/pwsh/scripts-for-desktop.md',
            '/programming/pwsh/scripts-for-files-folders.md',
            '/programming/pwsh/scripts-convert-files.md',
            '/programming/pwsh/scripts-for-git.md',
            '/programming/pwsh/scripts-for-pwsh.md',
            '/programming/pwsh/various-pwsh-scripts.md',
          ]
        },
        '/programming/pwsh/tips.md',
        '/programming/pwsh/references.md',
        '/programming/pwsh/github.md',
        '/programming/pwsh/youtube.md',
      ]
    }, {
      text: 'Git',
      collapsible: true,
      icon: 'iconfont icon-git',
      children: [
        '/programming/git/README.md',
        '/programming/git/basics.md',
        '/programming/git/references.md',
        '/programming/git/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/git/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/2545.md',
              ]
            }
          ]
        }
      ]
    }, {
      text: 'Vim',
      collapsible: true,
      icon: 'iconfont icon-vim',
      children: [
        '/programming/vim/README.md',
        '/programming/vim/tips.md',
        '/programming/vim/neovim.md',
        '/programming/vim/github.md',
        '/programming/vim/references.md',
        '/programming/vim/youtube.md',
      ]
    }, {
      text: 'Gradle',
      collapsible: true,
      icon: 'iconfont icon-gradle',
      children: [
        '/programming/gradle/README.md',
        '/programming/gradle/snippets.md',
        '/programming/gradle/troubleshooting.md',
        '/programming/gradle/references.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/gradle/articles/README.md',
            {
              text: 'shopify.engineering',
              collapsible: true,
              icon: 'https://cdn.shopify.com/static/shopify-favicon.png',
              children: [
                '/explore/articles/shopify.engineering/managing-native-code-react-native.md',
              ]
            }
          ]
        }
      ]
    }, {
      text: 'Maven',
      collapsible: true,
      icon: 'iconfont icon-maven',
      children: [
        '/programming/maven/README.md',
        '/programming/maven/snippets.md',
        '/programming/maven/references.md',
        '/programming/maven/youtube.md',
      ]
    }, {
      text: 'Java',
      collapsible: true,
      icon: 'fa-brands fa-java',
      children: [
        '/programming/java/README.md',
        '/programming/java/basics.md',
        '/programming/java/singleton.md',
        '/programming/java/log4j.md',
        '/programming/java/webservice.md',
        '/programming/java/tips.md',
        '/programming/java/snippets.md',
        '/programming/java/crashcourse.md',
        '/programming/java/news.md',
        '/programming/java/references.md',
        '/programming/java/github.md',
        '/programming/java/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/java/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/2478.md',
              ]
            }, {
              text: 'kt.academy',
              collapsible: true,
              icon: 'https://kt.academy/logo.png',
              children: [
                '/explore/articles/kt.academy/pattern-for-composing-flows.md'
              ]
            }, 
          ]
        }
      ]
    }, {
      text: 'Spring',
      collapsible: true,
      icon: 'iconfont icon-spring',
      children: [
        '/programming/java-spring/README.md',
        '/programming/java-spring/snippets-gradle.md',
        '/programming/java-spring/was.md',
        '/programming/java-spring/crashcourse.md',
        '/programming/java-spring/references.md',
        '/programming/java-spring/github.md',
        '/programming/java-spring/youtube.md',
      ]
    }, {
      text: 'Android',
      collapsible: true,
      icon: 'fa-brands fa-android',
      children: [
        '/programming/java-android/README.md',
        '/programming/java-android/adb.md',
        '/programming/java-android/proguard.md',
        '/programming/java-android/tips.md',
        '/programming/java-android/troubleshooting.md',
        '/programming/java-android/snippets-kotlin.md',
        '/programming/java-android/snippets-jetpack-compose.md',
        '/programming/java-android/snippets-gradle.md',
        '/programming/java-android/crashcourse.md',
        '/programming/java-android/news.md',
        '/programming/java-android/references.md',
        '/programming/java-android/github.md',
        '/programming/java-android/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/java-android/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/2457.md',
              ]
            }, {
              text: "droidcon.com",
              collapsible: true,
              icon: 'https://www.droidcon.com/wp-content/uploads/2021/07/favicon-300x300.png',
              children: [
                '/explore/articles/droidcon.com/publishing-kotlin-multiplatform-libraries-with-sonatype-central.md'
              ]
            }
          ]
        }
      ]
    }, {
      text: 'Kafka',
      collapsible: true,
      icon: 'iconfont icon-apachekafka',
      children: [
        '/programming/java-kafka/README.md',
        '/programming/java-kafka/references.md',
        '/programming/java-kafka/github.md',
        '/programming/java-kafka/youtube.md',
      ]
    }, {
      text: 'Swift',
      collapsible: true,
      icon: 'fa-brands fa-swift',
      children: [
        '/programming/swift/README.md',
        '/programming/swift/tips.md',
        '/programming/swift/snippets.md',
        '/programming/swift/crashcourse.md',
        '/programming/swift/news.md',
        {
          text: 'Interview Prep',
          collapsible: true,
          icon: 'fas fa-clipboard-question',
          children: [
            '/programming/swift/interview-prep.md',
          ]
        },
        '/programming/swift/references.md',
        '/programming/swift/github.md',
        '/programming/swift/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            {
              text: 'douggregor.net',
              collapsible: true,
              icon: 'fas fa-globe',
              children: [
                '/explore/articles/douggregor.net/swift-for-cpp-practitioners-1.md',
                '/explore/articles/douggregor.net/swift-for-cpp-practitioners-2.md',
                '/explore/articles/douggregor.net/swift-for-cpp-practitioners-3.md',
                '/explore/articles/douggregor.net/swift-for-cpp-practitioners-4.md',
                '/explore/articles/douggregor.net/swift-for-cpp-practitioners-5.md',
                '/explore/articles/douggregor.net/swift-for-cpp-practitioners-6.md',
              ]
            }, {
              text: 'hackingwithswift.com',
              collapsible: true,
              icon: 'https://hackingwithswift.com/favicon.svg',
              children: [
                '/explore/articles/hackingwithswift.com/learn-essential-swift-in-one-hour.md',
              ]
            }, {
              text: 'donnywals.com',
              collapsible: true,
              icon: 'https://www.donnywals.com/wp-content/uploads/cropped-site-icon-192x192.png',
              children: [
                '/explore/articles/donnywals.com/how-to-use-experimental-swift-versions-and-features-in-xcode.md'
              ]
            }
          ]
        }
      ]
    }, {
      text: 'Node.js',
      collapsible: true,
      icon: 'fa-brands fa-node',
      children: [
        '/programming/js-node/README.md',
        '/programming/js-node/troubleshooting.md',
        '/programming/js-node/sandbox.md',
        '/programming/js-node/cordova.md',
        '/programming/js-node/tips.md',
        '/programming/js-node/snippets.md',
        '/programming/js-node/references.md',
        '/programming/js-node/github.md',
        '/programming/js-node/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js-node/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/2483.md',
                '/explore/articles/yozm.wishket.com/2504.md',
                '/explore/articles/yozm.wishket.com/2505.md',
              ]
            }, {
              text: 'freecodecamp.org',
              icon: 'https://cdn.freecodecamp.org/universal/favicons/favicon.ico',
              collapsible: true,
              children: [
                '/explore/articles/freecodecamp.org/what-is-dead-zone-in-javascript.md'
              ]
            }, {
              text: 'devtoolstips.org',
              collapsible: true,
              icon: 'https://devtoolstips.org/assets/favicon.ico',
              children: [
                '/explore/articles/devtoolstips.org/see-accessibility-tree.md',
                '/explore/articles/devtoolstips.org/name-evaluated-files.md',
                '/explore/articles/devtoolstips.org/simulate-pwa-wco.md',
                '/explore/articles/devtoolstips.org/inspect-user-agent-dom.md',
                '/explore/articles/devtoolstips.org/explain-errors-with-ai.md',
                '/explore/articles/devtoolstips.org/enable-safari-devtools.md',
                '/explore/articles/devtoolstips.org/block-devtools.md',
                "/explore/articles/devtoolstips.org/list-all-event-listeners.md",
                "/explore/articles/devtoolstips.org/debug-popups-on-hover.md",
                "/explore/articles/devtoolstips.org/force-execution-at-breakpoint.md",
                "/explore/articles/devtoolstips.org/see-viewport-size.md",
              ]
            }, {
              text: 'sitepoint.com',
              collapsible: true,
              icon: 'https://www.sitepoint.com/favicons/512x512.png',
              children: [
                '/explore/articles/sitepoint.com/20240312-new-javascript-ecmascript.md',
              ]
            }, {
              text: 'johnnyreilly.com',
              collapsible: true,
              icon: 'https://johnnyreilly.com/favicon.ico',
              children: [
                '/explore/articles/johnnyreilly.com/webpack-overview.md',
              ]
            }
          ]
        }
      ]
    }, {
      text: 'React.js',
      collapsible: true,
      icon: 'fa-brands fa-react',
      children: [
        '/programming/js-react/README.md',
        '/programming/js-react/snippets.md',
        '/programming/js-react/snippets-serpiko.md',
        '/programming/js-react/references.md',
        '/programming/js-react/github.md',
        '/programming/js-react/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js-react/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/2479.md',
                '/explore/articles/yozm.wishket.com/2493.md',
                '/explore/articles/yozm.wishket.com/2528.md',
                '/explore/articles/yozm.wishket.com/2537.md',
              ]
            }
          ]
        }
      ]
    }, {
      text: 'Vue.js',
      collapsible: true,
      icon: 'fa-brands fa-vuejs',
      children: [
        '/programming/js-vue/README.md',
        '/programming/js-vue/snippets.md',
        '/programming/js-vue/references.md',
        '/programming/js-vue/github.md',
        '/programming/js-vue/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js-vue/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/2511.md',
              ]
            }
          ]
        }
      ]
    }, {
      text: 'Svelte.js',
      collapsible: true,
      icon: 'iconfont icon-svelte',
      children: [
        '/programming/js-svelte/README.md',
        '/programming/js-svelte/references.md',
        '/programming/js-svelte/github.md',
        '/programming/js-svelte/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
          ]
        }
      ]
    }, {
      text: 'Mermaid.js',
      collapsible: true,
      icon: 'iconfont icon-mermaid',
      children: [
        '/programming/js-mermaid/README.md',
        '/programming/js-mermaid/examples.md',
      ]
    }, {
      text: 'Python',
      collapsible: true,
      icon: 'fa-brands fa-python',
      children: [
        '/programming/python/README.md',
        '/programming/python/references.md',
        '/programming/python/github.md',
        '/programming/python/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/python/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/2543.md',
                '/explore/articles/yozm.wishket.com/2536.md',
                '/explore/articles/yozm.wishket.com/2057.md',
              ]
            }
          ]
        }
      ]
    }, {
      text: 'CSS',
      collapsible: true,
      icon: 'fa-brands fa-css3-alt',
      children: [
        '/programming/css/README.md',
        '/programming/css/tips.md',
        '/programming/css/snippets.md',
        '/programming/css/references.md',
        '/programming/css/youtube.md',
      ]
    }, {
      text: 'Rust',
      collapsible: true,
      icon: 'fa-brands fa-rust',
      children: [
        '/programming/rust/README.md',
        '/programming/rust/references.md',
        '/programming/rust/github.md',
        '/programming/rust/youtube.md',
      ]
    }, 
    {
      text: 'Lua',
      collapsible: true,
      icon: 'iconfont icon-lua',
      children: [
        '/programming/lua/README.md',
        '/programming/lua/references.md',
        '/programming/lua/github.md',
        '/programming/lua/youtube.md',
      ]
    }, {
      text: 'CSharp',
      collapsible: true,
      icon: 'iconfont icon-csharp',
      children: [
        '/programming/csharp/README.md',
        '/programming/csharp/references.md',
        '/programming/csharp/github.md',
        '/programming/csharp/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/csharp/articles/README.md',
            {
              text: 'johnnyreilly.com',
              collapsible: true,
              icon: 'https://johnnyreilly.com/favicon.ico',
              children: [
                '/explore/articles/johnnyreilly.com/using-kernel-memory-to-chunk-documents-into-azure-ai-search.md'
              ]
            }, {
              text: 'code-maze.com',
              collapsible: true,
              icon: 'https://code-maze.com/favicon.ico',
              children: [
                '/explore/articles/code-maze.com/csharp-getting-property-mappings-from-automapper.md'
              ]
            }
          ]
        }
      ]
    }, {
      text: 'Go',
      collapsible: true,
      icon: 'fa-brands fa-golang',
      children: [
        '/programming/go/README.md',
        '/programming/go/references.md',
        '/programming/go/github.md',
        '/programming/go/youtube.md',
      ]
    }, {
      text: 'Dart',
      collapsible: true,
      icon: 'iconfont icon-dart',
      children: [
        '/programming/dart/README.md',
        '/programming/dart/snippets.md',
        '/programming/dart/references.md',
        '/programming/dart/github.md',
        '/programming/dart/youtube.md',
      ]
    }, {
      text: 'php',
      collapsible: true,
      icon: 'fa-brands fa-php',
      children: [
        '/programming/php/README.md',
        '/programming/php/references.md',
        '/programming/php/github.md',
        '/programming/php/youtube.md',
      ]
    }, {
      text: 'Ruby',
      collapsible: true,
      icon: 'iconfont icon-ruby',
      children: [
        '/programming/ruby/README.md',
        '/programming/ruby/references.md',
        '/programming/ruby/github.md',
        '/programming/ruby/youtube.md',
      ]
    }, {
      text: 'Elixir',
      collapsible: true,
      icon: 'iconfont icon-elixir',
      children: [
        '/programming/elixir/README.md',
        '/programming/elixir/tips.md',
        '/programming/elixir/references.md',
        '/programming/elixir/github.md',
        '/programming/elixir/youtube.md',
      ]
    }, {
      text: 'Haskell',
      collapsible: true,
      icon: 'iconfont icon-haskell',
      children: [
        '/programming/haskell/README.md',
        '/programming/haskell/references.md',
        '/programming/haskell/github.md',
        '/programming/haskell/youtube.md',
      ]
    }, {
      text: 'C',
      collapsible: true,
      icon: 'iconfont icon-c',
      children: [
        '/programming/c/README.md',
        '/programming/c/tips.md',
        '/programming/c/references.md',
        '/programming/c/github.md',
        '/programming/c/youtube.md',
      ]
    }, {
      text: 'Cpp',
      collapsible: true,
      icon: 'iconfont icon-cpp',
      children: [
        '/programming/cpp/README.md',
        '/programming/cpp/tips.md',
        '/programming/cpp/references.md',
        '/programming/cpp/github.md',
        '/programming/cpp/youtube.md',
      ]
    }, {
      text: 'Zig',
      icon: 'iconfont icon-zig',
      collapsible: true,
      children: [
        '/programming/zig/README.md',
        '/programming/zig/tips.md',
        '/programming/zig/references.md',
        '/programming/zig/github.md',
        '/programming/zig/youtube.md',
      ]
    }, {
      text: 'LaTeX',
      collapsible: true,
      icon: 'iconfont icon-tex',
      children: [
        '/programming/latex/README.md',
        '/programming/latex/references.md',
        '/programming/latex/github.md', 
      ]
    }, {
      text: 'Regex',
      collapsible: true,
      icon: 'iconfont icon-regexp',
      children: [
        '/programming/regex/README.md',
        '/programming/regex/tips.md',
        '/programming/regex/references.md',
      ],
    }, {
      text: 'Hardware',
      collapsible: true,
      icon: 'fas fa-microchip',
      children: [
        '/programming/hardware/README.md',
        '/programming/hardware/references.md',
        '/programming/hardware/youtube.md',
      ]
    }, {
      text: 'Markdown',
      collapsible: true,
      icon: 'fa-brands fa-markdown',
      children: [
        '/programming/markdown/README.md',
        '/programming/markdown/template.md',
        '/programming/markdown/references.md',
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/intellij-idea/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/2478.md',
              ]
            }
          ]
        }
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/vscode/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/2478.md',
              ]
            }
          ]
        }
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
    }, {
      text: 'Wireshark',
      collapsible: true,
      icon: 'iconfont icon-wireshark',
      children: [
        '/tool/wireshark/README.md',
        '/tool/wireshark/references.md',
        '/tool/wireshark/youtube.md',
      ]
    }
  ],
  '/devops/': [
    {
      text: 'DevOps',
      icon: 'fas fa-network-wired',
      children: [ '/devops/README.md' ],
    }, 
    //region: devops
    {
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
      text: 'Linux - Debian',
      collapsible: true,
      icon: 'fa-brands fa-debian',
      children: [
        '/devops/debian/README.md',
        '/devops/debian/env-setup.md',
        '/devops/debian/references.md',
        '/devops/debian/youtube.md',
      ]
    }, {
      text: 'Proxmox',
      collapsible: true,
      icon: 'iconfont icon-proxmox',
      children: [
        '/devops/proxmox/README.md',
        '/devops/proxmox/references.md',
        '/devops/proxmox/youtube.md',
      ],
    }, {
      text: 'QEMU',
      collapsible: true,
      icon: 'iconfont icon-qemu',
      children: [
        '/devops/qemu/README.md',
        '/devops/qemu/references.md',
        '/devops/qemu/youtube.md',
      ]
    },{
      text: 'KVM',
      collapsible: true,
      icon: 'fa-brands fa-linux',
      children: [
        '/devops/kvm/README.md',
        '/devops/kvm/references.md',
        '/devops/kvm/youtube.md',
      ]
    }, {
      text: 'oVirt',
      collapsible: true,
      icon: 'iconfont icon-ovirt',
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/docker/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/2527.md',
              ]
            }
          ]
        }
      ]
    }, {
      text: 'Podman',
      collapsible: true,
      icon: 'iconfont icon-podman',
      children: [
        '/devops/podman/README.md',
        '/devops/podman/skopeo.md',
        '/devops/podman/references.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/podman/articles/README.md',
            {
              text: 'towardsdatascience.com',
              collapsible: true,
              icon: 'https://cdn-images-1.medium.com/v2/resize:fill:128:128/1*VzTUkfeGymHP4Bvav-T-lA.png',
              children: [
                '/explore/articles/towardsdatascience.com/you-dont-have-to-use-docker-anymore.md',
              ]
            }
          ]
        }
      ]
    }, {
      text: 'Kubernetes',
      collapsible: true,
      icon: 'fas fa-dharmachakra',
      children: [
        '/devops/kubernetes/README.md',
        '/devops/kubernetes/references.md',
        '/devops/kubernetes/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/kubernetes/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/1990.md',
                '/explore/articles/yozm.wishket.com/2515.md',
              ]
            }
          ]
        }
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/aws/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/2541.md',
              ]
            }
          ]
        }
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/security/articles/README.md',
            {
              text: 'yozm.wishket.com',
              collapsible: true,
              icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
              children: [
                '/explore/articles/yozm.wishket.com/2503.md',                
              ]
            }
          ]
        },
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
  ], '/ai/': [
    {
      text: 'AI',
      icon: 'fas fa-brain',
      children: [ '/ai/README.md' ],
    }, {
      text: 'OpenAI',
      collapsible: true,
      icon: 'iconfont icon-openai',
      children: [
        '/ai/openai/README.md',
        '/ai/openai/references.md',
        '/ai/openai/youtube.md',
      ]
    }, {
      text: 'LLM',
      collapsible: true,
      icon: 'fas fa-language',
      children: [
        '/ai/llm/README.md',
        '/ai/llm/references.md',
        '/ai/llm/youtube.md',
      ]
    }, {
      text: 'Gemini',
      collapsible: true,
      icon: 'fas fa-wand-magic-sparkles',
      children: [
        '/ai/gemini/README.md',
        '/ai/gemini/references.md',
      ]
    }, 
  ], '/projects/': [
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
      text: 'Article(s)',
      collapsible: true,
      icon: 'fas fa-square-share-nodes',
      children: [
        {
          text: 'yozm.wishket.com',
          collapsible: true,
          icon: 'https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg',
          children: [
            '/explore/articles/yozm.wishket.com/1990.md',
            '/explore/articles/yozm.wishket.com/2057.md',
            '/explore/articles/yozm.wishket.com/2425.md',
            '/explore/articles/yozm.wishket.com/2457.md',
            '/explore/articles/yozm.wishket.com/2478.md',
            '/explore/articles/yozm.wishket.com/2479.md',
            '/explore/articles/yozm.wishket.com/2483.md',
            '/explore/articles/yozm.wishket.com/2493.md',
            '/explore/articles/yozm.wishket.com/2499.md',
            '/explore/articles/yozm.wishket.com/2503.md',
            '/explore/articles/yozm.wishket.com/2504.md',
            '/explore/articles/yozm.wishket.com/2505.md',
            '/explore/articles/yozm.wishket.com/2511.md',
            '/explore/articles/yozm.wishket.com/2515.md',
            '/explore/articles/yozm.wishket.com/2527.md',
            '/explore/articles/yozm.wishket.com/2528.md',
            '/explore/articles/yozm.wishket.com/2536.md',
            '/explore/articles/yozm.wishket.com/2537.md',
            '/explore/articles/yozm.wishket.com/2541.md',
            '/explore/articles/yozm.wishket.com/2543.md',
            '/explore/articles/yozm.wishket.com/2545.md',
          ]
        }, {
          text: 'freecodecamp.org',
          icon: 'https://cdn.freecodecamp.org/universal/favicons/favicon.ico',
          collapsible: true,
          children: [
            '/explore/articles/freecodecamp.org/what-is-dead-zone-in-javascript.md'
          ]
        }, {
          text: 'devkuma.com',
          icon: 'https://devkuma.com/favicons/favicon.ico',
          collapsible: true,
          children: [
            '/explore/articles/devkuma.com/makefile.md',
          ]
        }, {
          text: 'devtoolstips.org',
          collapsible: true,
          icon: 'https://devtoolstips.org/assets/favicon.ico',
          children: [
            '/explore/articles/devtoolstips.org/see-accessibility-tree.md',
            '/explore/articles/devtoolstips.org/name-evaluated-files.md',
            '/explore/articles/devtoolstips.org/simulate-pwa-wco.md',
            '/explore/articles/devtoolstips.org/inspect-user-agent-dom.md',
            '/explore/articles/devtoolstips.org/explain-errors-with-ai.md',
            '/explore/articles/devtoolstips.org/enable-safari-devtools.md',
            '/explore/articles/devtoolstips.org/block-devtools.md',
            "/explore/articles/devtoolstips.org/list-all-event-listeners.md",
            "/explore/articles/devtoolstips.org/debug-popups-on-hover.md",
            "/explore/articles/devtoolstips.org/force-execution-at-breakpoint.md",
            "/explore/articles/devtoolstips.org/see-viewport-size.md",
          ]
        }, {
          text: 'sitepoint.com',
          collapsible: true,
          icon: 'https://www.sitepoint.com/favicons/512x512.png',
          children: [
            '/explore/articles/sitepoint.com/20240312-new-javascript-ecmascript.md',
          ]
        }, {
          text: 'towardsdatascience.com',
          collapsible: true,
          icon: 'https://cdn-images-1.medium.com/v2/resize:fill:128:128/1*VzTUkfeGymHP4Bvav-T-lA.png',
          children: [
            '/explore/articles/towardsdatascience.com/you-dont-have-to-use-docker-anymore.md',
          ]
        }, {
          text: 'douggregor.net',
          collapsible: true,
          icon: 'fas fa-globe',
          children: [
            '/explore/articles/douggregor.net/swift-for-cpp-practitioners-1.md',
            '/explore/articles/douggregor.net/swift-for-cpp-practitioners-2.md',
            '/explore/articles/douggregor.net/swift-for-cpp-practitioners-3.md',
            '/explore/articles/douggregor.net/swift-for-cpp-practitioners-4.md',
            '/explore/articles/douggregor.net/swift-for-cpp-practitioners-5.md',
            '/explore/articles/douggregor.net/swift-for-cpp-practitioners-6.md',
          ]
        }, {
          text: 'hackingwithswift.com',
          collapsible: true,
          icon: 'https://hackingwithswift.com/favicon.svg',
          children: [
            '/explore/articles/hackingwithswift.com/learn-essential-swift-in-one-hour.md',
          ]
        }, {
          text: 'donnywals.com',
          collapsible: true,
          icon: 'https://www.donnywals.com/wp-content/uploads/cropped-site-icon-192x192.png',
          children: [
            '/explore/articles/donnywals.com/how-to-use-experimental-swift-versions-and-features-in-xcode.md'
          ]
        }, {
          text: 'kt.academy',
          collapsible: true,
          icon: 'https://kt.academy/logo.png',
          children: [
            '/explore/articles/kt.academy/pattern-for-composing-flows.md'
          ]
        }, {
          text: 'johnnyreilly.com',
          collapsible: true,
          icon: 'https://johnnyreilly.com/favicon.ico',
          children: [
            '/explore/articles/johnnyreilly.com/using-kernel-memory-to-chunk-documents-into-azure-ai-search.md',
            '/explore/articles/johnnyreilly.com/webpack-overview.md',
          ]
        }, {
          text: 'code-maze.com',
          collapsible: true,
          icon: 'https://code-maze.com/favicon.ico',
          children: [
            '/explore/articles/code-maze.com/csharp-getting-property-mappings-from-automapper.md'
          ]
        }, {
          text: "droidcon.com",
          collapsible: true,
          icon: 'https://www.droidcon.com/wp-content/uploads/2021/07/favicon-300x300.png',
          children: [
            '/explore/articles/droidcon.com/publishing-kotlin-multiplatform-libraries-with-sonatype-central.md'
          ]
        }, {
          text: 'shopify.engineering',
          collapsible: true,
          icon: 'https://cdn.shopify.com/static/shopify-favicon.png',
          children: [
            '/explore/articles/shopify.engineering/managing-native-code-react-native.md',
          ]
        }
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