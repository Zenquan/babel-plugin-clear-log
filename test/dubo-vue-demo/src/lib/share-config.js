export default {
  mounted () {
    var shareData = {
      title: '商品随便送',
      desc: '下单即有赠品，价值3499元松拓手表等你来拿',
      link: 'https://' + document.domain + '/activity/vip2020/',
      imgUrl: 'https://joyrun-web-cdn.thejoyrun.com/huodong/2020/12/vip2020/send@2x.png'
    }
    this.share(shareData)
    if (this.nativeService.isJoyRunwebview()) {
      this.nativeService.setCloseButtonStatus(true)
    }
  }
}