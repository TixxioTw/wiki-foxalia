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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en', // On garde 'en' pour éviter l'erreur de build Vercel
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false, // Désactivé pour un wiki plus propre
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
          src: 'img/logo.svg', 
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            href: 'https://github.com/TixxioTw/wiki-foxalia',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Communauté',
            items: [
              {
                label: 'Site Officiel',
                href: 'https://foxalia-mc.fr',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/votre-lien',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Foxalia. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;