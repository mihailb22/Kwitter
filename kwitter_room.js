// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDn25r1aefZkwRNZ8JDmFikhmt8RU8KkPk",
    authDomain: "kwitter-project-a3e04.firebaseapp.com",
    databaseURL: "https://kwitter-project-a3e04-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-a3e04",
    storageBucket: "kwitter-project-a3e04.appspot.com",
    messagingSenderId: "784092479504",
    appId: "1:784092479504:web:02e4b78ffeb5a472210a95"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name;

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "mihail"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + " </div>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}