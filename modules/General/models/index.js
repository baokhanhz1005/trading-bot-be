const mongoose = require("mongoose");


const General = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },

})

module.exports = mongoose.model('general', General)