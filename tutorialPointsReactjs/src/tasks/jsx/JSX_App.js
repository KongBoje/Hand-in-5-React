import React from "react"

export default class JSX_App extends React.Component {
   render() {
     var i = 1;

     var styler = {
       fontSize: 100,
       color: '#32CD32'
     }

      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_jsx.htm" target="_blank">JSX tutorial</a>
           <h1 style = {styler}>Header</h1>
           <h2>Content</h2>
           <p data-myattribute = "something">This is the content!</p>
           
           <h2>{1+1}</h2>

           <h2>{i == 1 ? 'True!' : 'False'}</h2>
           
           {/*End of the line Comment...*/}
           {/*Multi line comment...*/}
         </div>
      );
   }
}