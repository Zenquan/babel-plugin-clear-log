<template>
  <section ref="danmaku" class="Danmaku"></section>
</template>

<script>
import JrfeUtils from "@jomsou/utils";

export default {
  data() {
    return {
      danmaku: null
    };
  },
  props: {
    danmakuData: {
      default: [],
      type: Array
    }
  },
  mounted() {
    // console.log('JrfeUtils>>>', DanmuService, JrfeUtils.DanmuService);
    const { DanmuService } = JrfeUtils;
    setTimeout(() => {
      this.$nextTick(() => {
        this.danmaku = new DanmuService(this.$refs.danmaku, this.danmakuData, {
          maxSpeed: 10,
          minSpeed: 5,
          spaceRatio: 0,
          danmakuLength: 1
        });
        this.danmaku.on("nodata", () => {
          this.danmaku.appendData([].concat(this.danmakuData));
        });
      })
    }, 3000)
  }
};
</script>

<style lang="scss">
.Danmaku {
  width: 100%;
  position: absolute;
  top: 4.8rem;
  height: 2.5rem;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
  .danmaku-item {
    width: 5.12rem;
    position: absolute;
    height: 0.56rem;
    line-height: 0.56rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.2rem;
    color: #000;
    padding: 0 0.28rem;
    border-radius: 0.26rem;
    /* background: rgba(198, 64, 64, 0.5); */
    background: rgba(255,255,255,.8);
    img {
      width: 0.43rem;
      height: 0.43rem;
      border-radius: 50%;
      margin-right: 0.11rem;
    }
  }
}
</style>
