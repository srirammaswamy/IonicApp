// var L;

// (function() {
//   // Retain the value of the original onAdd and onRemove functions
//   let originalOnAdd = L.Marker.prototype.onAdd;
//   let originalOnRemove = L.Marker.prototype.onRemove;

//   // Add bounceonAdd options
//   L.Marker.mergeOptions({
//     bounceOnAdd: false,
//     bounceOnAddOptions: {
//       duration: 1000,
//       height: -1,
//       loop: 1,
//     },
//     bounceOnAddCallback: function() {},
//   });

//   L.Marker.include({

//     _toPoint: function(latlng) {
//       return this._map.latLngToContainerPoint(latlng);
//     },

//     _toLatLng: function(point) {
//       return this._map.containerPointToLatLng(point);
//     },

//     _motionStep: function(opts) {
//       let self = this;
//       let timePassed = new Date() - opts.start;
//       let progress = timePassed / opts.duration;

//       if (progress > 1) {
//         progress = 1;
//       }

//       let delta = self._easeOutBounce(progress);
//       opts.step(delta);

//       if (progress === 1) {
//         opts.start = new Date();
//         progress = 0;
//         if (opts.loop > 0) opts.loop = opts.loop - 1;
//         if (opts.loop === 0) {
//           opts.end();
//           return;
//         }
//       }

//       self._animationId = L.Util.requestAnimFrame(function(timestamp) {
//         self._motionStep(opts);
//       });
//     },

//     _bounceMotion: function(opts, callback) {
//       let original = L.latLng(this._origLatlng);
//       let start_y = this._dropPoint.y;
//       let start_x = this._dropPoint.x;
//       let distance = this._point.y - start_y;
//       let self = this;

//       self._animationId = L.Util.requestAnimFrame(function() {
//         self._motionStep({
//           duration: opts.duration || 1000, // 1 sec by default
//           loop: opts.loop || 1,
//           start: new Date(),
//           step: function(delta) {
//             self._dropPoint.y =
//               start_y
//             + (distance * delta)
//             - (self._map.project(self._map.getCenter()).y - self._origMapCenter.y);
//             self._dropPoint.x =
//               start_x
//             - (self._map.project(self._map.getCenter()).x - self._origMapCenter.x);
//             self.setLatLng(self._toLatLng(self._dropPoint));
//           },
//           end: function() {
//             self.setLatLng(original);
//             if (typeof callback === 'function') callback();
//           },
//         });
//       });
//     },

//     // Many thanks to Robert Penner for this function
//     _easeOutBounce: function(pos) {
//       if ((pos) < (1 / 2.75)) {
//         return (7.5625 * pos * pos);
//       } else if (pos < (2 / 2.75)) {
//         return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
//       } else if (pos < (2.5 / 2.75)) {
//         return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
//       } else {
//         return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
//       }
//     },

//     // Bounce : if options.height in pixels is not specified, drop from top.
//     // If options.duration is not specified animation is 1s long.
//     bounce: function(options, endCallback) {
//       if (typeof options === 'function') {
//         endCallback = options;
//         options = null;
//       }
//       options = options || {duration: 1000, height: -1, loop: 1};

//       // backward compatibility
//       if (typeof options === 'number') {
//         options.duration = arguments[0];
//         options.height = arguments[1];
//       }

//       // Keep original map center
//       this._origMapCenter = this._map.project(this._map.getCenter());
//       this._dropPoint = this._getDropPoint(options.height);
//       this._bounceMotion(options, endCallback);
//     },

//     stopBounce: function(){
//       // We may have modified the marker; so we need to place it where it
//       // belongs so next time its coordinates are not changed.
//       this.setLatLng(this._origLatlng);
//       L.Util.cancelAnimFrame(this._animationId);
//     },

//     // This will get you a drop point given a height.
//     // If no height is given, the top y will be used.
//     _getDropPoint: function(height) {
//       // Get current coordidates in pixel
//       this._point = this._toPoint(this._origLatlng);
//       let top_y;
//       if (height === undefined || height < 0) {
//         top_y = this._toPoint(this._map.getBounds()._northEast).y;
//       } else {
//         top_y = this._point.y - height;
//       }
//       return new L.Point(this._point.x, top_y);
//     },

//     onAdd: function(map) {
//       this._map = map;

//       // Call leaflet original method to add the Marker to the map.
//       originalOnAdd.call(this, map);

//       // Keep original latitude and longitude
//       this._origLatlng = this.getLatLng();

//       if (this.options.bounceOnAdd === true) {
//         this.bounce(this.options.bounceOnAddOptions, this.options.bounceOnAddCallback);
//       }
//     },

//     onRemove: function(map) {
//       this.stopBounce();
//       originalOnRemove.call(this, map);
//     },
//   });
// })();
