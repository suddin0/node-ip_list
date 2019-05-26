import React, {Component} from 'react';
import './css/ipList.css';
import './list_conf'
import IpListHeader from "./listHeader"
import SerialNumber from "./serialNumber"
import {status_color} from "./list_conf.js"


class Column extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			style : props.style !== undefined ? props.style : {},
			label : props.label !== undefined ? props.label : "-",
			image : props.image ? props.image : null,
			label_tyle	: props.label_style ? props.label_style : {},
			label_len	: props.label_len ? props.label_len : null
		}
	}

	render()
	{
		/* If a maximum lavel is given then it will cut out the rest of the string */
		const label = this.state.label_len
			? (this.state.label.length > this.state.label_len
				? this.state.label.substring(0, this.state.label_len) + "..."
				: this.state.label)
			: this.state.label;

		/* If image provided then shows an image in a div */
		const image_div = this.state.image == null ? <span /> : (
			<div className="column_image_container">
				<img src={this.state.image} alt="Label" />
			</div>
		);


		return (
			<div className="column_main_container" style={this.state.style}>
				{image_div}
				<div className="column_label_container" >
					<span style={this.state.label_tyle}>{label}</span>
				</div>
			</div>
		)
	}
}

class Row extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			serial : props.serial !== undefined ? props.serial : "-",
			data : props.data ? props.data : null
		}
	}

	render()
	{
		if(!this.state.data)
			return(<div />)
		return(
			<div className="row_main_container">
			<SerialNumber serial={this.state.serial}/>
				<div className="row_container">
				{/*user name*/}
				<Column
					label={this.state.data.name}
					label_len={14} style={{minWidth: "180px", maxWidth: "180px"}}
				/>
				{/*Ip Address*/}
				<Column
					label={this.state.data.ip}
					label_len={23} style={{minWidth: "160px", maxWidth: "160px"}}
				/>
				{/*Location*/}
				<Column
					label={this.state.data.location}
					label_len={23} style={{minWidth: "150px", maxWidth: "150px"}}
				/>
				{/*Flag*/}
				<Column
					image={this.state.data.flag}
					label=""
					label_len={14} style={{minWidth: "130px", maxWidth: "130px"}}
				/>
				{/*Status*/}
				<Column
					label={this.state.data.status}
					label_len={28} style={{minWidth: "170px", maxWidth: "170px"}}
					label_style={{"color": status_color[this.state.data.status]}}
				/>

				{/*Time*/}
				<Column
					label={this.state.data.time}
					label_len={12} style={{"margin-left": "auto", "margin-right" : "10px", minWidth: "70px", maxWidth: "70px"}}
				/>
				{/*Delete*/}
				<Column
					label=""
					image={require("./images/delete.svg")}
				/>

				</div>
			</div>
		)
	}

}

class List extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			data : props.data ? props.data : {}
		}
	}

	render()
	{

		console.log("DATA:: ", this.state.data);
		return(
			<div  className="list_main_container">
			{
				this.state.data.map((value, key) => {
					return(<Row data={value} serial={key + 1}/>)
				})
			}


			</div>
		)
	}
}


export default class IpList extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return(
			<div className="ip_list_main_container">
				<div className="ip_list_container">
				<IpListHeader />

				<List data={this.props.data} />

				</div>
			</div>
		)
	}
}
