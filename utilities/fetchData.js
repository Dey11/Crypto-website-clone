import Crypto from '../models/crypto.js';

const fetchData = async () => {
    const res = await Crypto.find({}).exec();
    return res
}

export default fetchData