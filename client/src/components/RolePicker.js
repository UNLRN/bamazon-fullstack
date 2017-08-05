import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RolePicker extends Component {
	constructor(props) {
		super(props);

		this.goToStore = this.goToStore.bind(this);
	}
	
	goToStore(e) {
		e.preventDefault();
		const role = e.target.roles.value
		console.log(role);
		this.props.history.push(`/${role}`);
	}

	render() {
		return (
			<form action="" className="role-picker" onSubmit={this.goToStore}>
				<h2>Please choose a Role</h2>
				<select name="roles" id="" className="role">
					<option value="customer">Customer</option>
					<option value="manager">Manager</option>
					<option value="supervisor">Supervisor</option>
				</select>
				<button type="submit">Go to Store</button>
			</form>
		);
	}
}

RolePicker.contextTypes = {
	router: PropTypes.object
}

export default RolePicker;