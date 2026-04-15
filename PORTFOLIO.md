# Next.js + shadcn/ui portfólió terv és dokumentáció

## Áttekintés

Ez a terv egy egyszerű, modern, könnyen bővíthető portfólió weboldalhoz készült, amely az alábbi stackre épül:

* **Next.js** App Routerrel
* **Tailwind CSS** a stílusozáshoz
* **shadcn/ui** az újrafelhasználható UI elemekhez
* **Markdown fájlok** a projekttartalmak kezelésére

A cél egy minimalista, gyors, jól strukturált oldal, ahol a projektek Markdown fájlokból töltődnek be, és dinamikus route-on jelennek meg.

---

## 1. Projekt struktúra

## Javasolt mappaszerkezet

```bash
my-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── projects/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   ├── project-card.tsx
│   ├── markdown-renderer.tsx
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── separator.tsx
│
├── content/
│   └── projects/
│       ├── portfolio-site.md
│       └── task-manager.md
│
├── lib/
│   ├── markdown.ts
│   └── projects.ts
│
├── public/
│   └── images/
│       └── projects/
│           ├── portfolio-cover.jpg
│           └── task-manager-cover.jpg
│
├── types/
│   └── project.ts
│
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Megjegyzések

* `app/`: az App Router alapú oldalak
* `components/ui/`: a shadcn generált komponensek helye
* `content/projects/`: a projektek Markdown forrásai
* `lib/`: fájlbeolvasás, parsing és adattranszformáció
* `types/`: TypeScript típusok

---

## 2. Routing terv

## Oldalak és route-ok

### `/`

**Home oldal**

Feladata:

* rövid bemutatkozás
* CTA gomb a projektekhez
* kiemelt projektek megjelenítése

### `/projects`

**Projektek lista oldal**

Feladata:

* minden projekt listázása grid nézetben
* `Card` komponensek használata
* technológiai tagek megjelenítése `Badge` komponenssel

### `/projects/[slug]`

**Projekt részletező oldal**

Feladata:

* adott projekt betöltése `slug` alapján
* Markdown tartalom renderelése
* technológiák, leírás, linkek megjelenítése

## Routing példa

```tsx
app/
├── page.tsx              // /
└── projects/
    ├── page.tsx          // /projects
    └── [slug]/
        └── page.tsx      // /projects/[slug]
```

---

## 3. Markdown struktúra

A projektek Markdown fájlokban élnek a `content/projects` mappában.

## Javasolt frontmatter mezők

* `title`: projekt neve
* `description`: rövid leírás
* `date`: létrehozás vagy publikálás dátuma
* `slug`: route slug
* `tags`: technológiák listája
* `coverImage`: borítókép elérési útja
* `demoUrl`: élő demo link
* `repoUrl`: repository link
* `featured`: kiemelt projekt-e

## Példa 1

```md
---
title: "Portfolio Website"
description: "Minimalista fejlesztői portfólió Next.js és shadcn/ui használatával."
date: "2026-04-15"
slug: "portfolio-website"
tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"]
coverImage: "/images/projects/portfolio-cover.jpg"
demoUrl: "https://example.com"
repoUrl: "https://github.com/username/portfolio"
featured: true
---

## Projekt célja

Egy gyors, letisztult portfólió oldal készítése, amely Markdown alapú tartalomkezelést használ.

## Főbb funkciók

- projektlista oldal
- dinamikus projektoldalak
- Markdown alapú tartalomkezelés
- reszponzív UI

## Tanulságok

A Markdown alapú tartalom egyszerűsíti az új projektek hozzáadását és karbantartását.
```

## Példa 2

```md
---
title: "Task Manager App"
description: "Egyszerű feladatkezelő alkalmazás drag-and-drop funkcióval."
date: "2026-03-20"
slug: "task-manager-app"
tags: ["React", "Next.js", "Tailwind CSS"]
coverImage: "/images/projects/task-manager-cover.jpg"
demoUrl: "https://tasks.example.com"
repoUrl: "https://github.com/username/task-manager"
featured: false
---

## Áttekintés

Ez a projekt egy könnyű feladatkezelő alkalmazás, amely fókuszál a gyors használhatóságra.

## Technikai megoldások

