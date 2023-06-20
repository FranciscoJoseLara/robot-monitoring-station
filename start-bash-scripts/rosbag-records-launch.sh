#!/bin/bash

# lanza los bags simuladores de robots sobre el terreno

# lanza el record de la unidad 01
gnome-terminal --tab -- bash -c "./play-unit01.sh; exec bash -i"

# lanza el record de la unidad 02
gnome-terminal --tab -- bash -c "./play-unit02.sh; exec bash -i"

# lanza el record de la unidad 03
gnome-terminal --tab -- bash -c "./play-unit03.sh; exec bash -i"
