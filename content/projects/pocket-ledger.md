---
title: "PocketLedger"
description: "A personal finance tracker that imports bank CSVs, auto-categorises transactions with AI, and surfaces spending patterns."
date: "2025-11-05"
slug: "pocket-ledger"
tags: ["Next.js", "React", "Prisma", "PostgreSQL", "OpenAI"]
demoUrl: "https://pocketledger.app"
repoUrl: "https://github.com/norbi/pocket-ledger"
featured: true
---

## Overview

PocketLedger makes personal finance less painful. Import a CSV from any bank, and the app automatically categorises each transaction using an OpenAI-powered classifier. A clean dashboard then surfaces spending trends, monthly budgets, and anomaly alerts.

## Architecture

Built with Next.js App Router and a Postgres database managed through Prisma. The AI categorisation pipeline runs as a server action — each new import triggers a batch call to the OpenAI API, which returns structured category labels stored back in the database.

## Key Features

- **CSV import** — supports exports from all major Hungarian and EU banks
- **AI categorisation** — GPT-4o classifies each transaction on import
- **Budget tracking** — set monthly limits per category with real-time progress bars
- **Anomaly detection** — highlights unusual spending compared to your rolling average

## Challenges

Handling the wide variety of CSV formats from different banks required a flexible parser that could detect column mappings automatically. A schema-inference step using regex heuristics solved most edge cases.

## Results

- Tracks 4+ years of personal transaction history
- Average categorisation accuracy: 94%
- Reduced monthly financial review time from ~2 hours to under 10 minutes
