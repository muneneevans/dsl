import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Counter from "../../Components/Counter"
import Home from "../Home"

export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/counter" component={Counter} />
					</Switch>
				</Router>				
			</div>
		)
	}
}
