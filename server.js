import express from 'express'
import cors from 'cors'
import multer from 'multer'
import morgan from 'morgan'

import { addBeitrag, getBeitraege } from './controller/BeitragCotnroller'

const PORT = 9898
const app = express()

const upload = multer({})

app.use(morgan('dev'))
app.use('/public', express.static('public'))
app.use(cors())

app.get('./beitrag', getBeitrag)
app.post('/beitrag', upload.single('profile)'), addBeitrag)

app.listen(PORT, () => console.log('Beitraege sind zu sehen auf:', PORT))