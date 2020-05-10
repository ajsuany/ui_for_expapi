import React,{ PureComponent } from "react";
import Header from "./header/Header"
import Form from "./form/Form"
import Userlist from "./user-list/Userlist"
import axios from 'axios';
import Delete from "./delete-list/Delete"


export default class App extends PureComponent {
    constructor(){
        super()
        this.state = {
          userlist : []
        }
    }
    loadUserlist = () => {
        console.log("loadUserlist called....");
        axios
          .get('http://localhost:3000/users/')
          .then((response) => {
            console.log(" loadUserlist response>>>>>>>>>>>", response.data);
            this.setState({userlist: response.data})
          })
          .catch(error => {
            console.log("loadUserlist error>>>>>>>>>>>", error);
          })
      }
      pushIntoUserlist = (newUser) => {
        console.log("pushIntoUserlist called....");
        this.setState({
          userlist: [
            ...this.state.userlist,
            newUser
          ]
        })
      }
    
      componentDidMount() {
        console.log("componentDidMount called....");
        this.loadUserlist();
      }
    
render(){
    return(
        <div className='container'>
            
      <Header/>
      <Form loadUserlist={this.loadUserlist}
      pushIntoUserlist={this.pushIntoUserlist}/>
      <Userlist userlist={this.state.userlist}/>
      <Delete  pushIntoUserlist={this.pushIntoUserlist}/>
     
        </div>

    )
}

}
 