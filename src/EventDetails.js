import React, { Component } from 'react';
import {Store} from './Store';
import Reserve from './Reserve';
class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.data();
    }
    data(){
            Store.fetch
                .then((res)=>{
                    this.setState(res);
                })
                .catch((err)=>{
                    console.error(err);
                });
    }
    render() {
        if (!this.state.event) {
            return <div>Loading Event</div>;
        }
        const location = this.state.event.location;
        const areasCovered = this.state.event['areas-covered'];
        const dateTime = this.state.event['date-time'].datetime;
        const eventDate = new Date(dateTime).toLocaleDateString();
        const eventTime = new Date(dateTime).toLocaleTimeString();
        const name = location.name;
        let address = '';
        const model = ['street-number','street-name','street-name-2','city','state-short','zip-code'];
        model.map((i) => {
            return address = address + `${location.address[i]}, `;
        });
        address = address.slice(0, -2);
        return (
            <div>
                <h1>SpeedRoomMating {location.address['city']} @ {name}</h1>
                <div className="app-event-location-banner"> 
                        
                        <div className="app-event-location-banner-details"> 
                            <h2>{name}</h2>
                            {eventDate} {eventTime}
                            <a>Venue's Map & directions</a>
                        </div>
                </div>
                <div className="app-event-reserve">
                <Reserve></Reserve>
                </div>
                <div className="app-event-location">        
                    <h3>Where does this event cover?</h3>
                        <p>{areasCovered}</p>
                        <h3>Venue address</h3>
                        <p>{address}</p>
                        <h3>Venue directions</h3>
                        <p>{location['directions']}</p>
                        <h3>Nearest subway</h3>
                        <p>{location['transport-station']}</p>
                        <h3>Map</h3>
                </div>    
                
            </div>
            
        );
    }

}
export default EventDetails;