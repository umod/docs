// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'uMod Documentation',
  tagline: '',
  url: 'https://developers.umod.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'umod',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    '@docusaurus/plugin-content-pages',
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'default',
        path: 'docs/guides',
        routeBasePath: 'guides',
        editUrl: 'https://github.com/umod/docs/tree/develop/',
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'universal',
        path: 'docs/universal',
        routeBasePath: 'docs/universal',
        sidebarPath: require.resolve('./sidebarsUniversal.js'),
        editUrl: 'https://github.com/umod/docs/tree/develop/',
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'rust',
        path: 'docs/games/rust',
        routeBasePath: 'docs/games/rust',
        sidebarPath: require.resolve('./sidebarsRust.js'),
        editUrl: 'https://github.com/umod/docs/tree/develop/',
      }),
    ],
  ],

  themes: ['@docusaurus/theme-classic'],
  themeConfig:
    /** @type {import('@docusaurus/theme-classic').Options} */
    ({
      navbar: {
        title: 'uMod',
        logo: {
          alt: 'uMod',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/umod/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'batch', 'clike', 'csharp', 'powershell'],
      },
    }),
};

module.exports = config;
