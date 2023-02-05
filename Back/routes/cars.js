const express = require('express');
const router = express.Router();
const carsCtrl = require('../controllers/cars')


router.post('/', carsCtrl.createOne);

router.get('/', carsCtrl.getAll);

router.get('/:id', carsCtrl.getOne);

router.patch('/:id', carsCtrl.changeOne);

router.delete('/:id', carsCtrl.removeOne);

module.exports = router;