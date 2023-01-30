
console.log ('generiamo la costante che prende il file tramite id')



const passwordGenerator = document.getElementById('passwordGenerator')

console.log ('dichiaro tutte le variabili che mi servono')
let nome 

let cognome

let colore

let numero




console.log ('applico i prompt per ogni richiesta da fare al client')

nome = prompt('Ciao utente, come ti chiami ?')
console.log ('il suo nome è =', nome)

cognome = prompt('E il tuo cognome?')
console.log ('il suo nome è =', cognome)

colore = prompt('Dimmi adesso il tuo colore preferito')
console.log ('il suo nome è =', colore)

numero = prompt('Infine, il tuo numero fortunato')
console.log ('il suo nome è =', numero)



console.log('ora che ho tutti i dati posso generare la password ')


passwordGenerator.innerHTML = nome + cognome + colore + numero






