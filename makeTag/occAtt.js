// occAtt
const occAtt = (ocurrencia) => {
    // data or functions
    let ocu = ''

    if (ocurrencia === '1…1') {
        ocu = ` `
    } else if ( ocurrencia === '0…1') {
        ocu = `minOccurs="0" `
    }

    // row.push(ocu)
    return ocu
}

module.exports = { occAtt }