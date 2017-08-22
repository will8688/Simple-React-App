#I chose to use:

ReactJS as the JavaScript Framework as I felt as I dont know it very well I should take myself out of my comfortzone.

	It takes advantage of 2 way binding.
	ES6 extending classes OOP
	

ES6 stable code so that the code does not need to be transpiled to run on Chrome 54.
SASS for compiling CSS as I feel it is the industry standard right now.
HTML5 and CSS3 standards have been followed.

#Notes:

The Structure of the App is to use a Root Single paged Application with a single source data Store.
To make the Store a single source I have made it a Singleton so only 1 instance of it is invoked, therefore the views can share the data to help not cause bugs occuring with later development.
The Store uses Promises to deal with async data flow.
I have used functional programming techniques at all times by using const instead of var to allow for single assignment.
I really struggled to get the Google map to render, as I am not completly aware of ReactJs and its ingeration with 3rd Party libraries I was unable to get them to render.

#App 

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000]

### `npm test`

Launches the test runner.

### `npm run build`

Builds the app for production to the `build` folder.


