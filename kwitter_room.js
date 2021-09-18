
   
const firebaseConfig = {
    apiKey: "AIzaSyAyaRLV0DWQBWtlh9SnXndBIpLT0pcuLYU",
    authDomain: "chatbot-596b1.firebaseapp.com",
    databaseURL: "https://chatbot-596b1-default-rtdb.firebaseio.com",
    projectId: "chatbot-596b1",
    storageBucket: "chatbot-596b1.appspot.com",
    messagingSenderId: "251796850535",
    appId: "1:251796850535:web:cd0652b06ad12bfe8d51c2",
    measurementId: "G-BZD86K9Y67"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  user_name=localStorage.getItem("user_name");
  document.getElementById("Username").innerHTML= "Welcome  " +  user_name + "!";

  function addRoom()
  {
    room_name=document.getElementById("room").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name",room_name)
    window.location="kwitter_page.html";

  }

    
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+Room_names);
      row="div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      doocument.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";

}
