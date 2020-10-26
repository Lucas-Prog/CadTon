PRAGMA foreign_keys = ON;
PRAGMA foreign_keys;

CREATE TABLE IF NOT EXISTS usuarios(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT(100) NOT NULL,
    login TEXT(50) NOT NULL UNIQUE,
    senha TEXT(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS fabricante(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT(80) NOT NULL
);

-- INSERT INTO fabricante VALUES(?, "Samsung");
-- INSERT INTO fabricante VALUES(?,"Epson");
-- INSERT INTO fabricante VALUES(?,"HP");

CREATE TABLE IF NOT EXISTS imp_models(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT(50) NOT NULL,
    Description TEXT(150),
    f_fabricante INTEGER  NOT NULL,
    FOREIGN KEY (f_fabricante) REFERENCES fabricante(ID)
);

CREATE TABLE IF NOT EXISTS impressoras(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Cod INTEGER NOT NULL UNIQUE,
    Local TEXT(100) NOT NULL,
    Status TEXT(50) NOT NULL,
    n_serie TEXT(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS cart_estado(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    situacao TEXT(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS cart_model(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT(100) NOT NULL,
    f_imp_model INTEGER NOT NULL,
    FOREIGN KEY (f_imp_model) REFERENCES imp_models(ID)
);

CREATE TABLE IF NOT EXISTS cart_data_entrada(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT(30) NOT NULL,
    f_usuario INTEGER NOT NULL,
    FOREIGN KEY (f_usuario) REFERENCES usuarios(ID)
);

CREATE TABLE IF NOT EXISTS cart_data_saida(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT(30) NOT NULL,
    f_usuario INTEGER NOT NULL,
    FOREIGN KEY (f_usuario) REFERENCES usuarios(ID)
);

CREATE TABLE IF NOT EXISTS cart_data_instalacao(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT(30) NOT NULL,
    f_usuario INTEGER NOT NULL,
    FOREIGN KEY (f_usuario) REFERENCES usuarios(ID)
);

CREATE TABLE IF NOT EXISTS cart_data_baixa(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT(30) NOT NULL,
    f_usuario INTEGER NOT NULL,
    FOREIGN KEY (f_usuario) REFERENCES usuarios(ID)
);

CREATE TABLE IF NOT EXISTS cartuchos(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    n_serie TEXT(100) NOT NULL,
    f_cart_model INTEGER NOT NULL,
    f_data_entrada INTEGER NOT NULL,
    f_data_instalacao INTEGER NOT NULL,
    f_data_baixa INTEGER NOT NULL,
    f_data_entrega INTEGER NOT NULL,
    f_imp_instalado INTEGER NOT NULL,
    f_cart_estado INTEGER NOT NULL,
    comentario TEXT(100),
    FOREIGN KEY (f_cart_model) REFERENCES cart_model(ID),
    FOREIGN KEY (f_data_entrada) REFERENCES cart_data_entrada(ID),
    FOREIGN KEY (f_data_instalacao) REFERENCES cart_data_instalacao(ID),
    FOREIGN KEY (f_data_baixa) REFERENCES cart_data_baixa(ID),
    FOREIGN KEY (f_data_entrega) REFERENCES cart_data_entrada(ID),
    FOREIGN KEY (f_imp_instalado) REFERENCES impressoras(ID),
    FOREIGN KEY (f_cart_estado) REFERENCES cart_estado(ID)
);