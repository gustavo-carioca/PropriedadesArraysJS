const nomes = ['João', 'Gustavo', 'Matheus', 'Caio', 'Murilo', 'Pedro', 'Ana', 'Maria', 'Bruna', 'Nathalia']

console.log(nomes.length)

const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Divisão da sala 1 foi ${sala1}`)
console.log(`Divisão da sala 2 foi ${sala2}`)