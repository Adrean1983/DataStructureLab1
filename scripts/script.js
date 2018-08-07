"use strict";

function getTimeStamp() {
    var now = new Date();
    return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':'
                + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
                .getSeconds()) : (now.getSeconds())));
}

let myArray = [];
function pushData () {
    let inputText = document.getElementById("name").value;
    myArray.push(inputText);
}

function shiftData () {
    myArray.shift();
}

$(document).ready(() => {
    
    let myArray = []
    $("body").on("click", "#formsubmit", () => {
        let $nameValue = $("#name").val();
        let $timeStamp = $("#timestamp").val();
        let $msgtext = $("#boxtext").val();
        $(".container2").append(`<section class="bugbox">
        <section class="namefield">${$nameValue}</section>
        <section class="timestamp">${$timeStamp}</section>
        <section class="message">${$msgtext}</section>
        <button class="tick" onclick="shiftData()">Bug Cleared</button>
        <button class="cross">Return to Queue</button></section>`);
    });
    
    $("body").on("click", ".tick", () => {
        $(".bugbox:first-child").remove();
    });
});