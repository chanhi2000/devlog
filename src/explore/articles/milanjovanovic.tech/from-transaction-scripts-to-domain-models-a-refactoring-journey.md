---
lang: ko-KR
title: "From Transaction Scripts to Domain Models: A Refactoring Journey"
description: "Article(s) > From Transaction Scripts to Domain Models: A Refactoring Journey"
icon: iconfont icon-csharp
category: 
  - C#
  - DotNet
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - cs
  - c#
  - csharp
  - dotnet
head:
  - - meta:
    - property: og:title
      content: "Article(s) > From Transaction Scripts to Domain Models: A Refactoring Journey"
    - property: og:description
      content: "From Transaction Scripts to Domain Models: A Refactoring Journey"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/from-transaction-scripts-to-domain-models-a-refactoring-journey.html
prev: /programming/cs/articles/README.md
date: 2024-06-15
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_094.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "C# > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/cs/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="From Transaction Scripts to Domain Models: A Refactoring Journey"
  desc="Transaction Scripts organizes business logic by procedures where each procedure handles a single request from the presentation. We will explore when you should consider introducing a Domain Model."
  url="https://milanjovanovic.tech/blog/from-transaction-scripts-to-domain-models-a-refactoring-journey/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_094.png"/>

<!-- TODO: 작성 -->

<!-- 
I once led the development of a fitness tracking app.
We started with Transaction Scripts to handle features like workout creation and exercise logging.
It was a simple and effective approach for the app's early stages.

However, as we added more complex features, our business logic became bloated.
New business rules intertwined with existing logic, making the code difficult to maintain.
Each change could introduce unintended consequences.

We solved our problem by introducing a Domain Model.
The domain model shifts the focus from procedures to domain objects.
Our code became more expressive, easier to reason about, and less prone to errors.

This experience taught me a valuable lesson, that I want to share in this newsletter.

---

## transaction-script"><a href="#transaction-script">Transaction Script

At its core, business applications operate through distinct interactions (transactions) with their users.
These transactions can range from simple data retrieval to complex operations involving multiple validations, calculations, and updates to the system's database.

The Transaction Script pattern provides a simple way to encapsulate the logic behind each transaction.
It organizes all the necessary steps, from data access to business rules, into a single, self-contained procedure.

<blockquote>
Organizes business logic by procedures where each procedure handles a single request from the presentation.

</blockquote>
*— <a href="https://martinfowler.com/eaaCatalog/transactionScript.html">Transaction Script</a>, Patterns of Enterprise Application Architecture*

Here's an example of adding exercises to a workout:

```cs
internal sealed class AddExercisesCommandHandler(
    IWorkoutRepository workoutRepository,
    IUnitOfWork unitOfWork)
    : ICommandHandler<AddExercisesCommand>
{
    public async Task<Result> Handle(
        AddExercisesCommand request,
        CancellationToken cancellationToken)
    {
        Workout? workout = await workoutRepository.GetByIdAsync(
            request.WorkoutId,
            cancellationToken);

        if (workout is null)
        {
            return Result.Failure(WorkoutErrors.NotFound(request.WorkoutId));
        }

        List<Error> errors = [];
        foreach (ExerciseRequest exerciseDto in request.Exercises)
        {
            if (exerciseDto.TargetType == TargetType.Distance &&
                exerciseDto.DistanceInMeters is null)
            {
                errors.Add(ExerciseErrors.MissingDistance);

                continue;
            }

            if (exerciseDto.TargetType == TargetType.Time &&
                exerciseDto.DurationInSeconds is null)
            {
                errors.Add(ExerciseErrors.MissingDuration);

                continue;
            }

            var exercise = new Exercise(
                Guid.NewGuid(),
                workout.Id,
                exerciseDto.ExerciseType,
                exerciseDto.TargetType,
                exerciseDto.DistanceInMeters,
                exerciseDto.DurationInSeconds);

            workouts.Exercises.Add(exercise);
        }

        if (errors.Count != 0)
        {
            return Result.Failure(new ValidationError(errors.ToArray()));
        }

        await unitOfWork.SaveChangesAsync(cancellationToken);

        return Result.Success();
    }
}

```

There isn't much logic here. We're just checking whether the workout exists and whether the exercises are valid.

What happens when we start to add more logic?

Let's add another business rule.
We must enforce a limit on the number of exercises allowed in a single workout (e.g., no more than 10 exercises).

```cs
internal sealed class AddExercisesCommandHandler(
    IWorkoutRepository workoutRepository,
    IUnitOfWork unitOfWork)
    : ICommandHandler<AddExercisesCommand>
{
    public async Task<Result> Handle(
        AddExercisesCommand request,
        CancellationToken cancellationToken)
    {
        Workout? workout = await workoutRepository.GetByIdAsync(
            request.WorkoutId,
            cancellationToken);

        if (workout is null)
        {
            return Result.Failure(WorkoutErrors.NotFound(request.WorkoutId));
        }

        List<Error> errors = [];
        foreach (ExerciseRequest exerciseDto in request.Exercises)
        {
            if (exerciseDto.TargetType == TargetType.Distance &&
                exerciseDto.DistanceInMeters is null)
            {
                errors.Add(ExerciseErrors.MissingDistance);

                continue;
            }

            if (exerciseDto.TargetType == TargetType.Time &&
                exerciseDto.DurationInSeconds is null)
            {
                errors.Add(ExerciseErrors.MissingDuration);

                continue;
            }

            var exercise = new Exercise(
                Guid.NewGuid(),
                workout.Id,
                exerciseDto.ExerciseType,
                exerciseDto.TargetType,
                exerciseDto.DistanceInMeters,
                exerciseDto.DurationInSeconds);

            workouts.Exercises.Add(exercise);
<span class="code-line highlight-line">
<span class="code-line highlight-line">            if (workouts.Exercise.Count > 10)
<span class="code-line highlight-line">            {
<span class="code-line highlight-line">                return Result.Failure(
<span class="code-line highlight-line">                    WorkoutErrors.MaxExercisesReached(workout.Id));
<span class="code-line highlight-line">            }
        }

        if (errors.Count != 0)
        {
            return Result.Failure(new ValidationError(errors.ToArray()));
        }

        await unitOfWork.SaveChangesAsync(cancellationToken);

        return Result.Success();
    }
}

```

