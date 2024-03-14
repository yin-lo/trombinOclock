# Git

## Initialisation

Pour initialiser un repo git dans un dossier:

```bash
git init
```

Cela va créer un dossier `.git` dans le dossier courant.

## Le connecter à un repo distant (github)

Depuis le site de github, créer un nouveau repo.
On copie la ligne du `git remote add origin`

```bash
git remote add origin git@github.com:O-clock-Onigiri/S04-trombinoclock-Aspitrine.git
```

Une fois la connexion établie, on peut pusher notre code sur le repo distant:

```bash
# -u = --set-upstream
# Permet de ne pas avoir à préciser l'origine lors des prochains push
git push -u origin master
```
