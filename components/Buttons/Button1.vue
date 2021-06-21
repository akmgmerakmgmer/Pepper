<template>
  <div class="d-inline-block">
    <a href="https://pepper.zone/clients/PepperSetup.exe" class="paragraphs d-flex justify-center align-center">
      <span class="ma-0 pa-0">Download Now</span>
    </a>
  </div>
</template>

<style lang="sass" scoped>
@import "~/assets/style.sass"
a
  position: relative
  padding: 15px
  border: 2px solid #FF9900
  background: #FF9900
  letter-spacing: 3px
  &:hover>span
    color: white
  &:hover
    &::before
      transform: scaleY(0)
  &::before
    content:'',
    position: absolute
    top: 6px
    left: -2px
    height: calc( 100% - 12px )
    width: calc( 100% + 4px )
    background: #1b1b1b
    transform: scaleY(1)
    @include transition(all, 0.3s, ease-in-out)
    transition-delay: 0.3s
  &:hover
    &::after
      transform: scaleX(0)
  &::after
    content:'',
    position: absolute
    left: 6px
    top: -2px
    width: calc( 100% - 12px )
    height: calc( 100% + 4px )
    background: #1b1b1b
    transform: scaleX(1)
    @include transition(all, 0.3s, ease-in-out)
  span
    z-index: 3
    position: relative
    color: white
    @include transition(all, 0.3s, ease-in-out)
    transition-delay: 0.3s
    font-size: 20px
</style>
