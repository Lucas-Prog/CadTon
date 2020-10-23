PRAGMA foreign_keys = ON;
PRAGMA foreign_keys;

Create table if EXISTS Fabricante(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT(80) NOTNULL
);

CREATE TABLE if EXISTS Imp_Models(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT(50) NOTNULL,
    Description TEXT(150),
);

