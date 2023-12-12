module.exports = {
  addError(tableau, nombre) {
    if (tableau.includes(nombre)) {
      throw new Error("Erreur 100 : Nombre dupliqué");
    } else if (parseInt(nombre) === 666) {
      throw new Error("Erreur 400 : Nombre sensible");
    } else if (parseInt(nombre) === 69) {
      throw new Error("Erreur 451 : Action unavailable due to Legal Reasons");
    } else if (parseInt(nombre) === 8) {
      throw new Error("Erreur 423 : Lock exception");
    } else if (!nombre.match(/^[1-9]\d*$/) && (parseInt(nombre) != 0) && (parseInt(nombre) > 10)) {
      throw new Error("Erreur 400 : Mauvais type de nombre");
    } else if (!nombre.match(/^[1-9]$/) && (parseInt(nombre) != 0) && (parseInt(nombre) > 10)) {
      throw new Error("Erreur 400 : Nombre invalide");
    }
  },
};
