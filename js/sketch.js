'use strict'
// DB URL: https://console.firebase.google.com/u/1/project/teleportationmessage/database/teleportationmessage/data

let nodeData; // object we will push to firebase
let fbData; // data we pull from firebase
let fbDataArray; // firebase data values converted to an array
let database; // reference to our firebase database
let folderName = 'messages' // name of folder you create in db
let messageInpute;
let sendMessageBtn;

function setup() {
  noCanvas();

  // messageInpute = select("#messageInpute");
  messageInpute = document.querySelector("#messageInpute");
  sendMessageBtn = document.querySelector("#sendMessageBtn");

  sendMessageBtn.addEventListener('click', sendMessage);

  // Initialize firebase
  // support for Firebase Realtime Database 4 web here: https://firebase.google.com/docs/database/web/start
  // Copy and paste your config here (replace object commented out)
  // ---> directions on finding config below

  // paste your config file here
  let config = {
    apiKey: "AIzaSyAWLI-Uoz-l0WK6Pry7p0bPNe4RuIB94QQ",
    authDomain: "teleportationmessage.firebaseapp.com",
    databaseURL: "https://teleportationmessage.firebaseio.com",
    projectId: "teleportationmessage",
    storageBucket: "teleportationmessage.appspot.com",
    messagingSenderId: "757465296466",
    appId: "1:757465296466:web:7823f002c5101b9278b98b"
  };

  firebase.initializeApp(config);

  database = firebase.database();

  // this references the folder you want your data to appear in
  let ref = database.ref(folderName);
  // **** folderName must be consistant across all calls to this folder

  ref.on('value', gotData, errData);

}

function draw() {

}

function sendMessage() {

  if (messageInpute.value) {
    let timestamp = Date.now();
    // console.log(timestamp);

    nodeData = {
      messageText: messageInpute.value,
      timestamp: timestamp,
      received: false,
    }


    createNode(folderName, timestamp, nodeData);

    createP(`sent message: ${nodeData.messageText}`);

    messageInpute.value = ''

  } else {
    alert("uh oh. type message first")
  }
}

function receiveMessage() {
  for (let i = 0; i < fbDataArray.length; i++) {
    if(fbDataArray[i].received === false){
    console.log("received message:");
    console.log(fbDataArray[0].messageText);
  }else{
    console.log("no more messages to teleport")
   }
  }
}
