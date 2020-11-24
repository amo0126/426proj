import React, { Component } from 'react';
import axios from 'axios'

export class ShowJournal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            journal: getJournal()
        }
    }


    render () {
        return (
            <div>
                <h1>{this.state.journal.date}</h1>
                <p>{this.state.journal.body}</p>
            </div>
        );
    }
}
export default ShowJournal;

export async function getJournal() {
    let response = await axios({
        method: "get",
        url: 'https://mental-health-app-backend.herokuapp.com'
    })
    return response;
}