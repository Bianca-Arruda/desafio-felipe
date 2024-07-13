let result
let herois = [
  ["Arthur", 7200],
  ["Lancelot", 1956],
  ["Guinevere", 6203],
  ["Merlin", 3369],
  ["Morgana", 230],
  ["Excalibur", 8623],
  ["Gawain", 102315],
  ["Viviane", 9036]
]

for(let i=0; i<8; i++){
    if(herois[i][1] < 1000){
        result = "Ferro"
    } else if(herois[i][1] <= 2000){
        result = "Bronze"
    } else if(herois[i][1] <= 5000){
        result = "Prata"
    } else if(herois[i][1] <= 7000){
        result = "Ouro"
    } else if(herois[i][1] <= 8000){
        result = "Platina"
    } else if (herois[i][1] <= 9000){
        result = "Ascendente"
    } else if(herois[i][1] <= 10000){
        result = "Imortal"
    } else {
        result = "Radiante"
    }
    console.log("O Herói de nome " + herois[i][0] + " está no nível de " + result)
}