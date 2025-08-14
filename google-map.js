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

    // here you can interact with the imperative maps API
  }, [map]);

  return <></>;
};

const App = () => (
  <APIProvider apiKey={'YOUR API KEY HERE'}>
    <Map /* ... */></Map>

    <MyComponent />
  </APIProvider>
);

import {useMapsLibrary} from '@vis.gl/react-google-maps';

const MyComponent = () => {
  const map = useMap();

  // triggers loading the places library and returns the API Object once complete (the
  // component calling the hook gets automatically re-rendered when this is
  // the case)
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
