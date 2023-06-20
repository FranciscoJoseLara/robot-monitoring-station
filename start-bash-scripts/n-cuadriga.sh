#!/bin/bash

# Titulo
echo "##############################"
echo "Nodo Cuadriga"
echo "##############################"

# carga ros2
source /home/francisco/TFM_Apps/startUp/load-ros2.sh

# lanza el nodo traductor de CompressedImage a Image
ros2 run monitoring_station_tfm cuadriga
