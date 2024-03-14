require('dotenv/config');
const { Client } = require('pg');

// On va créer un nouveau client
// Il va falloir préciser les informations de connexion
// postgresql://monUtilisateur:monMotDePasse@monHost:monPort/maBaseDeDonnées
// Par exemple
// postgresql://trombi:trombi@localhost:5432/trombi
const client = new Client(process.env.PG_URL);

// Pour pouvoir attendre le résultat de la promesse avec `await`
// Je dois préciser que ma fonction est `async`
async function exec() {
  try {
    await client.connect();
    // Lorsqu'on exécute une requête, une promesse est faite...
    // On doit attendre sont accomplissement avec `await`
    const result = await client.query('SELECT * FROM promo');

    // result.rows va contenir le résultat de la requête
    // Ca sera TOUJOURS un tableau
    console.log(result.rows);
  } catch (err) {
    // SI la promesse échoue...
    // Je passe ici
    console.error(err);
  }
}

exec();
