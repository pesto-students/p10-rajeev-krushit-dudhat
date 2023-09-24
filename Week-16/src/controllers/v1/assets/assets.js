
// helpers
const { successResponse, errorResponse } = require('../../../utils/response');
const { successMessages, errorMessages } = require('../../../utils/messages');

// models
const AssetModel = require('../../../models/assets');

async function createAsset(req, res) {
  try {
    const { name, purchaseCost, purchaseDate, assetType, currentPrice, propertyTax, monthlyMaintanance } = req.body;
    const { id } = req.user;

    const asset = await AssetModel.create({
      assetName: name,
      assetType: assetType,
      purchaseCost: purchaseCost,
      purchaseDate: purchaseDate,
      currentValue: currentPrice,
      userID: id,
      maintenance: {
        taxation: propertyTax,
        propertyMaintenance: monthlyMaintanance
      }
  });

  return successResponse(req, res, {asset: asset}, successMessages.ASSET_CREATED, 201);
  } catch (error) {
    return errorResponse(req, res, {error: error.message});
  }
}

async function deleteAsset(req, res) {
  try {
    const { assetId } = req.params;

    const asset = await AssetModel.findByIdAndDelete(assetId);
    if (!asset) {
      return errorResponse(req, res, null, errorMessages.ASSET_NOT_FOUND, 400);
    }

    return successResponse(req, res, {asset: asset}, successMessages.USER_DELETED, 201);
  } catch (error) {
    return errorResponse(req, res, {error: error.message});
  }
}

async function fetchAsset(req, res) {
  try {
    const { assetId } = req.params;

    const asset = await AssetModel.findOne({_id: assetId});
    if(!asset) {
      return errorResponse(req, res, null, errorMessages.ASSET_NOT_FOUND, 400) ;
    }

    return successResponse(req, res, {asset: asset}, successMessages.DATA_FETCHED, 200);

  } catch (error) {
    return errorResponse(req, res, {error: error.message});
  }
}

async function fetchAssets(req, res) {
  try {
    const { id } = req.user;
    // const { month, year } = req.query;

    let filter = {
      userID: id
    }

    let assets = await AssetModel.find(filter);

    return successResponse(req, res, {assets: assets}, successMessages.DATA_FETCHED, 200);
  } catch (error) {
    return errorMessages(req, res, { error: error.message });
  }
}

async function updateAsset(req, res) {
  try {
    const { assetId } = req.params;
    const { name, purchaseCost, purchaseDate, assetType, currentPrice, propertyTax, monthlyMaintanance } = req.body;

    const asset = await AssetModel.findOne({_id: assetId});
    if (!asset) {
      return errorResponse(req, res, null, errorMessages.ASSET_NOT_FOUND, 400);
    }

    const payload = {
      assetName: name || asset.assetName,
      assetType: assetType || asset.assetType,
      purchaseCost: purchaseCost || asset.purchaseCost,
      purchaseDate: purchaseDate || asset.purchaseDate,
      currentValue: currentPrice || asset.currentValue,
      maintenance: {
        taxation: propertyTax || asset.maintenance.taxation,
        propertyMaintenance: monthlyMaintanance || asset.maintenance.propertyMaintenance
      }
    }

    await AssetModel.updateOne({_id: assetId}, payload);

    return successResponse(req, res, {asset: asset}, successMessages.DATA_UPDATED, 200);
  } catch (error) {
    return errorResponse(req, res, {error: error.message});
  }
}

async function updateCurrentPrice(req, res) {
  try {
    const { assetId } = req.params;
    const { currentPrice } = req.body;

    const asset = await AssetModel.findOneAndUpdate({_id: assetId}, {currentValue: currentPrice});
    if (!asset) {
      return errorResponse(req, res, null, errorMessages.ASSET_NOT_FOUND, 400);
    }

    return successResponse(req, res, {asset: asset}, successMessages.DATA_UPDATED, 200);
  } catch (error) {
    return errorResponse(req, res, {error: error.message});
  }
}

exports.createAsset = createAsset;
exports.deleteAsset = deleteAsset;
exports.fetchAsset = fetchAsset;
exports.fetchAssets = fetchAssets;
exports.updateAsset = updateAsset;
exports.updateCurrentPrice = updateCurrentPrice;
