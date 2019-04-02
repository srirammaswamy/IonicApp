import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, LoadingController } from 'ionic-angular';
import leaflet from 'leaflet';
// import esri from 'esri-leaflet';
//import L from 'leaflet';
//import L from 'leaflet-gps';
import 'leaflet-routing-machine';
import 'leaflet-easybutton';
import 'leaflet-contextmenu';
import 'xml-parser';
import * as xml2js from 'xml2js';


import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

import { GeoSearchControl, EsriProvider, OpenStreetMapProvider, GoogleProvider } from 'leaflet-geosearch';
// import bounce.js;

var RLA = [];
declare var L: any;
// L['esri'];
// L.esri: any;
var count: any;
var map: any;
count = 0;
var mark = [];
var stops2 = new Array(49);
var XMLDoc: any;

var last: any = [0,0,0,0];

// var router = new L.Routing.OSRM({ serviceUrl: 'http://localhost:5000/route/v1' }),
//    control = new L.Routing.Control({ router: router });

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

var stops3 = [ [ 'Thirumangalam Bus Stand', '9.826763', '77.990506' ],
[ 'Maravankulam', '9.832954', '77.996682' ],
[ 'Kappalur', '9.848381', '78.015210' ],
[ 'Thiagarajar Mills', '9.852567', '78.016463' ],
[ 'Kappalur Colony', '9.856682', '78.017882' ],
[ 'Koothiyargundu', '9.869108', '78.024910' ],
[ 'Thoppur', '9.8719876', '78.0232671' ],
[ 'Thanakankulam', '9.882692', '78.035624' ],
[ 'Thirunagar III', '9.882277', '78.052745' ],
[ 'Thirunagar II', '9.881113', '78.055666' ],
[ 'Thirunagar I', '9.880839', '78.058620' ],
[ 'Harveypatti', '9.880659', '78.061946' ],
[ 'Thiruparangundam', '9.882530', '78.070972' ],
[ 'TCE', '9.884823', '78.072747' ],
[ 'Moolakarai', '9.8933442', '78.0778218' ],
[ 'Pasumalai', '9.894436', '78.082579' ],
[ 'Pykara', '9.897896', '78.089405' ],
[ 'Alagappan nagar', '9.900236', '78.093221' ],
[ 'Palanganatham', '9.902838', '78.096229' ],
[ 'Vasantha Nagar', '9.907149', '78.098355' ],
[ 'PRC RTO Office', '9.9139515', '78.0953407' ],
[ 'Ram Nagar', '9.918452', '78.093951' ],
[ 'Ponmeni', '9.922148', '78.093760' ],
[ 'Chokalinga nagar', '9.926796', '78.094702' ],
[ 'Kalavasal', '9.929435', '78.095334' ],
[ 'Guru Theater', '9.936342', '78.097384' ],
[ 'Arapalayam', '9.935143', '78.103668' ],
[ 'Andalpuram', '9.908160', '78.102844' ],
[ 'Madura College', '9.909227', '78.109248' ],
[ 'Periyar', '9.915979', '78.110875' ],
[ 'Railway Station', '9.918884', '78.111650' ],
[ 'Sethupathi', '9.924015', '78.113773' ],
[ 'Simakkal', '9.924831', '78.121157' ],
[ 'Goripalayam', '9.929651', '78.130066' ],
[ 'Thamukkam', '9.931520', '78.132608' ],
[ 'Thallakulam', '9.934444', '78.135776' ],
[ 'Outpost', '9.937061', '78.137837' ],
[ 'Court', '9.936620', '78.142274' ],
[ 'Market', '9.942334', '78.151723' ],
[ 'MGR', '9.944425', '78.156120' ],
[ 'Narimedu', '9.936004', '78.127550' ],
[ 'Bibikulam', '9.941603', '78.129400' ],
[ 'Viswanathapuram', '9.952730', '78.129385' ],
[ 'Valuvar Colony', '9.958360', '78.128381' ],
[ 'Kalai Nagar', '9.960368', '78.127963' ],
[ 'Thapalthandi Nagar', '9.965239', '78.126622' ],
[ 'Park Town', '9.967691', '78.126612' ],
[ 'Railway Colony', '9.919887', '78.107397' ],
[ 'Arasaradi', '9.927321', '78.099556' ] ];


