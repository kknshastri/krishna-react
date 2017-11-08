// Common Import
import React, { Component } from 'react';
import Contact from './contact/contact.component';
import SidenavComponent from '../sharedComponent/sideNavigation/sidenav.component';

// Importing Mock Data
import mockData from '../data/data.json';

// Importing Styles
import './app.content.component.css';


export default class ContentComponent extends Component {
	constructor() {
		super();
		this.state = mockData;

		this.removeContact = this.removeContact.bind(this);
		this.updateContact = this.updateContact.bind(this);
		this.createNewContact = this.createNewContact.bind(this);
	}

	createNewContact(data) {
		this.setState({allContacts: [data, ...this.state.allContacts]});
	}

	removeContact(i) {
		var allContacts = this.state.allContacts;
		allContacts.splice(i, 1);
		this.setState({allContacts: allContacts});
	}
	
	updateContact(data, i) {
		var allContacts = this.state.allContacts;
		allContacts[i] = data;
		this.setState({allContacts: allContacts});
	}

	renderContact = (data, idx) => {
		return (
			<Contact key={idx} idx={idx} data={data}
				deleteContact={this.removeContact}
				modifyContact={this.updateContact}>
			</Contact>
		);
	};

	render() {
		return (
			<div className="content-container">
				<SidenavComponent createContact={this.createNewContact}></SidenavComponent>
				{this.state.allContacts.map(this.renderContact)}
			</div>
		);
	}
}