
CREATE TABLE IF NOT EXISTS accounts (
  user_id varchar(36) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_on TIMESTAMP NOT NULL,
  last_login TIMESTAMP
);

INSERT INTO accounts(user_id, username, password, email, created_on, last_login)
VALUES ('admin', 'admin', 'admin', 'admin@admin.com', TIMESTAMP '1999-01-08 04:05:06', TIMESTAMP '1999-01-08 04:05:06');


CREATE TABLE IF NOT EXISTS plants (
  id serial PRIMARY KEY,
  name varchar(60) NOT NULL,
  description varchar(150) NOT NULL,
  price numeric(10, 2) NOT NULL,
  image varchar(5000),
  created timestamp NOT NULL DEFAULT current_timestamp,
  updated timestamp NOT NULL DEFAULT current_timestamp
);
INSERT INTO plants (name, description, price, image)
VALUES ('Peikonlehti', 'hieno kasvi', 15.00, 'https://www.kukkatalo.fi/wp-content/uploads/2018/02/Trendik%C3%A4s-peikonlehti-on-suosittu-viherkasvi.jpg'),
('Jukkapalmu', 'hieno kasvi', 39.99, 'https://www.viherpeukalot.fi/images/products/12355-2_orig.jpg'),
('Lyyranviikuna', 'hieno kasvi', 69.99, 'https://www.kukkatalo.fi/wp-content/uploads/2019/09/Ficus-Lyrata-00000129.jpg'),
('Kultapalmu', 'hieno kasvi', 39.99, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ikea.com%2Ffi%2Ffi%2Fimages%2Fproducts%2Fdypsis-lutescens-ruukkukasvi-kultapalmu__0653973_pe708202_s5.jpg&f=1&nofb=1&ipt=d486c46166beb0bddf6a2a1835687f0104397101c08a7346276c48ae49e0e9b1&ipo=images'),
('Kiiltojukka', 'hieno kasvi', 49.99, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.omakoti.fi%2Fwp-content%2Fuploads%2F2015%2F06%2Fjukkapalmu-kiiltojukka.jpg&f=1&nofb=1&ipt=5e1ba1d3c935f7f2ae6eb9cc1be1147362139a59f00d39d7efeb53bca3317ea0&ipo=images');
