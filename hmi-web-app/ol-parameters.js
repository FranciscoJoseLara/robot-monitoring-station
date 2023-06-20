import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import {useGeographic} from 'ol/proj';
import {Icon, Style, Circle, Fill, Stroke, RegularShape} from 'ol/style';
import Select from 'ol/interaction/Select.js';
import * as olstyles from './ol-styles';

// Crear una capa vectorial vacía
export const vectorLayer = new VectorLayer({
    source: new VectorSource(),
  });

export function createFeature(fpoint, fid, ftype, fspeed, ftilt, fstatus, fbattery, fcamtopic, fcamera){
  return new Feature({
    geometry: fpoint,
    robid: fid,
    robtype: ftype,
    robspeed: 0,
    flagspeed: fspeed,
    robtilt: 0,
    flagtilt: ftilt,
    robstatus: "OK",
    flagstatus: fstatus,
    robbattery: 0,
    flagbattery: fbattery,
    robcamera: fcamtopic,
    flagcamera: fcamera,
  });
} 

export var olfeatures = [];

export const colors = ['#3498db', '#52be80', '#f1948a'];

export const select = new Select({
    // condition: pointerMove,
    layers: [vectorLayer],
    style: olstyles.selectedFeature,
  });

export var unidadesList = [];

