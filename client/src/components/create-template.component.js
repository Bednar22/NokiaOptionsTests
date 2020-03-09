import React, { Component } from 'react'
import axios from 'axios'
import CreateUser from './create-user.component';
import "../csses/Template.css"

const port = process.env.PORT || 3001;



class CreateTemplate extends Component{

    constructor(props){
        super(props)

        this.onChangeTitle = this.onChangeTitle.bind(this)  
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            title: '',
            description: ''

        }
    }

    onChangeTitle(newTitle){
        this.setState({
            title: newTitle.target.value
        })
    }

    onChangeTitle(newDescript){
        this.setState({
            title: newDescript.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
    
        const template = {
          title: this.state.title,
          description: this.state.description
            
        }
    
        console.log(template);
    
        // axios.post('/users/add', )
        //   .then(res => console.log(res.data));
    
        this.setState({
          username: '',
          description: ''
        })
      }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <div className="templatelabels">
            <label>Title: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.title}
                onChange={this.onChangeTitle}
                />
                </div>
            <div className="templatelabels">
            <label> Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Create Template" className="btn btn-primary" />
          </div>
        </form>

            </div>
        )
    }



}

export default CreateTemplate