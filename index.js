// Desafio pela DIO para Javascript usando o motor Node JS;
//Made by Luiz Felipe
//07/01/2024

let characterName = "Darkline"
let xpQuantities = [900, 1500, 3150, 5160, 7900, 8776, 9200, 15000, 2000000]
let level;
let counter = 0

for (counter = 0; counter < 9; counter++){
    if (xpQuantities[counter] < 1000){
        level = "Ferro"
    }
    else if(xpQuantities[counter] > 1000 && xpQuantities[counter] <= 2000 ){
        level = "Bronze"
    }
    else if(xpQuantities[counter] > 2000 && xpQuantities[counter] <= 5000 ){
        level = "Prata"
    }
    else if(xpQuantities[counter] > 5000 && xpQuantities[counter] <= 7000 ){
        level = "Ouro"
    }
    else if(xpQuantities[counter] > 7000 && xpQuantities[counter] <= 8000 ){
        level = "Platina"
    }
    else if(xpQuantities[counter] > 8000 && xpQuantities[counter]<= 9000 ){
        level = "Ascendente"
    }
    else if(xpQuantities[counter] > 9000 && xpQuantities[counter] <= 10000 ){
        level = "Imortal"
    }
    else if(xpQuantities[counter] > 10000 && xpQuantities[counter] <= 1000000){
        level = "Radiante"
    }
    else if (xpQuantities[counter] > 1000000){
        level = "Grão Mestre Felipão"
    }
    console.log("============================================================")
    console.log("O herói de nome " + characterName + " está no nivel " + level)
    
}

console.log("\n")

