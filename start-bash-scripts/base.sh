#!/bin/bash

# lanza todos los procesos de base del sistema (Jun/07/2023)

# lanza el roscore (ros1)
# gnome-terminal --tab -- bash -c "./roscore.sh; exec bash -i"

# lanza el ros1_bridge (ros1 + ros2)
# gnome-terminal --tab -- bash -c "./ros1_bridge.sh; exec bash -i"

# lanza el rosbridge_server (ros2)
gnome-terminal --tab -- bash -c "./rosbridge_server.sh; exec bash -i"

# lanza la aplicación hmi mediante Vite (web)
gnome-terminal --tab -- bash -c "./hmi-launch.sh; exec bash -i"

# lanza servidor de video en streaming (ros2)
gnome-terminal --tab -- bash -c "./web-video-server.sh; exec bash -i"


