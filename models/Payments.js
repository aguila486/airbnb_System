const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const PaymentSchema = new Schema({
    cards: {
        type: Schema.Types.ObjectId,
        ref: "cards",
        required: true
    },
    date_payment: {
        type: String,
        required: true
    },
    status_payment: {
        type: String,
        enum: ["Active", "Canceled"]
    },
    amount_total: {
        type: float,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    }


}, { "collection": "payments", "timestamps": true });



mongoose.Types.ObjectId.prototype.valueOf = function() {
    return this.toString();
};



module.exports = mongoose.model("payments", PaymentSchema);