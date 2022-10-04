// CANVAS

const c = document.getElementById("canva");
const ctx = c.getContext("2d");
c.width = 1000
c.height =1000


// IMPORT

import {Case} from "./case.js";
import { Player } from "./player.js";

// MAIN


// var
var caseArray = []

var objectiveX = 1
var objectiveY = 1

// set

for (let i = 0; i < c.width/100;i++){
    for (let g = 0; g <c.width/100;g++){
        if (Math.random() <=0.5 && i != objectiveX && g != objectiveY){
            caseArray.push(new Case(i*100,g*100,true,false,"none"))
        }else{
            if (i == objectiveX && g == objectiveY){
                caseArray.push(new Case(i*100,g*100,false,true,0))
            }else{
                caseArray.push(new Case(i*100,g*100,false,false,"none"))
            }
        }
    }
}

var canContinu = true
var i = 0
while (canContinu == true){
    canContinu = false
    caseArray.forEach(function(item){
        if (item.score == i){
            item.expand(caseArray)
            canContinu = true
        }
    })
    i ++
}




caseArray.forEach(function(item){
    item.draw()
})


var player = ""

var caseClicked = ""

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    var x = event.clientX - rect.left
    var y = event.clientY - rect.top
    x = (100*Math.floor(x/100))/100
    y = (100*Math.floor(y/100))/100
    player = new Player(x,y)
    player.draw()
    //while (player.arrived == false){
    for (let i = 0; i<=20;i++){
        player.update(caseArray)
        player.draw()
    }
}

const canvas = document.querySelector('canvas')
canvas.addEventListener('mousedown', function(e) {
    getCursorPosition(canvas, e)
})



// EXPORT

export {c, ctx};
