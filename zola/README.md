# Full Spectrum Wiki — Zola

A standalone, theme-free version of the wiki. Requires only [Zola](https://www.getzola.org/documentation/getting-started/installation/) (verified with 0.22.1): no Ruby, Node packages, remote theme, or asset pipeline.

From this directory:

```sh
zola serve
```

Open the address printed by Zola. Changes to content, templates and styles reload automatically.

```sh
zola build
zola check --skip-external-links
```

The finished site is written to `public/`. To host elsewhere, change `base_url` in `config.toml`, or run `zola build --base-url https://example.com/wiki/`. Internal links, images, navigation and search respect that prefix. The existing repository deployment still builds Jekyll; deploying this version requires changing that build to run Zola from this folder and publish its `public/` directory.

## Editing

All pages live in `content/`. Each begins with a small TOML header:

```toml
+++
title = "My article"
[extra]
group = "The setting"
+++
```

Navigation is generated from page titles and groups: `The setting`, `Factions`, `Locations`, `People & powers`, and `About`. Use one of these groups to include a new article. The homepage is `content/_index.md`.

Link to an article using `[The Tech](@/the-tech.md)` or a heading using `[The Schism](@/history.md#the-schism)`. Zola checks these references during the build.

Images live in `static/images/`. Embed one with the built-in project shortcode:

```text
{{ image(path="images/zeno_walking.jpg", alt="A Tech walker") }}
```

The four original unpublished documents have `draft = true`; preview them with `zola serve --drafts`. Remove that field and choose a navigation group when ready to publish. Existing unfinished articles retain their original TODOs.

The original prose and images were copied, with headings moved into titles and links/images converted to Zola syntax. Missing articles are displayed as plain text, listed in `MIGRATION.txt`; no new lore was invented. The contribution post retains its original date and an alias for its previous URL. This is an independent copy: subsequent edits to the original wiki do not automatically sync here.

## Design

Three main templates, one image shortcode, one stylesheet and a small optional search script. The site uses system fonts, locally stored images, a reading-focused responsive layout, grouped navigation and a table of contents. Search uses Zola's generated index and a dependency-free substring search. Navigation and articles work without JavaScript.

Full Spectrum Dominance IP remains the property of The Lazy Forger.
