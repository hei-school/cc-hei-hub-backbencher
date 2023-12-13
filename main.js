const prompt = require("prompt-sync")();
const { addError } = require('./error-100-400');
const { handleErrors } = require('./error-401-423'); 
const fs = require('fs');

let tableau = [];

// Charger le tableau depuis le fichier s'il existe
try {
  const data = fs.readFileSync('tableau.json', 'utf8');
  tableau = JSON.parse(data);
} catch (err) {
  // Le fichier n'existe probablement pas encore, c'est normal
}

function sauvegarderTableau() {
  // Sauvegarder le tableau dans le fichier
  fs.writeFileSync('tableau.json', JSON.stringify(tableau));
}

function ajouterNombre() {
  const nombre = prompt('Entrez un nombre de 1 à 10 : ');
  const nombres = nombresString.split(',').map(num => num.trim());

  // Gestion des erreurs
  try {
    if (nombres.length >= 3) {
      throw new Error("Erreur 429 : Too Many Requests");
    }
    for (const nombre of nombres) {
      addError(tableau, nombre);
      handleErrors(tableau, nombre); 
      tableau.push(nombre);
    }
    console.log("Tableau", [...tableau]);
    sauvegarderTableau();
  } catch (error) {
    console.log(error.message);
  }
}

ajouterNombre();
