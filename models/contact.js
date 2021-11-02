const mongoose = require("mongoose")
const url = process.env.MONGODB_URI

console.log("connecting to ", url)

mongoose.connect(url).then((res) => {
    console.log("connected to Mongo")
  }).catch((error) => {
    console.error("Error message: ", error.message)
  })

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
})

contactSchema.set("toJSON", { // this is to return id as string and to delete __v from being returned to frontend
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model("Contact", contactSchema)
