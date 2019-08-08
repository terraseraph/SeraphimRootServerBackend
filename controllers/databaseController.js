const sqlite3 = require('sqlite3').verbose();
const path = require('path');
var log = require("./loggingController").log;
var config = require("../config/serverConfig.json");

const dbPath = path.join(__dirname, '../Database/data.db');
// const db = new sqlite3.Database(dbPath); 
var db;

dbInit();

function dbInit() {
    db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            console.error(err.message);
        }
        else {
            initSchema();
            initInsert();
        }
    });
}

function initSchema() {
    db.run(table_BRANCHES.toString(), [], function (err) {
        if (err) {
            return log(err.message);
        }
    });
    db.run(table_MESSAGES.toString(), [], function (err) {
        if (err) {
            return log(err.message);
        }
    });
    db.run(table_NODEBRIDGES.toString(), [], function (err) {
        if (err) {
            return log(err.message);
        }
    });
    db.run(table_NODES.toString(), [], function (err) {
        if (err) {
            return log(err.message);
        }
    });
    db.run(table_ROOTSERVER.toString(), [], function (err) {
        if (err) {
            return log(err.message);
        }
    });
}


function initInsert() {
    var address = `http://${config.ip_address}:${config.port}`;
    var name = config.name;
    var query = `INSERT INTO ROOTSERVER (name, ip_address) VALUES ("${name}", "${address}")`
    console.log(query);
    db_insert(query).then((msg, index) => {
        log({
            "query": msg,
            "insertedAt": index
        })
        console.log(msg);
    })
}



function testInsert(req, res) {
    var name = req.body.name
    var rootId = req.body.rootId
    var ipaddress = req.body.ipAddress
    var query = `INSERT INTO BRANCHES (name, rootserver_id, ip_address) VALUES ("${name}", ${rootId}, "${ipaddress}")`
    db_insert(query).then((msg, index) => {
        res.send({
            "query": msg,
            "insertedAt": index
        });
    })
}
exports.testInsert = testInsert;

function testSelect(req, res) {
    var q = "SELECT * FROM BRANCHES";
    db_select(q).then((result) => {
        res.send(result);
    })
}
exports.testSelect = testSelect








/**
 *Insert query
 * INSERT INTO (?) VALUES(?)
 * @param {*} query
 * @returns the query sent and the id of that insert
 */
function db_insert(query) {

    return new Promise((resolve, reject) => {
        // log(query);

        db.run(query, [], function (err) {
            if (err) {
                return log(err.message);
            }
            resolve(this.lastID)
            // get the last insert id
            // log(`A row has been inserted with rowid ${this.lastID}`); //add this.changes
        });

        // close the database connection
        // db.close();
    })

}
exports.db_insert = db_insert;

/**
 * Select query
 *
 * @param {*} query
 * @returns array of items
 */
function db_select(query) {
    return new Promise((resolve, reject) => {

        let arr = []
        db.all(query, [], (err, rows) => {
            if (err) {
                log(err);
            }
            // db.close();
            resolve(rows)
        });
    })
}
exports.db_select = db_select;


/**
 *Update Query
 * UPDATE <> SET <> WHERE <>
 * @param {*} query
 * @returns
 */
function db_update(query) {
    return new Promise((resolve, reject) => {
        log(query)
        //    UPDATE table
        //    SET column_1 = new_value_1,
        //        column_2 = new_value_2
        //    WHERE
        //    search_condition
        //    ORDER column_or_expression
        //    LIMIT row_count OFFSET offset;

        db.run(query, [], function (err) {
            if (err) {
                return console.error(err.message);
            }
            resolve("updated" + this.changes)
            log(`Row(s) updated: ${this.changes}`);
        });

        // close the database connection
        // db.close();
    })
}

exports.db_update = db_update;





function db_delete(query) {
    return new Promise((resolve, reject) => {
        // DELETE
        // FROM
        // table
        // WHERE search_condition
        // ORDER BY criteria
        // LIMIT row_count OFFSET offset;

        db.run(query, [], function (err) {
            if (err) {
                return console.error(err.message);
            }
            resolve("deleted" + this.changes)
            // console.log(`Row(s) updated: ${this.changes}`);
        });

        // close the database connection
        // db.close();
    })
}
exports.db_delete = db_delete;

function db_insertMessageLog(query) {
    return new Promise((resolve, reject) => {

        db.run(query, [], function (err) {
            if (err) {
                return
            }
            resolve(this.lastID)
        });
        // db.close();
    })
}
exports.db_insertMessageLog = db_insertMessageLog

const table_BRANCHES = (`CREATE TABLE IF NOT EXISTS "BRANCHES"(
    "id"
    INTEGER PRIMARY KEY AUTOINCREMENT,
    "name"
    TEXT,
    "rootserver_id"
    INTEGER,
    "ip_address"
    TEXT
);`);
const table_MESSAGES = (`CREATE TABLE IF NOT EXISTS "MESSAGES"(
    "id"
    INTEGER PRIMARY KEY AUTOINCREMENT,
    "text"
    TEXT,
    "type"
    TEXT,
    "time"
    INTEGER,
    "sender"
    TEXT
);`);
const table_NODEBRIDGES = (`CREATE TABLE IF NOT EXISTS "NODEBRIDGES"(
    "id"
    INTEGER,
    "name"
    TEXT,
    "ip_address"
    TEXT,
    "branch_id"
    INTEGER,
    PRIMARY KEY("id")
);`);
const table_NODES = (`CREATE TABLE IF NOT EXISTS "NODES"(
    "id"
    INTEGER PRIMARY KEY AUTOINCREMENT,
    "name"
    TEXT,
    "type"
    TEXT,
    "last_alive"
    TEXT,
    "bridge_id"
    INTEGER,
    "hardware_id"
    INTEGER UNIQUE,
    "memory"
    INTEGER
);`);
const table_ROOTSERVER = (`CREATE TABLE "ROOTSERVER" (
	"id"	INTEGER,
	"name"	TEXT UNIQUE,
	"ip_address"	TEXT,
	"config_path"	TEXT,
	PRIMARY KEY("id")
);`);



var CreateTableSchema = (`
CREATE TABLE IF NOT EXISTS "BRANCHES"(
    "id"
    INTEGER PRIMARY KEY AUTOINCREMENT,
    "name"
    TEXT,
    "rootserver_id"
    INTEGER,
    "ip_address"
    TEXT
);

CREATE TABLE IF NOT EXISTS "MESSAGES"(
    "id"
    INTEGER PRIMARY KEY AUTOINCREMENT,
    "text"
    TEXT,
    "type"
    TEXT,
    "time"
    INTEGER,
    "sender"
    TEXT
);

CREATE TABLE IF NOT EXISTS "NODEBRIDGES"(
    "id"
    INTEGER,
    "name"
    TEXT,
    "ip_address"
    TEXT,
    "branch_id"
    INTEGER,
    PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "NODES"(
    "id"
    INTEGER PRIMARY KEY AUTOINCREMENT,
    "name"
    TEXT,
    "type"
    TEXT,
    "last_alive"
    TEXT,
    "bridge_id"
    INTEGER,
    "hardware_id"
    INTEGER UNIQUE,
    "memory"
    INTEGER
);

CREATE TABLE "ROOTSERVER" (
	"id"	INTEGER,
	"name"	TEXT UNIQUE,
	"ip_address"	TEXT,
	"config_path"	TEXT,
	PRIMARY KEY("id")
);


`)
exports.db_insertMessageLog = db_insertMessageLog