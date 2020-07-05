var express = require('express');
var router = express.Router();
var model = require('../models/index');

router.get('/inventory', function(req, res, next) {
  model.inventory.findAll({})
    .then(inventories => res.json({
        error: false,
        data: inventories
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        msm_error: error
    }));
});

module.exports = router;
