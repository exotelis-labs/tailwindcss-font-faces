/* eslint-env node */
const plugin = require('tailwindcss/plugin');

const fontFaces = plugin(
  function ({ addBase, theme }) {
    addBase([
      {
        '@font-face': {
          fontFamily: 'OverpassMono',
          src: theme('fontSrc.OverpassMono'),
          fontWeight: '1 999',
          fontStretch: '25% 151%',
        },
      },
      {
        '@font-face': {
          fontFamily: '"Playfair Display"',
          src: theme('fontSrc.PlayfairDisplay'),
          fontWeight: '1 999',
          fontStretch: '25% 151%',
        },
      },
      {
        '@font-face': {
          fontFamily: 'Raleway',
          src: theme('fontSrc.Raleway'),
          fontWeight: '1 999',
          fontStretch: '25% 151%',
        },
      },
      {
        '@font-face': {
          fontFamily: '"Work Sans"',
          src: theme('fontSrc.WorkSans'),
          fontWeight: '1 999',
          fontStretch: '25% 151%',
        },
      },
    ]);
  },
  {
    theme: {
      fontSrc: {
        OverpassMono: 'url("@exotelis-labs/tailwindcss-font-faces/fonts/OverpassMono-VariableFont.woff2") format("woff2 supports variations"), url("@exotelis-labs/tailwindcss-font-faces/fonts/OverpassMono-VariableFont.woff2") format("woff2-variations")',
        PlayfairDisplay: 'url("@exotelis-labs/tailwindcss-font-faces/fonts/PlayfairDisplay-VariableFont.woff2") format("woff2 supports variations"), url("@exotelis-labs/tailwindcss-font-faces/fonts/PlayfairDisplay-VariableFont.woff2") format("woff2-variations")',
        Raleway: 'url("@exotelis-labs/tailwindcss-font-faces/fonts/Raleway-VariableFont.woff2") format("woff2 supports variations"), url("@exotelis-labs/tailwindcss-font-faces/fonts/Raleway-VariableFont.woff2") format("woff2-variations")',
        WorkSans: 'url("@exotelis-labs/tailwindcss-font-faces/fonts/WorkSans-VariableFont.woff2") format("woff2 supports variations"), url("@exotelis-labs/tailwindcss-font-faces/fonts/WorkSans-VariableFont.woff2")',
      },
    },
  }
);

module.exports = fontFaces;
