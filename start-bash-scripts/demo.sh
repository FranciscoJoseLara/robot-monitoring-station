#!/bin/bash

# lanza todos los procesos para probar el sistema (Jun/04/2023)

# lanza el roscore (ros1)
gnome-terminal --tab -- bash -c "./roscore.sh; exec bash -i"

# lanza el ros1_bridge (ros1 + ros2)
gnome-terminal --tab -- bash -c "./ros1_bridge.sh; exec bash -i"

# lanza el rosbridge_server (ros2)
gnome-terminal --tab -- bash -c "./rosbridge_server.sh; exec bash -i"

# lanza la aplicación hmi mediante Vite (web)
gnome-terminal --tab -- bash -c "./hmi-launch.sh; exec bash -i"

# lanza el driver para la cámara del portatil (ros2)
gnome-terminal --tab -- bash -c "./camera-driver.sh; exec bash -i"

# lanza servidor de video en streaming (ros2)
gnome-terminal --tab -- bash -c "./web-video-server.sh; exec bash -i"

# lanza rosbag de unidad1 (ros1)
gnome-terminal --tab -- bash -c "./play-unit01.sh; exec bash -i"

# lanza el simulador de datos de unidad01 (ros2)
gnome-terminal --tab -- bash -c "source /home/francisco/source-ros2.sh; ros2 run monitoring_station_tfm sample_features_pub; exec bash -i"

# lanza nodo publicador de unidad01 (ros2)
gnome-terminal --tab -- bash -c "source /home/francisco/source-ros2.sh; ros2 run monitoring_station_tfm unit_sync_pub; exec bash -i"

# lanza rosbag de unidad2 (ros1)
gnome-terminal --tab -- bash -c "./play-unit02.sh; exec bash -i"

# lanza rosbag de unidad2 (ros2)
gnome-terminal --tab -- bash -c "./pub02.sh; exec bash -i"

# lanza rosbag de unidad3 (ros1)
gnome-terminal --tab -- bash -c "./play-unit03.sh; exec bash -i"

# lanza rosbag de unidad3 (ros2)
gnome-terminal --tab -- bash -c "./pub03.sh; exec bash -i"



