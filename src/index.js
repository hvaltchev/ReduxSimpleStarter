import React from 'react';
import ReactDom from 'react-dom';

// Create a new component. This component should produce some html.
const App = () => {
    return <div>Hi!</div>;
}

// Take this compenent's generated HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));