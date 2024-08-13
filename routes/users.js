var express = require('express');
var router = express.Router();

let users = { items: [] }

/* GET users listing. */
router.get('/', function (req, res) {
  res.json(users.items);
});

router.post('/', function (req, res) {
  users.items.push(req.body);
  res.json(users);
});

module.exports = router;
