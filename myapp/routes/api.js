var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/users", function(req, res, next) {
  res.json({
    users: [
      { name: "Petya" },
      { name: "John Doe" },
      { name: "Axl Rose" },
      { name: "Angus Yung" }
    ]
  });
});

module.exports = router;
