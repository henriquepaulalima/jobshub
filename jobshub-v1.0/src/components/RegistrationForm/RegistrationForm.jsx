import React, { Component } from "react";
import "./style.css";

class RegistrationForm extends Component {
	constructor(props) {
		super(props);
		this.title = "";
		this.text = "";
	}
	
	_handleTitleChange(event) {
		event.stopPropagation();
		this.title = event.target.value;
	}
	
	_handleTextChange(event) {
		event.stopPropagation();
		this.event = event.target.value;
	}
	
	_createJob(event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.createJob(this.title, this.text);
	}
	
	render() {
		return (
			<form 
				className="registration-form" 
				onSubmit={this._createJob.bind(this)}
			>
				<label className="registration-form_label">
					Job Title
				</label>
				<input
					type="text"
					placeholder="Name your job . . ."
					className="registration-form_input"
					onChange={this._handleTitleChange.bind(this)}
				/>
				<label className="registration-form_label">
					Job Details
				</label>
				<textarea
					rows={15}
					placeholder="Describe your job . . ."
					className="registration-form_textarea"
					onChange={this._handleTextChange.bind(this)}
				/>
				<button className="registration-form_submit">
					Create Job
				</button>
			</form>
		)
	}
}
	
export default RegistrationForm;