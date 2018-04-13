import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppUI } from 'tonva-react-usql';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
var appUI = new AppUI('', {});
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
registerServiceWorker();
//# sourceMappingURL=index.js.map