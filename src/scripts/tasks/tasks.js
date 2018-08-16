// author Grady R.
// this file should push to the DOM

console.log("tasks.js")

const APIObject = require("./../dataManager")
const formManager = require("./../users/registerForm")

const $ = require("jquery")

// using jQuery to grab the div i am going to use to insert my module to the DOM
let taskContainer = $("#taskContainer");

$( "#taskContainer" ).css( "border", "3px solid red" );

taskContainer.text("Grady's Div:  need to appendchild 2 more <div>'s to this div, one <div> will hold the form, the other <div>will hold the list of tasks");

