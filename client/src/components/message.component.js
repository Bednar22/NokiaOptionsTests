import React, { Component } from 'react'


class Message extends Component {
    

    constructor(){
        
        super()
        this.state = {
            message: "State test"
        }
    }

    changeMessage(){
        this.setState({
            
            message: `Clicked button ${this.props.name}` 
        })
    }

    render(){
        const {name} = this.props
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>TestButton {name} </button>
            </div>

        )
    }
}

export default Message