# Full Spectrum Wiki — Zola

The Full Spectrum wiki, built with Zola. Requires only [Zola](https://www.getzola.org/documentation/getting-started/installation/) (verified with 0.22.1): no Ruby, Node packages, remote theme, or asset pipeline.

From this directory:

```sh
zola serve
```

Open the address printed by Zola. Changes to content, templates and styles reload automatically.

```sh
zola build
zola check --skip-external-links
```

The finished site is written to `public/`. To host elsewhere, change `base_url` in `config.toml`, or run `zola build --base-url https://example.com/wiki/`. Internal links, images, navigation and search respect that prefix. The GitHub Actions workflow in `.github/workflows/pages.yml` checks and builds pull requests, then publishes `public/` to GitHub Pages on pushes to `master`. It uses Zola 0.22.1, matching the locally verified version. A local commit alone does not deploy: push it to GitHub.

In [repository Settings → Pages](https://github.com/thelazyone/fsd_wiki/settings/pages), select **GitHub Actions** as the publishing source. The workflow can also be run manually on `master`. No personal access token is needed; deployment uses the built-in GitHub token. The published URL is https://thelazyone.github.io/fsd_wiki/.

## Editing

All pages live in `content/`. Each begins with a small TOML header:

```toml
+++
title = "My article"
[extra]
group = "The setting"
+++
```

Navigation is generated from page titles and groups: `The setting`, `Factions`, `Locations`, `People & powers`, `Overdrive`, and `About`. Use one of these groups to include a new article. The homepage is `content/_index.md`.

Link to an article using `[The Tech](@/the-tech.md)` or a heading using `[The Schism](@/history.md#the-schism)`. Zola checks these references during the build.

Images live in `static/images/`. Embed one with the built-in project shortcode:

```text
{{ image(path="images/zeno_walking.jpg", alt="A Tech walker") }}
```

The four original unpublished documents have `draft = true`; preview them with `zola serve --drafts`. Remove that field and choose a navigation group when ready to publish. Existing unfinished articles retain their original TODOs.

The original prose, images, and unpublished drafts are preserved in this Zola site. The contribution post retains its date and an alias for its previous URL. GitWiki/Jekyll and its deployment files have been removed.

## Design

Three main templates, one image shortcode, one stylesheet and a small optional search script. The site uses Kumbh Sans for headings and Titillium Web for body text (loaded from Google Fonts with sans-serif fallbacks), locally stored images, a reading-focused responsive layout, grouped navigation and a table of contents. Search uses Zola's generated index and a dependency-free substring search. Navigation and articles work without JavaScript.

Full Spectrum Dominance IP remains the property of The Lazy Forger.

The palette uses white, charcoal, and the orange `#F49739` sampled from the supplied Lazy Forger logo.

## Cross-links and unwritten articles

Use `related = ["other-article.md"]` under `[extra]` for related-article navigation. These paths are resolved during the build. Inline article links still use Zola's `@/` syntax.

Record unwritten topics in `static/missing-articles.txt`, one line per item. This editorial list is available directly at `/missing-articles.txt`, outside wiki navigation and search. Create a normal Markdown file for each unwritten topic with a title and navigation group, and link to it using `@/topic.md`. Leave its body empty: the page template displays “This article is still to be written.” Add prose below the closing `+++` when ready; the notice disappears automatically. Related articles can point readers to existing passages while the dedicated page is empty. Remove completed topics from the plain-text list. This static site does not create or edit pages in the browser.

The added Themis chapters retain the author's prose and unresolved wording; only paragraph layout, article boundaries, and cross-links were added. The Trace Gap is under the shared setting; the opportunity, Cornucopia, exclusion zone and stakeholder overview are also accessible under Overdrive. The Union shipyard title is explicitly provisional.

Set `parent = "luyten.md"` under `[extra]` to nest an article beneath another. Child articles appear as linked headings on their parent page, with a link back to the parent, instead of a separate sidebar entry. Existing URLs and Markdown links stay valid.
