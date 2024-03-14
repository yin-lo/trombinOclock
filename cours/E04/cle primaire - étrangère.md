# Clé primaire - étrangère

## Clé primaire (Primary Key)

C'est un champ (ou plusieurs) qui caractérisent de manière unique un enregistrement dans une table. Une donnée discriminante.

- Généralement, on utilise un champ `id` qui va être généré automatiquement par la base de données.
- Cela peut être également un combinaison de champs.
  - `first_name` + `last_name` peuvent être combiné pour être une clé primaire. On ne pourra pas insérer deux fois un étudiant avec le même couple `first_name` + `last_name`. Cette exemple n'est pas idéal pour les homonymes.

## Clé étrangère (Foreign Key)

C'est un champ qui va faire référence à une clé primaire ou à une donnée unique d'une autre table.
L'idée est de créer une relation entre nos données.

- `student.promo_id` fait référence à la table `promo` au champ `id`.
  - Une promo ne peut pas être supprimée si des étudiants sont liés à cette promo.
  - Ca permettra de récupérer les données en lien avec la promo d'un étudiant.
