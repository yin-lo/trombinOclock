// Je récupère le Client du module pg qui va me permettre
// de faire mes requêtes SQL vers ma BDD
const { Client } = require('pg');

// Je crée un nouveau client
const client = new Client(process.env.PG_URL);
client.connect();

module.exports = client;
