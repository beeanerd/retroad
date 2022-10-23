// maps

var map;
var directionsRenderer;
var directionsService;
var stepDisplay;
var markerArray = [];
var current;
var directionsService;
var directionsRenderer;

function initMap() {
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
  
    var originLat = 33.777247
    var originLong = -84.396171
    var origin = new google.maps.LatLng(originLat, originLong);
    current = origin;
  
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: originLat, lng: originLong },
      zoom: 5,
    });
  
    directionsRenderer.setMap(map);

    getNextDestinationInstructions(getRandomDestination());
}

function getInstructions(response) {
  var steps = response.routes[0].legs[0].steps
  var distCounter = 0
  var instructions = []
  for (let i = 0; i < steps.length; i++) {
    var text = steps[i].instructions;
    distCounter += steps[i].distance.value;
    if (text.includes("right") || text.includes("left")) {
      var inst = "";
      if (text.includes("right")) {
        inst = "right"
      } else {
        inst = "left"
      }
      instructions.push({direction: inst, dist: distCounter})
      distCounter = 0;
    }
  }
  redistributeDistances(instructions);
  return instructions;
}

function redistributeDistances(instructions) {
  var avg = 0;
  for (let i = 0; i < instructions.length; i++) {
    avg += instructions[i].dist;
  }
  avg /= instructions.length;

  var min = 200
  var max = 400
  for (let i = 0; i < instructions.length; i++) {
    instructions[i].dist = Math.floor((Math.random() * (max - min)) + min)
  }
}

function getRandomDestination() {
  var originLat = 33.777247
  var originLong = -84.396171
  range = .17*2
  return new google.maps.LatLng(originLat + (Math.random() * range) - range/2, originLong + (Math.random() * range) - range/2);
}

function getNextDestinationInstructions(destination) {
  var request = {
    origin: current,
    destination: destination,
    travelMode: google.maps.TravelMode["DRIVING"]
  };
  var instructions;
  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(response);
      instructions = getInstructions(response);
      console.log(instructions);
    }
  });
  current = destination;
}

initMap();
