# Aggregation SQL

Le but des agrégations est de faire des calculs sur des groupes de données.

En SQL on a plusieurs fonctions d'agrégation :
- `COUNT()`: Compte le nombre de lignes
- `SUM()`: Fait la somme
- `AVG()`: Fait la moyenne
- `MIN()`: Donne la valeur minimum
- `MAX()`: Donne la valeur maximum

## Exemple

```sql
-- Je récupère le nombre de promo
SELECT COUNT(*) FROM promo;
```

## Regroupement

```sql
-- Je compte le nombre d'étudiant par promo
-- Ordonné par nombre d'étudiant décroissant
SELECT
    COUNT(*) as nb_student, promo_id
FROM
    student
GROUP BY promo_id
ORDER BY nb_student DESC;
```
