module.exports = {
  theme:"antdocs",
  title: "Redstone Experimental Server",
  description: "一个国内不知名的红石技术向生存服",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
  },
};