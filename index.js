const express = require('express')
const app = express()
const port = 3001

const persons = [
  { 
    "name": "Arto Hellas", 
    "number": "040-123456",
    "id": 1
  },
  { 
    "name": "Ada Lovelace", 
    "number": "39-44-5323523",
    "id": 2
  },
  { 
    "name": "Dan Abramov", 
    "number": "12-43-234345",
    "id": 3
  },
  { 
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122",
    "id": 4
  }
]

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
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(e => e.id === id)
  person 
    ? res.json(person)
    : res.status(404).end()

})

app.listen(port, () => {
  console.log(`Phonebook backend running on port ${port}`)
})