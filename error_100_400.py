def add_error(tableau, nombre):
    try:
        int_value = int(nombre)
    except ValueError:
        raise ValueError("Erreur 400 : Mauvais type de nombre")

    if nombre in tableau:
        raise ValueError("Erreur 100 : Nombre dupliqué")
    elif int_value == 666:
        raise ValueError("Erreur 400 : Nombre sensible")
    elif int(nombre) == 69:
        raise ValueError("Erreur 451 : Action unavailable due to Legal Reasons")
    elif int(nombre) == 8:
        raise ValueError("Erreur 423 : Lock exception")
    elif not (1 <= int_value <= 10) and (int_value != 0) and (int_value > 10):
        raise ValueError("Erreur 400 : Mauvais type de nombre")
    elif not (1 <= int_value <= 10) and (int_value != 0) and (int_value > 10):
        raise ValueError("Erreur 400 : Nombre invalide")
