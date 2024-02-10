# importations et initialisation
import pygame  # importation de pygame dans un espace propre
from pygame.locals import* # constantes dans l'espace global
pygame.init()  # lancement de pygame

            
def dessine_plateau (fenetre,matrice):
    for i in range(len(matrice)):
        for j in range(len(matrice[i])):
            if matrice[i][j] == 0:
                pygame.draw.rect(fenetre,"red",(j*50, i*50, 49, 49))
            else:
                pygame.draw.rect(fenetre, "green", (j*50, i*50, 49, 49))
    
    pygame.display.flip() 

            
# dimensions de la fenêtre
cote = 50

largeur = 7*cote # largeur en pixels
hauteur = 7*cote # hauteur en pixels


# le try et le finally permettent de gérer les erreurs
try:
    # creation d'une fenetre :
    fenetre = pygame.display.set_mode((largeur,hauteur)) 
    
    # instructions de tracé à mettre ci-dessous :
    c = 7
    l = 7
    plateau = []
    for i in range(l):
        plateau.append([0]*c)
        
    print(plateau)
            
    dessine_plateau (fenetre,plateau)

    # rafraichissement de l'affichage :
    pygame.display.flip() 
    
                
    # boucle permettant de garder la fenêtre ouverte
    continuer = True
    while continuer:
        # gestionnaire d'événements :
        
        for event in pygame.event.get():
                
            if event.type == QUIT: # clic sur la croix
                continuer = False # fin de la boucle
            
            elif event.type ==  MOUSEBUTTONDOWN:
                (x, y) = event.pos
                col = x // 50
                ligne = y // 50
                if col > 0:
                    if plateau[ligne][col-1] == 0:
                        plateau[ligne][col-1] = 1
                    else:
                        plateau[ligne][col-1] = 0
                                       
                if col < 6:        
                    if plateau[ligne][col+1] == 0:
                        plateau[ligne][col+1] = 1
                    else:
                        plateau[ligne][col+1] = 0
                        
                if ligne > 0:        
                    if plateau[ligne-1][col] == 0:
                        plateau[ligne-1][col] = 1
                    else:
                        plateau[ligne-1][col] = 0
                        
                if ligne < 6:        
                    if plateau[ligne+1][col] == 0:
                        plateau[ligne+1][col] = 1
                    else:
                        plateau[ligne+1][col] = 0
            
                
                    
                dessine_plateau (fenetre,plateau)
finally:
    pygame.quit() # Fermeture de Pygame
