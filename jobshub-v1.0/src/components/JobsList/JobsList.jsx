import React, { Component } from "react";
import JobCard from "../JobCard/JobCard";
import './style.css';

class JobsList extends Component {
	constructor(props) {
		super();
		this.state = {jobs:[]};
		this._newJobs = this._newJobs.bind(this);
	}

	componentDidMount() {
		this.props.jobs.subscribe(this._newJobs);
	}

	componentWillUnmount() {
		this.props.jobs.unsubscribe(this._newJobs);
	}

	_newJobs(jobs) {
		this.setState({...this.state, jobs});
	}

	render() {
		return (
			<ul className="jobs-list">
				{this.state.jobs.map((job, index) => {
					return (
						<li className="jobs-list_item" key={index}>
							<JobCard
								index={index}
								deleteJob={this.props.deleteJob}
								title={job.title}
								text={job.text}
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}
		
export default JobsList;