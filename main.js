const BASE_URL = "https://zagster-service.herokuapp.com"

var theRealData

$(updateView)

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
  $.getJSON(BASE_URL + "/rides/count/per_hour" , updateRideHour)
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
}

function updateRideHour(data) {
  console.log(data)   
}

