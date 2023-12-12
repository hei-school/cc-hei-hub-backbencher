def handle_errors(tableau, nombre):
    if len(tableau) == 10:
        raise ValueError("Erreur 507 : Stockage Insuffisant Cloud (tableau complet de 1 à 10)")
    elif nombre == "":
        raise ValueError("Erreur 501 : NotImplemented (l'utilisateur n'a rien ajouté)")
    elif nombre is None:
        raise ValueError("Erreur 500 : CorruptedFile (paramètre manquant ou incorrect)")
    elif nombre == 504:
        raise ValueError("Erreur 504 : ServerDown (serveur non disponible)")
    else:
        raise ValueError("Erreur inconnue")
