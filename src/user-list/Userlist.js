import React, {Component} from "react"
import "./Userlist.css"
import User from "../user/User"



export default class Userlist extends Component {
    render(){
      return(
        
        <li>

          {
              this.props.userlist.map((user) => <User key={user._id} {...user}/>)
          }
          </li>
        
       

          
      )
    }
}