const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const UbicationSchema = new Schema({

    direction: {
        type: String
    },
    point_google: {
        type: String
    },
    country: {
        type: String
    },
    ciudad: {
        type: String
    },
    province: {
        type: String
    },
    postal_code: {
        type: String
    }

}, { "collection": "ubications", "timestamps": true });



mongoose.Types.ObjectId.prototype.valueOf = function() {
    return this.toString();
};



module.exports = mongoose.model("ubications", UbicationSchema);