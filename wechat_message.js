"auto";
var util = require('./util.js');
var header = util.header;


module.exports = function() {
  header();
  sleep(1000);
  var flag = app.launch('com.tencent.mm');
  toast(flag.toString());
  if (flag) {
    sleep(1000);
    click(440, 494);
    // 循环发100个消息
    for (var i = 0; i < 1; i++) {
      sleep(1000);
      setText('我是个机器人');
      id('anv').findOne().click();
    }
  }
}