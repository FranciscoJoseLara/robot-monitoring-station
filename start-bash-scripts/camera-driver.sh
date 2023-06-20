#!/bin/bash

# Titulo
echo "##############################"
echo "camera driver"
echo "##############################"

# carga ros2
source /home/francisco/TFM_Apps/startUp/load-ros2.sh

# lanza el driver de la cámara (index '0' para camara del PC)
ros2 run camera_driver camera
