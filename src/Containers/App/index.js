import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Counter from "../../Components/Counter"
import Home from "../Home"

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="ui menu stackable">
					<a href="#" className="header item">
						<img
							className="logo"
							src="https://seeklogo.com/images/G/government-of-kenya-emblem-gok-logo-D071CE91D3-seeklogo.com.png"
						/>
						<h2 className="ui  horizontalCenterAlign">
							The Data Services Layer
						</h2>
					</a>
					<div className="right menu">
						<div className="header item">About</div>
						<a className="item">Services</a>
						<a className="item">Data Sets</a>
					</div>
				</div>

				<Router>
					<Switch>
						<Route path="/counter" component={Home} />
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</div>
		)
	}
}
