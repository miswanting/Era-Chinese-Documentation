---
home: true
heroText: Era 中文文档
tagline: 做便捷至极的 Emuera + Eramaker + Erabasic 文档
actionText: 快速开始
actionLink: guide/Quick_Start
features:
  - title: 更简单
    details: 学习曲线更加平滑的快速开始和入门教程，让上手更加简单。
  - title: 更高效
    details: 参考现代脚本文档重新组织文档结构。让使用者能够更快更精确地查找到需要的内容。
  - title: 更完善
    details: 本文档不仅含有 Eramaker 与 Emuera 的全部官方文档的翻译，还有额外的指南、参考等原创内容。
  - title: 更深入
    details: 从最简单的 Emuera 游戏开始，一直深入到对 Eramaker 和 Emuera 的源代码分析。
  - title: 更快速
    details: 本文档的部署使用了最新的文档框架 Vitepress。在表现力、页面向导、编写和部署自动化方面都是及其便捷和敏捷的。能够为文档内容提供一流的支持。
  - title: 更通用
    details: 由于 Emuera 引擎本身设计定位存在特殊性，本文档在翻译与编写的时候进行了部分描述的脱敏。
footer: GPL-3.0+ Licensed | Copyright © 2021-Present Miswanting：：
---

::: warning 提示

本文档正在**加急**制作中。

:::

# 项目进度

[![Deploy GitHub Pages](https://github.com/miswanting/Era-Chinese-Documentation/actions/workflows/deploy.yml/badge.svg)](https://github.com/miswanting/Era-Chinese-Documentation/actions/workflows/deploy.yml)

## 第一步：翻译部分

1. EraMaker 部分
   - :green_circle:`直译`[CSV 文件格式](translation/CSV_File_Format)
   - :green_circle:`直译`[ERB 文件格式](translation/ERB_File_Format)
   - :green_circle:`直译`[EraBasic 的结构](translation/EraBasic_Structure)
   - :green_circle:`直译`[EraBasic 的变量](translation/EraBasic_Variables)
2. Emuera 部分
   - :green_circle:`直译`[术语表](translation/Glossary)
   - :green_circle:`直译`[调试命令](translation/Debug_Command)
   - :green_circle:`直译`[调试模式](translation/Debug_Mode)
   - :green_circle:`直译`[\_replace.csv](translation/Replace_CSV)
   - :green_circle:`直译`[强制配置项目](translation/Config)
   - :yellow_circle:`直译`[程序流程](translation/Flow)
   - :yellow_circle:`直译`[与 EraMaker 的差异](translation/Difference)
   - :yellow_circle:`直译`新增的扩展语法
     - :yellow_circle:`直译`[常规](translation/General)
     - :yellow_circle:`直译`[运算符](translation/Operator)
     - :yellow_circle:`直译`[常量与变量](translation/Variable)
     - :yellow_circle:`直译`[用户自定义变量](translation/Custom_Variable)
     - :yellow_circle:`直译`[命令](translation/Command)
     - :black_circle:`直译`[函数与预处理器](translation/Function_and_Preprocessor)
     - :black_circle:`直译`[表达式函数]()
     - :black_circle:`直译`[用户自定义表达式内函数]()
     - :black_circle:`直译`[头文件]()
     - :black_circle:`直译`[HTML_PRINT 相关]()
     - :black_circle:`直译`[资源]()

## 第二步：指南部分

- :green_circle:`指南`[快速开始](guide/Quick_Start)
- :yellow_circle:`指南`[入门教程](guide/tutorials/)
- :black_circle:`指南`MCS 代码风格介绍
- :black_circle:`指南`Era 系列历史

## 第三步：参考部分

- :black_circle:`参考`CSV 文件
  - :black_circle:`参考`GameBase.csv
  - :black_circle:`参考`Str.csv
  - :black_circle:`参考`CharaXX.csv
  - :black_circle:`参考`其他
- :black_circle:`参考`ERB 文件
  - :black_circle:`参考`文件结构
  - :black_circle:`参考`变量
  - :black_circle:`参考`表达式
  - :black_circle:`参考`语句
  - :black_circle:`参考`复合语句
  - :black_circle:`参考`内置流程

## 第四步：开发部分

- :black_circle:`开发`EraMaker 源码分析
- :black_circle:`开发`Emuera 源码分析
