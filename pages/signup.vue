<template>
  <Login
  login="Sign Up"
  welcome="Welcome to the club!"
  google="Sign up with Google"
  email="or create an account"
  register="Already registered?"
  account="Sign in"
  route="/"
  >
    <form class="mt-5" @submit.prevent>
      <label>Username*</label>
      <input type="text" placeholder="Your Username" class="py-2 px-5" v-model.trim="username">
      <v-alert dismissible class="mt-3" type="error" v-model="usernameAlert">{{usernameError}}</v-alert>
      <label class="mt-4">Email*</label>
      <input type="email" placeholder="mail@somedomain.com" class="py-2 px-5" v-model.trim="email">
      <v-alert dismissible class="mt-3" type="error" v-model="emailAlert">{{emailError}}</v-alert>
      <label class="mt-4">Password*</label>
      <input type="password" placeholder="Your secret words" class="py-2 px-5" v-model.trim="password">
      <v-alert dismissible class="mt-3" type="error" v-model="passwordAlert">{{passwordError}}</v-alert>
      <v-btn class="login-button mt-sm-8 mt-6 py-6" block color="#FF9900" rounded @click="signUp">Sign Up</v-btn>
    </form>
    <div class="text-center mt-3" v-show="isLoading">
        <Loading2/>
      </div>
      <v-snackbar
      v-model="snackbar"
      timeout=2000
      color="error"
    >
      <p class="error-alert">{{error}}</p>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </Login>
</template>

<style lang="sass" scoped>

</style>

<script>
import Login from '../components/login/login1'
import Loading2 from '../components/Loadings/loading2'
export default {
  data(){
    return{
      username:'',
      email:'',
      password:'',
      usernameError:"Username shouldn't be empty nor less than 3 letters",
      emailError:"Email is not valid",
      passwordError:"password shouldn't be empty nor less than 5 letters",
      usernameAlert:false,
      emailAlert:false,
      passwordAlert:false,
      usernameValid:true,
      emailValid:true,
      passwordValid:true,
      isLoading:false,
      error:'',
      snackbar:false
    }
  },
  components:{
    Login,
    Loading2
  },
  methods:{
    async signUp(){
      if(this.username===''|| this.username.length<3){
        this.usernameAlert=true
        this.usernameValid=false
      }else{
        this.usernameAlert=false
        this.usernameValid=true
      }
      if(this.email===''|| !this.email.includes('@') || !this.email.endsWith('.com')){
        this.emailAlert=true
        this.emailValid=false
      }else{
        this.emailAlert=false
        this.emailValid=true
      }
      if(this.password===''||this.password.length<5){
        this.passwordAlert=true
        this.passwordValid=false
      }else{
        this.passwordAlert=false
        this.passwordValid=true
      }
      if(this.usernameValid && this.emailValid && this.passwordValid){
        this.isLoading=true
        try{
          await this.$store.dispatch('signup',{
          email : this.email,
          password : this.password,
          username : this.username
          })
        }catch(error){
          this.error=error.message
          this.snackbar=true
        }
        this.isLoading=false
      }
    }
  }
}
</script>
