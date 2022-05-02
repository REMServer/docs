module.exports = {
  title: 'Redstone Experimental Server',
  tagline: '一个国内不知名的红石技术向生存服',
  url: 'https://rems.vercel.app',
  baseUrl: '/',
  favicon: 'https://pic.rmb.bdstatic.com/bjh/c0f70aee81771615db8599a0fb93cc3e.png',
  staticDirectories: [],
  organizationName: 'REMSMC', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Redstone Experimental Server',
      logo: {
        alt: 'REMS',
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
          title: '周边',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/REMSMC/docs/edit/master/',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
