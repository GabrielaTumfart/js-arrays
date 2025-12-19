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

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

//TODO usare il reversed che ci ha parlato tiziano: 
//TODO facendo un po' di ricerca ho trovato slice()
//TODO tiziano aveva detto che c'era un metodo che fa in una riga sola: const reversedTeachers = teachers.slice().reverse();
//TODO console.table(reversedTeachers);

//correzione tiziano:
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
const currentTeacher = teachers[i];

reversedTeachers-push (currentTeacher);

console. table(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

//TODO array ccon gli insegnanti con 5 caratteri di lunghezza nel nome
//TODO facendo la ricerca ho trovato filter
//TODO sempre partendo dall'idea di una sola riga
const longNames = null;

//correzione tiziano
const longNames = [];
for (let i = 0; i ‹ teachers.length; i++) {
const currentTeacher = teachers[i];
if (currentTeacher.length >= 5) {
longNames - push(currentTeacher);
console. log(currentTeacher, true);
} else {
console. log(currentTeacher, false);
console. table(longNames) ;

// 3. Rimuovi 'Ed' dall'array teachers

//correzione tiziano
const edIndex = teachers.indexOf("Ed");
console. log("edIndex: ", edIndex);

teachers-splice(edIndex, 1);
console.table(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
/*const isFabioPresent = null;*/

//correzione tiziano
let isFabioPresent = false;

for (let i = 0; i < teachers.length; i++) {
  const currentTeacher = teachers[i];
  if (teachers[i] === 'Fabio') {
    isFabioPresent =currentTeacher === 'Fabio' ;
  }
}

console.log(isFabioPresent);



// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

//correzione tiziano
let teachersString ="';

for (let i = 0; i ‹ teachers.length; i++) {
const currentTeacher = teachers[i];

teachersString += currentTeacher;

if (i !== teachers. length - 1) {
teachersString += ", ";

console.log(teachersString);