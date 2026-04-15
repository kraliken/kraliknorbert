# Next.js portfólió fejlesztési roadmap

Ez a roadmap úgy készült, hogy **lépésről lépésre haladhass rajta**, minden fázis végén **ellenőrizhető eredményt** kapj, és később könnyen **kipipálható** legyen.

A formátum célja:

* kis lépések
* világos cél minden blokkhoz
* konkrét feladatok
* ellenőrzési pontok
* kész állapot kipipálhatósága

---

# Használati mód

Javaslat a haladáshoz:

1. Mindig csak **egy blokkot** valósíts meg.
2. A blokk végén futtasd le az ott megadott **ellenőrzést**.
3. Ha minden rendben, pipáld ki.
4. Csak utána menj tovább a következő blokkra.

---

# Projekt roadmap checklist

---

## 0. Előkészítés és alapok

### 0.1 Projekt inicializálása

**Cél:** legyen egy működő Next.js App Router projekt.

* [ ] Hozd létre a projektet `create-next-app` segítségével
* [ ] Engedélyezd a TypeScriptet
* [ ] Használj App Routert
* [ ] Használj Tailwind CSS-t
* [ ] Indítsd el a fejlesztői szervert

```bash
npx create-next-app@latest my-portfolio
cd my-portfolio
npm run dev
```

**Ellenőrzés**

* [ ] A projekt elindul hibamentesen
* [ ] A kezdőoldal betöltődik a böngészőben
* [ ] Nincs build vagy runtime hiba a konzolban

**Kész definíció**

* [ ] Van futó, tiszta Next.js alapprojekt

---

### 0.2 Alap takarítás

**Cél:** tiszta induló projektstruktúra.

* [ ] Töröld a felesleges demo tartalmakat a kezdőoldalról
* [ ] Egyszerűsítsd az `app/page.tsx` tartalmát
* [ ] Nézd át az `app/globals.css` fájlt
* [ ] Hagyd meg csak a szükséges alap stílusokat

**Ellenőrzés**

* [ ] A Home oldal már nem a gyári sablont mutatja
* [ ] A projekt továbbra is hiba nélkül fut

**Kész definíció**

* [ ] Tiszta, saját alapra építhető projekted van

---

## 1. UI alapréteg felállítása

### 1.1 shadcn/ui inicializálás

**Cél:** működő shadcn setup.

* [ ] Futtasd a shadcn init parancsot
* [ ] Ellenőrizd a `components.json` létrejöttét
* [ ] Ellenőrizd az aliasokat (`@/`)
* [ ] Ellenőrizd, hogy a komponensek a `components/ui` mappába kerülnek

```bash
npx shadcn@latest init
```

**Ellenőrzés**

* [ ] Létrejött a `components.json`
* [ ] A projekt buildelhető maradt
* [ ] A `components/ui` struktúra rendben van

**Kész definíció**

* [ ] A shadcn integráció működik

---

### 1.2 Alap UI komponensek hozzáadása

**Cél:** legyenek meg a szükséges UI építőelemek.

* [ ] Add hozzá a `card` komponenst
* [ ] Add hozzá a `button` komponenst
* [ ] Add hozzá a `badge` komponenst
* [ ] Add hozzá a `separator` komponenst

```bash
npx shadcn@latest add card button badge separator
```

**Ellenőrzés**

* [ ] A komponensfájlok létrejöttek a `components/ui` alatt
* [ ] Nincs import hiba

**Kész definíció**

* [ ] A projekt rendelkezik a szükséges shadcn alapkomponensekkel

---

### 1.3 Alap vizuális rendszer

**Cél:** legyen konzisztens spacing és layout irány.

* [ ] Döntsd el a konténer szélességet
* [ ] Döntsd el az alap page paddinget
* [ ] Döntsd el a heading méreteket
* [ ] Döntsd el a fő spacing skálát

**Ajánlott**

* `container mx-auto px-6`
* szekciók közt `space-y-8` vagy `space-y-12`
* lekerekítés: `rounded-2xl`

**Ellenőrzés**

* [ ] A Home oldal már egységes spacinget használ
* [ ] Nincsenek vizuálisan széteső blokkok

