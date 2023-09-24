//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo: 
/* 
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */


let nomeHeroi = "homem aranha"
let xp = 2001


/*if (nomeHeroi = "homem aranha") {
        if(xp > 0){
    console.log('verificar o nivel do heroi')
    
   }
}*/

switch (xp){
    case (xp <= 1000):
        console.log("Ferro")
        break
    case  (xp >= 1001) && (xp <= 2000):
            console.log("Bronze") 
            break
    case (xp >= 2001) && (xp <= 5000):
            console.log("Prata") 
            break
    case (xp >= 6001) && (xp <= 7000):
            console.log("Ouro") 
            break
    case (xp >= 7001) &&  (xp<= 8000):
            console.log("Platina") 
            break
    case (xp >= 8001) && (xp <= 9000):
            console.log("Ascendente") 
            break
    case (xp >= 9001) &&  (xp<= 10000):
            console.log("Imortal")
            break  
    case (xp >= 10000):
            console.log("Radiante")
            break 
    default:
        console.log("numero invalido")  
}   

 