import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import {useGeographic} from 'ol/proj';
import {Icon, Style, Circle, Fill, Stroke, RegularShape} from 'ol/style';
import Select from 'ol/interaction/Select.js';
import * as olstyles from './ol-styles.js';
import * as olparam from './ol-parameters.js';
import { isEmpty } from 'ol/extent.js';
import { Geometry } from 'ol/geom.js';



// Función para agregar un punto a la capa vectorial
export function addPoint(jsonObj) {
    // // Crear un punto con las coordenadas especificadas
    // const point = new Point(coordinates);
    // // Crear una característica con el punto
    // const feature1 = new Feature({
    //   geometry: point,
    //   robid: 'rob01'
    //   //style: iconStyle
    // });
    // const feature2 = new Feature({
    //   geometry: new Point([-4.48843, 36.716655]),
    //   robid: 'rob02'
    //   //geometry: point,
    //   //style: style2
    // });
    // const feature3 = new Feature({
    //   geometry: new Point([-4.48883, 36.716625]),
    //   robid: 'rob03'
    //   //geometry: point,
    //   //style: style3
    // });
  
    // // Añadir estilo al punto (icono)
    // feature1.setStyle(olstyles.style1);
    // feature2.setStyle(olstyles.style2);
    // feature3.setStyle(olstyles.style3);
  
    // const myFeatures = [feature1, feature2, feature3];

    var point = new Point([jsonObj.lon, jsonObj.lat]);
    var id = jsonObj.id;
    var type = jsonObj.type; // 'aereo'; ------------------------------------------------------------------ cambiar por el valor adecuado
    var speedFlag = jsonObj.speedFlag;
    var tiltFlag = jsonObj.tiltFlag;
    var statusFlag = jsonObj.statusFlag;
    var batteryFlag = jsonObj.batteryFlag;
    var camera = jsonObj.camera;
    var cameraFlag = jsonObj.cameraFlag;
    var style = olstyles.createStyle(olparam.colors[olparam.olfeatures.length], type);
    var feature = olparam.createFeature(point, id, type, speedFlag, tiltFlag, statusFlag, batteryFlag, camera, cameraFlag);
    feature.setStyle(style);
    olparam.olfeatures.push(feature);
    olparam.vectorLayer.getSource().addFeature(feature);

    buildCameraPanel(id, camera, cameraFlag);
    // console.log(feature.getStyle());
    // Agregar la característica a la fuente de datos de la capa vectorial
    // olparam.vectorLayer.getSource().addFeatures(myFeatures);
  }


function buildCameraPanel(id, camtopic, cameraFlag){
  
  if('true' === cameraFlag){
    document.getElementById('cameras-boxes').innerHTML += '<div class="video-box"><p class="camera-id">Cámara: <strong>' + id + '</strong></p><img class="no-margin"  src="http://' + window.IPserver + ':8181/stream?topic=' + camtopic + '" alt="Topic: ' + camtopic + '" onerror="this.src=\'./icon-no-signal.png\';"/></div>';  
  }
}




export function updatePoint(coordinates, robid) {
    // Obtener todas las características de la capa vectorial
    const features = olparam.vectorLayer.getSource().getFeatures();
    // Buscar la característica correspondiente al robid especificado y actualizar su geometría
    const featureToUpdate = features.find(feature => feature.get('robid') === robid);
    if (featureToUpdate) {
      featureToUpdate.getGeometry().setCoordinates(coordinates);
    } else {
      console.log(`<!> Error: no se encontró la característica con robid ${robid} <!>`);
    }
  }

export function units_list() {
    const features = olparam.vectorLayer.getSource().getFeatures();
  
    let html = "";
    features.forEach(feature => {
      const robid = feature.get("robid");
      if (robid !== undefined) {
        // html += `<li>${robid}</li>`;
        html += create_unit_box(robid);

      }
    });
  
    // document.getElementById("robots-panel").innerHTML = `<ul>${html}</ul>`;
    document.getElementById("robots-panel").innerHTML += html;

  }

