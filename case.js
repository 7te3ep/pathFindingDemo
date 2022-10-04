import {c, ctx} from "../main.js";

class Case {
    constructor(x,y,block,isObjective,score){
        this.x = x
        this.y = y
        this.score = score
        this.block = block
        this.objective = isObjective
        this.hasExpand = false
    }

    expand(caseArray){
        if (this.hasExpand == false){
            for (let i = 0;i<caseArray.length;i++){
                if (caseArray[i].x == this.x+100 && caseArray[i].y == this.y ||
                    caseArray[i].x == this.x-100 && caseArray[i].y == this.y ||
                    caseArray[i].y == this.y+100 && caseArray[i].x == this.x ||
                    caseArray[i].y == this.y-100 && caseArray[i].x == this.x){
                    if (caseArray[i].score == "none" && caseArray[i].block == false){
                        caseArray[i].score = this.score + 1
                        this.hasExpand == true
                    }
                }
            }
        }
    }

    draw(){
        ctx.fillStyle = 'green'
        if (this.block){
            ctx.fillStyle = 'black'
        }
        if (this.objective){
            ctx.fillStyle = 'pink'
        }
        ctx.fillRect(this.x, this.y, 100, 100);
        ctx.font = "bold 30px arial";
        ctx.fillStyle = "rgba(0,0,0,0.1)";
        if (this.block){
            this.score = 100
        }
        if (this.score != "none" ||this.score != 100 ){
            ctx.fillText(`${this.score}`, this.x+40,this.y+60);
        }
    }
}

export {Case};