**Kész definíció**

* [ ] Van egy alap UI rendszered, amihez a többi oldal igazodik

---

## 2. Projektstruktúra kialakítása

### 2.1 Mappák létrehozása

**Cél:** a projekt legyen skálázható szerkezetű.

* [ ] Hozd létre a `components/layout` mappát
* [ ] Hozd létre a `content/projects` mappát
* [ ] Hozd létre a `lib` mappát
* [ ] Hozd létre a `types` mappát
* [ ] Hozd létre a `public/images/projects` mappát

**Ellenőrzés**

* [ ] A projektstruktúra megfelel a tervnek
* [ ] Minden új mappa indokolt és átlátható

**Kész definíció**

* [ ] A projekt fel van készítve a tartalom és komponensek szétválasztására

---

### 2.2 Típusok definiálása

**Cél:** stabil adatmodell a projektekhez.

* [ ] Hozz létre `types/project.ts` fájlt
* [ ] Definiáld a `ProjectFrontmatter` típust
* [ ] Definiáld a `Project` típust
* [ ] Gondold át, mely mezők opcionálisak

**Ajánlott mezők**

* `title`
* `description`
* `date`
* `slug`
* `tags`
* `coverImage?`
* `demoUrl?`
* `repoUrl?`
* `featured?`
* `content`

**Ellenőrzés**

* [ ] A típusok importálhatók
* [ ] Nincs TypeScript hiba

**Kész definíció**

* [ ] Van egységes projekt adattípusod

---

## 3. Markdown-alapú tartalomkezelés

### 3.1 Függőségek telepítése

**Cél:** legyen lehetőség Markdown fájlok olvasására és renderelésére.

* [ ] Telepítsd a `gray-matter` csomagot
* [ ] Telepítsd a `react-markdown` csomagot

```bash
npm install gray-matter react-markdown
```

**Ellenőrzés**

* [ ] A csomagok bekerültek a `package.json`-ba
* [ ] Nincs telepítési hiba

**Kész definíció**

* [ ] A projekt készen áll Markdown tartalom feldolgozására

---

### 3.2 Első minta Markdown projekt létrehozása

**Cél:** legyen valós tesztadat.

* [ ] Hozz létre egy `content/projects/portfolio-website.md` fájlt
* [ ] Adj hozzá frontmattert
* [ ] Adj hozzá body tartalmat
* [ ] Ellenőrizd, hogy a `slug` egyezik a fájl és route logikával

**Ellenőrzés**

* [ ] A fájl mentve van
* [ ] A frontmatter strukturált
* [ ] A Markdown body értelmes teszttartalmat tartalmaz

**Kész definíció**

* [ ] Van legalább 1 valós projekt tartalmad

---

### 3.3 Második minta projekt létrehozása

**Cél:** a listaoldal már több elemmel legyen tesztelhető.

* [ ] Hozz létre egy második projekt `.md` fájlt
* [ ] Adj hozzá eltérő tageket
* [ ] Állíts be eltérő dátumot
* [ ] Az egyik projekt legyen `featured: true`

**Ellenőrzés**

* [ ] Legalább 2 projektfájl létezik
* [ ] A metaadatok különböznek
* [ ] A listázás később valósan tesztelhető lesz

**Kész definíció**

* [ ] A projektlista oldal már nem csak egyetlen dummy adatra épül

---

## 4. Adatbeolvasó utility réteg

### 4.1 `lib/projects.ts` létrehozása

**Cél:** külön utility kezelje a fájlolvasást.

* [ ] Hozd létre a `lib/projects.ts` fájlt
* [ ] Implementáld a projektek mappa elérési útját
* [ ] Használj `fs` és `path` modult
* [ ] Használj `gray-matter` parsingot

**Ellenőrzés**

* [ ] A fájl lefordul
* [ ] Nincs import hiba

**Kész definíció**

* [ ] Megvan a központi adatkezelő réteg

---

### 4.2 `getProjectSlugs()` implementálása

**Cél:** listázhatók legyenek a Markdown fájlok.

* [ ] Implementáld a fájlok beolvasását
* [ ] Szűrd csak a `.md` fájlokat
* [ ] Térj vissza slug-listával

