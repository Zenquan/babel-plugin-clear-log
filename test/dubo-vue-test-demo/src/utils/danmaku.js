const defaultOption = {
  maxSpeed: 10,
  minSpeed: 3,
  spaceRatio: 20,
  danmakuLength: 5
};
let dep = {};
class Danmaku {
  constructor(el, data = [], option = {}) {
    if (typeof el !== "object") throw new Error("传入非法el");
    if (!data.length) return console.log("没有需要滚动的弹幕");
    this.option = Object.assign(defaultOption, option);
    let { danmakuLength } = this.option;
    let elSize = el.getBoundingClientRect();
    this.$el = el;
    this.elWidth = elSize.width;
    this.elHeight = elSize.height;
    this.data = data;
    this.danmaku = data.splice(0, danmakuLength);
    this.aliveItems = [];
    this.deatdItems = [];
    this.init();
  }
  init() {
    while (this.danmaku.length) {
      let danmakuData = this.danmaku.shift();
      let dom = this.createDom(danmakuData);
      this.aliveItems.push(dom);
      this.$el.appendChild(dom);
      this.setDomPosition(dom);
      this.setDomSpeed(dom);
    }
    this.animationTimer();
  }
  createDom(danmakuData) {
    let wrap = document.createElement("div");
    let dom = document.createElement("div");
    let img = document.createElement("img");
    img.src = danmakuData.faceUrl;
    dom.innerHTML = danmakuData.title;
    wrap.appendChild(img);
    wrap.appendChild(dom);
    return wrap;
  }
  setDomPosition(dom) {
    Math.random() > 0.5
      ? dom.setAttribute("class", "danmaku-item one")
      : dom.setAttribute("class", "danmaku-item two");

    let domSize = dom.getBoundingClientRect();
    let domWidth = domSize.width;
    let domHeight = domSize.height;
    let spaceRatio = this.option.spaceRatio;
    let danmakuSpace = parseInt(
      Math.random() * ((this.elHeight - domHeight) / spaceRatio)
    );
    let domTop = danmakuSpace * spaceRatio;
    // if(this.checkOverlap(domTop)) return this.setDomPosition(dom)
    dom.style = `top: ${domTop}px;transform: translateX(${this.elWidth +
      50}px)`;
  }
  setDomSpeed(dom) {
    let { maxSpeed, minSpeed } = this.option;
    let second = parseInt(Math.random() * (maxSpeed - minSpeed) + minSpeed);
    let speed = (this.elWidth / (second * 60)).toFixed(3);
    // console.log('speed>>>', speed, this.elWidth)
    dom.setAttribute("data-speed", speed);
  }
  animationTimer() {
    window.requestAnimationFrame(() => {
      for (let i = 0; i < this.aliveItems.length; i++) {
        let dom = this.aliveItems[i];
        let domSpeed = dom.getAttribute("data-speed");
        let domLeft = dom.getBoundingClientRect().left;
        let domWidth = dom.getBoundingClientRect().width;
        dom.style.transform = `translateX(${domLeft - domSpeed}px)`;
        if (domLeft < -domWidth) {
          this.deatdItems.push(...this.aliveItems.splice(i, 1));
          this.notifyAddDom();
          i--;
        }
      }
      this.animationTimer();
    });
  }
  checkOverlap(domTop) {
    for (let item of this.aliveItems) {
      let itemSize = item.getBoundingClientRect();
      let top = itemSize.top;
      let height = itemSize.height;
      console.log(Math.abs(domTop - top) < height);
      if (Math.abs(domTop - top) < height) return true;
    }
    return false;
  }
  notifyAddDom() {
    if (!this.data.length) {
      return this.emit("nodata");
    }
    let danmakuData = this.data.shift();
    let dom = this.deatdItems.shift();
    let container = dom.querySelector("div");
    let imgDom = dom.querySelector("img");
    container.innerHTML = danmakuData.title;
    imgDom.src = danmakuData.faceUrl;
    this.aliveItems.push(dom);
    this.setDomPosition(dom);
    this.setDomSpeed(dom);
  }
  on(event, fn) {
    dep[event] = fn;
  }
  emit(event) {
    dep[event]();
  }
  appendData(newdatas) {
    this.data = newdatas;
    this.notifyAddDom();
  }
}

export default Danmaku;
