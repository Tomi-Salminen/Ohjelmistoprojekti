
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


CREATE TABLE IF NOT EXISTS plants (
  id serial PRIMARY KEY,
  name varchar(60) NOT NULL,
  description varchar(5000) NOT NULL,
  price numeric(10, 2) NOT NULL,
  image varchar(5000),
  created timestamp NOT NULL DEFAULT current_timestamp,
  updated timestamp NOT NULL DEFAULT current_timestamp
);
INSERT INTO plants (name, description, price, image)
VALUES ('aloe vera', 'Aloe vera is a popular indoor plant known for its
medicinal properties and easy maintenance. Its thick,
succulent leaves store water, making it highly drought-
resistant. Aloe vera''s gel has soothing and healing
properties, often used to treat minor skin irritations
and sunburn. This plant thrives in indirect sunlight and
can purify indoor air by removing toxins. Its compact
size and minimal care requirements make it an ideal
choice for indoor environments.', 15.00, 'https://images.pexels.com/photos/7838200/pexels-photo-7838200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
('peace lily', 'The peace lily is a favored indoor plant for its elegance and
air-purifying qualities. With its attractive white blooms and
lush green leaves, it adds a touch of beauty to indoor
spaces. Peace lilies are efficient at removing indoor
pollutants, promoting better air quality. They thrive in low
light conditions and are relatively low-maintenance, making
them suitable for various indoor settings. Peace lilies can
also alert you to underwatering, as they droop when in
need of water, but quickly perk up after a good drink. Their
combination of aesthetics and air-purifying abilities makes
them an excellent choice for indoor gardening.', 39.99, 'https://www.mydomaine.com/thmb/N3StDx3PyGbF0Pwafv-P9-qiNZU=/900x0/filters:no_upscale():strip_icc()/1566417254329_20190821-1566417255317-b9314f1d9f7a4668a466c5ffb1913a8f.jpg'),
('spider plant',
'The spider plant is a popular indoor choice due to its
simplicity and air-purifying attributes. Its long, arching
leaves with white stripes add an appealing visual element
to indoor spaces. Spider plants are effective at filtering
indoor air by removing pollutants like formaldehyde and
xylene. They are adaptable to various light conditions and
require minimal care, making them suitable for beginners.
The plant also produces offshoots or "siderites" that can
be easily propagated, allowing for multiple plants from
one purchase. Spider plants combine aesthetics with air-
cleaning capabilities, making them a top pick for indoor
gardening.',
69.99,
'https://www.thespruce.com/thmb/UjlXNIgQM-WV4ivm-0nveevtPwc=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc()/spider-plants-chlorophytum-definition-1902773-01b-b3f60dce30a64c399d52b5538417cc7d.jpg');

-- Toimii myös relaationa käyttäjän ja kasvien välillä
CREATE TABLE IF NOT EXISTS orders (
  order_id serial PRIMARY KEY,
  user_id varchar(36) REFERENCES accounts (user_id) ON DELETE CASCADE,
  created timestamp NOT NULL DEFAULT current_timestamp
);
INSERT INTO orders (user_id)
VALUES ('admin');

CREATE TABLE order_details (
  order_detail_id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(order_id) ON DELETE CASCADE,
  plant_id INT REFERENCES plants(id) ON DELETE CASCADE,
  quantity INT NOT NULL
);

INSERT INTO order_details (order_id, plant_id, quantity)
VALUES (1, 1, 2);
