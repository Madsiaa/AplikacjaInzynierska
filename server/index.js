const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());


// połączenie z bazą
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'diet_info'
});

// dodawanie produktu do bazy
app.post('/create-product', (req, res) => {
  const name = req.body.name;
  const brand = req.body.brand;
  const description = req.body.description;
  const weight = req.body.weight;
  const ingredients = req.body.ingredients;
  const nutrition = req.body.nutrition;
  const allergens = req.body.allergens;
  const keywords = req.body.keywords;

  db.query('INSERT INTO products (product_name, product_brand, product_description, product_weight, product_ingredients, product_nutrition, product_allergens, product_keywords) VALUES (?,?,?,?,?,?,?,?)',
  [name, brand, description, weight, ingredients, nutrition, allergens, keywords],
  (err, result) => {
    if(err) console.log(err);
    else res.send('Dodano rekord do bazy');
  });
});

// pobieranie produktów
app.get('/products', (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// pobieranie szczegółów produktów
app.post('/send-product-details', (req, res) => {
  const id = req.body.id;
  console.log("ID: " + id);
  
  app.get('/get-product-details', (req, res) => {
    db.query("SELECT * FROM products WHERE id_product = (?)", [id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
});

// dodawanie przepisów do bazy
app.post('/create-recipe', (req, res) => {
  const name = req.body.name;
  const author = req.body.author;
  const description = req.body.description;
  const ingredients = req.body.ingredients;
  const steps = req.body.steps;
  const keywords = req.body.keywords;

  db.query('INSERT INTO recipes (recipe_name, recipe_author, recipe_description, recipe_ingredients, recipe_steps, recipe_keywords) VALUES (?,?,?,?,?,?)',
  [name, author, description, ingredients, steps, keywords],
  (err, result) => {
    if(err) console.log(err);
    else res.send('Dodano rekord do bazy');
  });
});

// pobieranie przepisów
app.get('/recipes', (req, res) => {
  db.query("SELECT * FROM recipes", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// pobieranie szczegółów przepisów
app.post('/recipe-details', (req, res) => {
  const id = req.body.id;
  console.log("ID: " + id);

  db.query("SELECT * FROM recipes WHERE id_recipe = (?)", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


// serwer
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});