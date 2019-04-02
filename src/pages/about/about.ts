import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import leaflet from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-easybutton';

var RLA = [];
declare var L: any;
var count: any;
var map: any;
count = 0;
var mark = [];

var stops = [
  ["TCE bus stop", "9.886632", "78.074554"],
  ["Moolakarai", "9.8933919", "78.0783454"],
  ["Alagappa Nagar", "9.9006292", "78.0936527"],
  ["Munichalai", "9.917246", "78.1318152"]
];

var route = [
  [9.9006292, 78.0936527],
  [9.886632, 78.074554],
  [9.8933919, 78.0783454],
  [9.917246, 78.1318152]
];

var myLat: number;
var myLng: number;
var myLoc: any;
var myLocC: any;

var busIcon = leaflet.icon({
//      iconUrl: 'https://cdn4.iconfinder.com/data/icons/location-flat/64/Location-map-pin-marker-busstation-512.png',
  iconUrl: 'https://cdn0.iconfinder.com/data/icons/geo-points/154/bus-512.png',
  // iconSize: [38, 95],
  iconSize: [28, 60],
  // iconAnchor: [22, 94],
  iconAnchor: [11,46],
  // popupAnchor:  [-3, -76]
  popupAnchor: [-3, -40]
});


function getDistance(origin, destination) {
    // return distance in meters
    var lon1 = toRadian(origin[1]),
        lat1 = toRadian(origin[0]),
        lon2 = toRadian(destination[1]),
        lat2 = toRadian(destination[0]);

    var deltaLat = lat2 - lat1;
    var deltaLon = lon2 - lon1;

    var a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
}

function toRadian(degree) {
    return degree*Math.PI/180;
}

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})


