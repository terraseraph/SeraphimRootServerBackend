//@ts-check
var log = require("../controllers/loggingController").log;
var db = require("../controllers/databaseController");
var path = require('path');
const fs = require("fs");
// var $ = require('jQuery');
var request = require('request');

class RootServer {
    constructor() {
        this.id
        this.name
        this.ip_address
        this.config

    }


    // Once loaded from db, insert values here
    initValues(id, name, address, config = null) {
        this.setId(id)
        this.setName(name)
        this.setIp_address(address)
        this.setConfig(config)
    }

    setId(value) {
        this.id = value;
    }

    setIp_address(value) {
        this.ip_address = value
    }


    setConfig(value) {
        this.config = value
    }

    setName(value) {
        this.name = value
    }





    // ============================================================== //
    // ================= CRUD ======================================= //
    // ============================================================== //


    create() {
        return new Promise((resolve, reject) => {
            var q = `INSERT INTO ROOTSERVER (name, ip_address) VALUES ("${this.name}", ${this.ip_address})`
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
            var q = `UPDATE ROOTSERVER SET name = "${this.name}", ip_address = "${this.ip_address}" WHERE id = ${this.id}`
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

exports.RootServer = RootServer