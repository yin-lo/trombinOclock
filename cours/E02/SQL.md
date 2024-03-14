# SQL

Pour se connecter à notre base de données en ligne de commande


Depuis le téléporteur (n'importe où dans le terminal)

```bash
sudo -i -u postgres psql
```


Pour ceux ayant installer postgres sur mac avec le lien fourni (https://postgresapp.com/)

```bash
psql
# Ou
psql -U postgres
```

## Initialiser une base de données

### Créer un utilisateur

```sql
-- On créer un user qui se nomme trombi et on lui fournit un mot de passe
CREATE USER trombi WITH PASSWORD 'trombi';
-- Pour voir la liste des utilisateurs de notre base de données
\du
```

### Créer la base de données

```sql
-- On créer la base de donnée trombi appartenant à l'utilisateur trombi
CREATE DATABASE trombi OWNER trombi;
-- Pour voir la liste des bases de données de notre serveur
\l
```

## Pour quitter le terminal psql

```sql
\q
```

Pour quitter le terminal en tant que postgres

```bash
exit
```

## Pour exécuter un fichier SQL

```bash
# -U pour spécifier l'utilisateur
# -d pour spécifier la base de données
# -f pour spécifier le fichier à exécuter
psql -U trombi -d trombi -f ./data/create_db.sql
```

## Pour se connecter à la base de données

```bash
# On va se connecter à la base de données trombi en tant que l'utilisateur trombi
psql -U trombi -d trombi
```

## SQL

Attention ! Les commandes SQL doivent obligatoirement respecter certaines choses :

- ne pas oublier le `;` à la fin de chaque commande
- lorsque je met des valeurs étant des chaines de caractères, je dois les entourer de guillemets simples `'`
- sensible au typage (text !== int)
- sensible à la casse (Nom !== nom)

## Quelques commandes SQL pratique

- Pour quitter
  - `\q`
  - `exit`
  - `CTRL + D`
- `q` pour quitter lorsqu'on est dans une commande interactive
- `\l` pour lister les bases de données
- `\du` pour lister les utilisateurs
- `\dt` pour lister les tables
- `\s` pour avoir l'historique des commandes
- `Fleche vers le haut` pour remonter dans l'historique des commandes
- `\d nom_de_la_table` pour voir la structure d'une table (nom des colonnes, type, ...)

## Récupérer des données d'une table

```sql
-- Pour récupérer les nom des promos
-- SELECT => permet de récupérer des données
-- name => nom de la colonne
-- FROM => permet de préciser la table
-- promo => nom de la table
SELECT name FROM promo;
-- Récupérer plusieurs colonnes en même temps
SELECT id, name FROM promo;
-- Pour récupérer toutes les colonnes de la table
SELECT * FROM promo;

-- Je peux rajouter des conditions
SELECT * FROM promo WHERE name = 'Onigiri';
SELECT * FROM promo WHERE name = 'Onigiri' AND id = 1;
SELECT * FROM promo WHERE name = 'Onigiri' OR id = 1;

-- Je peux avoir des conditions si une colonne contient un bout de valeur
-- promo dont le nom commence par Oni
-- % => n'importe quel caractère / nombre de fois
SELECT * FROM promo WHERE name LIKE 'Oni%';
SELECT * FROM promo WHERE name LIKE '%giri';
SELECT * FROM promo WHERE name LIKE '%gi%';
-- Pour rendre la recherche insensible à la casse
SELECT * FROM promo WHERE name ILIKE '%oni%';
```

```sql
-- On peut également trier / ordonner les résultats
-- L'ordre par défaut est croisant (ASC, ASCendant)
SELECT * FROM promo ORDER BY name ASC;
-- Pour trier dans l'autre sens (DESC, DESCendant)
SELECT * FROM promo ORDER BY name DESC;
```

```sql
-- On peut compter le nombre de résultats
SELECT COUNT(*) FROM promo;
-- On peut renommer au besoin le résultat
-- AS permet de changer le nom de la colonne
SELECT COUNT(*) AS nombre_de_promo FROM promo;
```
