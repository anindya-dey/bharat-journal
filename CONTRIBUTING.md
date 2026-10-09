# Contributing

Thanks for wanting to improve Bharat Journal. Two kinds of contributions are
welcome: **corrections** and **rectifications**.

## Reporting a correction

If a figure, date, name, link, or piece of framing is wrong, please open an
**issue** with:

- the page or file it appears on (a URL or path),
- what is wrong,
- the correct information, and
- a source we can check.

Corrections are applied visibly — noted on the page, not silently overwritten.
Accuracy is the whole point of this journal, so a well-sourced correction is the
most valuable thing you can send.

## Submitting a rectification (pull request)

Pull requests that fix or improve things are welcome. Good candidates:

- fixing a typo, broken link, or spacing/formatting issue,
- correcting a factual error (with a source),
- improving a chart's data or its source citation,
- accessibility or performance fixes.

Please keep a PR focused on one change, and explain **why** in the description.

### Working on the project

```bash
pnpm install
pnpm dev      # local dev server
pnpm lint     # astro check + tsc
pnpm build    # production build + Pagefind index
```

Before opening a PR, make sure `pnpm lint` and `pnpm build` both pass.

## Content conventions

- **Every chart must cite at least one source** with a URL and a "data as of"
  date. The build fails without it.
- Prefer **plain, factual language**. State the fact; link the source.
- Datasets live in `src/data/datasets/` as JSON and are transformed on the page.
- Proposals under `src/content/next/` state where the idea was seen, what's
  missing, what India already has, and the ask.

## Licensing

By contributing, you agree that your code contributions are licensed under the
MIT License ([LICENSE](./LICENSE)) and your content contributions under CC BY
4.0 ([LICENSE-CONTENT.md](./LICENSE-CONTENT.md)).
