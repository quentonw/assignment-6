GOOGLE_MAPS_API_KEY=<your API key here>

import React from 'react';
import {createRoot} from 'react-dom/client';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const App = () => (
  <APIProvider apiKey={API_KEY}>
    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider>
);

const root = createRoot(document.querySelector('#app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
