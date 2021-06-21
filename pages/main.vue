<template>
  <div>
    <loading-3></loading-3>
    <div class="background pt-4">

      <div class="px-7 d-flex justify-space-between">
        <img class="logo" src="~/assets/images/Pepper_logo_horizontal_light.png" alt="pepper"/>
        <v-btn
          color="#FF9900"
          dark
          class="mt-2"
          @click="logout"
        >
        <v-icon class="mr-1">mdi-power</v-icon>
        Logout
        </v-btn>
      </div>
      <Heading1 title1="What is Pepper's Purpose?!" title2="Collect , Support and Earn" title3="Get items and give support. For free." title4="What We Offer?!" paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. At eum amet explicabo, ad enim aspernatur minima ex blanditiis nobis non soluta quidem quos dolor autem placeat quisquam earum omnis quod."/>
      <v-row class="mt-5" no-gutters>
        <v-col class="columns" cols="12" lg="4" md="6" sm="12" v-for="offer in offers" :key="offer.img">
          <img class="images" :src="require('~/assets/images/'+offer.img)" alt="offers"/>
          <div class="image-background "></div>
          <div class="image-content white--text px-7">
            <div class="d-flex flex-row">
              <span class="images-title">{{offer.imageTitle}}</span>
            </div>
            <span class="content-span mt-3">{{offer.title}}</span>
            <p class="content-p mt-1">exercitationem omnis reprehenderit, modi saepe quidem ut eius nihil libero neque aliquam maxime quis repellendus, impedit numquam sint voluptatem laborum?</p>
            <Button1 class="mt-md-5 mt-2"/>
          </div>
        </v-col>
      </v-row>
      <div class="px-7 mt-md-16 mt-5">
        <div class="container">
          <h5 class="titles">Support Creators</h5>
          <p class="paragraphs white--text mt-md-5">Creators need support, and now you can help them without paying any money. Choose your preferred influencer on Pepper and gift them your idle time. Be a nice person!</p>
        </div>
      </div>
      <div class="px-md-5">
        <div class="container d-flex">
          <img class="supporters mr-md-10 mr-5" src="~/assets/images/insta.png"/>
          <img class="supporters mr-md-10 mr-5" src="~/assets/images/tiktok.png"/>
          <img class="supporters mr-md-10 mr-5" src="~/assets/images/youtube.png"/>
          <img class="supporters mr-md-10 mr-5" src="~/assets/images/twitch.png"/>
        </div>
      </div>
      <Heading1 title1="" title2="What Can You Achieve?!" title3="Money Alot of Money." :title4="`Hey `+name+ ` Wanna Check Our Supporters?!`" paragraph="You can make money by playing , collecting gift cards , skins or even supporting your favorite streamer it's as simple as that."/>
      <Slider/>
      <div class="px-7 mt-md-16 mt-5">
        <div class="container">
          <h5 class="titles">Help The Planet</h5>
          <p class="paragraphs white--text mt-md-5">Pepper allows you to help the planet by supporting important causes, such as agroforestry projects or animal protection. Contribute to change by being part of it!</p>
        </div>
      </div>
      <div>
        <div class="container d-flex">
          <img class="supporters mr-md-10 mr-5" src="~/assets/images/wwf.png"/>
          <img class="supporters mr-md-10 mr-5" src="~/assets/images/tree.png"/>
          <img class="supporters mr-md-10 mr-5" src="~/assets/images/gorilla.png"/>
        </div>
        <Button2 class="justify-center align-center mt-md-15 mt-5"/>
      </div>
      <div class="px-md-16 px-7 mt-16 text-md-center mb-md-5">
        <div class="container ">
          <h4 class="white--text titles mt-md-10">FAQs</h4>
        </div>
      </div>
      <v-row class="px-md-16 px-7 mx-md-16">
        <v-expansion-panels flat tile accordion>
          <v-expansion-panel
            v-for="question in questions"
            :key="question.q"
            active-class="active-panel"
          >
            <v-expansion-panel-header class=" titles-faq pb-5" color="#1B1B1B">{{question.q}}
              <template v-slot:actions>
                <v-icon color="white">
                  mdi-arrow-down-drop-circle
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="white--text accordion-content" color="#1B1B1B">
              {{question.answer}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
      <Footer/>
    </div>
  </div>
</template>
<style lang="sass" scoped>
@import "~/assets/style.sass"
.supporters
  width: 150px
  height: 150px
  object-fit: cover
  opacity: 0.5
  margin-top: -10px
  @media (max-width: 575.98px)
    width: 80px
    height: 50px
  @media (min-width: 576px) and (max-width: 767.98px)
    width: 110px
    height: 110px
  @media (min-width: 768px) and (max-width: 991.98px)
    width: 125px
    height: 125px
.height
  height: 100%
.active-panel>.titles-faq
  color: #FF9900 !important
.image-background
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  background: rgba(0, 0, 0, 0.65)
.image-background2
  background: rgba(0, 0, 0, 0.8)
.video-content
  position: absolute
  top: 0
  left: 0
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  height: 100%
.background
  background: #1B1B1B
  font-size: 16px
  @media (max-width: 575.98px)
    font-size: 10px
  @media (min-width: 576px) and (max-width: 767.98px)
    font-size: 12px
  @media (min-width: 768px) and (max-width: 991.98px)
    font-size: 13px
  @media (min-width: 992px) and (max-width: 1199.98px)
    font-size: 13px
  .logo
    width: 120px
    height: 50px
    object-fit: cover
  .images
    width: 100%
    object-fit: cover
    height: 100%
  .columns
    position: relative
    height: 80vh
    &:hover>.image-content
      opacity: 1
    &:hover .images-title
      @include animator(text-animation,0.3s,linear,0s,forwards)
    &:hover .content-span
      @include animator(text-animation,0.3s,linear,0s,forwards)
    &:hover .content-p
      @include animator(text-animation,0.3s,linear,0s,forwards)
    .image-content
      position: absolute
      top: 0
      left: 0
      display: flex
      flex-direction: column
      justify-content: center
      align-items: left
      width: 100%
      height: 100%
      background: rgba(0, 0, 0, 0.75)
      opacity: 0
      @include transition(all, 0.3s, ease-in-out)
      .images-title
        background: #FF9900
        padding: 5px 20px
        font-size: 20px
        font-weight: 400
        letter-spacing: 5px
      .content-span
        font-size: 250%
        font-weight: 300
        color: #FF9900
      .content-p
        font-size: 18.55px
        font-weight: 200
        @media (max-width: 575.98px)
          font-size: 17px
        @media (min-width: 576px) and (max-width: 767.98px)
          font-size: 18px
  .titles-faq
    font-size: 260%
    font-weight: 700
    color: white
  .accordion-content
    font-size: 22px
    @media (max-width: 575.98px)
      font-size: 18px
    @media (min-width: 576px) and (max-width: 767.98px)
      font-size: 20px
  .video-container
    position: relative
    height: 70vh
    img
      height: 100%
      width: 100%
      object-fit: cover
@keyframes text-animation
  0%
    transform: translateY(20px)
  100%
   transform: translateY(0)

</style>

<script>
import Loading3 from '~/components/Loadings/loading3.vue'
import Heading1 from '~/components/Headings/Heading1'
import Slider from '~/components/Sliders/Slider1'
import Button1 from '~/components/Buttons/Button1'
import Button2 from '~/components/Buttons/Button2'
import Footer from '~/components/Footers/Footer2'
export default {
  created(){
    if(!this.token){
      this.$router.push('/')
    }
  },
  data(){
    return{
      offers:[
        {
          img:'netflix-image.jpg',
          title:'Netflix Gift Card',
          imageTitle:'Netflix'
        },
        {
          img:'games-image.jpg',
          title:'Game Skins',
          imageTitle:'Gaming'
        },
        {
          img:'instagram-image.jpg',
          title:'Insta Follower',
          imageTitle:'Instgram'
        },
      ],
      questions:[
        {
          q:'How does Pepper work?',
          answer:'Pepper uses your idle computing power to mine cryptocurrencies. We automatically mine the most profitable cryptocurrency and we instantly exchange it for BTC and/or EUR. Through the app you can choose what to do with the proceeds generated by the app. We take care of your PC: we never overheat it, we stress it less than while you play your favourite game.'
        },
         {
          q:'What can I do with my time?',
          answer:"You can get skins, gift cards, support your favourite streamer or influencer, get cryptocurrencies and more. If there's something else you would like us to list, just let us know on discord."
        },
         {
          q:'Will Pepper damage my PC or reduce its lifetime?',
          answer:"No! Through mining we will never push your PC beyond its limits. Hardware gets damaged and its lifetime gets reduced only if it works at too high temperatures: we have guards and thresholds to avoid this to happen. We have been mining since 2013, we will use our experience to protect your PC."
        },
        {
          q:'Will Pepper slow down my PC or make me lag?',
          answer:"No, you will never lose a frame or lag due to Pepper. We automatically detect that you are using your PC and will halt mining. It will resume mining as soon you stop using it."
        },
        {
          q:'Which games are supported?',
          answer:"Dota 2, CSGO, PUBG, Team Fortress 2, Rust. We are eager to add more games, just let us know your favourite one on discord."
        },
        {
          q:"How much energy does it use? Am I contributing to climate change?",
          answer:"At most, your PC with Pepper uses as much energy as your dishwasher. Moreover, we use our proceeds to offset 100% of the CO2 emissions of the energy you will use for Pepper through agroforestry projects on Treedom.net. You are not contributing to the Climate change at all. In math: the additional consumption generated by Pepper power is ~150W. Assuming that you'll use pepper 8 hours per day, 20 days per month it will use 288kWh, the same as a dishwasher according to the European Union."
        },
        {
          q:'Will energy costs exceed Pepper proceeds?',
          answer:"Damn no. The average PC produces ~3€ per day with an energy cost of less than 1€. If, for any reason, the situation changes and becomes unprofitable we will let you know and stop the app automatically."
        },
        {
          q:"What about the minimum hardware and software requirement?",
          answer:"Windows 10 and a GPU with 4Gb of VRAM. If you do not know what this means: just download the app. It will let you know if your PC is not compatible.A nice airflow in your case is a big plus and will allow you to earn higher rewards. Soon we will support PCs without a GPU as well."
        }
      ]
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
      this.$router.replace('/')
    }
  },
  components:{
    Loading3,
    Heading1,
    Slider,
    Button1,
    Button2,
    Footer
  },
  computed:{
    name(){
      return this.$store.getters.getName
    },
    token(){
      return this.$store.getters.getToken
    }
  }
}
</script>
