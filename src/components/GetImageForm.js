import React, { Component } from 'react'
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'
import axios from 'axios';

export default class GetImageForm extends Component {
    constructor() {
        super();
        this.state = {
            camera: "",
            rover: "",
            sol: ""
            
        }
    }
    
    componentWillUpdate() {
        let cam = this.state.camera;
        let rove = this.state.rover;
        let num = this.state.sol;
        const API_KEY = "kEJ4QOWD4c8A3bbAPcDorbuQaH29a3dCjf83LfGt";
        let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&${urlQuery}${API_KEY}`;
        let urlQuery = "api_key=";
        axios.get(url).then((response) => {
            this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
        }).catch((err) => {
            console.log(err);
        })
    }

    handelRover = e => {
        this.setState({rover : e.target.value});

    }

    handleCamera = e => {
        this.setState({camera: e.target.value});

    }

    render() {

        return (
            <div>
                <label htmlFor="rover">Rover</label>
                <select onChange={this.handleRover} id="rover" value={this.state.value}>
                    <option value="Curiosity">Curiosity</option>
                    <option value="Opportunity">Opportunity</option>
                    <option value="Spirit">Spirt</option>
                </select>
                <label htmlFor="camera">Camera Type</label>
                <select onChange={this.handleCamera} id="rover" value={this.state.value}>
                    <option value="fhaz">FHAZ (Front Hazard)</option>
                    <option value="rhaz">RHAZ (Rear Hazard)</option>
                    <option value="navcam">NAVCAM (Navigation Cam)</option>
                </select>
                <label htmlFor="sol">Martian Sol: 1000-2000</label>
                <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value} />
                <GetImageButton />
                <ImageDisplay />
            </div>
        )
    }
}
