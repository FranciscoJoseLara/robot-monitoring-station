#!/bin/bash

# Lanza el servicio de streaming de imagenes de la cámara (integrada del PC)

# lanza el driver de la cámara en una nueva tab de terminal
gnome-terminal --tab -- bash -c "./camera-driver.sh; exec bash -i"

# lanza el servidor web de video en streaming
gnome-terminal --tab -- bash -c "./web-video-server.sh; exec bash -i"

