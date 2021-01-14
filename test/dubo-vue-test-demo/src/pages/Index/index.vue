<template>
  <div class="header-wrapper">
    <div class="header">
      <danmaku :danmakuData="danmuData" class="danmaku"></danmaku>
    </div>
  </div>
</template>
<script>
import Danmaku from "./danmaku.vue";
const assetsPath = process.env.assetsPath;
export default {
  data () {
    return {
      danmuData: [
        {
          faceUrl: `${this.$assetsPath}/img/avatar-1.png`,
          title: "妈妈，谢谢你教会我走路"
        },
        {
          faceUrl: `${this.$assetsPath}/img/avatar-2.png`,
          title: "妈妈做的排骨是最好吃的菜"
        },
        {
          faceUrl: `${this.$assetsPath}/img/avatar-3.png`,
          title: "妈妈我要带你完成一场马拉松赛"
        },
        {
          faceUrl: `${this.$assetsPath}/img/avatar-4.png`,
          title: "妈妈你在马拉松终点等我一次吧"
        },
        {
          faceUrl: `${this.$assetsPath}/img/avatar-5.png`,
          title: "我要用悦跑圈跑出妈妈的名字"
        },
        {
          faceUrl: `${this.$assetsPath}/img/avatar-6.png`,
          title: "我想在母亲节当天拥抱妈妈"
        },
        {
          faceUrl: `${this.$assetsPath}/img/avatar-7.png`,
          title: "你的白发见证了我的成长，妈妈我爱你"
        },
        {
          faceUrl: `${this.$assetsPath}/img/avatar-8.png`,
          title: "妈妈谢谢你让我来到这个世界上"
        },
        {
          faceUrl: `${this.$assetsPath}/img/avatar-9.png`,
          title: "有妈妈的晚餐才有家的归属感"
        },
        {
          faceUrl: `${this.$assetsPath}/img/avatar-10.png`,
          title: "妈妈给我留的灯指引着我归家的路"
        },
        {
          faceUrl: `${this.$assetsPath}/img/avatar-11.png`,
          title: "爱在心底不善言辞，妈妈我爱你"
        },
        {
          faceUrl: `${this.$assetsPath}/img/avatar-12.png`,
          title: "妈妈我要把马拉松奖牌都刻上你的名字"
        }
      ],
    }
  },
  props: {
  },
  methods: {
  },
  computed: {
  },
  components: {
    Danmaku
  },
  mounted() {
  },
  destroyed() {
  }
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  position: relative;
  height: 15.6rem;
}
.header {
  background: url(#{$assetsPath}img/bg_top@2x.png) 0 0 / 100% 100%
    no-repeat;
  content: '';
  height: 6.2rem;
}
.danmaku {
  position: absolute;
  top: .44rem;
}
/deep/ .danma {
  display: flex;
  width: 4rem;
  margin-left: .14rem;
}
/deep/ .user-name {
  width: 1rem;
}
/deep/ .speci-txt {
  margin-left: .1rem;
  color: red;
  width: 1rem;
}
/deep/ .ellipse {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>