**Ellenőrzés**

* [ ] A függvény visszaadja a várható fájlneveket
* [ ] A TypeScript típusok rendben vannak

**Kész definíció**

* [ ] A projektfájlok felismerhetők programból

---

### 4.3 `getProjectBySlug()` implementálása

**Cél:** egy projekt teljes tartalma lekérhető legyen.

* [ ] Olvasd be a megfelelő `.md` fájlt slug alapján
* [ ] Parse-old a frontmattert
* [ ] Add vissza a contentet is
* [ ] Gondoskodj stabil visszatérési típusról

**Ellenőrzés**

* [ ] Létező slug esetén visszakapod a projektet
* [ ] Hibás slug esetén kezelhető hibát kapsz

**Kész definíció**

* [ ] Egy projekt részletei betölthetők

---

### 4.4 `getAllProjects()` implementálása

**Cél:** minden projekt lekérhető legyen listázáshoz.

* [ ] Használd a slugokat
* [ ] Töltsd be az összes projektet
* [ ] Rendezd őket dátum szerint csökkenő sorrendbe

**Ellenőrzés**

* [ ] A függvény tömböt ad vissza
* [ ] A projektek sorrendje helyes

**Kész definíció**

* [ ] Kész a projektek listaadat-forrása

---

### 4.5 `getFeaturedProjects()` implementálása

**Cél:** a Home oldalon külön lehessen kiemelt projekteket mutatni.

* [ ] Szűrd a `featured` mező alapján
* [ ] Adj vissza külön listát

**Ellenőrzés**

* [ ] Csak a kiemelt projektek jelennek meg
* [ ] Ha nincs kiemelt projekt, az állapot kezelhető

**Kész definíció**

* [ ] A Home oldal kiemelt projektblokkjához kész az adatforrás

---

## 5. Layout és navigáció

### 5.1 Alap `layout.tsx` rendberakása

**Cél:** minden oldal egységes shellt kapjon.

* [ ] Nézd át az `app/layout.tsx` fájlt
* [ ] Állítsd be az alap HTML struktúrát
* [ ] Tartsd meg a globális stílusokat
* [ ] Készíts helyet a Headernek és későbbi Footernek

**Ellenőrzés**

* [ ] Minden oldal ugyanazt az alap layoutot használja
* [ ] Nincs felesleges wrapper vagy duplikáció

**Kész definíció**

* [ ] A projekt közös layout szerkezete stabil

---

### 5.2 `SiteHeader` komponens elkészítése

**Cél:** legyen egyszerű, tiszta navigáció.

* [ ] Hozz létre `components/layout/site-header.tsx`
* [ ] Adj hozzá logó vagy név blokkot
* [ ] Adj hozzá linket a Home oldalra
* [ ] Adj hozzá linket a Projects oldalra
* [ ] Használj reszponzív spacinget

**Ellenőrzés**

* [ ] A navigáció minden oldalon látható
* [ ] A linkek működnek
* [ ] Mobilon sem esik szét

**Kész definíció**

* [ ] Van újrafelhasználható fejléc komponens

---

### 5.3 Opcionális `SiteFooter` váz

**Cél:** legyen hely a későbbi bővítésnek.

* [ ] Hozz létre egyszerű footer komponenst
* [ ] Adj hozzá copyright vagy rövid szöveget
* [ ] Kösd be a közös layoutba

**Ellenőrzés**

* [ ] A footer megjelenik minden oldalon
* [ ] Nem túl hangsúlyos, nem zavarja a tartalmat

**Kész definíció**

* [ ] Az oldal rendelkezik alap footerrel

---

## 6. Home oldal implementáció

### 6.1 Hero szekció létrehozása

**Cél:** legyen egy erős, letisztult nyitó blokk.

* [ ] Adj címet a Home oldalnak
* [ ] Írj rövid bemutatkozó szöveget
* [ ] Adj CTA gombot a projektek oldalra
* [ ] Használj `Button` komponenst

**Ellenőrzés**

* [ ] A Home oldal első blokkja átlátható
* [ ] A CTA működik
* [ ] A szöveg nem túl hosszú

**Kész definíció**

