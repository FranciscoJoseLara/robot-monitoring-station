#!/bin/bash

# lanza todos los procesos del ejercicio 2 (Jun/07/2023)


# cameras
gnome-terminal --tab -- bash -c "./camera-rj8-front.sh; exec bash -i"


gnome-terminal --tab -- bash -c "./camera-rj8-rear.sh; exec bash -i"


gnome-terminal --tab -- bash -c "./camera-rj8-movil.sh; exec bash -i"


gnome-terminal --tab -- bash -c "./camera-dron.sh; exec bash -i"


# GPS
gnome-terminal --tab -- bash -c "./n-cuadriga.sh; exec bash -i"

gnome-terminal --tab -- bash -c "./n-rambler.sh; exec bash -i"

gnome-terminal --tab -- bash -c "./n-dron.sh; exec bash -i"

gnome-terminal --tab -- bash -c "./n-roverj8.sh; exec bash -i"


# GPS Targets
gnome-terminal --tab -- bash -c "./n-tX2.sh; exec bash -i"

gnome-terminal --tab -- bash -c "./n-tX3.sh; exec bash -i"

gnome-terminal --tab -- bash -c "./n-tX4.sh; exec bash -i"

gnome-terminal --tab -- bash -c "./n-tPixel.sh; exec bash -i"
