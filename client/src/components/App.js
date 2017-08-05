import React, { Component } from 'react';
import Customer from './Customer.js'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			product: [],
		}

		this.handlePurchase = this.handlePurchase.bind(this);
	}

	componentDidMount() {
		fetch('/customer')
			.then(res => {
				return res.json()
			})
			.then(product => {
				this.setState({ product });
			})
	}

	handlePurchase(event, product, quantity) {
		event.preventDefault();
		console.log(product, quantity);
		console.log(JSON.stringify({ product, quantity }))
		fetch('/customer', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ product, quantity })
		})
			.then(res => res.json())
			.then(data => {
				console.log(data.message);
				this.setState({ message: data.message })
			})
	}

	render() {
		return (
			<div className="App" >
				{this.state.message ? (<div><h1>{this.state.message}</h1></div>) : (<div></div>)}
				<Customer product={this.state.product} fnPurchase={this.handlePurchase} />
			</div>
		);
	}
}

export default App;