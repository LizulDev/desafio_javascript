// Desafio pela DIO para Javascript usando o motor Node JS;
//Made by Luiz Felipe
//07/01/2024

let characterName = "Darkline"
let xpQuantities = [900, 1500, 3150, 5160, 7900, 8776, 9200, 15000, 2000000]
let nivel;
let counter = 0

for (counter = 0; counter < 9; counter++){
    if (xpQuantities[counter] < 1000){
        nivel = "Ferro"
    }
    else if(xpQuantities[counter] > 1000 && xpQuantities[counter] <= 2000 ){
        nivel = "Bronze"
    }
    else if(xpQuantities[counter] > 2000 && xpQuantities[counter] <= 5000 ){
        nivel = "Prata"
    }
    else if(xpQuantities[counter] > 5000 && xpQuantities[counter] <= 7000 ){
        nivel = "Ouro"
    }
    else if(xpQuantities[counter] > 7000 && xpQuantities[counter] <= 8000 ){
        nivel = "Platina"
    }
    else if(xpQuantities[counter] > 8000 && xpQuantities[counter]<= 9000 ){
        nivel = "Ascendente"
    }
    else if(xpQuantities[counter] > 9000 && xpQuantities[counter] <= 10000 ){
        nivel = "Imortal"
    }
    else if(xpQuantities[counter] > 10000 && xpQuantities[counter] <= 1000000){
        nivel = "Radiante"
    }
    else if (xpQuantities[counter] > 1000000){
        nivel = "Grão Mestre Felipão"
    }
    console.log("============================================================")
    console.log("O herói de nome " + characterName + " está no nivel " + nivel)
    
}

console.log("\n")

