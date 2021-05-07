
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
  var username = localStorage.getItem("Username"); 
  document.getElementById("username").innerHTML = "Welcome! " + username;
  function add() {

    var addroom = document.getElementById("Inputhash").value;
    firebase.database().ref("/").child(addroom).update({
          yup : "Add That Room!"
    
    });
    
    localStorage.setItem("Addroom", addroom);
    
    window.location = "what.html";
    
    }
  



  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
  row= "<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr> ";
    //End code
    });});}
getData();

