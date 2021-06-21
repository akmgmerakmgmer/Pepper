<template>
  <div class="mt-md-10 mt-5">
    <carousel class="" paginationActiveColor="#FF9900" perPage="1">
      <slide v-for="slide in slides" :key="slide.img">
        <div class="carousel-container">
          <img class="img" :src="require('~/assets/images/'+slide.img)" alt="Slide"/>
          <div class="content-container px-md-15 px-5">
            <span class="span1 d-block">{{slide.h5}}</span>
            <span class="span2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime esse repellendus placeat suscipit. Molestias delectus a deserunt maxime similique? Saepe quos minus laboriosam excepturi quisquam voluptatum asperiores maxime modi?</span>
            <div class="d-inline-block mt-7">
              <a href="https://pepper.zone/clients/PepperSetup.exe" class="btn-slider"><span>Download Pepper Now</span></a>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>
<style lang="sass">
.btn-slider
  color: white !important
  padding: 20px 50px
  background: #FF9900
  display: inline-block
  font-size: 20px
  box-shadow: 0 0 5px #FF9900, 0 0 5px #FF9900, 0 0 10px #FF9900
  @media (max-width: 575.98px)
    font-size: 18px
    padding: 15px 30px
  @media (min-width: 576px) and (max-width: 767.98px)
    font-size: 18px
    padding: 15px 30px
.carousel-container
  position: relative
  height: 100vh
  @media (max-width: 575.98px)
    height: 70vh
  @media (min-width: 576px) and (max-width: 767.98px)
    height: 80vh
  @media (min-width: 768px) and (max-width: 991.98px)
    height: 90vh
  img
   object-fit: cover
   object-position: center
   width: 100%
   height: 100%
  .content-container
    position: absolute
    max-width: 100%
    height: 100%
    top: 0
    left: 0
    display: flex
    flex-direction: column
    justify-content: center
    background: rgba(0, 0, 0, 0.9)
    .back
      background: rgba(255, 153, 0, 0.85)
      padding-top: 10%
      padding-bottom: 10%
.span1
  color: white
  font-weight: 800
  font-size: 350%
.span2
  color: white
  font-size: 150%
p
  line-height: 2
  letter-spacing: 2px
button.VueCarousel-dot
  width: 20px !important
  border-radius: 42% !important
  height: 7px !important
  outline: none !important
  margin-top: 0 !important
</style>

<script>
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import { Carousel, Slide } from 'vue-carousel';
export default {
  data(){
    return{
      slides:[
        {
          img:'dota2.jpg',
          h5:'Dota 2',
        },
        {
          img:'pubg.jpg',
          h5:'PUBG',
        },
        {
          img:'counter.jpg',
          h5:'Counter Strike',
        },
        {
          img:'team.jpg',
          h5:'Team Fortress 2',
        },
        {
          img:'rust.jpg',
          h5:'Rust',
        },
      ]
    }
  },
  components: {
    Carousel,
    Slide,
  }
}
</script>
