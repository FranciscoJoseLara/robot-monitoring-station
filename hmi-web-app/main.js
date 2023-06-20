import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import {useGeographic} from 'ol/proj';
import {Icon, Style, Circle, Fill, Stroke, RegularShape} from 'ol/style';
import Select from 'ol/interaction/Select.js';
import * as olstyles from './ol-styles';
import * as olfunc from './ol-functions';
import * as olparam from './ol-parameters';
import * as roscontrol from './ros-control';

// ----------------------------------- IP -----------------------
// window.IPserver = '192.168.0.24'; // CASA
window.IPserver = '10.242.223.250'; // VPN-ISA
// window.IPserver = '0.0.0.0'; // DEFAULT
// --------------------------------------------------------------

useGeographic();

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [-4.48813, 36.716355],
    zoom: 17
  })
});

// Coordenadas========================== iniciales del punto
let coordinates = [-4.48813, 36.716355];

// Agregar el punto inicial a la capa vectorial
// olfunc.addPoint(coordinates);

// Agregar la capa vectorial al mapa
map.addLayer(olparam.vectorLayer);


map.addInteraction(olparam.select);

olparam.select.on("select", (e) => {
  
  if(window.detailPanelFlag){

    const feature = e.selected[0];

    if (feature) {
      feature.setStyle(olstyles.selectedStyle(feature.get('robtype')));
      const robotId = feature.get("robid");
      // const message = `Unidad: ${robotId} <br> Descripción: -- <br> Batería: --% <br> Imagen: <a href="https://www.uma.es/isa" target="_blank" style="color: white;">streaming</a> `;
      if(window.screen.width < 700 ){
        const overlay = document.getElementById("robot-id-overlay");
        const overlay_L = document.getElementById("overlay-left-corner");
        const overlay_center = document.getElementById("overlay-center");
        const overlay_R = document.getElementById("overlay-right-corner");
        overlay.style.color = "white";
        overlay.style.backgroundColor = "#273746";
        overlay.style.bottom = "-70px";
        overlay.style.height = "80px";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.fontSize = "22px";
        overlay.innerHTML = `Unidad: ${robotId}`; 
        overlay.style.display = "flex";
      }
      else{
        const overlay = document.getElementById("robot-id-overlay");
        const overlay_L = document.getElementById("overlay-left-corner");
        const overlay_center = document.getElementById("overlay-center");
        const overlay_R = document.getElementById("overlay-right-corner");
        overlay_R.style.visibility = "visible";
        // overlay_L.innerHTML = '<img id="camera" src="http://' + window.IPserver + ':8181/stream?topic=' + feature.get("robcamera") + '" alt="http://' + window.IPserver + ':8181/stream?topic=' + feature.get("robcamera") + '" onerror="this.src=\'./icon-no-signal.png\';"/><img id="icon-expand" src="./icon-expand.png" alt="icon expand" onclick="camera_expand()"/>';
        overlay_center.innerHTML = `Unidad: ${robotId}`; //  ${robotId}
        // overlay_R.innerHTML = 'inclinación';
        overlay.style.display = "flex";
      }
      
      reset_params();

      window.detailUnitActive = robotId;
      window.unitSelected = true;


    } else {
      document.getElementById("robot-id-overlay").style.display = "none";
    }

  }
  
});

// Ocultar el cartel al hacer clic fuera de las características
map.on('pointermove', function(evt) {
  var pixel = map.getEventPixel(evt.originalEvent);
  var hit = map.hasFeatureAtPixel(pixel);
  map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});

map.on('click', function(evt){
  if(window.screen.width < 700 ){
    const overlay = document.getElementById('robot-id-overlay');
    overlay.style.display = 'none';
  }
  else{
    const overlay_L = document.getElementById("overlay-left-corner");
    overlay_L.innerHTML = '';
    const overlay = document.getElementById('robot-id-overlay');
    overlay.style.display = 'none';
  }
  

  window.detailUnitActive = "";
  window.unitSelected = false;
});


// ------ FUNCIONES GLOBALES ----------

function listUnits(){
  olfunc.units_list();
}

window.listUnits = listUnits;

function resetUnits(){
  olfunc.units_reset();
}

window.resetUnits = resetUnits;

function sync_task(jsonObj){
  olfunc.sync_units(jsonObj);
}

// Agrega la función al ámbito global
window.sync_task = sync_task;

function set_view_task(id, flag){
  
  var centerPoint = olfunc.getCoord(id);
  if(flag){
    var centerView = new View({
      center: [centerPoint[0], centerPoint[1]-0.00025],
      zoom: 20
    })
    const overlay = document.getElementById('robot-id-overlay');
    overlay.style.display = 'none';
  }
  else{
    var centerView = new View({
      center: [centerPoint[0], centerPoint[1]],
      zoom: 22
    })
  }
  
  
  map.setView(centerView);
}

window.set_view_task = set_view_task;

function center_view_task(){
  
  var xCoord = 0;
  var yCoord = 0;

  (olparam.olfeatures).forEach(e => {
    xCoord += olfunc.getCoord(e.get('robid'))[0];
    yCoord += olfunc.getCoord(e.get('robid'))[1];
  });

  xCoord = xCoord / (olparam.olfeatures).length;
  yCoord = yCoord / (olparam.olfeatures).length;

  var centerView = new View({
    center: [xCoord, yCoord],
    zoom: 18
  })
  map.setView(centerView);
}

window.center_view_task = center_view_task;


