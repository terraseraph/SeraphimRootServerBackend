const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.join(__dirname, '../Database/data.db'));






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
        console.log(query);

        db.run(query, [], function (err) {
            if (err) {
                return console.log(err.message);
            }
            resolve(query, this.lastID)
            // get the last insert id
            console.log(`A row has been inserted with rowid ${this.lastID}`); //add this.changes
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
                console.log(err);
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

        // let db = new sqlite3.Database('database/se.db');
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
            resolve("updated" + query)
            console.log(`Row(s) updated: ${this.changes}`);
        });

        // close the database connection
        // db.close();
    })
}

exports.db_update = db_update;





function db_delete(query) {
    return new Promise((resolve, reject) => {

        // let db = new sqlite3.Database('database/se.db');
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
            resolve("deleted" + query)
            console.log(`Row(s) updated: ${this.changes}`);
        });

        // close the database connection
        // db.close();
    })
}

exports.db_delete = db_delete;