const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const CardSchema = new Schema({

    numberCard: {
        type: String,
        required: true
    },
    bank_name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    }

}, { "collection": "cards", "timestamps": true });



mongoose.Types.ObjectId.prototype.valueOf = function() {
    return this.toString();
};



module.exports = mongoose.model("cards", CardSchema);