CREATE DATABASE ecommercewebsite;
CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  price DECIMAL(10, 2),
  image VARCHAR(255)
);

CREATE TABLE orders (
  id INT  PRIMARY KEY,
  customer_name VARCHAR(100),
  customer_email VARCHAR(100),
  product_id INT,
  quantity INT,
  total_price DECIMAL(10, 2),
  FOREIGN KEY (product_id) REFERENCES products(id)
);