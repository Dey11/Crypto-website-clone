import mongoose from "mongoose";

const CryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    last: {
        type: Number,
        required: true
    },
    buy: {
        type: Number,
        required: true
    },
    sell: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    base_unit: {
        type: String,
        required: true
    },
})

const Crypto = mongoose.model('crypto', CryptoSchema);

export default Crypto;