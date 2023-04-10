<template>
  <template v-if="visible">
<!--  Teleport  防止 dialog 被遮挡-->
    <Teleport to="body">
      <div class="xxx-dialog-overlay" @click="onClickOverlay"></div>
      <div class="xxx-dialog-wrapper">
        <div class="xxx-dialog">
          <header>
            <slot name="title"/>
            <span @click="close" class="xxx-dialog-close"></span>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button level="main" @click="okFn">OK</Button>
            <Button @click="cancelFn">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script>
import Button from './Button.vue'

export default {
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    okFn: {type: Function},
    cancelFn: {type: Function},
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context){
    // 开关
    const onClickOverlay = () => {
      if(props.closeOnClickOverlay){close()}
    }

    const close = () =>{
      context.emit('update:visible', false)
    }
    const okFn = () => {
      if(props.okFn?.() !== false){
        alert('返回了 true，可以关闭了')
        close()
      }else {alert("返回了 false，不能关闭")}
    }
    const cancelFn = () => {
      props.cancelFn?.()
      close()
    }
    return {close, cancelFn, okFn, onClickOverlay}
  }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.xxx-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header, > main {line-height: 20px;}

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
