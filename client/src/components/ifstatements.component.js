import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // 1st approach
        // if(this.state.isLoggedIn){
        //     return (
        //         <div> Welcome User!</div>
        //          )
        // } else {
        //     return (
        //          <div> Welcome Guest!</div> 
        //         )  
        // }        

        return this.state.isLoggedIn ? (
             <div>Welcome User!</div>
        ) : (
            <div>Welcome Guest!</div>
        )

        // 3rd approach returns this.state.isLoggedIn if true or nothing if false
        // return this.state.isLoggedIn && <div>Welome User! </div>


    }
}

export default UserGreeting
