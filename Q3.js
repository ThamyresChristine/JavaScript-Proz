var numUm = prompt("Digite um número: ")

var numDois = prompt("Digite outro número: ")

if (numUm % 2 != 0 && numDois% 2 != 0 ) {
    document.write("Os números são ímpares.")
    document.write(numUm + " e " + numDois)
}  else if (numUm % 2 != 0 || numDois% 2 != 0 ) {
    document.write("Um dos números é par.")
    document.write(numUm + " e " + numDois)
} else {
    document.write("Os números não são ímpares.")
    document.write(numUm + " e " + numDois)

}