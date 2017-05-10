import React from "react"

/*
class FormsApp extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState(e) {
      this.setState({data: e.target.value});
   }

   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_forms.htm" target="_blank">Forms Tutorial</a><br /><br />
           
           <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} />
           <h4>{this.state.data}</h4>
         </div>
      )
   }
}
*/

class FormsApp extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);
   };

   updateState(e) {
      this.setState({data: e.target.value});
   }

   render() {
      return (
         <div>
            <a href="https://www.tutorialspoint.com/reactjs/reactjs_forms.htm" target="_blank">Forms Tutorial</a><br /><br />

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
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}

export default FormsApp;