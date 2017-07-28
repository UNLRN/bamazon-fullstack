import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            <Link to="/customer" activeClassName='active'>Customer</Link>
            <Link to="/manager" activeClassName='active'>Manager</Link>
        </nav>
    );
};

export default Nav;