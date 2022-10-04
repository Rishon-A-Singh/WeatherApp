function getdata() {
  window.scrollTo(0, 50);
  let city = document.querySelector("#city").value;
  //   let src =

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=92d7d7dca83b3e9efb604faeb5613f34`;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      //   console.log(res.main);
      append(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getDataLocation() {
  let city = document.querySelector("#city").value;
  //   let src =

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=92d7d7dca83b3e9efb604faeb5613f34`;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      //   console.log(res.main);
      append(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function append(data) {
  let container = document.getElementById("container");
  let map = document.getElementById("gmap_canvas");
  container.innerText = null;

  let city = document.getElementById("place");

  console.log(data);

  city.innerText = `city: ${data.name}`;
  // city.id = "city";

  let min = document.getElementById("min");

  min.innerText = `min temperature ${data.main.temp_min}`;
  min.id = "min";

  let max = document.getElementById("max");

  max.innerText = `max temperature ${data.main.temp_max}`;

  let current = document.getElementById("curr");
  current.innerText = ` current temperature ${data.main.temp}`;

  let humidity = document.getElementById("humid");
  humidity.innerText = `humidity ${data.main.humidity}`;
  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  // container.append(city, min, max, current, humidity);
}

function getweather() {
  navigator.geolocation.getCurrentPosition(success);

  function success(position) {
    var crd = position.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
}
