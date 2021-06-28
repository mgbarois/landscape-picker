import React from "react";


// Create components that wrap other components
// "Render whatever is inside of you"
const Scroll = (props) => {
    return (
        <div style={{ overflow: "scroll", height: "100vh" }}>
            {/* In JSX you can add style with double curly brackets.
            It's a Javascript expression, within which we are returning an object that can have CSS styles */}
            {props.children}
        </div>
    )
}

export default Scroll;