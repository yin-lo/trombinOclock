const client = require('../db');

const promoDataMapper = {
  // Le but de ma méthode va être de faire la requête à la BDD
  // Et de retourner les infos
  async getAllPromo() {
    const result = await client.query('SELECT * FROM promo');

    // result.rows contient les données retournées par la requête
    return result.rows;
  },

  async getPromoById(id) {
    // id = 771
    // id = '771; DROP TABLE student; --'
    // requête exécuter => SELECT * FROM promo WHERE id = 771; DROP TABLE student; --
    // Faille de sécurité : SQL Injection
    // A NE PAS FAIRE !!!!!!
    // const result = await client.query(`SELECT * FROM promo WHERE id = ${id}`);
    // Pour se protéger, on va faire des requêtes préparées / paramétrées
    const result = await client.query('SELECT * FROM promo WHERE id = $1', [id]);
    // ici, le $1 va être remplacé par la 1ère valeur du tableau
    // Si j'ai une deuxième valeur dans mon tableau, elle sera remplacée par $2, etc.
    // $3 => 3ème valeur du tableau ...

    // Je récupère les données dans la propriété `rows`
    // `rows` contiend un tableau avec les résultats de ma requête
    // ma requête n'étant censé retourné qu'un seul résultat, je vais chercher le premier élément
    // result.rows[0] => soit c'est un objet promo, soit c'est undefined
    return result.rows[0];
  },

  async createPromo(promoData) {
    await client.query('INSERT INTO promo (name, github_organization) VALUES ($1, $2)', [promoData.name, promoData.github_organization]);
  },
};

module.exports = promoDataMapper;
