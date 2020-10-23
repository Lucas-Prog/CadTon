const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./DataBase.db');

db.serialize(function(){
    db.run("CREATE TABLE IF NOT EXISTS Fabricante(id INTEGER PRIMARY KEY AUTOINCREMENT, Nome TEXT(80))");

    db.run("INSERT INTO Fabricante VALUES(9223372036854775807, 'Samsung')");

    db.each("SELECT * FROM Fabricante", (err, row) =>{
        console.log(`ID: ${row.id}`);
        console.log(`fabricante: ${row.Nome}`);
        console.log('-------------------------');
    })
});