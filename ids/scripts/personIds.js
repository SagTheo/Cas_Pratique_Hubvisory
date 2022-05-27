import lineReader from 'line-reader'
import fs from 'fs'

let counter = 0

lineReader.eachLine('../data/originalIds/person_ids_05_26_2022.json', function(line, last) {
    const content = JSON.parse(line).id + ', '
    counter++

    fs.writeFile('../data/first_100000/personIds_100000.txt', content, { flag: 'a+' }, err => {
        if (err) throw err
    })

    if (counter === 100000) {
        fs.writeFile('../data/first_100000/personIds_100000.txt', ']', { flag: 'a+' }, err => {
            if (err) throw err
        })

        console.log('File written successfully')

        return false
    } 
})

