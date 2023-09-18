// typeAtt
const typeAtt = (dato) => {
    // data or funtions
    let type = ''

    if (dato == "character") {
        type = `type="xsd:string" `
    } else if (dato == "Date") {
        type = `type="xsd:date" `
    } else if (dato == "number") {
        type = `type="xsd:integer" `
    }

    // row.push(type)

    return type
}

module.exports = { typeAtt }