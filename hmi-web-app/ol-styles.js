// ========== estilos de la libreria OpenLayers =========
import {Icon, Style, Circle, Fill, Stroke, RegularShape} from 'ol/style';

export function createStyle(color, type){
  if(type === 'terrestre'){
    return new Style({  // ------------------------>> circle
      image: new Circle({
          radius: 8,
          fill: new Fill({color: '#52be80'}),
          stroke: new Stroke({color: '#000', width: 2}),
        })
      });
  }
  else if(type === 'nodo-sensor'){
    return new Style({  // ------------------------>> triangle
        image: new RegularShape({
          fill: new Fill({color: '#3498db'}),
          stroke: new Stroke({color: '#000', width: 2}),
          points: 3,
          radius: 10,
          rotation: Math.PI / 4,
          angle: 0,
        })
      });
  }
  else if(type === 'aereo'){
    return new Style({  // ------------------------>> star
      image: new RegularShape({ 
        fill: new Fill({color: '#f1948a'}),
        stroke: new Stroke({color: '#000', width: 2}),
        points: 5,
        radius: 12,
        radius2: 5,
        angle: 0,
      }),
    })
  }
  else{
    return new Style({  // ------------------------>> rectangle
      image: new RegularShape({
        fill: new Fill({color: '#f5b041'}),
        stroke: new Stroke({color: '#000', width: 2}),
        points: 4,
        radius: 10,
        angle: Math.PI / 4,
      }),
    })

  }
  
}

export const style1 = new Style({
    image: new Circle({
        radius: 8,
        fill: new Fill({color: '#3498db'}),
        stroke: new Stroke({color: '#fdfefe', width: 3}),
      })
  });
  
  export const style2 = new Style({
    image: new Circle({
      radius: 8,
      fill: new Fill({color: '#52be80'}),
      stroke: new Stroke({color: '#fdfefe', width: 3}),
    })
  });
  
  export const style3 = new Style({
    image: new Circle({
      radius: 8,
      fill: new Fill({color: '#f1948a'}),
      stroke: new Stroke({color: '#fdfefe', width: 3}),
    })
  });

export function selectedStyle(type){
  if(type === 'terrestre'){
    return new Style({  
      image: new Icon({
        anchor: [0.5, 480],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'icon-geo-robot.png',
        scale: [
          0.15,
          0.15,
        ],
      })
      });
  }
  else if(type === 'nodo-sensor'){
    return new Style({  
      image: new Icon({
        anchor: [0.5, 480],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'icon-geo-sensor.png',
        scale: [
          0.15,
          0.15,
        ],
      })
      });
  }
  else if(type === 'aereo'){
    return new Style({  
      image: new Icon({
        anchor: [0.5, 480],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'icon-geo-dron.png',
        scale: [
          0.15,
          0.15,
        ],
      })
    })
  }
  else{
    return new Style({  
      image: new Icon({
        anchor: [0.5, 480],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'icon-geo-default.png',
        scale: [
          0.15,
          0.15,
        ],
      })
    })

  }
}

  export const selectedFeature = new Style({
    image: new Icon({
        anchor: [0.5, 480],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'icon_geo_robot.png',
        scale: [
          0.15,
          0.15,
        ],
      })
  });
