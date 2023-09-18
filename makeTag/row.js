const { nameAtt } = require('./nameAtt.js')
const { typeAtt } = require('./typeAtt.js')
const { occAtt } = require('./occAtt.js')

// data or fucntions
let body = []

/* let row = []
const initTag = '<xsd:element ' // without >
const finaltag = '/>' */

/* // nameAtt
const nameAtt = (campo) => {
    // data or functions
    const name = `name="${ campo }" ` // put final space
    row.push(name)
} */

// typeAtt
/* const typeAtt = (dato) => {
    // data or funtions
    let type = ''

    if (dato == "character") {
        type = `type="xsd:string" `
    } else if (dato == "Date") {
        type = `type="xsd:date" `
    } else if (dato == "number") {
        type = `type="xsd:integer" `
    }

    row.push(type)
} */

// ocurrence
/* const occAtt = (ocurrencia) => {
    // data or functions
    let ocu = ''

    if (ocurrencia === '1…1') {
        ocu = ` `
    } else if ( ocurrencia === '0…1') {
        ocu = `min Occurs="0" `
    }

    row.push(ocu)
} */

// main
const createRow = (n, t, o, val) => {
    // data or functions
    let row = []
    let finalRow = ''
    const initTag = '<xsd:element ' // without >
    const finaltag = '/>'

    // if campo
    if (val === 'Campo') {

        row.push(initTag) // init tag

        const name = nameAtt(n) // 'payeeId'
        row.push(name)

        const type = typeAtt(t) // 'number'
        row.push(type)

        const occ = occAtt(o) // '0…1'
        row.push(occ)

        row.push(finaltag) // end tag

        // converting
        finalRow = row.toString().replaceAll(',', '')

        return finalRow
    }

}

/* createRow()
console.log(row)

let finalRow = row.toString().replaceAll(',', '')
console.log(finalRow) */

// console.log(createRow('payeeId', 'number', '0…1'))

// export
module.exports = { createRow }

