const initSchema = require('./schema.js')
const initComplex = require('./complex.js')
const initSeq = require('./sequence.js')
const middle = require('./body.js')
const endSeq = require('./finalsequence.js')
const endComplex = require('./finalComplex.js')
const endSchema = require('./finalSchema.js')
const fs = require('node:fs')

/* console.log(initSchema)
console.log(middle)
console.log(initSeq) */

let main_xsd = []

// putting
const createXSD = () => {
    // init
    main_xsd.push(initSchema)
    main_xsd.push(initComplex)
    main_xsd.push(initSeq)

    // for to middle
    for (let i = 0; i < middle.length; i++) {
        if (middle[i] !== undefined) {
            main_xsd.push(middle[i])
        }
    }

    // end
    main_xsd.push(endSeq)
    main_xsd.push(endComplex)
    main_xsd.push(endSchema)
}

createXSD()
// console.log(main_xsd)

const finalXSD = main_xsd.toString().replaceAll(',', '')
// console.log(finalXSD)

fs.writeFileSync('final.xsd', finalXSD)