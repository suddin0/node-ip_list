import React from 'react';
import './App.css';
import IpList from "./ipList"
import {data} from "./data"

class App extends React.Component {
	render()
	{
		console.log("Inside APP: DATA:: ", data);

		return (
		  <div className="App" id="App">
	   <IpList data={data}/>
		  </div>
		);
	}
}
export default App;
