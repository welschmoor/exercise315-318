const mongoose = require("mongoose")

if (process.argv.length < 3) {
  console.log("Password as 3rd argument for your command!")
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://user:${password}@cluster0.zdp3e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(url)

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Contact = mongoose.model("Contact", contactSchema)

// if no contact specified in command line, then list all entries.
if (process.argv.length === 3) {
  Contact.find({}).then((res) => {
    res.forEach((contact) => {
      console.log(contact)
    })
    mongoose.connection.close()
    process.exit(1)
  })
  return // this return is needed so no empty object is added to db
}

// add new contact per cmd
const contact = new Contact({
  name: process.argv[3],
  number: process.argv[4],
})

contact.save().then((res) => {
  console.log(res)
  console.log(`added ${res.name} number ${res.number} to phonebook`)
  mongoose.connection.close()
})
