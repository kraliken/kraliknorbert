---
title: "Invoice Approval & Tracking App"
description: "Supplier invoice approvals, status tracking, and exception handling with Power Platform."
date: "2026-05-11"
slug: "invoice-approval-tracking-app"
tags: ["Power Apps", "Power Automate", "SharePoint", "Accounting"]
demoUrl: ""
repoUrl: ""
videoUrl: ""
featured: true
status: "In development"
---

## Overview

Invoice Approval & Tracking App is a Power Platform portfolio project designed around a realistic accounting workflow: registering supplier invoices, routing them for approval, tracking their status, and highlighting overdue or rejected items.

The goal of the project is not only to build a working app, but to demonstrate how accounting knowledge can be translated into a structured, maintainable business application using Microsoft Power Apps, Power Automate, SharePoint Lists, Power Fx, and Power BI.

## Business Context

In many finance teams, supplier invoice approval is still handled through e-mails, spreadsheets, shared folders, and manual follow-ups. This makes it difficult to see which invoices are waiting for approval, who is responsible for the next step, whether anything is overdue, and why a document was rejected.

This project models a simple but realistic workflow for finance and back-office teams:

- accountants register incoming supplier invoices,
- approvers review and approve or reject them,
- managers monitor pending and overdue items,
- the system stores status history and approval comments,
- dashboard views make bottlenecks visible.

## Solution

The application provides a central workspace for invoice registration and approval tracking.

Accountants can create invoice records, attach or link supporting documents, assign approvers, and follow the current status of each invoice. Approvers receive a structured approval request and can approve or reject the invoice with comments. Managers can review pending, rejected, and overdue invoices through filtered views and reporting.

## Architecture

The solution is built with the following components:

- **Power Apps** — canvas app for invoice registration, review, and status tracking.
- **SharePoint Lists** — lightweight data layer for invoices, suppliers, approvers, approval steps, and status history.
- **Power Automate** — workflow automation for approval requests, notifications, reminders, and status updates.
- **Power Fx** — app logic for filtering, validation, status transitions, conditional visibility, and form behaviour.
- **Power BI** — reporting layer for invoice volume, approval status, overdue items, and processing time.

## Data Model

The project uses a simple SharePoint-based data model that can later be migrated to Dataverse if stronger relational modelling, security, or ALM requirements are needed.

### Main tables / lists

- **Invoices** — invoice number, supplier, amount, currency, due date, cost center, status, assigned approver, document link.
- **Suppliers** — supplier name, tax number, payment terms, default cost center.
- **Approvers** — user, department, approval limit, active status.
- **Approval History** — invoice reference, action, comment, action date, actioned by.
- **Status Configuration** — draft, submitted, pending approval, approved, rejected, overdue, posted.

## Key Features

- **Invoice registration** — create and edit supplier invoice records through a structured Power Apps form.
- **Approval workflow** — route invoices to the correct approver and store approval decisions.
- **Status tracking** — follow each invoice from draft to approval, rejection, or posting.
- **Role-based screens** — separate views for accounting users, approvers, and managers.
- **Overdue detection** — highlight invoices that are close to or past their due date.
- **Search and filtering** — filter by supplier, status, due date, cost center, and approver.
- **Approval comments** — capture rejection reasons and approval notes for auditability.
- **Dashboard view** — monitor pending invoices, rejected invoices, overdue items, and approval cycle time.

## Power Automate Flows

The project includes several automation scenarios:

- when a new invoice is submitted, an approval request is sent to the assigned approver;
- when an approver approves or rejects the invoice, the invoice status is updated automatically;
- rejection comments are written back to the approval history list;
- overdue invoices trigger reminder notifications;
- managers receive a periodic summary of pending and overdue approvals.

## Power Fx Logic Examples

The app uses Power Fx for business rules and interface behaviour, including:

- filtering invoice galleries by status and current user;
- showing or hiding approval buttons based on role and invoice status;
- validating required fields before submission;
- patching status updates back to SharePoint;
- calculating overdue indicators from due dates;
- displaying contextual warnings for rejected or incomplete invoices.

## What This Project Demonstrates

This project is intended to demonstrate skills that are directly relevant to business process automation roles:

- understanding finance and accounting workflows;
- translating business requirements into app screens, data structures, and approval logic;
- building canvas apps with SharePoint as a data source;
- designing approval workflows with Power Automate;
- using Power Fx for validation, filtering, and status transitions;
- documenting business rules and technical decisions clearly;
- thinking about maintainability, permissions, and future scalability.

## Design Decisions

The first version uses SharePoint Lists instead of Dataverse because SharePoint is common in many business environments and fits the scope of a lightweight internal tool. This also keeps the project close to real-world low-code/no-code scenarios where teams often start by improving existing Microsoft 365-based processes.

The app is designed as a portfolio case study rather than a production-ready finance system. Sensitive data, enterprise-grade permissions, audit logging, and integration with an ERP system are treated as future improvements.

## Challenges

The most important challenge is balancing simplicity with realistic business logic. Invoice approval looks straightforward at first, but even a small workflow needs clear decisions about statuses, responsibility, rejection handling, permissions, and reporting.

Another challenge is keeping the data model understandable while still making it flexible enough for approval history, status changes, and dashboard reporting.

## Future Improvements

- migrate the data layer from SharePoint Lists to Dataverse;
- add environment variables and solution packaging for better ALM;
- add Teams notifications for approval requests and reminders;
- improve role-based access and permission handling;
- add Power BI measures for approval cycle time and bottleneck analysis;
- add OCR or AI Builder extraction for invoice metadata;
- integrate with an ERP or accounting system mock API.

## Microsoft Learn References

This project is designed to be supported by official Microsoft documentation and learning paths:

- Canvas apps overview: https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/
- Create a canvas app from SharePoint: https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/app-from-sharepoint
- Power Automate approvals: https://learn.microsoft.com/en-us/power-automate/get-started-approvals
- Power Fx overview: https://learn.microsoft.com/en-us/power-platform/power-fx/overview
- Filter and LookUp functions in Power Fx: https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-filter-lookup
- Patch function in Power Fx: https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-patch
- Power Platform ALM overview: https://learn.microsoft.com/en-us/power-platform/alm/
- Power Apps Developer Plan: https://learn.microsoft.com/en-us/power-platform/developer/plan

## Project Outcome

The finished project will serve as a practical case study for Power Platform, process automation, and finance operations roles. It connects accounting domain knowledge with low-code development and shows how manual approval work can be turned into a structured digital workflow.
