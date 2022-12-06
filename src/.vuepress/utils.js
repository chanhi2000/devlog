
function getDocsNavBar(item) {
    switch (item) {
      case 'config':
        break;
      case 'info-banks':
        return [
          '',
          //region: lang
          {
            title: 'Gradle',
            children: [
              'lang-gradle/1',
              'lang-gradle/2',
            ]
          }, {
            title: 'Maven',
            children: [
              'lang-maven/1',
              'lang-maven/2',
            ]
          }, {
            title: 'Kotlin',
            children: [
              'lang-kotlin/',
              'lang-kotlin/tips',
              'lang-kotlin/references',
            ]
          }, {
            title: 'Java',
            children: [
              'lang-java/1',
              'lang-java/2',
            ]
          }, {
            title: 'Swift',
            children: [
              'lang-swift/1',
              'lang-swift/2',
            ]
          }, {
            title: 'Bash',
            children: [
              'lang-bash/',
              'lang-bash/fundamental',
            ]
          }, {
            title: 'Windows Batch Script',
            children: [
              'lang-winbat/1',
              'lang-winbat/2',
            ]
          }, {
            title: 'Windows Powershell',
            children: [
              'lang-pwsh/1',
              'lang-pwsh/2'
            ]
          },
          //endregion
          //region: DB
          {
            title: 'Cubrid',
            children: [
              'db-cubrid/1',
              'db-cubrid/2',
            ]
          }, {
            title: 'MySQL',
            children: [
              'db-mysql/1'
            ]
          }, 
          //endregion
          //region: devops
          {
            title: 'Git',
            children: [
              'devops-git/',
              'devops-git/troubleshooting',
            ]
          }, {
            title: 'Linux',
            children: [
              'devops-linux/1',
              'devops-linux/2',
            ]
          }, {
            title: 'Windows',
            children: [
              'devops-windows/1',
              'devops-windows/2',
            ]
          },{
            title: 'Docker',
            children: [
              'devops-docker/1',
              'devops-docker/2',
            ]
          }, {
            title: 'Jenkins',
            children: [
              'devops-jenkins/1',
              'devops-jenkins/2',
            ]
          }, 
          //endregion
          //region: js
          {
            title: 'Mermaid.js',
            children: [
              'js-mermaid/',
              'js-mermaid/example',
            ]
          }, {
            title: 'Node.js',
            children: [
              'js-node/1'
            ]
          }, {
            title: 'Cordova',
            children: [
              'js-cordova/1'
            ]
          }, 
          //endregion
          {
            title: 'Markdown',
            children: [
              'lang-markdown/',
            ]
          }, { 
            title: 'Intellij Idea Ultimate',
            children: [
              'ide-intellij-idea-ue/1.md',
            ]
          }, {
            title: 'Github',
            children: [
              'site-github/',
              'site-github/news',
              'site-github/library',
              'site-github/awesome-list',
              'site-github/tutorial',
              'site-github/portfolio',
            ]
          }, {
            title: 'Other Site(s)',
            children: [
              'site-others/',
              'site-others/popular',
              'site-others/api-and-res',
              'site-others/devlog',
            ],
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
  