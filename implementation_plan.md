# Implementation Plan: Netherlands & Belgium Tour Website
## PW-Tour EU Edition | 28 September – 9 October 2026

---

## 1. Multi-Agent Architecture

| Role | Model | Responsibility |
|------|-------|----------------|
| **Architect** | Claude Sonnet 4.6 (Thinking) | High-level planning, itinerary curation, content logic, user review gates |
| **Worker** | Gemini 3.0 Flash | Code execution, file modification, image research, data preparation, HTML/JS/CSS implementation |

**Workflow Protocol:**
1. Architect produces plan → User reviews → User approves → Worker executes → Architect validates result.
2. User review is required before any key step is executed.
3. All content uses British English.

---

## 2. Trip Overview

| Field | Detail |
|-------|--------|
| **Departure** | Melbourne (MEL) → Brussels (BRU) — Monday, 28 September 2026 |
| **Return** | Brussels (BRU) → Melbourne (MEL) — Thursday, 8 October 2026 (leave EU) |
| **Duration** | 11 nights / 12 days (arrives BRU ~29 Sep due to ~24–26 hr travel) |
| **Countries** | Netherlands (Amsterdam + day-trips) · Belgium (Brussels, Ghent, Bruges, Antwerp + countryside) |
| **Transport** | Rental car (picked up ~Day 2–3 for NL countryside), retained into Belgium |
| **Client Profile** | Fast-paced, disciplined; loves architecture, Belgian chocolate, scenery, EU countryside |

> [!IMPORTANT]
> **Copenhagen is REMOVED.** All Danish content (Days 6–11 in the current `amsterdam-copenhagen` site) is replaced with Belgium.
> The existing Amsterdam Days 1–5 (The Netherlands section) are **retained and lightly refined**.

---

## 3. Analysis of Reference & Draft Sites

### 3a. Preferred Format: `shanghai-trip-main` (Reference)
The client's **preferred web format** is the Shanghai site, which features:
- **Fixed dark top navigation bar** with day anchor links
- **Full-height hero section** with `background-attachment: fixed` parallax effect
- **Full-page day sections** — each day occupies its own visual block (`min-height: 100vh`), alternating light/dark backgrounds
- **Timeline layout per day** — time-coded entries with a vertical red accent line, dot markers, and white activity cards with a left accent border
- **Colour-coded inline location badges** — Gold (highlight), Blue (restaurant), Yellow (shop), Red (attraction)
- **Interactive Leaflet.js map section** — filterable by day and category, with colour-coded pin markers
- **Playfair Display + Lato** font pairing (serif heading, clean sans-serif body)
- Custom AI-generated hero and day images (`.png`)

### 3b. Draft Site: `amsterdam-copenhagen` (To Be Modified)
The current draft site uses a **different layout**:
- Sidebar + scrolling content panel (JS-driven, single-page)
- Light background with Inter + Playfair Display fonts
- Card-based itinerary items with left-right alternating image/text layout
- Guide/reference cards for city essentials (restaurants, cafes, attractions)
- Local images already in `./images/` folder with Unsplash fallbacks
- No interactive map

> [!IMPORTANT]
> **The `amsterdam-copenhagen` folder is the target for modification.** The site will be restructured to match the Shanghai format — full-page sections, fixed nav, timeline layout, Leaflet map, and updated content for Belgium.

---

## 4. Proposed Web Format (Hybrid — Best of Both)

The new site will adopt the **Shanghai visual format** as the primary structure, whilst incorporating the **amsterdam-copenhagen guide-card pattern** for the Belgium Essentials reference section. Key design decisions:

