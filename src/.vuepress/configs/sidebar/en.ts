import { sidebar } from 'vuepress-theme-hope'
import { articleSidebars, hackingwithswift } from './articles'

export const sidebarEn = sidebar({
  '/programming/': [
    {
      text: 'Programming',
      icon: 'fas fa-keyboard',
      children: [ '/programming/README.md' ],
    },
    //region: api
    {
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
            articleSidebars.freecodecamp("sh"),
            articleSidebars.yozm("sh"),
            articleSidebars.devkuma("sh"),
            articleSidebars.nhn("sh"),
            articleSidebars.linecorp("sh"),
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
            articleSidebars.yozm("git"),
            articleSidebars.d2("git"),
            articleSidebars.nhn("git"),
            articleSidebars.woowahan("git"),
            articleSidebars.linecorp("git"),
          ]
        }
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
            articleSidebars.freecodecamp("gradle"),
            articleSidebars.shopify("gradle"),
            articleSidebars.linecorp("gradle"),
          ]
        },
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/maven/articles/README.md',
            articleSidebars.yozm("maven"),
          ]
        }
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
            articleSidebars.yozm("java"),
            articleSidebars.nhn("java"),
            articleSidebars.d2("java"),
            articleSidebars.gangnamunni("java"),
            articleSidebars.gangnamunni("kotlin"),
            articleSidebars.ktAcademy("kotlin"),
            articleSidebars.linecorp("kotlin"),
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
        '/programming/java-spring/crashcourse.md',
        '/programming/java-spring/references.md',
        '/programming/java-spring/github.md',
        '/programming/java-spring/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/java-spring/articles/README.md',
            articleSidebars.freecodecamp("java-spring"),
            articleSidebars.yozm("java-spring"),
            articleSidebars.ktAcademy("kotlin-spring"),
            articleSidebars.rutgoLetsgo("java-spring"),
            articleSidebars.nhn("java-spring"),
            articleSidebars.d2("java-spring"), 
            articleSidebars.woowahan("java-spring"),
            articleSidebars.gangnamunni("java-spring"),
            articleSidebars.gmarket("java-spring"),
            articleSidebars.linecorp("java-spring"),
            articleSidebars.linecorp("kotlin-spring"),
            articleSidebars.zuminternet("java-spring"),
          ]
        }
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
            articleSidebars.freecodecamp("java-android"),
            articleSidebars.yozm("java-android"),
            articleSidebars.droidcon("java-android"),
            articleSidebars.ktAcademy("kotlin-android"),
            articleSidebars.nhn("java-android"),
            articleSidebars.banksalad("java-android"),
            articleSidebars.gangnamunni("java-android"),
            articleSidebars.antonioleiva("kotlin-android"),
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/java-kafka/articles/README.md',
            articleSidebars.popit("java-kafka"),
            articleSidebars.d2("java-kafka"),
          ]
        }
      ]
    }, {
      text: 'Armeria',
      collapsible: true,
      icon: 'iconfont icon-armeria',
      children: [
        '/programming/java-armeria/README.md',
        '/programming/java-armeria/references.md',
        '/programming/java-armeria/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/java-armeria/articles/README.md',
            articleSidebars.linecorp("java-armeria"),
          ]
        }
      ]
    }, {
      text: 'Elasticsearch',
      collapsible: true,
      icon: 'iconfont icon-elasticsearch',
      children: [
        '/programming/java-elasticsearch/README.md',
        '/programming/java-elasticsearch/references.md',
        '/programming/java-elasticsearch/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/java-elasticsearch/articles/README.md',
            articleSidebars.popit("java-elasticsearch"),
          ]
        }
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
        '/programming/swift/references.md',
        '/programming/swift/github.md',
        '/programming/swift/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            hackingwithswift(),
            articleSidebars.yozm("swift"),
            articleSidebars.douggregor("swift"), 
            articleSidebars.donnywals("swift"), 
            articleSidebars.gangnamunni("swift"),
            articleSidebars.zuminternet("swift"),
          ]
        },
        {
          text: 'Interview Prep',
          collapsible: true,
          icon: 'fas fa-clipboard-question',
          children: [
            '/programming/swift/interview-prep/README.md',
            '/programming/swift/interview-prep/20240322.md',
            '/programming/swift/interview-prep/20240329.md',
          ]
        },
      ]
    }, {
      text: 'JavaScript',
      collapsible: true,
      icon: 'fa-brands fa-js',
      children: [
        '/programming/js/README.md',
        '/programming/js/jquery.md',
        '/programming/js/snippets.md',
        '/programming/js/references.md',
        '/programming/js/github.md',
        '/programming/js/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js/articles/README.md',
            articleSidebars.freecodecamp("js"),
            articleSidebars.frontendmaster("js"),
            articleSidebars.sitepoint("js"),
            articleSidebars.nhn("js"),
            articleSidebars.devtoolstips("js"),
          ]
        }
      ]
    }, {
      text: 'NPM',
      collapsible: true,
      icon: 'fa-brands fa-npm',
      children: [
        '/programming/npm/README.md',
        '/programming/npm/references.md',
        '/programming/npm/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/npm/articles/README.md',
            articleSidebars.woowahan("npm"),
          ]
        }
      ],
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
        '/programming/js-node/references.md',
        '/programming/js-node/github.md',
        '/programming/js-node/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js-node/articles/README.md',
            articleSidebars.freecodecamp('js-node'), 
            articleSidebars.yozm("js-node"),
            articleSidebars.d2("js-node"), 
            articleSidebars.nhn("js-node"),
            articleSidebars.linecorp("js-node"),
            articleSidebars.johnnyreilly("js-node"),
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
            articleSidebars.freecodecamp("js-react"),
            articleSidebars.yozm("js-react"),
            articleSidebars.woowahan("js-react"),
            articleSidebars.gmarket("js-react"),
            articleSidebars.zuminternet("js-react"),
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
            articleSidebars.yozm("js-vue"),
            articleSidebars.zuminternet("js-vue"),
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
            '/programming/js-svelte/articles/README.md',
            articleSidebars.frontendmaster("js-svelte"),
          ]
        }
      ]
    }, {
      text: 'Angular.js',
      collapsible: true,
      icon: 'fa-brands fa-angular',
      children: [
        '/programming/js-angular/README.md',
        '/programming/js-angular/references.md',
        '/programming/js-angular/youtube.md',
      ]
    }, {
      text: 'Nest.js',
      collapsible: true,
      icon: 'iconfont icon-nestjs',
      children: [
        '/programming/js-nest/README.md',
        '/programming/js-nest/references.md',
        '/programming/js-nest/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js-nest/articles/README.md',
            articleSidebars.freecodecamp("js-nest"),
          ]
        }
      ]
    }, {
      text: 'Next.js',
      collapsible: true,
      icon: 'iconfont icon-nextjs',
      children: [
        '/programming/js-next/README.md',
        '/programming/js-next/references.md',
        '/programming/js-next/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js-next/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Storybook.js',
      collapsible: true,
      icon: 'iconfont icon-storybook',
      children: [
        '/programming/js-storybook/README.md',
        '/programming/js-storybook/references.md',
        '/programming/js-storybook/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js-storybook/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'GraphQL',
      collapsible: true,
      icon: 'iconfont icon-graphql',
      children: [
        '/programming/js-graphql/README.md',
        '/programming/js-graphql/references.md',
        '/programming/js-graphql/youtube.md',
      ],
    }, {
      text: 'Supabase',
      collapsible: true,
      icon: 'iconfont icon-supabase',
      children: [
        '/programming/js-supabase/README.md',
        '/programming/js-supabase/references.md',
        '/programming/js-supabase/youtube.md', {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js-supabase/articles/README.md',
            articleSidebars.zuminternet("js-supabase"),
          ]
        }
      ],
    }, {
      text: 'Mermaid.js',
      collapsible: true,
      icon: 'iconfont icon-mermaid',
      children: [
        '/programming/js-mermaid/README.md',
        '/programming/js-mermaid/examples.md',
      ]
    }, {
      text: 'CSS',
      collapsible: true,
      icon: 'fa-brands fa-css3-alt',
      children: [
        '/programming/css/README.md',
        '/programming/css/tips.md',
        {
          text: 'Snippets',
          collapsible: true,
          icon: 'fas fa-eye-dropper',
          children: [
            '/programming/css/snippets/README.md',
            '/programming/css/snippets/loader-with-dots.md',
            '/programming/css/snippets/loading-spinner.md',
            '/programming/css/snippets/a-solar-system-orbit.md',
            '/programming/css/snippets/isometric-button.md',
            '/programming/css/snippets/was-this-helpful.md',
            '/programming/css/snippets/digital-clock.md',
            '/programming/css/snippets/otp-input-field.md',
            '/programming/css/snippets/image-color-picker.md',
            '/programming/css/snippets/draggable-element.md',
            '/programming/css/snippets/acme-classic-monster-movie-showcase.md',
            '/programming/css/snippets/hero-with-interactive-snowflake.md',
            '/programming/css/snippets/validating-data-on-inputs-with-the-pattern-attribute.md',
          ]
        },
        '/programming/css/references.md',
        '/programming/css/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/css/articles/README.md',
            articleSidebars.freecodecamp("css"),
            articleSidebars.yozm("css"),
            articleSidebars.frontendmaster("css"),
            articleSidebars.piccalilli("css"),
            articleSidebars.sitepoint("css"),
            articleSidebars.nhn("css"),
            articleSidebars.devtoolstips("css"),
          ]
        }
      ]
    }, {
      text: 'Tailwind CSS',
      collapsible: true,
      icon: 'iconfont icon-tailwindcss',
      children: [
        '/programming/css-tailwind/README.md',
        '/programming/css-tailwind/references.md',
        '/programming/css-tailwind/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/css-tailwind/articles/README.md',
            articleSidebars.freecodecamp("css-tailwind"),
          ]
        }
      ]
    }, {
      text: 'Python',
      collapsible: true,
      icon: 'fa-brands fa-python',
      children: [
        '/programming/py/README.md',
        '/programming/py/references.md',
        '/programming/py/github.md',
        '/programming/py/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py/articles/README.md',
            articleSidebars.freecodecamp("py"),
            articleSidebars.yozm("py"),
            articleSidebars.nhn("py"),
          ]
        }
      ]
    }, {
      text: 'Django',
      collapsible: true,
      icon: 'iconfont icon-django',
      children: [
        '/programming/py-django/README.md',
        '/programming/py-django/query.md',
        '/programming/py-django/github.md',
        '/programming/py-django/references.md',
        '/programming/py-django/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-django/articles/README.md',
            articleSidebars.freecodecamp('py-django'),
          ]
        }
      ]
    }, {
      text: 'Jupyter',
      collapsible: true,
      icon: 'iconfont icon-django',
      children: [
        '/programming/py-jupyter/README.md',
        '/programming/py-jupyter/github.md',
        '/programming/py-jupyter/references.md',
        '/programming/py-jupyter/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-jupyter/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Airflow',
      collapsible: true,
      icon: 'iconfont icon-apacheairflow',
      children: [
        '/programming/py-airflow/README.md',
        '/programming/py-airflow/references.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-airflow/articles/README.md',
            articleSidebars.shopify("py-airflow"),
          ]
        },
      ]
    }, {
      text: 'Objective-C',
      collapsible: true,
      icon: 'iconfont icon-objective-c',
      children: [
        '/programming/objc/README.md',
        '/programming/objc/references.md',
        '/programming/objc/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/objc/articles/README.md',
            articleSidebars.nhn("objc"),
          ]
        }
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/rust/articles/README.md',
            articleSidebars.freecodecamp("rust"),
          ]
        },
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/lua/articles/README.md',
            articleSidebars.linecorp("lua"),
          ]
        },
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
            articleSidebars.freecodecamp("csharp"), 
            articleSidebars.johnnyreilly("csharp"),
            articleSidebars.codemaze("csharp"),
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/go/articles/README.md',
            articleSidebars.freecodecamp("go"),
            articleSidebars.popit("go"),
            articleSidebars.d2("go"),
          ]
        }
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/dart/articles/README.md',
            articleSidebars.freecodecamp("dart"),
          ]
        }
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/php/articles/README.md',
            articleSidebars.freecodecamp("php"),
          ]
        }
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/c/articles/README.md',
            articleSidebars.nhn("c"),
          ]
        }
      ]
    }, {
      text: 'C++',
      collapsible: true,
      icon: 'iconfont icon-cpp',
      children: [
        '/programming/cpp/README.md',
        '/programming/cpp/tips.md',
        '/programming/cpp/references.md',
        '/programming/cpp/github.md',
        '/programming/cpp/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            'programming/cpp/articles/README.md',
            articleSidebars.freecodecamp("cpp"), 
            articleSidebars.nhn("cpp"), 
            articleSidebars.d2("cpp"),
          ]
        }
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
      text: 'Solidity',
      collapsible: true,
      icon: 'iconfont icon-solidity',
      children: [
        '/programming/solidity/README.md',
        '/programming/solidity/references.md',
        '/programming/solidity/github.md',
        '/programming/solidity/youtube.md',
      ]
    }, {
      text: 'Common Lisp',
      collapsible: true,
      icon: 'iconfont icon-common-lisp',
      children: [
        '/programming/common-lisp/README.md',
        '/programming/common-lisp/references.md',
        '/programming/common-lisp/github.md',
        '/programming/common-lisp/youtube.md', 
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            'programming/common-lisp/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Julia',
      collapsible: true,
      icon: 'iconfont icon-julia',
      children: [
        '/programming/julia/README.md',
        '/programming/julia/references.md',
        '/programming/julia/github.md',
        '/programming/julia/youtube.md', 
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            'programming/julia/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'LaTeX',
      collapsible: true,
      icon: 'iconfont icon-tex',
      children: [
        '/programming/latex/README.md',
        '/programming/latex/snippets.md',
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
      text: 'Xcode',
      collapsible: true,
      icon: 'iconfont icon-xcode',
      children: [
        '/tool/xcode/README.md',
        '/tool/xcode/references.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/xcode/articles/README.md',            
          ]
        }
      ]
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
            articleSidebars.yozm("intellij-idea")
          ]
        }
      ]
    }, {
      text: 'Visual Studio',
      collapsible: true,
      icon: 'iconfont icon-visualstudio',
      children: [
        '/tool/visualstudio/README.md',
        '/tool/visualstudio/plugins.md',
        '/tool/visualstudio/troubleshooting.md',
        '/tool/visualstudio/references.md',
        '/tool/visualstudio/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/visualstudio/articles/README.md',
            // articleSidebars.yozm("intellij-idea")
          ]
        }
      ]
    }, {
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
            articleSidebars.yozm("vscode"),
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
        '/tool/xls/README.md',
        '/tool/xls/references.md',
        '/tool/xls/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/xls/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Powerpoint',
      collapsible: true,
      icon: 'iconfont icon-microsoftpowerpoint',
      children: [
        '/tool/ppt/README.md',
        '/tool/ppt/references.md',
        '/tool/ppt/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/ppt/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Power Bi',
      icon: 'iconfont icon-power-bi',
      collapsible: true,
      children: [
        '/tool/power-bi/README.md',
        '/tool/power-bi/references.md',
        '/tool/power-bi/youtube.md',
      ]
    }, {
      text: 'Chrome Browser',
      collapsible: true,
      icon: 'fa-brands fa-chrome',
      children: [
        '/tool/chrome/README.md',
        '/tool/chrome/plugins.md',
        '/tool/chrome/references.md',
        '/tool/chrome/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/chrome/articles/README.md',
            articleSidebars.devtoolstips("chrome"),
            articleSidebars.zuminternet("chrome"),
          ]
        }
      ]
    }, {
      text: 'Firefox',
      collapsible: true,
      icon: 'fa-brands fa-firefox-browser',
      children: [
        '/tool/firefox/README.md',
        '/tool/firefox/plugins.md',
        '/tool/firefox/references.md',
        '/tool/firefox/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/firefox/articles/README.md',
            articleSidebars.devtoolstips("firefox"),
          ]
        }
      ]
    }, {
      text: 'Safari',
      collapsible: true,
      icon: 'fa-brands fa-safari',
      children: [
        '/tool/safari/README.md',
        '/tool/safari/references.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/safari/articles/README.md',
            articleSidebars.devtoolstips("safari"),
          ]
        }
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
      text: 'Figma',
      collapsible: true,
      icon: 'fa-brands fa-figma',
      children: [
        '/tool/figma/README.md',
        '/tool/figma/plugins.md',
        '/tool/figma/references.md',
        '/tool/figma/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/figma/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Sketch',
      collapsible: true,
      icon: 'fa-brands fa-sketch',
      children: [
        '/tool/sketch/README.md',
        '/tool/sketch/plugins.md',
        '/tool/sketch/references.md',
        '/tool/sketch/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/sketch/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'crontab',
      collapsible: true,
      icon: 'iconfont icon-crontab',
      children: [
        '/tool/crontab/README.md',
        '/tool/crontab/references.md',
        '/tool/crontab/youtube.md',
      ]
    }, {
      text: 'rsync',
      collapsible: true,
      icon: 'iconfont icon-rsync',
      children: [
        '/tool/rsync/README.md',
        '/tool/rsync/references.md',
        '/tool/rsync/youtube.md',
      ]
    }, {
      text: 'ffmpeg',
      collapsible: true,
      icon: 'iconfont icon-ffmpeg',
      children: [
        '/tool/ffmpeg/README.md',
        '/tool/ffmpeg/references.md',
        '/tool/ffmpeg/youtube.md',
      ]
    }, {
      text: 'tmux',
      collapsible: true,
      icon: 'iconfont icon-tmux',
      children: [
        '/tool/tmux/README.md',
        '/tool/tmux/references.md',
        '/tool/tmux/youtube.md',
      ]
    }, {
      text: 'Vim',
      collapsible: true,
      icon: 'iconfont icon-vim',
      children: [
        '/tool/vim/README.md',
        '/tool/vim/tips.md',
        '/tool/vim/neovim.md',
        '/tool/vim/github.md',
        '/tool/vim/references.md',
        '/tool/vim/youtube.md',
      ]
    }, {
      text: 'awk',
      collapsible: true,
      icon: 'iconfont icon-awk',
      children: [
        '/tool/awk/README.md',
        '/tool/awk/references.md',
        '/tool/awk/youtube.md',
      ]
    }, {
      text: 'wget',
      collapsible: true,
      icon: 'iconfont icon-wget',
      children: [
        '/tool/wget/README.md',
        '/tool/wget/references.md',
        '/tool/wget/youtube.md',
      ]
    }, {
      text: 'nmap',
      collapsible: true,
      icon: 'iconfont icon-nmap',
      children: [
        '/tool/nmap/README.md',
        '/tool/nmap/references.md',
        '/tool/nmap/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/nmap/articles/README.md',
          ]
        }
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
    }, {
      text: 'Tableau',
      collapsible: true,
      icon: 'iconfont icon-tableau',
      children: [
        '/tool/tableau/README.md',
        '/tool/tableau/references.md',
        '/tool/tableau/youtube.md',
      ]
    }, {
      text: 'Airtable',
      collapsible: true,
      icon: 'iconfont icon-airtable',
      children: [
        '/tool/airtable/README.md',
        '/tool/airtable/references.md',
        '/tool/airtable/youtube.md',
      ]
    }, {
      text: 'Slack',
      collapsible: true,
      icon: 'fa-brands fa-slack',
      children: [
        '/tool/slack/README.md',
        '/tool/slack/plugins.md',
        '/tool/slack/references.md',
        '/tool/slack/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/slack/articles/README.md',
          ]
        }
      ]
    }, 
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/github/articles/README.md',
            articleSidebars.freecodecamp('github'),
            articleSidebars.linecorp("github"),
          ]
        }
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/macos/articles/README.md',
            articleSidebars.freecodecamp("macos"),
          ]
        }
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/windows/articles/README.md',
            articleSidebars.yozm("windows"),
          ]
        }
      ]
    }, {
      text: 'Linux - Debian',
      collapsible: true,
      icon: 'fa-brands fa-debian',
      children: [
        '/devops/linux-debian/README.md',
        '/devops/linux-debian/env-setup.md',
        {
          text: 'Ubuntu',
          collapsible: true,
          icon: 'fa-brands fa-ubuntu',
          children: [
            '/devops/linux-debian/ubuntu/README.md',
            '/devops/linux-debian/ubuntu/references.md',
            '/devops/linux-debian/ubuntu/youtube.md',
          ]
        }, {
          text: 'Kali Linux',
          collapsible: true,
          icon: 'iconfont icon-kali-linux',
          children: [
            '/devops/linux-debian/kali-linux/README.md',
            '/devops/linux-debian/kali-linux/references.md',
            '/devops/linux-debian/kali-linux/youtube.md',
          ]
        }, {
          text: 'Alpine',
          collapsible: true,
          icon: 'iconfont icon-alpine',
          children: [
            '/devops/linux-debian/alpine/README.md',
            '/devops/linux-debian/alpine/references.md',
            '/devops/linux-debian/alpine/youtube.md',
          ]
        }, {
          text: 'Raspberry Pi',
          collapsible: true,
          icon: 'fa-brands fa-raspberry-pi',
          children: [
            '/devops/linux-debian/raspberry-pi/README.md',
            '/devops/linux-debian/raspberry-pi/references.md',
            '/devops/linux-debian/raspberry-pi/youtube.md',
          ]
        },
        '/devops/linux-debian/references.md',
        '/devops/linux-debian/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/linux-debian/articles/README.md',
            articleSidebars.nhn("linux-debian"),
          ]
        }
      ]
    }, {
      text: 'Linux - Fedora',
      collapsible: true,
      icon: 'fa-brands fa-fedora',
      children: [
        '/devops/linux-fedora/README.md',
        '/devops/linux-fedora/env-setup.md',
        {
          text: 'CentOS',
          collapsible: true,
          icon: 'fa-brands fa-ubuntu',
          children: [
            '/devops/linux-fedora/centos/README.md',
            '/devops/linux-fedora/centos/references.md',
            '/devops/linux-fedora/centos/youtube.md',
          ]
        }, 
        '/devops/linux-fedora/references.md',
        '/devops/linux-fedora/youtube.md',
        
      ]
    }, {
      text: 'Linux - NixOS',
      collapsible: true,
      icon: 'iconfont icon-nixos',
      children: [
        '/devops/linux-nixos/README.md',
        '/devops/linux-nixos/env-setup.md',
        '/devops/linux-nixos/references.md',
        '/devops/linux-nixos/youtube.md',
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
    }, {
      text: 'KVM',
      collapsible: true,
      icon: 'fa-brands fa-linux',
      children: [
        '/devops/kvm/README.md',
        '/devops/kvm/references.md',
        '/devops/kvm/youtube.md',
      ]
    }, {
      text: 'Virtualbox',
      collapsible: true,
      icon: 'iconfont icon-virtualbox',
      children: [
        '/devops/virtualbox/README.md',
        '/devops/virtualbox/references.md',
        '/devops/virtualbox/youtube.md',
      ]
    }, {
      text: 'Vagrant',
      collapsible: true,
      icon: 'iconfont icon-vagrant',
      children: [
        '/devops/vagrant/README.md',
        '/devops/vagrant/references.md',
        '/devops/vagrant/youtube.md',
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
            articleSidebars.yozm("docker"),
            articleSidebars.towardsdatascience("docker"),
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
            articleSidebars.towardsdatascience("podman"),
          ]
        }
      ]
    }, {
      text: 'Kubernetes',
      collapsible: true,
      icon: 'fas fa-dharmachakra',
      children: [
        '/devops/k8s/README.md',
        '/devops/k8s/references.md',
        '/devops/k8s/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/k8s/articles/README.md',
            articleSidebars.freecodecamp("k8s"),
            articleSidebars.yozm("k8s"),
            articleSidebars.digitalocean("k8s"),
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
      text: 'Terraform',
      collapsible: true,
      icon: 'iconfont icon-terraform',
      children: [
        '/devops/terraform/README.md',
        '/devops/terraform/references.md',
        '/devops/terraform/github.md',
        '/devops/terraform/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/terraform/articles/README.md',
          ]
        }
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
            articleSidebars.freecodecamp("aws"),
            articleSidebars.yozm("aws"),
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/azure/articles/README.md',
            articleSidebars.freecodecamp("azure"), 
          ]
        }
      ]
    }, {
      text: 'Google Cloud',
      collapsible: true,
      icon: 'iconfont icon-gcp',
      children: [
        '/devops/gcp/README.md',
        '/devops/gcp/references.md',
        '/devops/gcp/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/gcp/articles/README.md',
            articleSidebars.yozm("gcp"), 
          ]
        }
      ]
    }, {
      text: 'OCI',
      collapsible: true,
      icon: 'iconfont icon-oci',
      children: [
        '/devops/oci/README.md',
        '/devops/oci/references.md',
        '/devops/oci/youtube.md',
      ]
    }, {
      text: 'NCloud',
      collapsible: true,
      icon: 'iconfont icon-naver',
      children: [
         '/devops/ncloud/README.md',
         '/devops/ncloud/geolocation.md',
         '/devops/ncloud/references.md',
        ]
    }, {
      text: 'Ansible',
      collapsible: true,
      icon: 'iconfont icon-ansible',
      children: [
        '/devops/ansible/README.md',
        '/devops/ansible/references.md',
        '/devops/ansible/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/ansible/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'NAS',
      collapsible: true,
      icon: 'iconfont icon-nas',
      children: [
        '/devops/nas/README.md',
        '/devops/nas/references.md',
        '/devops/nas/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/nas/articles/README.md',
          ]
        }
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
            articleSidebars.yozm("security"),
            articleSidebars.nhn("security"),
            articleSidebars.d2("security"),
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
      text: 'Selenium',
      collapsible: true,
      icon: 'iconfont icon-selenium',
      children: [
        '/devops/selenium/README.md',
        '/devops/selenium/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/selenium/articles/README.md',
            articleSidebars.freecodecamp("selenium"),
          ]
        },
      ],
    }, {
      text: 'Playwright',
      collapsible: true,
      icon: 'iconfont icon-playwright',
      children: [
        '/devops/playwright/README.md',
        '/devops/playwright/references.md',
        '/devops/playwright/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/playwright/articles/README.md',
            articleSidebars.woowahan("playwright")
          ]
        },
      ],
    }, {
      text: 'JMeter',
      collapsible: true,
      icon: 'iconfont icon-apachejmeter',
      children: [
        '/devops/jmeter/README.md',
        '/devops/jmeter/references.md',
        '/devops/jmeter/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/jmeter/articles/README.md',
            articleSidebars.imqa("jmeter"),
          ]
        },
      ]
    }, {
      text: 'Gatling',
      collapsible: true,
      icon: 'iconfont icon-gatling',
      children: [
        '/devops/gatling/README.md',
        '/devops/gatling/references.md',
        '/devops/gatling/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/gatling/articles/README.md',
            articleSidebars.imqa("gatling"),
          ]
        },
      ]
    }, {
      text: 'Nexus Repository',
      collapsible: true,
      icon: 'fas fa-kaaba',
      children: [
        '/devops/nexus/README.md',
        '/devops/nexus/tips.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
           '/devops/nexus/articles/README.md',
            articleSidebars.droidcon("nexus"),
          ]
        }
      ]
    }, {
      text: 'Tomcat',
      collapsible: true,
      icon: 'iconfont icon-tomcat',
      children: [
        '/devops/tomcat/README.md',
        '/devops/tomcat/basics.md',
        '/devops/tomcat/references.md',
        '/devops/tomcat/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/tomcat/articles/README.md',
          ]
        },
      ] 
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
  ], '/data-science/': [
    {
      text: 'Data Science',
      icon: 'fas fa-database',
      children: [ '/data-science/README.md' ],
    }, {
      text: 'MySQL',
      collapsible: true,
      icon: 'iconfont icon-mysql',
      children: [
        '/data-science/mysql/README.md',
        '/data-science/mysql/query.md',
        '/data-science/mysql/references.md',
        '/data-science/mysql/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/mysql/articles/README.md',
            articleSidebars.linecorp("mysql"),
          ]
        },
      ]
    }, {
      text: 'Oracle SQL',
      collapsible: true,
      icon: 'iconfont icon-oracle',
      children: [
        '/data-science/oracle/README.md',
        '/data-science/oracle/query.md',
        '/data-science/oracle/references.md',
        '/data-science/oracle/youtube.md',
      ]
    }, {
      text: 'Microsoft SQL Server',
      collapsible: true,
      icon: 'iconfont icon-sqlserver',
      children: [
        '/data-science/mssql/README.md',
        '/data-science/mssql/query.md',
        '/data-science/mssql/references.md',
        '/data-science/mssql/youtube.md',
      ]
    }, {
      text: 'Cubrid',
      collapsible: true,
      icon: 'iconfont icon-cubrid',
      children: [
        '/data-science/cubrid/README.md',
        '/data-science/cubrid/cli.md',
        '/data-science/cubrid/query.md',
        '/data-science/cubrid/docker.md',
        '/data-science/cubrid/references.md',
      ]
    }, {
      text: 'PostgreSQL',
      collapsible: true,
      icon: 'iconfont icon-postgresql',
      children: [
        '/data-science/postgres/README.md',
        '/data-science/postgres/query.md',
        '/data-science/postgres/references.md',
        '/data-science/postgres/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/postgres/articles/README.md',
            articleSidebars.freecodecamp("postgres"), 
            articleSidebars.linecorp("postgres"),
          ]
        },
      ]
    }, {
      text: 'MongoDB',
      collapsible: true,
      icon: 'iconfont icon-mongodb',
      children: [
        '/data-science/mongodb/README.md',
        // '/data-science/mongodb/query.md',
        '/data-science/mongodb/references.md',
        '/data-science/mongodb/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/mongodb/articles/README.md',
            articleSidebars.d2("hadoop"),
          ]
        }
      ]
    }, {
      text: 'Altibase',
      collapsible: true,
      icon: 'iconfont icon-altibase',
    children: [
        '/data-science/altibase/README.md',
        '/data-science/altibase/query.md',
        '/data-science/altibase/references.md',
      ]
    }, {
      text: 'Tibero',
      collapsible: true,
      icon: 'fas fa-t',
      children: [
        '/data-science/tibero/README.md',
        '/data-science/tibero/query.md',
      ]
    }, {
      text: 'SQLite',
    collapsible: true,
      icon: 'iconfont icon-sqlite',
      children: [
        '/data-science/sqlite/README.md',
        '/data-science/sqlite/references.md',
        '/data-science/sqlite/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/sqlite/articles/README.md',
          ]
        },
      ]
    }, {
      text: 'Redis',
      collapsible: true,
      icon: 'iconfont icon-redis',
      children: [
        '/data-science/redis/README.md',
        '/data-science/redis/references.md',
        '/data-science/redis/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/redis/articles/README.md',
            articleSidebars.zuminternet("redis"),
          ]
        },
      ]
    }, {
      text: 'RockDB',
      collapsible: true,
      icon: 'iconfont icon-rocksdb',
      children: [
        '/data-science/rocksdb/README.md',
        '/data-science/rocksdb/references.md',
        '/data-science/rocksdb/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/rocskdb/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Cockroach',
      collapsible: true,
      icon: 'iconfont icon-cockroach-db',
      children: [
        '/data-science/cockroach/README.md',
        '/data-science/cockroach/query.md',
        '/data-science/cockroach/references.md',
      ]
    }, {
      text: 'R',
      collapsible: true,
      icon: 'iconfont icon-r',
      children: [
        '/data-science/r/README.md',
        '/data-science/r/references.md',
        '/data-science/r/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/r/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Cassandra',
      collapsible: true,
      icon: 'iconfont icon-apachecassandra',
      children: [
        '/data-science/cassandra/README.md',
        '/data-science/cassandra/references.md',
        '/data-science/cassandra/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/cassandra/articles/README.md',
            articleSidebars.nhn("cassandra"),
          ]
        }
      ]
    }, {
      text: 'Hadoop',
      collapsible: true,
      icon: 'iconfont icon-hadoop',
      children: [
        '/data-science/hadoop/README.md',
        '/data-science/hadoop/references.md',
        '/data-science/hadoop/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/hadoop/articles/README.md',
            articleSidebars.d2("hadoop"),
          ]
        }
      ]
    }, {
      text: 'Spark',
      collapsible: true,
      icon: 'iconfont icon-apachespark',
      children: [
        '/data-science/spark/README.md',
        '/data-science/spark/references.md',
        '/data-science/spark/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/spark/articles/README.md',
            articleSidebars.popit("spark"),
          ]
        }
      ]
    }, 
  ], '/ai/': [
    {
      text: 'AI',
      icon: 'fas fa-brain',
      children: [ 
        '/ai/README.md',
        '/ai/references.md',
      ],
    }, {
      text: 'OpenAI',
      collapsible: true,
      icon: 'iconfont icon-openai',
      children: [
        '/ai/openai/README.md',
        '/ai/openai/references.md',
        '/ai/openai/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/ai/openai/articles/README.md',
            articleSidebars.d2("openai"),
          ]
        }
      ]
    }, {
      text: 'Github Copilot',
      collapsible: true,
      icon: 'iconfont icon-copilot',
      children: [
        '/ai/github-copilot/README.md',
        '/ai/github-copilot/references.md',
        '/ai/github-copilot/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/ai/github-copilot/articles/README.md',
          ]
        }
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
        '/ai/gemini/youtube.md',
      ]
    },  {
      text: 'Claude',
      collapsible: true,
      icon: 'iconfont icon-claude',
      children: [
        '/ai/claude/README.md',
        '/ai/claude/references.md',
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
      text: 'Career',
      collapsible: true,
      icon: 'fas fa-user-tie',
      children: [
        '/projects/career/README.md',
        '/projects/career/youtube.md',
        '/projects/career/references.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/projects/career/articles/README.md',
            articleSidebars.yozm("career"),
          ]
        }
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
    }, 
  ],
  '/explore/': [
    {
      text: 'Explore',
      icon: 'fas fa-globe',
      children: [ 
        '/explore/README.md',
        '/explore/newsletter.md',
        '/explore/study.md',
      ],
    }, {
      text: 'API',
      collapsible: true,
      icon: 'iconfont icon-api',
      children: [
        '/explore/api/README.md',
        {
          text: 'Kakao',
          collapsible: true,
          icon: 'iconfont icon-kakao',
          children: [
            '/explore/api/kakao/README.md',
            '/explore/api/kakao/local.md',
            '/explore/api/kakao/push.md',
            '/explore/api/kakao/references.md'
          ]
        }, {
          text: 'SK open API',
          collapsible: true,
          icon: 'iconfont icon-sk',
          children: [
            '/explore/api/sk/README.md',
            '/explore/api/sk/local.md',
          ]
        },
        '/explore/api/list.md',
        '/explore/api/references.md',
      ],
    }, {
      text: 'Youtube',
      collapsible: true,
      icon: 'fa-brands fa-youtube',
      children: [
        '/explore/youtube/README.md',
        '/explore/youtube/watch-later.md',
        '/explore/youtube/watch-later-tutorial.md',
        '/explore/youtube/watch-later-keynote.md',
      ]
    }, {
      text: 'Article(s)',
      collapsible: true,
      icon: 'fas fa-square-share-nodes',
      children: [
        articleSidebars.yozm(), 
        articleSidebars.popit(), 
        articleSidebars.freecodecamp(), 
        articleSidebars.frontendmaster(),
        articleSidebars.digitalocean(),
        articleSidebars.devkuma(),
        articleSidebars.devtoolstips(),
        articleSidebars.piccalilli(),
        articleSidebars.sitepoint(),
        articleSidebars.gangnamunni(),
        articleSidebars.towardsdatascience(),
        articleSidebars.douggregor(), 
        articleSidebars.donnywals(), 
        hackingwithswift(),
        articleSidebars.ktAcademy(),
        articleSidebars.johnnyreilly(),
        articleSidebars.codemaze(),
        articleSidebars.droidcon(),
        articleSidebars.shopify(),
        articleSidebars.rutgoLetsgo(),
        articleSidebars.woowahan(), 
        articleSidebars.d2(), 
        articleSidebars.nhn(),
        articleSidebars.linecorp(),
        articleSidebars.banksalad(),
        articleSidebars.oliveyoung(),
        articleSidebars.gmarket(),
        articleSidebars.zuminternet(),
        articleSidebars.imqa(),
      ]
    },
  ],
  '/academics/': [
    {
      text: 'Academics',
      icon: 'fas fa-graduation-cap',
      children: [ '/academics/README.md' ],
    }, {
      text: 'Data Structure',
      icon: 'iconfont icon-class',
      children: [
        '/academics/data-structure/README.md',
        '/academics/data-structure/references.md',
        '/academics/data-structure/youtube.md',
      ]
    }, {
      text: 'System Design',
      collapsible: true,
      icon: 'fas fa-pen-ruler',
      children: [
        '/academics/system-design/README.md',
        '/academics/system-design/references.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/academics/system-design/articles/README.md',
            articleSidebars.oliveyoung("system-design"),
          ]
        }
      ]
    }, {
      text: 'Project Management',
      collapsible: true,
      icon: 'fas fa-object-group',
      children: [
        '/academics/pm/README.md',
        '/academics/pm/references.md',
        '/academics/pm/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/academics/pm/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Marketing',
      collapsible: true,
      icon: 'fas fa-rectangle-ad',
      children: [
        '/academics/marketing/README.md',
        '/academics/marketing/references.md',
        '/academics/marketing/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/academics/marketing/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'General',
      collapsible: true,
      icon: 'fas fa-square-root-variable',
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