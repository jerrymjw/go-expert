- 多讲少写

- 会多，在一起讨论的时间多

- Stand up，当你发现你可以胜任每一次 Stand up 的时候，就代表你 Job ready
- Kick off，每一个功能，无论大小，都应该至少拉着一名其他组员一起讨论 (划分组建层级)
- Retro，每一个人都至少能在每个 Column 中贡献一个意见
- Dojo / Showcase / Workshop，一个分享的平台

- 在一起讨论的时间多

- DevOps
  - ENVS
  - CICD
  - Infrastructure as code

# Environments

- Development (本地开发环境)
- Testing (远端测试环境，”公正公平“的独立于开发环境的远端环境，Nobody trust your dev env)
- Staging (*无限接近*远端生产环境的面向内部的*伪*生产环境)
- Production (远端生产环境，你永远不应该在远端生产环境上做测试)

Development, Staging, Production 典型 3 环境
Development, Testing(QA), Staging, Production 经典 4 环境
Development, Testing(QA), Staging, SIT(External QA), TED(External Resource), Production 多环境

# Git

 --- feature-header ----
------ master/main ----------
   --- feature-login ---

基于 master 分支的开发分支，独立且不影响 master 分支，通过回归 master 分支完成功能交付
master 分支理论上是交付分支，所有产品目前所需要的功能都在 master 分支上，且 master 分支是可以保证正常工作的

当前IT部署两大派

A 产品不相信开发，产品想要掌握大局：当你把功能交付后，产品需要走流程才可以发布代码
B 产品相信开发，开发有足够的责任心，开发掌控大局：当你吧功能交付后，功能会直接发布到生产环境，开发自己对功能负责

从开发的角度来讲，B 是最好的方向
开发+测试+部署 => Developer -> Delivery

Developer + QA + 0.5 Product = 2.5个劳动力
7w * 2.5 = 17.5w

Dev + Testing + Quality + Deployment

代码是有无限可能的，科技引领创新

QA 运维 产品 => 重复的人力工作
Developer + QA + 运维 + 产品 => Readable, Maintainable, Reusable => 自动化流程？Yes

把产品自动化起来
