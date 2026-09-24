# Atomo Design System

A design system for **administrative software**: ERPs, dashboards, CRMs, internal portals and corporate back-office tools. Nothing here targets marketing sites or landing pages, and it should not grow in that direction.

Atomo is built **on top of Ant Design (v5.24.6+)**. Every component that has behaviour keeps Ant Design's behaviour — the customisation is visual. Atomo is not an Ant Design clone: it has its own colour identity, its own two-size rule and its own KPI and choice-card components. Where a decision is contested, **system consistency wins over the individual component**.

## Sources

This system was authored from a **written brief only** (Spanish, provided in-chat by the Atomo team, July 2026). There was:

- **no Figma file** attached or linked,
- **no codebase** or repository attached,
- **no logo or brand asset** supplied,
- **no font binaries** supplied.

Everything visual therefore derives from two places: the brief itself, and the **official Ant Design colour palette** (https://ant.design/docs/spec/colors), which the brief mandates as the only colour source. Reference docs used: https://ant.design/components/overview and https://ant.design/docs/spec/introduce.

If a Figma library, a repository or brand assets exist, attach them — several decisions below are marked as assumptions that should be replaced with real values.

## How it uses real Ant Design

Each Atomo component is a **thin wrapper** (10–40 lines) around the real `antd` one. The wrapper does three things and nothing else:

1. **Applies the theme.** Every wrapper renders inside `ConfigProvider` with `ATOMO_THEME`, so it looks like Atomo with or without a host provider. Nesting is harmless — the theme object identity is stable.
2. **Locks the defaults.** `size="large"` does not exist: the two sizes map to antd `middle` (32px) and `small` (28px), and `controlHeightLG` is pinned to 32 so a stray `large` cannot introduce a third height. Radii, padding and shadows come from the theme, never from call sites.
3. **Adds the Atomo layer** where antd has no opinion — Button `variant`/`tone`, Tag’s five variants and status dot, Table’s toolbar and bulk-action bar, the es-MX pagination summary, `EmptyState`’s presets.

| Atomo | Real antd underneath |
|---|---|
| `Button` | `Button` (`variant` + `color`, 5.21+) |
| `Input`, `SearchInput` | `Input`, `Input.Password`, `Input.Search` |
| `Select` | `Select` (`mode="multiple"`, `showSearch`, `loading`) |
| `DatePicker` | `DatePicker` / `DatePicker.RangePicker` (+ dayjs) |
| `Checkbox`, `Radio`, `RadioGroup` | `Checkbox`, `Radio`, `Radio.Group` |
| `FormField` | `Form.Item` (inside a `component={false}` Form) |
| `Table`, `Pagination` | `Table`, `Pagination` |
| `Card`, `Tag`, `EmptyState` | `Card`, `Tag`, `Empty` |
| `Tabs` | `Tabs`, or `Segmented` for `variant="segmented"` |
| `Sidebar` | `Menu` (`mode="inline"`) inside Atomo's nav chrome |
| `Collapse`, `Modal`, `Dropdown`, `Tooltip` | same-named antd components |
| `KpiCard`, `RadioCard`, `Loader`, `Icon` | **no antd equivalent** — Atomo-original |

### Loading it

In an HTML page, in this order:

```html
<link rel="stylesheet" href="https://unpkg.com/antd@5.24.6/dist/reset.css">
<link rel="stylesheet" href="styles.css">
<script src="…react.development.js"></script>
<script src="…react-dom.development.js"></script>
<script src="https://unpkg.com/dayjs@1.11.13/dayjs.min.js"></script>
<script src="https://unpkg.com/antd@5.24.6/dist/antd.min.js"></script>
<script src="_ds_bundle.js"></script>
```

antd v5 injects its own styles at runtime — no component CSS file to import. If `window.antd` is missing, wrappers render a visible dashed “Ant Design no está cargado” chip instead of crashing.

### In production code

`pnpm add antd@5.24.6`, then pass **`atomo.theme.js`** (root) to antd’s own `ConfigProvider` — it is the same theme object the wrappers use:

```jsx
import { ConfigProvider } from 'antd';
import esES from 'antd/locale/es_ES';
import { ATOMO_THEME } from './atomo.theme';

<ConfigProvider theme={ATOMO_THEME} locale={esES}>{app}</ConfigProvider>
```

With that in place you can use plain `antd` imports and get Atomo’s appearance; the wrappers are for the extra layer (variants, toolbars, presets) and for keeping the two-size rule enforceable.

### Known gaps

- **`tokens/` and `atomo.theme.js` are two files that must move together.** The CSS custom properties remain the human-readable reference and are what `KpiCard`, `RadioCard`, `Loader` and all layout in the patterns consume; the JS theme is what antd renders from. Changing a colour means changing both.
- **Locale.** The UMD build here does not register `es_ES`; antd’s internal strings (calendar month names, "No data", filter menu) show in English inside this project. In production pass `locale={esES}` — one line, fixed.
- **`Checkbox`/`Radio` have no antd size prop**, so `size="compact"` is accepted but visually inert.
- **Table filters** are wired to real antd filtering over the visible `dataSource` (unique values per column). Server-side filtering is the call site’s job.

## Core rules (non-negotiable)

1. **Two sizes only.** Every interactive control is **32px (default)** or **28px (compact)** — antd `middle` and `small`. There is no small, large or XL. Tags are 22px — they are not interactive controls.
2. **Eight text styles only:** Page Title, Section Title, Body, Label, Button, Table Header, Table Cell, Caption. Adding a ninth requires a documented need.
3. **Colour comes from the Ant Design palette** — all 13 official ramps are present (blue, geekblue, red, green, gold, yellow, cyan, purple, magenta, volcano, orange, lime, grey), plus **Slate**, the one non-Ant ramp, for dark chrome. Every ramp is numbered 1–10 (grey 1–13) — Slate included, so Slate-50 is `--slate-1` and Slate-900 is `--slate-10`. No invented hex values, no arbitrary tints.
4. **Spacing is a multiple of 4.** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64.
5. **Radius by role:** 4px for things you click (Button, Tag), 6px for things you type in (Input, Select, DatePicker), 8px for things you read inside (Card, Modal, popovers), 2px for Checkbox.
6. **Tables have two densities:** medium (52px rows) and small (40px). Never large. Those heights come from a 22px line box plus **15px / 9px** vertical cell padding — the one deliberate exception to the ×4 spacing rule, because the row height it produces is the number that matters.
7. **Don't reinvent Ant Design.** If Ant Design solves it, keep its logic and restyle only.

## Visual foundations

**Identity.** Atomo's personality is "Ant Design at a lower temperature": the same information density and interaction grammar, but a cooler primary, quieter shadows and a darker, more confident navigation surface.

- **Primary — Daybreak Blue `#1677ff` (`blue-6`).** Ant Design's own primary, unchanged: 5 hover, 7 active, 1 background, 3 border. Geekblue stays in the palette as an accent ramp. Info is the same blue, by design — Ant does the same. It reads more corporate and less "framework default". Hover `geekblue-5`, active `geekblue-7`, tint `geekblue-1`, border `geekblue-3`.
- **Navigation surface — `slate-10` `#0f172a`.** A cool near-black sidebar instead of Ant's `#001529`; this is what the Slate ramp exists for. Nav text is `rgba(255,255,255,.72)`, selected items fill with `--surface-nav-selected` `slate-9` `#1e293b` — one step up the Slate ramp, never a bright primary fill. `Sidebar` is the only component that renders on it: 224px expanded, 56px collapsed, 40px items, one level of nesting.
- **Semantics** are Ant Design's, unchanged: success `#52c41a`, warning `#faad14`, error `#f5222d`, info `#1677ff`. Each has a 1 / 3 / 6 / 7 set for background, border, base and text.
- **Accents** (geekblue, cyan, purple, magenta, volcano, orange, lime, yellow) exist for Tag categories and charts only — never for chrome. **Slate** is the exception: it is chrome-only (nav, dark surfaces), never a Tag colour.
- **Text is opacity, not grey:** `.88` headings and cell content, `.65` labels and table headers, `.45` help text, `.25` placeholders.
- **Surfaces:** app background `#f0f2f5`, cards white, table headers and footers `#fafafa`, row hover `#f5f5f5`, selected row `blue-1`.
- **Type.** Inter throughout — 400 body, 500 labels and buttons, 600 titles and table headers. Page titles carry −0.2px tracking; table headers +0.2px. Numerals are **tabular** everywhere a number can stack in a column (right-aligned table columns, KPI values, pagination, dates).
- **Backgrounds are flat.** No gradients, no photography, no illustration, no texture, no pattern. The only gradient in the whole system is the decorative bar on the motion specimen card. Density is the aesthetic; ornament competes with data.
- **Borders do the structural work.** `#f0f0f0` (`--border-split`) for dividers, card edges and table rules; `#d9d9d9` (`--border-base`) for control outlines; `#bfbfbf` only when a control must assert itself. Vertical table dividers are **off** by default — Atomo tables use horizontal rules only.
- **Shadows are nearly invisible.** Four levels: `--shadow-card` (a 2–6px haze under cards), `--shadow-raised` (hover/drag), `--shadow-popover` (Select, Dropdown, calendar), `--shadow-modal`. There are no inner shadows and no coloured shadows anywhere.
- **Cards** = white, 8px radius, 1px `--border-split`, `--shadow-card`, 20px body padding, optional 52px-min header with a bottom rule and a footer on `--surface-sunken`. The **only** card with a coloured edge is `KpiCard`, which carries a 3px left rail in its tone — that treatment is reserved and must not spread to other cards.
- **Focus** is a 2px halo in the control's own tone (`rgba(22,119,255,.16)`, error/warning variants included) plus a coloured border. Never an outline offset ring, never a glow.
- **Hover** darkens fills one step and shifts neutral outlines to primary; rows tint to `--surface-hover`. **Press** goes one step darker still (`blue-7`) — Atomo never scales, lifts or bounces a control on press.
- **Motion** is fast and flat: 80ms hover, 120ms chevrons and tooltips, 200ms popovers/modals/collapse, 300ms drawers. `cubic-bezier(.215,.61,.355,1)` for entrances. Popovers fade+zoom from 97%; collapse content fades. **No bounce, no spring, no parallax, no skeleton shimmer other than the loading bar.**
- **Transparency and blur:** only two uses — the modal mask `rgba(0,0,0,.45)` and nav hover `rgba(255,255,255,.08)`. No frosted glass, no backdrop blur.
- **Layout is fixed-chrome:** sidebar and topbar are fixed; only the content column scrolls. Table headers stick. Page padding is 24px. Detail views are `1fr + 320px`; forms are `1fr + 300px`; KPI rows are 3–5 equal columns.

## Content fundamentals

The product speaks **Mexican Spanish (es-MX)**, in the register of a competent colleague — precise, unhurried, never chatty.

- **Voice:** impersonal or second-person formal-neutral (`tú` in help text, never `usted`, never first person). Labels are nouns: "Razón social", "Centro de costos", "Fecha requerida". Buttons are verbs in infinitive: "Guardar", "Exportar", "Enviar a autorización".
- **Casing:** sentence case everywhere — labels, buttons, table headers, menu items, modal titles. The only uppercase is the small caption over sidebar nav groups ("CATÁLOGOS"). Never Title Case, never ALL CAPS in buttons.
- **Punctuation:** no exclamation marks. No trailing periods on labels, table cells, buttons or tooltips; full sentences in help text and modal descriptions do take a period. Ellipsis only for in-progress states ("Cargando solicitudes…") and search placeholders.
- **Numbers and dates:** `es-MX` formatting — `$182,400.00`, `1,248 registros`, `12/07/2026`, `dd/mm/aaaa` placeholders, 24-hour time. Currency always carries the MXN unit when ambiguity is possible.
- **Empty and error copy states the fact, then the way out:** "Ningún registro coincide" / "Limpia los filtros para ver todo." Never an apology, never "¡Ups!", never blame.
- **Destructive confirmations name the object and the count in the title and the consequence in the body:** "¿Eliminar 3 solicitudes?" / "Las solicitudes eliminadas no se pueden recuperar y la acción queda registrada en la bitácora."
- **Counts before nouns, always** ("37 pendientes de autorización", "1–20 de 1,248 registros"). Admin users navigate by number.
- **No emoji. Anywhere.** Status is a Tag with a dot; severity is an icon plus colour.

## Iconography

- **Set:** **Lucide** (`lucide-static@0.469.0`), delivered from jsDelivr and rendered through the `Icon` component as a **CSS mask**, so every glyph inherits `currentColor` and can be tinted by any token.
- **⚠️ Substitution to confirm.** The brief specifies Ant Design, whose native set is **@ant-design/icons** (filled/outlined/twotone). Those SVG binaries were not reachable from this environment, so Lucide — the closest available match in weight and geometry (1.5–2px stroke, 24px grid, squared-off terminals) — stands in. Ant Design's icons are slightly heavier and more filled. **If Atomo ships on Ant Design in code, swap the `BASE` constant in `components/foundations/Icon.jsx` for `@ant-design/icons` and keep the same size rules.**
- **Sizes:** 16px inside 32px controls, 14px inside 28px controls, 12px inline in table cells and Tags, 18px in nav and empty-state tiles. Never larger than 22px.
- **Colour:** `currentColor` by default; `--text-tertiary` for decorative affixes, semantic tokens for status glyphs. Never multi-colour, never a filled illustration.
- **No emoji and no unicode symbols as icons.** The two exceptions are typographic, not iconographic: the required-field asterisk `*` and the pagination ellipsis `···`.
- **No custom SVG illustrations exist** in this system, and none should be drawn. Empty states use a 48px circle with a single icon.

## Brand assets

`assets/` is **empty by design**: no logo, wordmark, icon or imagery was supplied. Wherever a mark belongs, the name **Atomo** is set in Inter SemiBold with −2% tracking (see `guidelines/brand-wordmark.html`; the sidebar uses a 24px `geekblue-6` tile with the letter A as a temporary placeholder). **Do not draw, trace or approximate a logo.** Send the real files and they will be wired in.

## Typography files

Inter is loaded from Google Fonts in `tokens/fonts.css` — **no font binaries are vendored**. If Atomo has licensed Inter (or a variant such as Inter Display) for self-hosting, drop the `.woff2` files into `assets/fonts/` and replace the `@import` with local `@font-face` rules.

## Components

25 exports across 7 groups. All are thin wrappers over real Ant Design components except `KpiCard`, `RadioCard`/`RadioCardGroup` and `EmptyState`'s presets, which are Atomo-original, and `Loader`, which is a reserved slot.

| Group | Components |
|---|---|
| `components/foundations/` | **Icon**, **AtomoProvider** (+ `ATOMO_THEME`) |
| `components/actions/` | **Button** |
| `components/forms/` | **Input**, **SearchInput**, **Select**, **DatePicker**, **Checkbox**, **Radio**, **RadioGroup**, **RadioCard**, **RadioCardGroup**, **FormField** |
| `components/data-display/` | **Card**, **Table**, **Pagination**, **EmptyState**, **KpiCard**, **Tag** |
| `components/navigation/` | **Sidebar**, **Tabs**, **Collapse** |
| `components/feedback/` | **Modal**, **Loader** |
| `components/overlays/` | **Dropdown**, **Tooltip** |

Every component directory holds `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (when to use it, plus a usage example), and one `*.card.html` specimen.

### Intentional additions
The brief lists Button, Input, Select, DatePicker, Table, Badge (Tag), Tabs, Collapse, Modal, Checkbox, Radio, Dashboard Indicators and Loader. These were added because the listed components cannot be assembled into real screens without them:

- **Icon** — the brief's components all take icons; a single wrapper keeps the glyph set swappable in one place.
- **SearchInput** — the brief mandates a search field in the table toolbar and lists Search as an Input variant.
- **FormField** — the brief requires documented label/error/help states; this is where they live.
- **Card** — every panel, including the required Table view, needs a surface.
- **Pagination** and **EmptyState** — both are explicitly required Table states; they are separated so they can be reused by lists and card grids.
- **RadioGroup / RadioCardGroup** — the state owners for the two radio patterns the brief asks for.
- **Dropdown** and **Tooltip** — named in the brief's "keep Ant Design's behaviour" list, and unavoidable for table row actions and icon-only buttons.

### Reserved
**Loader** is a placeholder, per the brief: the space is held, the design is deferred. It currently renders a neutral ring, a text skeleton and a 2px bar. Do not build a competing spinner elsewhere — extend that file when the real design lands.

## Patterns

Patterns are **compositions**, not components: the canonical way Atomo assembles primitives for a recurring job. They live in `patterns/` as specimen cards (group "Patterns") and are deliberately domain-neutral — generic records, no product, no module, no industry. Copy the composition and swap the content.

| Card | What it fixes |
|---|---|
| `patterns/crud-view.html` | The CRUD view: page header with count, view tabs, table toolbar (search + filters + column settings), bulk-action bar, row overflow menu, pagination. |
| `patterns/form-layout.html` | Forms: two-column `FormField` grid, required/help/error/warning states, checkbox row, `RadioCardGroup` for a single decision, advanced section in a `Collapse`, right-aligned action bar (Cancelar · Guardar borrador · Guardar cambios). |
| `patterns/table-densities.html` | Tables: medium vs small, striped + bordered exception, loading skeleton, in-table empty state. |
| `patterns/search-filters.html` | Search and filters: the three search treatments, saved views as segmented tabs, the filter bar order (general → specific), active filters as closable Tags with the result count. |
| `patterns/empty-states.html` | The five `EmptyState` variants plus a custom one, each with the single action that resolves it. |
| `patterns/page-header.html` | Page header and detail view: breadcrumb, title + status Tag, meta row, action cluster, tabs, `1fr + 320px` body. |

Rules that hold across all of them: 24px page padding, 20px between cards, 16px between fields, compact controls inside toolbars and filter bars, default controls in forms, the primary action last on the right, destructive actions only inside an overflow menu or a bulk bar.

## Index

| Path | What it is |
|---|---|
| `styles.css` | The single entry point consumers link. `@import` lines only. |
| `atomo.theme.js` | The Ant Design `ConfigProvider` theme, copyable into production code. |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `radius`, `shadows`, `motion`, `controls`, `base` — 295 custom properties. |
| `components/` | The 24 components, grouped by concern (see the table above). |
| `guidelines/` | 19 specimen cards: colour ramps, semantic and surface sets, text hierarchy, chart sequence, the eight type styles, numerals, spacing scale and rhythm, radius, elevation, control sizes, motion, wordmark, icon set. |
| `patterns/` | 6 composition cards: CRUD view, form layout, table densities, search & filters, empty states, page header & detail. |
| `thumbnail.html` | Project tile. |
| `SKILL.md` | Agent-Skills entry point for using this system outside this project. |

## Templates

**None ship yet, by decision.** Atomo is a design system, not a product: no fake module, no invented domain, no screens of a specific application. The brief's four templates (Dashboard, Catalog, Detail View, Form) are covered structurally by the **Patterns** cards above — `crud-view` is the catalogue, `form-layout` the form, `page-header` the detail view. If you later want copyable `templates/` entries, they should stay domain-neutral in exactly the same way.

## Open questions for the Atomo team

1. The **corporate colour** — primary is now Ant Daybreak Blue `#1677ff`. If a brand colour arrives, it replaces `--color-primary` and its 5/7/1/3 steps; nothing else in the system needs to change.
2. **Logo / wordmark** files.
3. **Loader** design.
4. Are Ant Design's own **@ant-design/icons** the required set (see Iconography)?
5. Should Atomo ship a **dark theme**? The token structure supports one (all semantics are aliased) but none is defined.
6. Table **column-settings popup**, **saved views** and **inline row editing** are hinted at in the brief's "espacio para acciones adicionales" but not specified.
