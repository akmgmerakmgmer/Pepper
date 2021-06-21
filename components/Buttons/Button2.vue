<template>
  <div class="d-flex">
    <a href="https://pepper.zone/clients/PepperSetup.exe" class="paragraphs">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Download Now
    </a>
  </div>
</template>

<style lang="sass" scoped>
@import "~/assets/style.sass"
a
  background: #1b1b1b
  position: relative
  padding: 25px 100px
  color: white !important
  overflow: hidden
  @include transition(all, 0.3s, ease-in-out)
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7)
  @media (max-width: 575.98px)
    padding: 15px 50px
  @media (min-width: 576px) and (max-width: 767.98px)
    padding: 20px 50px
  &:hover
    color: white !important
    background: #FF9900
    box-shadow: 0 0 10px #FF9900, 0 0 20px #FF9900, 0 0 40px #FF9900
    transition-delay: 1s
    span:nth-child(1)
      left: 100%
      @include transition(all, 0.5s, ease-in-out)
    span:nth-child(2)
      top: 100%
      transition-delay: 0.25s !important
      @include transition(all, 0.5s, ease-in-out)
    span:nth-child(3)
      right: 100%
      transition-delay: 0.5s !important
      @include transition(all, 0.5s, ease-in-out)
    span:nth-child(4)
      bottom: 100%
      transition-delay: 0.75s !important
      @include transition(all, 0.5s, ease-in-out)
  span
    position: absolute
    display: block
  span:nth-child(1)
    top: 0
    left: -100%
    width: 100%
    height: 2px
    background: linear-gradient(90deg,transparent,#FF9900)
  span:nth-child(2)
    top: -100%
    right: 0%
    width: 2px
    height: 100%
    background: linear-gradient(180deg,transparent,#FF9900)
  span:nth-child(3)
    bottom: 0
    right: -100%
    width: 100%
    height: 2px
    background: linear-gradient(270deg,transparent,#FF9900)
  span:nth-child(4)
    bottom: -100%
    left: 0%
    width: 2px
    height: 100%
    background: linear-gradient(360deg,transparent,#FF9900)

</style>
