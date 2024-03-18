import { useEffect , useRef} from 'react';
import './MainPage.css';

import esriConfig from '@arcgis/core/config.js';
import MapView from "@arcgis/core/views/MapView.js";
import Map from '@arcgis/core/Map.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer.js';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle.js';
import Locate from '@arcgis/core/widgets/Locate';
import Search from '@arcgis/core/widgets/Search';
import Track from '@arcgis/core/widgets/Track';
import Graphic from '@arcgis/core/Graphic';

import * as route from "@arcgis/core/rest/route.js";
import RouteParameters from '@arcgis/core/rest/support/RouteParameters';
import FeatureSet from '@arcgis/core/rest/support/FeatureSet';

const apiKey = "AAPKbf797fc2df384d4680b6130444e698efa-q6GV2nNJgplWjmRAcVS33CPkGriE2ZHThi1Hie9uTciN_MlozT3V0LFYbQ1Gbo";
const routeUrl = "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";


function MainPage() {
  const mapRef = useRef(null);
  
  useEffect(() => {
    if(!mapRef.current) return;

    esriConfig.apiKey = apiKey;

    const map = new Map({ basemap: 'arcgis/navigation' });

    const view = new MapView({
      map: map,
      container: mapRef.current,
      center: [25.33417, 42.87472],
      zoom: 14
    });

    let basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: 'hybrid'
    });

    const layer = new FeatureLayer({
      url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0',
      definitionExpression: 'POP2000 > 1000000'
    });

    view.ui.add(basemapToggle, "top-right");
    map.add(layer);

    const search = new Search({ view});
    view.ui.add(search, "top-right");

    const locate = new Locate({
      view: view,
      useHeadingEnabled: false,
      goToOverride: function(view, options) {
        options.target.scale = 1500;
        return view.goTo(options.target);
      }
    });
    view.ui.add(locate, "top-left");

    const track = new Track({
      view: view,
      graphic: new Graphic({
        symbol: {
          type: "simple-marker",
          size: "12px",
          color: "green",
          outline: {
            color: "#efefef",
            width: "1.5px"
          }
        }
      }),
      useHeadingEnabled: false
    });
    view.ui.add(track, "top-left");



    

    view.on("click", function(event){

      if (view.graphics.length === 0) {
        addGraphic("origin", event.mapPoint);
      } else if (view.graphics.length === 1) {
        addGraphic("destination", event.mapPoint);

        getRoute();

      } else {
        view.graphics.removeAll();
        addGraphic("origin",event.mapPoint);
      }

    });

    function addGraphic(type, point) {
      const graphic = new Graphic({
        symbol: {
          type: "simple-marker",
          color: (type === "origin") ? "white" : "black",
          size: "8px"
        },
        geometry: point
      });
      view.graphics.add(graphic);
    }

    function getRoute() {
      const routeParams = new RouteParameters({
        stops: new FeatureSet({
          features: view.graphics.toArray()
        }),

        returnDirections: true

      });

      route.solve(routeUrl, routeParams)
        .then(function(data) {
          data.routeResults.forEach(function(result) {
            result.route.symbol = {
              type: "simple-line",
              color: [5, 150, 255],
              width: 3
            };
            view.graphics.add(result.route);
          });
          
           // Display directions
          if (data.routeResults.length > 0) {
            const directions = document.createElement("ol");
            directions.classList = "esri-widget esri-widget--panel esri-directions__scroller";
            directions.style.marginTop = "0";
            directions.style.padding = "15px 15px 15px 30px";
            const features = data.routeResults[0].directions.features;

            // Show each direction
            features.forEach(function(result,i){
              const direction = document.createElement("li");
              direction.innerHTML = result.attributes.text + " (" + result.attributes.length.toFixed(2) + " miles)";
              directions.appendChild(direction);

              view.ui.empty("top-right");
              view.ui.add(directions, "top-right");
            });
          }

        }).catch(function(error){
          console.log(error);
        });

    }


    return () => view && view.destroy();
  }, []);
  
 

  return (
    <div className="main-page">
        <h1 className='text-center'>Traffic route!</h1>
        <div className='view-container'> 
            <div className='viewDiv' ref={mapRef}></div>
        </div>
        
    </div>
  );
}

export default MainPage;