export function units_reset(){
  olparam.vectorLayer.getSource().clear(true);
  olparam.unidadesList.length=0;
  olparam.olfeatures.length=0;
  document.getElementById("robots-panel").innerHTML='<h3 style="margin: 0px; margin-bottom: 5px; text-align: center; border-bottom: 2px solid black;">Lista de unidades</h3>';
  document.getElementById("unitsList").innerHTML='<ul id="unitsList" style="text-align: left;"></ul>';
}

function create_unit_box(id){
  return '<div class="unit-box"><div class="unit-box-info">' + id + '</div><div class="unit-box-access"><a href="#up" style="text-decoration: none;"><div class="white-button"  style=" margin-left: 10%; display: inline-flex; justify-content: center; place-items: center;" onclick=\'center_unit("' + id + '")\'><img src="./icon-button-center.png" alt="centrar unidad" style=" margin-top: 0px !important; margin-left: 0px !important;"/></div><div class="white-button"  style=" margin-left: 10%; display: inline-flex; justify-content: center; place-items: center;" onclick=\'show_details("' + id + '")\'><img src="./icon-menu.png" alt="menu detalles" style=" margin-top: 0px !important; margin-left: 0px !important;"/></div></a></div></div>';
}

export function sync_units(jsonObj){

  if (!olparam.unidadesList.includes(jsonObj.id)) {
    document.getElementById("unitsList").innerHTML += `<li>${jsonObj.id}</li>`;
    
    olparam.unidadesList.push(jsonObj.id);

    addPoint(jsonObj);
  }
}

export function getCoord(id){
  const features = olparam.vectorLayer.getSource().getFeatures();
  const featureSelected = features.find(feature => feature.get('robid') === id);
  return featureSelected.get("geometry").flatCoordinates;
}

export function updateSpeed(speed, id){

  // extrae la unidad seleccionada
  var features = olparam.vectorLayer.getSource().getFeatures();
  var featureSelected = features.find(feature => feature.get('robid') === id);

  // actualiza la velocidad
  featureSelected.set("robspeed", speed);
}

export function updateTilt(tilt, id){

  // extrae la unidad seleccionada
  var features = olparam.vectorLayer.getSource().getFeatures();
  var featureSelected = features.find(feature => feature.get('robid') === id);

  // actualiza la velocidad
  featureSelected.set("robtilt", tilt);
}

export function updateStatus(status, id){

  // extrae la unidad seleccionada
  var features = olparam.vectorLayer.getSource().getFeatures();
  var featureSelected = features.find(feature => feature.get('robid') === id);

  // actualiza la velocidad
  featureSelected.set("robstatus", status);
}

export function updateBattery(battery, id){

  // extrae la unidad seleccionada
  var features = olparam.vectorLayer.getSource().getFeatures();
  var featureSelected = features.find(feature => feature.get('robid') === id);

  // actualiza la velocidad
  featureSelected.set("robbattery", battery);
}



  // =========== POSIBLES FUNCIONES UTILES ==================================================



  // Función para actualizar la ubicación del punto cada segundo
//setInterval(() => {
  // Actualizar las coordenadas del punto
  //coordinates = [
    //coordinates[0] + Math.random() * 0.0001,
    //coordinates[1] + Math.random() * 0.0001,
  //];
  // Actualizar la ubicación del punto en la capa vectorial
  //updatePoint(coordinates);
//}, 1000);




// // Función para actualizar la ubicación del punto
// function updatePoint(coordinates, robid) {
//   // Obtener todas las características de la capa vectorial
//   const features = vectorLayer.getSource().getFeatures();
//   // Actualizar la geometría de la primera característica (en este ejemplo solo hay una)
//   if(robid === "rob01"){
//     console.log("ENTRO EN 1")
//     features[0].getGeometry().setCoordinates(coordinates);
//   }
//   else if(robid === "rob02"){  
//     console.log("ENTRO EN 2")
//     features[1].getGeometry().setCoordinates(coordinates);
//   }
//   else if(robid === "rob03"){
//     console.log("ENTRO EN 3")
//     features[2].getGeometry().setCoordinates(coordinates);
//   }
//   else{
//     console.log("<!> Error: lectura de id de robot <!>")
//   }

//   //features[0].getGeometry().setCoordinates(coordinates);
// }