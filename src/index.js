import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Map from './Map';
import Ubuntu from './Ubuntu/Ubuntu';
import Debian from './Debian/Debian';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('header'));
ReactDOM.render(<Map/>, document.getElementById('footer'));
ReactDOM.render(<Ubuntu/>, document.getElementById('ubuntu'));
ReactDOM.render(<Debian/>, document.getElementById('debian'));

registerServiceWorker();
