---
title: "DevFlow"
description: "A real-time collaborative code editor with syntax highlighting, live cursors, and integrated PR-style reviews."
date: "2026-01-20"
slug: "devflow"
tags: ["Next.js", "WebSockets", "PostgreSQL", "Monaco Editor", "Supabase"]
demoUrl: "https://devflow.app"
repoUrl: "https://github.com/norbi/devflow"
featured: true
---

## Overview

DevFlow lets distributed teams write and review code together in real time. Think Figma — but for code editors. Multiple cursors, inline comments, and instant presence indicators make async collaboration feel synchronous.

## Architecture

The app is built on Next.js App Router with Supabase Realtime handling live collaboration and a Postgres database for persisting sessions and reviews.

## Key Features

- **Live cursors** — see every collaborator's position as they type
- **Syntax highlighting** — Powered by Monaco Editor, the engine behind VS Code
- **Inline reviews** — Comment on specific lines without leaving the editor
- **Session history** — Replay any editing session frame-by-frame

## Challenges

Getting Monaco Editor to behave inside a Next.js SSR environment required dynamic imports and careful hydration handling. The OT (Operational Transform) algorithm for conflict resolution was the most intellectually demanding part of the project.

## Results

Reduced async code-review round-trips by ~65% in early user testing with three remote teams.
