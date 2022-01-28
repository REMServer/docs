import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'Redstone Experimental Server',
  description: '一个国内不知名的红石技术向生存服',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://pic.rmb.bdstatic.com/bjh/2d44fc3e673283cbbd6f8f97974c0340.png',
    head: [['link', { rel: 'icon', href: 'https://pic.rmb.bdstatic.com/bjh/c0f70aee81771615db8599a0fb93cc3e.png' }]],
    navbar: [
      // NavbarItem
      {
        text: 'Home',
        link: '/',
      },
      // NavbarGroup
      {
        text: 'Category',
        children: ['/category/README.md', '/category/projects.md', '/category/whitelist.md'],
      },
    ],
    sidebar: {
      '/category/': [
        {
          text: '概览',
          children: ['/category/README.md', '/category/projects.md', '/category/whitelist.md'],
        },
      ],
    },
  },
})
