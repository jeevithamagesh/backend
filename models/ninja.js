const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//creating ninja Scheme and model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // rank: {
    //     type: String
    // },
    // available: {
    //     type: Boolean,
    //     default: false
    // },
    // long: {},
    // lat: {},
    id: {
        type: String

    }
});
const Ninja = mongoose.model('ninjas', NinjaSchema);
module.exports = Ninja;