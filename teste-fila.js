const Queue = require('./lib/Queue2')

let fila = new Queue()

console.log(fila)

fila.enqueue('Jurisvander')
fila.enqueue('Marineuza')
fila.enqueue('Valcinete')
fila.enqueue('Periclenes')
fila.enqueue('Astrogildo')

console.log(fila)

let proximo = fila.dequeue()
console.log({proximo})
console.log(fila)

fila.enqueue('Katinéia')

let primeiro = fila.peek()
console.log({primeiro})
console.log(fila) //mostra os dados dentro de uma tabela no console
