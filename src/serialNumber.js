import React, {Component} from 'react';
import './css/ipList.css';

export default class SerialNumber extends Component {
	constructor(props)
	{
		super(props)
		this.state = {
			serial : props.serial !== undefined ? props.serial : ""
		}
	}
	render()
	{
		/* If the difit contain only one character then add a `0` befor */
		const ser_number = String(this.state.serial).length === 1 ?
		"0" + String(this.state.serial) : String(this.state.serial);

		return(
			<div className="serial_number_main_container">
			<span>{ser_number}</span>
			</div>
		)
	}
}
