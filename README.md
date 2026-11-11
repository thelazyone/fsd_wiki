# Full Spectrum Wiki

Lore, worlds, and factions of the Full Spectrum universe.

[Read the wiki](https://thelazyone.github.io/fsd_wiki/)

## Local preview

[Install Zola](https://www.getzola.org/documentation/getting-started/installation/), then run from the repository root:

```sh
zola serve
```

Open the address printed in the terminal. Changes reload automatically. To include drafts, use `zola serve --drafts`.

## Writing articles

Articles are Markdown files in `content/`. The homepage is `content/_index.md`.

Start an article with:

```toml
+++
title = "My article"
[extra]
group = "The setting"
+++
```

Write the article below the closing `+++`.

Sidebar groups are `The setting`, `Factions`, `Locations`, `People & powers`, `Overdrive`, and `About`.

Optional fields under `[extra]`:

- `parent = "luyten.md"` places the article under its parent, with a linked heading on the parent page.
- `related = ["history.md"]` adds related articles at the bottom of the page.
- `hide_from_navigation = true` hides the sidebar entry.
- `nav_order = 0` sets the order within Factions; use a number for every faction.

Set `draft = true` above `[extra]` to keep an article unpublished.

### Links and images

Link to articles and headings using their content paths:

```markdown
[The Tech](@/the-tech.md)
[The Schism](@/history.md#the-schism)
```

Store images in `static/images/` and embed them with:

```text
{{ image(path="images/zeno_walking.jpg", alt="A Tech walker") }}
```

### Unwritten articles

Create a file with a title and group, leaving the body empty. It will display “This article is still to be written.” The notice disappears when content is added.

Keep the writing backlog in `static/missing-articles.txt`, one item per line. Remove entries as articles are completed.

## Publishing

Push to `master` to build and deploy through [GitHub Actions](https://github.com/thelazyone/fsd_wiki/actions). Pull requests run the build and internal-link checks. The workflow uses Zola 0.22.1.

In [Settings → Pages](https://github.com/thelazyone/fsd_wiki/settings/pages), the publishing source should be **GitHub Actions**.

To check and build locally:

```sh
zola check --skip-external-links
zola build
```

The generated site is in `public/`. The site address is configured with `base_url` in `config.toml`.

## Appearance

Templates are in `templates/`; styling is in `static/style.css`. Headings use Kumbh Sans, body text uses Titillium Web, and the accent orange is `#F49739`.

Full Spectrum Dominance IP belongs to The Lazy Forger.
