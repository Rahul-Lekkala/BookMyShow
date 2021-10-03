const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const theatreSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
});

const Theatre = mongoose.model("Theatre", theatreSchema);

module.exports = Theatre;
