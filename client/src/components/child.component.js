import React from 'react'

function ChildComponent(props){
    return(
        <div>
            <button onClick={() => props.parentHelloHandler('child')}> Hello my parent! </button>
        </div>
    )
}

export default ChildComponent