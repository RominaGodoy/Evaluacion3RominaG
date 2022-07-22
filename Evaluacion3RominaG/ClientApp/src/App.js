import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Interfaz1 from './components/Interfaz1';
import Interfaz2 from './components/Interfaz2';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/interfaz1' component={Interfaz1} />
                <Route path='/interfaz2' component={Interfaz2} />
            </Layout>
        );
    }
}
