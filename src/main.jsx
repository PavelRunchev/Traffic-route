import React from 'react';
import { createRoot } from 'react-dom/client';
import ons from 'onsenui';
import './main.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './public/bootstrap-resource/bootstrap.css';

import './public/bootstrap-resource/mdb.min.css';

// Onsen UI Styling and Icons
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/onsenui.css';

import App from './App';

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
