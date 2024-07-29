// dotenv va ajouter dans l'objet process.env les variables d'environnement
// définies dans le fichier .env
require('dotenv/config');
const express = require('express');
const session = require('express-session');
const router = require('./app/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('public'));

// STP express, apprend à lire le contenu "URL encoded" des requêtes
// Si express recoit des données sous cette forme, il sera capable de les
// Ajouter dans le `req.body`
app.use(express.urlencoded({ extended: true }));

// J'initialise le middleware express-session
// Il s'occupera de gérer les cookies de session
// De générer un identifiant de session unique pour chaque utilisateur
app.use(session({
  secret: process.env.SESSION_SECRET || 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {},
}));

app.use((req, res, next) => {
  next();
});

app.use(router);

// process.env contient les variables d'environnement
// On définit un port par défaut si la variable d'environnement PORT n'est pas définie
// Si process.env.PORT === undefined, on utilise le port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
