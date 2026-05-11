---
title: "Bank Reconciliation Dashboard"
description: "Matching bank transactions with invoices and managing reconciliation exceptions."
date: "2026-05-10"
slug: "bank-invoice-reconciliation-dashboard"
tags: ["Power BI", "Power Query", "Power Automate", "Accounting"]
demoUrl: ""
repoUrl: ""
videoUrl: ""
featured: true
status: "Planned"
---

## Overview

Bank & Invoice Reconciliation Dashboard is a Power Platform portfolio project focused on a common finance operation: matching bank transactions with customer and supplier invoices, identifying unmatched items, and giving users a clear workflow for resolving exceptions.

The project combines Power Apps, Power Automate, SharePoint Lists, Power Query, and Power BI to demonstrate both process automation and data analysis skills in an accounting context.

## Business Context

Bank reconciliation is often time-consuming because transaction references are inconsistent, payment amounts may not match exactly, and some items require manual investigation. Finance teams need a reliable way to see which transactions have been matched, which invoices remain open, and which cases require human review.

This project models a reconciliation workspace where imported bank transactions and invoice records are compared using rule-based matching logic. Exceptions are then reviewed in a Power Apps interface and summarised in a Power BI dashboard.

## Solution

The solution provides a structured reconciliation process:

- bank transactions are imported from sample CSV files,
- invoice records are stored in a structured list,
- matching rules identify exact and potential matches,
- unmatched or suspicious items are pushed into an exception queue,
- users review and resolve exceptions in Power Apps,
- Power BI visualises reconciliation status and open risks.

## Architecture

The solution is built with the following components:

- **SharePoint Lists** — stores invoices, bank transactions, matching results, and exception records.
- **Power Apps** — provides an exception management interface for reviewing unmatched transactions and confirming manual matches.
- **Power Automate** — coordinates import-related actions, creates exception records, sends notifications, and updates statuses.
- **Power Query** — cleans and transforms bank transaction and invoice data for analysis.
- **Power BI** — displays reconciliation progress, unmatched items, ageing, and exception trends.
- **Power Fx** — supports filtering, validation, manual matching actions, and contextual UI behaviour in the Power Apps interface.

## Data Model

The project uses a lightweight finance data model based on typical reconciliation entities.

### Main tables / lists

- **Bank Transactions** — transaction date, value date, amount, currency, partner name, bank reference, payment description, import batch.
- **Invoices** — invoice number, partner, invoice date, due date, amount, currency, open amount, status.
- **Matching Results** — transaction reference, invoice reference, match type, confidence level, matched amount, match date.
- **Exceptions** — exception type, assigned user, status, comment, resolution date.
- **Import Batches** — import date, source file, number of transactions, imported by.

## Matching Logic

The reconciliation process uses several matching rules:

- **Exact reference match** — bank payment description contains the invoice number.
- **Amount and partner match** — transaction amount and partner name match an open invoice.
- **Partial match** — payment amount is lower than the invoice amount, suggesting partial payment.
- **Potential duplicate** — more than one transaction appears to match the same invoice.
- **Amount mismatch** — reference matches, but payment amount differs from the invoice amount.
- **Unmatched transaction** — no reliable invoice match is found.

Each result is assigned a match type and a confidence level so that users can focus on the items that need manual review.

## Key Features

- **CSV-based import scenario** — sample bank transaction files are used to simulate real reconciliation work.
- **Rule-based matching** — transactions are compared against invoice records using reference, amount, and partner logic.
- **Exception queue** — unmatched, duplicate, partial, and mismatched items are collected for review.
- **Manual matching screen** — users can confirm or override suggested matches in Power Apps.
- **Status management** — exceptions move through statuses such as new, in review, resolved, and dismissed.
- **Power BI dashboard** — reconciliation progress is visualised with matched/unmatched ratios, ageing, and open exception amounts.
- **Audit-friendly comments** — users can add notes explaining manual decisions.

## Power Apps Screens

The app contains several focused screens:

- **Exception Overview** — list of unresolved reconciliation issues with filters for type, status, partner, and amount.
- **Transaction Detail** — selected bank transaction with possible invoice matches.
- **Manual Match** — confirmation screen for linking a transaction to an invoice.
- **Resolution Notes** — comment and status update form for documenting the decision.
- **Manager View** — summary of open exception value, ageing, and workload.

## Power BI Dashboard

The dashboard is designed to answer practical finance questions:

- What percentage of transactions were matched automatically?
- How many exceptions are still unresolved?
- Which partners have the highest unmatched amount?
- How old are the unresolved items?
- Are most issues caused by missing references, amount mismatches, or duplicate payments?
- How much manual work remains in the current import batch?

## What This Project Demonstrates

This project is intended to demonstrate a hybrid skill set across finance, data, and low-code development:

- understanding bank and invoice reconciliation from an accounting perspective;
- designing a structured exception management process;
- preparing and transforming finance data with Power Query;
- building dashboard views in Power BI;
- creating a Power Apps interface for manual review and workflow actions;
- using Power Automate to coordinate notifications and status updates;
- documenting assumptions, matching rules, limitations, and future improvements.

## Design Decisions

The project uses sample CSV data instead of connecting to a real bank or accounting system. This keeps the portfolio project safe to publish while still modelling a realistic finance process.

The matching engine is intentionally rule-based rather than AI-first. This makes the logic easier to explain, audit, and validate. AI-assisted matching could be added later as an enhancement, but the first version focuses on transparent business rules.

## Challenges

The main challenge is handling imperfect finance data. Bank references may be missing or inconsistent, partner names may not match invoice records exactly, and payment amounts may differ because of partial payments, bank fees, or grouped payments.

Another important challenge is presenting the reconciliation results clearly. The app should not overwhelm the user with raw data; it should guide them toward the records that need attention.

## Future Improvements

- add fuzzy matching for partner names and payment descriptions;
- support grouped payments against multiple invoices;
- add AI Builder or Azure AI-assisted match suggestions;
- migrate from SharePoint Lists to Dataverse for stronger relationships and security;
- add Power BI drill-through pages for partner-level analysis;
- add automated reminders for unresolved exceptions;
- package the solution using Power Platform solutions and document ALM steps.

## Microsoft Learn References

This project is designed to connect with official Microsoft documentation and learning paths:

- Canvas apps overview: https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/
- Create a canvas app from SharePoint: https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/app-from-sharepoint
- Power Automate documentation: https://learn.microsoft.com/en-us/power-automate/
- Power Fx overview: https://learn.microsoft.com/en-us/power-platform/power-fx/overview
- Filter and LookUp functions in Power Fx: https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-filter-lookup
- Power Query documentation: https://learn.microsoft.com/en-us/power-query/
- Power BI documentation: https://learn.microsoft.com/en-us/power-bi/
- Microsoft Certified: Power BI Data Analyst Associate: https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/
- Power Platform ALM overview: https://learn.microsoft.com/en-us/power-platform/alm/

## Project Outcome

The finished project will demonstrate how accounting knowledge can be combined with Power Platform and data analysis tools to reduce manual reconciliation work, make exceptions visible, and support better finance operations reporting.
