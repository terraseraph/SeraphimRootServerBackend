var path = require("path")

class MediaController {
    constructor() {
        this.folder = path.join(__dirname, '../public/files/audio');
    }

    getAudioHTTP(req, res) {
        var file = req.params.fileName
        res.sendFile(path.resolve(__dirname, `../public/files/audio/${file}`))
    }

}

var mediaController = new MediaController();
exports.mediaController = mediaController