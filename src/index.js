//Importing Packages
import React from 'react';
import ReactDom from 'react-dom';

//Importing a component.
import SearchBar from './components/search_bar';


//YouTube API key.
const API_KEY = 'AIzaSyDkMtxhfNKQJSGGc-Jrc1hUs-swq0qaCDQ'

// Create a new component. This component should produce some html.
const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

// Take this compenent's generated HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));