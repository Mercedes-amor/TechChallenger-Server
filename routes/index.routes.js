const router = require("express").Router();
const phonesData = require ("../data/phones.json")


router.get("/", (req, res, next) => {
  res.json("All good in here");
});


const phoneRoutes = require("./phones.routes")
router.use("/phones", phoneRoutes)

module.exports = router;
