import React from "react"

class KeysApp extends React.Component {
  constructor() {
    super();

    this.state = {
      data:
      [
        {
          component: 'First...',
          id: 1
        },

        {
          component: 'Second...',
          id: 2
        },

        {
          component: 'Third...',
          id: 3
        },

        {
          component: 'Fourth...',
          id: 4
        }
      ]
    }

  }

  render() {
    return (
      <div>
        <a href="https://www.tutorialspoint.com/reactjs/reactjs_keys.htm" target="_blank">Keys Tutorial</a><br /><br />

        <div>
          {this.state.data.map((dynamicComponent, i) => <Content
            key={i} componentData={dynamicComponent} />)}
        </div>
      </div>
    )
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.componentData.component}</div>
        <div>{this.props.componentData.id}</div>
      </div>
    );
  }
}

export default KeysApp;