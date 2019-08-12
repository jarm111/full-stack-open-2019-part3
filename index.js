require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const Person = require('./models/person')
const port = process.env.PORT

// let persons = [
//   { 
//     "name": "Arto Hellas", 
//     "number": "040-123456",
//     "id": 1
//   },
//   { 
//     "name": "Ada Lovelace", 
//     "number": "39-44-5323523",
//     "id": 2
//   },
//   { 
//     "name": "Dan Abramov", 
//     "number": "12-43-234345",
//     "id": 3
//   },
//   { 
//     "name": "Mary Poppendieck", 
//     "number": "39-23-6423122",
//     "id": 4
//   }
// ]

app.use(bodyParser.json())
app.use(cors())

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.use(express.static('build'))

app.get('/info', (req, res) => {
  const entries = persons.length
  const currentTime = new Date();
  const text = `
    <p>Phonebook has info for ${entries} people</p>
    <p>${currentTime}</p>
  `

  res.send(text)
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(people => {
    res.json(people)
  })
})

// app.get('/api/persons/:id', (req, res) => {
//   const id = Number(req.params.id)
//   const person = persons.find(e => e.id === id)
//   person 
//     ? res.json(person)
//     : res.status(404).end()

// })

// app.delete('/api/persons/:id', (req, res) => {
//   const id = Number(req.params.id)
//   if (!persons.some(e => e.id === id)) {
//     return res.status(404).end()
//   }
//   persons = persons.filter(e => e.id !== id)
//   res.status(204).end()
// })

// app.post('/api/persons/', (req, res) => {
//   const {name, number} = req.body

//   if (!name || !number) {
//     return res.status(400).json({error: 'missing name or number'})
//   }

//   if (persons.some(e => e.name === name)) {
//     return res.status(400).json({error: 'name must be unique'})
//   }

//   const id = Math.floor(Math.random() * 100000) + 6;
//   const newPerson = {id, name, number}
//   persons = persons.concat(newPerson)
//   res.json(newPerson)
// })

app.listen(port, () => {
  console.log(`Phonebook backend running on port ${port}`)
})