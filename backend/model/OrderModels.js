const {model} = require("mongoose");
const {OrderSchema} = require("../schemes/OrderSchema");

const OrderModels = new model("order" , OrderSchema);

module.exports = {OrderModels};

