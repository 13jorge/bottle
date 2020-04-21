'use strict'
// DB URL: https://console.firebase.google.com/u/1/project/teleportationmessage/database/teleportationmessage/data

let nodeData; // object we will push to firebase
let fbData; // data we pull from firebase
let fbDataArray; // firebase data values converted to an array
let database; // reference to our firebase database
let folderName = 'messages' // name of folder you create in db

function setup() {
noCanvas();

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
