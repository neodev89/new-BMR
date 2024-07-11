use db_bmr;

CREATE TABLE Utente_Bmr (
	id BIGINT PRIMARY KEY NOT NULL,
    nome VARCHAR(30) NOT NULL,
    email varchar(50) NOT NULL
);

CREATE TABLE dati_Utente_Bmr (
	id BIGINT NOT NULL,
	height INT NOT NULL,
    weight INT NOT NULL,
    age INT NOT NULL,
    FOREIGN KEY(id) REFERENCES Utente(id)
);