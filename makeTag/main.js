const data = require('./sourcePart.json')
const fs = require('node:fs')
const { create } = require('xmlbuilder2')

// data or functions
const xmlns_xsd = 'http://www.w3.org/2001/XMLSchema'
const xmlns = 'http://soriana.com/pi/IF_0590_Participantes'
const targetNamespace = 'http://soriana.com/pi/IF_0590_Participantes'

const xsd = 'xsd:complexType'

const first = data[0]
// console.log(first)

const xmlSchema = `<xsd:schema xmlns:xsd="${ xmlns_xsd }" xmlns="${ xmlns }" targetNamespace="${ targetNamespace }"></xsd:schema>`

// create xml
const doc = create(xmlSchema)
doc.root().ele(xsd)

// render
const xml = doc.end({ prettyPrint: true })

// create file
fs.writeFileSync('test1.xsd', xml)
