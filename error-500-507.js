module.exports = {
    handleOtherErrors(tableau, nombre) {
      if (tableau.length === 10) {
        throw new Error("Erreur 507 : Stockage Insuffisant Cloud (tableau complet de 1 à 10)");
      } else if (nombre === "") {
        throw new Error("Erreur 501 : NotImplemented (l'utilisateur n'a rien ajouté)");
      } else if (nombre === undefined || nombre === null) {
        throw new Error("Erreur 500 : CorruptedFile (paramètre manquant ou incorrect)");
      } else if (nombre === 504) {
        throw new Error("Erreur 504 : ServerDown (serveur non disponible)");
      } else {
        throw new Error("Erreur inconnue");
      }
    },
  };
  