module.exports = {
    handleOtherErrors(condition) {
      if (condition === "CorruptedFile") {
        throw new Error("Erreur 500 : CorruptedFile (fichier corrempue)");
      } else if (condition === "NotImplemented") {
        throw new Error("Erreur 501 : NotImplemented (l'utilisateur n'a rien ajouté)");
      } else if (condition === "ServerDown") {
        throw new Error("Erreur 504 : ServerDown (serveur inaccessible)");
      } else if (condition === "StockageInsuffisantCloud") {
        throw new Error("Erreur 507 : Stockage Insuffisant Cloud (tableau complet de 1 à 10)");
      } else {
        throw new Error("Erreur inconnue");
      }
    },
  };
  