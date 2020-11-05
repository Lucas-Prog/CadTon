PRAGMA foreign_keys = ON;
PRAGMA foreign_keys;

-- adicionar ordens de coleta.

CREATE TABLE IF NOT EXISTS usuarios(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT(100) NOT NULL,
    login TEXT(50) NOT NULL UNIQUE
    -- senha TEXT(20) NOT NULL
    -- get|post criado.
);
INSERT INTO usuarios VALUES(?, "root", "95825-7");
INSERT INTO usuarios VALUES(?, "teste", "94745-3");
select nome FROM usuarios WHERE login = "95825-7";

-- drop TABLE usuarios;

CREATE TABLE IF NOT EXISTS fabricante(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT(80) NOT NULL UNIQUE
    -- rota criada
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
    -- rota parcialmente criada
);

CREATE TABLE IF NOT EXISTS impressoras(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Cod INTEGER NOT NULL UNIQUE,
    Local TEXT(100) NOT NULL,
    Status TEXT(50) NOT NULL,
    n_serie TEXT(100) NOT NULL UNIQUE,
    f_imp INTEGER,
    FOREIGN KEY (f_imp) REFERENCES imp_models(ID)
    -- get|post criados.
);

CREATE TABLE IF NOT EXISTS cart_estado(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    situacao TEXT(100) NOT NULL UNIQUE
    -- rota criada
);

CREATE TABLE IF NOT EXISTS cart_model(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT(100) NOT NULL UNIQUE,
    f_imp_model INTEGER NOT NULL,
    FOREIGN KEY (f_imp_model) REFERENCES imp_models(ID)
    -- rota criada, talvez adicionar um campo COR, alem do nome
);

-- CREATE TABLE IF NOT EXISTS cart_data_entrada(
--     ID INTEGER PRIMARY KEY AUTOINCREMENT,
--     data TEXT(30) NOT NULL,
--     f_usuario INTEGER NOT NULL,
--     FOREIGN KEY (f_usuario) REFERENCES usuarios(ID)
--     -- get|post feito
-- );
-- DELETE from cart_data_entrada;
-- INSERT INTO cart_data_entrada VALUES(?, "26-9-2020-13:50:15", 0);

-- CREATE TABLE IF NOT EXISTS cart_data_saida(
--     ID INTEGER PRIMARY KEY AUTOINCREMENT,
--     data TEXT(30) NOT NULL,
--     f_usuario INTEGER NOT NULL,
--     FOREIGN KEY (f_usuario) REFERENCES usuarios(ID)
--     -- get|post feito
-- );

CREATE TABLE IF NOT EXISTS cart_data_instalacao(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT(30) NOT NULL,
    f_usuario INTEGER NOT NULL,
    FOREIGN KEY (f_usuario) REFERENCES usuarios(ID)
    -- get|post criados
);

-- select cart_data_instalacao.*, usuarios.nome from cart_data_instalacao inner join usuarios on usuarios.ID = cart_data_instalacao.f_usuario;

CREATE TABLE IF NOT EXISTS cart_data_baixa(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT(30) NOT NULL,
    f_usuario INTEGER NOT NULL,
    FOREIGN KEY (f_usuario) REFERENCES usuarios(ID)
    -- get|post criados
);

CREATE TABLE IF NOT EXISTS cartuchos(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    n_serie TEXT(100) NOT NULL UNIQUE,
    data_entrada INTEGER NOT NULL,
    data_baixa INTEGER,
    f_cart_model INTEGER NOT NULL,
    f_data_instalacao INTEGER,
    f_imp_instalado INTEGER,
    f_cart_estado INTEGER NOT NULL,
    comentario TEXT(100),
    FOREIGN KEY (f_cart_model) REFERENCES cart_model(ID),
    FOREIGN KEY (f_data_instalacao) REFERENCES cart_data_instalacao(ID),
    FOREIGN KEY (f_imp_instalado) REFERENCES impressoras(ID),
    FOREIGN KEY (f_cart_estado) REFERENCES cart_estado(ID)
);