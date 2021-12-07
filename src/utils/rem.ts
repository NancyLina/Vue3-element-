window.addEventListener("resize", function () {
    let w = window.innerWidth;
    if (w > 750) w = 750;
    document.documentElement.style.fontSize = w / 10 + "px";
  //这里 我们自行规定了 1rem 为浏览器窗口宽度 的十分之 1 。 还有个地方是 我们规定了，浏览器的最大宽度 为750  当超过 750的时候 根字体大小还取 750浏览器宽度的字体大小。。不过 css也要进行配合， 需要给你的内容盒子 加入 max-width: 750px;
});