| Feature | Decision |
|---------|----------|
| Navigation | Fixed dark top nav (Shanghai style) with day anchor links |
| Hero | Full-screen parallax hero (Brussels Grand Place) |
| Day layout | Full-height sections, alternating backgrounds, timeline per day |
| Colour palette | Dark navy/gold accent (Belgian flag inspired: `#1a1a2e`, `#d4a017`, `#c2002f`) |
| Fonts | Playfair Display (headings) + Lato (body) — matching Shanghai |
| Location badges | Colour-coded inline spans per Shanghai pattern |
| Guide cards | Retained from amsterdam-copenhagen for Belgium Essentials section |
| Interactive map | Leaflet.js Belgium map centred on Brussels, pins for all stops |
| Images | Mix of Unsplash URLs + AI-generated hero images (to be created) |

---

## 5. Day-by-Day Itinerary Plan

> Travel dates account for ~24–26 hr flight. Depart MEL 28 Sep, arrive BRU ~29 Sep (local time).

### Phase 1 — The Netherlands (Days 1–5)
*(Largely retained from existing `amsterdam-copenhagen` site — lightly refined)*

| Day | Date | Title | Key Activities |
|-----|------|-------|----------------|
| **1** | 29 Sep (Tue) | Arrive Amsterdam · Jordaan & Core Walk | Schiphol arrival → Jordaan hotel check-in · Damrak walk · Dam Square · Stroopwafel · Van Stapele cookies · Red Light District |
| **2** | 30 Sep (Wed) | Museums, Vondelpark & De Pijp | Van Gogh Museum / Rijksmuseum · Vondelpark · Bloemenmarkt · Albert Cuyp Market |
| **3** | 1 Oct (Thu) | Road Trip: Giethoorn & Zwolle | Rent car · Vollenhove pit stop · Giethoorn boat tour · Evening in Zwolle |
| **4** | 2 Oct (Fri) | Utrecht & Rotterdam | Utrecht wharves & Dom Tower · Rotterdam arrival · Markthal · Cube Houses · Erasmus Bridge |
| **5** | 3 Oct (Sat) | Rotterdam & Cross into Belgium | Return car in Rotterdam · Train to Brussels Midi · Belgium begins |

> [!NOTE]
> Day 5 is restructured: clients return the rental car in Rotterdam, take the Thalys/Intercity train directly to Brussels-Midi (~1 hr 45 min), then pick up a **Belgian rental car** from Brussels for the remaining days.

---

### Phase 2 — Belgium (Days 6–11)
*(All new content — Copenhagen replaced)*

#### Belgium Essentials Guide (Info Card — before Day 6)
- **Places of Interest**: Grand Place (UNESCO), Atomium, Manneken Pis, Bruges canal network, Ghent's Graslei, Antwerp Cathedral
- **Belgian Chocolate**: Pierre Marcolini, Neuhaus, Godiva (flagship Brussels), Dominique Persoone (Bruges)
- **Restaurants**: Comme Chez Soi (Brussels), Den Dyver (Bruges), Vrijmibo (Ghent)
- **Cafés & Waffles**: Maison Dandoy (Brussels), Chez Albert (Bruges)
- **Driving Tips**: Low Emission Zones in city centres, park at P+R and walk/tram, always confirm LEZ compliance with rental company

