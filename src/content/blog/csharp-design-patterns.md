---
title: "C# Design Patterns: A Field Guide"
author: Eric Perez
pubDatetime: 2026-05-27T16:00:00.000Z
postSlug: csharp-design-patterns
featured: true
draft: false
tags:
  - csharp
  - dotnet
  - design-patterns
  - architecture
  - software-design
description: A categorized reference to 26 C# design patterns I've written lessons on — from the classic Gang of Four patterns to modern .NET architectural patterns like CQRS, Outbox, and Circuit Breaker.
---

Over the past few years I've been writing short, focused lessons on the design patterns I reach for most in C# and .NET. Patterns aren't about memorizing UML diagrams — they're a shared vocabulary for the trade-offs we make every day: where to put a seam, how to decouple two things that change at different rates, how to keep a distributed system reliable.

Below is the whole collection, organized by type. Each one links to a deeper lesson with code.

## Creational Patterns

How objects get created — decoupling construction from use.

- **[Builder](https://youtu.be/ypNn5dpM7gA)** — Construct complex objects step by step, separating construction from the final representation.
- **[Factory Method](https://thecodeman.net/posts/factory-method-pattern-in-dotnet)** — Defer instantiation to subclasses so callers depend on an abstraction, not a concrete type.
- **[Abstract Factory](https://thecodeman.net/posts/abstract-factory-pattern-in-dotnet)** — Produce families of related objects without naming their concrete classes.
- **[Prototype](https://thecodeman.net/posts/prototype-pattern-in-dotnet)** — Create new objects by cloning an existing instance.
- **[Singleton (multithreading)](https://thecodeman.net/posts/how-to-use-singleton-in-multithreading)** — Guarantee a single instance with thread-safe lazy initialization.

## Structural Patterns

How objects are composed into larger structures.

- **[Adapter](https://thecodeman.net/posts/simplifying-integration-with-adapter-pattern)** — Wrap an incompatible interface so two types can work together.
- **[Bridge](https://thecodeman.net/posts/bridge-pattern-in-dotnet)** — Decouple an abstraction from its implementation so both can vary independently.
- **[Composite](https://thecodeman.net/posts/composite-pattern-in-dotnet)** — Treat individual objects and compositions of objects uniformly through a tree.
- **[Decorator](https://youtu.be/y5QoeiyywiA)** — Add behavior to an object at runtime by wrapping it.
- **[Facade](https://thecodeman.net/posts/facade-pattern-in-dotnet)** — Provide a simple entry point over a complex subsystem.
- **[Proxy](https://thecodeman.net/posts/proxy-pattern-in-dotnet)** — Stand in for another object to control access, add caching, or lazy-load.

## Behavioral Patterns

How objects communicate and distribute responsibility.

- **[Chain of Responsibility](https://thecodeman.net/posts/chain-responsibility-pattern)** — Pass a request along a chain of handlers until one handles it.
- **[Command](https://thecodeman.net/posts/command-pattern-in-dotnet)** — Encapsulate a request as an object you can queue, log, or undo.
- **[Memento](https://thecodeman.net/posts/memento-pattern-in-dotnet)** — Capture and restore an object's state without exposing its internals.
- **[Observer](https://thecodeman.net/posts/observer-pattern-in-dotnet)** — Notify dependents automatically when the subject's state changes.
- **[State](https://thecodeman.net/posts/state-pattern-in-dotnet)** — Let an object change its behavior when its internal state changes.
- **[Strategy](https://thecodeman.net/posts/strategy-design-pattern-will-help-you-refactor-code)** — Swap interchangeable algorithms behind a common interface.
- **[Template Method](https://thecodeman.net/posts/template-method-pattern-in-dotnet)** — Define an algorithm's skeleton and let subclasses fill in the steps.
- **[Visitor](https://thecodeman.net/posts/visitor-pattern-in-dotnet)** — Add operations to an object structure without modifying its classes.

## Architectural & .NET Patterns

Patterns that show up at the application and system level — several of them specific to building reliable services in .NET.

- **[CQRS](https://thecodeman.net/posts/how-to-implement-cqrs-without-mediatr)** — Separate read and write models so each can scale and evolve on its own.
- **[Options (IOptions)](https://thecodeman.net/posts/live-loading-appsettings-configuration-file)** — Bind and inject strongly-typed configuration in .NET.
- **[REPR](https://thecodeman.net/posts/repr-pattern)** — Structure endpoints as Request–Endpoint–Response for clean vertical slices.
- **[Service Collection Extension](https://thecodeman.net/posts/the-service-collection-extension-pattern)** — Group related dependency-injection registrations into tidy extension methods.
- **[Saga Orchestration](https://thecodeman.net/posts/saga-orchestration-pattern)** — Coordinate long-running distributed transactions with compensating actions.
- **[Outbox](https://thecodeman.net/posts/outbox-pattern-in-dotnet)** — Reliably publish messages by committing them in the same transaction as your data.
- **[Circuit Breaker (resilient APIs)](https://thecodeman.net/posts/building-resilient-api-in-aspnet-core)** — Stop hammering a failing dependency and fail fast to keep the system resilient.

---

That's 26 patterns in total. None of them are silver bullets — the skill is recognizing the situation that calls for one, and knowing the cost of reaching for it. Start with the problem, not the pattern.
