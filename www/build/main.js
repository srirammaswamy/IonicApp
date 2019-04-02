webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_routing_machine__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_routing_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet_routing_machine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_easybutton__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_easybutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet_easybutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet_geosearch__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet_geosearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_leaflet_geosearch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import L from 'leaflet';
//import L from 'leaflet-gps';


// import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
// import bounce.js;

var RLA = [];
var count;
var map;
count = 0;
var mark = [];
var stops2 = Array(48);
var searchControl;
var searchFlag = false;
var aoa = [];
var rei = 0;
var rej = 0;
// var last: any = [0,0,0,0];
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
var stops3 = [['Thirumangalam Bus Stand', '9.826763', '77.990506'],
    ['Maravankulam', '9.832954', '77.996682'],
    ['Kappalur', '9.848381', '78.015210'],
    ['Thiagarajar Mills', '9.852567', '78.016463'],
    ['Kappalur Colony', '9.856682', '78.017882'],
    ['Koothiyargundu', '9.869108', '78.024910'],
    ['Thoppur', '9.8719876', '78.0232671'],
    ['Thanakankulam', '9.882692', '78.035624'],
    ['Thirunagar III', '9.882277', '78.052745'],
    ['Thirunagar II', '9.881113', '78.055666'],
    ['Thirunagar I', '9.880839', '78.058620'],
    ['Harveypatti', '9.880659', '78.061946'],
    ['Thiruparangundam', '9.882530', '78.070972'],
    ['TCE', '9.884823', '78.072747'],
    ['Moolakarai', '9.8933442', '78.0778218'],
    ['Pasumalai', '9.894436', '78.082579'],
    ['Pykara', '9.897896', '78.089405'],
    ['Alagappan nagar', '9.900236', '78.093221'],
    ['Palanganatham', '9.902838', '78.096229'],
    ['Vasantha Nagar', '9.907149', '78.098355'],
    ['PRC RTO Office', '9.9139515', '78.0953407'],
    ['Ram Nagar', '9.918452', '78.093951'],
    ['Ponmeni', '9.922148', '78.093760'],
    ['Chokalinga nagar', '9.926796', '78.094702'],
    ['Kalavasal', '9.929435', '78.095334'],
    ['Guru Theater', '9.936342', '78.097384'],
    ['Arapalayam', '9.935143', '78.103668'],
    ['Andalpuram', '9.908160', '78.102844'],
    ['Madura College', '9.909227', '78.109248'],
    ['Periyar', '9.915979', '78.110875'],
    ['Railway Station', '9.918884', '78.111650'],
    ['Sethupathi', '9.924015', '78.113773'],
    ['Simakkal', '9.924831', '78.121157'],
    ['Goripalayam', '9.929651', '78.130066'],
    ['Thamukkam', '9.931520', '78.132608'],
    ['Thallakulam', '9.934444', '78.135776'],
    ['Outpost', '9.937061', '78.137837'],
    ['Court', '9.936620', '78.142274'],
    ['Market', '9.942334', '78.151723'],
    ['MGR', '9.944425', '78.156120'],
    ['Narimedu', '9.936004', '78.127550'],
    ['Bibikulam', '9.941603', '78.129400'],
    ['Viswanathapuram', '9.952730', '78.129385'],
    ['Valuvar Colony', '9.958360', '78.128381'],
    ['Kalai Nagar', '9.960368', '78.127963'],
    ['Thapalthandi Nagar', '9.965239', '78.126622'],
    ['Park Town', '9.967691', '78.126612'],
    ['Railway Colony', '9.919887', '78.107397'],
    ['Arasaradi', '9.927321', '78.099556']];