function data_to_details_panel(panel, id){

  // extrae la unidad seleccionada
  const features = olparam.vectorLayer.getSource().getFeatures();
  const featureSelected = features.find(feature => feature.get('robid') === id);

  // monta el panel de detalles en funcion de los flags que indican la presencia o no de datos
  var detail_panel = document.getElementById("detail-panel-content");

  if(window.screen.width < 700 ){ /* no existe en este caso */   }
  else{
    var overlay_L = document.getElementById("overlay-left-corner");

    // tilt
    var alb_b = document.getElementById("alabeo-base");
    var alb_m = document.getElementById("alabeo-move");
    var alb_t = document.getElementById("alabeo-top");
  }
  
  if(panel){

    window.detailUnitActive = id;

    detail_panel.innerHTML = "";
    
    // comprobación para dato: speed
    if("true" === featureSelected.get("flagspeed")){
      // console.log("show box speed");
      detail_panel.innerHTML = `<div class="detail-box">
                                  <br>Velocidad<br><br>
                                  <div id="speed-text">km/h<br><span id="speed-value">45</span></div>
                                  <div id="speed-param"class="circular-progress css3"></div>
                                </div>`;
      var vel_txt = document.getElementById('speed-text');
      vel_txt.style.setProperty("text-align", "center");
      vel_txt.style.setProperty("margin-top", "34px");
      vel_txt.style.setProperty("width", "170px");
    }

    // comprobación para dato: tilt
    if("true" === featureSelected.get("flagtilt")){
      if(window.screen.width < 700 ){ /* no existe en este caso */   }
      else{
        alb_b.style.height = '100px';
        alb_b.style.setProperty("margin-left", "-50px", "important");
        alb_m.style.height = '100px';
        alb_m.style.setProperty("margin-left", "-50px", "important");
        alb_t.style.height = '100px';
        alb_t.style.setProperty("margin-left", "-50px", "important");
        detail_panel.innerHTML += `<div class="detail-box"><br>Inlcinación<br><br>${alb_b.outerHTML}${alb_m.outerHTML}${alb_t.outerHTML}</div>`;
      }
      
    }

    // comprobación para dato: status
    if("true" === featureSelected.get("flagstatus")){
      detail_panel.innerHTML += `<div class="detail-box">
                                  <br>Estado<br><br>
                                  <div id="status-txt">---</div>
                                </div>`;
    }

    // comprobación para dato: battery
    if("true" === featureSelected.get("flagbattery")){
      detail_panel.innerHTML += `<div class="detail-box">
                                  <br>Batería<br><br>
                                  <div id="battery-txt">--%</div>
                                  <div class="battery">
                                    <div class="battery-level" style="height:50%;"></div>
                                  </div>
                                </div>`;
    }

    // comprobación para dato: camera
    if("true" === featureSelected.get("flagcamera")){
      // console.log("show box camera");
      var cam = '<img id="camera" src="http://' + window.IPserver + ':8181/stream?topic=' + featureSelected.get("robcamera") + '" alt="http://' + window.IPserver + ':8181/stream?topic=' + featureSelected.get("robcamera") + '" onerror="this.src=\'./icon-no-signal.png\';"/>';
      detail_panel.innerHTML += `<div class="detail-box"><br>Cámara<br><br>${cam}</div>`;
      document.getElementById("camera").style.setProperty("height","100px");
    }
    
    if(window.screen.width < 700 ){ /* no existe en este caso */   }
    else{
      overlay_L.innerHTML = "";
    }
    
    
  }
  else if(!panel){

    window.detailUnitActive = "";

    detail_panel.innerHTML = "";
    
    alb_b.style.height = '';
    alb_b.style.setProperty("margin-left", "0px", "important");
    alb_m.style.height = '';
    alb_m.style.setProperty("margin-left", "0px", "important");
    alb_t.style.height = '';
    alb_t.style.setProperty("margin-left", "0px", "important");
    // vel_txt.style.setProperty("margin-left", "auto");
    // vel_txt.style.setProperty("margin-top", "auto");
  }
  
}

window.data_to_details_panel = data_to_details_panel;

function reset_params(){
  var detail_panel = document.getElementById("detail-panel-content");
  var vel_txt = document.getElementById('speed-text');
  var vel = document.getElementById("speed-param");
  var alb_b = document.getElementById("alabeo-base");
  var alb_m = document.getElementById("alabeo-move");
  var alb_t = document.getElementById("alabeo-top");
  alb_b.style.height = '';
  alb_b.style.setProperty("margin-left", "0px", "important");
  alb_m.style.height = '';
  alb_m.style.setProperty("margin-left", "0px", "important");
  alb_t.style.height = '';
  alb_t.style.setProperty("margin-left", "0px", "important");
  // vel_txt.style.setProperty("margin-left", "auto");
  // vel_txt.style.setProperty("margin-top", "auto");
}

window.expand_camera = expand_camera;

function expand_camera(){
  var cam = `<div id="close-camera-expand" onclick="close_camera_expand()"><strong>X</strong></div>
  <img id="camera" class="camera-big" src="http://${window.IPserver}:8181/stream?topic=/video_image" alt="http://${window.IPserver}:8181/stream?topic=/video_image" onerror="this.src='./icon-no-signal.png';"/>`
  document.getElementById("camera-expand").innerHTML = cam;
}

// ------ VARIABLES GLOBALES: FLAGS ----------

window.myFlag = false;

window.stopSyncFlag = false;

window.detailPanelFlag = true;

window.detailUnitActive = "";

window.unitSelected = false;

// //========= ROS - CONTROL =====================================================================

roscontrol.runROS();

