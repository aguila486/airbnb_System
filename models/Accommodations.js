const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AccommodationSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    number_bedrooms: {
        type: Int,
        required: true
    },
    schedule: {
        type: String,
        required: true
    },
    price: {
        type: float,
        required: true
    },
    ranking: {
        type: String,
    },
    type_accommodation: {
        type: String,
        enum: ["Department", "House", "Living_place", "Accommodation", "Bedand", "Hotel"]
    },
    type_property: {
        type: String,
        enum: ["Department", "Condominium", "House", "Loft", "Apartotel"]
    },
    type_provision: {
        type: String,
        enum: ["Accommodation", "room", "Shared_space"]
    },
    is_esclusive: {
        type: Boolean,
    },
    number_bedroom: {
        type: Int,
    },
    number_bed: {
        type: Int,
    },
    number_bathroom: {
        type: Int,
    },
    number_occupant: {
        type: Int,
    },
    is_bathroom_shared: {
        type: Boolean,
    },
    services: {
        type: String,
        enum: ["Wifi", "Champu", "closet", "Tv", "heating", "Air_conditioner", "Breakfast", "Desk"]
    },
    rules: {
        type: String
    },
    ubication: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ubications"
    },
    urlPhoto: {
        type: String
    },
    is_company: {
        type: Boolean
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, { "collection": "Accommodations", "timestamps": true });

mongoose.Types.ObjectId.prototype.valueOf = function() {
    return this.toString();
};



module.exports = mongoose.model("Accommodations", AccommodationSchema);