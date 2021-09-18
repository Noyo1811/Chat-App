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
    room_name=localStorage.getItem("room_name");   
    function Send(){
          msg=document.getElementById("msg_type").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                Message:msg,
                Like:0       
          });
document.getElementById("msg_type").value="";
          
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
