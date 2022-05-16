// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Redstone Experimental Server',
  tagline: '一个国内不知名的红石技术向生存服',
  url: 'https://rems.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'https://pic.rmb.bdstatic.com/bjh/c0f70aee81771615db8599a0fb93cc3e.png',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Redstone Experimental Server',
        logo: {
          alt: 'REMServer',
          src: 'https://pic.rmb.bdstatic.com/bjh/2d44fc3e673283cbbd6f8f97974c0340.png',
        },
        items: [
          {
            to: '/',
            label: '主页',
            position: 'left',
          },
          {to: 'blog', label: '日志', position: 'left'},
          {
            href: 'https://space.bilibili.com/551186831',
            label: '哔哩哔哩',
            position: 'right',
          },
          {
            href: 'https://github.com/REMSMC',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '关于',
            items: [
              {
                label: '概览',
                to: '/',
              },
              {
                label: '项目',
                to: '/projects',
              },
            ],
          },
          {
            title: '链接',
            items: [
              {
                label: '哔哩哔哩',
                href: 'https://space.bilibili.com/551186831',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/REMSMC',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '日志',
                to: 'blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Redstone Experimental Server. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
