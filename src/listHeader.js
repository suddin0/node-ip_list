import React, {Component} from 'react';
import './css/listHeader.css';
import SerialNumber from "./serialNumber"

class HeaderElement extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			style		: props.style			!== undefined ? props.style			: {},
			image		: props.image			!== undefined ? props.image			: null,
			label		: props.label			!== undefined ? props.label			: "-",
			label_style	:  props.label_style	!== undefined ? props.label_style	: "",
		}

	}

	render()
	{
		const image_div = this.state.image == null ? <span/> : (
			<div className="header_element_image_container" >
			<img src={this.state.image} alt="user icon"/>
			</div>
		);
		console.log("Getting image :: ", require('./images/user.svg'));
		return(
			<div className="header_element_main_container" style={this.state.style}>
				{image_div}
				<div className="element_label_container">
					<span className={this.state.label_style}>
					{this.state.label}
					</span>
				</div>
			</div>
		)
	}
}


export default class IpListHeader extends Component
{
	render()
	{
		return(
			<div className="ip_list_header_main_container">
				<SerialNumber/>
				<div className="ip_list_header_container">
				<HeaderElement image={require('./images/user.svg')}			label="User name"	style={{minWidth: "185px", maxWidth: "185px"}}	/>
				<HeaderElement image={require('./images/ip_location.svg')}	label="Ip Address"	style={{minWidth: "165px", maxWidth: "165px"}}	/>
				<HeaderElement image={require('./images/location.svg')}		label="Location"	style={{minWidth: "155px", maxWidth: "155px"}}	/>
				<HeaderElement image={require('./images/flag.svg')}			label="Flag"		style={{minWidth: "135px", maxWidth: "135px"}}	/>
				<HeaderElement image={require('./images/alert.svg')}		label="Status"		style={{minWidth: "175px", maxWidth: "175px"}}	/>
				<HeaderElement image={require('./images/clock.svg')}		label="Time" style={{"margin-left": "auto", "margin-right" : "80px"}}/>
				</div>

			</div>
		)
	}
}
