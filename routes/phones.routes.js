const router = require ("express").Router();
const phonesData = require ("../data/phones.json")

// GET "/phones" --> Show all phones (use the phones.json) as fake data
router.get("/", (req, res, next) => {
    const phonesList = phonesData.map((eachPhone) => {
      return {
        name: eachPhone.name,
        id: eachPhone.id
      }
    });
    res.json(phonesList)
    console.log(phonesList)
  });



// GET "/phones/:id" --> Show a phone details

router.get("/:id", (req, res, next) => {

  const phoneId = req.params.id

    const phoneDetails = phonesData.find((phone) => {
      return phone.id == phoneId
    })
    res.json(phoneDetails)
  })
  
  module.exports = router;