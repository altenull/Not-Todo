import React from 'react';
import ReactDOM from 'react-dom';
import reactTabEventPlugin from 'react-tap-event-plugin';
import Root from './Root';
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';

reactTabEventPlugin();

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();