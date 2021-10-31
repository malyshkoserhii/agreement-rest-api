const express = require('express');
const router = express.Router();
const validate = require('./validation');
const contractsController = require('../../controllers/contracts');

router.get('/', contractsController.get);
router.get('/:id', contractsController.getById);
router.post('/', validate.createContact, contractsController.create);
router.patch('/:id', validate.updateContact, contractsController.update);
router.delete('/:id', contractsController.remove);

module.exports = router;
