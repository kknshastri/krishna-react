// Common Import
import React, { Component } from 'react';

// Import Styles
import './footer.component.css';

export default class FooterComponent extends Component {
	render() {
		return (
			<div className="footer">
                <span>&copy; Copyright | November 8th, 2017 | Designed &amp; Developed By-
                    <em> Krishna Kant Narayan Shastri</em>
                </span>
			</div>
		);
	}
}