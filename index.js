function sendDanmu() {
  var input = document.getElementById('danmuInput')
  var message = input.value.trim()

  if (message !== '') {
    var danmuContainer = document.getElementById('danmuContainer')
    var danmu = document.createElement('div')
    danmu.className = 'danmu'
    danmu.textContent = message
    danmu.style.fontSize = randomFontSize() + 'px'
    danmu.style.top = randomPosition(0, danmuContainer.offsetHeight - 30) + 'px'
    danmu.style.color = randomFontColor()
    danmuContainer.appendChild(danmu)

    // 随机速度
    var speed = randomSpeed()
    danmu.style.animationDuration = speed + 's'

    //每隔一段时间发送过期的弹幕
    setTimeout(function () {
      danmuContainer.appendChild(danmu)
    }, speed * 1000) // 根据速度设置定时器

    input.value = ''
  }
}

function randomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomFontColor() {
  var r = Math.floor(Math.random() * 254)
  var g = Math.floor(Math.random() * 254)
  var b = Math.floor(Math.random() * 254)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}
function randomFontSize() {
  return Math.floor(Math.random() * 25) + 12 // 字体大小在12到36之间
}
function randomSpeed() {
  return Math.random() * 10 + 5 // 速度在5到15之间
}
function clearDanmu() {
  var danmuContainer = document.getElementById('danmuContainer')
  danmuContainer.innerHTML = '' // 清除所有弹幕
}
