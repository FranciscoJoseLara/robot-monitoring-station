#!/bin/bash

# Titulo
echo "##############################"
echo "ros1_bridge"
echo "##############################"

# carga ros1
source /home/francisco/TFM_Apps/startUp/load-ros1.sh

# carga ros2
source /home/francisco/TFM_Apps/startUp/load-ros2.sh

# lanza el ros1_bridge
ros2 run ros1_bridge dynamic_bridge
