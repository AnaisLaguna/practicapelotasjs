let ballColor = ""
let ballNum = 0

function bingoGame (ballColor,ballNum){
    let result = ""
    if ((ballColor == "rojo"||"red") && (ballNum == 7)){
        result = "Felicidades! Ganaste el primer premio!!"
    } else if ((ballColor== "verde" || "green")&& (ballNum == 2)) {
        result = "Felicidades! Eres acreedor al segundo premio!"
    } else {
        result = "Seguro tendrás más suerte la próxima vez!"
    }
    return result
}

console.log (bingoGame("rojo",3));
console.log (bingoGame("red",7));
console.log(bingoGame("verde",2));