var distance = 10; // Distance in km
// var boxes = L.RouteBoxer.box(route, distance);

var myLat: number;
var myLng: number;
var myLoc: any;
var myLocC: any;

var myLocFlag: boolean = false;
var busStopFlag: boolean = false;

var options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
};

    // var control = L.Control.Geocoder({ geocoder: null });
    var btn;
    var selection;
    var marker;

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
// var distance = getDistance([lat1, lng2], [lat2, lng2])


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})


export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  marks: any;
  markerGroupGPS: any;
  marker: any;
  mapMarker = [] ;
  routeLayer: any;
  showBtn: boolean = true;
  deferredPrompt;
  visibleState = 'visible';
  rgc: any;
  rlat: any = 0;
  rlng: any = 0;
  rgcMark: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: Http, private nativeGeocoder: NativeGeocoder) {
    this.readCSV();
  }

  readCSV() {
    var count = 0;
    this.http.get('assets/allBusStops48.csv').subscribe(
        data => { 
          var stops1 = data; 
          var k = stops1["_body"].split('\n');
          for(var i of k) {
            var row = [];
            row = i.split(', ');
            stops2[count]=row;
            count++;
          }
        });
    console.log(stops);
      console.log(stops2);
  }


ionViewWillEnter(){
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later on the button event.
      this.deferredPrompt = e;
       
    // Update UI by showing a button to notify the user they can add to home screen
      this.showBtn = true;
    });
     
    //button click event to show the promt
             
    window.addEventListener('appinstalled', (event) => {
     alert('installed');
    });
     
     
    if (window.matchMedia('(display-mode: standalone)').matches) {
      alert('display-mode is standalone');
    }
  }
 
  add_to_home(e){
    debugger
    // hide our user interface that shows our button
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          alert('User accepted the prompt');
        } else {
          alert('User dismissed the prompt');
        }
        this.deferredPrompt = null;
      });
  };
 

  // var LeafIcon = leaflet.Icon.extend({
  //   options: {
  //     shadowUrl: 'leaf-shadow.png',
  //     iconSize: [38, 95],
  //     shadowSize: [50, 64],
  //     iconAnchor: [22, 94],
  //     shadowAnchor: [4, 62],
  //     popupAnchor: [-3, -76]
  //   }
  // });

  // var greenIcon  = new LeafIcon({iconUrl: 'leaf-green.png'});

  // leaflet.icon = function(options) {
  //   return new leaflet.Icon(options);
  // }

  // let options: NativeGeocoderOptions = {
  //   useLocale: true,
  //   maxResults: 5
  // };

  ionViewDidEnter() {
    this.loadmap();
//    map = this.map;
  }

  // geoCoder(lat, lng) {
  //   this.nativeGeocoder.reverseGeocode(lat, lng, options)
  // .then((result: NativeGeocoderReverseResult[]) => alert(JSON.stringify(result[0])))
  // .catch((error: any) => console.log(error));
  // }

  toggleVisible() {
    this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
  }
  
  wait() {
    console.log('waiting...');
  }

  loadmap() {
    map = L.map("map").fitWorld();
    this.map = map;
      // , {
    //   contextmenu: false,
    //   contextmenuWidth: 140,
    //       contextmenuItems: [{
    //     text: 'Show coordinates',
    //     callback: showCoordinates
    // }, {
    //     text: 'Center map here',
    //     callback: centerMap
    // }, '-', {
    //     text: 'Zoom in',
    //     icon: 'images/zoom-in.png',
    //     callback: zoomIn
    // }, {
    //     text: 'Zoom out',
    //     icon: 'images/zoom-out.png',
    //     callback: zoomOut
    // }]
    // });

    // var rlat, rlng;

    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {                                                                        
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(map);

 /*   
    map.on('click', (e) => { 
      this.rlat = e.latlng.lat; 
      this.rlng = e.latlng.lng; 
      setTimeout(this.wait, 1000);
      console.log(this.reverseGeocoding(this.rlat, this.rlng)); 
      console.log(this.rlat+', '+this.rlng);
      console.log('RGC: '+this.rgc);
      console.log('======================');
      var s = this.rgc;
      if(this.rgcMark)
        map.removeLayer(this.rgcMark);
      this.rgcMark = leaflet.marker([this.rlat, this.rlng]);
      map.addLayer(this.rgcMark.bindPopup(s).openPopup(s));

    });
*/
    // this.rgcMark.on('contextmenu',)

    


function showCoordinates (e) {
    alert(e.latlng);
}
 
function centerMap (e) {
    map.panTo(e.latlng);
}
 
function zoomIn (e) {
    map.zoomIn();
}
 
function zoomOut (e) {
    map.zoomOut();
}

  //  map = this.map;
    /*  LOADING THE MARKERS OF THE USER-DEFINED PLACES */

    // var stops = [
    //   ["Alagappa Nagar", "9.9006292", "78.0936527"],
    //   ["TCE bus stop", "9.886632", "78.074554"],
    //   ["Moolakarai", "9.8933919", "78.0783454"],
    //   ["Munichalai", "9.917246", "78.1318152"]
    // ];

  //  var searchControl = L.esri.Geocoding.geosearch().addTo(map);

  // var results = L.layerGroup().addTo(map);

  // searchControl.on('results', function(data){
  //   results.clearLayers();
  //   for (var i = data.results.length - 1; i >= 0; i--) {
  //     results.addLayer(L.marker(data.results[i].latlng));
  //   }
  // });



    var busIcon = leaflet.icon({
//      iconUrl: 'https://cdn4.iconfinder.com/data/icons/location-flat/64/Location-map-pin-marker-busstation-512.png',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/geo-points/154/bus-512.png',
      // iconSize: [38, 95],
      iconSize: [50, 85],
      // iconAnchor: [22, 94],
      iconAnchor: [24, 80],
      // popupAnchor:  [-3, -76]
      popupAnchor: [0, -60]
    });

    console.log('stops => '+stops.length);
    console.log('stops2 => '+stops2.length);

    for(var i=0;i<stops3.length;i++) {

      var stop_name: string = stops3[i][0];
      var lat: number = parseFloat(stops3[i][1]);
      var lng: number = parseFloat(stops3[i][2]);

      console.log(lat+', '+lng);

      var cur_mark: any;

      // mark.push(leaflet.marker([lat, lng], {icon: busIcon}).bindPopup(stop_name).on('click', (e) => this.drawRoute(e.latlng.lat, e.latlng.lng)));
    mark.push(leaflet.marker([lat, lng], {icon: busIcon}).bindPopup(stop_name).on('click', (e) => this.drawRoute(e.latlng.lat, e.latlng.lng)));
//      var CM = leaflet.marker([lat, lng], {icon: busIcon}).bindPopup(stop_name); //.on('click', this.drawRoute(lat, lng));
    console.log(lat+', '+lng);
//      CM.on('click', this.drawRoute(lat, lng));
   //   mark.push(cur_mark);

   //   console.log('Lat: '+cur_mark.getLatLng().lat);


    }
    this.marks = leaflet.layerGroup(mark);
    this.routeLayer = leaflet.featureGroup();

    map.on('contextmenu', (e) => {
    var container = L.DomUtil.create('div'),
        startBtn = this.createButton('Mark as source', container),
        br1 = L.DomUtil.create('br', '', container),
        destBtn = this.createButton('Mark as destination', container);
        // holdBtn = this.createButton('Hold', container);

    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);
    
   L.DomEvent.on(startBtn, 'click', () => {
        this.draw(e.latlng.lat, e.latlng.lng, myLat, myLng);
        map.closePopup();
    });
  
  L.DomEvent.on(startBtn, 'click', () => {
        this.minDistance(e.latlng.lat, e.latlng.lng, 0);
        map.closePopup();
    });
    
  L.DomEvent.on(destBtn, 'click', () => {
        this.minDistance(e.latlng.lat, e.latlng.lng, 1);
        map.closePopup();
    });

//========================================================================
    });

// var L = require('leaflet');
// var esri = require('esri-leaflet');


  // var searchControl = L.esri.Geocoding.geosearch().addTo(map);

  // var results = L.layerGroup().addTo(map);

  // searchControl.on('results', function(data){
  //   results.clearLayers();
  //   for (var i = data.results.length - 1; i >= 0; i--) {
  //     results.addLayer(L.marker(data.results[i].latlng));
  //   }
  // });

    const provider = new OpenStreetMapProvider(); 
    const searchControl = new GeoSearchControl({ 
      provider: provider, 
      style: 'button',
      autoClose: true,
      showMarker: true,
      showPopup: true,
      keepResult: true
    });

    map.addControl(searchControl);


/*
    map.on('click', (e) => {
        L.Control.Geocoder({ geocoder: null }).options.geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), function(results) {
            var r = results[0];
            if (r) {
                if (marker) {
                    map.removeLayer(marker);
                }
                marker = L.marker(r.center).bindPopup(r.html || r.name).addTo(map).openPopup();
            }
        })
    });
*/
/*
  var geocodeService = new L.esri.Geocoding.geocodeService();

  map.on('click', function(e) {
    geocodeService.reverse().latlng(e.latlng).run(function(error, result) {
      L.marker(result.latlng).addTo(map).bindPopup(result.address.Match_addr).openPopup();
    });
  });

 var geocodeService = new L.esri.Services.Geocoding();

  map.on('click', function(e){
    geocodeService.reverse(e.latlng, {}, function(error, result){
      L.marker(result.latlng).addTo(map).bindPopup(result.address).openPopup();
    });
  });
*/

  }

  parseXML(data) {
    var parser = new xml2js.Parser();
    var data;
    parser.parseString(data, (err, result) => {
      console.log(err);
      console.log(result);
      console.log('Done');
      this.rgc = result.reversegeocode.result[0]._; 
      console.log('P: '+this.rgc);
      data = this.rgc;
    });
    return data;
  }

  reverseGeocoding(lat, lon) {
    var XMLString;
     this.http.get("https://nominatim.openstreetmap.org/reverse?lat="+lat+"&lon="+lon+"&zoom=18&addressdetails=1")
       .subscribe((data) => { 
         XMLString = data["_body"]; 
         console.log(XMLString); 
         XMLDoc = this.parseXML(XMLString); 
         // console.log(XMLDoc.reversegeocode.result[0]._);

       });
       console.log('X: '+XMLDoc);
       return XMLDoc;
       // parser = new DOMParser();
       // XMLDoc = parser.parseFromString(XMLString, "text/xml");
       // console.log('X :'+XMLDoc);

       // var xml2js = require('xml2js');

       // parseString(XMLString, (err, result) => {
       //   console.log(result);
       //   console.log(err);
       // });

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
    last[0] = a;
    last[1] = b;
    last[2] = c;
    last[3] = d;

    console.log(last);
    // var x = document.getElementsByClassName("xyz");
    // var i;
    // for (i = 0; i < x.length; i++) {
    //   x[i].style.display = 'none';
    // }
    // $(".leaflet-control-container").hide();
    var x = document.querySelectorAll(".leaflet-right");
    for(let i=0;i<x.length;i++)
      x[i].style.display= 'none';
    // map.addControl(D);
    D.addTo(map);
    // map.removeControl(D);
    RLA.push(D);

    console.log('D => '+D.message);
    console.log(Object);


  }

  retry() {
    // if(last[0]!=0) {
      var l = last;
      // this.removeLoad();
      this.draw(l[0],l[1],l[2],l[3]);
    // }
    console.log(l);
  }

  drawBusRoute() {
    for(let i=0;i<RLA.length;i++) {
      map.removeControl(RLA[i]);
      // this.routeLayer.removeLayer(RLA[i]);
    }
    for(let i=1;i<stops3.length;i++) {
     setTimeout(() => this.draw(stops3[i-1][1], stops3[i-1][2], stops3[i][1], stops3[i][2]), 2000);
   }
      // var RL2 = L.Routing.control({
      // serviceUrl: 'https://router.project-osrm.org/route/v1',
      // tiemout: 30 * 1000,
      // waypoints: [
      //   leaflet.latLng(parseFloat(stops[i-1][1]), parseFloat(stops[i-1][2])),
      //   leaflet.latLng(parseFloat(stops[i][1]), parseFloat(stops[i][2]))
      // ]
    // });

    // document.getElementsByClassName("leaflet-control-container").style.display='none';
      // setTimeout(() => console.log(i), 1000);
    // RL2._container.style.display = "None";

    // map.addControl(RL2);
    // RLA.push(RL2);

        // alert("hello");

   //  function doSomething() {
   // //do whatever you want here
   //  }
    // }

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
    for(let i = 0; i<last.length;i++)
      last[i] = 0;
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
    if(myLocFlag) {
      myLoc.addTo(map);
      myLocC.addTo(map);
    }

    if(busStopFlag) {
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
        alert('You are here');
      });
      this.mapMarker.push(this.marker);

    myLoc = this.marker;
    myLat = this.marker.getLatLng().lat;
    myLng = this.marker.getLatLng().lng;


