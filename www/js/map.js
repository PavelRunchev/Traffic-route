import esriConfig from "https://js.arcgis.com/4.29/@arcgis/core/config.js";
import Map from "https://js.arcgis.com/4.29/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.29/@arcgis/core/views/MapView.js";
import MapImageLayer from "https://js.arcgis.com/4.29/@arcgis/core/layers/MapImageLayer.js";
import GraphicsLayer from "https://js.arcgis.com/4.29/@arcgis/core/layers/GraphicsLayer.js";
import BasemapToggle from 'https://js.arcgis.com/4.29/@arcgis/core/widgets/BasemapToggle.js';
import FeatureLayer from 'https://js.arcgis.com/4.29/@arcgis/core/layers/FeatureLayer.js';
import Search from 'https://js.arcgis.com/4.29/@arcgis/core/widgets/Search.js';
import Locate from 'https://js.arcgis.com/4.29/@arcgis/core/widgets/Locate.js';
import Track from 'https://js.arcgis.com/4.29/@arcgis/core/widgets/Track.js';
import Graphic from 'https://js.arcgis.com/4.29/@arcgis/core/Graphic.js';

import * as route from "https://js.arcgis.com/4.29/@arcgis/core/rest/route.js";
import RouteParameters from 'https://js.arcgis.com/4.29/@arcgis/core/rest/support/RouteParameters.js';
import FeatureSet from 'https://js.arcgis.com/4.29/@arcgis/core/rest/support/FeatureSet.js';

(function() {
    "use strict"
    const apiKey = "AAPKbf797fc2df384d4680b6130444e698efa-q6GV2nNJgplWjmRAcVS33CPkGriE2ZHThi1Hie9uTciN_MlozT3V0LFYbQ1Gbo";

    $(document).on('DOMContentLoaded', function() {
        esriConfig.apiKey = apiKey;
        const routeUrl = "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";
        
        if('geolocation' in navigator) {

            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                $('.latitude').html(`${lat.toFixed(3)} &deg;`);
                $('.longitude').html(`${lng.toFixed(3)} &deg;`);

                const trafficLayer = new MapImageLayer({
                    url: "https://traffic.arcgis.com/arcgis/rest/services/World/Traffic/MapServer",
                    dpi: 48,
                    imageFormat: "png32",
                    refreshInterval: 3
                });
                
                let map = new Map({
                    basemap: "streets-navigation-vector",
                    layers: [trafficLayer]
                });
                
                let view = new MapView({
                    map: map,
                    container: "viewDiv",
                    center: [lng, lat],
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

                // let locateWidget = new Locate({
                //     view: view,   // Attaches the Locate button to the view
                //     graphic: new Graphic({
                //       symbol: { type: "simple-marker" }  // overwrites the default symbol used for the
                //       // graphic placed at the location of the user when found
                //     })
                // });
                  
                // view.ui.add(locateWidget, "top-left");

                 // and add it to the view's UI
                //view.ui.add(locateWidget, "top-left");
                locate.locate();

                
                const track = new Track({
                    view: view,
                    graphic: new Graphic({
                        symbol: {
                        type: "simple-marker",
                        size: "12px",
                        color: "blue",
                        outline: {
                            color: "#efefef",
                            width: "1.5px"
                        }
                        }
                    }),
                    useHeadingEnabled: false,
                    geolocationOptions: {
                        maximumAge: 0,
                        timeout: 15000,
                        enableHighAccuracy: true
                    }
                });
                view.ui.add(track, "top-left");
                
                
                const graphicsLayer = new GraphicsLayer();
                map.add(graphicsLayer);
                
                
                view.on("click", function(event) {
                
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
                            features.forEach(function(result,i) {
                                const direction = document.createElement("li");
                                direction.innerHTML = result.attributes.text + " (" + result.attributes.length.toFixed(2) + " miles)";
                                directions.appendChild(direction);
                    
                                view.ui.empty("top-right");
                                view.ui.add(directions, "top-right");
                            });
                        }
                
                    }).catch((error) => console.log(error));
                
                    const point = {
                        type: "point",
                        longiture: lng,
                        latitude: lat
                    };
                
                    const marketSymbol = {
                        type: "simple-marker",
                        color: [226, 119, 40],
                        outline: {
                            color: [255, 255, 255],
                            width: 1
                        }
                    }
                
                    const pointGraphic = new Graphic({
                        geometry: point,
                        symbol: marketSymbol
                    });
                
                    graphicsLayer.add(pointGraphic);
            
                }
            });
        }
    });
})(window);