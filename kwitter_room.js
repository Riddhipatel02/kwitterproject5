var firebaseConfig = {
    apiKey: "AIzaSyCgxhlsQGzRJAU045aiuLvGkj2Du8k6Yac",
    authDomain: "kwitter-44b5e.firebaseapp.com",
    databaseURL: "https://kwitter-44b5e-default-rtdb.firebaseio.com",
    projectId: "kwitter-44b5e",
    storageBucket: "kwitter-44b5e.appspot.com",
    messagingSenderId: "898212606038",
    appId: "1:898212606038:web:226064c160f75a3c720bf7"
  };
  
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}