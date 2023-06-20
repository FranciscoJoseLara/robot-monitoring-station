import * as olparam from './ol-parameters';
import * as olfunc from './ol-functions';

//========= ROSLIB - ROS =====================================================================

export function runROS(){

    var ros = new ROSLIB.Ros();

    // If there is an error on the backend, an 'error' emit will be emitted.
    ros.on('error', function(error) {
    document.getElementById('connecting').style.display = 'none';
    document.getElementById('connected').style.display = 'none';
    document.getElementById('closed').style.display = 'none';
    document.getElementById('error').style.display = 'inline';
    console.log(error);
    document.getElementById('info').innerHTML = " <!> Desconexión del servidor RosBridge <!>";
    document.getElementById('n').style.top = "10px";
    setTimeout(() => {
        document.getElementById('n').style.top = "-100px";
      }, 3000);
    });

    // Find out exactly when we made a connection.
    ros.on('connection', function() {
    console.log('Connection made!');
    document.getElementById('connecting').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    document.getElementById('closed').style.display = 'none';
    document.getElementById('connected').style.display = 'inline';
    
    });

    ros.on('close', function() {
    console.log('Connection closed.');
    document.getElementById('connecting').style.display = 'none';
    document.getElementById('connected').style.display = 'none';
    document.getElementById('closed').style.display = 'inline';
    document.getElementById('info').innerHTML = " <!> Desconexión del servidor RosBridge <!>";
    document.getElementById('n').style.top = "10px";
    setTimeout(() => {
        document.getElementById('n').style.top = "-100px";
      }, 3000);
    });

    // Create a connection to the rosbridge WebSocket server.
    // ros.connect('ws://localhost:9090'); // DEFAULT
    // ros.connect('ws://192.168.0.24:9090'); // CASA
    ros.connect('ws://10.242.223.250:9090'); // VPN-ISA

    var oyente = new ROSLIB.Topic({
    ros : ros,
    name : '/hmi/robdat',
    messageType : 'std_msgs/msg/String'
    });

    var al = 0;
    var iod = true;

    oyente.subscribe(function(message) {

    // console.log(message.data);

    const jsonObj = JSON.parse(message.data);
    // console.log(jsonObj.speedFlag);
    // console.log(jsonObj);

    if(window.stopSyncFlag){
        // document.getElementById("log1").innerHTML = jsonObj.id;

        var coordinates = [
            parseFloat(jsonObj.lon),
            parseFloat(jsonObj.lat),
            ];
        
        // actualiza la posición de cada unidad
        olfunc.updatePoint(coordinates, jsonObj.id);

        // actualiza el dato de velocidad de cada unidad
        olfunc.updateSpeed(jsonObj.speed, jsonObj.id);

        // actualiza el dato de inclinacion de cada unidad
        olfunc.updateTilt(jsonObj.tilt, jsonObj.id);

        // actualiza el dato de estado de cada unidad
        olfunc.updateStatus(jsonObj.status, jsonObj.id);

        // actualiza el dato de batería de cada unidad
        olfunc.updateBattery(jsonObj.battery, jsonObj.id);
    }

    if(!window.detailPanelFlag){

        // extrae la unidad seleccionada
        var features = olparam.vectorLayer.getSource().getFeatures();
        var featureSelected = features.find(feature => feature.get('robid') === window.detailUnitActive);

        // speed
        if("true" === featureSelected.get("flagspeed")){
            var vel = document.getElementsByClassName('css3')[0];
            vel.style.transform = `rotate(${featureSelected.get("robspeed")*180/50}deg)`;
            var styleSheet = document.createElement("style");
            styleSheet.innerHTML = `.css3::after { transform: scale(1.02) rotate(-${featureSelected.get("robspeed")*180/50}deg); }`;
            document.head.appendChild(styleSheet);
            document.getElementById('speed-value').innerHTML = featureSelected.get("robspeed");
        }
        
        // tilt
        if("true" === featureSelected.get("flagtilt")){
            if(window.screen.width < 700 ){ /* no existe en este caso */   }
            else{
                document.getElementById('alabeo-move').style.transform = `rotateZ(${featureSelected.get("robtilt")}deg)`;
            }
        }

        // status
        if("true" === featureSelected.get("flagstatus")){
            document.getElementById('status-txt').innerHTML = featureSelected.get("robstatus");
        }

        // battery
        if("true" === featureSelected.get("flagbattery")){
            document.getElementsByClassName('battery-level')[0].style.height = `${featureSelected.get('robbattery')}%`;
            if(parseFloat(featureSelected.get('robbattery')) >= 30){
                document.getElementsByClassName('battery-level')[0].style.backgroundColor = "#30b455";
            }
            else if(parseFloat(featureSelected.get('robbattery')) < 30 && parseFloat(featureSelected.get('robbattery')) >= 10){
                document.getElementsByClassName('battery-level')[0].style.backgroundColor = "#EFAF13";
            }
            else{
                document.getElementsByClassName('battery-level')[0].style.backgroundColor = "#e81309";
            }
            document.getElementById('battery-txt').innerHTML = `${featureSelected.get('robbattery')}%`;
        }
    }

    if(window.unitSelected){
        // extrae la unidad seleccionada
        var features = olparam.vectorLayer.getSource().getFeatures();
        var featureSelected = features.find(feature => feature.get('robid') === window.detailUnitActive);

        // tilt
        document.getElementById('alabeo-move').style.transform = `rotateZ(${featureSelected.get("robtilt")}deg)`;
    }



    // If desired, we can unsubscribe from the topic as well.
    //listener.unsubscribe();

    if(window.myFlag){
        window.sync_task(jsonObj);
    }


    // -------------------------------------- tilt & speed setted ----------------------------------------
    // if(al<90 && iod){
    //     document.getElementById('alabeo-move').style.transform = `rotateZ(${al}deg)`;
    //     if(al>0 && !window.detailPanelFlag){
    //         // var vel = document.getElementsByClassName('css3')[0];
    //         // vel.style.transform = `rotate(${al+5}deg)`;
    //         // var styleSheet = document.createElement("style");
    //         // styleSheet.innerHTML = `.css3::after { transform: scale(1.02) rotate(-${al+5}deg); }`;
    //         // document.head.appendChild(styleSheet);
    //         // document.getElementById('speed-value').innerHTML = al+5;
    //     }
        
    //     al += 10;
    //     if(al > 80){iod=false;}
    // }
    // else if(al>-90 && !iod){
    //     document.getElementById('alabeo-move').style.transform = `rotateZ(${al}deg)`;
    //     if(al>0 && !window.detailPanelFlag){
    //         // var vel = document.getElementsByClassName('css3')[0];
    //         // vel.style.transform = `rotate(${al+5}deg)`;
    //         // var styleSheet = document.createElement("style");
    //         // styleSheet.innerHTML = `.css3::after { transform: scale(1.02) rotate(-${al+5}deg); }`;
    //         // document.head.appendChild(styleSheet);
    //         // document.getElementById('speed-value').innerHTML = al+5;
    //     }
    //     al -= 10;
    //     if(al < -80){iod=true;}
    // }
    // ---------------------------------------------------------------------------------------------------

    });

    // });
}

