
CREATE TABLE IF NOT EXISTS accounts (
	user_id varchar ( 36)  UNIQUE NOT NULL,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 60 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP
);

INSERT INTO accounts(username, password, email, created_on, last_login)
VALUES ('admin','admin','admin@admin.com', '1999-01-08 04:05:06', '1999-01-08 04:05:06');