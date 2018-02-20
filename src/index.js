import React from 'react';
import ReactDOM from 'react-dom';
import reactTabEventPlugin from 'react-tap-event-plugin';
import App from './App';
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';

reactTabEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();