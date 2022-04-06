/* eslint-env node */
const plugin = require('tailwindcss/plugin');

const fontFaces = plugin(
  function ({ addBase, theme }) {
    addBase([
      {
        '@font-face': {
          fontFamily: 'OverpassMono',
          src: `url("${theme('fontPaths.OverpassMono')}") format("truetype")`,
          fontWeight: '100 900',
          fontStretch: '75% 125%',
        },
      },
      {
        '@font-face': {
          fontFamily: '"Playfair Display"',
          src: `url("${theme('fontPaths.PlayfairDisplay')}") format("truetype")`,
          fontWeight: '100 900',
          fontStretch: '75% 125%',
        },
      },
      {
        '@font-face': {
          fontFamily: 'Raleway',
          src: `url("${theme('fontPaths.Raleway')}") format("truetype")`,
          fontWeight: '100 900',
          fontStretch: '75% 125%',
        },
      },
      {
        '@font-face': {
          fontFamily: '"Work Sans"',
          src: `url("${theme('fontPaths.WorkSans')}") format("truetype")`,
          fontWeight: '100 900',
          fontStretch: '75% 125%',
        },
      },
    ]);
  },
  {
    theme: {
      fontPaths: {
        OverpassMono: '@exotelis-labs/tailwindcss-font-faces/fonts/OverpassMono-VariableFont.ttf',
        PlayfairDisplay: '@exotelis-labs/tailwindcss-font-faces/fonts/PlayfairDisplay-VariableFont.ttf',
        Raleway: '@exotelis-labs/tailwindcss-font-faces/fonts/Raleway-VariableFont.ttf',
        WorkSans: '@exotelis-labs/tailwindcss-font-faces/fonts/WorkSans-VariableFont.ttf',
      },
    },
  }
);

module.exports = fontFaces;
