import { sidebar } from 'vuepress-theme-hope'
import { articleSidebars as asb } from './articles'

export const sidebarEn = sidebar({
  '/about/': [
    {
      text: 'Portfolio',
      icon: 'fas fa-pen-nib',
      children: [
        '/about/README.md',
        {
          text: '지노시스템(주)',
          collapsible: true,
          icon: '/images/about/ginno/logo.jpeg',
          children: [
            '/about/ginno/README.md',
            '/about/ginno/spms.md',
            '/about/ginno/safecity.md',
            '/about/ginno/ndms.md',
          ]
        }, 
        {
          text: '풀이러닝(주)',
          collapsible: true,
          icon: '/images/about/poole/poolemath-ico.png',
          children: [
            '/about/poole/README.md',
          ]
        }
      ]
    }
  ],
  '/programming/': [
    {
      text: '/Programming',
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
            asb.freecodecamp("sh"),
            asb.smashingmagazion("sh"),
            asb.tecmint("sh"),
            asb.onceupon("sh"),
            asb.yozm("sh"),
            asb.devkuma("sh"),
            asb.nhn("sh"),
            asb.d2("sh"),
            asb.linecorp("sh"),
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
            asb.freecodecamp("git"),
            asb.learnk8s("git"),
            asb.yozm("git"),
            asb.d2("git"),
            asb.nhn("git"),
            asb.woowahan("git"),
            asb.linecorp("git"),
          ]
        }
      ]
    }, {
      text: 'Gradle',
      collapsible: true,
      icon: 'iconfont icon-gradle',
      children: [
        '/programming/gradle/README.md',
        {
          text: 'Snippets',
          collapsible: true,
          icon: 'fas fa-eye-dropper',
          children: [
            '/programming/gradle/snippets/README.md',
            '/programming/gradle/snippets/rename-subproject.md',
            '/programming/gradle/snippets/manage-multi-module-project.md',
            '/programming/gradle/snippets/configure-java.md',
            '/programming/gradle/snippets/create-fatjar.md',
            '/programming/gradle/snippets/create-war.md',
            '/programming/gradle/snippets/open-url-in-browser.md',
            '/programming/gradle/snippets/explore-directory.md',
            '/programming/gradle/snippets/kotlin-dsl-android.md',
          ]
        },
        '/programming/gradle/troubleshooting.md',
        '/programming/gradle/references.md',
        '/programming/gradle/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/gradle/articles/README.md',
            asb.freecodecamp("gradle"),
            asb.kodeco("gradle"),
            asb.shopify("gradle"),
            asb.linecorp("gradle"),
          ]
        },
      ]
    }, {
      text: 'Maven',
      collapsible: true,
      icon: 'iconfont icon-maven',
      children: [
        '/programming/mvn/README.md',
        '/programming/mvn/snippets.md',
        '/programming/mvn/references.md',
        '/programming/mvn/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/mvn/articles/README.md',
            asb.yozm("maven"),
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
            asb.freecodecamp("java"),
            asb.kodeco("kotlin"),
            asb.ktAcademy("kotlin"),
            asb.droidcon("kotlin"),
            asb.eventDriven("java"),
            asb.yozm("java"),
            asb.nhn("java"),
            asb.d2("java"),
            asb.gangnamunni("java"),
            asb.gangnamunni("kotlin"),
            asb.linecorp("kotlin"),
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
            asb.freecodecamp("java-spring"),
            asb.yozm("java-spring"),
            asb.ktAcademy("kotlin-spring"),
            asb.rutgoLetsgo("java-spring"),
            asb.kakaoTech("kotlin-spring"),
            asb.kakaoPayTech("java-spring"),
            asb.nhn("java-spring"),
            asb.d2("java-spring"), 
            asb.woowahan("java-spring"),
            asb.gangnamunni("java-spring"),
            asb.gmarket("java-spring"),
            asb.linecorp("java-spring"),
            asb.linecorp("kotlin-spring"),
            asb.zuminternet("java-spring"),
            asb.kurly("java-spring"),
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
            asb.freecodecamp("java-android"),
            asb.kodeco("java-android"),
            asb.kodeco("kotlin-android"),
            asb.kotzilla("kotlin-android"),
            asb.yozm("java-android"),
            asb.droidcon("kotlin-android"),
            asb.ktAcademy("kotlin-android"),
            asb.nhn("java-android"),
            asb.d2("java-android"),
            asb.banksalad("java-android"),
            asb.gangnamunni("java-android"),
            asb.antonioleiva("kotlin-android"),
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
            asb.digitalocean("java-kafka"),
            asb.learnk8s("java-kafka"),
            asb.popit("java-kafka"),
            asb.d2("java-kafka"),
          ]
        }
      ]
    }, {
      text: 'Quarkus',
      collapsible: true,
      icon: 'iconfont icon-quarkus',
      children: [
        '/programming/java-quarkus/README.md',
        '/programming/java-quarkus/references.md',
        '/programming/java-quarkus/github.md',
        '/programming/java-quarkus/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/java-quarkus/articles/README.md',
            asb.freecodecamp("java-quarkus"),
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
            asb.linecorp("java-armeria"),
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
            asb.learnk8s("java-elasticsearch"),
            asb.codemaze("java-elasticsearch"),
            asb.popit("java-elasticsearch"),
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
        {
          text: 'Snippets',
          collapsible: true,
          icon: 'fas fa-eye-dropper',
          children: [
            '/programming/swift/snippets/README.md',
            '/programming/swift/snippets/side-menu.md',
          ]
        },
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
            asb.hackingwithswift(),
            asb.kodeco("swift"),
            asb.yozm("swift"),
            asb.douggregor("swift"), 
            asb.donnywals("swift"), 
            asb.gangnamunni("swift"),
            asb.zuminternet("swift"),
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
            asb.freecodecamp("js"),
            asb.frontendmaster("js"),
            asb.sitepoint("js"),
            asb.yozm("js"),
            asb.nhn("js"),
            asb.d2("js"),
            asb.devtoolstips("js"),
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
            asb.freecodecamp("npm"),
            asb.woowahan("npm"),
            asb.toss("npm"),
          ]
        }
      ],
    }, {
      text: 'TypeScript',
      collapsible: true,
      icon: 'iconfont icon-typescript',
      children: [
        '/programming/ts/README.md',
        '/programming/ts/snippets.md',
        '/programming/ts/references.md',
        '/programming/ts/github.md',
        '/programming/ts/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/ts/articles/README.md',
            asb.freecodecamp("ts"),
            asb.frontendmaster("ts"),
            asb.yozm("ts"),
            asb.d2("ts"),
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
        '/programming/js-node/references.md',
        '/programming/js-node/github.md',
        '/programming/js-node/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js-node/articles/README.md',
            asb.freecodecamp("js-node"),
            asb.frontendmaster("js-node"), 
            asb.digitalocean("js-node"), 
            asb.smashingmagazion("js-node"), 
            asb.learnk8s("js-node"),
            asb.milanJovanovic("js-node"),
            asb.tecmint("js-node"),
            asb.sitepoint("js-node"),
            asb.eventDriven("js-node"),
            asb.yozm("js-node"),
            asb.kakaoTech("js-node"),
            asb.kakaoEnt("js-node"),
            asb.d2("js-node"), 
            asb.nhn("js-node"),
            asb.linecorp("js-node"),
            asb.woowahan("js-node"),
            asb.johnnyreilly("js-node"),
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
            asb.freecodecamp("js-react"),
            asb.kodeco("js-react"),
            asb.smashingmagazion("js-react"),
            asb.logrocket("js-react"),
            asb.yozm("js-react"),
            asb.kakaoTech("js-react"),
            asb.kakaoEnt("js-react"),
            asb.woowahan("js-react"),
            asb.inflab("js-react"),
            asb.gmarket("js-react"),
            asb.zuminternet("js-react"),
            asb.sitepoint("js-react"),
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
            asb.freecodecamp("js-vue"),
            asb.yozm("js-vue"),
            asb.zuminternet("js-vue"),
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
            asb.frontendmaster("js-svelte"),
            asb.logrocket("js-svelte"),
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js-angular/articles/README.md',
            asb.freecodecamp("js-angular"),
            asb.codemaze("js-angular"),
          ]
        }
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
            asb.freecodecamp("js-nest"),
            asb.yozm("js-nest"),
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
            asb.freecodecamp("js-next"),
            asb.yozm("js-next"),
            asb.kakaoEnt("js-next"),
            asb.toss("js-next"),
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
            asb.toast("js-storybook"),
          ]
        }
      ]
    }, {
      text: 'Gatsby',
      collapsible: true,
      icon: 'iconfont icon-gatsby',
      children: [
        '/programming/js-gatsby/README.md',
        '/programming/js-gatsby/references.md',
        '/programming/js-gatsby/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js-gatsby/articles/README.md',
            asb.freecodecamp("js-gatsby"),
            asb.smashingmagazion("js-gatsby"),
          ]
        }
      ]
    }, {
      text: 'Supabase',
      collapsible: true,
      icon: 'iconfont icon-supabase',
      children: [
        '/programming/js-supabase/README.md',
        '/programming/js-supabase/references.md',
        '/programming/js-supabase/youtube.md', 
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/js-supabase/articles/README.md',
            asb.freecodecamp("js-supabase"),
            asb.zuminternet("js-supabase"),
          ]
        }
      ],
    }, {
      text: 'Mermaid.js',
      collapsible: true,
      icon: 'iconfont icon-mermaid',
      children: [
        '/programming/js-mermaid/README.md',
        '/programming/js-mermaid/snippets.md',
        '/programming/js-mermaid/references.md',
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
            asb.freecodecamp("css"),
            asb.frontendmaster("css"),
            asb.smashingmagazion("css"),
            asb.logrocket("css"),
            asb.yozm("css"),
            asb.piccalilli("css"),
            asb.sitepoint("css"),
            asb.nhn("css"),
            asb.devtoolstips("css"),
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
            asb.freecodecamp("css-tailwind"), 
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
            asb.freecodecamp("py"),
            asb.digitalocean("py"),
            asb.yozm("py"),
            asb.nhn("py"),
            asb.ab180("py"),
          ]
        }
      ]
    }, {
      text: 'NumPy',
      collapsible: true,
      icon: 'iconfont icon-numpy',
      children: [
        '/programming/py-numpy/README.md',
        '/programming/py-numpy/references.md',
        '/programming/py-numpy/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-numpy/articles/README.md',
            asb.freecodecamp("py-numpy"),
          ]
        },
      ]
    }, {
      text: 'Pandas',
      collapsible: true,
      icon: 'iconfont icon-pandas',
      children: [
        '/programming/py-pandas/README.md',
        '/programming/py-pandas/references.md',
        '/programming/py-pandas/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-pandas/articles/README.md',
          ]
        },
      ]
    }, {
      text: 'PyTorch',
      collapsible: true,
      icon: 'iconfont icon-pytorch',
      children: [
        '/programming/py-torch/README.md',
        '/programming/py-torch/references.md',
        '/programming/py-torch/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-torch/articles/README.md',
          ]
        },
      ]
    }, {
      text: 'Tensorflow',
      collapsible: true,
      icon: 'iconfont icon-tensorflow',
      children: [
        '/programming/py-tensorflow/README.md',
        '/programming/py-tensorflow/references.md',
        '/programming/py-tensorflow/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-tensorflow/articles/README.md',
          ]
        },
      ]
    }, {
      text: 'Keras',
      collapsible: true,
      icon: 'iconfont icon-keras',
      children: [
        '/programming/py-keras/README.md',
        '/programming/py-keras/references.md',
        '/programming/py-keras/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-keras/articles/README.md',
          ]
        },
      ]
    }, {
      text: 'Django',
      collapsible: true,
      icon: 'iconfont icon-django',
      children: [
        '/programming/py-django/README.md',
        '/programming/py-django/github.md',
        '/programming/py-django/references.md',
        '/programming/py-django/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-django/articles/README.md',
            asb.freecodecamp('py-django'),
            asb.digitalocean('py-django'),
          ]
        }
      ]
    }, {
      text: 'Flask',
      collapsible: true,
      icon: 'iconfont icon-flask',
      children: [
        '/programming/py-flask/README.md',
        '/programming/py-flask/references.md',
        '/programming/py-flask/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-flask/articles/README.md',
            asb.freecodecamp('py-flask'),
            asb.yozm('py-flask'),
          ]
        },
      ]
    }, {
      text: 'FastAPI',
      collapsible: true,
      icon: 'iconfont icon-fastapi',
      children: [
        '/programming/py-fastapi/README.md',
        '/programming/py-fastapi/references.md',
        '/programming/py-fastapi/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-fastapi/articles/README.md',
          ]
        },
      ]
    }, {
      text: 'Jupyter',
      collapsible: true,
      icon: 'iconfont icon-jupyter',
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
            asb.freecodecamp("py-jupyter"),
            asb.nhn("py-jupyter"),
          ]
        }
      ]
    }, {
      text: 'Celery',
      collapsible: true,
      icon: 'iconfont icon-py-celery',
      children: [
        '/programming/py-celery/README.md',
        '/programming/py-celery/tips.md',
        '/programming/py-celery/references.md',
        '/programming/py-celery/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-celery/articles/README.md',
            asb.learnk8s("py-celery"),
          ]
        }
      ]
    }, {
      text: 'Locust',
      collapsible: true,
      icon: 'iconfont icon-py-locust',
      children: [
        '/programming/py-locust/README.md',
        '/programming/py-locust/tips.md',
        '/programming/py-locust/references.md',
        '/programming/py-locust/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/py-locust/articles/README.md',
            asb.learnk8s("py-locust"),
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
            asb.shopify("py-airflow"),
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
            asb.nhn("objc"),
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
            asb.freecodecamp("rust"),
            asb.yozm("rust"),
          ]
        },
      ]
    }, {
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
            asb.linecorp("lua"),
          ]
        },
      ]
    }, {
      text: 'C#',
      collapsible: true,
      icon: 'iconfont icon-csharp',
      children: [
        '/programming/cs/README.md',
        '/programming/cs/references.md',
        '/programming/cs/github.md',
        '/programming/cs/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/cs/articles/README.md',
            asb.freecodecamp("cs"), 
            asb.milanJovanovic("cs"),
            asb.johnnyreilly("cs"),
            asb.eventDriven("java"),
            asb.eventDriven("cs"),
          ]
        }
      ]
    }, {
      text: 'Blazor',
      collapsible: true,
      icon: 'iconfont icon-blazor',
      children: [
        '/programming/cs-blazor/README.md',
        '/programming/cs-blazor/references.md',
        '/programming/cs-blazor/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/cs-blazor/articles/README.md',
            asb.freecodecamp("cs-blazor"), 
            asb.codemaze("cs-blazor"),
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
            asb.freecodecamp("go"),
            asb.learnk8s("go"),
            asb.logrocket("go"),
            asb.yozm("go"),
            asb.popit("go"),
            asb.d2("go"),
            asb.gmarket("go"),
          ]
        }
      ]
    }, {
      text: 'Grafana',
      collapsible: true,
      icon: 'iconfont icon-grafana',
      children: [
        '/programming/go-grafana/README.md',
        '/programming/go-grafana/references.md',
        '/programming/go-grafana/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/go-grafana/articles/README.md',
            asb.freecodecamp("go-grafana"),
            asb.yozm("go-grafana"),
          ]
        }
      ]
    }, {
      text: 'Prometheus',
      collapsible: true,
      icon: 'iconfont icon-prometheus',
      children: [
        '/programming/go-prometheus/README.md',
        '/programming/go-prometheus/references.md',
        '/programming/go-prometheus/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/go-prometheus/articles/README.md',
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
            asb.freecodecamp("dart"),
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
            asb.freecodecamp("php"),
            asb.learnk8s("php"),
          ]
        }
      ]
    }, {
      text: 'Laravel',
      collapsible: true,
      icon: 'fa-brands fa-laravel',
      children: [
        '/programming/php-laravel/README.md',
        '/programming/php-laravel/references.md',
        '/programming/php-laravel/github.md',
        '/programming/php-laravel/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/php-laravel/articles/README.md',
            asb.freecodecamp("php"),
            asb.learnk8s("php"),
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
            asb.freecodecamp("c"),
            asb.kodeco("c"),
            asb.nhn("c"),
            asb.linecorp("c"),
            asb.gangnamunni("c"),
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
            '/programming/cpp/articles/README.md',
            asb.freecodecamp("cpp"), 
            asb.yozm("cpp"),
            asb.nhn("cpp"), 
            asb.d2("cpp"),
          ]
        }
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/elixir/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Haskell',
      collapsible: true,
      icon: 'iconfont icon-haskell',
      children: [
        '/programming/hs/README.md',
        '/programming/hs/references.md',
        '/programming/hs/github.md',
        '/programming/hs/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/hs/articles/README.md',
            asb.freecodecamp("hs"),
          ]
        }
      ]
    }, {
      text: 'Scala',
      collapsible: true,
      icon: 'iconfont icon-scala',
      children: [
        '/programming/scala/README.md',
        '/programming/scala/references.md',
        '/programming/scala/github.md',
        '/programming/scala/youtube.md', 
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/scala/articles/README.md',
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
      text: 'Qt',
      collapsible: true,
      icon: 'iconfont icon-qt',
      children: [
        '/programming/qt/README.md',
        '/programming/qt/references.md',
        '/programming/qt/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/qt/articles/README.md',
          ]
        }
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
            '/programming/common-lisp/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'OCaml',
      collapsible: true,
      icon: 'iconfont icon-ocaml',
      children: [
        '/programming/ocaml/README.md',
        '/programming/ocaml/references.md',
        '/programming/ocaml/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/ocaml/articles/README.md',
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
            '/programming/julia/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Clojure',
      collapsible: true,
      icon: 'iconfont icon-clojure',
      children: [
        '/programming/clojure/README.md',
        '/programming/clojure/references.md',
        '/programming/clojure/github.md',
        '/programming/clojure/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/clojure/articles/README.md',
          ]
        },
      ]
    }, {
      text: 'Erlang',
      collapsible: true,
      icon: 'iconfont icon-erlang',
      children: [
        '/programming/erl/README.md',
        '/programming/erl/tips.md',
        '/programming/erl/references.md',
        '/programming/erl/github.md',
        '/programming/erl/youtube.md', 
        {
          text: 'Article(s)',
          collapsible: true,
        icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/erl/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'RabbitMQ',
      collapsible: true,
      icon: 'iconfont icon-rabbitmq',
      children: [
        '/programming/erl-rabbitmq/README.md',
        '/programming/erl-rabbitmq/tips.md',
        '/programming/erl-rabbitmq/references.md',
        '/programming/erl-rabbitmq/youtube.md', 
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/erl-rabbitmq/articles/README.md',
            asb.learnk8s("erl-rabbitmq"),
            asb.milanJovanovic("erl-rabbitmq"),
          ]
        }
      ]
    }, {
      text: 'Matlab',
      collapsible: true,
      icon: 'iconfont icon-matlab',
      children: [
        '/programming/matlab/README.md',
        '/programming/matlab/references.md',
        '/programming/matlab/github.md',
        '/programming/matlab/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/matlab/articles/README.md',
          ]
        },
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/regex/articles/README.md',
            asb.freecodecamp("regex"),
            asb.eventDriven("regex"),
          ]
        },
      ],
    }, {
      text: 'Markdown',
      collapsible: true,
      icon: 'fa-brands fa-markdown',
      children: [
        '/programming/md/README.md',
        '/programming/md/snippets.md',
        '/programming/md/references.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/md/articles/README.md',
            asb.freecodecamp("md"),
            asb.digitalocean("md"),
          ]
        },
      ]
    }, {
      text: 'Godot Engine',
      collapsible: true,
      icon: 'iconfont icon-godot',
      children: [
        '/programming/gd/README.md',
        '/programming/gd/references.md',
        '/programming/gd/github.md',
        '/programming/gd/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/programming/gd/articles/README.md',
            asb.freecodecamp("gd"),
          ]
        }
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
        '/tool/xcode/youtube.md',
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
        '/tool/jetbrains-idea/README.md',
        '/tool/jetbrains-idea/plugins.md',
        '/tool/jetbrains-idea/troubleshooting.md',
        '/tool/jetbrains-idea/references.md',
        '/tool/jetbrains-idea/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/jetbrains-idea/articles/README.md',
            asb.yozm("jetbrains-idea")
          ]
        }
      ]
    }, {
      text: 'PyCharm',
      collapsible: true,
      icon: 'iconfont icon-pycharm',
      children: [
        '/tool/jetbrains-pycharm/README.md',
        '/tool/jetbrains-pycharm/plugins.md',
        '/tool/jetbrains-pycharm/troubleshooting.md',
        '/tool/jetbrains-pycharm/references.md',
        '/tool/jetbrains-pycharm/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/jetbrains-pycharm/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Writerside',
      collapsible: true,
      icon: 'iconfont icon-jetbrains',
      children: [
        '/tool/jetbrains-writerside/README.md',
        '/tool/jetbrains-writerside/references.md',
        '/tool/jetbrains-writerside/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/jetbrains-writerside/articles/README.md',
            asb.yozm("jetbrains-writerside")
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
            asb.codemaze("visualstudio")
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
            asb.freecodecamp("vscode"),
            asb.yozm("vscode"),
            asb.nhn("vscode"),
          ]
        }
      ],
    }, {
      text: 'Sublime Text',
      collapsible: true,
      icon: 'iconfont icon-subl',
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
            asb.freecodecamp("xls"),
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
      text: 'Google Drive',
      collapsible: true,
      icon: 'fa-brands fa-google-drive',
      children: [
        '/tool/google-drive/README.md',
        '/tool/google-drive/references.md',
        '/tool/google-drive/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/google-drive/articles/README.md',
            asb.freecodecamp("google-drive"),
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
            asb.frontendmaster("chrome"),
            asb.devtoolstips("chrome"),
            asb.zuminternet("chrome"),
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
            asb.devtoolstips("firefox"),
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
            asb.devtoolstips("safari"),
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/notion/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Obsedian',
      collapsible: true,
      icon: 'iconfont icon-obsedian',
      children: [
        '/tool/obsedian/README.md',
        '/tool/obsedian/references.md',
        '/tool/obsedian/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/obsedian/articles/README.md',
          ]
        }
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
            asb.frontendmaster("figma"),
            asb.d2("figma"),
            asb.kakaoTech("figma"),
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
      text: 'DaVinci',
      collapsible: true,
      icon: 'iconfont icon-davinci',
      children: [
        '/tool/davinci/README.md',
        '/tool/davinci/references.md',
        '/tool/davinci/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/davinci/articles/README.md',
            asb.freecodecamp("davinci"),
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/rsync/articles/README.md',
            asb.tecmint("rsync"),
          ]
        }
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
        '/tool/vim/github.md',
        '/tool/vim/references.md',
        '/tool/vim/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/vim/articles/README.md',
            asb.freecodecamp("vim"),
            asb.yozm("vim"),
          ]
        },
      ]
    }, {
      text: 'NeoVim',
      collapsible: true,
      icon: 'iconfont icon-neovim',
      children: [
        '/tool/nvim/README.md',
        '/tool/nvim/tips.md',
        '/tool/nvim/references.md',
        '/tool/nvim/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/nvim/articles/README.md',
          ]
        },
      ]
    }, {
      text: 'awk',
      collapsible: true,
      icon: 'iconfont icon-awk',
      children: [
        '/tool/awk/README.md',
        '/tool/awk/references.md',
        '/tool/awk/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/awk/articles/README.md',
            asb.tecmint("awk"),
          ]
        },
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
      text: 'curl',
      collapsible: true,
      icon: 'iconfont icon-curl',
      children: [
        '/tool/curl/README.md',
        '/tool/curl/references.md',
        '/tool/curl/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/tool/curl/articles/README.md',
          ]
        }
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
            asb.freecodecamp('nmap'),
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
    }, {
      text: 'Github',
      collapsible: true,
      icon: 'fa-brands fa-github',
      children: [
        '/devops/github/README.md',
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
            asb.freecodecamp('github'),
            asb.codemaze('github'),
            asb.milanJovanovic('github'),
            asb.packgemainTech("docker"),
            asb.yozm("github"),
            asb.linecorp("github"),
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/gitlab/articles/README.md',
            asb.freecodecamp("gitlab"),            
          ]
        }
      ]
    }, {
      text: 'Jira',
      collapsible: true,
      icon: 'fa-brands fa-jira',
      children: [
        '/devops/jira/README.md',
        '/devops/jira/troubleshooting.md',
        '/devops/jira/references.md',
        '/devops/jira/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/jira/articles/README.md',
            asb.yozm("jira"),            
          ]
        }
      ]
    }, {
      text: 'Confluence',
      collapsible: true,
      icon: 'fa-brands fa-confluence',
      children: [
        '/devops/confluence/README.md',
        '/devops/confluence/troubleshooting.md',
        '/devops/confluence/references.md',
        '/devops/confluence/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/confluence/articles/README.md',
            asb.yozm("confluence"),            
          ]
        }
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
            asb.freecodecamp("macos"),
            asb.yozm("macos"),
          ]
        }
      ],
    }, {
      text: 'iOS',
      collapsible: true,
      icon: 'iconfont icon-macos',
      children: [
        '/devops/ios/README.md',
        '/devops/ios/env-setup.md',
        '/devops/ios/tips.md',
        '/devops/ios/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/ios/articles/README.md',
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
            asb.freecodecamp("windows"),
            asb.learnk8s("windows"),
            asb.tecmint("windows"),
            asb.yozm("windows"),
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
          icon: 'iconfont icon-kalilinux',
          children: [
            '/devops/linux-debian/kali/README.md',
            '/devops/linux-debian/kali/references.md',
            '/devops/linux-debian/kali/youtube.md',
          ]
        }, {
          text: 'Parrot OS',
          collapsible: true,
          icon: 'iconfont icon-parrotsecurity',
          children: [
            '/devops/linux-debian/parrot/README.md',
            '/devops/linux-debian/parrot/references.md',
            '/devops/linux-debian/parrot/youtube.md',
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
            asb.freecodecamp("linux-debian"),
            asb.digitalocean("linux-debian"),
            asb.tecmint("linux-debian"),
            asb.codemaze("linux-debian"),
            asb.nhn("linux-debian"),
            asb.d2("linux-debian"),
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
          icon: 'fa-brands fa-centos',
          children: [
            '/devops/linux-fedora/centos/README.md',
            '/devops/linux-fedora/centos/references.md',
            '/devops/linux-fedora/centos/youtube.md',
          ]
        },  {
          text: 'CentOS',
          collapsible: true,
          icon: 'iconfont icon-rockylinux',
          children: [
            '/devops/linux-fedora/rocky/README.md',
            '/devops/linux-fedora/rocky/references.md',
            '/devops/linux-fedora/rocky/youtube.md',
          ]
        }, 
        '/devops/linux-fedora/references.md',
        '/devops/linux-fedora/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/linux-fedora/articles/README.md',
            asb.freecodecamp("linux-fedora"),
            asb.tecmint("linux-fedora"),
            asb.d2("linux-fedora"),
          ]
        },
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/vagrant/articles/README.md',
            asb.yozm("vagrant"),
          ]
        }
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
            asb.freecodecamp("docker"),
            asb.digitalocean("docker"),
            asb.learnk8s("docker"),
            asb.milanJovanovic("docker"),
            asb.codemaze("docker"),
            asb.logrocket("docker"),
            asb.packgemainTech("docker"),
            asb.yozm("docker"),
            asb.towardsdatascience("docker"),
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
            asb.logrocket("podman"),
            asb.towardsdatascience("podman"),
          ]
        }
      ]
    }, {
      text: 'Kubernetes',
      collapsible: true,
      icon: 'iconfont icon-k8s',
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
            asb.freecodecamp("k8s"),
            asb.digitalocean("k8s"),
            asb.learnk8s("k8s"),
            asb.codemaze("k8s"),
            asb.packgemainTech("k8s"),
            asb.yozm("k8s"),
            asb.d2("k8s"),
            asb.linecorp("k8s"),
            asb.gmarket("k8s"),
            asb.kurly("k8s"),
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
        '/devops/openshift/youtube.md',
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
            asb.freecodecamp("terraform"),
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
            asb.freecodecamp("aws"),
            asb.learnk8s("aws"), 
            asb.milanJovanovic("aws"), 
            asb.yozm("aws"),
            asb.kakaoEnt("aws"),
            asb.inflab("aws"),
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
            asb.freecodecamp("azure"), 
            asb.learnk8s("azure"), 
            asb.codemaze("azure"), 
            asb.johnnyreilly("azure"),
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
            asb.freecodecamp("gcp"),
            asb.learnk8s("gcp"), 
            asb.yozm("gcp"), 
            asb.kurly("gcp"), 
          ]
        }
      ]
    }, {
      text: 'Linode',
      collapsible: true,
      icon: 'fa-brands fa-linode',
      children: [
        '/devops/linode/README.md',
        '/devops/linode/references.md',
        '/devops/linode/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/linode/articles/README.md',
            asb.learnk8s("linode"),
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
      text: 'Vercel',
      collapsible: true,
      icon: 'iconfont icon-vercel',
      children: [
         '/devops/vercel/README.md',
         '/devops/vercel/references.md',
         '/devops/vercel/youtube.md',
         {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/vercel/articles/README.md',
          ]
        }
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
            asb.freecodecamp("security"),
            asb.codemaze("security"),
            asb.yozm("security"),
            asb.nhn("security"),
            asb.d2("security"),
          ]
        },
      ]
    }, {
      text: 'JWT',
      collapsible: true,
      icon: 'iconfont icon-jwt',
      children: [
        '/devops/security-jwt/README.md',
        '/devops/security-jwt/references.md',
        '/devops/security-jwt/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/security-jwt/articles/README.md',
          ]
        },
      ]
    }, {
      text: 'OAuth2',
      collapsible: true,
      icon: 'iconfont icon-oauth2',
      children: [
        '/devops/security-oauth2/README.md',
        '/devops/security-oauth2/references.md',
        '/devops/security-oauth2/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/security-oauth2/articles/README.md',
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
      text: 'Travis CI',
      collapsible: true,
      icon: 'iconfont icon-travis-ci',
      children: [
        '/devops/travis-ci/README.md',
        '/devops/travis-ci/snippets.md',
        '/devops/travis-ci/references.md',
        '/devops/travis-ci/youtube.md',
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
        '/devops/selenium/references.md',
        '/devops/selenium/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/selenium/articles/README.md',
            asb.freecodecamp("selenium"),
          ]
        },
      ],
    }, {
      text: 'Karate',
      collapsible: true,
      icon: 'iconfont icon-karate',
      children: [
        '/devops/karate/README.md',
        '/devops/karate/references.md',
        '/devops/karate/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/karate/articles/README.md',
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
            asb.woowahan("playwright")
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
            asb.imqa("jmeter"),
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
            asb.freecodecamp("gatling"),
            asb.imqa("gatling"),
          ]
        },
      ]
    }, {
      text: 'Nexus Repository',
      collapsible: true,
      icon: 'iconfont icon-nexus',
      children: [
        '/devops/nexus/README.md',
        '/devops/nexus/tips.md',
        '/devops/nexus/references.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
           '/devops/nexus/articles/README.md',
            asb.droidcon("nexus"),
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
      text: 'Wildfly',
      collapsible: true,
      icon: 'iconfont icon-wildfly',
      children: [
        '/devops/wildfly/README.md',
        '/devops/wildfly/basics.md',
        '/devops/wildfly/references.md',
        '/devops/wildfly/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/wildfly/articles/README.md',
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
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/devops/nginx/articles/README.md',
            asb.tecmint("nginx"),            
            asb.codemaze("nginx"),            
          ]
        },
      ]
    }, 
    //endregion
  ], '/data-science/': [
    {
      text: 'Data Science',
      icon: 'fas fa-database',
      children: [ 
        '/data-science/README.md',
        '/data-science/references.md',
        '/data-science/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/articles/README.md',
            asb.yozm("data-science"),            
            asb.d2("data-science"),            
          ]
        },
      ],
    }, {
      text: 'MySQL',
      collapsible: true,
      icon: 'iconfont icon-mysql',
      children: [
        '/data-science/mysql/README.md',
        '/data-science/mysql/cli.md',
        '/data-science/mysql/query.md',
        '/data-science/mysql/references.md',
        '/data-science/mysql/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/mysql/articles/README.md',
            asb.codemaze("mysql"),
            asb.yozm("mysql"),
            asb.linecorp("mysql"),
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
            asb.freecodecamp("postgres"), 
            asb.codemaze("postgres"), 
            asb.eventDriven("postgres"),
            asb.linecorp("postgres"),
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
            asb.freecodecamp("mongodb"), 
            asb.learnk8s("mongodb"),
            asb.codemaze("mongodb"),
            asb.d2("mongodb"),
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
            asb.freecodecamp("sqlite"),
            asb.digitalocean("sqlite"),
            asb.kodeco("sqlite"),
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
            asb.milanJovanovic("redis"),
            asb.yozm("redis"),
            asb.zuminternet("redis"),
          ]
        },
      ]
    }, {
      text: 'GraphQL',
      collapsible: true,
      icon: 'iconfont icon-graphql',
      children: [
        '/data-science/graphql/README.md',
        '/data-science/graphql/references.md',
        '/data-science/graphql/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/graphql/articles/README.md',
            asb.freecodecamp("graphql"),
            asb.codemaze("graphql"),
            asb.yozm("graphql"),
          ]
        }
      ],
    }, {
      text: 'RocksDB',
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
      text: 'DuckDB',
      collapsible: true,
      icon: 'iconfont icon-duckdb',
      children: [
        '/data-science/duckdb/README.md',
        '/data-science/duckdb/references.md',
        '/data-science/duckdb/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/duckdb/articles/README.md',
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
            asb.freecodecamp("r"),
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
            asb.nhn("cassandra"),
            asb.d2("cassandra"),
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
            asb.d2("hadoop"),
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
            asb.freecodecamp("spark"),
            asb.d2("spark"),
            asb.popit("spark"),
          ]
        }
      ]
    }, {
      text: 'Splunk',
      collapsible: true,
      icon: 'iconfont icon-splunk',
      children: [
        '/data-science/splunk/README.md',
        '/data-science/splunk/references.md',
        '/data-science/splunk/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/data-science/splunk/articles/README.md',
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
        '/ai/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/ai/articles/README.md',
            asb.freecodecamp("ai"),
            asb.smashingmagazion("ai"),
            asb.yozm("ai"),
          ]
        }
      ],
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
        '/ai/llm/hugging-face.md',
        '/ai/llm/references.md',
        '/ai/llm/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/ai/llm/articles/README.md',
            asb.freecodecamp("llm"),
            asb.yozm("llm"),
            asb.kurly("llm"),
            asb.d2("llm"),
          ]
        }
      ]
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
            asb.freecodecamp("openai"),
            asb.digitalocean("openai"),
            asb.yozm("openai"),
            asb.woowahan("openai"),
          ]
        }
      ]
    }, {
      text: 'Llama',
      collapsible: true,
      icon: 'fa-brands fa-meta',
      children: [
        '/ai/llama/README.md',
        '/ai/llama/references.md',
        '/ai/llama/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/ai/llama/articles/README.md',
            asb.freecodecamp("llama"),
            asb.yozm("llama"),
          ]
        }
      ]
    }, {
      text: 'Gemini',
      collapsible: true,
      icon: 'iconfont icon-gemini',
      children: [
        '/ai/gemini/README.md',
        '/ai/gemini/references.md',
        '/ai/gemini/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/ai/gemini/articles/README.md',
            asb.freecodecamp("gemini"),
            asb.yozm("gemini"),
            asb.kurly("gemini"),
          ]
        }
      ]
    }, {
      text: 'Claude',
      collapsible: true,
      icon: 'iconfont icon-claude',
      children: [
        '/ai/claude/README.md',
        '/ai/claude/references.md',
        '/ai/claude/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/ai/claude/articles/README.md',
            asb.freecodecamp("claude"),
          ]
        }
      ]
    }, {
      text: 'LangChain',
      collapsible: true,
      icon: 'iconfont icon-langchain',
      children: [
        '/ai/langchain/README.md',
        '/ai/langchain/references.md',
        '/ai/langchain/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/ai/langchain/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Perplexity',
      collapsible: true,
      icon: 'iconfont icon-perplexity',
      children: [
        '/ai/perplexity/README.md',
        '/ai/perplexity/references.md',
        '/ai/perplexity/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/ai/perplexity/articles/README.md',
          ]
        }
      ]
    }, 
  ], '/hw/': [
    {
      text: 'Hardware',
      collapsible: true,
      icon: 'fas fa-microchip',
      children: [
        '/hw/README.md',
        '/hw/references.md',
        '/hw/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/hw/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Raspberry Pi (H/W)',
      collapsible: true,
      icon: 'fa-brands fa-raspberry-pi',
      children: [
        '/hw/raspberry-pi/README.md',
        '/hw/raspberry-pi/references.md',
        '/hw/raspberry-pi/youtube.md',
      ]
    }, {
      text: 'Flipper Zero',
      collapsible: true,
      icon: 'iconfont icon-flipper-zero',
      children: [
        '/hw/flipper-zero/README.md',
        '/hw/flipper-zero/references.md',
        '/hw/flipper-zero/youtube.md',
      ]
    }, {
      text: 'Arduino',
      collapsible: true,
      icon: 'iconfont icon-arduino',
      children: [
        '/hw/arduino/README.md',
        '/hw/arduino/references.md',
        '/hw/arduino/youtube.md',
      ]
    }, {
      text: 'NAS',
      collapsible: true,
      icon: 'iconfont icon-nas',
      children: [
        '/hw/nas/README.md',
        '/hw/nas/references.md',
        '/hw/nas/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/hw/nas/articles/README.md',
          ]
        }
      ]
    }, 
  ], '/projects/': [
    {
      text: 'Project',
      collapsible: true,
      icon: 'fas fa-industry',
      children: [ '/projects/README.md' ],
    }, {
      text: 'My Roadmap',
      collapsible: true,
      icon: 'fas fa-flag-checkered',
      children: [ '/projects/roadmap/README.md' ],
    }, {
      text: 'Portfolio',
      collapsible: true,
      icon: 'fa-brands fa-fort-awesome',
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
            asb.freecodecamp("career"),
            asb.frontendmaster("career"),
            asb.smashingmagazion("career"),
            asb.yozm("career"),
          ]
        }
      ]
    }, {
      text: 'Travel',
      collapsible: true,
      icon: 'fas fa-plane',
      children: [
        '/projects/travel/README.md',
        // '/projects/travel/asia.md',
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
        '/explore/study.md',
        '/explore/awesome-list.md',
      ],
    }, {
      text: 'API',
      collapsible: true,
      icon: 'iconfont icon-api',
      children: [
        '/explore/api/README.md',
        '/explore/api/references.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/explore/api/articles/README.md',
          ]
        }, {
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
        }, {
          text: 'Coupang',
          collapsible: true,
          icon: 'iconfont icon-coupang',
          children: [
            '/explore/api/coupang/README.md',
            '/explore/api/coupang/references.md',
          ]
        },
        '/explore/api/list.md',
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
        asb.hackingwithswift(),
        asb.freecodecamp(), 
        asb.kodeco(),
        asb.kotzilla(),
        asb.ktAcademy(),
        asb.droidcon(),
        asb.outcomesSchool(),
        asb.frontendmaster(),
        asb.smashingmagazion(),
        asb.logrocket(),
        asb.digitalocean(),
        asb.tecmint(),
        asb.learnk8s(),
        asb.antonioleiva(),
        asb.johnnyreilly(),
        asb.codemaze(),
        asb.milanJovanovic(),
        asb.shopify(),
        asb.devtoolstips(),
        asb.piccalilli(),
        asb.sitepoint(),
        asb.eventDriven(),
        asb.packgemainTech(),
        asb.towardsdatascience(),
        asb.douggregor(), 
        asb.kakaoTech(), 
        asb.kakaoPayTech(), 
        asb.kakaoEnt(), 
        asb.yozm(), 
        asb.popit(), 
        asb.devkuma(),
        asb.gangnamunni(),
        asb.donnywals(),
        asb.woowahan(), 
        asb.d2(), 
        asb.nhn(),
        asb.linecorp(),
        asb.inflab(),
        asb.toss(),
        asb.banksalad(),
        asb.toast(),
        asb.oliveyoung(),
        asb.kurly(),
        asb.gmarket(),
        asb.zuminternet(),
        asb.imqa(),
        asb.ab180(),
        asb.rutgoLetsgo(),
      ]
    },
  ],
  '/academics/': [
    {
      text: 'Academics',
      icon: 'fas fa-graduation-cap',
      children: [ '/academics/README.md' ],
    }, {
      text: 'System Design',
      collapsible: true,
      icon: 'fas fa-pen-ruler',
      children: [
        '/academics/system-design/README.md',
        '/academics/system-design/references.md',
        '/academics/system-design/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/academics/system-design/articles/README.md',
            asb.freecodecamp("system-design"),
            asb.smashingmagazion("system-design"),
            asb.milanJovanovic("system-design"),
            asb.packgemainTech("system-design"),
            asb.yozm("system-design"),
            asb.d2("system-design"),
            asb.woowahan("system-design"),
            asb.oliveyoung("system-design"),
            asb.kurly("system-design"),
            asb.ab180("system-design"),
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
            asb.freecodecamp("pm"),
          ]
        }
      ]
    }, {
      text: 'Marketing',
      collapsible: true,
      icon: 'fas fa-rectangle-ad',
      children: [
        '/academics/mrkt/README.md',
        '/academics/mrkt/references.md',
        '/academics/mrkt/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/academics/mrkt/articles/README.md',
          ]
        }
      ]
    }, {
      text: 'Finance',
      collapsible: true,
      icon: 'fas fa-coins',
      children: [
        '/academics/fnce/README.md',
        '/academics/fnce/references.md',
        '/academics/fnce/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/academics/fnce/articles/README.md',
            asb.freecodecamp("fnce"),
          ]
        }
      ]
    }, {
      text: 'Mathematics',
      collapsible: true,
      icon: 'fas fa-square-root-variable',
      children: [
        '/academics/math/README.md',
        '/academics/math/references.md',
        '/academics/math/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/academics/math/articles/README.md',
            asb.freecodecamp("math"),
          ]
        }
      ]
    }, {
      text: 'MATH011',
      collapsible: true,
      children: [
        '/academics/MATH011/README.md',
        '/academics/MATH011/lect01.md',
      ]
    }, {
      text: 'Physics',
      collapsible: true,
      icon: 'fas fa-atom',
      children: [
        '/academics/phys/README.md',
        '/academics/phys/references.md',
        '/academics/phys/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/academics/phys/articles/README.md',
          ]
        }
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
    }, {
      text: 'Computer Engineering',
      collapsible: true,
      icon: 'fas fa-computer',
      children: [
        '/academics/coen/README.md',
        '/academics/coen/references.md',
        '/academics/coen/youtube.md',
        {
          text: 'Article(s)',
          collapsible: true,
          icon: 'fas fa-square-share-nodes',
          children: [
            '/academics/coen/articles/README.md',
            asb.freecodecamp("coen"),
            asb.yozm("coen"),
          ]
        }
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
    }
  ],
})