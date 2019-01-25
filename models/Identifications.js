const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const IdentificationSchema = new Schema({

    name: {
        type: String
    },
    url_phote: [{
        type: String
    }],
    status_Identification: {
        type: String
    },
    is_active: {
        type: Boolean
    }

}, { "collection": "identifications", "timestamps": true });



mongoose.Types.ObjectId.prototype.valueOf = function() {
    return this.toString();
};



module.exports = mongoose.model("identifications", IdentificationSchema);