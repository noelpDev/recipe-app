
const express = require('express')
const router = express.Router()
const guestController = require('../controllers/guest')
const { ensureGuest } = require('../middleware/auth')


// router.get('/', ensureGuest, guestController.getRecipes)

// router.get('/ingredients', ensureGuest, guestController.getIngredients)

router.get('/', guestController.getRecipes)

router.get('/ingredients', guestController.getIngredients)

module.exports = router