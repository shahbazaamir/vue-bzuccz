import {user } from './user';

export const App = {
  components: { user },
  data:{
    message: 'hi'
  },
  template: `<div>
  <h1>hello vvue </h1>
   <p> {{message}} bye changed </p> 
   <user></user>
   </div>`,
   methods: {
    saveUser: {
        /*firebase.database().ref('users/' + 'userId').set({
        username: 'name1',
        email: 'email1',
        profile_picture: 'imageUrl'
      });*/
    }
  }
}