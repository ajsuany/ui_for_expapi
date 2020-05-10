import React,{Component} from 'react'
import "./Header.css"

export default class Form extends Component{

render(){

    return(
        <header className="header">
         <h1 className="logo"> User List </h1>
         <nav className="nav">
             <span> About </span>
             <span> Contact </span>

         </nav>
        </header>
    )
  }
}