We can continue adding more business logic to the transaction script.
For example, we can introduce exercise type restrictions or enforce a specific exercise order.
You can imagine how the complexity will keep increasing over time.

Another concern is code duplication between transaction scripts.
This could happen if we need similar logic in multiple transaction scripts.
You may be tempted to solve this by calling one transaction script from the other, but this will introduce a different set of problems.

So, how can we solve these problems?

---

## refactoring-to-domain-model"><a href="#refactoring-to-domain-model">Refactoring to Domain Model

What is a domain model?

<blockquote>
An object model of the domain that incorporates both behavior and data.

</blockquote>
*— <a href="https://martinfowler.com/eaaCatalog/domainModel.html">Domain Model</a>, Patterns of Enterprise Application Architecture*

A domain model lets you encapsulate domain logic (behavior) and state changes (data) inside an object.
In Domain-Driven Design terminology, we would call this an aggregate.

An aggregate in DDD is a cluster of objects treated as a single unit for data changes.
The aggregate represents a consistency boundary.
It helps maintain consistency by ensuring that certain invariants always hold true for the entire aggregate.
In our workout example, the `Workout` class can be treated as an aggregate root that encompasses all the exercises within it.

What does this have to do with a transaction script?

We can move the domain logic and state changes from the transaction script into the aggregate.
This is often called "pushing logic down" into the domain.

Here's what the domain model will look like when we extract the domain logic:

```cs
public sealed class Workout
{
    private readonly List<Exercise> _exercises = [];

    // Omitting the constructor and other propreties for brevity.

    public Result AddExercises(ExerciseModel[] exercises)
    {
        List<Error> errors = [];
        foreach (var exerciseModel in exercises)
        {
            if (exerciseModel.TargetType == TargetType.Distance &&
                exerciseModel.DistanceInMeters is null)
            {
                errors.Add(ExerciseErrors.MissingDistance);

                continue;
            }

            if (exerciseModel.TargetType == TargetType.Time &&
                exerciseModel.DurationInSeconds is null)
            {
                errors.Add(ExerciseErrors.MissingDuration);

                continue;
            }

            var exercise = new Exercise(
                Guid.NewGuid(),
                workout.Id,
                exerciseDto.ExerciseType,
                exerciseDto.TargetType,
                exerciseDto.DistanceInMeters,
                exerciseDto.DurationInSeconds);

            workouts.Exercises.Add(exercise);

            if (workouts.Exercise.Count > 10)
            {
                return Result.Failure(
                    WorkoutErrors.MaxExercisesReached(workout.Id));
            }
        }

        if (errors.Count != 0)
        {
            return Result.Failure(new ValidationError(errors.ToArray()));
        }

        return Result.Success();
    }
}

```

With the domain logic inside of the domain model, we can easily share it between transaction scripts.
Testing the domain model is simpler than testing the transaction script.
With a transaction script, we must provide any dependencies (possibly as mocks) for testing.
However, we can test the domain model in isolation.

The updated transaction script becomes much more straightforward and focused on its primary task:

```cs
internal sealed class AddExercisesCommandHandler(
    IWorkoutRepository workoutRepository,
    IUnitOfWork unitOfWork)
    : ICommandHandler<AddExercisesCommand>
{
    public async Task<Result> Handle(
        AddExercisesCommand request,
        CancellationToken cancellationToken)
    {
        Workout? workout = await workoutRepository.GetByIdAsync(
            request.WorkoutId,
            cancellationToken);

        if (workout is null)
        {
            return Result.Failure(WorkoutErrors.NotFound(request.WorkoutId));
        }

        var exercises = request.Exercises.Select(e => e.ToModel()).ToArray();

        var result = workout.AddExercises(exercises);

        if (result.IsFailure)
        {
            return result;
        }

        await unitOfWork.SaveChangesAsync(cancellationToken);

        return Result.Success();
    }
}

```

---

## takeaway"><a href="#takeaway">Takeaway

Transaction Scripts are a practical starting point for simple applications.
They offer a straightforward approach to implementing use cases.
Transaction scripts are the recommended approach to start building <a href="vertical-slice-architecture-structuring-vertical-slices">vertical slices</a>.
However, transaction scripts can become difficult to maintain as the application grows.

<a href="refactoring-from-an-anemic-domain-model-to-a-rich-domain-model">Refactoring toward a Domain Model</a> allows you to encapsulate business logic in domain objects.
This promotes code reusability and makes your application more adaptable to changes.
Pushing logic down also improves testability and maintainability.

Should you use a Transaction Script or a Domain Model?

Here's a pragmatic approach you should consider.
Start with a transaction script, but pay attention to growing complexity.
When you notice a transaction script has too many concerns, consider adding a domain model.
Remember, the domain model should encapsulate some of the complexity of the domain logic.

Thanks for reading, and I'll see you next week!

-->

---

<TagLinks />