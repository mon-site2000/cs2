import pygame
from pygame import *
from random import*

pygame.init()

# Dimensions de la fenêtre
largeur = 640  # Largeur en pixels
hauteur = 480  # Hauteur en pixels
score = 0
taille = 30
xc = 10
yc = 8
serpent = [(xc, yc)]
x = randint(0, 19)
y = randint(0, 15)


couleur1 = randint(0,255)
couleur2 = randint(0,255)
couleur3 = randint(0,255)


taille_serpent = 1

def dessine_serpent(fenetre, serpent):
    for i in serpent:
        pygame.draw.rect(fenetre, (couleur1, couleur2, couleur3), (i[0]*30, i[1]*30, taille, taille))

def dessine_pomme(fenetre, x, y):
    pygame.draw.rect(fenetre, "red", (x*taille, y*taille, taille, taille))

try:
    fenetre = pygame.display.set_mode((largeur, hauteur))
    pygame.display.set_caption('Snake Game')

    clock = pygame.time.Clock()
    vitesse = 10

    continuer = True
    pygame.key.set_repeat(100, 20)
    direction = 'droite'

    while continuer:
        for event in pygame.event.get():
            if event.type == QUIT:
                continuer = False

            if event.type == KEYDOWN:
                if event.key == K_UP and direction != 'bas':
                    direction = 'haut'
                elif event.key == K_DOWN and direction != 'haut':
                    direction = 'bas'
                elif event.key == K_LEFT and direction != 'droite':
                    direction = 'gauche'
                elif event.key == K_RIGHT and direction != 'gauche':
                    direction = 'droite'
        
        if direction == 'haut':
            yc -= 1
        elif direction == 'bas':
            yc += 1
        elif direction == 'gauche':
            xc -= 1
        elif direction == 'droite':
            xc += 1

        # Si le serpent dépasse les limites de l'écran, le faire réapparaître de l'autre côté
        if xc >= largeur//taille:
            continuer = False
        elif xc < 0:
            continuer = False

        elif yc >= hauteur//taille:
            continuer = False
        elif yc < 0:
            continuer = False

        

        nouvelle_tete = (xc, yc)
        serpent.insert(0, nouvelle_tete)

        if nouvelle_tete in serpent[1:]:
            continuer = False

        # Si le serpent atteint la nourriture
        if xc == x and yc == y:
            x = randint(0, 19)
            y = randint(0, 15)
            couleur1 = randint(0,255)
            couleur2 = randint(0,255)
            couleur3 = randint(0,255)
            taille_serpent += 1
            score += 1

        if len(serpent) > taille_serpent:
            serpent.pop()

        fenetre.fill("gray")  # Fond gris
        dessine_pomme(fenetre, x, y)
        dessine_serpent(fenetre, serpent)
        pygame.display.flip()

        clock.tick(vitesse)  # Limiter la vitesse du jeu
    
    continuer = True
    font = pygame.font.SysFont ("comic sans MS ", 24 , bold =False , italic =False )
    texte = font.render ("score : "+ str(score), 1 , "black" )
    fenetre.blit (texte ,(380 ,230) )
    pygame.display.flip()
    while continuer:
        for event in pygame.event.get():
            if event.type == MOUSEBUTTONDOWN:
                continuer = False

            if event.type == QUIT:
                continuer = False
finally:
    pygame.quit()


