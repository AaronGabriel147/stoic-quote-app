// Mostly for reference:

// const router = require('express').Router();

// const foodData = [
//     {
//         id: 1,
//         name: 'Pizza',
//         price: '$10.00',
//         description: 'A delicious pizza',
//         image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
//     },
//     {
//         id: 2,
//         name: 'Burger',
//         price: '$5.00',
//         description: 'A delicious burger',
//         image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
//     }
// ]




// router.get('/', async (req, res) => {
//     try {
//         // const foodData = await module.find() // a normal structure for reference
//         // res.send(foodData.map(item => item)) // This worked but below may be better (below is Zac's
//         await res.status(200).json(foodData)
//     }
//     catch (error) {
//         res.status(500).json({ message: 'error.message' })
//     }
// })


// module.exports = router;