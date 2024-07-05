import { SidebarGroupItem } from 'vuepress-theme-hope'

export const template: SidebarGroupItem = {
    text: 'hackingwithswift.com',
    collapsible: true,
    icon: 'https://hackingwithswift.com/favicon.svg',
    children: [
      '/explore/articles/hackingwithswift.com/swift3.md', // 2016-06-13
      '/explore/articles/hackingwithswift.com/whats-new-in-ios-11.md', // 2016-06-20
      '/explore/articles/hackingwithswift.com/swift3-1.md', // 2017-01-26
      '/explore/articles/hackingwithswift.com/swift4.md', // 2017-06-05
      '/explore/articles/hackingwithswift.com/swift-4-1-improves-codable-with-keydecodingstrategy.md', // 2018-02-05
      '/explore/articles/hackingwithswift.com/learn-whats-new-in-swift-4-1-with-a-playground.md', // 2018-04-04
      '/explore/articles/hackingwithswift.com/whats-new-in-swift-4-1.md', // 2018-06-13
      '/explore/articles/hackingwithswift.com/whats-new-in-swift-4-2.md', // 2018-12-17
      '/explore/articles/hackingwithswift.com/whats-new-in-swift-5-0.md', // 2019-03-28
      '/explore/articles/hackingwithswift.com/how-to-use-dynamic-member-lookup-in-swift.md', // 2019-03-29
      '/explore/articles/hackingwithswift.com/whats-new-in-swift-5-1.md', // 2019-09-18
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
      }
    ]
};