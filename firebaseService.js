import firebase from 'firebase'

import firebaseui from 'firebaseui'

var config = {
  apiKey: "AIzaSyAi_yuJciPXLFr_PYPeU3eTvtXf8jbJ8zw",
  authDomain: "vue-demo-537e6.firebaseapp.com",
  databaseURL: "https://vue-demo-537e6.firebaseio.com"
}

var firebaseConfig = {
  apiKey: "AIzaSyC0HNXw-ORQW37hUkdvGJ_3CRTCdkGUUCo",
  authDomain: "test-15b0a.firebaseapp.com",
  databaseURL: "https://test-15b0a.firebaseio.com",
  projectId: "test-15b0a",
  storageBucket: "test-15b0a.appspot.com",
  messagingSenderId: "846752590782",
  appId: "1:846752590782:web:cdfb301f4daf4448"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebaseService = {
  get(){
    firebase.database().ref('users/' + 'userId').set({
        username: 'name1',
        email: 'email1',
        profile_picture: 'imageUrl'
      });
  } 
}