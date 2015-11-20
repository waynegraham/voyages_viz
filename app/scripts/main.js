
$(function() {

  L.Playback = L.Playback || {};

  var slab_text = "███████╗ ██████╗██╗  ██╗ ██████╗ ██╗      █████╗ ██████╗ ███████╗    ██╗      █████╗ ██████╗";
  slab_text += "\n██╔════╝██╔════╝██║  ██║██╔═══██╗██║     ██╔══██╗██╔══██╗██╔════╝    ██║     ██╔══██╗██╔══██╗";
  slab_text += "\n███████╗██║     ███████║██║   ██║██║     ███████║██████╔╝███████╗    ██║     ███████║██████╔╝";
  slab_text += "\n╚════██║██║     ██╔══██║██║   ██║██║     ██╔══██║██╔══██╗╚════██║    ██║     ██╔══██║██╔══██╗";
  slab_text += "\n███████║╚██████╗██║  ██║╚██████╔╝███████╗██║  ██║██║  ██║███████║    ███████╗██║  ██║██████╔╝";
  slab_text += "\n╚══════╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚══════╝╚═╝  ╚═╝╚═════╝";


  console.log(slab_text);


  var map = L.map('map').setView([0,0], 3);

  L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'examples.map-i875mjb7'
  }).addTo(map);


  // =====================================================
  // =============== Playback ============================
  // =====================================================


  // see control at http://leafletplayback.theoutpost.io/examples/example_2_control.js

  // Playback options
  var playbackOptions = {
    // layer and marker options
    layer: {
      pointToLayer : function(featureData, latlng){
        var result = {};

        if (featureData && featureData.properties && featureData.properties.path_options){
          result = featureData.properties.path_options;
        }

        if (!result.radius){
          result.radius = 5;
        }

        return new L.CircleMarker(latlng, result);
      }
    },

    marker: function() {
      return {
        icon: L.AwesomeMarkers.icon({
          prefix: 'fa',
          icon: 'bullseye',
          markerColor: _assignColor()
        })
      };
    }
  };

  var shipTracks = null;


  // Initialize playback
  var playback = new L.Playback(map, null, null, playbackOptions);

  // Initialize custom control
  var control = new L.Playback.Control(playback);
  control.addTo(map);

  // Add data
  //playback.addData(blueMountain);

});
