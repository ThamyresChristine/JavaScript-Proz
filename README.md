# JavaScript - Proz
Exercícios realizados na disciplina 'Linguagem de Programação' ministrada por mim na Escola Proz

<hr>

## **Variáveis, Operadores Aritméticos, Concatenação, Relacionais e Lógicos**

**Q1.** Crie um programa cujo objetivo é inserir seus dados pessoais (nome, idade, gênero e cidade) e armazenar em cada variável determinada e depois exibidos na tela.

```
var nome = prompt("Digite seu nome: ")

var idade = prompt("Agora, informe sua idade:")

var genero = prompt("Informe o gênero: ") 

var cidade = prompt("Informe onde você mora:")

document.write("Olá, " + nome + ", vc tem " + idade + " anos de idade.Seu gênero é " + genero + " e vc mora em " + cidade + ".")
```

Q2. Dado o cálculo 12 * 3 + 4 - 8 / 2 % 3, qual o resultado segundo a precedência de operadores?

```
//Adicionar parênteses só para confirmar 
var calculo =  (12 * 3) + 4 - (8 / 2) % 3

document.write(" O resultado da expressão 12 * 3 + 4 - 8 / 2 % 3 é: " + calculo)
```

Q3. Crie um programa que utilize os métodos de Strings, onde o usuário envia uma frase e o programa exibe as informações dessa frase (tamanho, letra maiúscula, letra minúscula, substring e index).

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