var distance = 10; // Distance in km
// var boxes = L.RouteBoxer.box(route, distance);
var myLat;
var myLng;
var myLoc;
var myLocC;
var myLocFlag = false;
var busStopFlag = false;
var searchFlag = false;
var routeFlag = false;
var lastMark = {
    'lat': 0,
    'lng': 0,
    'val': 0,
    'marker': null
};
var stopsInRoute = [];
function getDistance(origin, destination) {
    // return distance in meters
    var lon1 = toRadian(origin[1]), lat1 = toRadian(origin[0]), lon2 = toRadian(destination[1]), lat2 = toRadian(destination[0]);
    var deltaLat = lat2 - lat1;
    var deltaLon = lon2 - lon1;
    var a = Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
}
function toRadian(degree) {
    return degree * Math.PI / 180;
}
// var distance = getDistance([lat1, lng2], [lat2, lng2])
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, loadingCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.http = http;
        this.mapMarker = [];
        this.showBtn = true;
        this.visibleState = 'visible';
        this.routingall = [];
        this.d = [];
        this.fromId = -1;
        this.toId = -1;
        this.aoo = [];
        this.stopIds = {};
        this.k = [];
        this.gotFlag = false;
        this.readCsvData();
        this.routingall = navParams.get('route');
        this.gotFlag = navParams.get('flag');
    }
    MapPage.prototype.readCSV = function () {
        var count = 0;
        this.http.get('assets/allBusStops48.csv').subscribe(function (data) {
            var stops1 = data;
            console.log('d: ' + data);
            var k = stops1["_body"].split('\n');
            for (var _i = 0, k_1 = k; _i < k_1.length; _i++) {
                var i = k_1[_i];
                var row = [];
                row = i.split(', ');
                stops2[count] = (row);
                count++;
            }
        });
        console.log(stops);
        console.log(stops2);
    };
    MapPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        window.addEventListener('beforeinstallprompt', function (e) {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later on the button event.
            _this.deferredPrompt = e;
            // Update UI by showing a button to notify the user they can add to home screen
            _this.showBtn = true;
        });
        //button click event to show the promt
        window.addEventListener('appinstalled', function (event) {
            alert('installed');
        });
        // if (window.matchMedia('(display-mode: standalone)').matches) {
        //   alert('display-mode is standalone');
        // }
    };
    MapPage.prototype.add_to_home = function (e) {
        var _this = this;
        debugger;
        // hide our user interface that shows our button
        // Show the prompt
        this.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        this.deferredPrompt.userChoice
            .then(function (choiceResult) {
            if (choiceResult.outcome === 'accepted') {
                alert('User accepted the prompt');
            }
            else {
                alert('User dismissed the prompt');
            }
            _this.deferredPrompt = null;
        });
    };
    ;
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
    MapPage.prototype.ionViewDidEnter = function () {
        this.loadmap();
        //    map = this.map;
    };
    MapPage.prototype.toggleVisible = function () {
        this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
    };
    MapPage.prototype.loadmap = function () {
        var _this = this;
        map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map("map").fitWorld();
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(map);
        if (this.gotFlag) {
            this.drawBusRoute();
            this.drawBusRoute();
        }
        // map.on('click', () => this.removeLoad());
        //  map = this.map;
        /*  LOADING THE MARKERS OF THE USER-DEFINED PLACES */
        // var stops = [
        //   ["Alagappa Nagar", "9.9006292", "78.0936527"],
        //   ["TCE bus stop", "9.886632", "78.074554"],
        //   ["Moolakarai", "9.8933919", "78.0783454"],
        //   ["Munichalai", "9.917246", "78.1318152"]
        // ];
        var busIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.icon({
            //      iconUrl: 'https://cdn4.iconfinder.com/data/icons/location-flat/64/Location-map-pin-marker-busstation-512.png',
            iconUrl: 'https://cdn0.iconfinder.com/data/icons/geo-points/154/bus-512.png',
            // iconSize: [38, 95],
            iconSize: [50, 85],
            // iconAnchor: [22, 94],
            iconAnchor: [24, 80],
            // popupAnchor:  [-3, -76]
            popupAnchor: [0, -60]
        });
        console.log('stops => ' + stops.length);
        console.log('stops2 => ' + stops2.length);
        for (var i = 0; i < stops3.length; i++) {
            var stop_name = stops3[i][0];
            var lat = parseFloat(stops3[i][1]);
            var lng = parseFloat(stops3[i][2]);
            console.log(lat + ', ' + lng);
            var cur_mark;
            // mark.push(leaflet.marker([lat, lng], {icon: busIcon}).bindPopup(stop_name).on('click', (e) => this.drawRoute(e.latlng.lat, e.latlng.lng)));
            mark.push(__WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.marker([lat, lng], { icon: busIcon }).bindPopup(stop_name).on('click', function (e) { return _this.drawRoute(e.latlng.lat, e.latlng.lng); }));
            //      var CM = leaflet.marker([lat, lng], {icon: busIcon}).bindPopup(stop_name); //.on('click', this.drawRoute(lat, lng));
            console.log(lat + ', ' + lng);
            //      CM.on('click', this.drawRoute(lat, lng));
            //   mark.push(cur_mark);
            //   console.log('Lat: '+cur_mark.getLatLng().lat);
        }
        this.marks = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.layerGroup(mark);
        this.routeLayer = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.featureGroup();
        map.on('contextmenu', function (e) {
            var container = L.DomUtil.create('div'), startBtn = _this.createButton('Mark as source <br />', container), destBtn = _this.createButton('Mark as destination', container);
            L.popup()
                .setContent(container)
                .setLatLng(e.latlng)
                .openOn(map);
            // L.DomEvent.on(startBtn, 'click', () => {
            //      this.draw(e.latlng.lat, e.latlng.lng, myLat, myLng);
            //      map.closePopup();
            //  });
            L.DomEvent.on(startBtn, 'click', function () {
                _this.nearestBusStop(e.latlng.lat, e.latlng.lng, 1);
                _this.updateLast(e.latlng.lat, e.latlng.lng, 1);
                map.closePopup();
            });
            L.DomEvent.on(destBtn, 'click', function () {
                _this.nearestBusStop(e.latlng.lat, e.latlng.lng, 2);
                _this.updateLast(e.latlng.lat, e.latlng.lng, 2);
                map.closePopup();
            });
        });
        var provider = new __WEBPACK_IMPORTED_MODULE_6_leaflet_geosearch__["OpenStreetMapProvider"]();
        searchControl = new __WEBPACK_IMPORTED_MODULE_6_leaflet_geosearch__["GeoSearchControl"]({
            provider: provider,
            style: 'button',
            autoClose: true,
            showMarker: true,
            showPopup: true,
            keepResult: true
        });
        // map.addControl(searchControl);
    };
    MapPage.prototype.updateLast = function (lat, lng, op) {
        lastMark.lat = lat;
        lastMark.lng = lng;
        lastMark.val = op;
        console.log(lastMark);
    };
    MapPage.prototype.toggleSearch = function () {
        if (searchFlag) {
            map.removeControl(searchControl);
            searchFlag = false;
        }
        else {
            map.addControl(searchControl);
            searchFlag = true;
        }
    };
    MapPage.prototype.draw = function (a, b, c, d, n) {
        if (n === void 0) { n = 'Marker'; }
        var D = L.Routing.control({
            createMarker: function (waypointIndex, waypoint, numberOfWaypoints) {
                return L.marker(waypoint.latLng)
                    .bindPopup(n);
            },
            serviceUrl: 'https://router.project-osrm.org/route/v1',
            timeout: 30 * 1000,
            waypoints: [
                __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.latLng(parseFloat(a), parseFloat(b)),
                __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.latLng(parseFloat(c), parseFloat(d))
            ]
        });
        // console.log(last);
        // var x = document.getElementsByClassName("xyz");
        // var i;
        // for (i = 0; i < x.length; i++) {
        //   x[i].style.display = 'none';
        // }
        // $(".leaflet-control-container").hide();
        var x = document.querySelectorAll(".leaflet-right");
        for (var i = 0; i < x.length; i++)
            x[i].style.display = 'none';
        // map.addControl(D);
        D.addTo(map);
        // map.removeControl(D);
        RLA.push(D);
        console.log('D => ' + D.message);
        console.log(Object);
    };
    MapPage.prototype.retry = function () {
        if (lastMark.val > 0) {
            rei += 0.000001;
            rej += 0.000001;
            this.nearestBusStop(lastMark.lat + rei, lastMark.lng + rej, lastMark.val);
        }
        // if(last[0]!=0) {
        // var l = last;
        // this.removeLoad();
        // this.draw(l[0],l[1],l[2],l[3]);
        // }
        // console.log(l);
    };
    MapPage.prototype.drawBusRoute = function () {
        // for(let i=0;i<RLA.length;i++) {
        // map.removeControl(RLA[i]);
        // this.routeLayer.removeLayer(RLA[i]);
        // }
        var Route;
        var i = 0;
        // while(this.routingall[i].length==0)
        // i++;
        Route = this.routingall[0];
        // if(Route.length==0)
        //   Route=this.routingall[1];
        // if(Route.length==0)
        //   Route=this.routingall[2];
        console.log('Routing all');
        console.log(this.routingall[0]);
        console.log(this.fromId + ', ' + this.toId);
        this.showroutes();
        console.log(Route);
        console.log(this.fromId + ', ' + this.toId);
        stopsInRoute.push(Route[0].name);
        for (var i_1 = 1; i_1 < Route.length; i_1++) {
            console.log(parseFloat(Route[i_1 - 1].lat), parseFloat(Route[i_1 - 1].lon), parseFloat(Route[i_1].lat), parseFloat(Route[i_1].lon));
            this.draw(parseFloat(Route[i_1 - 1].lat), parseFloat(Route[i_1 - 1].lon), parseFloat(Route[i_1].lat), parseFloat(Route[i_1].lon), Route[i_1 - 1].name);
            stopsInRoute.push(Route[i_1].name);
        }
        // for(let i=1;i<stops2.length;i++) {
        // setTimeout(() => this.draw(stops[i-1][1], stops[i-1][2], stops[i][1], stops[i][2]), 2000);
        // }
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
    };
    MapPage.prototype.createButton = function (label, container) {
        var btn = L.DomUtil.create('button', '', container);
        btn.setAttribute('type', 'button');
        btn.innerHTML = label;
        return btn;
    };
    MapPage.prototype.drawRoute = function (lat, lng) {
        for (var i = 0; i < RLA.length; i++) {
            map.removeControl(RLA[i]);
            // this.routeLayer.removeLayer(RLA[i]);
        }
        var RL = L.Routing.control({
            //    serviceUrl: 'https://router.project-osrm.org/viaroute',      
            serviceUrl: 'https://router.project-osrm.org/route/v1',
            timeout: 30 * 1000,
            waypoints: [
                __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.latLng(lat, lng),
                __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.latLng(myLat, myLng)
            ]
        });
        console.log('Console => ' + RL);
        //    this.routeLayer.addLayer(RL);
        map.addLayer(this.routeLayer);
        map.addControl(RL);
        //    RL.addTo(map);
        RLA.push(RL);
    };
    MapPage.prototype.presentLoading = function (text) {
        var loader = this.loadingCtrl.create({
            content: text,
            duration: 3000
        });
        loader.present();
    };
    MapPage.prototype.removeLoad = function () {
        // for(let i = 0; i<last.length;i++)
        // last[i] = 0;
        lastMark.val = 0;
        this.routingall = [];
        this.d = [];
        this.fromId = -1;
        this.toId = -1;
        // this.aoo = [];
        // aoa = [];
        rei = 0;
        rej = 0;
        map.eachLayer(function (layer) {
            map.removeLayer(layer);
        });
        for (var i = 0; i < RLA.length; i++) {
            map.removeControl(RLA[i]);
        }
        //   map.remove();
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(map);
        if (myLocFlag) {
            myLoc.addTo(map);
            myLocC.addTo(map);
        }
        if (busStopFlag) {
            //   alert('blue');
            map.addLayer(__WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.layerGroup(mark));
        }
        count = 0;
    };
    MapPage.prototype.pointGPS = function () {
        var _this = this;
        (function (window) {
            var icon = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.divIcon({
                className: "leaflet-usermarker",
                iconUrl: 'img/bluedot.png',
                iconSize: [34, 34],
                iconAnchor: [17, 17],
                popupAnchor: [0, -20],
                //      labelAnchor: [11, -3],
                html: ''
            });
            var iconPulsing = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.divIcon({
                className: "leaflet-usermarker",
                iconSize: [34, 34],
                iconAnchor: [17, 17],
                popupAnchor: [0, -20],
                //      labelAnchor: [11, -3],
                html: '<i class="pulse"></i>'
            });
            var iconSmall = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.divIcon({
                className: "leaflet-usermarker-small",
                iconSize: [17, 17],
                iconAnchor: [9, 9],
                popupAnchor: [0, -10],
                //labelAnchor: [3, -4],
                html: ''
            });
            var iconPulsingSmall = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.divIcon({
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
            __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.UserMarker = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.Marker.extend({
                options: {
                    pulsing: false,
                    smallIcon: false,
                    accuracy: 0,
                    circleOpts: circleStyle
                },
                initialize: function (latlng, options) {
                    options = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.Util.setOptions(this, options);
                    this.setPulsing(this.options.pulsing);
                    this._accMarker = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.circle(latlng, this.options.accuracy, this.options.circleOpts);
                    // call super
                    __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.Marker.prototype.initialize.call(this, latlng, this.options);
                    this.on("move", function () {
                        this._accMarker.setLatLng(this.getLatLng());
                    }).on("remove", function () {
                        this._map.removeLayer(this._accMarker);
                    });
                },
                setPulsing: function (pulsing) {
                    this._pulsing = pulsing;
                    if (this.options.smallIcon) {
                        this.setIcon(!!this._pulsing ? iconPulsingSmall : iconSmall);
                    }
                    else {
                        this.setIcon(!!this._pulsing ? iconPulsing : icon);
                    }
                },
                setAccuracy: function (accuracy) {
                    this._accuracy = accuracy;
                    if (!this._accMarker) {
                        this._accMarker = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.circle(this._latlng, accuracy, this.options.circleOpts).addTo(this._map);
                    }
                    else {
                        this._accMarker.setRadius(accuracy);
                    }
                },
                onAdd: function (map) {
                    // super
                    __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.Marker.prototype.onAdd.call(this, map);
                    this._accMarker.addTo(map);
                }
            });
            __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.userMarker = function (latlng, options) {
                return new __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.UserMarker(latlng, options);
            };
        })(window);
        (function () {
            // Retain the value of the original onAdd and onRemove functions
            var originalOnAdd = L.Marker.prototype.onAdd;
            var originalOnRemove = L.Marker.prototype.onRemove;
            // Add bounceonAdd options
            L.Marker.mergeOptions({
                bounceOnAdd: false,
                bounceOnAddOptions: {
                    duration: 1000,
                    height: -1,
                    loop: 1,
                },
                bounceOnAddCallback: function () { },
            });
            L.Marker.include({
                _toPoint: function (latlng) {
                    return this._map.latLngToContainerPoint(latlng);
                },
                _toLatLng: function (point) {
                    return this._map.containerPointToLatLng(point);
                },
                _motionStep: function (opts) {
                    var self = this;
                    var timePassed = new Date() - opts.start;
                    var progress = timePassed / opts.duration;
                    if (progress > 1) {
                        progress = 1;
                    }
                    var delta = self._easeOutBounce(progress);
                    opts.step(delta);
                    if (progress === 1) {
                        opts.start = new Date();
                        progress = 0;
                        if (opts.loop > 0)
                            opts.loop = opts.loop - 1;
                        if (opts.loop === 0) {
                            opts.end();
                            return;
                        }
                    }
                    self._animationId = L.Util.requestAnimFrame(function (timestamp) {
                        self._motionStep(opts);
                    });
                },
                _bounceMotion: function (opts, callback) {
                    var original = L.latLng(this._origLatlng);
                    var start_y = this._dropPoint.y;
                    var start_x = this._dropPoint.x;
                    var distance = this._point.y - start_y;
                    var self = this;
                    self._animationId = L.Util.requestAnimFrame(function () {
                        self._motionStep({
                            duration: opts.duration || 1000,
                            loop: opts.loop || 1,
                            start: new Date(),
                            step: function (delta) {
                                self._dropPoint.y =
                                    start_y
                                        + (distance * delta)
                                        - (self._map.project(self._map.getCenter()).y - self._origMapCenter.y);
                                self._dropPoint.x =
                                    start_x
                                        - (self._map.project(self._map.getCenter()).x - self._origMapCenter.x);
                                self.setLatLng(self._toLatLng(self._dropPoint));
                            },
                            end: function () {
                                self.setLatLng(original);
                                if (typeof callback === 'function')
                                    callback();
                            },
                        });
                    });
                },
                // Many thanks to Robert Penner for this function
                _easeOutBounce: function (pos) {
                    if ((pos) < (1 / 2.75)) {
                        return (7.5625 * pos * pos);
                    }
                    else if (pos < (2 / 2.75)) {
                        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
                    }
                    else if (pos < (2.5 / 2.75)) {
                        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
                    }
                    else {
                        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
                    }
                },
                // Bounce : if options.height in pixels is not specified, drop from top.
                // If options.duration is not specified animation is 1s long.
                bounce: function (options, endCallback) {
                    if (typeof options === 'function') {
                        endCallback = options;
                        options = null;
                    }
                    options = options || { duration: 1000, height: -1, loop: 1 };
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
                stopBounce: function () {
                    // We may have modified the marker; so we need to place it where it
                    // belongs so next time its coordinates are not changed.
                    this.setLatLng(this._origLatlng);
                    L.Util.cancelAnimFrame(this._animationId);
                },
                // This will get you a drop point given a height.
                // If no height is given, the top y will be used.
                _getDropPoint: function (height) {
                    // Get current coordidates in pixel
                    this._point = this._toPoint(this._origLatlng);
                    var top_y;
                    if (height === undefined || height < 0) {
                        top_y = this._toPoint(this._map.getBounds()._northEast).y;
                    }
                    else {
                        top_y = this._point.y - height;
                    }
                    return new L.Point(this._point.x, top_y);
                },
                onAdd: function (map) {
                    this._map = map;
                    // Call leaflet original method to add the Marker to the map.
                    originalOnAdd.call(this, map);
                    // Keep original latitude and longitude
                    this._origLatlng = this.getLatLng();
                    if (this.options.bounceOnAdd === true) {
                        this.bounce(this.options.bounceOnAddOptions, this.options.bounceOnAddCallback);
                    }
                },
                onRemove: function (map) {
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
        if (!myLocFlag)
            this.presentLoading("Fetching current location...");
        map.locate({
            setView: true,
            maxZoom: 18
        }).on('locationfound', function (e) {
            _this.markerGroupGPS = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.featureGroup();
            _this.marker = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.marker([e.latitude, e.longitude]).on('click', function () {
                // alert('You are here');
            });
            _this.mapMarker.push(_this.marker);
            myLoc = _this.marker;
            myLat = _this.marker.getLatLng().lat;
            myLng = _this.marker.getLatLng().lng;
            //    console.log(myLat);
            //    console.log(myLng);
            var marker2 = L.userMarker([e.latitude, e.longitude], { pulsing: true, accuracy: 100, Icon: true }).on('click', function () {
                // alert('Marker clicked');
                _this.nearestBusStop(e.latlng.lat, e.latlng.lng, 1);
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
            for (var i = 0; i < _this.mapMarker.length; i++) {
                map.removeLayer(_this.mapMarker[i]);
                _this.markerGroupGPS.removeLayer(_this.mapMarker[i]);
            }
            L.marker(_this.marker.getLatLng(), {
                bounceOnAdd: true,
                bounceOnAddOptions: { duration: 500, height: 100, loop: 1 },
                bounceOnAddCallback: function () { console.log("done"); }
            }).addTo(map);
            _this.marker.on('click', function () {
                _this.marker.bounce({ duration: 500, height: 100 });
            });
            map.on('click', function () {
                _this.marker.bounce({ duration: 1000, height: 200 });
            });
            // this.markerGroupGPS.addLayer(this.marker);
            _this.markerGroupGPS.addLayer(marker2);
            map.addLayer(_this.markerGroupGPS);
        }).on('locationerror', function (err) {
            alert(err.message);
        }).on('singleclick', function (e) {
            console.log('singleclick', e);
            __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.popup().setLatLng(e.latlng)
                .setContent('<p><code>singleclick</code> at ' + e.latlng)
                .openOn(map);
        });
        //    let fe = this.mapMarker.shift();
        //    this.map.removeLayer(fe);
        //    this.markerGroupGPS.removeLayer(fe);
        //  this.map.addControl(new L.Control.Gps();
    };
    MapPage.prototype.toggle = function () {
        var bus = document.getElementById("bus");
        //    var tb = document.getElementById("toggle");
        if (bus.style.color != 'blue') {
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
    };
    MapPage.prototype.nearestBusStop = function (givenLat, givenLng, val) {
        var distance, min_distance, min_index;
        distance = 0;
        min_index = 0;
        min_distance = Infinity;
        for (var i = 0; i < stops3.length; i++) {
            distance = getDistance([givenLat, givenLng], [parseFloat(stops3[i][1]), parseFloat(stops3[i][2])]);
            console.log(distance);
            if (distance < min_distance) {
                min_distance = distance;
                min_index = i;
            }
        }
        if (val == 1)
            this.fromId = min_index + 1;
        else if (val == 2)
            this.toId = min_index + 1;
        console.log('Shortest index : ' + min_index + ' => ' + stops3[min_index][0] + ' => ' + min_distance);
        //  }
        var a, b, c, d;
        if (val == 1) {
            a = givenLat;
            b = givenLng;
            c = parseFloat(stops3[min_index][1]);
            d = parseFloat(stops3[min_index][2]);
        }
        else if (val == 2) {
            a = parseFloat(stops3[min_index][1]);
            b = parseFloat(stops3[min_index][2]);
            c = givenLat;
            d = givenLng;
        }
        // if(count < 1) {
        var RL = L.Routing.control({
            //    serviceUrl: 'https://router.project-osrm.org/viaroute',
            serviceUrl: 'https://router.project-osrm.org/route/v1',
            timeout: 30 * 1000,
            waypoints: [
                //      leaflet.latLng(9.9006292, 78.0936527),
                //      leaflet.latLng(9.886632, 78.074554)
                __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.latLng(a, b),
                __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.latLng(c, d)
            ]
        });
        console.log('RL => ' + RL.status);
        count += 1;
        RLA.push(RL);
        map.addControl(RL);
        //    this.routeLayer.addLayer(RL);
        //    map.addLayer(this.routeLayer);
        //    RL.addTo(map);
        //    RL.addTo(map);    
    };
    MapPage.prototype.showroutes = function () {
        var _this = this;
        console.log('aoo' + this.aoo);
        var allplace = [];
        this.d = [];
        var num1 = this.fromId.toString();
        var num2 = this.toId.toString();
        console.log('num1');
        console.log(num1);
        console.log(num2);
        this.http.get("/assets/routes.csv").subscribe(function (data) {
            console.log(data);
            var m = data;
            var k = m["_body"].split('\n');
            for (var _i = 0, k_2 = k; _i < k_2.length; _i++) {
                var i = k_2[_i];
                var row = [];
                row = (i.split(','));
                _this.d.push(row);
            }
            for (var l = 0; l < _this.d.length - 1; l++) {
                var routearray = _this.d[l][4].split('/');
                _this.d[l][4] = routearray;
            }
            for (var o = 0; o < _this.d.length - 1; o++) {
                var route = [];
                route = _this.d[o][4];
                var routing = [];
                if ((route.find(function (x) { return x == num1; })) && (route.find(function (y) { return y == num2; }))) {
                    allplace = _this.d[o][4].slice(_this.d[o][4].indexOf(num1), _this.d[o][4].indexOf(num2) + 1);
                    for (var y = 0; y < _this.aoo.length; y++) {
                        if (allplace.find(function (x) { return x == _this.aoo[y]["id"]; })) {
                            routing.push(_this.aoo[y]);
                        }
                    }
                    console.log(routing);
                }
                if (routing.length != 0)
                    _this.routingall.push(routing);
            }
        });
        console.log('s:');
        console.log(this.routingall);
        // console.log('aoo'+this.aoo);
    };
    MapPage.prototype.readCsvData = function () {
        var _this = this;
        var count = 0;
        this.http.get('assets/allBusStops48(1).csv')
            .subscribe(
        // data => this.extractData(data),
        function (data) {
            _this.stopIds = data;
            console.log('d: ' + data);
            _this.k = _this.stopIds["_body"].split('\n');
            console.log(_this.k);
            for (var i = 0; i < _this.k.length; i++) {
                var row = _this.k[i];
                row = row.split(',');
                console.log(row[1]);
                aoa.push(row);
            }
            console.log(aoa);
            for (var a = 0; a < aoa.length; a++) {
                var obj = {};
                obj["id"] = aoa[a][0];
                // console.log('S:'+aoa[a][1]);
                obj["name"] = aoa[a][1];
                obj["lat"] = aoa[a][2];
                obj['lon'] = aoa[a][3];
                _this.aoo.push(obj);
            }
            var aoa2 = [];
            console.log(_this.aoo);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MapPage.prototype, "mapContainer", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-map',template:/*ion-inline-start:"/media/sda2/Ubuntu/Home/myApp/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar class="nav">\n      			<!-- <ion-title class="title" float-left>Find Bus Stops -->\n    			<!-- </ion-title> -->\n    		<ion-icon class="b" id="refresh" name="refresh" (click)="removeLoad();"></ion-icon>\n    		<ion-icon class="b" id="redo" name="redo" (click)="retry();" ></ion-icon>\n    		<ion-icon class="b" id="path" name="search" (click)="toggleSearch()"></ion-icon>\n        <ion-icon class="b" id="route" name="trending-up" (click)="drawBusRoute()"></ion-icon>\n    		<ion-icon class="b" id="bus" name="bus" style="font-size: 1em;" float-right></ion-icon>\n    		<ion-toggle (ionChange)="toggle()" checked="false" name="legolas" id="toggle" float-right>Hello</ion-toggle>\n    		<ion-icon class="b" id="loc" (click)="pointGPS();" name="locate" float-right></ion-icon>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="map" style="width:100%; height:100%;"></div>\n <!--  <button class="btn" ion-button full (click)="add_to_home(event)" *ngIf="showBtn" >Install</button> -->\n</ion-content>\n'/*ion-inline-end:"/media/sda2/Ubuntu/Home/myApp/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MapPage);
    return MapPage;
}());

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
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/media/sda2/Ubuntu/Home/myApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Map" tabIcon="map"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/media/sda2/Ubuntu/Home/myApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ContactPage.prototype, "mapContainer", void 0);
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/media/sda2/Ubuntu/Home/myApp/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/media/sda2/Ubuntu/Home/myApp/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var aoa = [];
var stop = null;
var sb = null;
// var stop1=null;
// var aoo = [];
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.headerRow = [];
        this.csvData = [];
        this.d = [];
        this.stopIds = {};
        this.k = [];
        this.aoo = [];
        this.stop = null;
        this.stop1 = null;
        this.buses = {};
        this.choosedbus = [];
        this.stops = [];
        this.routes = [];
        this.routingall = [];
        this.buslist = [];
        this.readCsvData();
    }
    HomePage.prototype.change = function () {
    };
    HomePage.prototype.presentActionSheet = function () {
        console.log('1' + this.buslist[0]);
        console.log(this.buslist);
        var array = Array(6);
        for (var i = 0; i < 10; i++) {
            if (this.buslist[i] != null)
                array[i] = this.buslist[i];
        }
        console.log('a' + array);
        for (var i = 0; i < array.length; i++) {
            if (array[i] == null) {
                array = array.slice(0, i);
            }
        }
        // var array = this.buslist;
        console.log('A:' + array);
        var actionsSheet = this.actionSheetCtrl.create({
            title: 'Bus Numbers',
            buttons: this.buslist
        });
        actionsSheet.present();
    };
    HomePage.prototype.readCsvData = function () {
        var _this = this;
        var count = 0;
        this.http.get('assets/allBusStops48(1).csv')
            .subscribe(
        // data => this.extractData(data),
        function (data) {
            _this.stopIds = data;
            _this.k = _this.stopIds["_body"].split('\n');
            for (var _i = 0, _a = _this.k; _i < _a.length; _i++) {
                var i = _a[_i];
                var row = [];
                row = i.split(',');
                aoa.push(row);
            }
            for (var a = 0; a < aoa.length; a++) {
                var obj = {};
                obj["id"] = aoa[a][0];
                console.log('S:' + aoa[a][1]);
                obj["name"] = aoa[a][1];
                obj["lat"] = aoa[a][2];
                obj['lon'] = aoa[a][3];
                _this.aoo.push(obj);
            }
        });
    };
    HomePage.prototype.stopChanged = function (_event) {
    };
    HomePage.prototype.showroutes = function () {
        var _this = this;
        var allplace = [];
        this.d = [];
        var num1 = this.stop["id"];
        var num2 = this.stop1['id'];
        this.http.get("/assets/routes.csv").subscribe(function (data) {
            var m = data;
            var k = m["_body"].split('\n');
            for (var _i = 0, k_1 = k; _i < k_1.length; _i++) {
                var i = k_1[_i];
                var row = [];
                row = (i.split(','));
                _this.d.push(row);
            }
            for (var l = 0; l < _this.d.length - 1; l++) {
                var routearray = _this.d[l][4].split('/');
                _this.d[l][4] = routearray;
            }
            for (var o = 0; o < _this.d.length - 1; o++) {
                var route = [];
                route = _this.d[o][4];
                var routing = [];
                if ((route.find(function (x) { return x == num1; })) && (route.find(function (y) { return y == num2; }))) {
                    var a = _this.d[o][4].indexOf(num1);
                    var b = _this.d[o][4].indexOf(num2);
                    if (a > b) {
                        var t = a;
                        a = b;
                        b = t;
                    }
                    allplace = _this.d[o][4].slice(a, b + 1);
                    for (var y = 0; y < _this.aoo.length; y++) {
                        if (allplace.find(function (x) { return x == _this.aoo[y]["id"]; })) {
                            routing.push(_this.aoo[y]);
                        }
                    }
                    _this.routingall.push(routing);
                }
                // if(routing.length!=null)
            }
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], {
            route: this.routingall,
            flag: true
        });
    };
    HomePage.prototype.busname = function () {
        document.getElementById("bb").innerHTML = '48';
    };
    HomePage.prototype.showBuses = function () {
        var _this = this;
        this.d = [];
        var num1 = this.stop["id"];
        var num2 = this.stop1['id'];
        this.http.get("/assets/routes.csv").subscribe(function (data) {
            var m = data;
            var k = m["_body"].split('\n');
            for (var _i = 0, k_2 = k; _i < k_2.length; _i++) {
                var i = k_2[_i];
                var row = [];
                row = (i.split(','));
                _this.d.push(row);
            }
            for (var l = 0; l < _this.d.length - 1; l++) {
                var routearray = _this.d[l][4].split('/');
                _this.d[l][4] = routearray;
            }
            var o = 0;
            for (o = 0; o <= _this.d.length - 2; o++) {
                var route = [];
                route = _this.d[o][4];
                var obj = {};
                if ((route.find(function (x) { return x == num1; })) && (route.find(function (y) { return y == num2; }))) {
                    var routing = [];
                    var routingbus = [];
                    obj["text"] = _this.d[o][1];
                    obj["hander"] = function () {
                        var allplace = _this.d[o][4];
                        for (var y = 0; y < _this.aoo.length; y++) {
                            if (allplace.find(function (x) { return x == _this.aoo[y]["id"]; })) {
                                routing.push(_this.aoo[y]);
                            }
                        }
                        console.log(routing);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], {
                            busroutes: routing
                        });
                    };
                    _this.buslist.push(obj);
                    //this.d[o][4].slice(this.d[o][4].indexOf(num1),this.d[o][4].indexOf(num2));
                }
                // if(obj!=null)
            }
        });
        console.log(this.buslist);
        this.presentActionSheet();
        this.buslist = [];
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/media/sda2/Ubuntu/Home/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n   <!-- <ion-list>\n   <ion-item>\n     <ion-input type="text" placeholder="Starting place" [(ngModel)]="this.desire.start">Starting place</ion-input>\n     \n     </ion-item>\n     <ion-item>\n        <ion-input type="text" placeholder="Destination place" [(ngModel)]="this.desire.destination">Destination place</ion-input>\n     </ion-item>\n </ion-list>\n <button ion-button round color=\'danger\' (click)="showRoutes()">Show Routes</button>    !--> \n \n   <ion-label>From:</ion-label>\n<!--    <ion-icon (click)="showRoutes();" id="map" name="map" float-right></ion-icon>  !-->  \n    <ion-item>\n  <select-searchable\n    item-content\n    [(ngModel)]="stop"\n    [items]="aoo"\n    itemValueField="id"\n    itemTextField="name"\n    [canSearch]="true"\n\n    (onChange)="stopChanged($event)">\n  </select-searchable>\n</ion-item>\n<button ion-button color="posiive" round float-right outline><ion-icon name="map"></ion-icon></button>\n\n<br><br>\n<ion-label>To:</ion-label>\n<ion-item>\n  <select-searchable\n    item-content\n    [(ngModel)]="stop1"\n    [items]="aoo"\n    itemValueField="id"\n    itemTextField="name"\n    [canSearch]="true"\n    (onChange)="stopChanged($event)">\n  </select-searchable>\n <!--  <ion-icon (click)="showRoutes();" name="map"></ion-icon>  !-->\n</ion-item>\n<button ion-button color="positive" round float-right outline><ion-icon name="map"></ion-icon></button>\n<br>\n<br>\n<br>\n\n  <button ion-button round (click)="showroutes()" float-center>Show Routes</button>\n <!-- <button ion-button round (click)="busname()" id="bb">Bus</button>   !-->\n  <button ion-button round (click)="showBuses()" float-right>Show Buses</button>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/media/sda2/Ubuntu/Home/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

/*

private extractData(res) {
  console.log('R:'+res);
  let csvData = res['_body'] || '';
  console.log('C:'+csvData);
  let parsedData = papa.parse(csvData).data;

  this.headerRow = parsedData[0];

  parsedData.splice(0, 1);
  this.csvData = parsedData;
  console.log('P: '+parsedData);
}

downloadCSV() {
  let csv = papa.unparse({
    fields: this.headerRow,
    data: this.csvData
  });

  // Dummy implementation for Desktop download purpose
  var blob = new Blob([csv]);
  var a = window.document.createElement("a");
  a.href = window.URL.createObjectURL(blob);
  a.download = "newdata.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
private handleError(err) {

  console.log('something went wrong: ', err);
}  */
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_map_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_geocoder__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_select_searchable__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { constructor } from 'localforage';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, geolocation) {
        this.geolocation = geolocation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // }
        //  constructor(private geolocation: Geolocation) {}
        this.geolocation.getCurrentPosition().then(function (resp) {
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/media/sda2/Ubuntu/Home/myApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/media/sda2/Ubuntu/Home/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map