const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecommerce'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

app.get('/products', (req, res) => {
  let sql = 'SELECT * FROM products';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

app.post('/order', (req, res) => {
  const order = req.body;
  let sql = 'INSERT INTO orders SET ?';
  db.query(sql, order, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));