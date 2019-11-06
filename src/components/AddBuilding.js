import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const initial = {
    name: null,
    code: null,
    address: null,
    latitude: null,
    longitude: null
}

export default class AddBuilding extends Component {
    state = initial;
    
    change = e => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
    }

    save = () => {
        const add = {
            ...this.state,
            coordinates: {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            }
        }
        this.props.addBuilding(add)
        this.setState(initial)
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Name" id="name" value={this.state.name} onChange={this.change}></Form.Control>
                        <Form.Control type="text" placeholder="Code" id="code" value={this.state.code} onChange={this.change}></Form.Control>      
                        <Form.Control type="text" placeholder="Address" id="address" value={this.state.address} onChange={this.change}></Form.Control>
                        <Form.Control type="text" placeholder="Latitude" id="latitude" value={this.state.latitude} onChange={this.change}></Form.Control>
                        <Form.Control type="text" placeholder="Longitude" id="longitude" value={this.state.longitude} onChange={this.change}></Form.Control>
                    </Form.Group>
                    <Button onClick={this.save}> Add Building</Button>
                </Form>
            </div>
        )
    }
}