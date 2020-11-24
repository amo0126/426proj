import React from 'react'
import axios from 'axios'

export class ShowJournal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            journal: await getJournal(0)
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

export async function getJournal(id) {
    return response = await axios({
        method: "get",
        url: 'https://mental-health-app-backend.herokuapp.com' + `${id}`
    })
}