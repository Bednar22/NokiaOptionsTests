import React, { Component } from 'react'
import ChildComponent from './child.component'

class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            parentName: 'Parent'
        }

    this.parentHello = this.parentHello.bind(this) 
    }
    
    parentHello(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render(){
        return(
            <div>
                <ChildComponent parentHelloHandler={this.parentHello }/>
            </div>
        )
    }
}

export default ParentComponent