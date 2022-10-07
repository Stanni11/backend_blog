import { readFromFile, writeIntoFile } from "../util/fileStorage.js"
export const getBeitrag = (req, res) => {
    readFromFile('pirates.json')
        .then(data => res.status(200).json(JSON.parse(data)))
        .catch(err => {
            console.log(err)
            res.status(500).end()
        })
    // daten senden
}

export const addBeitrag = (req, res) => {
    const beitrag = {
        Photo: req.body.profilename,
        Beitragstext: req.file.path
    }
    readFromFile('pirates.json')
        .then(data => JSON.parse(data))
        .then(obj => {
            obj.push(beitrag)
            writeIntoFile('beitrag.json', JSON.stringify(obj))
                .then(() => res.status(200).end())
                .catch(err => {
                    console.log(err)
                    res.status(500).end()
                })
        })
}