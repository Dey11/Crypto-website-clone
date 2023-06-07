import axios from 'axios';
import Crypto from '../models/crypto.js'

const storeData = () => {
    var cryptoTopTen = {}
    axios.get('https://api.wazirx.com/api/v2/tickers').then(resp => {
        const apiData = resp.data;
        var counter = 0;
        for (const key in apiData) {
            counter++;
            cryptoTopTen[key] = resp.data[key]

            const cryptoSingle = new Crypto({
                name: cryptoTopTen[key].name,
                last: cryptoTopTen[key].last,
                buy: cryptoTopTen[key].buy,
                sell: cryptoTopTen[key].sell,
                volume: cryptoTopTen[key].volume,
                base_unit: cryptoTopTen[key].base_unit,
            })

            cryptoSingle.save().then(async () => {
                console.log('New crypto saved')
            }).catch(async (err) => {
                console.log(err)
            })

            if (counter === 10) {
                break;
            }
        }
    })
}

export default storeData;