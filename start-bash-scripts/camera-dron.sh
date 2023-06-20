#!/bin/bash

# Titulo
echo "##############################"
echo "camera FV8 Dron"
echo "##############################"

# carga ros2
source /home/francisco/TFM_Apps/startUp/load-ros2.sh

# lanza el nodo traductor de CompressedImage a Image
ros2 run camera_driver dron
