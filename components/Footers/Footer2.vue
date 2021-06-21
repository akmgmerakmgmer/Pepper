<template>
  <div class="background2 mt-16 py-5">
    <v-container>
      <div class="d-flex flex-sm-row flex-column justify-space-between">
        <div class="paragraphs3">
          <i class="fa fa-facebook icons" aria-hidden="true"></i>
          <i class="fa fa-twitter icons ml-md-10 ml-7" aria-hidden="true"></i>
          <i class="fa fa-instagram icons ml-md-10 ml-7" aria-hidden="true"></i>
          <i class="fa fa-linkedin icons ml-md-10 ml-7" aria-hidden="true"></i>
        </div>
        <div class="mt-3 mt-sm-0">
          <p class="pa-0 ma-0 paragraphs6 grey--text">© Copyright 2021 Pepper. All Rights Reserved</p>
        </div>
      </div>
      </v-container>
  </div>
</template>

<style lang="sass" scoped>
@import "~/assets/style.sass"
.background2
  background: #1b1b1b
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7)
  .icons
    cursor: pointer
    @include transition(all, 0.3s, ease-in-out)
    font-size: 16px
    color: white
    &:hover
      color: #FF9900
</style>

