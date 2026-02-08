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

  // PLUGIN DE RECHERCHE (Version stable sans Python)
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["fr"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: "/", 
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // On arrive direct sur le wiki
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
      // CONFIGURATION DE LA BARRE DE NAVIGATION
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
            to: '/status',
            label: 'État des services',
            position: 'left',
          },
          {
            href: 'https://discord.gg/DnGcXttTSz',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      // APPARENCE DU CODE DANS LE WIKI
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // OPTIONS DE COULEURS (Optionnel)
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;