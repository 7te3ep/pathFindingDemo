import {c, ctx} from "./main.js";

class Player {
    constructor(x,y){
        this.x = x*100
        this.y = y*100
        this.arrived = false
    }
    update(caseArray){
        var comparatorArray = []
        for (let i = 0;i<caseArray.length;i++){
            if (caseArray[i].x == this.x+100 && caseArray[i].y == this.y ||
                caseArray[i].x == this.x-100 && caseArray[i].y == this.y ||
                caseArray[i].y == this.y+100 && caseArray[i].x == this.x ||
                caseArray[i].y == this.y-100 && caseArray[i].x == this.x){
                    if (caseArray[i].block == false && this.arrived == false){
                        console.log('test')
                        comparatorArray.push(caseArray[i])
                    }
            }
        }
        comparatorArray.sort((a, b) => (a.score > b.score ? 1 : -1));
        console.log(comparatorArray)
        this.x = comparatorArray[0].x
        this.y = comparatorArray[0].y
        if (comparatorArray[0].objective == true){
            this.arrived = true
        }
    }

    draw(){
        ctx.fillStyle = 'rgba(255, 255, 0, 0.65)'
        if (this.arrived == false){
            ctx.fillRect(this.x, this.y, 100, 100);
        }
    }
}

export {Player};
