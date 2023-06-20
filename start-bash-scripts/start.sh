#!/bin/bash

# lanza todos los procesos para probar el sistema (May/03/2023)

# lanza el roscore (ros1)
gnome-terminal --tab -- bash -c "./roscore.sh; exec bash -i"

# lanza el ros1_bridge (ros1 + ros2)
gnome-terminal --tab -- bash -c "./ros1_bridge.sh; exec bash -i"

# lanza el rosbridge_server (ros2)
gnome-terminal --tab -- bash -c "./rosbridge_server.sh; exec bash -i"

# lanza la aplicación hmi mediante Vito (web)
gnome-terminal --tab -- bash -c "./hmi-launch.sh; exec bash -i"

# lanza los 3 nodos sus/pub (ros2)
gnome-terminal --tab -- bash -c "./nodos-suspub.sh; exec bash -i"

# advierte de lanzar el rosbag (ros1)
gnome-terminal --tab -- bash -c "./rosbag-records-launch.sh; exec bash -i"
