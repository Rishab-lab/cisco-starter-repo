import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Exhibit from './Components/Exhibit';
import AddressDisplay from './Components/AddressDisplay';
import PylonConnector from './Components/PylonConnector';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Public IPv4 Address">
                    <AddressDisplay url='https://api.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Public IPv6 Address">
                    <AddressDisplay url='https://api64.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Pylon Packet Latency">
                    <PylonConnector />
                </Exhibit>
            </div>
        );
    }
}

export default App;