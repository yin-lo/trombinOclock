# SQL

Généralement, avec une donnée on à 4 opérations possibles (CRUD) :
- C: Create, création
- R: Read, lecture
- U: Update, modification
- D: Delete, suppression

## Read

```sql
SELECT * FROM table_name;
SELECT * FROM promo;
```

## Create

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

-- Exemple
INSERT INTO student (first_name, last_name, github_username, profile_picture_url, promo_id)
VALUES ('Jean', 'Bon', 'Jean bon', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/32.jpg', 771);

-- Si on ne renseigne pas toutes les colonnes, la valeur par défaut sera null
INSERT INTO student (first_name, last_name, github_username, promo_id)
VALUES ('Jean', 'Bon', 'Jean bon', 771);
```

## Update

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

-- Exemple
UPDATE student
SET 
  last_name = 'Logie', 
  first_name = 'Quentin'
WHERE id = 8634;
```


## Delete

```sql
DELETE FROM table_name
WHERE condition;

-- Exemple
DELETE FROM student
WHERE id = 8634;
```
