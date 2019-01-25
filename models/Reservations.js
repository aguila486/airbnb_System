const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const ReservationSchema = new Schema({

    date_init: {
        type: Date,
        required: true
    },
    date_end: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Canceled"],
    },
    days: {
        type: int,
        required: true
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payments"
    },
    price: {
        type: float,
        required: true
    },
    accommodation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "accommodations"
    },
    number_occupant: {
        type: int
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    is_active: {
        type: Boolean,
        default: true
    },

}, { "collection": "reservations", "timestamps": true });



mongoose.Types.ObjectId.prototype.valueOf = function() {
    return this.toString();
};



module.exports = mongoose.model("reservations", ReservationSchema);