const { path } = require('@vuepress/utils')

module.exports = {
  title: 'Era 中文文档',
  description: 'Eramaker + Emuera + Erabasic 中文文档',
  lang: 'zh-CN',
  base: '/Era-Chinese-Documentation/',
  themeConfig: {
    navbar: [
      {
        text: '指南',
        children: [
          {
            text: '快速开始',
            link: '/guide/Quick_Start',
          },
          {
            text: '入门教程',
            link: '/guide/tutorials/',
          },
        ]
      },
      {
        text: '参考',
        link: '/reference/',
      },
      {
        text: '翻译',
        children: [
          {
            text: 'EraMaker',
            link: '/translation/#eramaker-部分',
          },
          {
            text: 'Emuera',
            link: '/translation/#emuera-部分',
          },
        ]
      },
      {
        text: '开发',
        link: '/development/',
      },
      {
        text: '生态',
        link: '/ecosystem/',
      },
      {
        text: '贡献',
        link: '/contribute/',
      },
    ],
    sidebar: {
      '/1/': [
        {
          text: 'Modes',
          children: [
            { text: '123', link: '123' }
          ]
        },
        { text: 'Components' },
        { text: 'Forms' },
        { text: 'Filters' }
      ],
    },
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      }
    ]
  ]
}
