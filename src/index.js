import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';

// Creating Context objects
// They contain a Consumer property (Component)
// They contain a Provider property (Component)
const ThemeContext = React.createContext();
const NumberContext = React.createContext();

// Look, no properties are coming in!!
function Display() {
    // The useContext hook allows us to use contexts without defining a Consumer
    const contextValue = useContext(ThemeContext);
    const number = useContext(NumberContext);
    return (
        <div onClick={() => contextValue.setTheme("light")}>
            Theme value: {contextValue.theme}, Number: {number}
        </div>
    );

    // Optional way of getting the value out of the context
    // ThemeContext.Consumer "consumes" or gets the value from context
    // return <ThemeContext.Consumer>{theme => <div>Theme is {theme}</div>}</ThemeContext.Consumer>
}

// Main component here
function App() {
    const [theme, setTheme] = useState("dark"); // array destructuring
    const contextValue = { theme, setTheme }; // creating an object here
    // the Context Providers makes our contexts available to all descendents
    return (
        <NumberContext.Provider value={1337}>
            <ThemeContext.Provider value={contextValue}>
                <Display />
            </ThemeContext.Provider>
        </NumberContext.Provider>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));