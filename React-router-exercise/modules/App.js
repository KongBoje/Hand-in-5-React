import React from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>My React Router Tutorial!</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><Link to="/about" activeStyle={{ color: 'red'}}>About</Link></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><Link to="/ekstra" activeClassName="active">Ekstra</Link></li>
        </ul>
        {this.props.children || <Home/>}
      </div>
    )
  }
})
