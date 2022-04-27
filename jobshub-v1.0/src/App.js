import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm';
import JobsList from './components/JobsList/JobsList';
import JobsArray from './data/Jobs';
import './assets/App.css';
import './assets/reset.css';
import './assets/normalize.css';
import './assets/base.css';

class App extends Component {
  constructor() {
    super();
    this.jobs = new JobsArray();
  }

  render() {
    return (
      <section className="content">
        <RegistrationForm
          createJob={this.jobs.addJob.bind(this.jobs)}
        />
        <main className="main-content">
          <JobsList
            deleteJob={this.jobs.deleteJob.bind(this)}
            jobs={this.jobs}
          />
        </main>
      </section>
    )
  }
}

export default App;