* [ ] A Home oldal használható kezdőoldal lett

---

### 6.2 Kiemelt projektek szekció

**Cél:** a Home oldal már valós adatot mutasson.

* [ ] Töltsd be a `getFeaturedProjects()` eredményét
* [ ] Hozz létre szekció címet
* [ ] Készíts gridet a projekteknek
* [ ] Egyelőre akár egyszerű placeholderrel is megjelenítheted

**Ellenőrzés**

* [ ] A kiemelt projektek megjelennek
* [ ] A szekció nem törik meg, ha kevés adat van

**Kész definíció**

* [ ] A Home oldal már tartalomvezérelt

---

### 6.3 `Separator` használata a Home oldalon

**Cél:** vizuális tagolás finom eszközökkel.

* [ ] Tedd be a `Separator` komponenst a fő szekciók közé
* [ ] Ellenőrizd, hogy nem túl erős a vizuális elválasztás

**Ellenőrzés**

* [ ] Az oldal tagoltabb lett
* [ ] A layout továbbra is letisztult

**Kész definíció**

* [ ] A Home oldal vizuálisan rendezett

---

## 7. Projekt kártya komponens

### 7.1 `ProjectCard` komponens létrehozása

**Cél:** egységes projekt előnézeti nézet.

* [ ] Hozd létre a `components/project-card.tsx` fájlt
* [ ] Használj `Card` komponenst
* [ ] Jelenítsd meg a projekt címét
* [ ] Jelenítsd meg a rövid leírást
* [ ] Jelenítsd meg a tageket `Badge` komponenssel
* [ ] Adj “Részletek” gombot `Button` komponenssel

**Ellenőrzés**

* [ ] A komponens egy projekttel hibamentesen renderelődik
* [ ] A gomb a megfelelő route-ra visz
* [ ] A tagek helyesen jelennek meg

**Kész definíció**

* [ ] Kész az újrafelhasználható projektkártya

---

### 7.2 Kártya stílus finomhangolása

**Cél:** minimalista, konzisztens megjelenés.

* [ ] Állíts be megfelelő spacinget
* [ ] Finomítsd a border és rounded értékeket
* [ ] Ellenőrizd a hover érzetet
* [ ] Nézd meg különböző szöveghosszakkal

**Ellenőrzés**

* [ ] Rövid és hosszabb leírásnál is jól néz ki
* [ ] Több kártya egymás mellett is egységes

**Kész definíció**

* [ ] A ProjectCard vizuálisan kész

---

## 8. Projektek lista oldal

### 8.1 `/projects` route létrehozása

**Cél:** legyen külön listaoldal.

* [ ] Hozd létre az `app/projects/page.tsx` fájlt
* [ ] Adj oldalcímet
* [ ] Adj rövid bevezető szöveget

**Ellenőrzés**

* [ ] A `/projects` route betölt
* [ ] Nem dob hibát

**Kész definíció**

* [ ] A projektlista oldal szerkezete megvan

---

### 8.2 Projektek betöltése a listaoldalra

**Cél:** a listaoldal valós adatot mutasson.

* [ ] Importáld a `getAllProjects()` függvényt
* [ ] Töltsd be a projekteket
* [ ] Rendereld ki őket gridben `ProjectCard` komponenssel

**Ellenőrzés**

* [ ] Minden Markdown projekt megjelenik
* [ ] A sorrend a dátum szerint helyes
* [ ] A linkek helyes slugra mutatnak

**Kész definíció**

* [ ] A projektek oldal működik

---

### 8.3 Reszponzív grid finomhangolása

**Cél:** jó megjelenés különböző viewportokon.

* [ ] Mobilra 1 oszlop
* [ ] Tabletre 2 oszlop
* [ ] Desktopra 3 oszlop
* [ ] Ellenőrizd a gap és card magasságokat

**Ellenőrzés**

* [ ] Mobilon olvasható
* [ ] Tableten nem zsúfolt
* [ ] Desktopon kiegyensúlyozott

**Kész definíció**

* [ ] A listaoldal reszponzív

---

## 9. Dinamikus projektoldal

### 9.1 `/projects/[slug]` route létrehozása

