const express = require("express");
const app = express();
//mongoose stuff
const mongoose = require('mongoose');
const ShoppingList = require("./models/ShoppingList");
mongoose.connect(process.env.DATABASE_URL)
mongoose.connect(db_url)
const db = mongoose.connection
db.once("open", () => console.log("connected to mongoDB"))

app.get('/shoppinglists', (req, res) => {
    ShoppingList.find().then((results) => res.status(200).json(results))
})

app.post('/shoppinglists', (req, res) => {
    const newShoppingList = new ShoppingList(req.body)
    newShoppingList.save()
    res.status(201).json(newShoppingList)
})

app.get('/shoppinglists/:shoppinglistId', (req, res) => {
    ShoppingList.findById(req.params.ShoppingListId)
      .then((results) => {
        if (results) {
          res.status(200).json(results)
        } else {
          res.status(404).json({ message: 'not found' })
        }
      })
      .catch((error) => res.status(400).json({ message: 'Bad request' }))
  })
  
const config = { port: process.env.PORT || 3000 };
app.use(express.json)