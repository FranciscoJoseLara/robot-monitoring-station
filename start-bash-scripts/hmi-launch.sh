#!/bin/bash

# Titulo
echo "##############################"
echo "hmi-webapp"
echo "##############################"

# carga ros2
source /home/francisco/TFM_Apps/startUp/load-ros2.sh

# se coloca en el directorio de la aplicacion web (temporal sin django)
cd /home/francisco/TFM_Apps/POpenLayer_test1/ol_test

# arranca el servidor de pruebas vito para lanzar la aplicacion web
npm start
