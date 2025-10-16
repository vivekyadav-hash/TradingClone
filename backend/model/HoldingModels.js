const {model} = require("mongoose");
const {HoldingSchema} = require("../schemes/HoldingSchema");

const HoldingModels = new model("holding" , HoldingSchema);

module.exports = {HoldingModels};

