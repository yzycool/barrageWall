## 简介
这是一个由 html + css + JavaScript 完成的弹幕墙。支持发送弹幕，展示弹幕，显示隐藏弹幕，清除弹幕。
## 核心方法
### 生成弹幕 createScreenBullet()

1. 创建dom。
2. 设置dom样式。
3. 添加到弹幕中。
### 滚动弹幕 addInterval（）

1. 获取生成dom的左边距
2. 设置定时器，随机频率，改变左边距，形成弹幕移动效果
### 显示隐藏弹幕  switchBtn.onclick 

1. 通过获取弹幕 class，拿到弹幕列表。
2. 根据开关的值，改变透明度
### 清空弹幕 clearBtn.onclick 

1. 清空弹幕节点的子节点
2. 清空定时器
3. 充值定时器列表

