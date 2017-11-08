// Common Imports
import React, { Component } from 'react';
import HeaderComponent from '../sharedComponent/headerSection/header.component';
import FooterComponent from '../sharedComponent/footerSection/footer.component';
import ContentComponent from '../contentSection/app.content.component';
// import SidenavComponent from '../sharedComponent/sideNavigation/sidenav.component';

// Style Imports
import './app.component.css';


export default class App extends Component {
	render() {
		return (
			<div className="app-container">
				<div className="header-section">
					<HeaderComponent name="Krishna Kant"></HeaderComponent>
				</div>

				<div className="body-section">
					<div className="sidenav-section">
						Side Bar Navigation
						{/* <SidenavComponent></SidenavComponent> */}
						{/* Further Learning is in Progress to implement this feature here in Side bar. */}
					</div>
					
					<div className="content-section">
						<ContentComponent></ContentComponent>
					</div>
				</div>

				<div className="footer-section">
					<FooterComponent></FooterComponent>
				</div>
			</div>
		);
	}
}

