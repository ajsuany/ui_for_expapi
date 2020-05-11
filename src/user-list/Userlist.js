import React, {Component} from "react"
import "./Userlist.css"
import User from "../user/User"



export default class Userlist extends Component {
  onDelete = (id) =>{
       console.log(" userlist after clicked id value >>>",id)
      this.props.onClickedDelete(id)
     }

     onEdit = (passingDataToEdit) =>{
      console.log(" userlist after clicked  on edit id value >>>",passingDataToEdit)
       this.props.onClickedEdit(passingDataToEdit)
     }   
    render(){
      return(
        
        <li>

          {
              this.props.userlist.map((user) => <User key={user._id} {...user} onDelete={this.onDelete} onEdit={this.onEdit}/>)
          }
          </li>
        
       

          
      )
    }
}