module.exports = {
  handleErrors(tableau, nombre) {
    if (parseInt(nombre) < 1) {
      throw new Error("Erreur 401 : Non autorisé (nombre plus petit que 1)");
    } else if (parseInt(nombre) === 0) {
      throw new Error("Erreur 404 : Fichier non trouvé (nombre égal à 0)");
    } else if (isNaN(parseInt(nombre))) {
      // Utiliser setTimeout pour gérer la demande expirée après 5 secondes
      let nombreEntree = null;
      try {
        nombreEntree = prompt.timeout(5000);
      } catch (error) {
        throw new Error("Erreur 408 : Request Timeout (l'utilisateur n'a pas entré un nombre pendant 5 secondes)");
      }
    } else if (parseInt(nombre) > 10) {
      throw new Error("Erreur 423 : Fichier trop volumineux (nombre plus grand que 10)");
    }
  },
};
