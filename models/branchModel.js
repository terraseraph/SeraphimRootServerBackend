//@ts-check
var log = require("../controllers/loggingController").log;
var db = require("../controllers/databaseController");
var path = require('path');
const fs = require("fs");
// var $ = require('jQuery');
var request = require('request');
var branchRoutes = {
    event: `/server/event`,
    action: `/server/action`,
    updateScript: `/scripts/update`,
    resetStates: `/scripts/selected/reset`,
    status: `/status`
}
class Branch {

    constructor(name) {
        this.name = name
        this.id;
        this.ip_address;
        this.rootserver_id;
        this.config;

        this.mediaType = {
            VIDEO: "video",
            AUDIO: "audio"
        }
    }


    // Once loaded from db, insert values here
    initValues(id, address, rootId, config = null) {
        this.setId(id)
        this.setIp_address(address)
        this.setRootserverId(rootId)
        this.setConfig(config)
    }

    setId(value) {
        this.id = value;
    }

    setIp_address(value) {
        this.ip_address = value
    }

    setRootserverId(value) {
        this.rootserver_id = value
    }

    setConfig(value) {
        this.config = value
    }

    setName(value) {
        this.name = value
    }


    // ============================================================== //
    // ================= HTTP METHODS =============================== //
    // ============================================================== //

    getBranchConfig() {
        return new Promise((resolve, reject) => {
            var options = {
                method: 'get',
                url: this.ip_address + "/config",
                timeout: 100
            }
            request(options, (err, response, body) => {
                if (response == undefined || err) {
                    resolve(false)
                } else {
                    log("RESPONSE", response.body);
                    let config = JSON.parse(response.body);
                    resolve(config)
                }
            })
        })
    }


    deleteMedia(type, name) {
        return new Promise((resolve, reject) => {
            var options = {
                method: 'delete',
                url: this.ip_address + `/media/${type}/${name}`
            }
            request(options, (err, response, body) => {
                if (response == undefined) {
                    resolve(err)
                } else {
                    log("RESPONSE", response.body);
                    // let branch = JSON.parse(response.body);
                    resolve(body)
                }
            })
        })

    }

    uploadMedia(file, type) {
        return new Promise((resolve, reject) => {
            let t = this
            file.mv(path.resolve(__dirname, `../public/files/${type}/${file.name}`), function (err) {
                if (err) {
                    resolve(err);
                }

                var options = {
                    method: 'post',
                    formData: {
                        file: fs.createReadStream(path.resolve(__dirname, `../public/files/${type}/${file.name}`))
                    },
                    url: t.ip_address + `/${type}`,
                    'Content-Type': 'multipart/form-data; charset=UTF-8'
                }
                request(options, (err, response, body) => {
                    if (response == undefined) {
                        resolve(err)
                    } else {
                        log("RESPONSE", body);
                        resolve({
                            success: body
                        })
                    }
                })
            });
        })
    }

    uploadScript(script) {
        return new Promise((resolve, reject) => {
            var msg = {
                script: script
            }
            var options = {
                method: 'post',
                body: msg,
                json: true,
                url: this.ip_address + `/scripts`
            }
            request(options, (err, response, body) => {
                if (response == undefined) {
                    resolve(err)
                } else {
                    log("RESPONSE", response.body);
                    resolve(body)
                }
            })
        })
    }

    deleteScript(scriptName) {
        return new Promise((resolve, reject) => {
            var options = {
                method: 'delete',
                url: this.ip_address + `/scripts/${scriptName}`
            }
            request(options, (err, response, body) => {
                if (response == undefined) {
                    resolve(err)
                } else {
                    log("RESPONSE", response.body);
                    resolve(response)
                }
            })
        })

    }


    updateRootApi(rootserver_ip) {
        return new Promise((resolve, reject) => {
            var options = {
                method: 'put',
                body: {
                    api: rootserver_ip
                },
                json: true,
                url: this.ip_address + "/config/api"
            }
            request(options, (err, response, body) => {
                if (response == undefined) {
                    resolve(err)
                } else {
                    log("RESPONSE", body);
                    resolve(body)
                }
            })
        })

    }


    promise() {
        return new Promise((resolve, reject) => {

        })

    }


    // ============================================================== //
    // ================= CRUD ======================================= //
    // ============================================================== //




    create() {
        return new Promise((resolve, reject) => {
            var q = `INSERT INTO BRANCHES (name, rootserver_id, ip_address) VALUES ("${this.name}", ${this.rootserver_id}, "${this.ip_address}")`
            db.db_insert(q).then((query, id) => {
                this.id = id;
                resolve(this)
            })
        })
    }

    read() {

    }

    update() {
        return new Promise((resolve, reject) => {
            var q = `UPDATE BRANCHES SET name = "${this.name}", rootserver_id = "${this.rootserver_id}", ip_address = "${this.ip_address}" WHERE id = ${this.id}`
            db.db_update(q).then((result) => {
                resolve(result)
            })
        })
    }

    delete() {
        return new Promise((resolve, reject) => {

        })
    }




}

exports.Branch = Branch;