import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "毕设工坊",
  description: "为重要作品，花点慢功夫",
  cleanUrls: true,
  public: 'bishe-workshop',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '毕设定制', link: '/graduation-project/' },
      { text: '项目带练', link: '/project-coach/intro' },
      { text: '案例演示', link: '/case-demo/intro' },
      { text: '免费专区', link: '/free-resources/intro' },
      { text: '关于我们', link: '/about-us/intro' }
    ],

    sidebar: {
      '/graduation-project/': [
        {
          text: '定制服务',
          items: [
            { text: '概览', link: '/graduation-project/' },
            { text: '热门选题', link: '/graduation-project/topic' },
            { text: '论文服务', link: '/graduation-project/trap' },
            { text: '避坑指南', link: '/graduation-project/trap' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present 毕设工坊'
    }
  }
})
