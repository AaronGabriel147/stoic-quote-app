const Quotes = require('./quotes-model.js');


// Once this works, refactor it with less curlies.
// Checks database for plant with matching id.
async function checkId(req, res, next) {
    const id = req.params.id;
    try {
        const quote = await Quotes.findById(id);
        if (!quote) res.status(404).json({ message: 'Quote ID not found' });
        else next();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// FOR NOW THIS IS COMMENTED OUT, we can require particular fields in the future.

// // I can add more logical conditions, like certain lengths, typeof, etc.
// // Checks payload for required fields.
// async function checkPayload(req, res, next) {
//     const payload = req.body;
//     try {
//         if (!payload.species ||
//             !payload.nickname ||
//             !payload.water_frequency) {
//             res.status(400).json({ message: 'Payload is missing.' });
//         } else {
//             next()
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }


module.exports = {
    checkId
    // checkPayload
}