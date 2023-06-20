#!/bin/bash

# Titulo
echo "##############################"
echo "rosbridge_server"
echo "##############################"

# lanza los workspaces de ros2
source /home/francisco/TFM_Apps/startUp/load-ros2.sh

# se coloca en el directorio del servidor de rosbridge
cd /home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/launch

# arranca el servidor en el puerto 9090
ros2 launch rosbridge_websocket_launch.xml
