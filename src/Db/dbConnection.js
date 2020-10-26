const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./DataBase.db');

// db.serialize(function(){
//     db.each("SELECT * FROM fabricante", (err, row) =>{
//         console.log(`ID: ${row.id}`);
//         console.log(`fabricante: ${row.Nome}`);
//         console.log('-------------------------');
//     });
// });

module.exports = db;