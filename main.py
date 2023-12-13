import json
from error_100_400 import add_error

try:
    with open('tableau.json', 'r') as file:
        tableau = json.load(file)
except FileNotFoundError:
    # Le fichier n'existe probablement pas encore, c'est normal
    tableau = []

def sauvegarder_tableau():
    # Sauvegarder le tableau dans le fichier
    with open('tableau.json', 'w') as file:
        json.dump(tableau, file)

def ajouter_nombre():
    nombre = input('Entrez un nombre de 1 à 10 : ')

    # Gestion des erreurs
    try:
        add_error(tableau, nombre)
        # Ajouter l'élément au tableau uniquement si aucune erreur n'est détectée
        tableau.append(nombre)
        print("Tableau", tableau.copy())
        sauvegarder_tableau()
    except Exception as error:
        print(error)

ajouter_nombre()
