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

- **[Builder](https://lnkd.in/dpGVjaZb)** — Construct complex objects step by step, separating construction from the final representation.
- **[Factory Method](https://lnkd.in/dxqpZayi)** — Defer instantiation to subclasses so callers depend on an abstraction, not a concrete type.
- **[Abstract Factory](https://lnkd.in/dSh2d6im)** — Produce families of related objects without naming their concrete classes.
- **[Prototype](https://lnkd.in/dFphTzR7)** — Create new objects by cloning an existing instance.
- **[Singleton (multithreading)](https://lnkd.in/dypwRkAb)** — Guarantee a single instance with thread-safe lazy initialization.

## Structural Patterns

How objects are composed into larger structures.

- **[Adapter](https://lnkd.in/dRZkcJ8S)** — Wrap an incompatible interface so two types can work together.
- **[Bridge](https://lnkd.in/d7Q_ir2Q)** — Decouple an abstraction from its implementation so both can vary independently.
- **[Composite](https://lnkd.in/da52pe8r)** — Treat individual objects and compositions of objects uniformly through a tree.
- **[Decorator](https://lnkd.in/dSN9xbYm)** — Add behavior to an object at runtime by wrapping it.
- **[Facade](https://lnkd.in/d-Qf5dyH)** — Provide a simple entry point over a complex subsystem.
- **[Proxy](https://lnkd.in/dK5S7Uhs)** — Stand in for another object to control access, add caching, or lazy-load.

## Behavioral Patterns

How objects communicate and distribute responsibility.

- **[Chain of Responsibility](https://lnkd.in/dvn5Kj9b)** — Pass a request along a chain of handlers until one handles it.
- **[Command](https://lnkd.in/dxDCuGbi)** — Encapsulate a request as an object you can queue, log, or undo.
- **[Memento](https://lnkd.in/d4R4y7-V)** — Capture and restore an object's state without exposing its internals.
- **[Observer](https://lnkd.in/dNR__yKR)** — Notify dependents automatically when the subject's state changes.
- **[State](https://lnkd.in/dgJ5cPKK)** — Let an object change its behavior when its internal state changes.
- **[Strategy](https://lnkd.in/dp47ATFH)** — Swap interchangeable algorithms behind a common interface.
- **[Template Method](https://lnkd.in/dcPbWhZ7)** — Define an algorithm's skeleton and let subclasses fill in the steps.
- **[Visitor](https://lnkd.in/dHk_TUhb)** — Add operations to an object structure without modifying its classes.

## Architectural & .NET Patterns

Patterns that show up at the application and system level — several of them specific to building reliable services in .NET.

- **[CQRS](https://lnkd.in/dC5e8CEu)** — Separate read and write models so each can scale and evolve on its own.
- **[Options (IOptions)](https://lnkd.in/d3nnijth)** — Bind and inject strongly-typed configuration in .NET.
- **[REPR](https://lnkd.in/dgf36vNA)** — Structure endpoints as Request–Endpoint–Response for clean vertical slices.
- **[Service Collection Extension](https://lnkd.in/duXs9hjP)** — Group related dependency-injection registrations into tidy extension methods.
- **[Saga Orchestration](https://lnkd.in/ds_RqYv4)** — Coordinate long-running distributed transactions with compensating actions.
- **[Outbox](https://lnkd.in/dnZU9RhA)** — Reliably publish messages by committing them in the same transaction as your data.
- **[Circuit Breaker (resilient APIs)](https://lnkd.in/gwhVkNQ8)** — Stop hammering a failing dependency and fail fast to keep the system resilient.

---

That's 26 patterns in total. None of them are silver bullets — the skill is recognizing the situation that calls for one, and knowing the cost of reaching for it. Start with the problem, not the pattern.
