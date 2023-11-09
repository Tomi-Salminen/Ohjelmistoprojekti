
CREATE TABLE IF NOT EXISTS accounts (
  user_id varchar(36) UNIQUE NOT NULL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT current_timestamp,
  last_login TIMESTAMP
);

INSERT INTO accounts(user_id, username, password, email, created_on, last_login)
VALUES ('admin', 'admin', 'admin', 'admin@admin.com', TIMESTAMP '1999-01-08 04:05:06', TIMESTAMP '1999-01-08 04:05:06');


CREATE TABLE IF NOT EXISTS product (
  id serial PRIMARY KEY,
  name varchar(60) NOT NULL,
  description varchar(150) NOT NULL,
  price numeric(10, 2) NOT NULL,
  image varchar(200),
  product_type varchar(85),
  created timestamp NOT NULL DEFAULT current_timestamp,
  updated timestamp NOT NULL DEFAULT current_timestamp
);
INSERT INTO plants (name, description, price, image)
VALUES ('Peikonlehti', 'hieno kasvi', 15.00, 'https://www.kukkatalo.fi/wp-content/uploads/2018/02/Trendik%C3%A4s-peikonlehti-on-suosittu-viherkasvi.jpg');
