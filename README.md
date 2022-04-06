# @exotelis-labs/tailwindcss-font-faces

A plugin that provides base styles for font faces used by exotelis-labs.

## Installation

Install the plugin from npm:

```sh
npm install -D @exotelis-labs/tailwindcss-font-faces
```

Then add the plugin to your `tailwind.config.js` file, and adapt the paths to the fonts if needed.

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
    extend: {
      fontPaths: {
        Raleway: './assets/fonts/Raleway-VariableFont.ttf',
      },
    },
  },
  plugins: [
    require('@exotelis-labs/tailwindcss-font-faces'),
    // ...
  ],
}
```

## Used fonts

[OverpassMono](https://fonts.google.com/specimen/Overpass+Mono)
[Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
[Raleway](https://fonts.google.com/specimen/Raleway)
[Work Sans](https://fonts.google.com/specimen/Work+Sans)
