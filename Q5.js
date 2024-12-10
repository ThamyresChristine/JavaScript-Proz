var bot = Math.ceil(Math.random(0,2))
/*
0 Pedra
1 Papel 
2 Tesoura
*/
var hum = prompt("Escolha: Pedra, Papel ou Tesoura")
hum = hum.toLowerCase();

var pontosBot = 0
var pontosVc = 0

if (hum == "pedra") {
    if (bot == 0) {
        document.write("empate") 
    } 
    if (bot == 1) {
        document.write("bot ganhou")
        pontosBot = pontosBot + 1; 
        
    }
    if (bot == 2) {
       document.write("vc ganhou") 
       pontosVc = pontosVc + 1
       
    }

} else if (hum == "papel") {
    if (bot == 0) {
        document.write("vc ganhou") 
        pontosVc = pontosVc + 1
        
    } 
    if (bot == 1) {
        document.write("empate") 
    }
    if (bot == 2) {
       document.write("bot ganhou") 
       pontosBot = pontosBot + 1;
       
    }
} else {
    if (bot == 0) {
        document.write("bot ganhou") 
        pontosBot = pontosBot + 1;
        
    } 
    if (bot == 1) {
        document.write("vc ganhou") 
        pontosVc = pontosVc + 1
    }
    if (bot == 2) {
       document.write("empate") 
    }
}

document.write("<br> Escolha do bot " + bot)
document.write("<br> Sua escolha " + hum)

document.write ("<br>Seu Total de pontos atualizados: " + pontosVc)
document.write ("<br>Total de pontos atualizados do Bot: " + pontosBot)




if (pontosBot == 10){ 
    document.write ("<br>Total de pontos atualizados do Bot: " + pontosBot + "Bot ganhou")

} else if (pontosVc == 10) {
    document.write ("<br>Seu Total de pontos atualizados: " + pontosVc + "Vc ganhou")

}
