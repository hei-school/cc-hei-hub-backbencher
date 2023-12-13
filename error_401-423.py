import time

def handle_errors(tableau, nombre):
    int_value = int(nombre)

    if int_value < 1:
        raise ValueError("Erreur 401 : Non autorisé (nombre plus petit que 1)")
    elif int_value == 0:
        raise ValueError("Erreur 404 : Fichier non trouvé (nombre égal à 0)")
    elif isnan(int_value):
        # Utiliser time.sleep pour gérer la demande expirée après 5 secondes
        nombre_entree = None
        try:
            time.sleep(5)
            nombre_entree = int(input("Entrez un nombre : "))
        except ValueError:
            raise ValueError("Erreur 408 : Request Timeout (l'utilisateur n'a pas entré un nombre pendant 5 secondes)")
    elif int_value > 10:
        raise ValueError("Erreur 423 : Fichier trop volumineux (nombre plus grand que 10)")

# La fonction isnan pour vérifier si le nombre est NaN
def isnan(value):
    try:
        import math
        return math.isnan(value)
    except:
        return False
