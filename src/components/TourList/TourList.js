import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

class TourList extends Component {
	state = {
		tours: tourData
	};

	render() {
		console.log(this.state.tours);

		return (
			<div>
				<h1>TourList</h1>
				<Tour />
			</div>
		);
	}
}

export default TourList;
