// Récupère le nombre de visites depuis le stockage local
let visitCount = localStorage.getItem('visitCount');

// Si c'est la première visite, initialise le compteur à 1, sinon incrémente-le
visitCount = visitCount ? parseInt(visitCount) + 1 : 1;

// Enregistre le nouveau nombre de visites dans le stockage local
localStorage.setItem('visitCount', visitCount);

// Affiche le nombre de visites dans la console (vous pouvez le supprimer dans la version finale)
console.log(`Nombre de visites: ${visitCount}`);

// Vous pouvez maintenant utiliser la valeur de visitCount comme bon vous semble dans votre site
