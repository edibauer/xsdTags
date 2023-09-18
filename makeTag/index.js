const { create } = require ('xmlbuilder2')
const fs = require('node:fs')

const xmlStr = '<root att="val"><foo><bar>foobar</bar></foo></root>'
const doc = create(xmlStr)

doc.root().ele('baz')

const xml = doc.end({ prettyPrint: true })

fs.writeFileSync('part.xml', xml)

//console.log(xml)