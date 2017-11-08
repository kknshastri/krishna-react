// Common Import
import React, { Component } from 'react';

// Import Styles
import './sidenav.component.css';

// Importing Images
import userFemale from '../../assets/images/user-female.png';
import userMale from '../../assets/images/user-male.png';

export default class SidenavComponent extends Component {
	constructor() {
		super();
		this.state = {};
		this.state.showForm = false;
		this.state.selectedGender = 'M';

		this.selectGender = this.selectGender.bind(this);
		this.addNew = this.addNew.bind(this);
		this.createContact = this.createContact.bind(this);
		this.cancelCreate = this.cancelCreate.bind(this);
	}

	componentDidMount() {
        console.log('Component Mounted...');
		this.setState({showForm: false});
		this.setState({selectedGender: 'M'});
	}
	
	selectGender(e) {
        console.log('New Gender = ' + e.target.value);
        this.setState({selectedGender: e.target.value});
    }

	addNew() {
		console.log('Adding...');
		this.setState({showForm: true});	
	}

	createContact(e) {
		console.log('Creating Contact...');
		var newContactData = {
            "name": !!this.refs.newName.value ? this.refs.newName.value : 'New Contact',
            "gender": this.state.selectedGender,
            "address": !!this.refs.newAddress.value ? this.refs.newAddress.value : 'NA',
            "city": !!this.refs.newCity.value ? this.refs.newCity.value : 'NA',
            "pinCode": !!this.refs.newPinCode.value ? this.refs.newPinCode.value : '999999',
            "contact": !!this.refs.newContact.value ? this.refs.newContact.value : 'NA',
            "email": !!this.refs.newEmail.value ? this.refs.newEmail.value : 'NA'
		};
		console.log('New Contact Data = ');
		console.log(newContactData);
		this.props.createContact(newContactData);
		this.setState({showForm: false});
	}

	cancelCreate(e) {
		console.log('Cancel...');
		this.setState({showForm: false});
	}

	render() {
		return (
			<div className="side-navigation">
                <button className="add-new-button" onClick={this.addNew}>Add New Contact</button>
				{
					(!this.state.showForm) ?
					(<span></span>) :
					(<div className="contactStyle">
						<div className="profile-pic">
							{   
								(this.state.selectedGender === 'M') ?
								(<img className="avatar" alt="User Female" src={userMale} />) :
								(<img className="avatar" alt="User Male" src={userFemale} />)
							}
						</div>
						<div className="contact-details">
							<div><span>Enter Name: </span><input type="text" ref="newName" defaultValue="Name" /></div>
							<div><span>Address: </span><input type="text" ref="newAddress" defaultValue="Address" /></div>
							<div><span>City: </span><input type="text" ref="newCity" defaultValue="City" /></div>
							<div><span>Pin Code: </span><input type="number" ref="newPinCode" defaultValue="123456" /></div>
							<div><span>Contact No: </span><input type="text" ref="newContact" defaultValue="+91 9898767698" /></div>
							<div><span>Email Id: </span><input type="email" ref="newEmail" defaultValue="example@mymail.com" /></div>
							<div>
								<span>Select Gender: </span>
								<input type="radio" value="M"
									checked={this.state.selectedGender === 'M'}
									onChange={this.selectGender} /><span>Male </span>
								<input type="radio" value="F"
									checked={this.state.selectedGender === 'F'}
									onChange={this.selectGender} /><span>Female </span>
							</div>
							
						</div>
						<div className="contact-action">
							<button onClick={this.createContact}>Create Contact</button>
							<button onClick={this.cancelCreate}>Cancel</button>
						</div>	
					</div>)
				}
			</div>
		);
	}
}