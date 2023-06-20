#!/bin/bash

# lanza todos los nodos en 3 terminales distintos

# lanza nodo pub02
gnome-terminal --tab -- bash -c "./pub02.sh; exec bash -i"

# lanza nodo pub03
gnome-terminal --tab -- bash -c "./pub03.sh; exec bash -i"

# lanza nodo pub01
source /home/francisco/TFM_Apps/startUp/pub01.sh
