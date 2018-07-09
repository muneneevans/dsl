import React, { Component } from "react"

import WelcomeBanner from "./WelcomeBanner"
import About from "./About"
export default class Home extends Component {
	render() {
		return (
			<div>
				<WelcomeBanner/>
				<About/>
			</div>
		)
	}
}
