<template>
  <!-- Modal -->
  <div class="modal fade" :style="{display: displayAttr}" :class="{'in': isShowModal}" @touchmove.stop.prevent>
    <div class="modal-dialog" :class="[bgColor, size]">
      <div class="modal-content">
        <!-- modal header -->
        <div class="modal-header" v-if="isShowClose">
          <div class="close">
            <div class="close-button" @click="closeModal">
              <span class="plus"></span>
            </div>
          </div>
        </div>
        <!-- modal body -->
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowModal: false,
      displayAttr: 'none'
    }
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: 'white'
    },
    size: {
      type: String,
      default: ''
    },
    isShowClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    closeModal () {
      this.$emit('update:isOpen', false)
    }
  },
  watch: {
    isOpen (currVal, oldVal) {
      if (currVal) {
        // open Modal
        setTimeout(() => {
          this.isShowModal = !this.isShowModal
        }, 100)
        this.displayAttr = this.displayAttr == 'none' ? 'block' : 'none'
        document.querySelector('body').className = 'modal-open'
      } else {
        // close Modal
        setTimeout(() => {
          this.displayAttr = this.displayAttr == 'none' ? 'block' : 'none'
        }, 100)
        this.isShowModal = !this.isShowModal
        document.querySelector('body').className = ''
      }
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  display: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .8);
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  color: #fff;
  text-align: center;
  z-index: 999;
}
/* ghost element to vertical center */
.modal::before {
  content: " ";
  display: inline-block;
  height: 100%;
  width: 1%;
  vertical-align: middle;
}
/* open mdoal, allow scroll */
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal-dialog {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 5.3rem;
  padding: 0;
}
/* size */
.modal-dialog.middle {
  width: 4.33rem;
}
/* style */
.modal-dialog.black {
  background: rgba(0, 0, 0, .9);
}
.fade {
  opacity: 0;
  -webkit-transition: opacity .15s linear;
  -o-transition: opacity .15s linear;
  transition: opacity .15s linear;
}
.fade.in {
  opacity: 1;
}
/* header */
.modal-header {
  font-size: 14px;
  text-align: left;
}
/* body */
.modal-body { 
  font-size: 14px;
  text-align: center;
  /* padding: 0 .73rem; */
}
/* footer */
.modal-footer {
  padding: .15rem;
  text-align: right;
}

/* -- modal transition --*/
.modal.fade .modal-dialog {
  -webkit-transition: -webkit-transform .3s ease-out;
  -o-transition: -o-transform .3s ease-out;
  transition: transform .3s ease-out;
  -webkit-transform: scale(.8, .8);  /* translate(0, -25%) */
  -ms-transform: scale(.8, .8);
  -o-transform: scale(.8, .8);
  transform: scale(.8, .8);
}
.modal.in .modal-dialog {
  -webkit-transform: scale(1, 1);  /* translate(0, 0) */
  -ms-transform: scale(1, 1);
  -o-transform: scale(1, 1);
  transform: scale(1, 1);
}

/* -- custom --- */
.modal-body .content.black {
  font-size: 16px;
  color: #000;
  line-height: 2em;
}
/* close button */
.close-button {
  position: absolute;
  top: .1rem;
  right: .1rem;
  /* flex兼容 */
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  /* 主轴 */
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
  width: .46rem;
  height: .46rem;
  border: .02rem solid #fff;
  border-radius: 50%;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  /* 侧轴 */
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.close-button .plus {
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  width: .24rem;
  height: .02rem;
  background: #fff;
}
.close-button .plus:after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  display: inline-block;
  width: .02rem;
  height: .24rem;
  background: #fff;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
/* black close button */
.modal-dialog.white .close-button {
  border: .02rem solid #fff;
  background: #FF6262;
}
.modal-dialog.white .close-button .plus,
.modal-dialog.white .close-button .plus:after {
  background: #fff;
}
.blue-title {
  font-size: 18px;
  color: #18C0FE;
  letter-spacing: 0;
  line-height: 1.4em;
}
.content-image {
  height: 3.51rem;
  margin: .24rem .3rem;
}
.caption {
  font-size: 14px;
  color: #fff;
  line-height: 1.5em;
}
</style>

