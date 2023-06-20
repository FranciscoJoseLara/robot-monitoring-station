#!/bin/bash

# Titulo
echo "##############################"
echo "Nodo tX4"
echo "##############################"

# carga ros2
source /home/francisco/TFM_Apps/startUp/load-ros2.sh

# lanza el nodo traductor de CompressedImage a Image
ros2 run monitoring_station_tfm tX4
