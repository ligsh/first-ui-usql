import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {nav, Page, NavView} from 'tonva-tools';
import {UsqlHome, EntitiesMapper} from 'tonva-react-usql';
import {pageMapper} from './pages';
import {pageMapper as 货主Mapper} from './货主';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

/*
const tonvaApp = '$$$/ui-usql-first';
const uiMappers: {[api:string]: EntitiesMapper} = {
    "$$$/usql-first": pageMapper,
    //"$$$/货主": 货主Mapper,
    "$$$/货主": null,
};
*/

const tonvaApp = 'devapp/DevApp';
const uiMappers: {[api:string]: EntitiesMapper} = {
    "DevApp/devappApi": pageMapper,
    //"$$$/货主": 货主Mapper,
    //"$$$/货主": null,
};

class App extends React.Component {
    onTest() {
    }
    render() {
        return (<NavView view={<UsqlHome appName={tonvaApp} uiMappers={uiMappers} />} />);
    }
}

export default App;
