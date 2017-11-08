// Common Import
import React, { Component } from 'react';

// Importing Styles
import './contact.component.css';

// Importing Images
import userFemale from '../../assets/images/user-female.png';
import userMale from '../../assets/images/user-male.png';


export default class Contact extends Component {	
	constructor() {
		super();
		this.state = {};
        this.state.editMode = false;
        this.state.selectedGender = 'M';
		
		this.edit = this.edit.bind(this);
		this.save = this.save.bind(this);
		this.remove = this.remove.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
        this.selectGender = this.selectGender.bind(this);
    }

    componentDidMount() {
        console.log('Component Mounted...');
        // this.setState({selectedGender: this.props.data.gender});
    }
    
    componentWillUnmount() {
        console.log('Component Unmounted...');
    }

    selectGender(e) {
        console.log('New Gender = ' + e.target.value);
        this.setState({selectedGender: e.target.value});
    }

	edit(e) {
        console.log('Editing...');
        this.setState({selectedGender: this.props.data.gender});    // Update required
		this.setState({editMode: true});
	}
	
	save(data, e) {
		console.log('Saving...');
		// console.log('New name = ' + data.name);     // Not Working this way
		var updatedContact = {
            "name": !!this.refs.newName.value ? this.refs.newName.value : 'Edited Contact',
            "gender": this.state.selectedGender,
            "address": !!this.refs.newAddress.value ? this.refs.newAddress.value : 'NA',
            "city": !!this.refs.newCity.value ? this.refs.newCity.value : 'NA',
            "pinCode": !!this.refs.newPinCode.value ? this.refs.newPinCode.value : '999999',
            "contact": !!this.refs.newContact.value ? this.refs.newContact.value : 'NA',
            "email": !!this.refs.newEmail.value ? this.refs.newEmail.value : 'NA'
		};
		this.props.modifyContact(updatedContact,this.props.idx);
		this.setState({editMode: false});
	}
	
	cancelSave(e) {
		console.log('Cancel Save...');
		this.setState({editMode: false});
	}
	
	remove(e) {
		console.log('Removing...');
        this.props.deleteContact(this.props.idx);
        this.setState({editMode: false});
	}
	
	renderViewMode(data, idx) {
		return (
			<div className="contactStyle">
				<div className="profile-pic">
					{   
						(data.gender === 'M') ?
						(<img className="avatar" alt="User Female" src={userMale} />) :
						(<img className="avatar" alt="User Male" src={userFemale} />)
					}
				</div>
				<div className="contact-details">
					{/* <span>Key: {idx}</span> */}
					<h2>Name: {data.name}</h2>
					<h3>Address: {data.address}, {data.city}</h3>
					<h3>Pin Code: {data.pinCode}</h3>
					<h3>Contact No: {data.contact}</h3>
					<h3>Email Id: {data.email}</h3>
				</div>
				<div className="contact-action">
					<button onClick={(evt) => this.edit(evt)}>Edit Contact</button>
					<button onClick={(evt) => this.remove(evt)}>Delete Contact</button>
				</div>
			</div>
		);
	}
	
	renderEditMode(data, idx) {
        return (
			<div className="contactStyle">
				<div className="profile-pic">
					{   
						(this.state.selectedGender === 'M') ?
						(<img className="avatar" alt="User Female" src={userMale} />) :
						(<img className="avatar" alt="User Male" src={userFemale} />)
					}
				</div>
				<div className="contact-details">
					{/* <span>Key: {idx}</span> */}
					<div><label>Enter Name: </label><input type="text" ref="newName" defaultValue={data.name} /></div>
					<div><label>Address: </label><input type="text" ref="newAddress" defaultValue={data.address} /></div>
					<div><label>City: </label><input type="text" ref="newCity" defaultValue={data.city} /></div>
					<div><label>Pin Code: </label><input type="number" ref="newPinCode" defaultValue={data.pinCode} /></div>
					<div><label>Contact No: </label><input type="text" ref="newContact" defaultValue={data.contact} /></div>
					<div><label>Email Id: </label><input type="email" ref="newEmail" defaultValue={data.email} /></div>
					<div>
						<label>Select Gender: </label>
						<input type="radio" value="M"
							checked={this.state.selectedGender === 'M'}
							onChange={this.selectGender} /><span>Male </span>
						<input type="radio" value="F"
							checked={this.state.selectedGender === 'F'}
							onChange={this.selectGender} /><span>Female </span>
					</div>
					
				</div>
				<div className="contact-action">
					<button onClick={(evt) => this.save(data, evt)}>Save Changes</button>
					<button onClick={(evt) => this.cancelSave(evt)}>Cancel Update</button>
				</div>
			</div>
		);
	}
	
	render() {  
		if(this.state.editMode) {
			return (
				this.renderEditMode(this.props.data, this.props.idx)
			);
		} else {
			return (
				this.renderViewMode(this.props.data, this.props.idx)
			);
		}	
	}	
}