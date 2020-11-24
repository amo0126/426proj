import React, { Component } from 'react';
import JournalForm from '../components/journalForm'

export class Journal extends Component {
  render() {
    return (
    <div className="App">
        <JournalForm />
        <ShowJournal />
    </div>
  );
  }
}

export default Journal;