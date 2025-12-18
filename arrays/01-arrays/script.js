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
// TODO      teachers[5] 'Lewis'
// TODO      teachers[6] 'Luca'

const fourthTeacher = teachers[3];

//*mi ha insegnato tiziano oggi nella lezione
/*let outputR = 0
let outputG = 0
let outputB = 0
let outputColor = 0

outputColor = background rgb (${outputR}; ${outputG}; ${outputB});  

console.log("L'insegnante della quarta posizione è:", % C + , fourthTeacher, outputColor); */

console.log("Il quarto insegnante elencato nell'array è: ",fourthTeacher); 



// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

// TODO      teachers[4] 'Carlo' quinto insegnate

teachers.splice(5,1, "Patrick");
console.table(teachers);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

// TODO      teachers[6] 'Luca' l'ultimo insegnate


const lastTeacher = null;

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = null;

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;