import Vue from 'vue'

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