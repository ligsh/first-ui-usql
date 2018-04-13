var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { NavView } from 'tonva-tools';
//import AppHome from './main';
import AppHome from './appHome';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import 'font-awesome/css/font-awesome.min.css';
//import './css/va.css';
//import './css/va-row.css';
//import './css/va-form.css';
//const logo = require('./imgs/logo.svg');
var tStyle = { margin: '2em auto', borderCollapse: 'collapse' };
var rowStyle = { borderBottom: '1px solid gray' };
var lStyle = { textAlign: 'right', padding: '1em 0.5em', color: 'gray' };
var rStyle = { textAlign: 'left', paddin: '1em 0.5em' };
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(NavView, { view: React.createElement(AppHome, null) }));
        /*
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <table style={tStyle}>
              {
                envs.map((v,index) => <tr key={index} style={{borderBottom: '1px solid gray'}}>
                  <td style={lStyle}>{v[0]}:</td>
                  <td style={rStyle}>{v[1]}</td>
                </tr>)}
            </table>
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
            <button onClick=
          </div>
        );*/
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map