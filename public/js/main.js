const dataSource = []

/**
 * @author lihh
 * @description 生成数据
 */
function createData(name, desc, importance, gitHub, details) {
  const obj = {
    name,
    desc,
    importance,
    details,
    gitHub
  }
  dataSource.push(obj)
}

/**
 * @author lihh
 * @description 实现eslint插件 一键部署功能
 */
function createEslintPlugin() {
  createData(
    'auto-eslint-cli',
    '实现了eslint + prettier + commitlint + husky 一键部署。支持多维度部署 以及版本锁定 使用工程化来完成避免手动实现',
    5,
    'https://github.com/a572251465/auto-eslint-cli',
    [
      '自动安装eslint等插件',
      '自动实现git hook等钩子注册',
      '支持vue，react，commonJs工具等部署',
      '提供了js/ json等多种配置方式'
    ]
  )

  createData(
    'hot-refresh',
    '实现了前端静态服务，以及监听当前索引html的所有引用文件，一旦文件发生变化，通知浏览器自动更新',
    5,
    'https://github.com/a572251465/hot-refresh',
    ['前端静态服务，支持缓存', '监听使用的文件的变化，文件一旦变化通知浏览器直接更新']
  )
}

/**
 * @author lihh
 * @description 用来生成共同的插件的
 */
function createCommonPlugin() {
  createData(
    'postcss-transform-unit',
    '可以通过配置，在编译的时候会单位进行转换，rem/ rpx/ px 任意转换',
    3,
    'https://github.com/a572251465/postcss-transform-unit'
  )

  createData(
    'condition-filter-loader',
    '为一些webpack loader增加筛选条件，例如：图片压缩，webpack config中配置该loader，该loader配置image-loader，就可以开启条件筛选',
    3,
    'https://github.com/a572251465/condition-filter-loader'
  )

  createData(
    'where-type',
    '可以判断不同的数据类型，例如: isNumber。以及获取不同类型，getTypes()',
    3,
    'https://github.com/a572251465/where-type'
  )

  createData(
    'single-merge',
    '将两个对象的数据进行深度合并，如果遇到值为数组，可以通过options来配置是合并还是覆盖',
    3,
    'https://github.com/a572251465/single-merge'
  )

  createData(
    'single-cookies',
    '封装了一些关于cookie的增删改查的操作',
    3,
    'https://github.com/a572251465/single-cookies'
  )

  createData(
    'single-throttle',
    '该插件封装了节流功能，可以将节流单独拿出来使用',
    3,
    'https://github.com/a572251465/single-throttle'
  )

  createData(
    'single-deepcopy',
    '进行<对象><数组>等数据的类型的深度克隆',
    3,
    'https://github.com/a572251465/single-deepcopy'
  )
}

/**
 * @author lihh
 * @description 学习实例demo
 */
function createStudyDemo() {
  createData('nodejs-learning', '关于node的练习学习', 3, 'https://github.com/a572251465/nodejs-learning')

  createData(
    'javascript-program-learning',
    '对一些常用的手写实现，算法题，编程题进行总结。例如：重写new/ call/ apply/ instanceof等',
    3,
    'https://github.com/a572251465/javascript-program-learning'
  )

  createData(
    'webpack5-vue3-demo',
    '通过手写webpack5配置 来搭建vue3项目，罗列了常用的webpack5配置',
    3,
    'https://github.com/a572251465/webpack5-vue3-demo'
  )

  createData('babel-config-demo', '列举了常用的babel 配置选项', 3, 'https://github.com/a572251465/babel-config-demo')

  createData(
    'web-worker-demo',
    '手写web-worker案例，表述了对子线程的理解',
    3,
    'https://github.com/a572251465/web-worker-demo'
  )

  createData(
    'web-component-demo',
    '针对技术web-component的应用，实现了手风琴的效果',
    3,
    'https://github.com/a572251465/web-component-demo'
  )

  createData(
    'page-correspond-demo',
    '列举了页面通信的8中实现方案',
    3,
    'https://github.com/a572251465/page-correspond-demo'
  )

  createData(
    'tcp-ip-demo',
    'TCP/IP的通信demo，讲解了TCP/IP 如何三次握手以及四次挥手的',
    3,
    'https://github.com/a572251465/tcp-ip-demo'
  )

  createData(
    'config-eslint-demo',
    '各种情况下的eslint配置，方便以后自己以及他人配置',
    3,
    'https://github.com/a572251465/config-eslint-demo'
  )
}

