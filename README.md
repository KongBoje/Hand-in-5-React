# Hand-in 5, Single Page Applications with React

>## Describe the term Single Page Application (SPA) and why it’s relevant for modern web-applications.
#### SPA Term:
A single-page application (SPA) is a web application or web site that fits on a single web page with the goal of providing a user experience similar to that of a desktop application. In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does control transfer to another page, although the location hash or the HTML5 History API can be used to provide the perception and navigability of separate logical pages in the application. Interaction with the single page application often involves dynamic communication with the web server behind the scenes.

#### SPA Relevance:
- SPA is fast, as most resources (HTML+CSS+Scripts) are only loaded once throughout the lifespan of application. Only data is transmitted back and forth.

- The development is simplified and streamlined. There is no need to write code to render pages on the server. It is much easier to get started because you can usually kick off development from a file http://file://URI, without using any server at all.

- SPAs are easy to debug with Chrome, as you can monitor network operations, investigate page elements and data associated with it.

- It’s easier to make a mobile application because the developer can reuse the same backend code for web application and native mobile application.

- SPA can cache any local storage effectively. An application sends only one request, store all data, then it can use this data and works even offline.

A major architectural advantage of a SPA in many cases is the huge reduction in the "chattiness" of your app. If you design it properly to handle most processing on the client (the whole point, after all), then the number of requests to the server is dramatically reduced. In fact, a SPA makes it possible to do entirely offline processing, which is huge in some situations.

Performance is certainly better with client-side rendering if you do it right, but this is not the most compelling reason to build a SPA. (Network speeds are improving, after all.) Don't make the case for SPA on this basis alone.

Flexibility in your UI design is perhaps the other major advantage.

>## Describe fundamental differences between the SPA-framework/libraries AngularJS and React

>## Describe the overall principles used in React to create a SPA

>## Explain, using an example, the fundamental building blocks in React Applications like:
* JSX
* Rendering Elements
* Components and Props
* State and LifeCycle
* Handling Events
* List and Keys
* Working with Forms
* Lifting State Up

>## Describe tools like Babel, WebPack and create-react-app and how they fit in to the React-world

>## Explain, using examples, about Class Components, versus pure JavaScript functions in React, and when to use them.

>## Explain the purpose of Client Side Routing in a SPA

>## Explain, using an example of your own, the basic “building blocks” in react-router

>## Explain what is required to use react-router with a create-react-app project build from scratch

>## Explain, using examples, how JavaScript array methods, like filter, map and (reduce) are used to generate dynamic HTML structures (tables, ul's etc.), and explain about React Keys.
