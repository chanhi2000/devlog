import { SidebarInfoTemplate } from ".";

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
    ]],[
    "java-spring",[
      "oauth2-resourceserver-with-spring-security", // 2024-05-08
      "how-to-integrate-spring-boot-with-gatling", // 2024-07-08
      "build-a-crud-app-spring-boot-neon-postgres", // 2024-07-26
    ]],[
    "java-android",[
      "working-on-a-multiple-library-project-in-android", // 2024-04-27
      "migrate-from-play-core-library", // 2024-06-26
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
    ]],[
    "ts", [
      "learn-typescript-with-interactive-lessons", // 2024-07-09
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
    ]],[
    "js-vue", [
      "build-a-vue-ecommerce-app-using-msw", // 2024-07-08
    ]],[
    "js-next", [
      "learn-to-code-rest-apis-using-nextjs-14", // 2024-06-04
      "mastering-shadcn-ui-components", // 2024-06-28
      "nextjs-clerk-neon-fullstack-development", // 2024-07-10
      "server-side-rendering-in-next-js-for-improved-seo", // 2024-07-17
      "next-js-performance-optimization", // 2024-07-19
      "build-an-invoice-saas-app-with-next-js-and-neon-postgres", // 2024-08-01
      "how-to-index-nextjs-pages-with-indexnow", // 2024-08-06
    ]],[
    "js-nest", [
      "how-to-setup-typeorm-datasource-nestjs-app", // 2024-04-25
      "how-to-add-jwt-based-authentication-in-nest-js", // 2024-07-31
    ]],[
    "js-supabase", [
      "add-auth-to-flutter-apps-with-supabase-auth-ui", // 2024-06-03
    ]],[
    "css", [
      "perfect-html-input", // 2023-01-05
      "how-to-add-media-to-your-html-email-template", // 2024-04-23
      "how-to-create-a-mansory-layout-using-html-and-css", // 2024-06-18
      "breakpoints-for-responsive-web-design", // 2024-06-24
      "media-queries-vs-container-queries", // 2024-06-28
      "create-24-css-projects", // 2024-07-17
      "build-a-bitcoin-to-usd-calculator", // 2024-07-22
    ]],[
    "css-tailwind", [
      "how-to-build-a-login-page-with-material-tailwind-framework", // 2024-04-29
      "build-a-counter-button-with-react", // 2024-07-10
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
      "applied-data-science-with-python-book", // 2024-06-04
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
      "pyspark-for-beginners", // 2024-06-26
      "what-is-a-markov-chain", // 2024-07-08
      "use-python-sdk-to-build-a-web-scraper", // 2024-07-10
      "how-to-use-python-generators", // 2024-07-10
      "what-are-monte-carlo-methods", // 2024-07-16
      "how-to-build-a-quantum-ai-model", // 2024-07-23
      "how-to-build-an-interpretable-ai-deep-learning-model", // 2024-07-23
      "what-is-recursion", // 2024-07-25
      "basic-control-theory-with-python", // 2024-08-06
      "what-is-a-kalman-filter-with-python-code-examples", // 2024-08-07
    ]],[
    "py-django", [
      "how-to-create-an-analytics-dashboard-in-django-app", // 2020.02.12
      "how-to-secure-your-django-app", // 2024-05-22
    ]],[
    "py-flask", [
      "how-to-implement-instant-search-with-flask-and-htmx", // 2024-07-22
    ]],[
    "dart", [
      "how-to-develop-a-flutter-app-from-scratch", // 2024-04-26
      "how-to-make-your-flutter-package-privacy-manifest-compatible", // 2024-05-20
      "add-auth-to-flutter-apps-with-supabase-auth-ui", // 2024-06-03
      "build-a-youtube-clone-with-flutter-firebase-and-riverpod", // 2024-06-04
      "migrate-from-play-core-library", // 2024-06-26
      "migrate-a-flutter-application-from-getit-to-bloc", // 2024-07-19
      "how-to-use-enhanced-enums-in-dart", // 2024-07-22
    ]],[
    "rust", [
      "procedural-macros-in-rust", // 2024-04-24
      "rust-tutorial-build-a-json-parse", // 2024-05-29
      "build-and-deploy-smart-contract-rust-gear-protocol", // 2024-06-04
    ]],[
    "go", [
      "how-to-handle-concurrency-in-go", // 2024-05-10
      "learn-the-basics-of-go-by-building-a-full-stack-web-app-with-react-and-go", // 2024-05-30
      "learn-how-to-build-a-decentralized-file-storage-system-with-go", // 2024-06-05
      "real-time-chat-with-go-fiber-htmx", // 2024-06-06
      "how-to-create-database-migrations-in-go", // 2024-06-26
      "go-for-absolute-beginners", // 2024-07-01
      "encoding-and-decoding-data-in-golang", // 2024-08-05
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
    ]],[
    "cs-blazor", [
      "use-local-storage-in-blazor-apps", // 2024-07-29
    ]],[
    "c", [
      "complete-c-programming-course-from-dr-chuck", // 2024-05-30
    ]],[
    "cpp", [
      "run-sql-like-queries-on-cplusplus-files", // 2024-05-0
    ]],[
    "php", [
      "php-jwt-authentication-implementation", // 2024-04-24
      "php-array-handbook", // 2024-05-08    
      "php-arrays-how-to-rebuild-the-football-team-cards-with-php-and-mongodb", // 2024-06-18
    ]],[
    "sh", [
      "linux-terminal-piping-and-redirection-guide", //2024-04-26
    ]],[
    "git", [
      "git-checkout-remote-branch-how-to-fetch-and-list-remote-branches", // 2024-04-30
      "how-to-use-git-submodules", // 2024-05-07
      "what-is-trunk-based-development", // 2024-06-18
    ]],[
    "gd", [
      "learn-to-create-a-3d-rpg-game-with-godot", // 2024-06-20
    ]],[
    "hs", [
      "how-to-use-pandoc", // 2024-07-09
    ]],[
    "github", [
      "create-personalized-github-profile-page", // 2024-05-01
      "how-to-become-an-open-source-maintainer", // 2024-05-20
      "how-to-create-notice-blocks-in-markdown", // 2024-06-10
      "how-to-host-static-sites-on-azure-static-web-apps", // 2024-06-18
      "how-to-set-up-a-ci-cd-pipeline-with-husky-and-github-actions", // 2024-07-15
      "pass-the-github-advanced-security-certification-exam", // 2024-07-17
    ]],[
    "macos", [
      "mac-control-keyboard-shortcuts-hotkeys-that-work-everywhere-in-macos", //2024-04-25
      "how-to-install-python-on-a-mac", // 2024-05-09
      "how-to-fix-python-installation-errors-on-mac", // 2024-06-10
    ]],[
    "linux-debian", [
      "learn-linux-for-beginners-book-basic-to-advanced", // 2024-07-12
    ]],[
    "linux-fedora", [
      "free-linux-crash-course-with-labs", // 2024-06-13
    ]],[
    "docker", [
      "how-to-create-database-migrations-in-go", // 2024-06-26
    ]],[
    "k8s", [
      "how-to-run-postgres-in-kubernetes",  // 2024-05-08
    ]],[
    "aws", [
      "what-is-amazon-ec2-auto-scaling", // 2024-05-06
      "pass-the-aws-certified-solutions-architect-associate-certification", // 2024-05-23
      "build-an-eks-cluster-using-aws-local-zones-with-aws-cdk", // 2024-05-28
      "comparing-iac-tools-aws-cdk-cloudformation-terraform", // 2024-06-03
      "auto-scaling-and-load-balancing", // 2024-06-17
      "how-to-use-time-to-live-in-event-driven-architecture", // 2024-06-19
      "upload-large-files-with-aws", // 2024-07-08
      "prepare-to-pass-the-aws-sysops-administrator-associate-soa-c02-certification", // 2024-07-09
      "how-to-set-up-grafana-on-ec2", // 2024-08-02
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
    ]],[
    "gatling", [
      "how-to-integrate-spring-boot-with-gatling", // 2024-07-08
    ]],[
    "selenium", [
      "empire-state-building-run-up-analysis-with-python", // 2024-05-08
    ]],[
    "vim", [
      "mastering-vim-your-guide-to-efficient-text-editing", // 2024-06-24
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
    ]],[
    "spark", [
      "pyspark-for-beginners", // 2024-06-26
    ]],[
    "vscode", [
      "how-to-deploy-node-js-app-on-azure", // 2024-07-17
    ]],[
    "xls", [
      "excel-vs-google-sheets-tables", // 2024-07-02
    ]],[
    "google-drive", [
      "excel-vs-google-sheets-tables", // 2024-07-02
    ]],[
    "system-design", [
      "minimum-viable-product-between-an-idea-and-the-product", // 2024-05-24
      "how-to-use-viewing-patterns-in-your-website-design", // 2024-06-12
      "auto-scaling-and-load-balancing", // 2024-06-17
      "best-practices-for-accessibility-in-web-development", // 2024-06-20
      "breakpoints-for-responsive-web-design", // 2024-06-24
      "learn-system-design-principles", // 2024-07-25
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
    ]],[
    "llm", [
      "automated-unit-testing-with-testgen-llm-and-cover-agent", // 2024-06-02
      "retrieval-augmented-generation-rag-handbook", // 2024-06-11
      "building-intelligent-apps-with-mistral-ai", // 2024-06-18
      "learn-rag-fundamentals-and-advanced-techniques", // 2024-08-01
    ]],[
    "math", [
      "linear-algebra-crash-course-mathematics-for-machine-learning-and-generative-ai", // 2024-05-28
      "how-do-numerical-conversions-work", // 2024-05-29
      "linear-algebra-roadmap", // 2024-06-04
    ]],[
    "fnce", [
      "what-is-a-kalman-filter-with-python-code-examples", // 2024-08-07
    ]],[
    "coen", [
      "learn-about-operating-systems-in-depth", // 2024-08-06
    ]],[
    "all", [
      "how-to-create-an-analytics-dashboard-in-django-app", // 2020.02.12
      "perfect-html-input", // 2023-01-05
      "how-to-parse-a-string-in-python", // 2023-05-04
      "postgresql-indexing-strategies", // 2023-05-12
      "check-python-version-how-to-check-py-in-mac-windows-and-linux", // 2023-07-07
      "loop-through-arrays-javascript", // 2023-10-31
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
      "applied-data-science-with-python-book", // 2024-06-04
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
    ]],
  ]),
}