const data = require('./sourcePart.json')
const { createRow } = require('./row.js')

// data or fucntions
let middle = []

// console.log(data[2])
const test = {
    'Nivel S': 3,
    'Tipo S': 'Campo',
    'Nombre campo S': 'payeeId',
    'Tipo Dato S': 'character',
    'Longitud S': 40,
    'Ocurrencia S': '1…1',
    'Ejemplo S': 2365897451
}

// console.log(createRow(test['Nombre campo S'], test['Tipo Dato S'], test['Ocurrencia S'], test['Tipo S']))

// const tag = createRow(test['Nombre campo S'], test['Tipo Dato S'], test['Ocurrencia S'], test['Tipo S'])
// console.log(tag)

// body.push(tag) // put in array
// console.log(body)

// main test
data.forEach(e => {
    const tag = createRow(e['Nombre campo S'], e['Tipo Dato S'], e['Ocurrencia S'], e['Tipo S'])

    middle.push(tag)
});

// console.log(middle)

module.exports = middle 
