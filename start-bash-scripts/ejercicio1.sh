#!/bin/bash

# lanza todos los procesos del ejercicio 1 (Jun/07/2023)


gnome-terminal --tab -- bash -c "./camera-rj8-front.sh; exec bash -i"


gnome-terminal --tab -- bash -c "./camera-rj8-rear.sh; exec bash -i"


gnome-terminal --tab -- bash -c "./camera-rj8-movil.sh; exec bash -i"

