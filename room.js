
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCTG1KBnaN205hltAnK-Ur7AZmLRxGmZTw",
    authDomain: "cringkwitter.firebaseapp.com",
    projectId: "cringkwitter",
    storageBucket: "cringkwitter.appspot.com",
    messagingSenderId: "292568663878",
    appId: "1:292568663878:web:35d1928b5b16fb6f394747"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
