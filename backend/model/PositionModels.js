const {model} = require("mongoose");

const { PostitionSchema } = require("../schemes/PositionSchema");

const PositionModels = new model("position" , PostitionSchema);

module.exports = {PositionModels};

