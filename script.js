// Fonction qui récupère la valeur d'un cookie
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
  
  // Fonction qui crée ou modifie un cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Fonction qui affiche le compteur de visites
  function showCounter() {
    // On récupère le nombre de visites stocké dans le cookie "visits"
    var visits = getCookie("visits");
    // Si le cookie n'existe pas, on initialise le nombre de visites à 1
    if (!visits) {
      visits = 1;
    } else {
      // Sinon, on incrémente le nombre de visites de 1
      visits = parseInt(visits) + 1;
    }
    // On met à jour le cookie "visits" avec le nouveau nombre de visites
    setCookie("visits", visits, 365); // Le cookie expire au bout d'un an
    // On affiche le nombre de visites dans un élément HTML avec l'id "counter"
    document.getElementById("counter").innerHTML = "Vous avez visité cette page " + visits + " fois.";
  }
  
  // On appelle la fonction showCounter au chargement de la page
  window.onload = showCounter;
  