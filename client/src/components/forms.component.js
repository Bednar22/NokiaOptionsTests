import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name : '',
            comment: '',
            topic: 'opt1'
        }
    }

    onChangeName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    onChangeComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    onChangeTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    onSubmitFunc = (event) => {
        alert(`${this.state.name} , ${this.state.comment} , ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.onSubmitFunc}>
                <div>
                    <label>Name</label>
                    <input type='text' value={this.state.name} onChange = {this.onChangeName}></input>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value = {this.state.comment} onChange={this.onChangeComment}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value = {this.state.topic} onChange = {this.onChangeTopic}>
                        <option value = 'opt1' > Option nr 1</option>
                        <option value = 'opt2' > Option nr 2</option>
                        <option value = 'opt3' > Option nr 3</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default Forms
