import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const contactSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Contact = mongoose.model('Contact', contactSchema)

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const [ ,, password, name, number ] = process.argv

if(password && name && number) {
  const contact = new Contact({
    name,
    number
  })

  contact.save().then(result => {
    const { name, number } = result
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else if(password && !name && !number) {
  Contact.find().then(result => {
    console.log('phonebook:')
    for(const contact of result) {
      console.log(`${contact.name} ${contact.number}`)
    }
    mongoose.connection.close()
  })
} else {
  mongoose.connection.close()
}


