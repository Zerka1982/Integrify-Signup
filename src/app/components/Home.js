import React from "react";

export class Home extends React.Component {
	render() {
			var text= "OOOOOOPS";
		return (
			<div> 
				<p>In a new Component!</p>
				<p>{text}</p>
				<p>Name: {this.props.user.name}</p>
			</div>

			);
	}
}