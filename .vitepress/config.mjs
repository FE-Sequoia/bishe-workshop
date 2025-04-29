import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "毕设工坊",
  description: "为重要作品，花点慢功夫",
  cleanUrls: true,
  base: '/bishe-workshop/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '毕设定制', link: '/graduation-project/', activeMatch: '/graduation-project/' },
      { text: '项目带练', link: '/project-coach/', activeMatch: '/project-coach/' },
      { text: '案例演示', link: '/case-demo/', activeMatch: '/case-demo/' },
      { text: '免费专区', link: '/free-resources/', activeMatch: '/free-resources/' },
      { text: '关于我们', link: '/about-us/', activeMatch: '/about-us/' }
    ],

    sidebar: {
      '/graduation-project/': [
        {
          text: '产品服务',
          items: [
            { text: '定制指南', link: '/graduation-project/' },
            { text: '热门选题', link: '/graduation-project/topic' },
            { text: '论文服务', link: '/graduation-project/trap' },
            { text: '避坑指南', link: '/graduation-project/trap' }
          ]
        }
      ],
      'case-demo': [
        {
          text: '案例演示',
          items: [
            { text: 'SSM', link: '/case-demo/ssm/' },
            { text: 'SpringBoot', link: '/case-demo/springboot/' }
          ]
        }
      ],
      'free-resources': [
        {
          text: '免费资源',
          items: [
            { text: '电子图书', link: '/free-resources/book' },
            { text: '视频资源', link: '/free-resources/video' },
            { text: '软件工具', link: '/free-resources/software' }
          ]
        }
      ],
      '/about-us/': [
        {
          text: '工坊发展',
          items: [
            { text: '关于我们', link: '/about-us/' },
            { text: '联系我们', link: '/about-us/contact' },
            { text: '工坊故事', link: '/about-us/story' }
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
