
function show_robots_panel(){
    const boton_robots = document.getElementById("robots-panel");
    const visibilidad = window.getComputedStyle(boton_robots).getPropertyValue('visibility');
    if(visibilidad === "collapse"){
        boton_robots.style.visibility='visible';  
        boton_robots.style.height='auto';
        boton_robots.scrollIntoView(false);
    }else{
        boton_robots.style.visibility='collapse';
        boton_robots.style.height='0px';
    }
}


function show_sync_panel(){
    const boton_sync = document.getElementById("sync-panel");
    const visibilidad = window.getComputedStyle(boton_sync).getPropertyValue('visibility');
    if(visibilidad === "collapse"){
        window.resetUnits();
        window.stopSyncFlag = false;
        boton_sync.style.visibility='visible';  
    }else{
        boton_sync.style.visibility='collapse';
    }
}

function close_sync_panel(){
    const close_sync = document.getElementById("sync-panel");
    const visibilidadCS = window.getComputedStyle(close_sync).getPropertyValue('visibility');
    const loader_icon = document.getElementById("loader");
    const sync_button_txt = document.getElementById("text-sync-button");
    const visibilidadLI = window.getComputedStyle(loader_icon).getPropertyValue('visibility');
    loader_icon.style.visibility='collapse';
    sync_button_txt.innerHTML='<span style="color: green;">Sync</span>';
    window.myFlag = false;
    close_sync.style.visibility='collapse'; 
    window.listUnits();
    window.stopSyncFlag = true;
}

function sync_button(){
    const loader_icon = document.getElementById("loader");
    const sync_button_txt = document.getElementById("text-sync-button");
    const visibilidad = window.getComputedStyle(loader_icon).getPropertyValue('visibility');
    if(visibilidad === "collapse"){
        loader_icon.style.visibility='visible';
        sync_button_txt.innerHTML='<span style="color: red;">Stop</span>';
        // sync_task(true);
        window.myFlag = true;
    }else{
        loader_icon.style.visibility='collapse';
        sync_button_txt.innerHTML='<span style="color: green;">Sync</span>';
        // sync_task(false);
        window.myFlag = false;
    }
    
    
}

function center_view(){
    window.center_view_task();
}

function center_unit(id){
    window.set_view_task(id, false);
}

function test(){
    document.getElementById('info').innerHTML = " <!> Desconexión del servidor RosBridge <!>";
    document.getElementById('n').style.top = "10px";
    setTimeout(() => {
        document.getElementById('n').style.top = "-100px";
      }, 5000);
}

function notnot(){
    document.getElementById('n').style.top = "-100px";
}

function show_details(id){
    document.getElementById('detail-panel').style.visibility = 'visible';
    document.getElementById('detail-panel').style.margin = '2.5%';
    document.getElementById('detail-panel').style.marginTop = '10px';
    document.getElementById('detail-panel').style.marginBottom = '0px';
    document.getElementById('detail-panel').style.height = '600px';
    document.getElementById('detail-panel-head').innerHTML=id;
    document.getElementById('map').style.top = '460px';
    document.getElementById('map').style.width = '80%';
    document.getElementById('map').style.height = '130px';
    document.getElementById('map').style.marginLeft = '10%';
    document.getElementById('map').style.position = 'absolute';
    document.getElementById('img-lupa').style.visibility = 'visible';
    document.getElementById('head-buttons').style.visibility = 'collapse';
    // document.getElementById('map-foot').style.visibility = 'collapse';
    window.set_view_task(id, true);
    window.data_to_details_panel(true, id);
    window.detailPanelFlag = false;
}

function close_detail_panel(){
    document.getElementById('detail-panel').style.visibility = 'collapse';
    document.getElementById('detail-panel').style.margin = '0%';
    document.getElementById('detail-panel').style.height = '0px';
    document.getElementById('map').style.top = '';
    document.getElementById('map').style.width = '95%';
    document.getElementById('map').style.height = '96%';
    document.getElementById('map').style.marginLeft = '2.5%';
    document.getElementById('map').style.position = 'relative';
    document.getElementById('img-lupa').style.visibility = 'collapse';
    document.getElementById('head-buttons').style.visibility = 'visible';
    // document.getElementById('map-foot').style.visibility = 'visible';
    window.data_to_details_panel(false, "");
    window.detailPanelFlag = true;
}

function close_camera_expand(){
    document.getElementById("camera-expand").style.visibility = "collapse";
    document.getElementById("camera-expand").innerHTML = "";
}

function camera_expand(){
    document.getElementById("camera-expand").style.visibility = "visible";
    window.expand_camera();
}

function show_video_panel(){
    document.getElementById("video-panel").style.visibility = "visible";
}

function close_video_panel(){
    document.getElementById("video-panel").style.visibility = "collapse";
}

// obtener referencia del botón de sincronización
const syncButton = document.querySelector('#panel-sync-button');

// controlador de eventos onclick de ratón
syncButton.addEventListener('click', sync_button);