- komponens alapú felépítés
- lokális state kezelés
- letisztult drag-and-drop élmény
```

---

## 4. Adatbetöltési stratégia

A Markdown fájlok beolvasásához javasolt:

* `fs`
* `path`
* `gray-matter`

A Markdown body rendereléséhez később használható például:

* `react-markdown`

## Ajánlott megközelítés

* A fájlbeolvasás és parsing a `lib/` utility rétegben történjen.
* Ezeket a függvényeket a **server componentek** használják.
* Mivel a tartalom a fájlrendszerből jön, ez természetesen jól illeszkedik szerveroldali működéshez.

## Példa típusdefiníció

```ts
// types/project.ts
export type ProjectFrontmatter = {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  coverImage?: string
  demoUrl?: string
  repoUrl?: string
  featured?: boolean
}

export type Project = ProjectFrontmatter & {
  content: string
}
```

## Markdown beolvasás utility

```ts
// lib/projects.ts
import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { Project } from "@/types/project"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export function getProjectSlugs(): string[] {
  return fs.readdirSync(projectsDirectory).filter((file) => file.endsWith(".md"))
}

export function getProjectBySlug(slug: string): Project {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = path.join(projectsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    ...(data as Omit<Project, "content">),
    content,
  }
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs()

  return slugs
    .map((slug) => getProjectBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured)
}
```

## Hol történjen a parsing?

**Best practice:**

* parsing és fájlműveletek: `lib/projects.ts`
* renderelés: `app/projects/page.tsx` és `app/projects/[slug]/page.tsx`
* Markdown HTML/React renderelés: külön `MarkdownRenderer` komponensben

---

## 5. Komponens struktúra

## Javasolt újrafelhasználható komponensek

### `Layout`

Felelősség:

* alap oldalstruktúra
* konténer szélesség
* header/footer elhelyezés

### `Header`

Felelősség:

* navigáció
* logó / név
* fő linkek

### `ProjectCard`

Felelősség:

* egy projekt előnézeti kártyájának megjelenítése
* `Card`, `Badge`, `Button` használata

### `MarkdownRenderer`

Felelősség:

* Markdown tartalom renderelése
* tipográfiai wrapper biztosítása

---

## Példa: `ProjectCard` komponens

```tsx
// components/project-card.tsx
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Project } from "@/types/project"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full rounded-2xl border border-border">
      <CardHeader className="space-y-3">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild>
          <Link href={`/projects/${project.slug}`}>Részletek</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
```

---

## Példa: `MarkdownRenderer`

```tsx
// components/markdown-renderer.tsx
import ReactMarkdown from "react-markdown"

type MarkdownRendererProps = {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <article className="prose prose-neutral max-w-none dark:prose-invert">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}
```

---

## Példa: Home oldal

```tsx
// app/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ProjectCard } from "@/components/project-card"
import { getFeaturedProjects } from "@/lib/projects"

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <main className="container mx-auto px-6 py-16 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Szia, Norbi vagyok.</h1>
        <p className="max-w-2xl text-muted-foreground">
          Frontend fejlesztő vagyok, modern, gyors és letisztult webes felületeket építek.
        </p>
        <Button asChild>
          <Link href="/projects">Projektek megtekintése</Link>
        </Button>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Kiemelt projektek</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
```

---

## Példa: Projektek lista oldal

```tsx
// app/projects/page.tsx
import { ProjectCard } from "@/components/project-card"
import { getAllProjects } from "@/lib/projects"

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <main className="container mx-auto px-6 py-16 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Projektek</h1>
        <p className="text-muted-foreground">
          Válogatás a munkáimból és kísérleti projektjeimből.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}
