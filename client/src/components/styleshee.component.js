import React from 'react';
import '../csses/StyleSheet.css'

function StyleSheets(props) {
    let className = props.primary ? 'primary' : 'secondary'
    return (
        <div>
            <h1 className= {`${className} fontxl`}> TestTextOrange </h1>
        </div>
    )
}

export default StyleSheets;
