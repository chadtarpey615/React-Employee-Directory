import React from "react";


function Header() {
    return (
        <header style={styleHeader}>
            <h1>Employee-Tracker</h1>
        </header>
    )
}


const styleHeader = {
backgroundColor: "navy",
margin: 'auto',
padding: "2px",
textAlign: "center",
color: "#fff"
}

export default Header;