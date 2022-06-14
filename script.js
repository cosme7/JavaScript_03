//1 - Criar um loop que conte de 1 até 10 usando FOR

for(let number = 1; number <= 10; number++){
    console.log ('Resposta 1º questão:' ,number);
}
console.log('-----------------------')
//2 - Criar um loop que conte de 10 até 1 usando WHILE

let number = 10;
while(number >=1){
    console.log('Resposta 2º questão:' ,number)
    number--;
}
console.log('----------------------')
//3 - Criar um loop que conte todos os números ímpares de 1 até 100

for(let numImpar = 1; numImpar <= 100; numImpar+=2){
    console.log ('Resposta 3º Questão Impares:' ,numImpar);
}
console.log('-------------------------------')
//4- Criar um loop que conte todos os números pares de 0 a 100

let numPar = 0;
while(numPar <=100){
    console.log('Resposta 4º Questão Pares:' ,numPar)
    numPar+=2;
}
//3 - Criar um loop que conte todos os números ímpares de 1 até 100
console.log('>>>>>>>> BÔNUS COM IF <<<<<<<<')
for(let number = 1; number <= 100; number++){
    if(number %2 !== 0)
    console.log ('Resposta BÔNUS com IF FOR 3º Impar:' ,number);
}
console.log('--------------------------------------')
//4- Criar um loop que conte todos os números pares de 0 a 100

let numero = 0;
while(numero <=100){
    if(numero %1 == 0)
    console.log('Resposta BÔNUS com IF WHILE 4º Par:' ,numero)
    numero+=2;
}
console.log('---------------------------------------')