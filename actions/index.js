const authActions = require("./authActions");
const userActions = require("./userActions");
const cardActions = require("./cardActions");
const identificationActions = require("./identificationActions");
const paymentActions = requiere("./paymentActions");
const reservationActions = requiere("./reservationActions");
const ubicationActions = requiere("./ubicationActios");



module.exports = {
    ...authActions,
    ...userActions,
    ...cardActions,
    ...identificationActions,
    ...paymentActions,
    ...reservationActions,
    ...ubicationActions
};