export class AboutPage {
  @ViewChild('map') mapContainer2: ElementRef;
  marks: any;
  markerGroupGPS: any;
  marker: any;
  mapMarker = [] ;
  routeLayer: any;
  showBtn: boolean = true;
  deferredPrompt;
  visibleState = 'visible';

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.loadmap();
//    map = this.map;
  }

  loadmap() {
    map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(map);

    map.on('click', () => this.removeLoad());

    var busIcon = leaflet.icon({
//      iconUrl: 'https://cdn4.iconfinder.com/data/icons/location-flat/64/Location-map-pin-marker-busstation-512.png',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/geo-points/154/bus-512.png',
      // iconSize: [38, 95],
      iconSize: [28, 60],
      // iconAnchor: [22, 94],
      iconAnchor: [11,46],
      // popupAnchor:  [-3, -76]
      popupAnchor: [-3, -40]
    });

    for(var i=0;i<stops.length;i++) {

      var stop_name: string = stops[i][0];
      var lat: number = parseFloat(stops[i][1]);
      var lng: number = parseFloat(stops[i][2]);

      var cur_mark: any;

      mark.push(leaflet.marker([lat, lng], {icon: busIcon}).bindPopup(stop_name).on('click', (e) => this.drawRoute(e.latlng.lat, e.latlng.lng)));

    }

    this.marks = leaflet.layerGroup(mark);
    this.routeLayer = leaflet.featureGroup();

    map.on('contextmenu', (e) => {
    var container = L.DomUtil.create('div'),
        startBtn = this.createButton('Start from this location<br />', container),
        destBtn = this.createButton('Go to this location', container);

    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);
    
   L.DomEvent.on(startBtn, 'click', () => {
        this.draw(e.latlng.lat, e.latlng.lng, myLat, myLng);
        map.closePopup();
    });
   });    
  }

  draw(a,b,c,d) {
    var D = L.Routing.control({
      serviceUrl: 'https://router.project-osrm.org/route/v1',
      timeout: 30 * 1000,
      waypoints: [
        leaflet.latLng(parseFloat(a), parseFloat(b)),
        leaflet.latLng(parseFloat(c), parseFloat(d))
      ]
    });
    var x = document.querySelectorAll("table");
    for(let i=0;i<x.length;i++)
      x[i].remove();
    map.addControl(D);
    RLA.push(D);

    console.log('D => '+D.message);
    console.log(Object);

  }

  drawBusRoute() {
    for(let i=0;i<RLA.length;i++) {
      map.removeControl(RLA[i]);
      // this.routeLayer.removeLayer(RLA[i]);
    }
    for(let i=1;i<stops.length;i++) {
     setTimeout(() => this.draw(stops[i-1][1], stops[i-1][2], stops[i][1], stops[i][2]), 2000);
   }
  }

  createButton(label, container) {
    var btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
}



  drawRoute(lat, lng) {
    for(let i=0;i<RLA.length;i++) {
      map.removeControl(RLA[i]);
      // this.routeLayer.removeLayer(RLA[i]);
    }
    var RL = L.Routing.control({
  //    serviceUrl: 'https://router.project-osrm.org/viaroute',      
      serviceUrl: 'https://router.project-osrm.org/route/v1',
      timeout: 30 * 1000,
      waypoints: [
        leaflet.latLng(lat, lng),
        leaflet.latLng(myLat, myLng)
      ]
    });
    console.log('Console => '+RL);
//    this.routeLayer.addLayer(RL);
    map.addLayer(this.routeLayer);
    map.addControl(RL);
//    RL.addTo(map);
    RLA.push(RL);
  }

   presentLoading(text) {
    const loader = this.loadingCtrl.create({
      content: text,
      duration: 3000
    });
    loader.present();
  }

  removeLoad() {
    map.eachLayer(function (layer) {
       map.removeLayer(layer);
     });
     for(let i=0;i<RLA.length;i++) {
       map.removeControl(RLA[i]);
     }
   //   map.remove();
      leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(map);
    myLoc.addTo(map);
    myLocC.addTo(map);
    if(document.getElementById("bus").style.color=='blue') {
   //   alert('blue');
      map.addLayer(leaflet.layerGroup(mark));
    }
    count = 0;
  }

  pointGPS() {



(function(window) {
    var icon = leaflet.divIcon({
        className: "leaflet-usermarker",
        iconUrl: 'img/bluedot.png',
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -20],
  //      labelAnchor: [11, -3],
        html: ''
    });
    var iconPulsing = leaflet.divIcon({
        className: "leaflet-usermarker",
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -20],
  //      labelAnchor: [11, -3],
        html: '<i class="pulse"></i>'
    });
    
    var iconSmall = leaflet.divIcon({
        className: "leaflet-usermarker-small",
        iconSize: [17, 17],
        iconAnchor: [9, 9],
        popupAnchor: [0, -10],
//labelAnchor: [3, -4],
        html: ''
    });
    var iconPulsingSmall = leaflet.divIcon({
        className: "leaflet-usermarker-small",
        iconSize: [17, 17],
        iconAnchor: [9, 9],
        popupAnchor: [0, -10],
  //      labelAnchor: [3, -4],
        html: '<i class="pulse"></i>'
    });
    var circleStyle = {
        stroke: true,
        color: "#03f",
        weight: 3,
        opacity: 0.5,
        fillOpacity: 0.15,
        fillColor: "#03f",
        clickable: false
    };

    leaflet.UserMarker = leaflet.Marker.extend({
        options: {
            pulsing: false,
            smallIcon: false,
            accuracy: 0,
            circleOpts: circleStyle
        },

        initialize: function(latlng, options) {
            options = leaflet.Util.setOptions(this, options);
            
            this.setPulsing(this.options.pulsing);
            this._accMarker = leaflet.circle(latlng, this.options.accuracy, this.options.circleOpts);
        
            // call super
            leaflet.Marker.prototype.initialize.call(this, latlng, this.options);
        
            this.on("move", function() {
                this._accMarker.setLatLng(this.getLatLng());
            }).on("remove", function() {
                this._map.removeLayer(this._accMarker);
            });
        },
    
        setPulsing: function(pulsing) {
            this._pulsing = pulsing;
            
            if (this.options.smallIcon) {
                this.setIcon(!!this._pulsing ? iconPulsingSmall : iconSmall);
            } else {
                this.setIcon(!!this._pulsing ? iconPulsing : icon);
            }
        },
    
        setAccuracy: function(accuracy)  {
            this._accuracy = accuracy;
            if (!this._accMarker) {
                this._accMarker = leaflet.circle(this._latlng, accuracy, this.options.circleOpts).addTo(this._map);
            } else {
                this._accMarker.setRadius(accuracy);
            }
        },
    
        onAdd: function(map) {
            // super
            leaflet.Marker.prototype.onAdd.call(this, map);
            this._accMarker.addTo(map);
        }
    });

    leaflet.userMarker = function (latlng, options) {
        return new leaflet.UserMarker(latlng, options);
    };


})(window);

