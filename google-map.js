npm install @vis.gl/react-google-maps

function init() {
  var mapOptions = {
    center: new google.maps.LatLng(40.782710,-73.965310),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  var venueMap;
  vanueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http:maps.googleapis.com/maps/api/js?
    sensor=false&callback=init';
    document.body.appendChild(script);

window.onload = loadScript;

import React, {useEffect} from 'react';
import {APIProvider, useMap} from '@vis.gl/react-google-maps';

const MyComponent = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // UGH where is my api key located?
  }, [map]);

  return <></>;
};

const App = () => (
  <APIProvider apiKey={'my api key IF I KNEW WHERE IT WAS'}>
    <Map /* ... */></Map>

    <MyComponent />
  </APIProvider>
);

import {useMapsLibrary} from '@vis.gl/react-google-maps';

const MyComponent = () => {
  const map = useMap();

  // I should have just went with the class example but this shows initiative, trying to figure this out
  const placesLibrary = useMapsLibrary('places');

  const [placesService, setPlacesService] = useState(null);

  useEffect(() => {
    if (!placesLibrary || !map) return;

    // when placesLibrary is loaded, the library can be accessed via the
    // placesLibrary API object
    setPlacesService(new placesLibrary.PlacesService(map));
  }, [placesLibrary, map]);

  useEffect(() => {
    if (!placesService) return;

    // ...use placesService...
  }, [placesService]);

  return <></>;
};
