<template>
  <div id="loading" :class="loading">
    <div class="wave">
      <span style="--i:1;">P</span>
      <span style="--i:2;">E</span>
      <span style="--i:3;">P</span>
      <span style="--i:4;">P</span>
      <span style="--i:5;">E</span>
      <span style="--i:6;">R</span>
      <span style="--i:7;">.</span>
    </div>
  </div>
</template>

<style lang="sass" >
@import "~/assets/style.sass"
#loading
  position: fixed
  height: 100vh
  width: 100vw
  background: #FF9900
  display: flex
  justify-content: center
  align-items: center
  @include transition(all, 0.2s, ease-in-out)
.opacity
  opacity: 1
.no-opacity
  opacity: 0
.zindex
  z-index: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
.no-zindex
  z-index: -1
.wave
  -webkit-box-reflect: below -12px linear-gradient(transparent,rgba(255, 255, 255, 0.5))
  span
    display: inline-block
    color: white
    font-size: 2em
    animation: animate 1s ease-in-out infinite
    animation-delay: calc( 0.1s * var(--i)  )
    margin-right: 15px
@keyframes animate
  0%
    transform: translateY(0px)
  20%
    transform: translateY(-20px)
  40%,100%
    transform: translateY(0px)
</style>
<script>
export default {
  data(){
    return{
      loading:'opacity zindex'
    }
  },
  mounted(){
    setTimeout(() => {
        this.loading="no-opacity no-zindex"
      },4000)
  },
}
</script>
