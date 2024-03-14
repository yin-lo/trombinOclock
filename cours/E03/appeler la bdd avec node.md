# Appeler la BDD avec Node

## Dans notre contrôler

### Avant

```js
const appController = {
  afficherListePromo(req, res) {
    res.render('promo/list', {
      promos: []
    })
  }
}
```

### Étapes

1. appel BDD = action asynchrone
   1. dire que la méthode est asynchrone
   2. englober le code dans un bloc `try`/`catch`
      1. En cas de catch, on envoie une erreur 500 `res.status(500).send('Erreur interne')`
   
```js
const appController = {
  async afficherListePromo(req, res) {
    try {
      res.render('promo/list', {
        promos: []
      })
    } catch (error) {
      res.status(500).send('Erreur interne')
    }
  }
}
```

2. Faire la requête SQL
  1. Créer un client `pg` et le connecter
  2. Exécuter la requête
  3. Attendre le résultat
  4. Récupérer les données dans la propriété `rows` du résultat

```js
// 1. On créer le client
const { Client } = require('pg')
const client = new Client(process.env.PG_URL)
client.connect()

const appController = {
  async afficherListePromo(req, res) {
    try {
      // 2 et 3. On exécute la requête et on attend le résultat (avec await)
      const result = await client.query('SELECT * FROM promo')
      // 4. On récupère les données
      const promos = result.rows

      res.render('promo/list', {
        // promos: promos,
        // Identique à la ligne précédente
        promos
      })
    } catch (error) {
      res.status(500).send('Erreur interne')
    }
  }
}
```
