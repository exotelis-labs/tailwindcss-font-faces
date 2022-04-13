/* eslint-env node */
const plugin = require('tailwindcss/plugin');

const fontFaces = plugin(
  function ({ addBase, theme }) {
    addBase([
      {
        '@font-face': {
          fontFamily: 'OverpassMono',
          src: theme('fontSrc.OverpassMono'),
          fontWeight: '100 900',
          fontStretch: '25% 151%',
        },
      },
      {
        '@font-face': {
          fontFamily: '"Playfair Display"',
          src: theme('fontSrc.PlayfairDisplay'),
          fontWeight: '100 900',
          fontStretch: '25% 151%',
        },
      },
      {
        '@font-face': {
          fontFamily: 'Raleway',
          src: theme('fontSrc.Raleway'),
          fontWeight: '100 900',
          fontStretch: '25% 151%',
        },
      },
      {
        '@font-face': {
          fontFamily: '"Work Sans"',
          src: theme('fontSrc.WorkSans'),
          fontWeight: '100 900',
          fontStretch: '25% 151%',
        },
      },
    ]);
  },
  {
    theme: {
      fontSrc: {
        OverpassMono: 'url("@exotelis-labs/tailwindcss-font-faces/fonts/OverpassMono-VariableFont.woff2") format("woff2")',
        PlayfairDisplay: 'url("@exotelis-labs/tailwindcss-font-faces/fonts/PlayfairDisplay-VariableFont.woff2") format("woff2")',
        Raleway: 'url("@exotelis-labs/tailwindcss-font-faces/fonts/Raleway-VariableFont.woff2") format("woff2")',
        WorkSans: 'url("@exotelis-labs/tailwindcss-font-faces/fonts/WorkSans-VariableFont.woff2") format("woff2")',
      },
    },
  }
);

module.exports = fontFaces;
