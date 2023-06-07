import express from 'express';
import fetchData from '../utilities/fetchData.js';

const router = express.Router()

// router.use(middleware)

router.get("/", async (req, res) => {
    const result = await fetchData();
    res.render("index.ejs", { data: result })
})

// async function middleware(req, res, next) {
//     next()
// }

export default router;