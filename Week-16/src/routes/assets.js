
const exporess = require('express');
const router = exporess.Router();

const assetController = require('../controllers/v1/assets/assets');
// import validator

// import middleware if any

router.post('/', assetController.createAsset);
router.put('/:assetId', assetController.updateAsset);
router.delete('/:assetId', assetController.deleteAsset);
router.patch('/:assetId/currentPrice', assetController.updateCurrentPrice);

router.get('/', assetController.fetchAssets);
router.get('/:assetId', assetController.fetchAsset);

module.exports = router;
