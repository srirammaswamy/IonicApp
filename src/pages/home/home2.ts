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
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  marks: any;
  markerGroupGPS: any;
  marker: any;
  mapMarker = [] ;
  routeLayer: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }


  ionViewDidEnter() {
    this.loadmap();
  }

  
  loadmap() {
    map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(map);

    map.on('click', () => this.removeLoad());

    var busIcon = leaflet.icon({
      iconUrl: 'https://cdn4.iconfinder.com/data/icons/location-flat/64/Location-map-pin-marker-busstation-512.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor:  [-3, -76]
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
        startBtn = this.createButton('Start from this location', container),
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
    if(document.getElementById("bus").style.color=='blue') {
   //   alert('blue');
      map.addLayer(leaflet.layerGroup(mark));
    }
    count = 0;
  }

  pointGPS() {


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

    for(let i=0;i<this.mapMarker.length;i++) {
      map.removeLayer(this.mapMarker[i]);
      this.markerGroupGPS.removeLayer(this.mapMarker[i]);
    }




    this.markerGroupGPS.addLayer(this.marker);
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


