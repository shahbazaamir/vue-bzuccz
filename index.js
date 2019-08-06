



import Vue from 'vue'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAi_yuJciPXLFr_PYPeU3eTvtXf8jbJ8zw",
  authDomain: "vue-demo-537e6.firebaseapp.com",
  databaseURL: "https://vue-demo-537e6.firebaseio.com"
}
firebase.initializeApp(config);

new Vue({
  el: '#app',
  template: `<div>
  <h1>hello vvue </h1>
   <p> {{message}} bye changed </p> 
   <user></user>
   </div>`,
  data : {
    message : 'hi'
  } ,

})


Vue.component('user',{
   template : '<div><h1> User component</h1></div>'
});