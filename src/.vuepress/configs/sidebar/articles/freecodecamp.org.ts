import { SidebarInfoTemplate, SidebarInfoSubgroupTemplate } from ".";

const DEVOPS_WITH_GITLAB_CI_COURSE: SidebarInfoSubgroupTemplate = { // 2022-03-02
  text: 'DevOps with GitLab CI Course',
  collapsible: true,
  icon: 'fa-brands fa-gitlab',
  subPath: 'devops-with-gitlab-ci-course',
  children: [
    'README',
    'unit-1-introduction-to-gitLab',
    'unit-2-continuous-integration-with-gitlab-ci',
    'unit-3-continuous-deployment-with-gitlab-aws',
    'unit-4-deploying-a-dockerized-application-to-aws',
    'unit-5-conclusion',
  ]
}

const GET_STARTED_WITH_QUARKUS_AND_JPASTREAMER_2: SidebarInfoSubgroupTemplate = { // 2023-11-03
  text: 'Get started with Quarkus and JPAStreamer',
  collapsible: true,
  icon: 'iconfont icon-quarkus',
  subPath: 'get-started-with-quarkus-and-jpastreamer-2',
  children: [
    'README',
    'project-setup',
    'getting-started',
    'jpa-jpastreamer',
    'testing',
    'others',
  ]
}

const GITTING_THINGS_DONE_BOOK: SidebarInfoSubgroupTemplate = { // 2024-01-08
  text: 'Gitting Things Done – A Visual and Practical Guide to Git [Full Book]',
  collapsible: true,
  icon: 'iconfont icon-git',
  subPath: 'gitting-things-done-book',
  children: [
    'README',
    'introduction',
    'part-1-main-objects-and-introducing-changes',
    'part-2-branching-and-integrating-changes',
    'part-3-undoing-changes',
    'part-4-amazing-and-useful-git-tools',
    'summary',
  ],
}

const APPLIED_DATA_SCIENCE_WITH_PYTHON_BOOK: SidebarInfoSubgroupTemplate = {
  text: 'Applied Data Science with Python – Business Intelligence for Developers [Full Book]',
  collapsible: true,
  icon: 'fa-brands fa-python',
  subPath: 'applied-data-science-with-python-book',
  children: [
    'README',
    '1-python-foundations-building-blocks-for-data-mastery',
    '2-essential-libraries-your-data-wrangling-dream-team',
    '3-practical-examples-from-theory-to-action',
    '4-data-analysis-fundamentals-the-art-of-making-sense-of-data',
    '5-introduction-to-the-project',
    '6-code-walkthrough',
    '7-analyzing-the-results',
    '8-conclusion-and-future-steps',
  ],
}

const HOW_AI_AGENTS_CAN_SUPERCHARGE_LANGUAGE_MODELS_HANDBOOK: SidebarInfoSubgroupTemplate = { // 2024-09-10
  text: 'How AI Agents Can Help Supercharge Language Models – A Handbook for Developers',
  collapsible: true,
  icon: 'fas fa-language',
  subPath: 'how-ai-agents-can-supercharge-language-models-handbook',
  children: [
    'README',
    'the-emergence-of-ai-agents-in-language-models',
    'chapter-1-introduction-to-ai-agents-and-language-models',
    'chapter-2-the-history-of-artificial-intelligence-and-ai-agents',
    'chapter-3-where-ai-agents-shine-the-brightest',
    'chapter-4-the-philosophical-foundation-of-intelligent-systems',
    'chapter-5-ai-agents-as-llm-enhancers',
    'chapter-6-architectural-design-for-integrating-ai-agents-with-llms',
    'chapter-7-the-future-of-ai-agents-and-llms',
    'chapter-8-ai-agents-in-mission-critical-fields',
    'conclusion',
  ]
}

const WORK_WITH_SQLITE_IN_PYTHON_HANDBOOK: SidebarInfoSubgroupTemplate = { // 2024-10-02
  text: 'How to Work with SQLite in Python – A Handbook for Beginners',
  collapsible: true,
  icon: 'fa-brands fa-python',
  subPath: 'work-with-sqlite-in-python-handbook',
  children: [
    'README',
    'how-to-set-up-your-python-environment',
    'how-to-create-an-sqlite-database',
    'how-to-create-database-tables',
    'how-to-insert-data-into-a-table',
    'how-to-query-data',
    'how-to-update-and-delete-data',
    'how-to-use-transactions',
    'how-to-optimize-sqlite-query-performance-with-indexing',
    'how-to-handle-errors-and-exceptions',
    'how-to-export-and-import-data-bonus-section',
  ]
}

const LEARN_HTTP_METHODS_LIKE_GET_POST_AND_DELETE_A_HANDBOOK_WITH_CODE_EXAMPLES: SidebarInfoSubgroupTemplate = { // 2024-10-02
  text: 'Learn HTTP Methods like GET, POST, and DELETE – a Handbook with Code Examples',
  collapsible: true,
  icon: 'fa-brands fa-js',
  subPath: 'learn-http-methods-like-get-post-and-delete-a-handbook-with-code-examples', 
  children: [
    'README',
    'get-method',
    'post-method',
    'put-method',
    'patch-method',
    'delete-method',
    'head-method',
    'options-method',
    'trace-method',
    'connect-method',
    'conclusion',
  ]
}

