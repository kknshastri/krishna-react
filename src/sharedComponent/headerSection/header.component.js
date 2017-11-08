// Common Import
import React, { Component } from 'react';

// Import Styles
import './header.component.css';

// Import Images
import appLogo from '../../assets/images/app-logo.png';

export default class HeaderComponent extends Component {
	render() {
		return (
			<div className="header">
				<div className="logo-section">
					<img className="app-logo" alt="App Logo" src={appLogo} />
				</div>
				<div className="title-section">
					<h1>Welcome!! By {this.props.name}!</h1>
				</div>
			</div>
		);
	}
}