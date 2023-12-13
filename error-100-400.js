module.exports = {
  addError(tableau, nombre) {
    if (tableau.includes(nombre)) {
      throw new Error("Erreur 100 : Nombre dupliqué");
    } else if (parseInt(nombre) === 666) {
      throw new Error("Erreur 400 : Nombre sensible");
    } else if (!nombre.match(/^[1-9]\d*$/) && (parseInt(nombre) != 0) && (parseInt(nombre) > 10)) {
      throw new Error("Erreur 400 : Mauvais type de nombre");
    } else if (!nombre.match(/^[1-9]$/) && (parseInt(nombre) != 0) && (parseInt(nombre) > 10)) {
      throw new Error("Erreur 400 : Nombre invalide");
    }
  },
};
