var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ViewChild, ElementRef } from '@angular/core';
import leaflet from 'leaflet';
import 'leaflet-routing-machine';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.mapMarker = [];
    }
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
    HomePage.prototype.ionViewDidEnter = function () {
        this.loadmap();
    };
    HomePage.prototype.loadmap = function () {
        this.map = leaflet.map("map").fitWorld();
        leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(this.map);
        /*  LOADING THE MARKERS OF THE USER-DEFINED PLACES */
        var stops = [
            ["Alagappa Nagar", "9.9006292", "78.0936527"],
            ["TCE bus stop", "9.8865958", "78.0701458"],
            ["Moolakarai", "9.8933919", "78.0783454"],
            ["Munichalai", "9.917246", "78.1318152"]
        ];
        var mark = [];
        var busIcon = leaflet.icon({
            iconUrl: 'https://cdn4.iconfinder.com/data/icons/location-flat/64/Location-map-pin-marker-busstation-512.png',
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76]
        });
        for (var i = 0; i < stops.length; i++) {
            var stop_name = stops[i][0];
            var lon = parseFloat(stops[i][1]);
            var lat = parseFloat(stops[i][2]);
            mark.push(leaflet.marker([lon, lat], { icon: busIcon }).bindPopup(stop_name));
        }
        this.marks = leaflet.layerGroup(mark);
    };
    HomePage.prototype.pointGPS = function () {
        //var L = leaflet;
        var _this = this;
        (function (window) {
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
                initialize: function (latlng, options) {
                    options = leaflet.Util.setOptions(this, options);
                    this.setPulsing(this.options.pulsing);
                    this._accMarker = leaflet.circle(latlng, this.options.accuracy, this.options.circleOpts);
                    // call super
                    //            leaflet.Marker.prototype.initialize.call(this, latlng, this.options);
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
                        this._accMarker = leaflet.circle(this._latlng, accuracy, this.options.circleOpts).addTo(this._map);
                    }
                    else {
                        this._accMarker.setRadius(accuracy);
                    }
                },
                onAdd: function (map) {
                    // super
                    leaflet.Marker.prototype.onAdd.call(this, map);
                    this._accMarker.addTo(map);
                }
            });
            leaflet.userMarker = function (latlng, options) {
                return new leaflet.UserMarker(latlng, options);
            };
        })(window);
        var bd = leaflet.icon({
            iconUrl: 'bluedot.png',
            iconSize: [34, 34],
            iconAnchor: [17, 17],
            popupAnchor: [0, -20]
        });
        //     let mapMarkers: any[];
        //     let marker: any;
        this.map.locate({
            setView: true,
            maxZoom: 18
        }).on('locationfound', function (e) {
            _this.markerGroupGPS = leaflet.featureGroup();
            _this.marker = leaflet.marker([e.latitude, e.longitude]).on('click', function () {
                alert('Marker clicked!');
            });
            _this.mapMarker.push(_this.marker);
            //      let marker2: any = L.userMarker([e.latitude, e.longitude], { pulsing: true, accuracy:100, Icon: true}).on('click', () => {
            //        alert('Marker clicked');
            //    });
            //      e.latlng = this.map.getLatLng;
            //      this.map.removeLayer(this.markerGroupGPS);
            //      this.markerGroupGPS.clearLayers();
            //      if(!this.map.hasLayer(this.markerGroupGPS)) {
            //         alert('hello');
            //         this.map.removeLayer(this.markerGroupGPS);
            //         this.markerGroupGPS.clearLayers();
            //      }
            for (var i = 0; i < _this.mapMarker.length; i++) {
                _this.map.removeLayer(_this.mapMarker[i]);
                _this.markerGroupGPS.removeLayer(_this.mapMarker[i]);
            }
            _this.markerGroupGPS.addLayer(_this.marker);
            //      this.markerGroupGPS.addLayer(marker2);
            _this.map.addLayer(_this.markerGroupGPS);
        }).on('locationerror', function (err) {
            alert(err.message);
        }).on('singleclick', function (e) {
            console.log('singleclick', e);
            leaflet.popup().setLatLng(e.latlng)
                .setContent('<p><code>singleclick</code> at ' + e.latlng)
                .openOn(this.map);
        });
        //    let fe = this.mapMarker.shift();
        //    this.map.removeLayer(fe);
        //    this.markerGroupGPS.removeLayer(fe);
        //  this.map.addControl(new L.Control.Gps();
        waypoints: [
            leaflet.latLng(this.marker.latitude, this.marker.longitude),
            leaflet.latLng(57.6792, 11.949)
        ];
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], HomePage.prototype, "mapContainer", void 0);
    return HomePage;
}());
export { HomePage };
toggle();
{
    var bus = document.getElementById("bus");
    //    var tb = document.getElementById("toggle");
    if (bus.style.color != 'blue') {
        this.map.addLayer(this.marks);
        bus.style.color = 'blue';
    }
    else {
        this.map.removeLayer(this.marks);
        bus.style.color = 'grey';
    }
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
//# sourceMappingURL=home.js.map