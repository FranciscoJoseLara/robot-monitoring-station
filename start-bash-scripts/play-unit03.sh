#!/bin/bash

# carga ros1
source /home/francisco/TFM_Apps/startUp/load-ros1.sh

# lanza el record de unit01
cd ~/Documentos/bagfiles
rosbag play unit03.bag