(function() {
  // Retain the value of the original onAdd and onRemove functions
  let originalOnAdd = L.Marker.prototype.onAdd;
  let originalOnRemove = L.Marker.prototype.onRemove;

  // Add bounceonAdd options
  L.Marker.mergeOptions({
    bounceOnAdd: false,
    bounceOnAddOptions: {
      duration: 1000,
      height: -1,
      loop: 1,
    },
    bounceOnAddCallback: function() {},
  });

  L.Marker.include({

    _toPoint: function(latlng) {
      return this._map.latLngToContainerPoint(latlng);
    },

    _toLatLng: function(point) {
      return this._map.containerPointToLatLng(point);
    },

    _motionStep: function(opts) {
      let self = this;
      let timePassed = new Date() - opts.start;
      let progress = timePassed / opts.duration;

      if (progress > 1) {
        progress = 1;
      }

      let delta = self._easeOutBounce(progress);
      opts.step(delta);

      if (progress === 1) {
        opts.start = new Date();
        progress = 0;
        if (opts.loop > 0) opts.loop = opts.loop - 1;
        if (opts.loop === 0) {
          opts.end();
          return;
        }
      }

      self._animationId = L.Util.requestAnimFrame(function(timestamp) {
        self._motionStep(opts);
      });
    },

    _bounceMotion: function(opts, callback) {
      let original = L.latLng(this._origLatlng);
      let start_y = this._dropPoint.y;
      let start_x = this._dropPoint.x;
      let distance = this._point.y - start_y;
      let self = this;

      self._animationId = L.Util.requestAnimFrame(function() {
        self._motionStep({
          duration: opts.duration || 1000, // 1 sec by default
          loop: opts.loop || 1,
          start: new Date(),
          step: function(delta) {
            self._dropPoint.y =
              start_y
            + (distance * delta)
            - (self._map.project(self._map.getCenter()).y - self._origMapCenter.y);
            self._dropPoint.x =
              start_x
            - (self._map.project(self._map.getCenter()).x - self._origMapCenter.x);
            self.setLatLng(self._toLatLng(self._dropPoint));
          },
          end: function() {
            self.setLatLng(original);
            if (typeof callback === 'function') callback();
          },
        });
      });
    },

    // Many thanks to Robert Penner for this function
    _easeOutBounce: function(pos) {
      if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
      } else if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
      } else if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
      } else {
        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
      }
    },

    // Bounce : if options.height in pixels is not specified, drop from top.
    // If options.duration is not specified animation is 1s long.
    bounce: function(options, endCallback) {
      if (typeof options === 'function') {
        endCallback = options;
        options = null;
      }
      options = options || {duration: 1000, height: -1, loop: 1};

      // backward compatibility
      if (typeof options === 'number') {
        options.duration = arguments[0];
        options.height = arguments[1];
      }

      // Keep original map center
      this._origMapCenter = this._map.project(this._map.getCenter());
      this._dropPoint = this._getDropPoint(options.height);
      this._bounceMotion(options, endCallback);
    },

    stopBounce: function(){
      // We may have modified the marker; so we need to place it where it
      // belongs so next time its coordinates are not changed.
      this.setLatLng(this._origLatlng);
      L.Util.cancelAnimFrame(this._animationId);
    },

    // This will get you a drop point given a height.
    // If no height is given, the top y will be used.
    _getDropPoint: function(height) {
      // Get current coordidates in pixel
      this._point = this._toPoint(this._origLatlng);
      let top_y;
      if (height === undefined || height < 0) {
        top_y = this._toPoint(this._map.getBounds()._northEast).y;
      } else {
        top_y = this._point.y - height;
      }
      return new L.Point(this._point.x, top_y);
    },

    onAdd: function(map) {
      this._map = map;

      // Call leaflet original method to add the Marker to the map.
      originalOnAdd.call(this, map);

      // Keep original latitude and longitude
      this._origLatlng = this.getLatLng();

      if (this.options.bounceOnAdd === true) {
        this.bounce(this.options.bounceOnAddOptions, this.options.bounceOnAddCallback);
      }
    },

    onRemove: function(map) {
      this.stopBounce();
      originalOnRemove.call(this, map);
    },
  });
})();


  // var bd = leaflet.icon({
  //   iconUrl: 'bluedot.png',
  //   iconSize: [34, 34],
  //   iconAnchor: [17, 17],
  //   popupAnchor: [0, -20]
  // });

   
