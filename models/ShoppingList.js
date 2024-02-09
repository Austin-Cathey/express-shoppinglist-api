

const mongoose = require('mongoose')
const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

const shoppingListSchema = new mongoose.Schema({
    title: {type: String, max: 50, required: true},
    createdAt: {type: Date, timestamp: true},
    updatedAt: {type: Date, timestamp: true},
    items: [{
        name: String,
        quantity: Number,
        purchased: Boolean
}]

})

module.exports = mongoose.model('ShoppingList', shoppingListSchema)