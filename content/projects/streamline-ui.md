---
title: "StreamlineUI"
description: "An open-source component library built with React, TypeScript, and Tailwind CSS — designed for speed."
date: "2026-03-10"
slug: "streamline-ui"
tags: ["React", "TypeScript", "Tailwind CSS", "Open Source"]
demoUrl: "https://streamlineui.dev"
repoUrl: "https://github.com/norbi/streamline-ui"
featured: true
---

## Overview

StreamlineUI is an open-source component library built with React, TypeScript, and Tailwind CSS. The goal was to create a fast, accessible, and highly composable set of UI primitives that developers can drop into any project without fighting the defaults.

## Architecture

The library is structured as a monorepo using Turborepo. Each component lives in its own package, allowing consumers to install only what they need. Storybook is used for isolated development and visual regression testing.

## Key Features

- **Zero-runtime CSS** — all styles compile to utility classes at build time
- **Accessible by default** — ARIA roles, keyboard navigation, and focus management baked in
- **Composable API** — every component accepts `asChild` for full control over the rendered element
- **Dark mode ready** — CSS variable–based theming with no extra configuration

## Challenges

Getting tree-shaking right across the monorepo was the trickiest part. The initial setup resulted in consumers bundling the entire library. Switching to individual entry points per component solved the problem and cut average bundle size by 62%.

## Results

- 1,200+ GitHub stars in the first two months
- Used in 3 production projects internally
- Documented with full Storybook stories and accessibility annotations
