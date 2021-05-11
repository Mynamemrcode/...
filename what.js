var firebaseConfig = {
    apiKey: "AIzaSyCTG1KBnaN205hltAnK-Ur7AZmLRxGmZTw",
    authDomain: "cringkwitter.firebaseapp.com",
    databaseURL: "https://cringkwitter-default-rtdb.firebaseio.com",
    projectId: "cringkwitter",
    storageBucket: "cringkwitter.appspot.com",
    messagingSenderId: "292568663878",
    appId: "1:292568663878:web:35d1928b5b16fb6f394747"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("username");
  room_name = localStorage.getItem("addroom");

  function masa() {
      var Masa = document.getElementById("Inputhallo").value;
      firebase.database().ref(room_name).push({
          Likes: 0,
          Name: username,
          Message: Masa
      });
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

function Logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Addrome");
    window.location = "index.html";
}