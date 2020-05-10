import React,{Component} from 'react'
import './Delete.css'
import User from "../user/User"
import axios from "axios"


export default class Delete extends Component{

    onClicked = (id) => {
        axios.delete('http://localhost:3000/users/', {
            _id: id
        }).then(response => {
            console.log("formSubmit response:::::::", response);
            const newUser = response.data;
            this.props.pushIntoUserlist(newUser);
            })
            .catch(error => {
                console.log("formSubmit error:::::::", error);
            })
    }

    render(){
        return(
            <User onClicked={this.onClicked}/>
        )
    }
}