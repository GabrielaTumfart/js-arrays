const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
console.table(teachers);




// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

// TODO      devo fare:
// TODO      teachers[0] 'Nathan' primo insegnate 
// TODO      teachers[1] 'Ed'     secondo insegnante
// TODO      teachers[2] 'Fabio'  terzo insegnante
// TODO      teachers[3] 'Phil'   quarto insegnante
// TODO      teachers[4] 'Carlo'  quinto insegnante
// TODO      teachers[5] 'Lewis'  sesto insegnante
// TODO      teachers[6] 'Luca'   settimo insegnate

const fourthTeacher = teachers[3];

//*mi ha insegnato tiziano oggi nella lezione, ma non sono riuscita ancora.
/*let outputR = 0
let outputG = 0
let outputB = 0
let outputColor = 0

outputColor = background rgb (${outputR}; ${outputG}; ${outputB});  

console.log("L'insegnante della quarta posizione è:", % C + , fourthTeacher, outputColor); */

console.log("Il quarto insegnante elencato nell'array è: ",fourthTeacher); 



// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

// TODO      teachers[4] 'Carlo' quinto insegnate

teachers.splice(4,1, "Patrick");



// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

// TODO      teachers[6] 'Luca' l'ultimo insegnate

const lastTeacher = teachers;
console.table(lastTeacher);


teachers.pop();
console.table(teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

// TODO      teachers[0] 'Nathan' primo insegnate 

const firstTeacher = teachers;
console.table(lastTeacher);

teachers.shift();
console.table(teachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

teachers.push("Vanessa");
console.table(teachers);


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

teachers.unshift("Sarah");
console.table(teachers);


// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

// TODO      devo fare:
// TODO      teachers[0] 'Sarah' primo insegnate 
// TODO      teachers[1] 'Ed'     secondo insegnante
// TODO      teachers[2] 'Fabio'  terzo insegnante
// TODO      teachers[3] 'Phil'   quarto insegnante
// TODO      teachers[4] 'Patrick'  quinto insegnante
// TODO      teachers[5] 'Lewis'  sesto insegnante
// TODO      teachers[6] 'Vanessa'   settimo insegnate


const lewisIndex = teachers.indexOf("Lewis");
console.log("La posizione dell'insegnate 'Lewis' è: ",lewisIndex); 

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

//TODO Pseudo codice: 
/*
     verificare se l'arrey è vuota
    SE la lunghezza dell'array è 0
          sarà true
    ALTRIMENTI      
          sarà false

 */ 

      
const isTeachersEmpty = teachers.length(0);
console.table(isTeachersEmpty);