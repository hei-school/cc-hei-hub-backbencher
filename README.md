# Gestion de Tableau de Nombres

Ce script permet de gérer un tableau de nombres avec des fonctionnalités d'ajout, de vérification d'erreurs, et de sauvegarde

## Installation

1. Clonez le dépôt ou téléchargez le fichier source.
2. Exécutez les commandes spécifiques nécéssaires sur le terminal, comme indiquées dans chaques braches.

## Utilisation

Le script permet à l'utilisateur d'ajouter des nombres au tableau comme suivant les instructions. Par exemple : 

- Un nombre ne peut être ajouté qu'une seule fois dans le tableau.
- Les nombres 666, 69 et 8 sont interdits pour des raisons spécifiques.
- On ne peut ajouter plus de deux nombres simultanément.

**Exemple (javascript) :**

```bash
$ node script.js
Entrez un nombre de 1 à 10 : 5
Tableau [5]
Entrez un nombre de 1 à 10 : 8
Erreur 423 : Lock exception
