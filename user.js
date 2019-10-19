import {firebaseService} from './firebaseService.js'

export const user = {
  component : { firebaseService} ,
  template: `
  <div>
  <h1> User component</h1>
  <input type="button" value="save" >
  </div>` ,

  method : {
     saveUser: {
       /* firebaseService.get('users/' + 'userId').set({
        username: 'name1',
        email: 'email1',
        profile_picture: 'imageUrl'
      });*/
    }
  }
};