#!/bin/bash

# Titulo
echo "##############################"
echo "web video server"
echo "##############################"

# carga ros2
source /home/francisco/TFM_Apps/startUp/load-ros2.sh

# lanza el servidor web de video en streaming
ros2 run web_video_server web_video_server
