// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Foxalia Wiki',
  tagline: "Découvrez l'univers de notre serveur Minecraft",
  favicon: 'img/favicon.ico',

  url: 'https://docs.foxalia-mc.fr',
  baseUrl: '/',

  organizationName: 'TixxioTw', 
  projectName: 'wiki-foxalia',

  onBrokenLinks: 'warn', 
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr', 
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', 
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Foxalia',
        logo: {
          alt: 'Foxalia Logo',
          src: 'img/foxalia.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            to: '/candidatures',
            label: 'Candidatures',
            position: 'left',
          },
          {
            href: 'https://discord.gg/DnGcXttTSz',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;