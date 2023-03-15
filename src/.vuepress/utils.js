
function getDocsNavBar(item) {
    switch (item) {
      case 'explore':
        return [
          '',
          {
            title: 'Github',
            children: [
              'github/',
              'github/awesome-list',
              'github/library-java',
              'github/library-python',
              'github/library',
              'github/news',
              'github/tutorial',
              'github/portfolio',
            ]
          }, {
            title: '📺Youtube',
            children: [
              'youtube/',
              'youtube/watch-later',
              'youtube/watch-later-tutorial',
              'youtube/watch-later-keynote',
              'youtube/edu-compsci',
              'youtube/edu-devops',
              'youtube/edu-js',
              'youtube/edu-java',
              'youtube/edu-ios',
              'youtube/edu-python',
              'youtube/edu-c+cpp',
            ]
          }, {
            title: '🎓Tutorial',
            children: [
              'tutorial/',
              'tutorial/list',
            ]
          }, {
            title: '🧭Public API',
            children: [
              'api/',
              'api/list',
              'api/popular',
            ],
          }, {
            title: '✏️Devlog',
            children: [
              'devlog/',
              'devlog/list',
            ]
          }, {
            title: '🦺Career',
            children: [
              'career/',
              'career/hiring',
              'career/resource',
              'career/exam',
            ]
          }
        ]
      case 'catalogs':
        return [
          '',
          {
            title: '🏰Portfolio',
            children: [
              'portfolio/',
            ],
          }, {
            title: '🎓TIL',
            children: [
              'til/',
            ],
          }
        ]
      case 'g4e':
        return [
          '',
          //region: lang
          {
            title: '💫CLI',
            children: [
              'cli/',
              'cli/bash-basics',
              'cli/bash-tips',
              'cli/bash-troubleshooting',
              'cli/batch-basics',
              'cli/pwsh-basics',
            ]
          }, {
            title: '🐘Gradle',
            children: [
              'lang-gradle/',
              'lang-gradle/useful-snippets',
              'lang-gradle/useful-snippets-android',
            ]
          }, {
            title: '🐦Maven',
            children: [
              'lang-maven/',
              'lang-maven/useful-snippets',
            ]
          }, {
            title: '🅺Kotlin',
            children: [
              'lang-kotlin/',
              'lang-kotlin/basics',
              'lang-kotlin/tips',
              'lang-kotlin/references',
            ]
          }, {
            title: '☕️Java',
            children: [
              'lang-java/',
              'lang-java/basics',
              'lang-java/was',
              'lang-java/webservice',
            ]
          }, {
            title: '🕊️Swift',
            children: [
              'lang-swift/',
              'lang-swift/tips',
            ]
          },
          //endregion
          //region: devops
          {
            title: '🛠️Git',
            children: [
              'devops-git/',
              'devops-git/basics',
              'devops-git/troubleshooting',
            ]
          }, {
            title: '🧠OS',
            children: [
              'devops-os/',
              'devops-os/macos-env-setup',
              'devops-os/macos-useful-commands',
              'devops-os/win-env-setup',
              'devops-os/win-useful-tips',
              'devops-os/debian-env-setup',
            ]
          }, {
            title: '👽oVirt',
            children: [
              'devops-ovirt/',
              'devops-ovirt/cli',
              'devops-ovirt/resources',
            ]
          }, {
            title: '🐋Docker',
            children: [
              'devops-docker/',
              'devops-docker/basics',
              'devops-docker/docker-compose',
              'devops-docker/favorite-containers',
            ]
          }, {
            title: '🤵🏻Jenkins',
            children: [
              'devops-jenkins/',
              'devops-jenkins/template',
            ]
          }, {
            title: '📚Nexus Repository',
            children: [
              'devops-nexus/',
              'devops-nexus/tips',
            ]
          }, { 
            title: '🎩IDE & Text Editor',
            children: [
              'devops-ide/',
              'devops-ide/idea-plugins',
              'devops-ide/idea-troubleshooting',
              'devops-ide/vscode-plugins',
              'devops-ide/vim-tips',
              'devops-ide/dbeaver-hotkey',
              'devops-ide/dbeaver-jdbc',              
              'devops-ide/dbeaver-qtmplt',
            ]
          },
          //endregion
          //region: js
          {
            title: '⚡️Javascript',
            children: [
              'lang-js/',
              'lang-js/node-dependencies',
              'lang-js/node-sandbox',
              'lang-js/node-cordova',
              'lang-js/mermaid-example',
            ]
          }, 
          //endregion
          //region: DB
          {
            title: '🔎SQL',
            children: [
              'sql/',
              'sql/cubrid',
              'sql/mysql',
              'sql/tibero',
            ]
          }, 
          //endregion
          {
            title: 'Regex',
            children: [
              'regex/',
              'regex/tips',
            ],
          }, {
            title: 'Markdown',
            children: [
              'lang-markdown/',
              'lang-markdown/mermaid',
              'lang-markdown/template',
            ]
          }, 
        ];
      case '5.0':
      case '5.1':
      case '5.2':
        return [
          'upgrade',
          '',
          'installation',
          {
            title: 'Configuration',
            children: [
              'configuration/after-installation',
              'configuration/migrations',
              'configuration/teams',
              ['configuration/models/role', 'Model - Role'],
              ['configuration/models/permission', 'Model - Permission'],
              ['configuration/models/team', 'Model - Team'],
              ['configuration/models/user', 'Model - User'],
              'configuration/seeder',
            ]
          },
          {
            title: 'Usage',
            children: [
              'usage/concepts',
              'usage/events',
              'usage/middleware',
              'usage/soft-deleting',
              'usage/blade-templates',
            ]
          },
          'troubleshooting',
          'license',
          'contributing',
        ];
      case '7.x':
      case '6.x':
        return [
          'upgrade',
          '',
          'installation',
          {
            title: 'The basics',
            children: [
              'the-basics/migrations',
              'the-basics/teams',
              ['the-basics/models/role', 'Model - Role'],
              ['the-basics/models/permission', 'Model - Permission'],
              ['the-basics/models/team', 'Model - Team'],
              ['the-basics/models/user', 'Model - User'],
            ]
          },
          {
            title: 'Usage',
            children: [
              'usage/roles-and-permissions',
              'usage/querying-relationships',
              'usage/teams',
              'usage/objects-ownership',
              ['usage/multiple-users', 'Multiple User Models'],
              'usage/events',
              'usage/middleware',
              'usage/soft-deleting',
              'usage/blade-templates',
              'usage/seeder',
              'usage/admin-panel',
            ]
          },
          'troubleshooting',
          'license',
          'contributing',
        ];
    }
  }

module.exports = {
    getDocsNavBar,
};
  