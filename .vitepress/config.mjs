import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "毕设工坊",
  description: "一站式毕业解决方案",
  head: [['link', { rel: 'icon', href: '/bishe-workshop/favicon.ico' }]],
  cleanUrls: true,
  base: '/bishe-workshop/',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    },
    container: {
      tipLabel: '内容详情',
      warningLabel: '注意',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  themeConfig: {
    logo: "/logo.png",
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/graduation-project/': sidebarGraduationProject(),
      '/membership/': sidebarMembership(),
      'free-resources': sidebarFreeResources(),
      '/about-us/': sidebarAboutUs()
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    lastUpdatedText: '最后更新',

    footer: {
      message: '每一件好的产品，都值得被认真对待',
      copyright: 'Copyright © 2023-present 毕设工坊'
    }
  }
})

function nav() {
  return [
    { text: '首页', link: '/' },
    { text: '毕设定制', link: '/graduation-project/introduce', activeMatch: '/graduation-project/introduce' },
    { text: '合伙人计划', link: '/membership/member', activeMatch: '/membership/member' },
    { text: '案例演示', link: '/case-demo/', activeMatch: '/case-demo/' },
    { text: '免费专区', link: '/free-resources/book', activeMatch: '/free-resources/' },
    { text: '关于我们', link: '/about-us/intro', activeMatch: '/about-us/' }
  ]
}

// 项目定制
function sidebarGraduationProject() {
  return [
    {
      text: '产品服务',
      items: [
        { text: '服务介绍', link: '/graduation-project/introduce' },
        { text: '定制指南', link: '/graduation-project/' },
        // { text: '热门选题', link: '/graduation-project/topic' },
        // { text: '论文服务', link: '/graduation-project/trap' },
        { text: '避坑指南', link: '/graduation-project/trap' }
      ]
    }
  ];
}

// 会员基地
function sidebarMembership() {
  return [
    {
      text: '营销',
      collapsed: false,
      base: '/membership/',
      items: [
        { text: '合伙人计划', link: 'member' },
        // { text: '产品报价', link: 'baojia' },
        { text: '销售话术', link: 'sale' },
        { text: '闲鱼运营手册', link: 'xianyu' },
        { text: '其它', link: 'other' }
      ]
    }
  ]
}

// 免费资源
function sidebarFreeResources() {
  return [
    {
      text: '免费资源',
      collapsed: false,
      base: '/free-resources/',
      items: [
        // { text: '开题报告', link: 'project' },
        { text: '电子图书', link: 'book' },
        { text: '视频资源', link: 'video' },
        { text: '软件工具', link: 'software' }
      ]
    }
  ];
}

// 关于我们
function sidebarAboutUs() {
  return [
    {
      text: '工坊发展',
      collapsed: false,
      base: '/about-us/',
      items: [
        { text: '关于我们', link: 'intro' },
        { text: '联系我们', link: 'contact' },
        { text: '工坊故事', link: 'story' }
      ]
    }
  ]
}
