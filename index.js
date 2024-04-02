const switchBtn = document.getElementById('switch')
const sendBtn = document.getElementById('send')
const clearBtn = document.getElementById('clear')
var bulletDomList = document.getElementsByClassName('bullet')
const containerDOM = document.getElementById('screenContainer')
//弹幕定时器列表
let timers = []
//弹幕显示控制
let isShow = true
//用户点击按钮处理
function addBullet() {
  const textDom = document.getElementById('screenBulletText')
  const inputVal = textDom.value
  if (!inputVal) {
    alert('请输入弹幕内容')
    return
  }
  addInterval(createScreenBullet(inputVal))
  textDom.value = ''
}
//用户输入后创建弹幕
function createScreenBullet(text) {
  let bulletDom = document.createElement('div')
  bulletDom.innerHTML = text
  bulletDom.className = 'bullet'
  const fontColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
  const fontSize = getRandomInteger(12, 36) + 'px'
  const left = containerDOM.offsetWidth + 'px'
  let top = Math.floor(Math.random() * 400)
  top = top > 302 ? '302px' : `${top}px`
  bulletDom.style.cssText = `
          position: absolute;
          color: ${fontColor};
          font-size: ${fontSize};
          left: ${left};
          top: ${top};
      `
  containerDOM.append(bulletDom)
  return bulletDom
}
//添加定时器，利用定时器的频率控制速度，缺点是弹幕过多极其耗内存
function addInterval(intervalDom) {
  let left = intervalDom.offsetLeft
  const timer = setInterval(function () {
    left--
    intervalDom.style.left = `${left}px`
    if (intervalDom.offsetLeft + intervalDom.offsetWidth < 0) {
      intervalDom.style.left = containerDOM.offsetWidth + 'px'
      left = intervalDom.offsetLeft
    }
  }, getRandomInteger(10, 40)) //区间10-40最佳
  timers.push(timer)
}
//弹幕开关
switchBtn.onclick = function () {
  if (isShow) {
    for (let i = 0; i < bulletDomList.length; i++) {
      bulletDomList[i].style.opacity = 0
    }
    isShow = false
  } else {
    for (let i = 0; i < bulletDomList.length; i++) {
      bulletDomList[i].style.opacity = 1
    }
    isShow = true
  }
  switchBtn.innerText = isShow ? '关闭弹幕' : '打开弹幕'
}
//清除所有弹幕
clearBtn.onclick = function () {
  while (containerDOM.firstChild) {
    containerDOM.removeChild(containerDOM.firstChild)
  }
  for (let i = 0; i < timers.length; i++) {
    clearInterval(timers[i])
  }
  timers = []
}
// 生成区间 [min, max] 内的随机整数
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

sendBtn.onclick = function () {
  addBullet()
}

document.onkeyup = function (e) {
  var code = e.charCode || e.keyCode
  if (code === 13) {
    addBullet()
  }
}
