# SQL

## Challenge Épisode 2

```sql
-- toutes les promos, dans l'ordre alphabétique
SELECT * FROM promo ORDER BY "name" ASC;

-- tous les étudiants, dans l'ordre alphabétique des noms de famille
SELECT * FROM student ORDER BY last_name;

-- tous les étudiants de la promo 135
SELECT
    *
FROM
    student
WHERE
    promo_id = 135;

-- les étudiants dont le nom ou le prénom ressemble à "max"
SELECT
    *
FROM
    "student"
WHERE
    "first_name" ILIKE '%max%'
    OR "last_name" ILIKE '%max%';
```

## Challenge Épisode 3

```sql
-- Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5
INSERT INTO student (first_name, last_name, promo_id) VALUES ('Chuck', 'Norris', 5);

-- Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'orga
INSERT INTO promo (id, "name") VALUES (786, 'César');

-- Mettre à jour la promo 5 pour la renommer "Cleo"
UPDATE promo SET "name" = 'Cleo' WHERE id = 5;

-- Supprimer la promo 123
DELETE FROM promo WHERE id = 123;
-- Impossible de supprimer la promo si des étudiants sont liés
-- Solution possible, supprimer les étudiants avant de supprimer la promo
DELETE FROM student WHERE promo_id = 123;
```