```

---

## Példa: Dinamikus projektoldal

```tsx
// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { getAllProjects, getProjectBySlug } from "@/lib/projects"

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  try {
    const project = getProjectBySlug(params.slug)

    return (
      <main className="container mx-auto px-6 py-16 space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <p className="max-w-2xl text-muted-foreground">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <Separator />

        <MarkdownRenderer content={project.content} />
      </main>
    )
  } catch {
    notFound()
  }
}
```

---

## 6. shadcn integráció

## Telepítés lépései

### 1. Next.js projekt létrehozása

```bash
npx create-next-app@latest my-portfolio
cd my-portfolio
```

Javasolt opciók:

* TypeScript: igen
* App Router: igen
* Tailwind CSS: igen

### 2. shadcn inicializálása

```bash
npx shadcn@latest init
```

A setup során általában:

* létrejön a `components.json`
* a komponensek a `components/ui` alá kerülnek
* szükséges aliasok beállításra kerülnek

### 3. Szükséges komponensek hozzáadása

```bash
npx shadcn@latest add card button badge separator
```

### 4. Markdown függőségek telepítése

```bash
npm install gray-matter react-markdown
```

---

## shadcn komponenshasználat példa

```tsx
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ExampleProjectPreview() {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Portfolio Website</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Minimalista portfólió oldal Next.js és shadcn/ui használatával.
        </p>

        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
          <Badge variant="secondary">shadcn/ui</Badge>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild>
          <Link href="/projects/portfolio-website">Megnyitás</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
```

---

## 7. Egyszerű UI/UX javaslat

## Dizájn irányelvek

### Minimalista layout

* sok whitespace
* maximum 2–3 fő hangsúlyszín
* egyszerű tipográfiai hierarchia
* egyértelmű CTA gombok
* kevés, de jól elhelyezett vizuális elem

### Home oldal javaslat

* hero szekció névvel és rövid bemutatkozással
* “Projektek megtekintése” gomb
* 2–3 kiemelt projekt preview

### Projektek oldal

* grid alapú kártyás lista
* mobilon 1 oszlop
* tableten 2 oszlop
* desktopon 3 oszlop

```tsx
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {projects.map((project) => (
    <ProjectCard key={project.slug} project={project} />
  ))}
</div>
```

### Projekt részletező oldal

* nagy cím
* rövid leírás
* tech stack badge-ek
* elválasztó
* Markdown tartalom jól olvasható szélességgel

## UX best practice-ek

* a kártyák teljes felülete legyen könnyen beazonosítható
* a CTA szövegek legyenek egyértelműek
* a Markdown tartalom kapjon jó tipográfiai stílust
* legyen konzisztens spacing minden oldalon
* később érdemes metadata-t és Open Graph támogatást is hozzáadni

---

## 8. README.md

Az alábbi egy teljes, használható `README.md` minta.

````md
# Developer Portfolio

Egyszerű, modern portfólió weboldal Next.js, Tailwind CSS és shadcn/ui használatával.  
A projektek Markdown fájlokból töltődnek be, így az oldal könnyen karbantartható és bővíthető.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- gray-matter
- react-markdown

## Funkciók

- Home oldal bemutatkozással
- Projektek lista oldal
- Dinamikus projekt részletező oldalak
- Markdown alapú projektkezelés
- Reszponzív, minimalista UI

## Projekt struktúra

```bash
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── layout/
│   ├── project-card.tsx
│   ├── markdown-renderer.tsx
│   └── ui/
├── content/
│   └── projects/
├── lib/
│   └── projects.ts
├── public/
│   └── images/
├── types/
│   └── project.ts
└── README.md
````

## Telepítés

### 1. Projekt létrehozása

```bash
npx create-next-app@latest my-portfolio
cd my-portfolio
```

Ajánlott beállítások:

* TypeScript: Yes
* App Router: Yes
* Tailwind CSS: Yes

### 2. shadcn/ui inicializálása

```bash
npx shadcn@latest init
```

### 3. UI komponensek telepítése

```bash
npx shadcn@latest add card button badge separator
```

### 4. Markdown csomagok telepítése

```bash
npm install gray-matter react-markdown
```

### 5. Fejlesztői szerver indítása

```bash
npm run dev
```

Az oldal ezután általában itt érhető el:

```bash
http://localhost:3000
```

## Routing

* `/` — Home oldal
* `/projects` — Projektek lista
* `/projects/[slug]` — Egyedi projekt oldal

## Hogyan működik a projekt tartalomkezelés?

A projektek a `content/projects` mappában lévő `.md` fájlokból töltődnek be.

Minden projekt rendelkezik:

* frontmatter metaadatokkal
* Markdown tartalommal

## Projekt Markdown példa

```md
---
title: "Portfolio Website"
description: "Minimalista fejlesztői portfólió Next.js és shadcn/ui használatával."
date: "2026-04-15"
slug: "portfolio-website"
tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"]
coverImage: "/images/projects/portfolio-cover.jpg"
demoUrl: "https://example.com"
repoUrl: "https://github.com/username/portfolio"
featured: true
---

## Projekt célja

Egy gyors és modern portfólió oldal létrehozása.

## Főbb funkciók

- projektlista
- dinamikus route
- Markdown alapú tartalomkezelés
```

## Új projekt hozzáadása

1. Hozz létre egy új `.md` fájlt a `content/projects` mappában.
2. Add meg a szükséges frontmatter mezőket.
3. Írd meg a projekt leírását Markdown formátumban.
4. A `slug` mező egyezzen a kívánt URL-lel.

### Példa

```bash
content/projects/my-new-project.md
```

```md
---
title: "My New Project"
description: "Egy új projekt rövid leírása."
date: "2026-04-15"
slug: "my-new-project"
tags: ["Next.js", "Tailwind CSS"]
featured: false
---

## Áttekintés

Ez egy új projekt leírása.
```

## Adatbetöltés

A Markdown fájlok beolvasása a `lib/projects.ts` fájlban történik:

* `fs` a fájlok olvasásához
* `gray-matter` a frontmatter feldolgozásához
* a parsed adatokat a page komponensek használják

## Példa: projekt utility

```ts
import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export function getProjectBySlug(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    ...data,
    content,
  }
}
```

## shadcn/ui használat

A projektek listázásához jól használható a `Card`, `Badge`, `Button` és `Separator`.

### Példa

```tsx
<Card>
  <CardHeader>
    <CardTitle>Portfolio Website</CardTitle>
  </CardHeader>

  <CardContent>
    <div className="flex gap-2 flex-wrap">
      <Badge variant="secondary">Next.js</Badge>
      <Badge variant="secondary">Tailwind CSS</Badge>
    </div>
  </CardContent>

  <CardFooter>
    <Button>Részletek</Button>
  </CardFooter>
</Card>
```

## Javasolt komponensek

* `SiteHeader`
* `ProjectCard`
* `MarkdownRenderer`
* `SiteFooter`

## UI/UX irányelvek

* letisztult, minimalista megjelenés
* jól olvasható tipográfia
* sok whitespace
* grid alapú projektek oldal
* következetes spacing

## Jövőbeli bővítési lehetőségek

### Kontakt form

Később bővíthető egy kapcsolati űrlappal:

* form komponens
* szerveroldali API route
* email küldés vagy adatmentés

### Blog rendszer

Markdown alapú blog is könnyen hozzáadható:

* `content/blog`
* `/blog`
* `/blog/[slug]`

### Dark mode

A projekt később bővíthető dark mode támogatással:

* `next-themes`
* shadcn kompatibilis theme kezelés

## Best practice-ek

* A Markdown parsing maradjon a `lib/` rétegben.
* A route oldalak maradjanak vékonyak és áttekinthetők.
* A UI komponensek legyenek újrafelhasználhatók.
* A projekt metaadatokat egységes frontmatter struktúrában kezeld.
* Használj TypeScript típusokat a stabilitás érdekében.

## Összegzés

Ez a struktúra ideális egy egyszerű, skálázható fejlesztői portfólióhoz.
A Markdown alapú tartalomkezelés gyors és kényelmes, a shadcn/ui pedig modern, konzisztens UI építést tesz lehetővé.

```

---

## Best practice összefoglaló

- **Tartalom és megjelenítés szétválasztása**: a Markdown fájlok külön élnek a komponensektől
- **Server-first megközelítés**: a fájlbeolvasás szerveroldalon történjen
- **Komponens újrafelhasználhatóság**: `ProjectCard`, `MarkdownRenderer`, `Header`
- **Egyszerű route struktúra**: könnyen bővíthető bloggal vagy contact oldallal
- **Minimalista UI**: gyors, tiszta, fenntartható

---

## Rövid ajánlás induláshoz

A legjobb kezdő implementáció:

1. scaffoldold a Next.js projektet
2. inicializáld a shadcn-t
3. készítsd el a `lib/projects.ts` fájlt
4. hozz létre 2 minta Markdown projektet
5. építsd meg a `ProjectCard` és `MarkdownRenderer` komponenseket
6. kösd össze a `/projects` és `/projects/[slug]` route-okkal

Ezzel gyorsan kapsz egy stabil, jól bővíthető portfólió alapot.

Ezt a dokumentációt következő lépésként át tudom alakítani egy **valódi projektfájl-struktúrává konkrét kódokkal**, például komplett `app/`, `components/`, `lib/` és `content/` fájlokra bontva.
```
