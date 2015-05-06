"use strict";

var map = L.map('map').setView([0,0], 3);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'examples.map-i875mjb7'
}).addTo(map);

var url = 'http://localhost:8080/geoserver/wms';



$.getJSON('data/leg_1_final_f.json', function(data) {
  var geojson = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup(feature.properties.name);
    }
  });

  geojson.addTo(map);

});
//L.tileLayer.betterWms(url, {
//layers: 'geoloader:leg_1_final_f',
//transparent: true,
//format: 'image/png'
//}).addTo(map);





