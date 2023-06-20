#!/bin/bash

# Titulo
echo "##############################"
echo "camera RoverJ8 Rear"
echo "##############################"

# carga ros2
source /home/francisco/TFM_Apps/startUp/load-ros2.sh

# lanza el nodo traductor de CompressedImage a Image
ros2 run camera_driver rj8_rear