//     let mapMarkers: any[];
//     let marker: any;

    this.presentLoading("Fetching current location...");


    map.locate({
      setView: true,
      maxZoom: 18
    }).on('locationfound', (e) => {
      this.markerGroupGPS = leaflet.featureGroup();
      this.marker = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('You are here :)');
      });
      this.mapMarker.push(this.marker);

    myLoc = this.marker;
    myLat = this.marker.getLatLng().lat;
    myLng = this.marker.getLatLng().lng;

      let marker2: any = L.userMarker([e.latitude, e.longitude], { pulsing: true, accuracy:100, Icon: true}).on('click', () => {
        alert('Marker clicked');
    });

      myLocC = marker2;
    
      for(let i=0;i<this.mapMarker.length;i++) {
        map.removeLayer(this.mapMarker[i]);
        this.markerGroupGPS.removeLayer(this.mapMarker[i]);
      }


    L.marker(this.marker.getLatLng(),
    {
      bounceOnAdd: true,
      bounceOnAddOptions: {duration: 500, height: 100, loop: 1},
      bounceOnAddCallback: function() {console.log("done");}
    }).addTo(map);

    this.marker.on('click', () => {
        this.marker.bounce({duration: 500, height: 100});
    });

    map.on('click', () => {
      this.marker.bounce({duration: 1000, height: 200});
    });


      // this.markerGroupGPS.addLayer(this.marker);
      this.markerGroupGPS.addLayer(marker2);
      map.addLayer(this.markerGroupGPS);
    }).on('locationerror', (err) => {
        alert(err.message);
    }).on('singleclick',function ( e ) { 
      console.log( 'singleclick', e ); 
      leaflet.popup().setLatLng( e.latlng )
          .setContent( '<p><code>singleclick</code> at ' + e.latlng ) 
          .openOn( map );
    });

  }

  toggle() {

    var bus = document.getElementById("bus");
    var distance, min_distance, min_index;
//    var tb = document.getElementById("toggle");

    if(bus.style.color!='blue') {
      map.addLayer(this.marks);
      bus.style.color = 'blue';
      this.drawBusRoute();
    }

    else {
      map.removeLayer(this.marks);
      bus.style.color = 'grey';
    }

    console.log(myLat);
    console.log(myLng);

    distance = 0;
    min_index = 0;
    min_distance = Infinity;

    for(let i=0;i<stops.length;i++) {
      distance = getDistance([myLat, myLng], [parseFloat(stops[i][1]), parseFloat(stops[i][2])]);
      console.log(distance);
      if(distance<min_distance) {
        min_distance = distance;
        min_index = i;
      }
    }
    console.log('Shortest index : '+min_index+' => '+stops[min_index][0]+' => '+min_distance);
//  }

    if(count < 1) {
    var RL = L.Routing.control({
  //    serviceUrl: 'https://router.project-osrm.org/viaroute',
      serviceUrl: 'https://router.project-osrm.org/route/v1',
      timeout: 30 * 1000,
      waypoints: [
        leaflet.latLng(myLat, myLng),
        leaflet.latLng(parseFloat(stops[min_index][1]), parseFloat(stops[min_index][2]))
      ]
    });

    console.log('RL => '+RL.status);

    count += 1;

    RLA.push(RL);


    map.addControl(RL);
  
    }
}
}