//    console.log(myLat);
//    console.log(myLng);
      let marker2: any = L.userMarker([e.latitude, e.longitude], { pulsing: true, accuracy:100, Icon: true}).on('click', () => {
        alert('Marker clicked');
    });

      myLocC = marker2;
      myLocFlag = true;
    
  //      e.latlng = this.map.getLatLng;

//      this.map.removeLayer(this.markerGroupGPS);

//      this.markerGroupGPS.clearLayers();
//      if(!this.map.hasLayer(this.markerGroupGPS)) {
//         alert('hello');

//         this.map.removeLayer(this.markerGroupGPS);
//         this.markerGroupGPS.clearLayers();
//      }
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

//    let fe = this.mapMarker.shift();
//    this.map.removeLayer(fe);
//    this.markerGroupGPS.removeLayer(fe);

//  this.map.addControl(new L.Control.Gps();


  }

  toggle() {

    var bus = document.getElementById("bus");
//    var tb = document.getElementById("toggle");

    if(bus.style.color!='blue') {
      map.addLayer(this.marks);
      bus.style.color = 'blue';
      // this.drawBusRoute();
      busStopFlag = true;
    }

    else {
      map.removeLayer(this.marks);
      bus.style.color = 'grey';
      busStopFlag = false;
    }

    console.log(myLat);
    console.log(myLng);
  }

  minDistance(givenLat, givenLng, s) {

    var distance, min_distance, min_index;

    distance = 0;
    min_index = 0;
    min_distance = Infinity;

    for(let i=0;i<stops3.length;i++) {
      distance = getDistance([givenLat, givenLng], [parseFloat(stops3[i][1]), parseFloat(stops3[i][2])]);
      console.log(distance);
      if(distance<min_distance) {
        min_distance = distance;
        min_index = i;
      }
    }
    console.log('Shortest index : '+min_index+' => '+stops3[min_index][0]+' => '+min_distance);
//  }
    if(s==0) {
      var a = givenLat;
      var b = givenLng;
      var c = parseFloat(stops3[min_index][1]);
      var d = parseFloat(stops3[min_index][2]);
    }
    else {
      var a = parseFloat(stops3[min_index][1]);
      var b = parseFloat(stops3[min_index][2]);
      var c = givenLat;
      var d = givenLng;
    }

    // if(count < 1) {
    var RL = L.Routing.control({
  //    serviceUrl: 'https://router.project-osrm.org/viaroute',
      serviceUrl: 'https://router.project-osrm.org/route/v1',
      timeout: 30 * 1000,
      waypoints: [
//      leaflet.latLng(9.9006292, 78.0936527),
//      leaflet.latLng(9.886632, 78.074554)
        leaflet.latLng(a, b),
        leaflet.latLng(c, d)
      ]
    });

    console.log('RL => '+RL.status);

    count += 1;

    RLA.push(RL);


    map.addControl(RL);
//    this.routeLayer.addLayer(RL);
//    map.addLayer(this.routeLayer);
//    RL.addTo(map);
//    RL.addTo(map);    
  
    }

  //   else {

  //       for(let i=0;i<RLA.length;i++) {
  //         map.removeLayer(RLA[i]);
  // //    count += 1;
  //   }
  //  }


    // L.Routing.control({
    //   waypoints: [
    //     leaflet.latLng(9.9006292, 78.0936527),
    //     leaflet.latLng(9.886632, 78.074554)
    //   ],
    //   routeWileDragging: true
    // }).addTo(this.map);    
    // .on('routingerror', function(e) {
    //     try {
    //         this.map.getCenter();
    //     } catch (e) {
    //         this.map.fitBounds(L.latLngBounds(L.control.getWaypoints().map(function(wp) { return wp.latLng; })));
    //     }

    //     this.handleError(e);
    // })
    // .addTo(this.map);

