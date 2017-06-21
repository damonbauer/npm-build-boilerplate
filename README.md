# web-app

A collection of packages that build a website using `npm scripts`.

Forked from Damon Bauer's [npm-build-boilerplate](https://github.com/damonbauer/npm-build-boilerplate).

## Administrative authentication
### `No sudo prefix required`
  `sudo chown -R $(whoami) ~/.npm`

  Works for Linux/Unix.

## Favicon
### `This task has two steps: Generate and Update HTML.`
  `npm run favicon-generate | npm run favicon-html`

  Generate takes a lot of time and runs once in entire cycle. Update HTML will update all production files when any change has occured.