| Day | Date | Title | Key Activities |
|-----|------|-------|----------------|
| **6** | 3 Oct (Sat) | Arrive Brussels · Grand Place & Chocolate Row | Train arrival Brussels-Midi · Hotel check-in centre · Grand Place UNESCO walk · Galeries Royales Saint-Hubert · Manneken Pis · Rue au Beurre chocolate shops · Evening beer at a traditional Brussels café |
| **7** | 4 Oct (Sun) | Brussels Deep Dive: Art Nouveau & Atomium | Atomium + Mini-Europe (morning) · Ixelles Art Nouveau facades walk · Horta Museum · Sablon antique quarter · Royal Palace exterior · Evening in Flagey neighbourhood |
| **8** | 5 Oct (Mon) | Scenic Drive: Namur, Dinant & Ardennes Pit Stops | Pick up rental car · Drive to **Namur** (citadel view, 50 min) · Continue to **Dinant** (Notre-Dame + Citadel photo stop, iconic river view) · **Château de Walzin** viewpoint (scenic cliff pit stop) · **Crupet** medieval village photo stop · Return to base hotel in Namur/Dinant area overnight |
| **9** | 6 Oct (Tue) | Ghent: Medieval Powerhouse | Drive from Namur to **Ghent** (1 hr 15 min) · Park P+R · Gravensteen Castle · Graslei & Korenlei canal promenade · St Bavo's Cathedral (Ghent Altarpiece) · Patershol neighbourhood lunch · Late afternoon drive to **Bruges** (30 min) |
| **10** | 7 Oct (Wed) | Bruges: The Jewel of Flanders + Antwerp Sprint | Morning in **Bruges**: Markt & Belfry tower · Basilica of the Holy Blood · Canal boat ride · Bruges chocolate tasting (Dominique Persoone) · Early afternoon sprint to **Antwerp** (55 min drive) · Antwerp Central Station (architectural masterpiece) · Cathedral of Our Lady exterior · Meir shopping street · Possible Rubens House exterior · Overnight Antwerp |
| **11** | 8 Oct (Thu) | Return Brussels · Departure Evening | Morning buffer in Antwerp → Drive back to Brussels (45 min) · Return rental car · Last Grand Place / Sablon chocolate stop · Transfer to Brussels Airport (BRU) · Fly to Melbourne (depart EU 8 Oct) |

---

## 6. Data Preparation & Image Requirements

### 6a. Images Required (New — Belgium Section)

The following images are required for the Belgium days. Strategy: **Unsplash URLs** for standard shots; **AI-generated images** (via `generate_image` tool) for hero covers where a more curated look is needed.

| Image File | Content | Source Strategy |
|------------|---------|-----------------|
| `belgium-hero.jpg` | Brussels Grand Place night/dusk panorama | Unsplash URL |
| `brussels-grand-place.jpg` | Grand Place close-up, UNESCO square | Unsplash URL |
| `brussels-atomium.jpg` | Atomium structure | Unsplash URL |
| `brussels-art-nouveau.jpg` | Art Nouveau facade / Horta Museum | Unsplash URL |
| `namur-citadel.jpg` | Namur Citadel river view | Unsplash URL |
| `dinant.jpg` | Dinant Notre-Dame + Citadel, Meuse River reflection | Unsplash URL |
| `chateau-walzin.jpg` | Château de Walzin on cliff | Unsplash URL |
| `ghent-graslei.jpg` | Ghent Graslei canal at golden hour | Unsplash URL |
| `gravensteen-castle.jpg` | Gravensteen, Ghent | Unsplash URL |
| `bruges-markt.jpg` | Bruges Markt & Belfry | Unsplash URL |
| `bruges-canals.jpg` | Bruges canal boat view | Unsplash URL |
| `antwerp-station.jpg` | Antwerp Central Station interior | Unsplash URL |
| `antwerp-cathedral.jpg` | Cathedral of Our Lady, Antwerp | Unsplash URL |
| `belgian-chocolate.jpg` | Belgian chocolate / pralines close-up | Unsplash URL |
| `belgium-countryside.jpg` | Rolling Ardennes countryside / scenic road | Unsplash URL |

> [!NOTE]
> All existing Netherlands images in `./images/` are retained as-is. No NL images need to be recreated.

### 6b. Interactive Map Data (Belgium Locations)

A new `locations.json` (or inline JS object) for Belgium pins will be prepared covering:
- Brussels: Grand Place, Atomium, Horta Museum, Hotels zone
- Namur: Citadel viewpoint
- Dinant: Notre-Dame church, riverside viewpoint
- Ghent: Gravensteen, Graslei, St Bavo's
- Bruges: Markt, Basilica of Holy Blood, Canal boat launch
- Antwerp: Central Station, Cathedral of Our Lady, Meir

---

