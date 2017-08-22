import React, { Component } from 'react';
import {Store} from './Store';

class Reserve extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this._onSubmit = this.__onSubmit.bind(this);
        this._onChange = this.__onChange.bind(this);
    }
    getInitialState () {
        return {name: "", email: "", loading: false, errors: {}}
    }
    __onChange (e) {
        const state = {};
            state[e.target.name] = e.target.value.trim();
            this.setState(state);
    }
    __onSubmit(e) {
            e.preventDefault()

            // Get values via this.refs
            const data= {
                name: this.state.name,
                email: this.state.email
            };

            Store.reserve(data)
                .then((res)=>{
                    alert(res + 'Posted');
                })
                .catch((err)=>{
                    console.error(err);
                });
        
    }
    render() {
        return (
            <div>
                Reserve a place now
            <form className="reserve" onSubmit={this._onSubmit}>
                    <input name="user_type" ref="user_type" value="need"  type="radio" onChange={this._onChange} className="reserve-radio" ></input>I need a room<br/>
                    <input name="user_type" ref="user_type" value="have" type="radio" onChange={this._onChange} className="reserve-radio" ></input>I have a room
                    <input name="name" ref="name"  type="name" onChange={this._onChange} className="reserve-input" placeholder="Please enter your name"></input>
                    <input name="email" ref="email" type="email" onChange={this._onChange} className="reserve-input" placeholder="Email address"></input>
                    <input name="password" ref="password" type="password" onChange={this._onChange} className="reserve-input" placeholder="Password"></input>
                    <input  type="submit" className="button" value="Book" ></input>
                </form>
            </div>
        );
    }

}
export default Reserve;