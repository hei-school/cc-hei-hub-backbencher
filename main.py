import json
from error_100_400 import add_error
from error_401_423 import handle_errors

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
    nombres_string = input('Entrez un nombre de 1 à 10 (séparés par des virgules) : ')
    nombres = [num.strip() for num in nombres_string.split(',')]

    # Gestion des erreurs
    try:
        if len(nombres) >= 3:
            raise Exception("Erreur 429 : Too Many Requests")

        for nombre in nombres:
            add_error(tableau, nombre)
            handle_errors(tableau, nombre)
            # Ajouter l'élément au tableau uniquement si aucune erreur n'est détectée
            tableau.append(nombre)

        print("Tableau", tableau.copy())
        sauvegarder_tableau()
    except Exception as error:
        print(error)

ajouter_nombre()
