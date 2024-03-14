# Exercices

```sql
-- Je souhaite récupérer la liste des étudiants trier par nom, prénom
SELECT
  *
FROM
  student
ORDER BY
  last_name ASC,
  first_name ASC;

-- Je souhaite connaître le nombre d'étudiants par nom de famille...
-- Je veux avoir afficher le nom de famille et à côté le nombre d'étudiants
SELECT
    COUNT(*) AS nb_student,
    last_name
FROM
    student
GROUP BY
    last_name
ORDER BY
    nb_student DESC;

-- Je souhaite connaître le nombre d'étudiants par nom de famille dans la même promo
-- J'aurai afficher le nom de famille, le nombre d'étudiant, et l'id de la promo
SELECT
  COUNT(*) AS nb_student,
  last_name,
  promo_id
FROM
  student
GROUP BY
  last_name,
  promo_id
ORDER BY
  nb_student DESC,
  promo_id DESC;
```
