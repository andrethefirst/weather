import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css';
import { getElements } from 'domutils';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${Portland}&appid=[f49ad82193d9081935d8f554b80ef956]`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`)
    }
  });
});