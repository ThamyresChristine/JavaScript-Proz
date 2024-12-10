var nome = prompt("Olá usuário! Por favor, digite seu nome:");
var altura = prompt("Olá " + nome + " Agora digite sua altura Em Centímetros:");
var peso = prompt("E por fim, digite seu peso:")
        
        altura = parseFloat(altura)
        peso = parseFloat(peso);

        altura = altura/100;

        Imc = (peso / (altura**=2));    
    
        if (Imc < 16.00){
            document.write("<br> " + nome + ", você possui o IMC = " + Imc + ", sendo classificado como 'Peso baixo - muito grave'.");
        } else if (Imc > 16.00 && Imc < 16.99) {
            document.write("<br> " + nome + ", você possui o IMC = " + Imc + ",  sendo classificado como 'Peso baixo - grave'.");
        } else if (Imc > 17.00 && Imc < 18.49) {
            document.write("<br> " + nome + ", você possui o IMC = " + Imc + ",  sendo classificado como 'Peso baixo'.");
        } else if (Imc > 18.50 && Imc < 24.99) {
            document.write("<br> " + nome + ", você possui o IMC = " + Imc + ",  sendo classificado como 'Peso normal'.");
        } else if (Imc > 25.00 && Imc < 29.99) {
            document.write("<br> " + nome + ", você possui o IMC = " + Imc + ",  sendo classificado como 'Sobrepeso'.");
        } else if (Imc > 30.00 && Imc < 34.99) {    
            document.write("<br> " + nome + ", você possui o IMC = " + Imc + ",  sendo classificado como 'Obesidade grau I'.");
        } else if (Imc > 35.00 && Imc < 39.99) {    
            document.write("<br> " + nome + ", você possui o IMC = " + Imc + ",  sendo classificado como 'Obesidade grau II'.");
        } else if (Imc > 40.00) {    
            document.write("<br> " + nome + ", você possui o IMC = " + Imc + ",  sendo classificado como 'Obesidade grau III'.");    
        } else {    
            document.write("Dados incompletos ou inconsistentes");
        } 
