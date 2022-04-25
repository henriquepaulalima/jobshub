import React, { Component } from "react";
import './style.css';
import deleteSVG from '../../assets/img/delete.svg';

class JobCard extends Component {
  delete() {
    const index = this.props.index;
    this.props.deleteJob(index);
  }

  render() {
    return (
      <section className="job-card">
        <header className="job-card_header">
          <h3 className="job-card_title">{this.props.title}</h3>
          <img src={deleteSVG} alt="Delete button" className="job-card_img" onClick={this.delete.bind(this)}/>
        </header>
        <main className="job-card_main">
          <p className="job-card_text">{this.props.text}</p>    
        </main> 
      </section>
    );
  }
}

export default JobCard;