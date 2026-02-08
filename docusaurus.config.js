// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Foxalia Wiki',
  tagline: "Découvrez l'univers de notre serveur Minecraft",
  favicon: 'img/favicon.ico',

  // L'URL de ton site en production
  url: 'https://docs.foxalia-mc.fr',
  baseUrl: '/',

  // Tes informations GitHub
  organizationName: 'TixxioTw', 
  projectName: 'wiki-foxalia',

  // Configuration pour éviter que le build plante sur Vercel
  onBrokenLinks: 'warn', 
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en', 
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Rendre le Wiki accessible directement à la racine (plus de landing page)
          routeBasePath: '/', 
          // Activer l'auteur et la date de modification
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Lien vers ton repo pour permettre les statistiques de mise à jour
          editUrl: 'https://github.com/TixxioTw/wiki-foxalia/tree/main/',
        },
        blog: false, // On désactive le blog pour un style pur wiki
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
          src: 'img/logo.svg', // Pense à remplacer ce fichier par ton logo 🦊
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
              { label: 'Site Officiel', href: 'https://foxalia-mc.fr' },
              { label: 'Discord', href: 'https://discord.gg/foxalia' },
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