// L.Routing.errorControl(L.control).addTo(this.map);



  // }


}


    //  var lon = parseFloat(stops[i][1]);
    //  var lat = parseFloat(stops[i][2]);


      //var mark: Array<String>;
    //  var markerGroup = leaflet.layerGroup().addTo(this.map);
    //  var mark = leaflet.marker([lon, lat]).bindPopup(stops[i][0]).addTo(markerGroup);
//      if(bus.style.color=='blue') {
//        bus.style.color='black';

      
//      }
//      else {
//        bus.style.color='blue';
//        leaflet.marker([1000, 1000]).bindPopup(stop_name).addTo(this.map);
//      }

    


    // addMarker() {
    //   this.geoCodeandAdd();
    
    
    // }

    // geoCodeandAdd() {
    //   this.nativeGeocoder.forwardGeocode('TCE', options)
    //     .then((result: NativeGeocoderReverseResult[]) => console.log(JSON.stringify(result[0])))
    //     .catch((error: any) => console.log(error));
    // }


    // .marker([51.5, 9.34342], {icon: greenIcon}).addTo(this.map).bindPopup("I am a Marker");;
//     .map.addInitHook( function () {
    
//     var that = this, h;
    
//     if (that.on)
//     {
//         that.on( 'click',    check_later );
//         that.on( 'dblclick', function () { setTimeout( clear_h, 0 ); } );
//     }
    
//     function check_later( e )
//     {
//         clear_h();
        
//         h = setTimeout( check, 500 );
        
//         function check()
//         {
//             that.fire( 'singleclick', leaflet.Util.extend( e, { type : 'singleclick' } ) );
//         }
//     }
    
//     function clear_h()
//     {
//         if (h != null)
//         {
//             clearTimeout( h );
//             h = null;
//         }
// }
    
// });


    // leaflet.marker([51.5, 9.34342], {icon: greenIcon}).addTo(this.map).bindPopup("I am a Marker");

