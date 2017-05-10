import React from "react"
/*
class EventApp extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState() {
      this.setState({data: 'Data updated...'})
   }
   
   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_events.htm" target="_blank">Events Tutorial</a><br /><br />
           
           <button onClick = {this.updateState}>CLICK</button>
           <h4>{this.state.data}</h4>
         </div>
      )
   }
}
*/

class EventApp extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);
   };

   updateState() {
      this.setState({data: 'Data updated from the child component...'})
   }

   render() {
      return (
         <div>
            <a href="https://www.tutorialspoint.com/reactjs/reactjs_events.htm" target="_blank">Events Tutorial</a><br /><br />

            <Content myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></Content>
         </div>
      );
   }
}

class Content extends React.Component {

   render() {
      return (
         <div>
            <button onClick = {this.props.updateStateProp}>CLICK</button>
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}

export default EventApp;