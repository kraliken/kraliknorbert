---
title: "Microsoft Power BI Desktop for Business Intelligence"
description: "Building a BI solution for AdventureWorks: connecting raw data, modeling relationships, writing DAX calculations, and designing interactive dashboards to track KPIs and analyze business performance."
slug: "power-bi-desktop-for-business-intelligence"
provider: "Udemy (Maven Analytics)"
courseUrl: ""
category: "Power BI"
tags: ["Power BI", "DAX", "Data Modeling", "Data Visualization"]
status: "in-progress"
completedModules: 0
totalModules: 6
startDate: "2026-07-14"
featured: true
---

In this course, I'm building a complete BI solution for **AdventureWorks Cycles**, a fictional manufacturing company. The project involves transforming raw CSV data into professional dashboards to track KPIs (sales, revenue, profit, returns), compare regional performance, analyze product trends, and identify high-value customers. Through each section, I'm learning to connect and shape data, build relational data models, write DAX calculations, and design interactive reports — simulating real-world BI workflows.

## Section 1: Connecting & Shaping Data

In this section, I began the first phase of the AdventureWorks BI workflow by using Power Query to connect to source files, assess data quality, transform tables, and combine queries before loading them into the data model. I also explored data connectors, connection modes, calendar creation, and common query-editing tools used to prepare raw data for reports and dashboards.

### Power Query Foundations

- **Power BI Front-End vs. Back-End** — I learned how the Power Query Editor serves as Power BI’s back-end for extracting, transforming, and loading raw data, while the front-end Data, Model, and Report views support modeling, analysis, and visualization.

- **Types of Data Connectors** — I explored the range of sources available through the Get Data menu, including files, databases, Power Platform and Azure sources, and online services. As a practical exercise, I used Transform Data to import the AdventureWorks Territory Lookup.csv file and created the Territory Lookup query in the Power Query Editor.

- **Power Query Editor** — I became familiar with the main components of the Power Query Editor and the roles of the Home, Transform, and Add Column tabs. I also examined how Power Query records transformations as editable Applied Steps and reapplies them whenever the data is refreshed.

- **Basic Table Transformations** — I applied several core Power Query transformations to the Product Lookup query by validating its data types, changing the ProductCost and ProductPrice columns to Fixed decimal number, removing the ProductSize column, and loading the transformed table into the data model.

### Connecting to Data Sources

- **Storage & Connection Modes** — I examined how Import, DirectQuery, and Composite modes handle data differently and how the selected mode affects performance, data freshness, model flexibility, and resource usage. For the AdventureWorks project, I use Import mode because the course data is loaded into Power BI and queried from memory.

  **Semantic model modes**

  - **Import** — Data is loaded into the Power BI model and queried from memory, providing fast performance and full support for Power Query and DAX. However, the model consumes memory, and its data is only as current as the latest refresh.

  - **DirectQuery** — Data remains in the source system, and Power BI sends queries to the source when users interact with a report. This mode can support large datasets and near real-time reporting, but performance depends on the source, and some Power Query and DAX features are restricted.

  - **Composite** — A single model can combine Import and DirectQuery tables, allowing the storage mode to be configured separately for each table. This can combine the performance of in-memory data with access to frequently changing source data.

- **Connecting to a Database** — I learned how to connect Power BI to a MySQL database through Get Data, authenticate the connection, select tables, and open them in the Power Query Editor. In the demo, I disabled Enable Load so the queries remained available in Power Query without being loaded into the data model.

- **Extracting Data from the Web** — I used the Web connector to scan a Wikipedia page for structured tables, previewed the available results, and imported a selected table into the Power Query Editor for validation and transformation.

### Data QA & Profiling Tools

- **Data Profiling** — I used Column quality, Column distribution, and Column profile to examine valid, error, and empty values, data distributions, and column statistics. In the Customer Lookup query, I switched profiling from the default 1,000 rows to the entire dataset, investigated the causes of the errors, and removed error and empty rows. 

### Transforming and Shaping Data

- **Text Tools** — 
- **Numerical Tools** — 
- **Date & Time Tools** — 
- **Creating a Calendar Table** — 
- **Change Type with Locale** — 
- **Rolling Calendars** — 
- **Index Columns** — 
- **Conditional Columns** — 
- **Calculated Column Best Practices** — 
- **Grouping & Aggregating** — 
- **Pivoting & Unpivoting** — 

### Combining Queries

- **Merging Queries** — 
- **Appending Queries** — 
- **Appending Files from a Folder** — 

### Managing Data Sources and Queries

- **Data Source Settings** — 
- **Data Source Parameters** — 
- **Refreshing Queries** — 
- **Importing Excel Models** — 

### Power Query Best Practices

- **Power Query Best Practices** — 

## Section 2: Creating a Data Model

## Section 3: Calculated Fields with DAX

## Section 4: Visualizing Data with Reports

## Section 5: Artificial Intelligence (AI)

## Section 6: Power BI Optimization Tools