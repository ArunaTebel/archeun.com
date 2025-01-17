// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'archeun',
  tagline: 'archeun',
  favicon: 'img/favicon.ico',

  url: 'https://archeun.com',
  baseUrl: '/',

  organizationName: 'archeun',
  projectName: 'archeun.com',

  onBrokenLinks: 'throw',
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
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          blogTitle: 'archeun blog',
          blogDescription: 'Another blog for software developers',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'archeun',
        logo: {
          alt: 'archeun logo',
          src: 'img/logo.svg',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} archeun.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: 'c02b3a2a962981c63b0e5b27a80d820c',
        indexName: 'archeun',
        appId: 'DSM8M6TQN7',
        insights: true,
        algoliaOptions: {}
      },
    }),
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6319620576353785',
      async: true,
      crossorigin: 'anonymous',
    }
  ],
};

module.exports = config;
