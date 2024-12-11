# JavaScript - Proz
Exercícios realizados durante a disciplina 'Linguagem de Programação', ministrada no curso de _Desenvolvimento de Sistemas_ da Escola Proz

<hr>

### **Variáveis, Operadores Aritméticos, Concatenação, Relacionais e Lógicos - parte 1**

**Q1.** Crie um programa cujo objetivo é inserir seus dados pessoais (nome, idade, gênero e cidade) e armazenar em cada variável determinada e depois exibidos na tela.
```
var nome = prompt("Digite seu nome: ")

var idade = prompt("Agora, informe sua idade:")

var genero = prompt("Informe o gênero: ") 

var cidade = prompt("Informe onde você mora:")

document.write("Olá, " + nome + ", vc tem " + idade + " anos de idade.Seu gênero é " + genero + " e vc mora em " + cidade + ".")
```
**Q2.** Dado o cálculo 12 x 3 + 4 - 8 / 2 % 3, qual o resultado segundo a precedência de operadores?
```
//Adicionar parênteses só para confirmar 
var calculo =  (12 * 3) + 4 - (8 / 2) % 3

document.write(" O resultado da expressão 12 * 3 + 4 - 8 / 2 % 3 é: " + calculo)
```
**Q3.** Crie um programa que utilize os métodos de Strings, onde o usuário envia uma frase e o programa exibe as informações dessa frase (tamanho, letra maiúscula, letra minúscula, substring e index).
```
var filme ="Vingadores - Guerra Infinita"

//tamanho - quantidade de caracteres
document.write("<br>A quantidade de caracteres é : " + filme.length)

//letra minúscula
document.write("<br>Texto em letras maiúsculas: " + filme.toLowerCase())

//letra maiúscula
document.write("<br>Texto em letras minúscúsculas: " + filme.toUpperCase())

//substring
document.write("<br>Texto cortado: " + filme.substring(12, 20))

//index da letra G
document.write("<br>index da letra G: " + filme.indexOf("G"))

```
### **Variáveis, Operadores Aritméticos, Concatenação, Relacionais e Lógicos - parte 2**

**Q1.** Crie um programa que peça ao usuário para inserir dois números. Verifique se eles são iguais e exiba uma mensagem indicando o resultado.
```

```
**Q2.** Crie um programa que peça ao usuário para inserir dois números. Verifique se eles são pares e exiba uma mensagem indicando o resultado.
```

```
**Q3.** Crie um programa que peça ao usuário para inserir dois números. Verifique se eles são ímpares e exiba uma mensagem indicando o resultado.
```

```
**Q4.** Crie um aplicativo que calcule o Índice de Massa Corporal (IMC) de uma pessoa. Peça o peso e a altura, e calcule o IMC usando a fórmula: IMC = peso / (altura * altura). E por fim, indique, de acordo com o resultado, se a pessoa está: 
* Abaixo do normal
* Normal
* Sobrepeso
* Obesidade grau I
* Obesidade grau II
* Obesidade grau III
```

```
**Q5.** Desenvolva um jogo interativo de pedra, papel e tesoura onde o usuário pode competir contra o computador. Dica: utilize o método de Matemática random para criar um número aleatório.
```

```
### **Funções**

**Q1.** Para um site de e-commerce, desenvolva um programa com uma função que calcula o preço total com base na quantidade de produtos inserida pelo usuário. A entrada é recebida como uma string e precisa ser convertida em um número inteiro antes de ser multiplicada pelo preço unitário.
```

```
**Q2.** Desenvolva um programa para aplicar descontos aplicativo que ajuda os usuários a rastrear seus gastos. Como parte deste aplicativo, os usuários podem inserir o preço de um produto, o valor do desconto e o aplicativo calcula o valor total após aplicar um desconto.
```

```
**Q3.** Desenvolva uma calculadora.
```

```
### Laços de Repetição + Datas + POO - Programação Orientada a Objetos

**Q1.** Desenvolva um programa que informa a tabuada de um número inserido pelo usuário.
```

```
**Q2.** Conforme com o que você aprendeu sobre manipulação de datas, faça as contas: quantos dias se passaram da data do seu nascimento até o dia de hoje?
```

```
**Q3.** Utilizando a programação Orientada a Objetos, monte um modelo de construção de um sistema de uma das empresas abaixo: 
* Netflix
* Ifood
* Airbnb
* Uber/99
```

```
