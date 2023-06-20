#!/bin/bash

# Titulo
echo "##############################"
echo "nodo pub01"
echo "##############################"

# carga ros2
source /home/francisco/TFM_Apps/startUp/load-ros2.sh

# lanza nodo pub01
ros2 run monitoring_station_tfm pub01
