const XLSX = require('xlsx')
const fs = require('fs')

// read files
const readExcel = (path) => {
    const workbook = XLSX.readFile(path)
    const workbookSheets = workbook.SheetNames

    // console.log(workbookSheets) [array]

    const sheet = workbookSheets[0] // 01 Participantes
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]) 
    const finalData = JSON.stringify(dataExcel)

    fs.writeFileSync('sourcePart.json', finalData)
}

readExcel('par.xlsx')