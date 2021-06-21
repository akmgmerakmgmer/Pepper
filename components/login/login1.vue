<template>
  <div class="signup">
    <v-row class="row" no-gutters>
      <v-col order-md="1" order="2" cols="12" md="6" class="background px-sm-16 px-5 py-10">
        <div class="mr-lg-16 px-lg-10 px-md-0 px-sm-16">
          <img class="logo d-none d-md-block" src="~/assets/images/Pepper_logo_horizontal.png" alt="pepper"/>
          <!-- the pepper logo has some white space so it is not aligned correctly with the rest of the content so i made a container to margin it a little bit -->
          <div class="ml-4">
            <h1 class="text-h3 font-weight-bold mt-md-10">{{login}}</h1>
            <span class="text-h5 d-inline-block mt-3 span">{{welcome}}</span>
            <div class="mt-10">
              <button class="py-3 google-button">
                <img class="google-login mr-3" src="~/assets/images/google-logo-icon-png-transparent-background.png" alt="Google"/>
                <span class="span">{{google}}</span>
              </button>
              <p class="mt-10 text-center email-signin-paragraph">{{email}}</p>
            </div>
            <slot></slot>
            <p class="register mt-4">{{register}} <nuxt-link :to="route">{{account}}</nuxt-link></p>
          </div>
        </div>
      </v-col>
      <v-col order-md="2" order="1" cols="12" md="6" class="col-md-6 col-sm-12 background-image">
        <img class="logo d-md-none d-block" src="~/assets/images/Pepper_logo_horizontal_light.png" alt="pepper"/>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="sass" scoped>
.signup
  font-family: rubik
  height: 100%
  .row
    height: 100%
    .logo
      width: 150px
      height: 50px
      object-fit: cover
  .background
    background: #FFF8E7
    .span
      font-weight: 300
      color: rgba(0, 0, 0, 0.8)
    .google-button
      border: 1px solid rgba(0, 0, 0, 0.5)
      border-radius: 25px
      width: 100%
      .google-login
        width: 30px
        height: 30px
        margin-bottom: -10px
    .email-signin-paragraph
      font-style: italic
      color: rgba(0, 0, 0, 0.5)
      position: relative
      &::after
        content: ''
        display: inline-block
        border-bottom: 1px solid rgba(0, 0, 0, 0.5)
        height: 2px
        width: 10%
        margin-bottom: 3px
        margin-left: 5px
      &::before
        content: ''
        display: inline-block
        border-bottom: 1px solid rgba(0, 0, 0, 0.5)
        height: 2px
        width: 10%
        margin-bottom: 3px
        margin-right: 5px
    form
      input
        border: 1px solid rgba(0, 0, 0, 0.5)
        border-radius: 20px
        width: 100%
        display: block
        margin-top: 5px
        outline: none
      label
        color: rgba(0, 0, 0, 0.8)
        display: block
    .forget
      color: #FF9900
    .login-button
      color: white
    .register
      color: rgba(0, 0, 0, 0.85)
      a
        color: #FF9900
    .error-alert
      font-size: 16px
  .background-image
    background-image: url('~/assets/images/bg_1_Tavola disegno 1.jpg')
    background-position: top
    background-size: cover
    transform: scaleX(-1)
    @media (max-width: 600px)
      transform: scaleX(1)
      height: 70vh
      background-position: left
    @media (min-width: 600px) and (max-width: 960px)
      transform: scaleX(1)
      height: 60vh
      background-position: left
</style>
<script>
export default {
props:['login','welcome','google','email','register','account','route']
}
</script>
