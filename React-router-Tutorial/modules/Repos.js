import React from 'react'
import NavLink from './NavLink'
//import { browserHistory } from 'react-router'

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    handleSubmit(event) {
        event.preventDefault()
        const userName = event.target.elements[0].value
        const repo = event.target.elements[1].value
        const path = `/repos/${userName}/${repo}`
        //browserHistory.push(path) There's a potential problem with this though. If you pass a different history to Router than you use here, it won't work.
        this.context.router.push(path)
    },

    render() {
        return (
            <div>
                <h2>Repos Section!</h2>
                <ul>
                    <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
                    <li><NavLink to="/repos/facebook/react">React</NavLink></li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName" /> / {' '}
                            <input type="text" placeholder="repo" />{' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})