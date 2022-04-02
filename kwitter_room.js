
// Your web app's Firebase configurati
var firebaseConfig = {
      apiKey: "AIzaSyCkJd0tiR66R2ZbsRYkESa4mPrnNTN6Ss8",
      authDomain: "kwitter2-97db2.firebaseapp.com",
      databaseURL: "https://kwitter2-97db2-default-rtdb.firebaseio.com",
      projectId: "kwitter2-97db2",
      storageBucket: "kwitter2-97db2.appspot.com",
      messagingSenderId: "867984211380",
      appId: "1:867984211380:web:9e5403ae0a6810235f86e1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      
     
    // Initialize Firebase
    

      user_name = localStorage.getItem("Username"),
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!",

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "kwitter.html";
}