## 7. Project File Structure (Target)

```
amsterdam-copenhagen/
├── index.html          ← FULL REWRITE (Shanghai format, Belgium content)
├── styles.css          ← FULL REWRITE (Shanghai dark nav + Belgian palette)
├── script.js           ← RETAIN structure, REPLACE with Belgium data + Leaflet map
├── data/
│   └── locations.json  ← NEW Belgium + NL locations data
├── images/
│   ├── [existing NL images]   ← RETAINED as-is
│   ├── belgium-hero.jpg       ← NEW
│   ├── brussels-grand-place.jpg ← NEW
│   └── [all other Belgium images above] ← NEW
└── README.md           ← UPDATE with new trip details
```

---

## 8. Execution Phases

### Phase A — Content & Data Preparation *(Requires User Approval)*
1. Finalise day-by-day itinerary (this plan)
2. Confirm Belgium image list & sources
3. Prepare `locations.json` with Belgium + NL GPS coordinates

### Phase B — HTML Restructure *(Requires User Approval)*
1. Rewrite `index.html` adopting Shanghai format (fixed nav, full-height day sections, timeline layout)
2. Update title, meta, hero section to Belgium theme
3. Remove all Copenhagen/Danish content
4. Add Belgium days 6–11 with timeline entries

### Phase C — CSS Redesign *(Requires User Approval)*
1. Rewrite `styles.css` with Belgian colour palette (navy/gold/crimson)
2. Implement fixed nav bar, parallax hero, full-height sections
3. Retain guide-card styles for Belgium Essentials section

### Phase D — JavaScript & Map *(Requires User Approval)*
1. Update `script.js` with Belgium itinerary data
2. Integrate Leaflet.js interactive map (OpenStreetMap) centred on Belgium
3. Add filter buttons (by day, by type) matching Shanghai pattern

### Phase E — Images & Final QA *(Requires User Approval)*
1. Add Belgium image URLs / AI-generated images to `images/` folder
2. Link all images in `script.js` / `index.html`
3. Test site locally (open in browser, verify all days render correctly)
4. Verify responsive layout on mobile

---

## 9. Open Questions for User Review

> [!IMPORTANT]
> **Q1 — Day 5 Transition:** The plan routes clients from Rotterdam by **train to Brussels** (no car needed yet), picking up a Belgian rental car in Brussels. Does the client prefer to drive from Rotterdam → Brussels directly by car instead?

> [!IMPORTANT]
> **Q2 — Overnight Locations:** For Days 8–9 (Ardennes scenic drive + Ghent), the plan suggests staying **overnight in Dinant/Namur** then driving to Ghent. Would the client prefer a simpler base (e.g., stay in Brussels and do day trips)?

> [!IMPORTANT]
> **Q3 — Day 10 Antwerp Depth:** Antwerp is currently planned as a half-day sprint after Bruges. Would the client prefer a **full day in Antwerp** (cutting Bruges to morning only) given their interest in architecture?

> [!NOTE]
> **Q4 — Web Format:** The plan proposes a **full rewrite** of `index.html` and `styles.css` to match the Shanghai format. This is more premium but is a bigger change. Should we instead do a lighter update keeping the current sidebar format but adding Belgium content? (Recommendation: full Shanghai format — it is significantly more premium.)

---

## 10. Verification Plan

| Check | Method |
|-------|--------|
| Site renders correctly | Open `index.html` in browser, verify all 11 days display |
| Belgium content accuracy | Manual review of each day's timeline by user |
| Image loading | Check all `<img>` tags load without 404 errors |
| Interactive map | Verify Leaflet map loads, all pins show, filters work |
| Responsive layout | Resize browser to mobile width, check layout collapses correctly |
| British English | Spell-check pass on all visible text |

---

*Plan prepared by Architect (Claude Sonnet 4.6 Thinking) · 19 April 2026*
*Awaiting user review and approval before any code execution begins.*
