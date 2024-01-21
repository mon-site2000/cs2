
from pytube import YouTube

# Demander à l'utilisateur de saisir le lien de la vidéo

lien = input("Entrez le lien de la vidéo YouTube : ")

# Créer un objet YouTube à partir du lien
video = YouTube(lien)

# Afficher le titre de la vidéo
print("Titre : ", video.title)

# Afficher la durée de la vidéo en secondes
print("Durée : ", video.length, "secondes")

# Choisir le premier flux disponible
flux = video.streams.first()

# Télécharger la vidéo dans le dossier courant
flux.download()

# Afficher un message de confirmation
print("La vidéo a été téléchargée avec succès !")
