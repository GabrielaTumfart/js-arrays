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
//TODO tiziano aveva detto che c'era un metodo che fa in una riga sola
const reversedTeachers = teachers.slice().reverse();
console.table(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

//TODO array ccon gli insegnanti con 5 caratteri di lunghezza nel nome
//TODO facendo la ricerca ho trovato filter
//TODO sempre partendo dall'idea di una sola riga
const longNames = null;

// 3. Rimuovi 'Ed' dall'array teachers

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;