const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const PORT = process.env.PORT || 3001;

const app = express();
const saltRounds = 11;
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
    if(err)  console.log(err);
    else  res.send(result);
  });
});

// pobieranie szczegółów produktów
app.post('/product-details', (req, res) => {
  const id = req.body.id;
  
  db.query("SELECT * FROM products WHERE id_product = (?)", [id], (err, result) => {
    if(err)  console.log(err);
    else  res.send(result);
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
    if(err)  {console.log(err);}
    else  {res.send(result);}
  });
});

// pobieranie szczegółów przepisów
app.post('/recipe-details', (req, res) => {
  const id = req.body.id;
  
  db.query("SELECT * FROM recipes WHERE id_recipe = (?)", [id], (err, result) => {
    if(err)  console.log(err);
    else  res.send(result);
  });
});

// dodawnianie produktu do ulubionych
app.post('/add-product-fav', (req, res) => {
  const items = req.body.items;
  const user = req.body.user;
  
  db.query("UPDATE users SET user_fav_product = (?) WHERE id_user = (?)", [items, user], (err, result) => {
    if(err)  console.log(err);
    else  res.send(result);
  });
});

// dodawnianie przepisu do ulubionych
app.post('/add-recipe-fav', (req, res) => {
  const items = req.body.items;
  const user = req.body.user;
  
  db.query("UPDATE users SET user_fav_recipe = (?) WHERE id_user = (?)", [items, user], (err, result) => {
    if(err)  console.log(err);
    else  res.send(result);
  });
});


// rejestrowanie użytkownika w bazie wraz z hashowaniem hasła
app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log("Username: " + username + ", Pass: " + password);

  if(username && password) {
      db.query("SELECT * FROM users WHERE user_name = ?", [username], (err, res) => {
          if(err) console.log(err);
          if(res.length >= 1) console.log("Użytkownik istnieje");
          else {
              bcrypt.hash(password, saltRounds, function(err, hash) {
                  if(err)    console.log(err);
                  db.query("INSERT INTO users (user_name, user_pswd) VALUES (?, ?)", [username, hash], (err, res) => {
                      if(err)   console.log(err);
                      if(res)    console.log("Dodano do bazy");
                 });
              });
          }
      });
  } else {
      console.log("Nie uzupełniono pola rejestracji!");
  }
});

// logowanie użytkownika
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if(username && password) {
      db.query("SELECT * FROM users WHERE user_name = ?", username, (err, result) => {
          if(err) console.log(err);
          if(result.length > 0)  {
              bcrypt.compare(password, result[0].user_pswd, (err, response) => {
                  if(err) console.log(err);
                  if(response)    res.send(result[0]);   //res.send({message: 'Zalogowano! Witaj ' + result[0].user_name});
                  else    res.send({message: 'Zła nazwa użytkownika lub hasło!'});
              });
          } else    res.send({message: 'Użytkownik nie istnieje!'});
      });
  } else  res.send({message: 'Uzupełnij pole nazwa i/lub hasło!'});
});

// pobranie ulubionych produktów użytkownika
app.post('/fav-products', (req, res) => {
  const id = req.body.favProductId;

  db.query("SELECT * FROM products WHERE id_product = (?)", [id], (err, result) => {
    if(err)  {console.log(err);}
    else  {res.send(result);}
  });
});

// pobranie ulubionych przepisów użytkownika
app.post('/fav-recipes', (req, res) => {
  const id = req.body.favRecipesId;

  db.query("SELECT * FROM recipes WHERE id_recipe = (?)", [id], (err, result) => {
    if(err)  {console.log(err);}
    else  {res.send(result);}
  });
});

// pobranie listy przepisów do sprawdzenia
app.get('/check-recipes', (req, res) => {
  db.query("SELECT * FROM recipes WHERE recipe_status = 'toCheck'", (err, result) => {
    if(err)  {console.log(err);}
    else  {res.send(result);}
  });
});

// zmienia status przepisu na sprawdzony
app.post('/accept-recipe', (req, res) => {
  const id = req.body.id;

  db.query("UPDATE recipes SET recipe_status = 'checked' WHERE id_recipe = (?)", [id], (err, result) => {
    if(err) console.log(err);
    else res.send('Zmieniono rekord!');
  });
});

// nadanie admina użytkownikowi
app.post('/add-new-admin', (req, res) => {
  const userName = req.body.userName;

  db.query("UPDATE users SET user_role = 'admin' WHERE user_name = (?)", [userName], (err, result) => {
    if(err) console.log(err);
    else res.send('Zmieniono rekord!');
  });
});


// serwer
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});