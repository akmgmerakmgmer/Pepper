<template>
  <div class="px-7 pt-10 white--text">
    <div class="container">
      <div>
        <h1 class="titles d-block">{{title1}}</h1>
        <span class="titles2 d-block">{{title2}}</span>
        <span class="titles3 d-block mt-10">{{title3}}</span>
        <p class="paragraphs">{{paragraph}}</p>
      </div>
      <h2 class="titles2 mt-md-16 mt-5">{{title4}}</h2>
    </div>
  </div>
</template>

<style lang="sass">
.titles
  font-size: 350%
  font-weight: 800
  color: white
.titles2
  font-size: 280%
  color: #FF9900
  font-weight: 400
.titles3
  font-size: 265%
  font-weight: 700
.paragraphs
  font-size: 160%
</style>
<script>
export default {
  props:['title1','title2','title3','paragraph','title4']
}
</script>