/**
 * @author lihh
 * @description 创建个人博客
 */
function createPersonalBlog() {
  createData(
    '个人博客pc端',
    '个人博客网站，记录自己看过的文章以及笔记等，一方面进行汇总，另一方面方便以后更快的查找',
    5,
    'http://lihh-core.top/share/'
  )

  createData('个人博客移动端', '个人博客网站，跟pc端博客网站尽量保持文章一致', 5, 'http://lihh-core.top/mobile/')
}

/**
 * @author lihh
 * @description 创建图形拖拽
 */
function createDarwGraphical() {
  createData(
    'auto-graph-drag',
    '主要是通过图形组件的拖拽，迅速完成页面。第一阶段目的主要是针对简单活动页。 代码开发中，敬请期待...',
    5,
    'http://lihh-core.top/lowcode/',
    ['敬请期待...', '敬请期待...']
  )
}

/**
 * @author lihh
 * @description 用来生成ui组件库
 */
function createUIComponent() {
  createData(
    'viewer-design',
    'Viewer Design是一款基于 Vue3.0 + typescript开发的中后台UI组件库, 组件的高配置性 + 传统的UI组件库的特性 + 更好的交互体验,为用户的使用提供了很大的便利 ',
    5,
    'http://lihh-core.top/view/',
    [
      '丰富的组件以及功能，满足大部分中后台产品的业务场景',
      '每个组件都用于高配置性，例如属性 styles，满足您的各种定制化',
      '为了满足日常的业务需求，从使用的角度提供了更多的指令，方便快捷。例如：复制文本,避免了单独下载插件来实现'
    ]
  )
}

/**
 * @author lihh
 * @description 用来生成分割线
 * @param {*} name
 */
function createSplitLine(name) {
  return `
    <div class = "flex">
      <span class = "line"></span>
      <span class = "world">${name}</span>
      <span class = "line"></span>
    </div>
  `
}

/**
 * @author lihh
 * @description 生成每条明细
 */
function createDetail({ name, desc, importance, details = [], gitHub }) {
  return `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        <a class = "card-link" target = "_black" href = "${gitHub}">${name}</a>
      </h5>
      <h6 class="card-subtitle mb-2 text-muted font1">${desc}</h6>
      ${
        details.length > 0
          ? `
          <ul class="list-group">
            ${details
              .map((item, key) => {
                return `
              <li class="list-group-item">
              ${key + 1}.
              ${item}
              </li>
              `
              })
              .join('')}
          </ul>
      `
          : ''
      }
    </div>
  </div>
  `
}

/**
 * @author lihh
 * @description 用来开始生成页面
 */
function createPage() {
  // 1. 开始注册插件
  dataSource.length = 0
  dataSource.push('个人博客')
  createPersonalBlog()
  dataSource.push('个人组件库')
  createUIComponent()
  dataSource.push('图形拖拽low-code平台')
  createDarwGraphical()
  dataSource.push('脚手架')
  createEslintPlugin()
  dataSource.push('功能插件')
  createCommonPlugin()
  dataSource.push('学习记录/ demo')
  createStudyDemo()

  // 2. 开始生成元素
  const container = `
    <div class = "containers">
      <div class = "row margin-top center">
        看来索引列表的老铁们，拿起你们的小手，点击个star吧&nbsp;&nbsp;&nbsp;
        <a target = "_black" href = "https://github.com/a572251465">star直通车👉</a>
      </div>
      ${dataSource
        .map((item) => {
          return `
            <div class = "row margin-top">
            ${typeof item === 'string' ? createSplitLine(item) : createDetail(item)}
            </div>
          `
        })
        .join('')}
    </div>
  `

  // 3. 开始插入dom
  const el = document.querySelector('#app')
  el.innerHTML = container
}

window.onload = createPage
