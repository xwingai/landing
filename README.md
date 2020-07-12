# X-Wing AI landing page

A single page landing page built with [tailwindcss](https://tailwindcss.com) for an iOS app, [X-Wing AI](https://apps.apple.com/app/apple-store/id1170239055?pt=672052&ct=xwing.app&mt=8). The site is hosted at https://xwing.app.

tailwind requires a CSS processor to generate all of the utility classes being used. To keep things as simple as possible I'm directly calling [postcss-cli](https://github.com/postcss/postcss-cli).

## Installation instructions

1. Install `yarn`
1. `yarn install`
1. `yarn run watch`

Open `dist/index.html` in your browser. You can now edit `src/index.html` and `css/base.css` which will be automatically watched then processed.

## Production

Run `yarn run build` to process, purge, and minimize the CSS for production. You can then copy the contents of `dist/` wherever you want to deploy the site.

## Template

This project was indirectly forked from tailwindtoolbox's [Landing Page](https://github.com/tailwindtoolbox/Landing-Page) template which is released under the MIT license.
