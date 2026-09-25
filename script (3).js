/* ==========================================================
   script.js : deux petites améliorations.
   La page fonctionne aussi sans ce fichier (le lien e-mail marche toujours).
   ========================================================== */

// 1. Met à jour l'année dans le pied de page
document.getElementById("annee").textContent = new Date().getFullYear();

// 2. Bouton "Copier l'adresse e-mail"
const lienEmail = document.getElementById("lien-email");
const boutonCopier = document.getElementById("copier-email");
const statut = document.getElementById("copie-statut");

// On lit l'adresse dans le lien mailto : elle n'est écrite qu'à un seul endroit
const adresse = lienEmail.getAttribute("href").replace("mailto:", "");

// Le bouton était caché : on l'affiche maintenant que le JavaScript fonctionne
boutonCopier.hidden = false;

boutonCopier.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(adresse);       // copie dans le presse-papiers
    statut.textContent = "Adresse copiée.";
  } catch (erreur) {
    // Si la copie est refusée, on affiche l'adresse pour la copier à la main
    statut.textContent = "Copie impossible. Voici l'adresse : " + adresse;
  }
});