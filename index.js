// fullstackopen, exercises 3.15-3.18 completed. 
// Error Handler added, Delete, Updating Notes works.
// const { response } = require("express")

require("dotenv").config()

const express = require("express")
const app = express()
const morgan = require("morgan")

const cors = require("cors")
app.use(cors())

const Contact = require("./models/contact")
const url = process.env.MONGODB_URI

const requestLogger = (request, response, next) => {
  console.log("1 Method:", request.method)
  console.log("2 Path:  ", request.path)
  console.log("3 Body:  ", request.body)
  console.log("---")
  next()
}

app.use(express.json())
app.use(requestLogger)
// exercise 3.8
morgan.token("type", function (req, res) {
  return JSON.stringify(req.body)
})
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :type"))
app.use(express.static("build"))

//////////////////////////////////////////////
// GET ALL Mongo
app.get("/api/persons", (req, res) => {
  Contact.find({}).then((contacts) => {
    res.json(contacts)
  })
})

//////////////////////////////////////////////
// GET INDIVIDUAL CONTACTS Mongo
app.get("/api/persons/:id", (req, res) => {
  Contact.findById(req.params.id).then((contact) => {
    res.json(contact)
  })
})

////////////////////////////////////
// OLD DELETE
// app.delete("/api/persons/:id", (req, res) => {
//   const reqId = +req.params.id
//   persons = persons.filter((e) => e.id !== reqId)

//   res.status(204).end()
// })

/////////////////////////////////////////////
// DELETE Mongo
app.delete("/api/persons/:id", (req, res) => {
  Contact.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end()
    })
    .catch((error) => console.log("<><><><><><><><>Delete error: ", error))
})

//////////////////////////////////////////////
// POST Mongo
app.post("/api/persons", (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    // send back json with error if name or num not entered
    return res.status(400).json({
      error: "Name or phone num not entered!",
    })
  }

  const newContact = new Contact({
    name: body.name,
    number: body.number,
  })

  newContact.save().then((savedContact) => {
    console.log("Contact saved")
    res.json(savedContact)
  })
})


//////////////////////////////////////////////
// PUT Mongo
app.put("/api/persons/:id", (req, res, next) => {
  const body = req.body
  console.log(body)
  const newContact = {
    name: body.name,
    number: body.number,
  }
  Contact.findByIdAndUpdate(req.params.id, newContact, { new: true })
    .then((changedContact) => {
      res.json(changedContact)
    })
    .catch((error) => next(error))
})




///////////////////////////////////////////////////
// INFO
// had to use async await, because otherwise the code loads before we fetch data.
// probaly better done with an extra useState and use a separate component for /info
// so that the ui is rerendered after data is fetched etc.
app.get("/info", async (req, res) => {
  const number_of_entries = await Contact.find({}).then((contacts) => {
    console.log('INFOTEST', contacts.length, 'endINFOTEST')
    return contacts.length;   
  })


  const timeAndDate = new Date()
  res.send(`
        <p>Phonebooks has info for ${number_of_entries} people</p>
        ${timeAndDate}
    `)
})


/////////////////////////////////////////////
// Uknown Routes Handler
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" })
}
app.use(unknownEndpoint)

//////////////////////////////////////////////
//  Error Handler
const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" })
  }
  next(error)
}
app.use(errorHandler)

//////////////////////////////////////////////
// heroku specific env port:
const PORT = process.env.PORT // || 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// OLD CODE
// POST NEW
// app.post("/api/persons", (req, res) => {
//   const body = req.body // <add app.use(express.json()) on top else won't work

//   if (!body.name || !body.number) {
//     return res.status(400).json({
//       error: "Name missing!",
//     })
//   }

//   // handling duplicate names (I believe I don't need isDuplicate and can just do the logic inside if...):
//   let isDuplicate = false
//   persons.forEach((e) => {
//     if (e.name.trim().toLowerCase() === body.name.trim().toLowerCase()) {
//       isDuplicate = true
//     }
//   })
//   if (isDuplicate) {
//     return res.status(400).json({
//       error: "Name already exists!",
//     })
//   }

//   const maxId = persons.length > 0 ? Math.max(...persons.map((e) => e.id)) : 0
//   const newPerson = {
//     id: maxId + 1,
//     name: body.name,
//     number: body.number,
//   }

//   persons = persons.concat(newPerson)
//   res.json(newPerson)
// })
//
//
// :ID
// app.get("/api/persons/:id", (req, res) => {
//   const reqId = +req.params.id
//   const contact = persons.find((each) => each.id === reqId)

//   if (!contact) {
//     res.status(404).end()
//     return
//   }
//   res.json(contact)
// })

// let persons = [
//   {
//     id: 1,
//     name: "Arto Hellas",
//     number: "040-123456",
//   },
//   {
//     id: 2,
//     name: "Ada Lovelace",
//     number: "39-44-5323523",
//   },
//   {
//     id: 3,
//     name: "Dan Abramov",
//     number: "12-43-234345",
//   },
//   {
//     id: 4,
//     name: "Mary Poppendieck",
//     number: "39-23-6423122",
//   },
// ]

// app.get("/", (req, res) => {
//   res.send("<h1>Sup!</h1>")
// })
//
//
//


//
//