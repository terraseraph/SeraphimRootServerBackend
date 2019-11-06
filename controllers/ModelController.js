var device = require("../models/DeviceModel")

class ModelManager {
    constructor() { }

    // Send device model
    httpGetDeviceModel(req, res) {
        res.send(device.Device);
    }
}

var modelManager = new ModelManager();
exports.modelManager = modelManager;