import React from "react"
import ReactDOM from 'react-dom';

class ComponentAPI_App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: []
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);

      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };

   setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data;
      myArray.push(item)
      this.setState({data: myArray})
   };

   forceUpdateHandler() {
      this.forceUpdate();
   };
   
   findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green';
   }

   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_component_api.htm" 
           target="_blank">ComponentAPI Tutorial</a><br /><br />

           <button onClick = {this.setStateHandler}>SET STATE</button>
           <h4>State Array: {this.state.data}</h4>

           <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
           <h4>Random number: {Math.random()}</h4>

           <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
           <div id = "myDiv">NODE</div>
         </div>
      )
   }
}



export default ComponentAPI_App;