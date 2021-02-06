<!--崩溃欺骗-->
var oldTitle = document.title;
var titleTime; //標題恢復計時器
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.querySelector("[rel='icon']").setAttribute("href", "/images/icons/favicon-32.png");
    document.title = '今 晚 月 色 真 美！🌙';
    clearTimeout(titleTime);
  } else {
    document.title = '像 你 一 样！❤';
    document.querySelector("[rel='icon']").setAttribute("href", "/images/icons/crash.png");
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 2000);
  }
});