import React from "react"

/*class PropsOverview extends React.Component {
   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm" target="_blank">Props Tutorial</a>

           <h1>{this.props.headerProp}</h1>
           <h2>{this.props.contentProp}</h2>
         </div>
      )
   }
}

PropsOverview.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}

//ReactDom.render() for denne i index.js

*/

class PropsOverview extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: "Header from props...",
         "content": "Content from props..."
      }
   }
	
   render() {
      return (
         <div>
            <a href="https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm" target="_blank">PropsOverview Tutorial</a>

            <Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

export default PropsOverview;