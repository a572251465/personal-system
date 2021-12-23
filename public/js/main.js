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
 * @description 根据数据生成虚拟dom
 * @param {*} data 传递的数据
 * 1 博客
 * 2 个人组件库
 * 3 图形拖拽low-code平台
 * 4 脚手架
 * 5 功能插件
 * 6 学习记录/ demo
 */
function createDomByData(data) {
  if (!Array.isArray(data)) return
  data.forEach(({name, introduce, skipPath, details}) => {
    details = Array.isArray(details) && details.length > 0 ? details : []
    createData(name, introduce, 5, skipPath, details)
  })
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
 * @description 进行数据请求
 */
function requestFetch() {
  return new Promise((resolve) => {
    const url = 'http://121.196.212.200:3000/public/worksList'

    /**
     * @author lihh
     * @description 进行数据的格式化
     */
    const dataFormat = (data) => {
      const editData = {}
      for (const item of data) {
        // 获取对应数据类型
        const {type} = item,
        arr = (editData[type] || (editData[type] = []))
        arr.push(item)
      }
      resolve(editData)
    }

    fetch(url, {
      method: 'get',
      mode: 'cors'
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(res => {
      if (res.code != '200') {
        alert(res.msg)
        return
      }
      dataFormat(res.data)
    })
  })
}

/**
 * @author lihh
 * @description 表示显示隐藏的处理
 * @param typeValue 表示修改的值
 */
function showOrHideHandle(typeValue) {
  // 表示判断值
  const judgeValue = typeValue === 'hide' ? 'show' : 'hide'
  const els = document.querySelectorAll('.mask')
  const classNames = Array.from(els).map(item => Array.from(item.classList))

  classNames.forEach((item, key) => {
    const localIndex = item.indexOf(judgeValue)
    if (localIndex !== -1) {
      item.splice(localIndex, 1, typeValue)
      els[key].className = item.join(" ")
    }
  })
}

/**
 * @author lihh
 * @description 用来开始生成页面
 */
async function createPage() {
  showOrHideHandle("show")
  // 0. 进行数据请求
  const res = await requestFetch()

  // 1. 开始注册插件
  dataSource.length = 0
  dataSource.push('个人博客')
  createDomByData(res['1'])
  dataSource.push('个人组件库')
  createDomByData(res['2'])
  dataSource.push('图形拖拽low-code平台')
  createDomByData(res['3'])
  dataSource.push('脚手架')
  createDomByData(res['4'])
  dataSource.push('功能插件')
  createDomByData(res['5'])
  dataSource.push('学习记录/ demo')
  createDomByData(res['6'])

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

  let timer = setTimeout(() => {
    showOrHideHandle('hide')
    clearTimeout(timer)
  }, 2000)
}

window.onload = createPage
