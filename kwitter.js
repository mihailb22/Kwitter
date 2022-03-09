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

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}