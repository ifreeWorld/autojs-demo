"auto";
auto();
back();
sleep(1000);
back();
sleep(1000);
back();
sleep(1000);
back();
sleep(1000);
app.launchApp('微信');
sleep(1000);
click(440, 494);
// 循环发100个消息
for (var i = 0; i < 100; i++) {
  sleep(1000);
  setText('我是个机器人');
  id('anv').findOne().click();
}