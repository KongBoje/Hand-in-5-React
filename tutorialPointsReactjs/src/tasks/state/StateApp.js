import React from "react"

class StateApp extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: "Header from state...",
         "content": "Content from state..."
      }
   }

   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_state.htm" target="_blank">State Tutorial</a>

           <h1>{this.state.header}</h1>
           <h2>{this.state.content}</h2>
         </div>
      )
   }
}

export default StateApp;