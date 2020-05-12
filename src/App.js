import React,{ PureComponent } from "react";
import Header from "./header/Header"
import Form from "./form/Form"
import Userlist from "./user-list/Userlist"
import axios from 'axios';



export default class App extends PureComponent {
    constructor(){
        super()
        this.state = {
          userlist : [],
          dataEdit : {}
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
       onClickedEdit = (dataToEdit) =>{
         let {dataEdit} = this.state
        console.log(" App after clicked  on edit id value >>>",dataToEdit)
        dataEdit = dataToEdit;
        console.log(" App after swapping edit value >>>",dataEdit)
        this.setState({dataEdit})
       }
      onClickedDelete = (id) =>{
        let {userlist} = this.state
        console.log("App onCliecked deleted >>>>>>>> ",id);
        axios
          .delete(`http://localhost:3000/users/${id}`)
          .then((response) => {
            console.log(response.body)
            let deletedList = userlist.filter((user) =>user._id!==id)
            console.log("deleted list",deletedList)
            this.setState({userlist :deletedList  })
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
      pushIntoUserlist={this.pushIntoUserlist}
      dataEdit  = {this.state.dataEdit }/>
      <Userlist userlist={this.state.userlist}
      onClickedDelete={this.onClickedDelete}
      onClickedEdit = {this.onClickedEdit}/>
      
     
        </div>

    )
}

}
 