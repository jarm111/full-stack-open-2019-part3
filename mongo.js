/* globals process */

const mongoose = require('mongoose')
const [ , , password, name, number] = process.argv
const dbName = 'phonebook'

if (!password) {
  console.log('missing password as argument')
  process.exit(1)
}

const url =
  `mongodb+srv://fs-open-user:${password}@fullstack-open-2019-s1lal.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })
  .catch(error => console.error('DB connect error:', error))

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const findPerson = () => {
  Person.find({}).then(res => {
    console.log('phonebook:')
    res.forEach(p => console.log(`${p.name} ${p.number}`))
    mongoose.connection.close()
  })
}

const addPerson = () => {
  const person = new Person({
    name,
    number
  })

  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

(name && number) ? addPerson() : findPerson()