**Cél:** minden projektnek legyen saját oldala.

* [ ] Hozd létre az `app/projects/[slug]/page.tsx` fájlt
* [ ] Készítsd el az alap page komponenst
* [ ] Készítsd elő a slug paraméter fogadását

**Ellenőrzés**

* [ ] A route felépítése helyes
* [ ] A dinamikus oldal technikailag elérhető

**Kész definíció**

* [ ] Kész a projekt részletező route váza

---

### 9.2 Adatbetöltés slug alapján

**Cél:** a megfelelő projekt jelenjen meg.

* [ ] Használd a `getProjectBySlug()` függvényt
* [ ] Töltsd be a title-t, descriptiont, tageket
* [ ] Készíts hibakezelést hiányzó slugra

**Ellenőrzés**

* [ ] Létező projektnél megjelenik a tartalom
* [ ] Nem létező slugnál megfelelő fallback van

**Kész definíció**

* [ ] A dinamikus projektoldal működik

---

### 9.3 `generateStaticParams()` hozzáadása

**Cél:** statikus generálás támogatása.

* [ ] Használd a `getAllProjects()` vagy slug lista függvényt
* [ ] Add vissza a szükséges `slug` paramétereket

**Ellenőrzés**

* [ ] Build közben nincs hiba
* [ ] A route-ok generálhatók

**Kész definíció**

* [ ] A dinamikus oldalak statikusan előállíthatók

---

## 10. Markdown tartalom renderelése

### 10.1 `MarkdownRenderer` komponens elkészítése

**Cél:** a Markdown content szépen jelenjen meg.

* [ ] Hozd létre a `components/markdown-renderer.tsx` fájlt
* [ ] Használj `react-markdown` komponenst
* [ ] Adj tipográfiai wrapper classokat

**Ellenőrzés**

* [ ] A címek, listák, bekezdések megjelennek
* [ ] A renderelés nem törik meg speciális tartalomnál sem

**Kész definíció**

* [ ] Kész a Markdown megjelenítő komponens

---

### 10.2 Markdown bekötése a projektoldalba

**Cél:** a projekt body tartalma is látszódjon.

* [ ] Add át a `content` mezőt a `MarkdownRenderer`-nek
* [ ] Tagold a metaadat és a tartalom részt
* [ ] Használj `Separator` komponenst

**Ellenőrzés**

* [ ] A projekt teljes tartalma megjelenik
* [ ] A tagek és body jól elkülönülnek

**Kész definíció**

* [ ] A projekt részletező oldal érdemben kész

---

## 11. Alap polish és minőségjavítás

### 11.1 Oldalcímek és metadata

**Cél:** jobb alap SEO és rendezettség.

* [ ] Adj metadata-t a Home oldalhoz
* [ ] Adj metadata-t a Projects oldalhoz
* [ ] Adj dinamikus metadata-t a projektoldalakhoz

**Ellenőrzés**

* [ ] A tab címek értelmesek
* [ ] A route-ok nem generikus címmel jelennek meg

**Kész definíció**

* [ ] Az oldal metadata szinten is rendezett

---

### 11.2 Üres állapotok kezelése

**Cél:** stabil működés kevés adattal is.

* [ ] Kezeld, ha nincs projekt
* [ ] Kezeld, ha nincs featured projekt
* [ ] Kezeld, ha nincs optional link vagy cover image

**Ellenőrzés**

* [ ] Az oldal nem esik szét hiányos adatokkal
* [ ] A fallback szövegek emberiek

**Kész definíció**

* [ ] A UI robusztusabb lett

---

### 11.3 Hibás route és notFound kezelés

**Cél:** kulturált hibakezelés.

* [ ] Használd a `notFound()`-ot hibás slug esetén
* [ ] Nézd meg a 404 viselkedést
* [ ] Később készíthetsz saját `not-found.tsx` oldalt is

**Ellenőrzés**

* [ ] Nem létező projekt route kulturáltan kezelődik
* [ ] Nincs runtime exception a felületen

**Kész definíció**

* [ ] A route hibakezelés rendben van

---

## 12. Manuális tesztelési kör

### 12.1 Navigációs tesztek

