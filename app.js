let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';
let nombre = '';
let edad = 0;
let lenguajeProgramacion = '';

// Escribe tu código aquí
nombre = prompt('Ingrese su nombre:');
edad = parseInt(prompt('Ingrese su edad:'));
lenguajeProgramacion = prompt('Ingrese su lenguaje de programación:'); 

if (numeroUn == stringUn) {
    console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')

} else {

  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')

}
if (numeroTreinta === stringTreinta) {
    console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')

} else {

  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')

}
if (numeroDiez != stringDiez) {
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')

} else {

  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')

}
if (edad >= 18 && (lenguajeProgramacion === 'JavaScript' || lenguajeProgramacion === 'Python' || lenguajeProgramacion === 'Ruby')) {
    console.log(`Hola ${nombre}, eres mayor de edad y aprendes ${lenguajeProgramacion}`)
  } else {  
    console.log(`Hola ${nombre}, eres menor de edad y aprendes ${lenguajeProgramacion}`)
  }