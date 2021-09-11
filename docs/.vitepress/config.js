module.exports = {
  title: 'Era 中文文档',
  description: 'Eramaker + Emuera + Erabasic 中文文档',
  lang: 'zh-CN',
  base: '/Era-Chinese-Documentation/',
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '参考',
        link: '/reference/',
      },
      {
        text: '翻译',
        link: '/translation/',
      },
      {
        text: '开发',
        link: '/development/',
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
  }
}
