import { SidebarGroupItem } from 'vuepress-theme-hope'

export const template: SidebarGroupItem = {
    text: 'hackingwithswift.com',
    collapsible: true,
    icon: 'https://hackingwithswift.com/favicon.svg',
    children: [
      '/explore/articles/hackingwithswift.com/swift2.md', // 2015-06-08
      '/explore/articles/hackingwithswift.com/ios9.md', // 2015-06-11
      '/explore/articles/hackingwithswift.com/new-features-swift-2.md', // 2015-06-11
      '/explore/articles/hackingwithswift.com/safari-content-blocking-ios9.md', // 2015-06-12
      '/explore/articles/hackingwithswift.com/safari-content-blocking-ios9-install.md', // 2015-06-12
      '/explore/articles/hackingwithswift.com/ios9-tutorials.md', // 2015-06-11
      '/explore/articles/hackingwithswift.com/swift2-2.md', // 2016-03-21
      '/explore/articles/hackingwithswift.com/ios10.md', // 2016-06-13
      '/explore/articles/hackingwithswift.com/swift3.md', // 2016-06-13
      '/explore/articles/hackingwithswift.com/whats-new-in-ios-11.md', // 2016-06-20
      '/explore/articles/hackingwithswift.com/swift3-1.md', // 2017-01-26
      '/explore/articles/hackingwithswift.com/swift4.md', // 2017-06-05
      '/explore/articles/hackingwithswift.com/swift-4-1-improves-codable-with-keydecodingstrategy.md', // 2018-02-05
      '/explore/articles/hackingwithswift.com/learn-whats-new-in-swift-4-1-with-a-playground.md', // 2018-04-04
      '/explore/articles/hackingwithswift.com/whats-new-in-swift-4-1.md', // 2018-06-13
      '/explore/articles/hackingwithswift.com/how-to-use-dynamiccallable-in-swift.md', // 2018-11-27
      '/explore/articles/hackingwithswift.com/whats-new-in-swift-4-2.md', // 2018-12-17
      '/explore/articles/hackingwithswift.com/whats-new-in-swift-5-0.md', // 2019-03-28
      '/explore/articles/hackingwithswift.com/how-to-use-dynamic-member-lookup-in-swift.md', // 2019-03-29
      '/explore/articles/hackingwithswift.com/whats-new-in-swift-5-1.md', // 2019-09-18
      '/explore/articles/hackingwithswift.com/new-syntax-swift-2-error-handling-try-catch', // 2019-09-23
      '/explore/articles/hackingwithswift.com/new-syntax-swift-2-guard', // 2019-09-23
      '/explore/articles/hackingwithswift.com/new-syntax-swift-2-defer', // 2019-09-23
      '/explore/articles/hackingwithswift.com/new-syntax-swift-2-availability-checking.md', // 2019-09-23
      '/explore/articles/hackingwithswift.com/learn-essential-swift-in-one-hour.md',
      '/explore/articles/hackingwithswift.com/i-screwed-up-one-key-accessibility-behavior-and-now-i-m-on-a-mission-to-do-better.md', // 2023-06-23
      '/explore/articles/hackingwithswift.com/whats-new-in-swift-6.md', // 2024-06-10
      '/explore/articles/hackingwithswift.com/whats-new-in-swiftui-for-ios-18.md', // 2024-06-21
      {
        text: "What's new in Swift?",
        collapsible: true,
        icon: 'fa-brands fa-swift',
        children: [
          '/explore/articles/hackingwithswift.com/swift/README.md',
          {
            text: "Changes in Swift 6.0",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/6.0/concurrency.md',
              '/explore/articles/hackingwithswift.com/swift/6.0/count-where.md',
              '/explore/articles/hackingwithswift.com/swift/6.0/typed-throws.md',
              '/explore/articles/hackingwithswift.com/swift/6.0/pack-iteration.md',
              '/explore/articles/hackingwithswift.com/swift/6.0/rangeset.md',
              '/explore/articles/hackingwithswift.com/swift/6.0/access-level-import.md',
              '/explore/articles/hackingwithswift.com/swift/6.0/noncopyable-upgrades.md',
              '/explore/articles/hackingwithswift.com/swift/6.0/int128.md',
              '/explore/articles/hackingwithswift.com/swift/6.0/bitwisecopyable.md',
            ]
          }, {
            text: "Changes in Swift 5.10",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/5.10/complete-concurrency.md',
              '/explore/articles/hackingwithswift.com/swift/5.10/nested-protocols.md',
              '/explore/articles/hackingwithswift.com/swift/5.10/deprecate-uiapplicationmain.md',
              '/explore/articles/hackingwithswift.com/swift/5.10/actor-initialization.md',
            ]
          }, {
            text: "Changes in Swift 5.9",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/5.9/if-switch-expressions.md',
              '/explore/articles/hackingwithswift.com/swift/5.9/variadic-generics.md',
              '/explore/articles/hackingwithswift.com/swift/5.9/macros.md',
              '/explore/articles/hackingwithswift.com/swift/5.9/noncopyable-structs-and-enums.md',
              '/explore/articles/hackingwithswift.com/swift/5.9/consume-operator.md',
              '/explore/articles/hackingwithswift.com/swift/5.9/convenience-asyncthrowingstream-makestream.md',
              '/explore/articles/hackingwithswift.com/swift/5.9/sleep-for-clock.md',
              '/explore/articles/hackingwithswift.com/swift/5.9/discarding-task-groups.md',
            ]
          }, {
            text: "Changes in Swift 5.8",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/5.8/lift-result-builder-limitations.md',
              '/explore/articles/hackingwithswift.com/swift/5.8/function-back-deployment.md',
              '/explore/articles/hackingwithswift.com/swift/5.8/implicit-self-weak-capture.md',
              '/explore/articles/hackingwithswift.com/swift/5.8/concise-magic-file-names.md',
              '/explore/articles/hackingwithswift.com/swift/5.8/opening-existential-optional.md',
              '/explore/articles/hackingwithswift.com/swift/5.8/collection-downcasts.md',
            ]
          }, {
            text: "Changes in Swift 5.7",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/5.7/if-let-shorthand.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/multi-statement-inference.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/clock.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/regexes.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/default-type-inference.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/top-level-concurrency.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/opaque-parameter-declarations.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/structural-opaque-result-types.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/unlock-existentials.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/primary-associated-types.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/constrained-existentials.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/distributed-actors.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/buildpartialblock.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/implicitly-opened-existentials.md',
              '/explore/articles/hackingwithswift.com/swift/5.7/noasync.md',
            ]
          }, {
            text: "Changes in Swift 5.6",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/5.6/existential-any.md',
              '/explore/articles/hackingwithswift.com/swift/5.6/type-placeholders.md',
              '/explore/articles/hackingwithswift.com/swift/5.6/codingkeyrepresentable.md',
              '/explore/articles/hackingwithswift.com/swift/5.6/unavailable.md',
              '/explore/articles/hackingwithswift.com/swift/5.6/preconcurrency.md',
              '/explore/articles/hackingwithswift.com/swift/5.6/swiftpm-plugins.md',
            ]
          }, {
            text: "Changes in Swift 5.5",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/5.5/async-await.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/async-sequences.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/effectful-read-only-properties.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/structured-concurrency.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/async-let-bindings.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/continuations.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/actors.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/global-actors.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/sendable.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/postfix-if.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/interchangeable-cgfloat-double.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/codable-enums.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/local-lazy.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/property-wrapper-function-parameters.md',
              '/explore/articles/hackingwithswift.com/swift/5.5/static-member-generic.md',
            ]
          }, {
            text: "Changes in Swift 5.4",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/5.4/improved-implicit-member-syntax.md',
              '/explore/articles/hackingwithswift.com/swift/5.4/multiple-variadic-parameters-in-functions.md',
              '/explore/articles/hackingwithswift.com/swift/5.4/local-functions-now-support-overloading.md',
              '/explore/articles/hackingwithswift.com/swift/5.4/local-variables-same-name.md',
              '/explore/articles/hackingwithswift.com/swift/5.4/result-builders.md',
              '/explore/articles/hackingwithswift.com/swift/5.4/local-property-wrappers.md',
              '/explore/articles/hackingwithswift.com/swift/5.4/spm-executable-targets.md',
            ]
          }, {
            text: "Changes in Swift 5.3",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/5.3/multipattern-catch.md',
              '/explore/articles/hackingwithswift.com/swift/5.3/multiple-trailing-closures.md',
              '/explore/articles/hackingwithswift.com/swift/5.3/synthesized-comparable-enum.md',
              '/explore/articles/hackingwithswift.com/swift/5.3/removing-self.md',
              '/explore/articles/hackingwithswift.com/swift/5.3/atmain.md',
              '/explore/articles/hackingwithswift.com/swift/5.3/where-clauses.md',
              '/explore/articles/hackingwithswift.com/swift/5.3/enum-protocol-witnesses.md',
              '/explore/articles/hackingwithswift.com/swift/5.3/refined-didset.md',
              '/explore/articles/hackingwithswift.com/swift/5.3/float16.md',
              '/explore/articles/hackingwithswift.com/swift/5.3/spm-improvements.md',
            ]
          }, {
            text: "Changes in Swift 5.2",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/5.2/keypath-expressions.md',
              '/explore/articles/hackingwithswift.com/swift/5.2/callasfunction.md',
              '/explore/articles/hackingwithswift.com/swift/5.2/subscript-default-arguments.md',
              '/explore/articles/hackingwithswift.com/swift/5.2/lazy-filtering.md',
              '/explore/articles/hackingwithswift.com/swift/5.2/new-diagnostics.md',
            ]
          }, {
            text: "Changes in Swift 5.1",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/5.1/improved-memberwise-initializers.md',
              '/explore/articles/hackingwithswift.com/swift/5.1/implicit-returns.md',
              '/explore/articles/hackingwithswift.com/swift/5.1/universal-self.md',
              '/explore/articles/hackingwithswift.com/swift/5.1/opaque-return-types.md',
              '/explore/articles/hackingwithswift.com/swift/5.1/static-subscripts.md',
              '/explore/articles/hackingwithswift.com/swift/5.1/ambiguous-none-enum.md',
              '/explore/articles/hackingwithswift.com/swift/5.1/matching-optional-enums.md',
              '/explore/articles/hackingwithswift.com/swift/5.1/ordered-collection-diffing.md',
              '/explore/articles/hackingwithswift.com/swift/5.1/creating-uninitialized-arrays.md',
            ]
          }, {
            text: "Changes in Swift 5.0",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/5.0/raw-strings.md',
              '/explore/articles/hackingwithswift.com/swift/5.0/result.md',
              '/explore/articles/hackingwithswift.com/swift/5.0/string-interpolation.md',
              '/explore/articles/hackingwithswift.com/swift/5.0/dynamically-callable-types.md',
              '/explore/articles/hackingwithswift.com/swift/5.0/handling-future-enum-cases.md',
              '/explore/articles/hackingwithswift.com/swift/5.0/flattening-optionals.md',
              '/explore/articles/hackingwithswift.com/swift/5.0/integer-multiples.md',
              '/explore/articles/hackingwithswift.com/swift/5.0/compactmapvalues.md',
            ]
          }, {
            text: "Changes in Swift 4.2",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/4.2/caseiterable.md',
              '/explore/articles/hackingwithswift.com/swift/4.2/warning-error.md',
              '/explore/articles/hackingwithswift.com/swift/4.2/dynamic-member-lookup.md',
              '/explore/articles/hackingwithswift.com/swift/4.2/conditional-conformance.md',
              '/explore/articles/hackingwithswift.com/swift/4.2/random.md',
              '/explore/articles/hackingwithswift.com/swift/4.2/hashable.md',
              '/explore/articles/hackingwithswift.com/swift/4.2/allsatisfy.md',
              '/explore/articles/hackingwithswift.com/swift/4.2/remove-where.md',
              '/explore/articles/hackingwithswift.com/swift/4.2/toggle.md',
            ]
          }, {
            text: "Changes in Swift 4.1",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/4.1/synthesized-protocols.md',
              '/explore/articles/hackingwithswift.com/swift/4.1/key-decoding-strategies.md',
              '/explore/articles/hackingwithswift.com/swift/4.1/conditional-conformance.md',
              '/explore/articles/hackingwithswift.com/swift/4.1/recursive-constraints.md',
              '/explore/articles/hackingwithswift.com/swift/4.1/import-testing.md',
              '/explore/articles/hackingwithswift.com/swift/4.1/target-environment.md',
              '/explore/articles/hackingwithswift.com/swift/4.1/compactmap.md',
            ]
          }, {
            text: "Changes in Swift 4.0",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/4.0/codable.md',
              '/explore/articles/hackingwithswift.com/swift/4.0/multiline-strings.md',
              '/explore/articles/hackingwithswift.com/swift/4.0/keypaths.md',
              '/explore/articles/hackingwithswift.com/swift/4.0/dictionaries.md',
              '/explore/articles/hackingwithswift.com/swift/4.0/strings.md',
              '/explore/articles/hackingwithswift.com/swift/4.0/one-sided-ranges.md',
            ]          
          }, {
            text: "Changes in Swift 3.1",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/3.1/concrete-constrained-extensions.md',
              '/explore/articles/hackingwithswift.com/swift/3.1/generic-nested-types.md',
              '/explore/articles/hackingwithswift.com/swift/3.1/prefix-drop.md',
            ]
          }, {
            text: "Changes in Swift 3.0",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/3.0/function-parameters.md',
              '/explore/articles/hackingwithswift.com/swift/3.0/omit-needless-words.md',
              '/explore/articles/hackingwithswift.com/swift/3.0/lower-camel-case.md',
              '/explore/articles/hackingwithswift.com/swift/3.0/c-functions.md',
              '/explore/articles/hackingwithswift.com/swift/3.0/verbs-and-nouns.md',
            ]
          }, {
            text: "Changes in Swift 2.2",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/2.2/increment-decrement.md',
              '/explore/articles/hackingwithswift.com/swift/2.2/c-loops.md',
              '/explore/articles/hackingwithswift.com/swift/2.2/comparing-tuples.md',
              '/explore/articles/hackingwithswift.com/swift/2.2/tuple-splat.md',
              '/explore/articles/hackingwithswift.com/swift/2.2/more-keywords.md',
              '/explore/articles/hackingwithswift.com/swift/2.2/variable-parameters.md',
              '/explore/articles/hackingwithswift.com/swift/2.2/renamed-identifiers.md',
              '/explore/articles/hackingwithswift.com/swift/2.2/stringified-selectors.md',
              '/explore/articles/hackingwithswift.com/swift/2.2/version-checking.md',
            ]
          }, {
            text: "Changes in Swift 2.1",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/2.1/string-interpolation.md',
            ]
          }, {
            text: "Changes in Swift 2.0",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/2.0/try.md',
              '/explore/articles/hackingwithswift.com/swift/2.0/guard.md',
              '/explore/articles/hackingwithswift.com/swift/2.0/strings.md',
              '/explore/articles/hackingwithswift.com/swift/2.0/defer.md',
              '/explore/articles/hackingwithswift.com/swift/2.0/mutability.md',
              '/explore/articles/hackingwithswift.com/swift/2.0/api-availability.md',
            ]
          }, {
            text: "Changes in Swift 1.2",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/1.2/zip.md',
              '/explore/articles/hackingwithswift.com/swift/1.2/flatmap.md',
              '/explore/articles/hackingwithswift.com/swift/1.2/noescape.md',
              '/explore/articles/hackingwithswift.com/swift/1.2/static.md',
              '/explore/articles/hackingwithswift.com/swift/1.2/constants.md',
              '/explore/articles/hackingwithswift.com/swift/1.2/set.md',
              '/explore/articles/hackingwithswift.com/swift/1.2/bridging.md',
              '/explore/articles/hackingwithswift.com/swift/1.2/if-let.md',
              '/explore/articles/hackingwithswift.com/swift/1.2/typecasting.md',
            ]
          }, {
            text: "Changes in Swift 1.1",
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swift/1.1/countelements.md',
              '/explore/articles/hackingwithswift.com/swift/1.1/nsapplicationmain.md',
            ]
          },
        ]
      }, {
        text: 'Hacking with iOS',
        collapsible: true,
        icon: 'iconfont icon-ios',
        children: [
          '/explore/articles/hackingwithswift.com/read/README.md',
          {
            text: 'Introduction: Swift for Complete Beginners',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/00/overview.md',
              '/explore/articles/hackingwithswift.com/read/00/01-how-to-install-xcode-and-create-a-playground.md',
              '/explore/articles/hackingwithswift.com/read/00/02-variables-and-constants.md',
              '/explore/articles/hackingwithswift.com/read/00/03-types-of-data.md',
              '/explore/articles/hackingwithswift.com/read/00/04-operators.md',
              '/explore/articles/hackingwithswift.com/read/00/05-string-interpolation.md',
              '/explore/articles/hackingwithswift.com/read/00/06-arrays.md',
              '/explore/articles/hackingwithswift.com/read/00/07-dictionaries.md',
              '/explore/articles/hackingwithswift.com/read/00/08-conditional-statements.md',
              '/explore/articles/hackingwithswift.com/read/00/09-loops.md',
              '/explore/articles/hackingwithswift.com/read/00/10-switch-case.md',
              '/explore/articles/hackingwithswift.com/read/00/11-functions.md',
              '/explore/articles/hackingwithswift.com/read/00/12-optionals.md',
              '/explore/articles/hackingwithswift.com/read/00/13-optional-chaining.md',
              '/explore/articles/hackingwithswift.com/read/00/14-enumerations.md',
              '/explore/articles/hackingwithswift.com/read/00/15-structs.md',
              '/explore/articles/hackingwithswift.com/read/00/16-classes.md',
              '/explore/articles/hackingwithswift.com/read/00/17-properties.md',
              '/explore/articles/hackingwithswift.com/read/00/18-static-properties-and-methods.md',
              '/explore/articles/hackingwithswift.com/read/00/19-access-control.md',
              '/explore/articles/hackingwithswift.com/read/00/20-polymorphism-and-typecasting.md',
              '/explore/articles/hackingwithswift.com/read/00/21-closures.md',
              '/explore/articles/hackingwithswift.com/read/00/22-protocols.md',
              '/explore/articles/hackingwithswift.com/read/00/23-extensions.md',
              '/explore/articles/hackingwithswift.com/read/00/24-protocol-extensions.md',
              '/explore/articles/hackingwithswift.com/read/00/25-wrap-up.md',
            ]
          }, {
            text: 'Project 1: Storm Viewer',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/01/overview.md',
              '/explore/articles/hackingwithswift.com/read/01/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/01/02-listing-images-with-filemanager.md',
              '/explore/articles/hackingwithswift.com/read/01/03-designing-our-interface.md',
              '/explore/articles/hackingwithswift.com/read/01/04-building-a-detail-screen.md',
              '/explore/articles/hackingwithswift.com/read/01/05-loading-images-with-uiimage.md',
              '/explore/articles/hackingwithswift.com/read/01/06-final-tweaks-hidesbarsontap-and-large-titles.md',
              '/explore/articles/hackingwithswift.com/read/01/07-wrap-up.md',
            ]
          }, {
            text: 'Project 2: Guess the Flag',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/02/overview.md',
              '/explore/articles/hackingwithswift.com/read/02/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/02/02-designing-your-layout.md',
              '/explore/articles/hackingwithswift.com/read/02/03-making-the-basic-game-work-uibutton-and-calayer.md',
              '/explore/articles/hackingwithswift.com/read/02/04-guess-which-flag-random-numbers.md',
              '/explore/articles/hackingwithswift.com/read/02/05-from-outlets-to-actions-creating-an-ibaction.md',
              '/explore/articles/hackingwithswift.com/read/02/06-wrap-up.md',
            ]
          }, {
            text: 'Project 3: Social Media',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/03/overview.md',
              '/explore/articles/hackingwithswift.com/read/03/01-about-technique-projects.md',
              '/explore/articles/hackingwithswift.com/read/03/02-uiactivityviewcontroller-explained.md',
              '/explore/articles/hackingwithswift.com/read/03/03-wrap-up.md',
            ]
          }, {
            text: 'Project 4: Easy Browser',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/04/overview.md',
              '/explore/articles/hackingwithswift.com/read/04/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/04/02-creating-a-simple-browser-with-wkwebview.md',
              '/explore/articles/hackingwithswift.com/read/04/03-choosing-a-website-uialertcontroller-action-sheets.md',
              '/explore/articles/hackingwithswift.com/read/04/04-monitoring-page-loads-uitoolbar-and-uiprogressview.md',
              '/explore/articles/hackingwithswift.com/read/04/05-refactoring-for-the-win.md',
              '/explore/articles/hackingwithswift.com/read/04/06-wrap-up.md',
            ]
          }, {
            text: 'Project 5: Word Scramble',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/05/overview.md',
              '/explore/articles/hackingwithswift.com/read/05/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/05/02-reading-from-disk-contentsof.md',
              '/explore/articles/hackingwithswift.com/read/05/03-pick-a-word-any-word-uialertcontroller.md',
              '/explore/articles/hackingwithswift.com/read/05/04-prepare-for-submission-lowercased-and-indexpath.md',
              '/explore/articles/hackingwithswift.com/read/05/05-checking-for-valid-answers.md',
              '/explore/articles/hackingwithswift.com/read/05/06-or-else-what.md',
              '/explore/articles/hackingwithswift.com/read/05/07-wrap-up.md',
            ]
          }, {
            text: 'Project 6: Auto Layout',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/06/overview.md',
              '/explore/articles/hackingwithswift.com/read/06/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/06/02-advanced-auto-layout.md',
              '/explore/articles/hackingwithswift.com/read/06/03-auto-layout-in-code-addconstraints-with-visual-format-language.md',
              '/explore/articles/hackingwithswift.com/read/06/04-auto-layout-metrics-and-priorities-constraintswithvisualformat.md',
              '/explore/articles/hackingwithswift.com/read/06/05-auto-layout-anchors.md',
              '/explore/articles/hackingwithswift.com/read/06/06-wrap-up.md',
            ]
          }, {
            text: 'Project 7: Whitehouse Petitions',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/07/overview.md',
              '/explore/articles/hackingwithswift.com/read/07/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/07/02-creating-the-basic-ui-uitabbarcontroller.md',
              '/explore/articles/hackingwithswift.com/read/07/03-parsing-json-using-the-codable-protocol.md',
              '/explore/articles/hackingwithswift.com/read/07/04-rendering-a-petition-loadhtmlstring.md',
              '/explore/articles/hackingwithswift.com/read/07/05-finishing-touches-didfinishlaunchingwithoptions.md',
              '/explore/articles/hackingwithswift.com/read/07/06-wrap-up.md',
            ]
          }, {
            text: 'Project 8: 7 Swifty Words',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/08/overview.md',
              '/explore/articles/hackingwithswift.com/read/08/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/08/02-building-a-uikit-user-interface-programmatically.md',
              '/explore/articles/hackingwithswift.com/read/08/03-loading-a-level-and-adding-button-targets.md',
              '/explore/articles/hackingwithswift.com/read/08/04-its-play-time-firstindexof-and-joined.md',
              '/explore/articles/hackingwithswift.com/read/08/05-property-observers-didset.md',
              '/explore/articles/hackingwithswift.com/read/08/06-wrap-up.md',
            ]
          }, {
            text: 'Project 9: Grand Central Dispatch',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/09/overview.md',
              '/explore/articles/hackingwithswift.com/read/09/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/09/02-why-is-locking-the-ui-bad.md',
              '/explore/articles/hackingwithswift.com/read/09/03-gcd-101-async.md',
              '/explore/articles/hackingwithswift.com/read/09/04-back-to-the-main-thread-dispatchqueuemain.md',
              '/explore/articles/hackingwithswift.com/read/09/05-easy-gcd-using-performselectorinbackground.md',
              '/explore/articles/hackingwithswift.com/read/09/06-wrap-up.md',
            ]
          }, {
            text: 'Project 10: Names to Faces',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/10/overview.md',
              '/explore/articles/hackingwithswift.com/read/10/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/10/02-designing-uicollectionview-cells.md',
              '/explore/articles/hackingwithswift.com/read/10/03-uicollectionview-data-sources.md',
              '/explore/articles/hackingwithswift.com/read/10/04-importing-photos-with-uiimagepickercontroller.md',
              '/explore/articles/hackingwithswift.com/read/10/05-custom-subclasses-of-nsobject.md',
              '/explore/articles/hackingwithswift.com/read/10/06-connecting-up-the-people.md',
              '/explore/articles/hackingwithswift.com/read/10/07-wrap-up.md',
            ]
          }, {
            text: 'Project 11: Pachinko',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/11/overview.md',
              '/explore/articles/hackingwithswift.com/read/11/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/11/02-falling-boxes-skspritenode-uitouch-skphysicsbody.md',
              '/explore/articles/hackingwithswift.com/read/11/03-bouncing-balls-circleofradius.md',
              '/explore/articles/hackingwithswift.com/read/11/04-spinning-slots-skaction.md',
              '/explore/articles/hackingwithswift.com/read/11/05-collision-detection-skphysicscontactdelegate.md',
              '/explore/articles/hackingwithswift.com/read/11/06-scores-on-the-board-sklabelnode.md',
              '/explore/articles/hackingwithswift.com/read/11/07-special-effects-skemitternode.md',
              '/explore/articles/hackingwithswift.com/read/11/08-wrap-up.md',
            ]
          }, {
            text: 'Project 12: UserDefaults',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/12/overview.md',
              '/explore/articles/hackingwithswift.com/read/12/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/12/02-reading-and-writing-basics-userdefaults.md',
              '/explore/articles/hackingwithswift.com/read/12/03-fixing-project-10-nscoding.md',
              '/explore/articles/hackingwithswift.com/read/12/04-fixing-project-10-codable.md',
              '/explore/articles/hackingwithswift.com/read/12/05-wrap-up.md',
            ]
          }, {
            text: 'Project 13: Instafilter',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/13/overview.md',
              '/explore/articles/hackingwithswift.com/read/13/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/13/02-designing-the-interface.md',
              '/explore/articles/hackingwithswift.com/read/13/03-importing-a-picture.md',
              '/explore/articles/hackingwithswift.com/read/13/04-applying-filters-cicontext-cifilter.md',
              '/explore/articles/hackingwithswift.com/read/13/05-saving-to-the-ios-photo-library.md',
              '/explore/articles/hackingwithswift.com/read/13/06-wrap-up.md',
            ]
          }, {
            text: 'Project 14: Whack-a-Penguin',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/14/overview.md',
              '/explore/articles/hackingwithswift.com/read/14/01-setting-up.md', 
              '/explore/articles/hackingwithswift.com/read/14/02-getting-up-and-running-skcropnode.md', 
              '/explore/articles/hackingwithswift.com/read/14/03-penguin-show-thyself-skaction-movebyxyduration.md', 
              '/explore/articles/hackingwithswift.com/read/14/04-whack-to-win-skaction-sequences.md', 
              '/explore/articles/hackingwithswift.com/read/14/05-wrap-up.md', 
            ]
          }, {
            text: 'Project 15: Animation',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/15/overview.md',
              '/explore/articles/hackingwithswift.com/read/15/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/15/02-preparing-for-action.md',
              '/explore/articles/hackingwithswift.com/read/15/03-switch-case-animate-animatewithduration.md',
              '/explore/articles/hackingwithswift.com/read/15/04-transform-cgaffinetransform.md',
              '/explore/articles/hackingwithswift.com/read/15/05-wrap-up.md',
            ]
          }, {
            text: 'Project 16: Capital Cities',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/16/overview.md',
              '/explore/articles/hackingwithswift.com/read/16/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/16/02-up-and-running-with-mapkit.md',
              '/explore/articles/hackingwithswift.com/read/16/03-annotations-and-accessory-views-mkpinannotationview.md',
              '/explore/articles/hackingwithswift.com/read/16/04-wrap-up.md',
            ]
          }, {
            text: 'Project 17: Space Race',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/17/overview.md',
              '/explore/articles/hackingwithswift.com/read/17/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/17/02-space-the-final-frontier.md',
              '/explore/articles/hackingwithswift.com/read/17/03-bring-on-the-enemies-timer-lineardamping-angulardamping.md',
              '/explore/articles/hackingwithswift.com/read/17/04-making-contact-didbegin.md',
              '/explore/articles/hackingwithswift.com/read/17/05-wrap-up.md',
            ]
          }, {
            text: 'Project 18: Debugging',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/18/overview.md',
              '/explore/articles/hackingwithswift.com/read/18/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/18/02-basic-swift-debugging-using-print.md',
              '/explore/articles/hackingwithswift.com/read/18/03-debugging-with-assert.md',
              '/explore/articles/hackingwithswift.com/read/18/04-debugging-with-breakpoints.md',
              '/explore/articles/hackingwithswift.com/read/18/05-view-debugging.md',
              '/explore/articles/hackingwithswift.com/read/18/06-wrap-up.md',
            ]
          }, {
            text: 'Project 19: JavaScript Injection',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/19/overview.md',
              '/explore/articles/hackingwithswift.com/read/19/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/19/02-making-a-shell-app.md',
              '/explore/articles/hackingwithswift.com/read/19/03-adding-an-extension-nsextensionitem.md',
              '/explore/articles/hackingwithswift.com/read/19/04-what-do-you-want-to-get.md',
              '/explore/articles/hackingwithswift.com/read/19/05-establishing-communication.md',
              '/explore/articles/hackingwithswift.com/read/19/06-editing-multiline-text-with-uitextview.md',
              '/explore/articles/hackingwithswift.com/read/19/07-fixing-the-keyboard-notificationcenter.md',
              '/explore/articles/hackingwithswift.com/read/19/08-wrap-up.md',
            ]
          }, {
            text: 'Project 20: Fireworks Night',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/20/overview.md',
              '/explore/articles/hackingwithswift.com/read/20/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/20/02-ready-aim-fire-timer-and-follow.md',
              '/explore/articles/hackingwithswift.com/read/20/03-swipe-to-select.md',
              '/explore/articles/hackingwithswift.com/read/20/04-making-things-go-bang-skemitternode.md',
              '/explore/articles/hackingwithswift.com/read/20/05-wrap-up.md',
            ]
          }, {
            text: 'Project 21: Local Notifications',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/21/overview.md',
              '/explore/articles/hackingwithswift.com/read/21/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/21/02-scheduling-notifications-unusernotificationcenter-and-unnotificationrequest.md',
              '/explore/articles/hackingwithswift.com/read/21/03-acting-on-responses.md',
              '/explore/articles/hackingwithswift.com/read/21/04-wrap-up.md',
            ]
          }, {
            text: 'Project 22: Detect-a-Beacon',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/22/overview.md',
              '/explore/articles/hackingwithswift.com/read/22/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/22/02-requesting-location-core-location.md',
              '/explore/articles/hackingwithswift.com/read/22/03-hunting-the-beacon-clbeaconregion.md',
              '/explore/articles/hackingwithswift.com/read/22/04-wrap-up.md',
            ]
          }, {
            text: 'Project 23: Swifty Ninja',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/23/overview.md',
              '/explore/articles/hackingwithswift.com/read/23/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/23/02-basics-quick-start-skshapenode.md',
              '/explore/articles/hackingwithswift.com/read/23/03-shaping-up-for-action-cgpath-and-uibezierpath.md',
              '/explore/articles/hackingwithswift.com/read/23/04-enemy-or-bomb-avaudioplayer.md',
              '/explore/articles/hackingwithswift.com/read/23/05-follow-the-sequence.md',
              '/explore/articles/hackingwithswift.com/read/23/06-slice-to-win.md',
              '/explore/articles/hackingwithswift.com/read/23/07-game-over-man-sktexture.md',
              '/explore/articles/hackingwithswift.com/read/23/08-wrap-up.md',
            ]
          }, {
            text: 'Project 24: Swift Strings',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/24/overview.md',
              '/explore/articles/hackingwithswift.com/read/24/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/24/02-strings-are-not-arrays.md',
              '/explore/articles/hackingwithswift.com/read/24/03-working-with-strings-in-swift.md',
              '/explore/articles/hackingwithswift.com/read/24/04-formatting-strings-with-nsattributedstring.md',
              '/explore/articles/hackingwithswift.com/read/24/05-wrap-up.md',
            ]
          }, {
            text: 'Project 25: Selfie Share',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/25/overview.md',
              '/explore/articles/hackingwithswift.com/read/25/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/25/02-importing-photos-again.md',
              '/explore/articles/hackingwithswift.com/read/25/03-going-peer-to-peer-mcsession-mcbrowserviewcontroller.md',
              '/explore/articles/hackingwithswift.com/read/25/04-invitation-only-mcpeerid.md',
              '/explore/articles/hackingwithswift.com/read/25/05-wrap-up.md',
            ]
          }, {
            text: 'Project 26: Marble Maze',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/26/overview.md',
              '/explore/articles/hackingwithswift.com/read/26/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/26/02-loading-a-level-categorybitmask-collisionbitmask-contacttestbitmask.md',
              '/explore/articles/hackingwithswift.com/read/26/03-tilt-to-move-cmmotionmanager.md',
              '/explore/articles/hackingwithswift.com/read/26/04-contacting-but-not-colliding.md',
              '/explore/articles/hackingwithswift.com/read/26/05-wrap-up.md',
            ]
          }, {
            text: 'Project 27: Core Graphics',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/27/overview.md',
              '/explore/articles/hackingwithswift.com/read/27/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/27/02-creating-the-sandbox.md',
              '/explore/articles/hackingwithswift.com/read/27/03-drawing-into-a-core-graphics-context-with-uigraphicsimagerenderer.md',
              '/explore/articles/hackingwithswift.com/read/27/04-ellipses-and-checkerboards.md',
              '/explore/articles/hackingwithswift.com/read/27/05-transforms-and-lines.md',
              '/explore/articles/hackingwithswift.com/read/27/06-images-and-text.md',
              '/explore/articles/hackingwithswift.com/read/27/07-wrap-up.md',
            ]
          }, {
            text: 'Project 28: Secret Swift',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/28/overview.md',
              '/explore/articles/hackingwithswift.com/read/28/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/28/02-creating-a-basic-text-editor.md',
              '/explore/articles/hackingwithswift.com/read/28/03-writing-somewhere-safe-the-ios-keychain.md',
              '/explore/articles/hackingwithswift.com/read/28/04-touch-to-activate-touch-id-face-id-and-localauthentication.md',
              '/explore/articles/hackingwithswift.com/read/28/05-wrap-up.md',
            ]
          }, {
            text: 'Project 29: Exploding Monkeys',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/29/overview.md',
              '/explore/articles/hackingwithswift.com/read/29/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/29/02-building-the-environment-sktexture-and-filling-a-path.md',
              '/explore/articles/hackingwithswift.com/read/29/03-mixing-uikit-and-spritekit-uislider-and-skview.md',
              '/explore/articles/hackingwithswift.com/read/29/04-unleash-the-bananas-spritekit-texture-atlases.md',
              '/explore/articles/hackingwithswift.com/read/29/05-destructible-terrain-presentscene.md',
              '/explore/articles/hackingwithswift.com/read/29/06-wrap-up.md',
            ]
          }, {
            text: 'Project 30: Instruments',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/30/overview.md',
              '/explore/articles/hackingwithswift.com/read/30/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/30/02-what-are-we-working-with.md',
              '/explore/articles/hackingwithswift.com/read/30/03-what-can-instruments-tell-us.md',
              '/explore/articles/hackingwithswift.com/read/30/04-fixing-the-bugs-slow-shadows.md',
              '/explore/articles/hackingwithswift.com/read/30/05-fixing-the-bugs-wasted-allocations.md',
              '/explore/articles/hackingwithswift.com/read/30/06-fixing-the-bugs-running-out-of-memory.md',
              '/explore/articles/hackingwithswift.com/read/30/07-wrap-up.md',
            ]
          }, {
            text: 'Project 31: Multibrowser',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/31/overview.md',
              '/explore/articles/hackingwithswift.com/read/31/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/31/02-uistackview-by-example.md',
              '/explore/articles/hackingwithswift.com/read/31/03-adding-views-to-uistackview-with-addarrangedsubview.md',
              '/explore/articles/hackingwithswift.com/read/31/04-removing-views-from-a-uistackview-with-removearrangedsubview.md',
              '/explore/articles/hackingwithswift.com/read/31/05-ipad-multitasking.md',
              '/explore/articles/hackingwithswift.com/read/31/06-wrap-up.md',
            ]
          }, {
            text: 'Project 32: SwiftSearcher',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/32/overview.md',
              '/explore/articles/hackingwithswift.com/read/32/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/32/02-automatically-resizing-uitableviewcells-with-dynamic-type-and-nsattributedstring.md',
              '/explore/articles/hackingwithswift.com/read/32/03-how-to-use-sfsafariviewcontroller-to-browse-a-web-page.md',
              '/explore/articles/hackingwithswift.com/read/32/04-how-to-add-core-spotlight-to-index-your-app-content.md',
              '/explore/articles/hackingwithswift.com/read/32/05-wrap-up.md',
            ]
          }, {
            text: 'Project 33: What\'s that Whistle?',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/33/overview.md',
              '/explore/articles/hackingwithswift.com/read/33/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/33/02-recording-from-the-microphone-with-avaudiorecorder.md',
              '/explore/articles/hackingwithswift.com/read/33/03-animating-uistackview-subview-layout.md',
              '/explore/articles/hackingwithswift.com/read/33/04-writing-to-icloud-with-cloudkit-ckrecord-and-ckasset.md',
              '/explore/articles/hackingwithswift.com/read/33/05-a-hands-on-guide-to-the-cloudkit-dashboard.md',
              '/explore/articles/hackingwithswift.com/read/33/06-reading-from-icloud-with-cloudkit-ckqueryoperation-and-nspredicate.md',
              '/explore/articles/hackingwithswift.com/read/33/07-working-with-cloudkit-records-ckrecordreference-fetchwithrecordid-and-save.md',
              '/explore/articles/hackingwithswift.com/read/33/08-delivering-notifications-with-cloudkit-push-messages-ckquerysubscription.md',
              '/explore/articles/hackingwithswift.com/read/33/09-wrap-up.md',
            ]
          }, {
            text: 'Project 34: Four in a Row',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/34/overview.md',
              '/explore/articles/hackingwithswift.com/read/34/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/34/02-creating-the-interface-with-uistackview.md',
              '/explore/articles/hackingwithswift.com/read/34/03-preparing-for-basic-play.md',
              '/explore/articles/hackingwithswift.com/read/34/04-adding-in-players-gkgamemodelplayer.md',
              '/explore/articles/hackingwithswift.com/read/34/05-detecting-wins-and-draws-in-four-in-a-row.md',
              '/explore/articles/hackingwithswift.com/read/34/06-how-gameplaykit-ai-works-gkgamemodel-gkgamemodelplayer-and-gkgamemodelupdate.md',
              '/explore/articles/hackingwithswift.com/read/34/07-implementing-gkgamemodel-gamemodelupdatesfor-and-apply.md',
              '/explore/articles/hackingwithswift.com/read/34/08-creating-a-gameplaykit-ai-using-gkminmaxstrategist.md',
              '/explore/articles/hackingwithswift.com/read/34/09-wrap-up.md',
            ]
          }, {
            text: 'Project 35: Generating random numbers',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/35/overview.md',
              '/explore/articles/hackingwithswift.com/read/35/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/35/02-generating-random-numbers-without-gameplaykit.md',
              '/explore/articles/hackingwithswift.com/read/35/03-generating-random-numbers-with-gameplaykit-gkrandomsource.md',
              '/explore/articles/hackingwithswift.com/read/35/04-choosing-a-random-number-source-gkarc4randomsource-and-other-gameplaykit-options.md',
              '/explore/articles/hackingwithswift.com/read/35/05-shaping-gameplaykit-random-numbers-gkrandomdistribution-gkshuffleddistribution-and-gkgaussiandistribution.md',
              '/explore/articles/hackingwithswift.com/read/35/06-shuffling-an-array-with-gameplaykit-arraybyshufflingobjectsin.md',
              '/explore/articles/hackingwithswift.com/read/35/07-wrap-up.md',
            ]
          }, {
            text: 'Project 36: Crashy Plane',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/36/overview.md',
              '/explore/articles/hackingwithswift.com/read/36/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/36/02-creating-a-player-resizefill-vs-aspectfill.md',
              '/explore/articles/hackingwithswift.com/read/36/03-sky-background-and-ground-parallax-scrolling-with-spritekit.md',
              '/explore/articles/hackingwithswift.com/read/36/04-creating-collisions.md',
              '/explore/articles/hackingwithswift.com/read/36/05-pixel-perfect-physics-in-spritekit-plus-explosions-and-more.md',
              '/explore/articles/hackingwithswift.com/read/36/06-background-music-with-skaudionode-an-intro-plus-game-over.md',
              '/explore/articles/hackingwithswift.com/read/36/07-optimizing-spritekit-physics.md',
              '/explore/articles/hackingwithswift.com/read/36/08-wrap-up.md',
            ]
          }, {
            text: 'Project 37: Psychic Tester',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/37/overview.md',
              '/explore/articles/hackingwithswift.com/read/37/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/37/02-laying-out-the-cards-addchildviewcontroller.md',
              '/explore/articles/hackingwithswift.com/read/37/03-animating-a-3d-flip-effect-using-transitionwith.md',
              '/explore/articles/hackingwithswift.com/read/37/04-adding-a-cagradientlayer-with-ibdesignable-and-ibinspectable.md',
              '/explore/articles/hackingwithswift.com/read/37/05-creating-a-particle-system-using-caemitterlayer.md',
              '/explore/articles/hackingwithswift.com/read/37/06-wiggling-cards-and-background-music-with-avaudioplayer.md',
              '/explore/articles/hackingwithswift.com/read/37/07-how-to-measure-touch-strength-using-3d-touch.md',
              '/explore/articles/hackingwithswift.com/read/37/08-communicating-between-ios-and-watchos-wcsession.md',
              '/explore/articles/hackingwithswift.com/read/37/09-designing-a-simple-watchos-app-to-receive-data.md',
              '/explore/articles/hackingwithswift.com/read/37/10-wrap-up.md',
            ]
          }, {
            text: 'Project 38: GitHub Commits',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/38/overview.md',
              '/explore/articles/hackingwithswift.com/read/38/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/38/02-designing-a-core-data-model.md',
              '/explore/articles/hackingwithswift.com/read/38/03-adding-core-data-to-our-project-nspersistentcontainer.md',
              '/explore/articles/hackingwithswift.com/read/38/04-creating-an-nsmanagedobject-subclass-with-xcode.md',
              '/explore/articles/hackingwithswift.com/read/38/05-loading-core-data-objects-using-nsfetchrequest-and-nssortdescriptor.md',
              '/explore/articles/hackingwithswift.com/read/38/06-how-to-make-a-core-data-attribute-unique-using-constraints.md',
              '/explore/articles/hackingwithswift.com/read/38/07-examples-of-using-nspredicate-to-filter-nsfetchrequest.md',
              '/explore/articles/hackingwithswift.com/read/38/08-adding-core-data-entity-relationships-lightweight-vs-heavyweight-migration.md',
              '/explore/articles/hackingwithswift.com/read/38/09-how-to-delete-a-core-data-object.md',
              '/explore/articles/hackingwithswift.com/read/38/10-optimizing-core-data-performance-using-nsfetchedresultscontroller.md',
              '/explore/articles/hackingwithswift.com/read/38/11-wrap-up.md',
            ]
          }, {
            text: 'Project 39: Unit testing with XCTest',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/read/39/overview.md',
              '/explore/articles/hackingwithswift.com/read/39/01-setting-up.md',
              '/explore/articles/hackingwithswift.com/read/39/02-creating-our-first-unit-test-using-xctest.md',
              '/explore/articles/hackingwithswift.com/read/39/03-loading-our-data-and-splitting-up-words-filter.md',
              '/explore/articles/hackingwithswift.com/read/39/04-counting-unique-strings-in-an-array.md',
              '/explore/articles/hackingwithswift.com/read/39/05-measure-how-to-optimize-our-slow-code-and-adjust-the-baseline.md',
              '/explore/articles/hackingwithswift.com/read/39/06-filtering-using-functions-as-parameters.md',
              '/explore/articles/hackingwithswift.com/read/39/07-updating-the-user-interface-with-filtering.md',
              '/explore/articles/hackingwithswift.com/read/39/08-user-interface-testing-with-xctest.md',
              '/explore/articles/hackingwithswift.com/read/39/09-wrap-up.md',
            ]
          }, 
        ]
      }, {
        text: 'Swift Concurrency by Example',
        collapsible: true,
        icon: 'fa-brands fa-swift',
        children: [
          '/explore/articles/hackingwithswift.com/concurrency/README.md',
          {
            text: 'Introduction',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/concurrency/this-stuff-is-hard.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-follow-this-guide.md',
              '/explore/articles/hackingwithswift.com/concurrency/concurrency-vs-parallelism.md',
              '/explore/articles/hackingwithswift.com/concurrency/understanding-threads-and-queues.md',
              '/explore/articles/hackingwithswift.com/concurrency/main-thread-and-main-queue-whats-the-difference.md',
              '/explore/articles/hackingwithswift.com/concurrency/where-is-swift-concurrency-supported.md',
              '/explore/articles/hackingwithswift.com/concurrency/dedication.md',
            ]
          }, {
            text: 'Async/await',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/concurrency/what-is-a-synchronous-function.md',
              '/explore/articles/hackingwithswift.com/concurrency/what-is-an-asynchronous-function.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-call-an-async-function.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-call-async-throwing-functions.md',
              '/explore/articles/hackingwithswift.com/concurrency/what-calls-the-first-async-function.md',
              '/explore/articles/hackingwithswift.com/concurrency/whats-the-performance-cost-of-calling-an-async-function.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-use-async-properties.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-call-an-async-function-using-async-let.md',
              '/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-await-and-async-let.md',
              '/explore/articles/hackingwithswift.com/concurrency/why-cant-we-call-async-functions-using-async-var.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-create-continuations-that-can-throw-errors.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-store-continuations-to-be-resumed-later.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency.md',
            ]
          }, {
            text: 'Sequences and streams',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-loop-over-an-asyncsequence-using-for-await.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-create-a-custom-asyncsequence.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-convert-an-asyncsequence-into-a-sequence.md',
            ]
          }, {
            text: 'Tasks and task groups',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/concurrency/what-are-tasks-and-task-groups.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-run-a-task.md',
              '/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-a-task-and-a-detached-task.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-get-a-result-from-a-task.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-control-the-priority-of-a-task.md',
              '/explore/articles/hackingwithswift.com/concurrency/understanding-how-priority-escalation-works.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-cancel-a-task.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-make-a-task-sleep.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-voluntarily-suspend-a-task.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-create-a-task-group-and-add-tasks-to-it.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-cancel-a-task-group.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-handle-different-result-types-in-a-task-group.md',
              '/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-make-async-command-line-tools-and-scripts.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-use-task-local-values.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-run-tasks-using-swiftuis-task-modifier.md',
              '/explore/articles/hackingwithswift.com/concurrency/is-it-efficient-to-create-many-tasks.md',
            ]
          }, {
            text: 'Actors',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/concurrency/what-is-an-actor-and-why-does-swift-have-them.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-use-an-actor-in-swift.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-make-function-parameters-isolated.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-make-parts-of-an-actor-nonisolated.md',
              '/explore/articles/hackingwithswift.com/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue.md',
              '/explore/articles/hackingwithswift.com/concurrency/understanding-how-global-actor-inference-works.md',
              '/explore/articles/hackingwithswift.com/concurrency/what-is-actor-hopping-and-how-can-it-cause-problems.md',
              '/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-actors-classes-and-structs.md',
              '/explore/articles/hackingwithswift.com/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models.md',
            ]
          },  {
            text: 'Solutions',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type.md',
            ]
          },
        ]
      }, {
        text: 'SwiftData by Example',
        collapsible: true,
        icon: 'fa-brands fa-swift',
        children: [
          '/explore/articles/hackingwithswift.com/swiftdata/README.md',
          {
            text: 'Introduction',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftdata/what-is-swiftdata.md',
              '/explore/articles/hackingwithswift.com/swiftdata/swiftdata-vs-core-data.md',
              '/explore/articles/hackingwithswift.com/swiftdata/should-you-learn-swiftdata-core-data-or-both.md',
              '/explore/articles/hackingwithswift.com/swiftdata/frequently-asked-questions-about-swiftdata.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-follow-this-quick-start-guide.md',
              '/explore/articles/hackingwithswift.com/swiftdata/migrating-from-core-data-to-swiftdata.md',
              '/explore/articles/hackingwithswift.com/swiftdata/dedication.md',
            ]
          }, {
            text: 'Building a complete project',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftdata/swiftdata-tutorial-building-a-complete-project.md',
              '/explore/articles/hackingwithswift.com/swiftdata/defining-a-data-model-with-swiftdata.md',
              '/explore/articles/hackingwithswift.com/swiftdata/querying-swiftdata-objects-in-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftdata/creating-editing-and-deleting-model-objects.md',
            '/explore/articles/hackingwithswift.com/swiftdata/sorting-query-results.md',
              '/explore/articles/hackingwithswift.com/swiftdata/filtering-the-results-from-a-swiftdata-query.md',
              '/explore/articles/hackingwithswift.com/swiftdata/working-with-relationships.md',
              '/explore/articles/hackingwithswift.com/swiftdata/wrap-up-our-swiftdata-project-is-complete.md',
            ]
          }, {
            text: 'Containers and context',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftdata/whats-the-difference-between-modelcontainer-modelcontext-and-modelconfiguration.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-configure-a-custom-modelcontainer-using-modelconfiguration.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-add-multiple-configurations-to-a-modelcontainer.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-change-swiftdatas-underlying-storage-filename.md',
              '/explore/articles/hackingwithswift.com/swiftdata/when-does-swiftdata-autosave-data.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-enable-or-disable-autosave-for-a-modelcontext.md',
            ]
          }, {
            text: 'Defining your data model',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-define-swiftdata-models-using-the-model-macro.md',
              '/explore/articles/hackingwithswift.com/swiftdata/why-are-swiftdata-models-created-as-classes.md',
              '/explore/articles/hackingwithswift.com/swiftdata/what-kind-of-data-can-be-a-swiftdata-property.md',
              '/explore/articles/hackingwithswift.com/swiftdata/using-structs-and-enums-in-swiftdata-models.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-make-unique-attributes-in-a-swiftdata-model.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-make-transient-attributes-in-a-swiftdata-model.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-store-swiftdata-attributes-in-an-external-file.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-index-swiftdata-objects-in-spotlight.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-encrypt-swiftdata.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-create-derived-attributes-with-swiftdata.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-index-swiftdata-properties-for-faster-searching.md',
            ]
          }, {
            text: 'Creating relationships',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftdata/inferred-vs-explicit-relationships.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-create-one-to-one-relationships.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-create-one-to-many-relationships.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-create-many-to-many-relationships.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-create-cascade-deletes-using-relationships.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-add-minimum-and-maximum-constraints-to-relationships.md',
            ]
          }, {
            text: 'Working with data',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-find-a-swiftdata-object-by-its-identifier.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-save-a-swiftdata-object.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-delete-a-swiftdata-object.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-create-a-custom-fetchdescriptor.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-filter-swiftdata-results-with-predicates.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-sort-swiftdata-queries-using-key-paths-or-sortdescriptor.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-get-natural-string-sorting-for-swiftdata-queries.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-count-results-without-loading-them.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-delete-all-instances-of-a-particular-model.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-create-a-background-context.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-add-support-for-undo-and-redo.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-completely-reset-a-swiftdata-modelcontainer.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-enumerate-a-fetch-request-to-handle-lots-of-data-efficiently.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-merge-two-model-contexts.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-make-swiftdata-models-conform-to-codable.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-rollback-changes-without-saving.md',
            ]
          }, {
            text: 'Handling migration',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftdata/lightweight-vs-complex-migrations.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-rename-properties-without-losing-data.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-create-a-complex-migration-using-versionedschema.md',
            ]
          }, {
            text: 'Building with SwiftData',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-connect-swiftdata-to-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-use-query-to-read-swiftdata-objects-from-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-dynamically-change-a-querys-sort-order-or-predicate.md',
              '/explore/articles/hackingwithswift.com/swiftdata/whats-the-difference-between-bindable-and-binding.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-animate-changes-to-swiftdata-queries.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-use-swiftdata-in-swiftui-previews.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-swiftui-tracks-changes-in-swiftdata-objects.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-use-swiftdata-with-uikit.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-migrate-an-app-from-core-data-to-swiftdata.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-make-core-data-and-swiftdata-coexist-in-the-same-app.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-create-a-document-based-app-with-swiftdata.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-sync-swiftdata-with-icloud.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-stop-swiftdata-syncing-with-cloudkit.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-access-a-swiftdata-container-from-widgets.md',
            ]
          }, {
            text: 'Architecture',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-use-mvvm-to-separate-swiftdata-from-your-views.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-discard-changes-to-a-swiftdata-object.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-pre-populate-an-app-with-an-existing-swiftdata-database.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-pre-load-an-app-with-json.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-transfer-an-object-between-a-background-context-and-the-main-context.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-swiftdata-works-with-swift-concurrency.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-batch-insert-large-amounts-of-data-efficiently.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-write-unit-tests-for-your-swiftdata-code.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-write-ui-tests-for-your-swiftdata-code.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-optimize-the-performance-of-your-swiftdata-apps.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-use-swiftdata-to-store-singletons.md',
            ]
          }, {
            text: 'Solving problems',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-read-the-list-of-objects-that-have-been-inserted-edited-or-deleted.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-check-whether-a-swiftdata-model-object-has-been-deleted.md',
              '/explore/articles/hackingwithswift.com/swiftdata/using-launch-arguments-to-debug-swiftdata-and-core-data.md',
              '/explore/articles/hackingwithswift.com/swiftdata/how-to-read-the-contents-of-a-swiftdata-database-store.md',
              '/explore/articles/hackingwithswift.com/swiftdata/common-swiftdata-errors-and-their-solutions.md',
            ]
          }
        ]
      }, {
        text: 'SwiftUI by Example',
        collapsible: true,
        icon: 'fa-brands fa-swift',
        children: [
          '/explore/articles/hackingwithswift.com/swiftui/README.md',
          {
            text: 'Introduction',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/what-is-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/swiftui-vs-interface-builder-and-storyboards.md',
              '/explore/articles/hackingwithswift.com/swiftui/frequently-asked-questions-about-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-follow-this-quick-start-guide.md',
              '/explore/articles/hackingwithswift.com/swiftui/migrating-from-uikit-to-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/whats-in-the-basic-template.md',
              '/explore/articles/hackingwithswift.com/swiftui/dedication.md',
            ]
          }, {
            text: 'Building a complete project',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/swiftui-tutorial-building-a-complete-project.md',
              '/explore/articles/hackingwithswift.com/swiftui/building-a-menu-using-list.md',
              '/explore/articles/hackingwithswift.com/swiftui/composing-views-to-create-a-list-row.md',
              '/explore/articles/hackingwithswift.com/swiftui/polishing-designs-with-fonts-and-colors.md',
              '/explore/articles/hackingwithswift.com/swiftui/displaying-a-detail-screen-with-navigationlink.md',
              '/explore/articles/hackingwithswift.com/swiftui/observable-objects-environment-objects-and-published.md',
              '/explore/articles/hackingwithswift.com/swiftui/adding-items-to-an-order-with-environmentobject.md',
              '/explore/articles/hackingwithswift.com/swiftui/adding-tabview-and-tabitem.md',
              '/explore/articles/hackingwithswift.com/swiftui/bindings-and-forms.md',
              '/explore/articles/hackingwithswift.com/swiftui/two-way-bindings-in-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/formatting-interpolated-strings-in-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/presenting-an-alert.md',
              '/explore/articles/hackingwithswift.com/swiftui/adding-swipe-to-delete-and-editbutton.md',
              '/explore/articles/hackingwithswift.com/swiftui/wrap-up-our-swiftui-project-is-complete.md'
            ]
          }, {
            text: 'Working with static text',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-static-labels-with-a-text-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-advanced-text-styling-using-attributedstring.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-format-text-inside-text-views.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-spacing-between-letters-in-text.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-format-dates-inside-text-views.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-textfield-uppercase-or-lowercase-using-textcase.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-mark-content-as-a-placeholder-using-redacted.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-mark-content-as-private-using-privacysensitive.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-render-markdown-content-in-text.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-customize-the-way-links-are-opened.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-select-text.md',
            ]
          }, {
            text: 'Images, shapes, and media',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/how-to-draw-images-using-image-views.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-tile-an-image.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-render-images-using-sf-symbols.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-render-a-gradient.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-use-images-and-other-views-as-backgrounds.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-display-solid-shapes.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-draw-part-of-a-solid-shape-using-trim.md',
              '/explore/articles/hackingwithswift.com/swiftui/when-should-you-use-containerrelativeshape.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-play-movies-with-videoplayer.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-integrate-spritekit-using-spriteview.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-load-a-remote-image-from-a-url.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-select-pictures-using-photospicker.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-import-videos-using-photospicker.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-animate-sf-symbols.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-read-the-red-green-and-blue-values-from-a-color.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-combine-shapes-to-create-new-shapes.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-load-custom-colors-from-an-asset-catalog.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-mesh-gradient.md',
            ]
          }, {
            text: 'View layout',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/how-to-give-a-view-a-custom-frame.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-control-spacing-around-individual-views-using-padding.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-provide-relative-sizes-using-geometryreader.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-place-content-outside-the-safe-area.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-return-different-view-types.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-views-in-a-loop-using-foreach.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-control-layout-priority-using-layoutpriority.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-two-views-the-same-width-or-height.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-provide-visual-structure-using-foreground-styles.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-inset-the-safe-area-with-custom-content.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-home-indicator-and-other-system-ui.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-stop-system-gestures-from-interfering-with-your-own.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-dynamically-change-between-vstack-and-hstack.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-custom-layout-using-the-layout-protocol.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-an-adaptive-layout-with-viewthatfits.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-extra-padding-to-the-safe-area.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-size-of-a-view-relative-to-its-container.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes.md'
            ]
          }, {
            text: 'Stacks, grids, scrollviews',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-stacks-using-vstack-and-hstack.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-fixed-size-spacer.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-layer-views-on-top-of-each-other-using-zstack.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-change-the-order-of-view-layering-using-z-index.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-different-layouts-using-size-classes.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-position-views-in-a-fixed-grid.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-dismiss-the-keyboard-when-the-user-scrolls.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-multi-column-lists-using-table.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-scrollview-snap-with-paging-or-between-child-views.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-views-scroll-with-a-custom-transition.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-scrollview-start-at-the-bottom.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-disable-scrollview-clipping-so-contents-overflow.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-read-the-size-and-position-of-a-scrollview.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-scroll-to-exact-locations-inside-a-scrollview.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-detect-whether-a-scrollview-is-currently-moving-or-is-idle.md',
            ]          
          }, {
            text: 'User interface controls',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/working-with-state.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-tappable-button.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-get-bordered-buttons-that-stand-out.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-group-views-together-with-controlgroup.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-read-text-from-a-textfield.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-take-action-when-the-user-submits-a-textfield.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-border-to-a-textfield.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-placeholder-to-a-textfield.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-disable-autocorrect-in-a-textfield.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-dismiss-the-keyboard-for-a-textfield.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-textfield-or-texteditor-have-default-focus.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-textfield-expand-vertically-as-the-user-types.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-format-a-textfield-for-numbers.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-secure-text-fields-using-securefield.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-toggle-switch.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-slider-and-read-values-from-it.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-picker-and-read-values-from-it.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-date-picker-and-read-values-from-it.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-segmented-control-and-read-values-from-it.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-stepper-and-read-values-from-it.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-multi-line-editable-text-with-texteditor.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-select-a-color-with-colorpicker.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-show-progress-on-a-task-using-progressview.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-show-indeterminate-progress-using-progressview.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-show-a-map-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-show-annotations-in-a-map-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-open-web-links-in-safari.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-the-user-select-multiple-dates.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed.md',
            ]
          }, {
            text: 'Responding to events',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-control-which-view-is-shown-when-your-app-launches.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-run-code-when-your-app-launches.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-an-appdelegate-to-a-swiftui-app.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-detect-device-rotation.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-toolbar-to-the-keyboard.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-run-an-asynchronous-task-when-a-view-is-shown.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-the-user-paste-data-into-your-app.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-share-content-using-the-system-share-sheet.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-find-and-replace-text.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-support-drag-and-drop-in-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-detect-and-respond-to-key-press-events.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-haptic-effects-using-sensory-feedback.md',
            ]
          }, {
            text: 'Taps and gestures',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-gesture-recognizer-to-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-read-tap-and-double-tap-gestures.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-gesture-chains-using-sequencedbefore.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-detect-the-user-hovering-over-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-detect-shake-gestures.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-control-the-tappable-area-of-a-view-using-contentshape.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-disable-taps-for-a-view-using-allowshittesting.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-handle-pinch-to-zoom-for-views.md'
            ]
          }, {
            text: 'Advanced state',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-use-environmentobject-to-share-data-between-views.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-send-state-updates-manually-using-objectwillchange.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-constant-bindings.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-custom-bindings.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-use-a-timer-with-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-run-some-code-when-state-changes-using-onchange.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-and-use-custom-environment-values.md'
            ]
          }, {
            text: 'Lists',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/working-with-lists.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-list-of-static-items.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-list-of-dynamic-items.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-delete-rows-from-a-list.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-move-rows-in-a-list.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-sections-to-a-list.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-enable-editing-on-a-list-using-editbutton.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-set-the-background-color-of-list-rows-using-listrowbackground.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-grouped-and-inset-grouped-lists.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-expanding-lists.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-scroll-to-a-specific-row-in-a-list.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-allow-row-selection-in-a-list.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-use-implicit-stacking.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-list-row-separator-visibility-and-color.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-enable-pull-to-refresh.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-search-bar-to-filter-your-data.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-search-tokens-to-a-search-field.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-list-or-a-foreach-from-a-binding.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-list-row-separator-insets.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-change-the-tint-color-for-individual-list-rows.md',
            ]
          }, {
            text: 'Forms',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/working-with-forms.md',
              '/explore/articles/hackingwithswift.com/swiftui/basic-form-design.md',
              '/explore/articles/hackingwithswift.com/swiftui/breaking-forms-into-sections.md',
              '/explore/articles/hackingwithswift.com/swiftui/pickers-in-forms.md',
              '/explore/articles/hackingwithswift.com/swiftui/enabling-and-disabling-elements-in-forms.md',
              '/explore/articles/hackingwithswift.com/swiftui/showing-and-hiding-form-rows.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-align-form-text-and-controls-neatly-with-labeledcontent.md',
            ]
          }, {
            text: 'Containers',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/working-with-containers.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-scrolling-pages-of-content-using-tabviewstyle.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-group-views-together.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-hide-and-show-the-status-bar.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-hide-and-reveal-content-using-disclosuregroup.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-toolbar-and-add-buttons-to-it.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-customize-toolbar-buttons.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-badge-to-tabview-items-and-list-rows.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-group-views-visually-using-groupbox.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-position-and-style-subviews-that-come-from-a-different-view.md'
            ]
          }, {
            text: 'Navigation',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/introduction-to-navigation.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-embed-a-view-in-a-navigation-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-edit-your-navigation-title.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-bar-items-to-a-navigation-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-push-a-new-view-onto-a-navigationstack.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-push-a-new-view-when-a-list-row-is-tapped.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-use-programmatic-navigation-in-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-save-and-load-navigationstack-paths-using-codable.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-hide-and-show-the-sidebar-programmatically.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-customize-a-views-width-in-navigationsplitview.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-customize-the-display-mode-of-navigationsplitview.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-control-which-navigationsplitview-column-is-shown-in-compact-layouts.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-an-inspector-to-any-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-zoom-animations-between-views.md',
            ]
          }, {
            text: 'Alerts and menus',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/working-with-presentations.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-show-an-alert.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-textfield-to-an-alert.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-actions-to-alert-buttons.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-show-multiple-alerts-in-a-single-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-show-an-action-sheet.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-show-a-context-menu.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-recommend-another-app-using-appstoreoverlay.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-show-a-menu-when-a-button-is-pressed.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-pick-options-from-a-menu.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-in-app-purchases-in-swiftui.md',
            ]
          }, {
            text: 'Presenting views',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/how-to-present-a-new-view-using-sheets.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-present-multiple-sheets.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-view-dismiss-itself.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-present-a-full-screen-modal-view-using-fullscreencover.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-show-a-popover-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-display-a-bottom-sheet.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-ask-the-user-to-review-your-app.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-tell-the-user-that-no-content-is-available.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-control-the-size-of-presented-views.md'
            ]
          }, {
            text: 'Transforming views',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-color-the-padding-around-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-stack-modifiers-to-create-more-advanced-effects.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-draw-a-border-around-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-draw-a-border-inside-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-marching-ants-border-effect.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-draw-a-shadow-around-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-clip-a-view-so-only-part-is-visible.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-rotate-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-rotate-a-view-in-3d.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-scale-a-view-up-or-down.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-round-the-corners-of-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-opacity-of-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-accent-color-of-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-mask-one-view-with-another.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-blur-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-blend-views-together.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-views-by-tinting-desaturating-and-more.md',
              '/explore/articles/hackingwithswift.com/swiftui/customizing-button-with-buttonstyle.md',
              '/explore/articles/hackingwithswift.com/swiftui/customizing-progressview-with-progressviewstyle.md',
              '/explore/articles/hackingwithswift.com/swiftui/customizing-toggle-with-togglestyle.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-change-the-background-color-of-list-texteditor-and-more.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-new-colors-by-blending-two-other-swiftui-colors.md',
            ]
          }, {
            text: 'Drawing',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/swiftuis-built-in-shapes.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-draw-a-custom-path.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-draw-polygons-and-stars.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-draw-a-checkerboard.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-use-uibezierpath-and-cgpath-in-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-convert-a-swiftui-view-to-an-image.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-render-a-swiftui-view-to-a-pdf.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-visual-effect-blurs.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-custom-animated-drawings-with-timelineview-and-canvas.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-custom-text-effects-and-animations.md',
            ]
          }, {
            text: 'Animation',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-basic-animations.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-spring-animation.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-animate-changes-in-binding-values.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-an-explicit-animation.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-delay-an-animation.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-start-an-animation-immediately-after-a-view-appears.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-apply-multiple-animations-to-a-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-and-remove-views-with-a-transition.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-combine-transitions.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-asymmetric-transitions.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-custom-transition.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-animate-the-size-of-text.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-override-animations-with-transactions.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-run-a-completion-callback-when-an-animation-finishes.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-multi-step-animations-using-phase-animators.md',
            ]
          }, {
            text: 'Composing View',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-and-compose-custom-views.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-combine-text-views-together.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-store-views-as-properties.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-custom-modifiers.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-wrap-a-custom-uiview-for-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-modifiers-for-a-uiviewrepresentable-struct.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-insert-images-into-text.md',
            ]
          }, {
            text: 'Cross-platform SwiftUI',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/learn-once-apply-anywhere.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-get-translucent-lists-on-macos.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-carousel-lists-on-watchos.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-read-the-digital-crown-on-watchos-using-digitalcrownrotation.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-open-a-new-window.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-enable-vertical-page-scrolling.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-lets-users-drag-anywhere-to-move-a-window.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed.md'
            ]
          }, {
            text: 'Data',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/introduction-to-using-core-data-with-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-configure-core-data-to-work-with-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-access-a-core-data-managed-object-context-from-a-swiftui-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-core-data-fetch-request-using-fetchrequest.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-filter-core-data-fetch-requests-using-a-predicate.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-core-data-objects-from-swiftui-views.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-delete-core-data-objects-from-swiftui-views.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-limit-the-number-of-items-in-a-fetch-request.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-export-files-using-fileexporter.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-continue-an-nsuseractivity-in-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-read-the-users-location-using-locationbutton.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-read-user-contacts-with-contactaccessbutton.md',
            ]
          }, {
            text: 'Accessibility',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/introduction-to-accessibility-with-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-set-custom-accessibility-labels-and-hints.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-use-dynamic-type-with-a-custom-font.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-specify-the-dynamic-type-sizes-a-view-supports.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-detect-the-reduce-motion-accessibility-setting.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-detect-dark-mode.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-use-decorative-images-to-reduce-screen-reader-clutter.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-reduce-animations-when-requested.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-voiceover-read-characters-individually.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-add-custom-activation-commands-for-voice-control.md',
            ]
          }, {
            text: 'Tooling',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/how-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-at-different-dynamic-type-sizes.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-in-light-and-dark-mode.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-in-different-devices.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-in-a-navigation-view.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-in-portrait-or-landscape.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-find-which-data-change-is-causing-a-swiftui-view-to-update.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-use-state-inside-swiftui-previews-using-previewable.md',
            ]
          }, {
            text: 'What now?',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-become-a-swiftui-expert.md',
            ]
          }, {
            text: 'Appendix A',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/understanding-property-wrappers-in-swift-and-swiftui.md',
              '/explore/articles/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-state-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-stateobject-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-published-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-observedobject-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-environmentobject-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-environment-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-binding-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-focusstate-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-gesturestate-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-fetchrequest-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-appstorage-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-scenestorage-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-scaledmetric-property-wrapper.md',
              '/explore/articles/hackingwithswift.com/swiftui/what-is-the-uiapplicationdelegateadaptor-property-wrapper.md',
            ]
          }, {
            text: 'Appendix B',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/swiftui/common-swiftui-errors-and-how-to-fix-them.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-assign-to-property-self-is-immutable.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-ambiguous-reference-to-member-buildblock.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-type.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-property-declares-an-opaque-return-type-but-has-no-initializer-expression-from-which-to-infer-an-underlying-type.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-modifying-state-during-view-update-this-will-cause-undefined-behavior.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-fatal-error-no-observableobject-of-type-sometype-found.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-convert-value-of-type-to-expected-argument-type.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-missing-argument-for-parameter-content-in-call.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-images-not-resizing.md',
              '/explore/articles/hackingwithswift.com/swiftui/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable.md',
            ]
          }
        ]
      }, {
        text: 'Swift Knowledge Base',
        collapsible: true,
        icon: 'fa-brands fa-swift',
        children: [
          '/explore/articles/hackingwithswift.com/example-code/README.md',
          {
            text: 'Accessibility',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/accessibility/README.md',
              '/explore/articles/hackingwithswift.com/example-code/accessibility/how-to-fix-incorrect-voiceover-pronunciations.md',
              '/explore/articles/hackingwithswift.com/example-code/accessibility/how-to-help-voiceover-read-specific-kinds-of-text-using-accessibilitytextualcontext.md',
            ]
          }, {
            text: 'ARKit',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/arkit/README.md',
              '/explore/articles/hackingwithswift.com/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration.md',
            ]
          }, {
            text: 'Array',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/arrays/README.md',
              '/explore/articles/hackingwithswift.com/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset.md',
              '/explore/articles/hackingwithswift.com/example-code/arrays/how-to-enumerate-items-in-an-array.md',
              '/explore/articles/hackingwithswift.com/example-code/arrays/how-to-find-an-item-in-an-array-using-firstindexof.md',
              '/explore/articles/hackingwithswift.com/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string.md',
              '/explore/articles/hackingwithswift.com/example-code/arrays/how-to-loop-through-an-array-in-reverse.md',
              '/explore/articles/hackingwithswift.com/example-code/arrays/how-to-loop-through-items-in-an-array.md',
              '/explore/articles/hackingwithswift.com/example-code/arrays/how-to-randomize-the-order-of-an-array-shuffle-and-shuffled.md',
              '/explore/articles/hackingwithswift.com/example-code/arrays/how-to-shuffle-an-array-using-arc4random-uniform.md',
              '/explore/articles/hackingwithswift.com/example-code/arrays/how-to-sort-an-array-using-sort.md',
              '/explore/articles/hackingwithswift.com/example-code/arrays/how-to-tell-if-an-array-contains-an-object.md',
            ]
          }, {
            text: 'CALayer',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/calayer/README.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/how-to-add-a-border-outline-color-to-a-uiview.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/how-to-change-a-views-anchor-point-without-moving-it.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/how-to-create-a-marching-ants-effect-using-linedashphase.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/how-to-create-keyframe-animations-using-cakeyframeanimation.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/how-to-draw-color-gradients-using-cagradientlayer.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/how-to-draw-shapes-using-cashapelayer.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/how-to-emit-particles-using-caemitterlayer.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/how-to-make-a-shape-draw-itself-using-strokeend.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/how-to-make-a-uiview-fade-out.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/how-to-make-a-uiview-glow-using-shadowcolor.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/how-to-round-only-specific-corners-using-maskedcorners.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/how-to-round-the-corners-of-a-uiview.md',
              '/explore/articles/hackingwithswift.com/example-code/calayer/what-is-calayer.md',
            ]
          }, {
            text: 'Catalyst',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/catalyst/README.md',
              '/explore/articles/hackingwithswift.com/example-code/catalyst/how-to-detect-your-ios-app-is-running-on-macos-catalyst.md',
            ]
          }, {
            text: 'Core Graphics',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/README.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-calculate-the-manhattan-distance-between-two-cgpoints.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-compare-two-cgrects-with-equalto.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-draw-a-circle-using-core-graphics-addellipsein.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-draw-a-square-using-core-graphics-addrect.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-find-the-rotation-from-a-cgaffinetransform.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-find-the-scale-from-a-cgaffinetransform.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-find-the-translation-from-a-cgaffinetransform.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-render-a-pdf-to-an-image.md',
              '/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently.md',
            ]
          }, {
            text: 'Core Haptics',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/core-haptics/README.md',
              '/explore/articles/hackingwithswift.com/example-code/core-haptics/how-to-detect-whether-haptic-event-playback-is-supported.md',
              '/explore/articles/hackingwithswift.com/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve.md',
              '/explore/articles/hackingwithswift.com/example-code/core-haptics/how-to-play-custom-vibrations-using-core-haptics.md',
            ]
          }, {
            text: 'CryptoKit',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/cryptokit/README.md',
              '/explore/articles/hackingwithswift.com/example-code/cryptokit/how-to-calculate-the-sha-hash-of-a-string-or-data-instance.md',
            ]
          }, {
            text: 'Games',
            collapsible: true,
            children: [
              // '/explore/articles/hackingwithswift.com/example-code/games/README.md',
            ]
          }, {
            text: 'Language',
            collapsible: true,
            children: [
              // '/explore/articles/hackingwithswift.com/example-code/language/README.md',
            ]
          }, {
            text: 'Libraries',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/libraries/README.md',
              '/explore/articles/hackingwithswift.com/example-code/libraries/how-to-convert-speech-to-text-using-sfspeechrecognizer.md',
              '/explore/articles/hackingwithswift.com/example-code/libraries/how-to-display-pdfs-using-pdfview.md',
              '/explore/articles/hackingwithswift.com/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit.md',
              '/explore/articles/hackingwithswift.com/example-code/libraries/how-to-get-a-cover-flow-effect-on-ios.md',
              '/explore/articles/hackingwithswift.com/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset.md',
              '/explore/articles/hackingwithswift.com/example-code/libraries/how-to-parse-json-using-swiftyjson.md',
              '/explore/articles/hackingwithswift.com/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller.md',
              '/explore/articles/hackingwithswift.com/example-code/libraries/how-to-scan-nfc-tags-using-core-nfc.md',
              '/explore/articles/hackingwithswift.com/example-code/libraries/how-to-search-your-apps-spotlight-index.md',
              '/explore/articles/hackingwithswift.com/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview.md',
              '/explore/articles/hackingwithswift.com/example-code/libraries/how-to-watermark-pdfs-inside-a-pdfview.md',
              '/explore/articles/hackingwithswift.com/example-code/libraries/what-is-cloudkit.md',
            ]
          }, {
            text: 'Location',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/location/README.md',
              '/explore/articles/hackingwithswift.com/example-code/location/adding-places-to-mkmapview-using-mkplacemark.md',
              '/explore/articles/hackingwithswift.com/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation.md',
              '/explore/articles/hackingwithswift.com/example-code/location/how-to-add-an-mkmapview-using-mapkit.md',
              '/explore/articles/hackingwithswift.com/example-code/location/how-to-add-annotations-to-mkmapview-using-mkpointannotation-and-mkpinannotationview.md',
              '/explore/articles/hackingwithswift.com/example-code/location/how-to-detect-ibeacons.md',
              '/explore/articles/hackingwithswift.com/example-code/location/how-to-find-directions-using-mkmapview-and-mkdirectionsrequest.md',
              '/explore/articles/hackingwithswift.com/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest.md',
              '/explore/articles/hackingwithswift.com/example-code/location/how-to-make-an-iphone-transmit-an-ibeacon.md',
              '/explore/articles/hackingwithswift.com/example-code/location/how-to-read-the-users-location-while-your-app-is-in-the-background.md',
              '/explore/articles/hackingwithswift.com/example-code/location/how-to-request-a-users-location-only-once-using-requestlocation.md',
            ]
          }, {
            text: 'Media',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/media/README.md',
              '/explore/articles/hackingwithswift.com/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-choose-a-photo-from-the-camera-roll-using-uiimagepickercontroller.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-convert-text-to-speech-using-avspeechsynthesizer-avspeechutterance-and-avspeechsynthesisvoice.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-create-a-barcode.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-create-a-pdf417-barcode.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-create-a-qr-code.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-desaturate-an-image-to-make-it-black-and-white.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-filter-images-using-core-image-and-cifilter.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-highlight-text-to-speech-words-being-read-using-avspeechsynthesizer.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-loop-audio-using-avaudioplayer-and-numberofloops.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-make-resizable-images-using-resizableimagewithcapinsets.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-pixellate-a-uiimage.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-play-sounds-using-avaudioplayer.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-play-videos-using-avplayerviewcontroller.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-read-the-average-color-of-a-uiimage-using-ciareaaverage.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-record-audio-using-avaudiorecorder.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-record-user-videos-using-replaykit.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-render-a-uiview-to-a-uiimage.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-scan-a-barcode.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-scan-a-qr-code.md',
              '/explore/articles/hackingwithswift.com/example-code/media/how-to-turn-on-the-camera-flashlight-to-make-a-torch.md',
              '/explore/articles/hackingwithswift.com/example-code/media/uiimagewritetosavedphotosalbum-how-to-write-to-the-ios-photo-album.md',
            ]
          }, {
            text: 'NaturalLanguage',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/naturallanguage/README.md',
              '/explore/articles/hackingwithswift.com/example-code/naturallanguage/how-to-find-similar-words-for-a-search-term.md',
              '/explore/articles/hackingwithswift.com/example-code/naturallanguage/how-to-lemmatize-text-using-nltagger.md',
              '/explore/articles/hackingwithswift.com/example-code/naturallanguage/how-to-perform-sentiment-analysis-on-a-string-using-nltagger.md',
            ]
          }, {
            text: 'Networking',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/networking/README.md',
              '/explore/articles/hackingwithswift.com/example-code/networking/how-to-check-for-internet-connectivity-using-nwpathmonitor.md',
              '/explore/articles/hackingwithswift.com/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework.md',
              '/explore/articles/hackingwithswift.com/example-code/networking/how-to-download-files-with-urlsession-and-downloadtask.md',
              '/explore/articles/hackingwithswift.com/example-code/networking/how-to-make-a-network-request-wait-for-an-internet-connection-using-waitsforconnectivity.md',
              '/explore/articles/hackingwithswift.com/example-code/networking/how-to-support-low-data-mode-networking-using-allowsconstrainednetworkaccess.md',
            ]
          }, {
            text: 'Strings',
            collapsible: true,
            children: [
              // '/explore/articles/hackingwithswift.com/example-code/strings/README.md',
            ]
          }, {
            text: 'System',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/system/README.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-do-you-read-from-the-command-line.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-cache-data-using-nscache.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-cancel-a-delayed-perform-call.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-check-whether-one-date-is-similar-to-another.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-check-whether-your-other-apps-are-installed.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-compress-and-decompress-data.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-convert-between-camel-case-and-snake-case-with-codable-and-keyencodingstrategy.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-convert-html-to-an-nsattributedstring.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-convert-units-using-unit-and-measurement.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-copy-objects-in-swift-using-copy.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-copy-text-to-the-clipboard-using-uipasteboard.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-create-rich-formatted-text-strings-using-nsattributedstring.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-decode-json-from-your-app-bundle-the-easy-way.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-detect-low-power-mode-is-enabled.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-detect-the-dominant-language-of-a-text-string.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-detect-when-your-app-moves-to-the-background.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-detect-which-country-a-user-is-in.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-find-the-path-to-a-file-in-your-bundle.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-find-the-users-documents-directory.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-format-dates-with-an-ordinal-suffix-using-numberformatters-ordinalstyle.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-generate-a-random-identifier-using-uuid.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-group-user-notifications-using-threadidentifier-and-summaryargument.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-handle-the-https-requirements-in-ios-with-app-transport-security.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-identify-an-ios-device-uniquely-with-identifierforvendor.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-insert-images-into-an-attributed-string-with-nstextattachment.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-join-an-array-of-strings-in-a-natural-way.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-load-and-save-a-struct-in-userdefaults-using-codable.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-make-an-action-repeat-using-timer.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-make-one-operation-wait-for-another-to-complete-using-adddependency.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-make-tappable-links-in-nsattributedstring.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-make-the-device-vibrate.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-make-your-app-open-with-a-custom-url-scheme.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-open-a-url-in-safari.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-parse-json-using-jsonserialization.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-pass-data-between-two-view-controllers.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-post-messages-using-notificationcenter.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-read-names-in-a-string-using-nslinguistictagger.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-read-the-contents-of-a-directory-using-filemanager.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-read-your-apps-version-from-your-infoplist-file.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-run-an-external-program-using-process.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-run-code-after-a-delay-using-asyncafter-and-perform.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-run-code-asynchronously-using-gcd-async.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-run-code-at-a-specific-time.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-run-code-on-the-main-thread-using-gcd-async.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-run-code-when-your-app-is-terminated.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-save-and-load-objects-with-nskeyedarchiver-and-nskeyedunarchiver.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-save-user-settings-using-userdefaults.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-send-notifications-asynchronously-using-notificationqueue.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-set-local-alerts-using-unnotificationcenter.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-show-a-relative-date-and-time-using-relativedatetimeformatter.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-show-the-price-of-an-skproduct.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-spell-out-numbers-using-numberformatters-spellout-style.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-stop-the-screen-from-going-to-sleep.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-store-userdefaults-options-in-icloud.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-synchronize-code-to-drawing-using-cadisplaylink.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-use-core-motion-to-read-accelerometer-data.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-use-core-spotlight-to-index-content-in-your-app.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-use-multithreaded-operations-with-operationqueue.md',
              '/explore/articles/hackingwithswift.com/example-code/system/how-to-use-touch-id-to-authenticate-users-by-fingerprint.md',
              '/explore/articles/hackingwithswift.com/example-code/system/measuring-execution-speed-using-cfabsolutetimegetcurrent.md',
              '/explore/articles/hackingwithswift.com/example-code/system/nstexteffectletterpressstyle-how-to-add-a-letterpress-effect-to-text.md',
              '/explore/articles/hackingwithswift.com/example-code/system/what-is-the-first-responder.md',
            ]
          }, {
            text: 'Testing',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/testing/README.md',
              '/explore/articles/hackingwithswift.com/example-code/testing/how-to-benchmark-app-launch-time-using-xctossignpostmetricapplicationlaunch.md',
              '/explore/articles/hackingwithswift.com/example-code/testing/how-to-check-and-unwrap-optionals-in-tests-using-xctunwrap.md',
              '/explore/articles/hackingwithswift.com/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock.md',
              '/explore/articles/hackingwithswift.com/example-code/testing/how-to-do-one-time-setup-for-your-tests.md',
              '/explore/articles/hackingwithswift.com/example-code/testing/how-to-set-baselines-for-your-performance-tests.md',
              '/explore/articles/hackingwithswift.com/example-code/testing/how-to-test-asynchronous-functions-using-expectation.md',
              '/explore/articles/hackingwithswift.com/example-code/testing/how-to-test-throwing-functions.md',
              '/explore/articles/hackingwithswift.com/example-code/testing/how-to-write-performance-tests-using-measure.md',
            ]
          }, {
            text: 'UIColor',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/uicolor/README.md',
              '/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-convert-a-hex-color-to-a-uicolor.md',
              '/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor.md',
              '/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-create-custom-colors-using-uicolor-rgb-and-hues.md',
              '/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-read-the-red-green-blue-and-alpha-color-components-from-a-uicolor.md',
              '/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-use-an-image-for-your-background-color-with-uicolorpatternimage.md',
              '/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-use-semantic-colors-to-help-your-ios-app-adapt-to-dark-mode.md',
            ]
          }, {
            text: 'UIKit',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/uikit/README.md',
            ]
          }, {
            text: 'Vision',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/vision/README.md',
              '/explore/articles/hackingwithswift.com/example-code/vision/how-to-detect-documents-using-vndocumentcameraviewcontroller.md',
              '/explore/articles/hackingwithswift.com/example-code/vision/how-to-use-vnrecognizetextrequests-optical-character-recognition-to-detect-text-in-an-image.md',
            ]
          }, {
            text: 'WKWebView',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/wkwebview/README.md',
              '/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-control-the-sites-a-wkwebview-can-visit-using-wknavigationdelegate.md',
              '/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-control-the-user-interface-of-a-wkwebview-using-wkuidelegate.md',
              '/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-enable-back-and-forward-swiping-gestures-in-wkwebview.md',
              '/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-load-http-content-in-wkwebview-and-uiwebview.md',
              '/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing.md',
              '/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-run-javascript-on-a-wkwebview-with-evaluatejavascript.md',
              '/explore/articles/hackingwithswift.com/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview.md',
            ]
          }, {
            text: 'Xcode',
            collapsible: true,
            children: [
              '/explore/articles/hackingwithswift.com/example-code/xcode/README.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-add-conditions-to-a-breakpoint.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-add-markers-to-the-jump-bar.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-create-a-project-using-swift-package-manager.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-create-exception-breakpoints-in-xcode.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-debug-view-layouts-in-xcode.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-fix-the-error-view-controller-is-unreachable-because-it-has-no-entry-points-and-no-identifier-for-runtime-access.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-load-assets-from-xcode-asset-catalogs.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-lock-interface-builder-controls-to-stop-accidental-changes.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-make-xcode-play-sounds-while-debugging.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-render-example-content-using-prepareforinterfacebuilder.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-repeat-code-when-debugging-using-the-instruction-pointer.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-set-the-clock-in-the-ios-simulator.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-use-storyboard-references-to-simplify-your-storyboards.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-use-vector-images-in-your-asset-catalog.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/how-to-used-a-named-uicolor-in-code-and-interface-builder.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/what-are-breakpoints.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/what-are-swift-error-breakpoints.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/what-are-watchpoints.md',
              '/explore/articles/hackingwithswift.com/example-code/xcode/what-is-an-iboutlet.md',
            ]
          }
        ]
      }
    ]
};