**Cél:** a fő felhasználói flow működjön.

* [ ] Home → Projects navigáció
* [ ] Projects → Project detail navigáció
* [ ] Visszanavigálás tesztelése
* [ ] Header linkek tesztelése

**Ellenőrzés**

* [ ] Minden fő route elérhető
* [ ] Nincs törött link

**Kész definíció**

* [ ] A fő navigáció működik

---

### 12.2 Tartalomtesztek

**Cél:** a Markdown tartalom és metaadatok helyesen jelenjenek meg.

* [ ] Ellenőrizd minden projekt title mezőjét
* [ ] Ellenőrizd minden projekt description mezőjét
* [ ] Ellenőrizd a tags megjelenítését
* [ ] Ellenőrizd a Markdown body renderelését

**Ellenőrzés**

* [ ] Nincs hiányzó adat a UI-ban
* [ ] A tartalom olvasható és konzisztens

**Kész definíció**

* [ ] A tartalomréteg megbízható

---

### 12.3 Reszponzív tesztek

**Cél:** mobilon és desktopon is használható legyen.

* [ ] Teszteld mobil viewporton
* [ ] Teszteld tablet viewporton
* [ ] Teszteld desktop viewporton
* [ ] Ellenőrizd a gridet és spacinget

**Ellenőrzés**

* [ ] Sehol nem lóg ki tartalom
* [ ] A CTA-k elérhetők és olvashatók
* [ ] A kártyák jól törnek

**Kész definíció**

* [ ] Az oldal reszponzív alapokon működik

---

## 13. README és dokumentáció

### 13.1 README létrehozása vagy frissítése

**Cél:** dokumentált, átadható projekt.

* [ ] Írd le a projekt célját
* [ ] Írd le a technológiai stack-et
* [ ] Írd le a setup lépéseket
* [ ] Írd le a mappastruktúrát
* [ ] Írd le az új projekt hozzáadásának módját

**Ellenőrzés**

* [ ] Egy új fejlesztő is el tud indulni a README alapján
* [ ] Az új projekt hozzáadásának folyamata dokumentált

**Kész definíció**

* [ ] A projekt dokumentált

---

## 14. Záró stabilizálás

### 14.1 Kódminőség ellenőrzés

**Cél:** tiszta, fenntartható kódbázis.

* [ ] Nézd át az importokat
* [ ] Távolítsd el a nem használt kódot
* [ ] Futtass lintet
* [ ] Javítsd a TypeScript warningokat

```bash
npm run lint
```

**Ellenőrzés**

* [ ] Nincs felesleges import
* [ ] Nincs linter hiba
* [ ] Nincs TS hiba

**Kész definíció**

* [ ] A projekt tiszta állapotban van

---

### 14.2 Végső kézi review

**Cél:** publikálható MVP állapot.

* [ ] Nézd végig a Home oldalt
* [ ] Nézd végig a Projects oldalt
* [ ] Nézd végig legalább 2 projekt detail oldalt
* [ ] Ellenőrizd a szövegezést
* [ ] Ellenőrizd a CTA-kat

**Ellenőrzés**

* [ ] A projekt MVP-ként vállalható
* [ ] A fő funkcionalitás hibamentes

**Kész definíció**

* [ ] Elkészült az első stabil portfólió verzió

---

# Rövidített haladási nézet

Ez egy kompakt változat, ha csak gyorsan akarod követni az állapotot.

```md
- [ ] 0. Projekt inicializálás
- [ ] 1. shadcn/ui setup
- [ ] 2. Projektstruktúra kialakítás
- [ ] 3. Markdown mintafájlok létrehozása
- [ ] 4. Adatbeolvasó utility elkészítése
- [ ] 5. Layout és header elkészítése
- [ ] 6. Home oldal implementálása
- [ ] 7. ProjectCard komponens elkészítése
- [ ] 8. Projektek listaoldal elkészítése
- [ ] 9. Dinamikus projektoldal elkészítése
- [ ] 10. MarkdownRenderer bekötése
- [ ] 11. Hibakezelés és polish
- [ ] 12. Manuális tesztelés
- [ ] 13. README elkészítése
- [ ] 14. Végső stabilizálás
```
