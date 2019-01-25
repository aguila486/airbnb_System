const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    inscription_date: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true
    },
    photo_user: {
        type: String
    },
    ranking: {
        type: String
    },
    typeUser: {
        type: String,
        emun: ["Host", "Guest"],
        required: true
    },
    reservations: [{
        type: Schema.Types.ObjectId,
        ref: "reservations"
    }],
    accommodations: [{
        type: Schema.Types.ObjectId,
        ref: "accommodations"
    }],
    identifications: [{
        type: Schema.Types.ObjectId,
        ref: "identifications"
    }],
    payments: [{
        type: Schema.Types.ObjectId,
        ref: "payments"
    }],
    cards: [{
        type: Schema.Types.ObjectId,
        ref: "cards"
    }],
    is_active: {
        type: Boolean,
        default: true
    }

}, { "collection": "users", "timestamps": true });



UserSchema.pre("save", function(next) {
    let user = this;
    if (!user.isModified("password")) { return next(); }
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

mongoose.Types.ObjectId.prototype.valueOf = function() {
    return this.toString();
};

module.exports = mongoose.model("users", UserSchema);