export const template: SidebarInfoTemplate = {
  name: 'freecodecamp.org',
  faviconPath: 'https://cdn.freecodecamp.org/universal/favicons/favicon.ico',
  linksMap: new Map([
    [
    "java", [
      "a-guide-to-object-oriented-programming-principles", // 2024-06-19    
      "introduction-to-solid-principles", // 2024-06-24
      "generics-in-java", // 2024-07-12
      "multithreading-for-beginners", // 2024-07-16
      "comparable-vs-comparator-explained-in-java", // 2024-07-23
      "creational-design-patterns-in-java", // 2024-07-26
      "how-java-hashmaps-work-internal-mechanics-explained", // 2024-08-09
      "learn-java-testing-with-selenium", // 2024-08-27
    ]],[
    "java-spring",[
      "oauth2-resourceserver-with-spring-security", // 2024-05-08
      "how-to-integrate-spring-boot-with-gatling", // 2024-07-08
      "build-a-crud-app-spring-boot-neon-postgres", // 2024-07-26
      "build-a-shopping-cart-backend-with-spring-boot-and-spring-security", // 2024-08-28
      "ai-chatbot-with-spring-react-docker", // 2024-09-23
    ]],[
    "java-android",[
      "working-on-a-multiple-library-project-in-android", // 2024-04-27
      "migrate-from-play-core-library", // 2024-06-26
      "how-to-use-tooltips-in-jetpack-compose", // 2024-10-02
    ]],[
    "java-quarkus", [
        GET_STARTED_WITH_QUARKUS_AND_JPASTREAMER_2, // 2023-11-03
    ]],[
    "gradle", [
      "working-on-a-multiple-library-project-in-android", // 2024-04-27
      "migrate-from-play-core-library", // 2024-06-26
    ]],[
    "js", [
      "loop-through-arrays-javascript", // 2023-10-31
      "how-to-create-interactive-terminal-based-portfolio", // 2024-04-29
      "higher-order-functions-explained", // 2024-05-02
      "understand-javascript-closures", // 2024-05-07
      "how-js-string-concatenation-works", // 2024-05-07
      "javascript-remove-char-from-string", // 2024-05-09
      "how-to-create-objects-in-javascript",  // 2024-05-10
      "javascript-class-handbook", // 2024-05-20
      "js-interview-prep-handbook", // 2024-05-22
      "how-to-manipulate-strings-in-javascript", // 2024-05-24
      "javascript-prototypal-inheritance", // 2024-05-31
      "the-javascript-this-keyword-explained-with-examples", // 2024-06-05
      "weakmap-and-weakset-in-javascript", // 2024-06-07
      "scope-closures-and-hoisting-in-javascript", // 2024-06-26
      "how-to-change-background-color-with-javascript", // 2024-06-28
      "javascript-gamedev-with-kaboomjs", // 2024-06-28
      "how-to-use-callback-functions-in-javascript", // 2024-07-03
      "how-to-send-http-requests-using-javascript", // 2024-07-10
      "learn-asynchronous-javascript", // 2024-07-11
      "build-a-bitcoin-to-usd-calculator", // 2024-07-22
      "how-to-match-parentheses-in-javascript-without-using-regex", // 2024-08-12
      "what-is-a-component-library-when-to-build-your-own", // 2024-08-13
      "create-color-picker-using-html-css-and-javascript", // 2024-08-15
      "how-to-use-variables-and-data-types-in-javascript", // 2024-08-19
      "how-to-create-interactive-html-prototypes", // 2024-08-27
      "how-to-build-an-expense-tracker-with-html-css-and-javascript", // 2024-09-11
      "how-to-use-chart-js-for-interactive-data-visualization", // 2024-09-12
      "use-the-javascript-selection-api-to-build-a-rich-text-editor", // 2024-09-16
      "javascript-timer-how-to-set-a-timer-function-in-js", // 2024-09-16
      "new-javascript-array-methods-to-help-you-write-better-cleaner-code", // 2024-10-02
      LEARN_HTTP_METHODS_LIKE_GET_POST_AND_DELETE_A_HANDBOOK_WITH_CODE_EXAMPLES, // 2024-10-02     
    ]],[
    "ts", [
      "learn-typescript-with-interactive-lessons", // 2024-07-09
      "typescript-for-beginners-guide", // 2024-08-08
      "what-are-type-predicates-in-typescript", // 2024-09-10
    ]],[
    "js-node", [
      "what-is-dead-zone-in-javascript", // 2024-03-28
      "how-to-run-postgres-in-kubernetes",  // 2024-05-08
      "how-to-create-a-rest-api-without-a-server", // 2024-05-20
      "a-guide-to-the-node-js-event-loop", // 2024-05-28
      "build-an-eks-cluster-using-aws-local-zones-with-aws-cdk", // 2024-05-28
      "learn-threejs-by-building-five-projects", // 2024-06-12
      "how-to-use-time-to-live-in-event-driven-architecture", // 2024-06-19
      "build-a-rag-chatbot-agent-cloud-google-sheets", // 2024-06-26
      "improve-your-javascript-projects-with-build-tools", // 2024-07-02
      "upload-large-files-with-aws", // 2024-07-08
      "how-to-set-up-a-ci-cd-pipeline-with-husky-and-github-actions", // 2024-07-15
      "how-to-deploy-node-js-app-on-azure", // 2024-07-17
      "learn-javascript-reactivity-build-signals-from-scratch", // 2024-07-18
      "how-to-build-an-event-app-with-node-js", // 2024-08-05
      "create-a-pc-game-using-javascript", // 2024-08-07
      "get-mongodb-url-to-connect-to-a-nodejs-application", // 2024-08-12
      "how-to-implement-message-queues-in-your-backend-applications", // 2024-08-14
      "learn-ml5js-for-machine-learning-in-javascript", // 2024-08-14
      "how-to-read-and-write-files-with-nodejs", // 2024-08-19
      "how-to-build-a-serverless-crud-rest-api", // 2024-08-21
      "implement-api-rate-limiting-in-strapi", // 2024-09-10
      "how-to-handle-side-effects-in-jest", // 2024-09-16
      "tools-for-code-reuse", // 2024-09-25
      "improve-front-end-development-workflow-with-zenui-library", // 2024-10-03
      "understand-how-expressjs-works-by-building-your-own-server-multiplexer-from-scratch", // 2024-10-03
    ]],[
    "js-react", [
      "avoid-prop-drilling-in-react", // 2023-11-07
      "use-typescript-with-react", // 2023-11-15
      "how-to-use-react-server-components", // 2024-01-08
      "throttling-in-javascript", // 2024-05-01
      "how-to-build-a-realtime-chart-with-react-and-pusher", // 2024-05-02
      "react-usereducer-hook", // 2024-05-03
      "how-to-use-react-devtools", // 2024-05-06
      "react-native-splash-screen", // 2024-05-08
      "build-a-qr-code-generator-using-nodejs-nextjs-azure-blob-storage",  // 2024-05-10
      "how-to-create-a-react-chatbot", // 2024-05-10
      "how-to-handle-events-in-react-19", // 2024-05-13
      "how-to-store-data-locally-in-react-native-expo",  // 2024-05-13
      "zustand-vs-usestate-how-to-manage-state-in-react", // 2024-05-15
      "how-to-style-react-components", // 2024-05-22
      "react-19-new-hooks-explained-with-examples", // 2024-05-28
      "react-context-api-explained-with-examples", // 2024-05-30
      "learn-the-basics-of-go-by-building-a-full-stack-web-app-with-react-and-go", // 2024-05-30
      "how-to-build-a-rating-component-with-the-react-compound-component-pattern", // 2024-06-03
      "learn-high-level-system-design-by-building-a-youtube-clone", // 2024-06-11
      "how-to-create-multi-page-animations-using-framer-motion-and-react-router-dom", // 2024-06-17
      "how-to-enhance-embedded-links-in-react-with-microlinks", // 2024-06-18
      "what-are-controlled-and-uncontrolled-components-in-react", // 2024-06-21
      "react-how-to-validate-user-input", // 2024-06-24
      "whats-new-in-react-19", // 2024-06-25
      "mastering-shadcn-ui-components", // 2024-06-28
      "infinite-scrolling-in-react", // 2024-07-01
      "react-19-actions-simpliy-form-submission-and-loading-states", // 2024-07-02
      "how-data-flows-in-redux", // 2024-07-03
      "build-a-meditation-app-with-react-native-expo-router", // 2024-07-03
      "improve-user-experience-with-optimistic-ui-swr", // 2024-07-09
      "build-a-counter-button-with-react", // 2024-07-10
      "how-to-upgrade-node-and-jest-while-on-react-scripts-v4", // 2024-07-10
      "what-is-trpc", // 2024-07-11
      "difference-between-usememo-and-usecallback-hooks", // 2024-07-15
      "use-react-router-to-build-single-page-applications", // 2024-07-18
      "react-context-api-tutorial-examples", // 2024-07-22
      "build-a-sticky-notes-app-with-react-and-appwrite", // 2024-07-25
      "react-common-mistakes", // 2024-08-06
      "relative-vs-dynamic-routing-in-react", // 2024-08-12
      "create-a-macos-app-with-react-native", // 2024-08-22
      "react-compiler-complete-guide-react-19", // 2024-08-27
      "learn-the-mern-stack-by-building-a-store", // 2024-09-04
      "essential-javascript-concepts-before-react", // 2024-09-10
      "use-the-farm-stack-to-develop-full-stack-apps", // 2024-09-18
      "ai-chatbot-with-spring-react-docker", // 2024-09-23
      "boost-web-performance-with-prefetching", // 2024-09-23
      "create-react-reusable-modal-component", // 2024-09-24
      "learn-react-hooks-with-example-code", // 2024-09-25
      "new-react-19-features-you-should-know-with-code-examples", // 2024-09-30
      "authenticate-react-app-using-firebase", // 2024-10-02
      "react-best-practices-ever-developer-should-know", // 2024-10-03
      "create-desktop-apps-with-electron-react-and-typescript", // 2024-10-08
      "javascript-refresher-for-react-beginners", // 2024-10-09
    ]],[
    "js-vue", [
      "build-a-vue-ecommerce-app-using-msw", // 2024-07-08
      "how-event-handling-works-in-vue-3-guide-for-devs", // 2024-09-11
    ]],[
    "js-next", [
      "learn-to-code-rest-apis-using-nextjs-14", // 2024-06-04
      "mastering-shadcn-ui-components", // 2024-06-28
      "nextjs-clerk-neon-fullstack-development", // 2024-07-10
      "server-side-rendering-in-next-js-for-improved-seo", // 2024-07-17
      "next-js-performance-optimization", // 2024-07-19
      "build-an-invoice-saas-app-with-next-js-and-neon-postgres", // 2024-08-01
      "how-to-index-nextjs-pages-with-indexnow", // 2024-08-06
      "how-to-secure-a-nextjs-ai-application-deployed-on-vercel", // 2024-08-19
      "what-is-speedy-web-compiler", // 2024-09-05
      "how-to-set-up-eslint-prettier-stylelint-and-lint-staged-in-nextjs", // 2024-09-16
      "how-to-create-a-nextjs-pwa", // 2024-09-20,
      "integrate-wordpress-with-nextjs", // 2024-10-02
      "how-i-built-a-custom-video-conferencing-app-with-stream-and-nextjs", // 2024-10-03
      "create-a-front-end-portfolio-project-with-nextjs-and-threejs", // 2024-10-03
      "what-are-pre-rendering-and-hydration-in-web-dev", // 2024-10-07
    ]],[
    "js-nest", [
      "how-to-setup-typeorm-datasource-nestjs-app", // 2024-04-25
      "how-to-add-jwt-based-authentication-in-nest-js", // 2024-07-31
      "how-to-handle-file-uploads-in-nestjs-with-multer", // 2024-08-28
    ]],[
    "js-angular", [
      "how-to-transform-an-angular-appl-with-signals", // 2024-09-10
    ]],[
    "js-supabase", [
      "add-auth-to-flutter-apps-with-supabase-auth-ui", // 2024-06-03
      "authenticate-react-app-using-firebase", // 2024-10-02
    ]],[
    "js-gatsby", [
      "what-are-pre-rendering-and-hydration-in-web-dev", // 2024-10-07
    ]],[
    "css", [
      "perfect-html-input", // 2023-01-05
      "how-to-add-media-to-your-html-email-template", // 2024-04-23
      "how-to-create-a-mansory-layout-using-html-and-css", // 2024-06-18
      "breakpoints-for-responsive-web-design", // 2024-06-24
      "media-queries-vs-container-queries", // 2024-06-28
      "create-24-css-projects", // 2024-07-17
      "build-a-bitcoin-to-usd-calculator", // 2024-07-22
      "what-is-css-subgrid", // 2024-08-21
      "how-to-build-an-accessible-modal-with-example-code", // 2024-08-27
      "how-to-use-html-attributes-to-make-your-websites-and-apps-more-accessible", // 2024-09-06
      "how-to-use-css-to-improve-web-accessibility", // 2024-09-18
    ]],[
    "css-tailwind", [
      "how-to-build-a-login-page-with-material-tailwind-framework", // 2024-04-29
      "build-a-counter-button-with-react", // 2024-07-10
      "create-a-front-end-portfolio-project-with-nextjs-and-threejs", // 2024-10-03
    ]],[
    "npm", [
      "how-to-build-a-login-page-with-material-tailwind-framework", // 2024-04-29
      "how-to-host-static-sites-on-azure-static-web-apps", // 2024-06-18
      "when-to-use-npm-packages", // 2024-06-24
      "how-to-upgrade-node-and-jest-while-on-react-scripts-v4", // 2024-07-10
    ]],[
    "py", [
      "how-to-parse-a-string-in-python", // 2023-05-04
      "check-python-version-how-to-check-py-in-mac-windows-and-linux", // 2023-07-07
      "how-to-use-oop-in-python", // 2024-04-24
      "how-to-use-defaultdict-python", // 2024-05-01
      "empire-state-building-run-up-analysis-with-python", // 2024-05-08
      "how-to-install-python-on-a-mac", // 2024-05-09
      "automated-unit-testing-with-testgen-llm-and-cover-agent", // 2024-06-02
      APPLIED_DATA_SCIENCE_WITH_PYTHON_BOOK, // 2024-06-04
      "python-coding-challenges-for-beginners", // 2024-06-04
      "unit-testing-in-python", // 2024-06-10
      "how-to-fix-python-installation-errors-on-mac", // 2024-06-10
      "learn-python-for-data-science-hands-on-projects-with-eda-ab-testing-business-intelligence", // 2024-06-11
      "retrieval-augmented-generation-rag-handbook", // 2024-06-11
      "lambda-functions-in-python", // 2024-06-14
      "how-the-black-scholes-equation-works-python-examples", // 2024-06-17
      "how-to-handle-keyerror-exceptions-in-python", // 2024-06-17
      "first-class-functions-and-closures-in-python", // 2024-06-17
      "decorators-in-python-tutorial", // 2024-06-18
      "for-else-loop-in-python", // 2024-06-19
      "pyspark-for-beginners", // 2024-06-26"what-is-a-markov-chain", // 2024-07-08
      "use-python-sdk-to-build-a-web-scraper", // 2024-07-10
      "how-to-use-python-generators", // 2024-07-10
      "what-are-monte-carlo-methods", // 2024-07-16
      "how-to-build-a-quantum-ai-model", // 2024-07-23
      "how-to-build-an-interpretable-ai-deep-learning-model", // 2024-07-23
      "what-is-recursion", // 2024-07-25
      "basic-control-theory-with-python", // 2024-08-06
      "what-is-a-kalman-filter-with-python-code-examples", // 2024-08-07
      "merge-word-documents-in-python", // 2024-08-13
      "how-to-generate-financial-press-reviews-using-ai", // 2024-08-20
      "how-to-build-good-coding-habits", // 2024-08-20
      "master-multimodal-data-analysis-with-llms-and-python", // 2024-09-04
      "shodan-what-to-know-about-the-internets-most-dangerous-search-engine", // 2024-09-10
      "end-to-end-machine-learning-course-project", // 2024-09-26
      "how-to-start-building-projects-with-llms", // 2024-09-30
      "improve-your-data-science-skills-by-solving-kaggle-challenges", // 2024-09-30
      WORK_WITH_SQLITE_IN_PYTHON_HANDBOOK, // 2024-10-02
      "getting-started-with-matplotlib", // 2024-10-08
    ]],[
    "py-django", [
      "how-to-create-an-analytics-dashboard-in-django-app", // 2020-02-12
      "how-to-secure-your-django-app", // 2024-05-22
    ]],[
    "py-flask", [
      "how-to-implement-instant-search-with-flask-and-htmx", // 2024-07-22
    ]],[
    "py-numpy", [
      "how-to-build-an-ai-model-for-predicting-data-with-python", // 2024-08-08
    ]],[
    "py-fastapi", [
      "use-the-farm-stack-to-develop-full-stack-apps", // 2024-09-18
    ]],[
    "py-jupyter", [
      "how-to-run-r-programs-directly-in-jupyter-notebook-locally", // 2024-10-03
    ]],[
    "dart", [
      "how-to-develop-a-flutter-app-from-scratch", // 2024-04-26
      "how-to-make-your-flutter-package-privacy-manifest-compatible", // 2024-05-20
      "add-auth-to-flutter-apps-with-supabase-auth-ui", // 2024-06-03
      "build-a-youtube-clone-with-flutter-firebase-and-riverpod", // 2024-06-04
      "migrate-from-play-core-library", // 2024-06-26
      "migrate-a-flutter-application-from-getit-to-bloc", // 2024-07-19
      "how-to-use-enhanced-enums-in-dart", // 2024-07-22
      "flutter-streams-and-services", // 2024-09-25
    ]],[
    "rust", [
      "procedural-macros-in-rust", // 2024-04-24
      "rust-tutorial-build-a-json-parse", // 2024-05-29
      "build-and-deploy-smart-contract-rust-gear-protocol", // 2024-06-04
      "how-asynchronous-programming-works-in-rust", // 2024-08-15
      "how-to-blend-images-in-rust-using-pixel-math", // 2024-08-27
      "what-are-lifetimes-in-rust-explained-with-code-examples", // 2024-09-06
    ]],[
    "go", [
      "how-to-handle-concurrency-in-go", // 2024-05-10
      "learn-the-basics-of-go-by-building-a-full-stack-web-app-with-react-and-go", // 2024-05-30
      "learn-how-to-build-a-decentralized-file-storage-system-with-go", // 2024-06-05
      "real-time-chat-with-go-fiber-htmx", // 2024-06-06
      "how-to-create-database-migrations-in-go", // 2024-06-26
      "go-for-absolute-beginners", // 2024-07-01
      "encoding-and-decoding-data-in-golang", // 2024-08-05
      "graceful-shutdowns-k8s-go", // 2024-08-13
      "integration-tests-using-testcontainers", // 2024-08-14
      "variables-and-constants-in-go", // 2024-08-19
      "how-to-implement-server-sent-events-in-go", // 2024-08-28
      "how-the-comma-ok-idiom-and-package-system-work-in-go", // 2024-09-09
      "golang-statically-and-dynamically-linked-go-binaries", // 2024-09-10
      "how-to-write-benchmark-tests-for-your-golang-functions", // 2024-09-23
      "how-to-work-with-sql-databases-in-go", // 2024-09-24
      "how-to-run-database-migrations-in-kubernetes", // 2024-10-02
    ]],[
    "go-grafana", [
      "how-to-set-up-grafana-on-ec2", // 2024-08-02
    ]],[
    "cs", [
      "how-to-use-oop-in-c-sharp", // 2024-05-01
      "build-crud-operations-with-dotnet-core-handbook", // 2024-05-24
      "how-to-use-linq", // 2024-07-15
      "using-entity-framework-core-with-mongodb", // 2024-07-29
      "learn-c-sharp-for-unity-in-spanish", // 2024-07-31
      "master-object-oriented-programming-and-design-patterns-in-c", // 2024-09-19
      "learn-aspnet-core-mvc-with-net-9", // 2024-10-02
    ]],[
    "cs-blazor", [
      "use-local-storage-in-blazor-apps", // 2024-07-29
    ]],[
    "c", [
      "complete-c-programming-course-from-dr-chuck", // 2024-05-30
      "how-to-create-linux-device-drivers", // 2024-10-03
    ]],[
    "cpp", [
      "run-sql-like-queries-on-cplusplus-files", // 2024-05-02
      "learn-cuda-programming", // 2024-09-24
      "understand-how-expressjs-works-by-building-your-own-server-multiplexer-from-scratch", // 2024-10-03
      "how-to-use-switch-case-in-arduino-control-leds", // 2024-10-08
    ]],[
    "php", [
      "php-jwt-authentication-implementation", // 2024-04-24
      "php-array-handbook", // 2024-05-08
      "php-arrays-how-to-rebuild-the-football-team-cards-with-php-and-mongodb", // 2024-06-18
    ]],[
    "sh", [
      "linux-terminal-piping-and-redirection-guide", //2024-04-26
      "how-to-use-medusa-for-fast-multi-protocol-brute-force-attacks-security-tutorial", // 2024-10-02
    ]],[
    "git", [
      GITTING_THINGS_DONE_BOOK, // 2024-01-08
      "git-checkout-remote-branch-how-to-fetch-and-list-remote-branches", // 2024-04-30
      "how-to-use-git-submodules", // 2024-05-07
      "what-is-trunk-based-development", // 2024-06-18
      "host-your-first-project-on-github", // 2024-08-08
      "git-cheat-sheet-helpful-git-commands-with-examples", // 2024-08-20
    ]],[
    "gd", [
      "learn-to-create-a-3d-rpg-game-with-godot", // 2024-06-20
    ]],[
    "hs", [
      "how-to-use-pandoc", // 2024-07-09
    ]],[
    "regex", [
      "how-to-match-parentheses-in-javascript-without-using-regex", // 2024-08-12
    ]],[
    "md", [
      "how-to-start-your-open-source-journey-beginners-guide", // 2024-10-03
    ]],[
    "github", [
      "create-personalized-github-profile-page", // 2024-05-01
      "how-to-become-an-open-source-maintainer", // 2024-05-20
      "how-to-create-notice-blocks-in-markdown", // 2024-06-10
      "how-to-host-static-sites-on-azure-static-web-apps", // 2024-06-18
      "how-to-set-up-a-ci-cd-pipeline-with-husky-and-github-actions", // 2024-07-15
      "pass-the-github-advanced-security-certification-exam", // 2024-07-17
      "host-your-first-project-on-github", // 2024-08-08
      "how-to-build-a-serverless-crud-rest-api", // 2024-08-21
      "how-to-manage-your-open-source-project-with-github", // 2024-09-05
      "how-to-use-ssh-to-connect-to-github-guide-for-windows", // 2024-09-27
      "how-to-start-your-open-source-journey-beginners-guide", // 2024-10-03
    ]],[
    "gitlab", [
      DEVOPS_WITH_GITLAB_CI_COURSE, // 2022-03-02
    ]],[
    "macos", [
      "mac-control-keyboard-shortcuts-hotkeys-that-work-everywhere-in-macos", //2024-04-25
      "how-to-install-python-on-a-mac", // 2024-05-09
      "how-to-fix-python-installation-errors-on-mac", // 2024-06-10
    ]],[
    "windows", [
      "how-to-use-ssh-to-connect-to-github-guide-for-windows", // 2024-09-27
    ]],[
    "linux-debian", [
      "learn-linux-for-beginners-book-basic-to-advanced", // 2024-07-12
      "how-to-use-medusa-for-fast-multi-protocol-brute-force-attacks-security-tutorial", // 2024-10-02
    ]],[
    "linux-fedora", [
      "free-linux-crash-course-with-labs", // 2024-06-13
    ]],[
    "docker", [
      DEVOPS_WITH_GITLAB_CI_COURSE, // 2022-03-02
      "how-to-create-database-migrations-in-go", // 2024-06-26
      "ai-chatbot-with-spring-react-docker", // 2024-09-23
    ]],[
    "k8s", [
      "how-to-run-postgres-in-kubernetes",  // 2024-05-08
      "graceful-shutdowns-k8s-go", // 2024-08-13
      "how-to-run-database-migrations-in-kubernetes", // 2024-10-02
    ]],[
    "aws", [
      DEVOPS_WITH_GITLAB_CI_COURSE, // 2022-03-02
      "what-is-amazon-ec2-auto-scaling", // 2024-05-06
      "pass-the-aws-certified-solutions-architect-associate-certification", // 2024-05-23
      "build-an-eks-cluster-using-aws-local-zones-with-aws-cdk", // 2024-05-28
      "comparing-iac-tools-aws-cdk-cloudformation-terraform", // 2024-06-03
      "auto-scaling-and-load-balancing", // 2024-06-17
      "how-to-use-time-to-live-in-event-driven-architecture", // 2024-06-19
      "upload-large-files-with-aws", // 2024-07-08
      "prepare-to-pass-the-aws-sysops-administrator-associate-soa-c02-certification", // 2024-07-09
      "how-to-set-up-grafana-on-ec2", // 2024-08-02
      "ultimate-aws-certified-developer-associate-dva-c02-course-from-andrew-brown", // 2024-08-12
      "simplify-aws-multi-account-management", // 2024-08-13
      "how-to-build-a-serverless-crud-rest-api", // 2024-08-21
      "ecs-monitoring-explained-with-examples", // 2024-09-23
    ]],[
    "azure", [
      "how-to-run-postgres-in-kubernetes",  // 2024-05-08
      "build-a-qr-code-generator-using-nodejs-nextjs-azure-blob-storage",  // 2024-05-10
      "master-the-azure-devops-engineer-expert-certification-az-400", // 2024-06-06
      "how-to-host-static-sites-on-azure-static-web-apps", // 2024-06-18
      "create-an-ml-model-with-azure-machine-learning-designer", // 2024-06-25
      "how-to-deploy-a-web-app", // 2024-07-11
      "how-to-deploy-node-js-app-on-azure", // 2024-07-17
      "build-a-crud-app-spring-boot-neon-postgres", // 2024-07-26
      "pass-the-azure-ai-engineer-associate-certification-ai-102", // 2024-09-10
    ]],[
    "gcp", [
      "build-a-rag-chatbot-agent-cloud-google-sheets", // 2024-06-26
    ]],[
    "terraform", [
      "comparing-iac-tools-aws-cdk-cloudformation-terraform", // 2024-06-03
    ]],[
    "security", [
      "how-suz-hinton-went-from-dev-to-white-hat-hacker-podcast-126", // 2024-05-31
      "how-to-improve-your-digital-security-and-privacy", // 2024-06-18
      "more-secure-authentication-from-passwords-to-passkeys", // 2024-07-11
      "getting-started-in-cybersecurity", // 2024-07-16
      "vm-data-protection-best-practices", // 2024-08-16
      "what-is-rate-limiting-web-apis", // 2024-09-04
      "what-is-cache-poisoning-and-how-to-avoid-it", // 2024-09-05
      "shodan-what-to-know-about-the-internets-most-dangerous-search-engine", // 2024-09-10
      "learn-how-to-secure-api-servers", // 2024-09-19
      "how-to-use-medusa-for-fast-multi-protocol-brute-force-attacks-security-tutorial", // 2024-10-02
      "the-power-of-wordlists-why-every-ethical-hacker-needs-one", // 2024-10-03
      "hack-your-first-machine-a-guide-for-aspiring-security-enthusiasts", // 2024-10-03
      "improve-hacking-skills-by-playing-wargames", // 2024-10-08
      "key-cybersecurity-concepts-for-career", // 2024-10-09
    ]],[
    "gatling", [
      "how-to-integrate-spring-boot-with-gatling", // 2024-07-08
    ]],[
    "selenium", [
      "empire-state-building-run-up-analysis-with-python", // 2024-05-08
      "learn-java-testing-with-selenium", // 2024-08-27
    ]],[
    "vim", [
      "mastering-vim-your-guide-to-efficient-text-editing", // 2024-06-24
    ]],[
    "nmap", [
      "hack-your-first-machine-a-guide-for-aspiring-security-enthusiasts", // 2024-10-03
    ]],[
    "postgres", [
      "postgresql-indexing-strategies", // 2023-05-12
      "how-to-run-postgres-in-kubernetes",  // 2024-05-08
      "how-to-create-database-migrations-in-go", // 2024-06-26
      "nextjs-clerk-neon-fullstack-development", // 2024-07-10
      "build-a-crud-app-spring-boot-neon-postgres", // 2024-07-26
      "build-an-invoice-saas-app-with-next-js-and-neon-postgres", // 2024-08-01
    ]],[
    "mongodb", [
      "php-arrays-how-to-rebuild-the-football-team-cards-with-php-and-mongodb", // 2024-06-18
      "using-entity-framework-core-with-mongodb", // 2024-07-29
      "get-mongodb-url-to-connect-to-a-nodejs-application", // 2024-08-12
      "integration-tests-using-testcontainers", // 2024-08-14
      "learn-the-mern-stack-by-building-a-store", // 2024-09-04
      "use-the-farm-stack-to-develop-full-stack-apps", // 2024-09-18
    ]],[
    "sqlite", [
      "how-to-work-with-sql-databases-in-go", // 2024-09-24
      WORK_WITH_SQLITE_IN_PYTHON_HANDBOOK, // 2024-10-02
    ]],[
    "graphql", [
      "integrate-wordpress-with-nextjs", // 2024-10-02
    ]],[
    "spark", [
      "pyspark-for-beginners", // 2024-06-26
    ]],[
    "r", [
      "how-to-run-r-programs-directly-in-jupyter-notebook-locally", // 2024-10-03
    ]],[
    "vscode", [
      "how-to-deploy-node-js-app-on-azure", // 2024-07-17
    ]],[
    "xls", [
      "excel-vs-google-sheets-tables", // 2024-07-02
      "excel-for-data-visualization", // 2024-08-27
    ]],[
    "ms365", [
      "pass-the-microsoft-365-certified-fundamentals-ms-900-exam", // 2024-09-26
    ]],[
    "google-drive", [
      "excel-vs-google-sheets-tables", // 2024-07-02
    ]],[
    "davinci", [
      "master-video-editing-with-davinci-resolve", // 2024-08-20
    ]],[
    "system-design", [
      "minimum-viable-product-between-an-idea-and-the-product", // 2024-05-24
      "how-to-use-viewing-patterns-in-your-website-design", // 2024-06-12
      "auto-scaling-and-load-balancing", // 2024-06-17
      "best-practices-for-accessibility-in-web-development", // 2024-06-20
      "breakpoints-for-responsive-web-design", // 2024-06-24
      "learn-system-design-principles", // 2024-07-25
      "what-is-a-component-library-when-to-build-your-own", // 2024-08-13
      "how-to-effectively-manage-unique-identifiers-at-scale", // 2024-08-20
      "how-to-create-software-architecture-diagrams-using-the-c4-mode", // 2024-08-21
      "design-first-vs-logic-first-approach", // 2024-08-29
      "how-to-design-and-develop-web-apis-essential-guidelines.md", // 2024-10-07
    ]],[
    "pm", [
      "what-is-trunk-based-development", // 2024-06-18
    ]],[
    "ai", [
      "a-non-technical-introduction-to-generative-ai", // 2024-06-18
      "generative-ai-handbook", // 2024-06-20
      "create-an-ml-model-with-azure-machine-learning-designer", // 2024-06-25
      "build-a-rag-chatbot-agent-cloud-google-sheets", // 2024-06-26
      "knowledge-distillation-in-deep-learning-models", // 2024-07-09
      "how-to-build-a-quantum-ai-model", // 2024-07-23
      "how-to-build-an-interpretable-ai-deep-learning-model", // 2024-07-23
      "generative-models-for-data-augmentation", // 2024-07-26
      "prompt-engineering-basics", // 2024-07-29
      "how-to-build-an-ai-model-for-predicting-data-with-python", // 2024-08-08
      "how-to-future-proof-your-software-engineering-career-for-the-age-of-agi", // 2024-08-23
      "ai-chatbot-with-spring-react-docker", // 2024-09-23
      "tools-for-code-reuse", // 2024-09-25
      "end-to-end-machine-learning-course-project", // 2024-09-26
    ]],[
    "llm", [
      "automated-unit-testing-with-testgen-llm-and-cover-agent", // 2024-06-02
      "retrieval-augmented-generation-rag-handbook", // 2024-06-11
      "building-intelligent-apps-with-mistral-ai", // 2024-06-18
      "learn-rag-fundamentals-and-advanced-techniques", // 2024-08-01
      "a-beginners-guide-to-large-language-models", // 2024-08-15
      HOW_AI_AGENTS_CAN_SUPERCHARGE_LANGUAGE_MODELS_HANDBOOK, // 2024-09-10
      "how-to-start-building-projects-with-llms", // 2024-09-30
    ]],[
    "openai", [
      "how-to-use-gpt-to-analyze-large-datasets", // 2024-08-28
      "master-multimodal-data-analysis-with-llms-and-python", // 2024-09-04
    ]],[
    "gemini", [
      "learn-to-use-the-gemini-ai-multimodal-model", // 2024-08-22
    ]],[
    "llama", [
      "how-to-build-a-rag-pipeline-with-llamaindex", // 2024-08-30
    ]],[
    "claude", [
      "how-to-generate-financial-press-reviews-using-ai", // 2024-08-20
    ]],[
    "math", [
      "linear-algebra-crash-course-mathematics-for-machine-learning-and-generative-ai", // 2024-05-28
      "how-do-numerical-conversions-work", // 2024-05-29
      "linear-algebra-roadmap", // 2024-06-04
    ]],[
    "fnce", [
      "what-is-a-kalman-filter-with-python-code-examples", // 2024-08-07
      "how-to-generate-financial-press-reviews-using-ai", // 2024-08-20
    ]],[
    "coen", [
      "learn-about-operating-systems-in-depth", // 2024-08-06
    ]],[
    "career", [
      "skills-you-need-to-become-a-backend-developer-roadmap", // 2024-09-03
      "how-to-be-a-productive-developer", // 2024-09-13
    ]],[
    "hw", [
      "how-to-get-a-memory-map-of-your-system-using-bios-interrupts", // 2024-09-23
      "how-to-use-switch-case-in-arduino-control-leds", // 2024-10-08
    ]],[
    "all", [
      "how-to-create-an-analytics-dashboard-in-django-app", // 2020-02-12
      DEVOPS_WITH_GITLAB_CI_COURSE, // 2022-03-02
      "perfect-html-input", // 2023-01-05
      GITTING_THINGS_DONE_BOOK,  // 2023-01-08
      "how-to-parse-a-string-in-python", // 2023-05-04
      "postgresql-indexing-strategies", // 2023-05-12
      "check-python-version-how-to-check-py-in-mac-windows-and-linux", // 2023-07-07
      "loop-through-arrays-javascript", // 2023-10-31
      GET_STARTED_WITH_QUARKUS_AND_JPASTREAMER_2, // 2023-11-03
      "avoid-prop-drilling-in-react", // 2023-11-07
      "use-typescript-with-react", // 2023-11-15
      "how-to-use-react-server-components", // 2024-01-08
      "what-is-dead-zone-in-javascript", // 2024-03-28
      "how-to-add-media-to-your-html-email-template", // 2024-04-23
      "how-to-use-oop-in-python", // 2024-04-24
      "procedural-macros-in-rust", // 2024-04-24
      "php-jwt-authentication-implementation", // 2024-04-24
      "how-to-setup-typeorm-datasource-nestjs-app", // 2024-04-25
      "mac-control-keyboard-shortcuts-hotkeys-that-work-everywhere-in-macos", //2024-04-25
      "how-to-develop-a-flutter-app-from-scratch", // 2024-04-26
      "linux-terminal-piping-and-redirection-guide", //2024-04-26
      "working-on-a-multiple-library-project-in-android", // 2024-04-27
      "how-to-build-a-login-page-with-material-tailwind-framework", // 2024-04-29
      "how-to-create-interactive-terminal-based-portfolio", // 2024-04-29
      "git-checkout-remote-branch-how-to-fetch-and-list-remote-branches", // 2024-04-30
      "how-to-use-oop-in-c-sharp", // 2024-05-01
      "throttling-in-javascript", // 2024-05-01
      "create-personalized-github-profile-page", // 2024-05-01
      "how-to-use-defaultdict-python", // 2024-05-01
      "higher-order-functions-explained", // 2024-05-02
      "how-to-build-a-realtime-chart-with-react-and-pusher", // 2024-05-02
      "run-sql-like-queries-on-cplusplus-files", // 2024-05-02
      "react-usereducer-hook", // 2024-05-03
      "what-is-amazon-ec2-auto-scaling", // 2024-05-06
      "how-to-use-react-devtools", // 2024-05-06
      "understand-javascript-closures", // 2024-05-07
      "how-js-string-concatenation-works", // 2024-05-07
      "how-to-use-git-submodules", // 2024-05-07
      "empire-state-building-run-up-analysis-with-python", // 2024-05-08
      "oauth2-resourceserver-with-spring-security", // 2024-05-08
      "react-native-splash-screen", // 2024-05-08
      "how-to-run-postgres-in-kubernetes",  // 2024-05-08
      "php-array-handbook", // 2024-05-08
      "how-to-install-python-on-a-mac", // 2024-05-09
      "javascript-remove-char-from-string", // 2024-05-09
      "how-to-create-objects-in-javascript",  // 2024-05-10
      "how-to-handle-concurrency-in-go", // 2024-05-10
      "build-a-qr-code-generator-using-nodejs-nextjs-azure-blob-storage", // 2024-05-10
      "how-to-create-a-react-chatbot", // 2024-05-10
      "how-to-handle-events-in-react-19", // 2024-05-13
      "how-to-store-data-locally-in-react-native-expo",  // 2024-05-13
      "zustand-vs-usestate-how-to-manage-state-in-react", // 2024-05-15
      "how-to-make-your-flutter-package-privacy-manifest-compatible", // 2024-05-20
      "how-to-create-a-rest-api-without-a-server", // 2024-05-20
      "how-to-become-an-open-source-maintainer", // 2024-05-20
      "javascript-class-handbook", // 2024-05-20
      "how-to-style-react-components", // 2024-05-22
      "js-interview-prep-handbook", // 2024-05-22
      "how-to-secure-your-django-app", // 2024-05-22
      "pass-the-aws-certified-solutions-architect-associate-certification", // 2024-05-23
      "minimum-viable-product-between-an-idea-and-the-product", // 2024-05-24
      "build-crud-operations-with-dotnet-core-handbook", // 2024-05-24
      "how-to-manipulate-strings-in-javascript", // 2024-05-24
      "a-guide-to-the-node-js-event-loop", // 2024-05-28
      "react-19-new-hooks-explained-with-examples", // 2024-05-28
      "build-an-eks-cluster-using-aws-local-zones-with-aws-cdk", // 2024-05-28
      "linear-algebra-crash-course-mathematics-for-machine-learning-and-generative-ai", // 2024-05-28
      "rust-tutorial-build-a-json-parse", // 2024-05-29
      "how-do-numerical-conversions-work", // 2024-05-29
      "react-context-api-explained-with-examples", // 2024-05-30
      "complete-c-programming-course-from-dr-chuck", // 2024-05-30
      "learn-the-basics-of-go-by-building-a-full-stack-web-app-with-react-and-go", // 2024-05-30
      "javascript-prototypal-inheritance", // 2024-05-31
      "how-suz-hinton-went-from-dev-to-white-hat-hacker-podcast-126", // 2024-05-31
      "automated-unit-testing-with-testgen-llm-and-cover-agent", // 2024-06-02
      "add-auth-to-flutter-apps-with-supabase-auth-ui", // 2024-06-03
      "comparing-iac-tools-aws-cdk-cloudformation-terraform", // 2024-06-03
      "how-to-build-a-rating-component-with-the-react-compound-component-pattern", // 2024-06-03
      "build-and-deploy-smart-contract-rust-gear-protocol", // 2024-06-04
      APPLIED_DATA_SCIENCE_WITH_PYTHON_BOOK, // 2024-06-04
      "learn-to-code-rest-apis-using-nextjs-14", // 2024-06-04
      "build-a-youtube-clone-with-flutter-firebase-and-riverpod", // 2024-06-04
      "python-coding-challenges-for-beginners", // 2024-06-04
      "linear-algebra-roadmap", // 2024-06-04
      "the-javascript-this-keyword-explained-with-examples", // 2024-06-05
      "learn-how-to-build-a-decentralized-file-storage-system-with-go", // 2024-06-05
      "master-the-azure-devops-engineer-expert-certification-az-400", // 2024-06-06
      "real-time-chat-with-go-fiber-htmx", // 2024-06-06
      "weakmap-and-weakset-in-javascript", // 2024-06-07
      "how-to-create-notice-blocks-in-markdown", // 2024-06-10
      "unit-testing-in-python", // 2024-06-10
      "how-to-fix-python-installation-errors-on-mac", // 2024-06-10
      "learn-python-for-data-science-hands-on-projects-with-eda-ab-testing-business-intelligence", // 2024-06-11
      "learn-high-level-system-design-by-building-a-youtube-clone", // 2024-06-11
      "retrieval-augmented-generation-rag-handbook", // 2024-06-11
      "learn-threejs-by-building-five-projects", // 2024-06-12
      "how-to-use-viewing-patterns-in-your-website-design", // 2024-06-12
      "free-linux-crash-course-with-labs", // 2024-06-13
      "lambda-functions-in-python", // 2024-06-14
      "how-to-create-multi-page-animations-using-framer-motion-and-react-router-dom", // 2024-06-17
      "how-the-black-scholes-equation-works-python-examples", // 2024-06-17
      "how-to-handle-keyerror-exceptions-in-python", // 2024-06-17
      "auto-scaling-and-load-balancing", // 2024-06-17
      "first-class-functions-and-closures-in-python", // 2024-06-17
      "how-to-enhance-embedded-links-in-react-with-microlinks", // 2024-06-18
      "a-guide-to-object-oriented-programming-principles", // 2024-06-18
      "how-to-host-static-sites-on-azure-static-web-apps", // 2024-06-18
      "how-to-improve-your-digital-security-and-privacy", // 2024-06-18
      "how-to-create-a-mansory-layout-using-html-and-css", // 2024-06-18
      "what-is-trunk-based-development", // 2024-06-18
      "building-intelligent-apps-with-mistral-ai", // 2024-06-18
      "a-non-technical-introduction-to-generative-ai", // 2024-06-18
      "decorators-in-python-tutorial", // 2024-06-18
      "php-arrays-how-to-rebuild-the-football-team-cards-with-php-and-mongodb", // 2024-06-18
      "for-else-loop-in-python", // 2024-06-19
      "how-to-use-time-to-live-in-event-driven-architecture", // 2024-06-19
      "best-practices-for-accessibility-in-web-development", // 2024-06-20
      "learn-to-create-a-3d-rpg-game-with-godot", // 2024-06-20
      "generative-ai-handbook", // 2024-06-20
      "what-are-controlled-and-uncontrolled-components-in-react", // 2024-06-21
      "introduction-to-solid-principles", // 2024-06-24
      "mastering-vim-your-guide-to-efficient-text-editing", // 2024-06-24
      "when-to-use-npm-packages", // 2024-06-24
      "breakpoints-for-responsive-web-design", // 2024-06-24
      "react-how-to-validate-user-input", // 2024-06-24
      "create-an-ml-model-with-azure-machine-learning-designer", // 2024-06-25
      "whats-new-in-react-19", // 2024-06-25
      "scope-closures-and-hoisting-in-javascript", // 2024-06-26
      "pyspark-for-beginners", // 2024-06-26
      "how-to-create-database-migrations-in-go", // 2024-06-26
      "build-a-rag-chatbot-agent-cloud-google-sheets", // 2024-06-26
      "migrate-from-play-core-library", // 2024-06-26
      "how-to-change-background-color-with-javascript", // 2024-06-28
      "mastering-shadcn-ui-components", // 2024-06-28
      "media-queries-vs-container-queries", // 2024-06-28
      "infinite-scrolling-in-react", // 2024-07-01
      "go-for-absolute-beginners", // 2024-07-01
      "improve-your-javascript-projects-with-build-tools", // 2024-07-02
      "excel-vs-google-sheets-tables", // 2024-07-02
      "react-19-actions-simpliy-form-submission-and-loading-states", // 2024-07-02
      "how-data-flows-in-redux", // 2024-07-03
      "build-a-meditation-app-with-react-native-expo-router", // 2024-07-03
      "how-to-use-callback-functions-in-javascript", // 2024-07-03
      "upload-large-files-with-aws", // 2024-07-08
      "what-is-a-markov-chain", // 2024-07-08
      "build-a-vue-ecommerce-app-using-msw", // 2024-07-08
      "how-to-integrate-spring-boot-with-gatling", // 2024-07-08
      "knowledge-distillation-in-deep-learning-models", // 2024-07-09
      "how-to-use-pandoc", // 2024-07-09
      "learn-typescript-with-interactive-lessons", // 2024-07-09
      "prepare-to-pass-the-aws-sysops-administrator-associate-soa-c02-certification", // 2024-07-09
      "improve-user-experience-with-optimistic-ui-swr", // 2024-07-09
      "use-python-sdk-to-build-a-web-scraper", // 2024-07-10
      "build-a-counter-button-with-react", // 2024-07-10
      "nextjs-clerk-neon-fullstack-development", // 2024-07-10
      "how-to-send-http-requests-using-javascript", // 2024-07-10
      "how-to-use-python-generators", // 2024-07-10
      "how-to-upgrade-node-and-jest-while-on-react-scripts-v4", // 2024-07-10
      "more-secure-authentication-from-passwords-to-passkeys", // 2024-07-11
      "how-to-deploy-a-web-app", // 2024-07-11
      "learn-asynchronous-javascript", // 2024-07-11
      "what-is-trpc", // 2024-07-11
      "learn-linux-for-beginners-book-basic-to-advanced", // 2024-07-12
      "generics-in-java", // 2024-07-12
      "how-to-set-up-a-ci-cd-pipeline-with-husky-and-github-actions", // 2024-07-15
      "difference-between-usememo-and-usecallback-hooks", // 2024-07-15
      "how-to-use-linq", // 2024-07-15
      "getting-started-in-cybersecurity", // 2024-07-16
      "multithreading-for-beginners", // 2024-07-16
      "what-are-monte-carlo-methods", // 2024-07-16
      "how-to-deploy-node-js-app-on-azure", // 2024-07-17
      "server-side-rendering-in-next-js-for-improved-seo", // 2024-07-17
      "create-24-css-projects", // 2024-07-17
      "pass-the-github-advanced-security-certification-exam", // 2024-07-17
      "use-react-router-to-build-single-page-applications", // 2024-07-18
      "learn-javascript-reactivity-build-signals-from-scratch", // 2024-07-18
      "next-js-performance-optimization", // 2024-07-19
      "migrate-a-flutter-application-from-getit-to-bloc", // 2024-07-19
      "how-to-implement-instant-search-with-flask-and-htmx", // 2024-07-22
      "how-to-use-enhanced-enums-in-dart", // 2024-07-22
      "react-context-api-tutorial-examples", // 2024-07-22
      "build-a-bitcoin-to-usd-calculator", // 2024-07-22
      "comparable-vs-comparator-explained-in-java", // 2024-07-23
      "how-to-build-a-quantum-ai-model", // 2024-07-23
      "how-to-build-an-interpretable-ai-deep-learning-model", // 2024-07-23
      "build-a-sticky-notes-app-with-react-and-appwrite", // 2024-07-25
      "learn-system-design-principles", // 2024-07-25
      "what-is-recursion", // 2024-07-25
      "generative-models-for-data-augmentation", // 2024-07-26
      "creational-design-patterns-in-java", // 2024-07-26
      "build-a-crud-app-spring-boot-neon-postgres", // 2024-07-26
      "use-local-storage-in-blazor-apps", // 2024-07-29
      "using-entity-framework-core-with-mongodb", // 2024-07-29
      "prompt-engineering-basics", // 2024-07-29
      "learn-c-sharp-for-unity-in-spanish", // 2024-07-31
      "how-to-add-jwt-based-authentication-in-nest-js", // 2024-07-31
      "learn-rag-fundamentals-and-advanced-techniques", // 2024-08-01
      "build-an-invoice-saas-app-with-next-js-and-neon-postgres", // 2024-08-01
      "how-to-set-up-grafana-on-ec2", // 2024-08-02
      "encoding-and-decoding-data-in-golang", // 2024-08-05
      "how-to-build-an-event-app-with-node-js", // 2024-08-05
      "how-to-index-nextjs-pages-with-indexnow", // 2024-08-06
      "basic-control-theory-with-python", // 2024-08-06
      "learn-about-operating-systems-in-depth", // 2024-08-06
      "react-common-mistakes", // 2024-08-06
      "what-is-a-kalman-filter-with-python-code-examples", // 2024-08-07
      "create-a-pc-game-using-javascript", // 2024-08-07
      "host-your-first-project-on-github", // 2024-08-08
      "how-to-build-an-ai-model-for-predicting-data-with-python", // 2024-08-08
      "typescript-for-beginners-guide", // 2024-08-08
      "how-java-hashmaps-work-internal-mechanics-explained", // 2024-08-09
      "relative-vs-dynamic-routing-in-react", // 2024-08-12
      "ultimate-aws-certified-developer-associate-dva-c02-course-from-andrew-brown", // 2024-08-12
      "how-to-match-parentheses-in-javascript-without-using-regex", // 2024-08-12
      "get-mongodb-url-to-connect-to-a-nodejs-application", // 2024-08-12
      "simplify-aws-multi-account-management", // 2024-08-13
      "what-is-a-component-library-when-to-build-your-own", // 2024-08-13
      "merge-word-documents-in-python", // 2024-08-13
      "graceful-shutdowns-k8s-go", // 2024-08-13
      "how-to-implement-message-queues-in-your-backend-applications", // 2024-08-14
      "learn-ml5js-for-machine-learning-in-javascript", // 2024-08-14
      "integration-tests-using-testcontainers", // 2024-08-14
      "create-color-picker-using-html-css-and-javascript", // 2024-08-15
      "how-asynchronous-programming-works-in-rust", // 2024-08-15
      "a-beginners-guide-to-large-language-models", // 2024-08-15
      "vm-data-protection-best-practices", // 2024-08-16
      "variables-and-constants-in-go", // 2024-08-19
      "how-to-use-variables-and-data-types-in-javascript", // 2024-08-19
      "how-to-read-and-write-files-with-nodejs", // 2024-08-19
      "how-to-secure-a-nextjs-ai-application-deployed-on-vercel", // 2024-08-19
      "how-to-generate-financial-press-reviews-using-ai", // 2024-08-20
      "master-video-editing-with-davinci-resolve", // 2024-08-20
      "git-cheat-sheet-helpful-git-commands-with-examples", // 2024-08-20
      "how-to-effectively-manage-unique-identifiers-at-scale", // 2024-08-20
      "how-to-build-good-coding-habits", // 2024-08-20
      "what-is-css-subgrid", // 2024-08-21
      "how-to-create-software-architecture-diagrams-using-the-c4-mode", // 2024-08-21
      "how-to-build-a-serverless-crud-rest-api", // 2024-08-21
      "learn-to-use-the-gemini-ai-multimodal-model", // 2024-08-22
      "create-a-macos-app-with-react-native", // 2024-08-22
      "how-to-future-proof-your-software-engineering-career-for-the-age-of-agi", // 2024-08-23
      "how-to-blend-images-in-rust-using-pixel-math", // 2024-08-27
      "how-to-create-interactive-html-prototypes", // 2024-08-27
      "how-to-build-an-accessible-modal-with-example-code", // 2024-08-27
      "learn-java-testing-with-selenium", // 2024-08-27
      "excel-for-data-visualization", // 2024-08-27
      "react-compiler-complete-guide-react-19", // 2024-08-27
      "how-to-handle-file-uploads-in-nestjs-with-multer", // 2024-08-28
      "how-to-implement-server-sent-events-in-go", // 2024-08-28
      "how-to-use-gpt-to-analyze-large-datasets", // 2024-08-28
      "build-a-shopping-cart-backend-with-spring-boot-and-spring-security", // 2024-08-28
      "design-first-vs-logic-first-approach", // 2024-08-29
      "how-to-build-a-rag-pipeline-with-llamaindex", // 2024-08-30
      "skills-you-need-to-become-a-backend-developer-roadmap", // 2024-09-03
      "what-is-rate-limiting-web-apis", // 2024-09-04
      "master-multimodal-data-analysis-with-llms-and-python", // 2024-09-04
      "learn-the-mern-stack-by-building-a-store", // 2024-09-04
      "what-is-speedy-web-compiler", // 2024-09-05
      "how-to-manage-your-open-source-project-with-github", // 2024-09-05
      "what-is-cache-poisoning-and-how-to-avoid-it", // 2024-09-05
      "what-are-lifetimes-in-rust-explained-with-code-examples", // 2024-09-06
      "how-to-use-html-attributes-to-make-your-websites-and-apps-more-accessible", // 2024-09-06
      "how-the-comma-ok-idiom-and-package-system-work-in-go", // 2024-09-09
      "essential-javascript-concepts-before-react", // 2024-09-10
      "how-to-transform-an-angular-appl-with-signals", // 2024-09-10
      "golang-statically-and-dynamically-linked-go-binaries", // 2024-09-10
      "implement-api-rate-limiting-in-strapi", // 2024-09-10
      "what-are-type-predicates-in-typescript", // 2024-09-10
      HOW_AI_AGENTS_CAN_SUPERCHARGE_LANGUAGE_MODELS_HANDBOOK, // 2024-09-10
      "shodan-what-to-know-about-the-internets-most-dangerous-search-engine", // 2024-09-10
      "pass-the-azure-ai-engineer-associate-certification-ai-102", // 2024-09-10
      "how-event-handling-works-in-vue-3-guide-for-devs", // 2024-09-11
      "how-to-build-an-expense-tracker-with-html-css-and-javascript", // 2024-09-11
      "how-to-use-chart-js-for-interactive-data-visualization", // 2024-09-12
      "how-to-be-a-productive-developer", // 2024-09-13
      "use-the-javascript-selection-api-to-build-a-rich-text-editor", // 2024-09-16
      "javascript-timer-how-to-set-a-timer-function-in-js", // 2024-09-16
      "how-to-set-up-eslint-prettier-stylelint-and-lint-staged-in-nextjs", // 2024-09-16
      "how-to-handle-side-effects-in-jest", // 2024-09-16
      "use-the-farm-stack-to-develop-full-stack-apps", // 2024-09-18
      "how-to-use-css-to-improve-web-accessibility", // 2024-09-18
      "learn-how-to-secure-api-servers", // 2024-09-19
      "master-object-oriented-programming-and-design-patterns-in-c", // 2024-09-19
      "how-to-create-a-nextjs-pwa", // 2024-09-20,
      "ecs-monitoring-explained-with-examples", // 2024-09-23
      "how-to-get-a-memory-map-of-your-system-using-bios-interrupts", // 2024-09-23
      "ai-chatbot-with-spring-react-docker", // 2024-09-23
      "how-to-write-benchmark-tests-for-your-golang-functions", // 2024-09-23
      "boost-web-performance-with-prefetching", // 2024-09-23
      "create-react-reusable-modal-component", // 2024-09-24
      "learn-cuda-programming", // 2024-09-24
      "how-to-work-with-sql-databases-in-go", // 2024-09-24
      "flutter-streams-and-services", // 2024-09-25
      "learn-react-hooks-with-example-code", // 2024-09-25
      "tools-for-code-reuse", // 2024-09-25
      "end-to-end-machine-learning-course-project", // 2024-09-26
      "pass-the-microsoft-365-certified-fundamentals-ms-900-exam", // 2024-09-26
      "how-to-use-ssh-to-connect-to-github-guide-for-windows", // 2024-09-27
      "how-to-start-building-projects-with-llms", // 2024-09-30
      "new-react-19-features-you-should-know-with-code-examples", // 2024-09-30
      "improve-your-data-science-skills-by-solving-kaggle-challenges", // 2024-09-30
      "learn-aspnet-core-mvc-with-net-9", // 2024-10-02
      "new-javascript-array-methods-to-help-you-write-better-cleaner-code", // 2024-10-02
      "authenticate-react-app-using-firebase", // 2024-10-02
      "integrate-wordpress-with-nextjs", // 2024-10-02
      WORK_WITH_SQLITE_IN_PYTHON_HANDBOOK, // 2024-10-02
      "how-to-use-tooltips-in-jetpack-compose", // 2024-10-02
      LEARN_HTTP_METHODS_LIKE_GET_POST_AND_DELETE_A_HANDBOOK_WITH_CODE_EXAMPLES, // 2024-10-02     
      "how-to-use-medusa-for-fast-multi-protocol-brute-force-attacks-security-tutorial", // 2024-10-02
      "how-to-run-database-migrations-in-kubernetes", // 2024-10-02
      "how-i-built-a-custom-video-conferencing-app-with-stream-and-nextjs", // 2024-10-03
      "the-power-of-wordlists-why-every-ethical-hacker-needs-one", // 2024-10-03
      "improve-front-end-development-workflow-with-zenui-library", // 2024-10-03
      "how-to-create-linux-device-drivers", // 2024-10-03
      "how-to-start-your-open-source-journey-beginners-guide", // 2024-10-03
      "understand-how-expressjs-works-by-building-your-own-server-multiplexer-from-scratch", // 2024-10-03
      "react-best-practices-ever-developer-should-know", // 2024-10-03
      "create-a-front-end-portfolio-project-with-nextjs-and-threejs", // 2024-10-03
      "how-to-run-r-programs-directly-in-jupyter-notebook-locally", // 2024-10-03
      "hack-your-first-machine-a-guide-for-aspiring-security-enthusiasts", // 2024-10-03
      "how-to-design-and-develop-web-apis-essential-guidelines", // 2024-10-07
      "what-are-pre-rendering-and-hydration-in-web-dev", // 2024-10-07
      "create-desktop-apps-with-electron-react-and-typescript", // 2024-10-08
      "getting-started-with-matplotlib", // 2024-10-08
      "improve-hacking-skills-by-playing-wargames", // 2024-10-08
      "how-to-use-switch-case-in-arduino-control-leds", // 2024-10-08
      "javascript-refresher-for-react-beginners", // 2024-10-09
      "key-cybersecurity-concepts-for-career", // 2024-10-09
    ]],
  ]),
}