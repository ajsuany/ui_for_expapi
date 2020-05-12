import React,{Component} from 'react'
import "./Form.css"
import axios from 'axios'



export default class Form extends Component{
  constructor(){
      super()
      this.state = {
        name:"",
        address : "",
        gender : ""
      }
  }

  onChangedName = (e) => {
    let {name} = this.state;
     name = e.target.value
     this.setState({name}) 
  }
  onChangedAddress = (e) => {
    let {address} = this.state;
    address = e.target.value
     this.setState({address}) 
  }
  onChangedGender = (e) => {
    let {gender} = this.state;
     gender = e.target.value
     this.setState({gender}) 
  }
   formSubmit = (event) =>{
     let {name,address,gender} = this.state
        event.preventDefault();
       console.log("form submmit")
       console.log("form this.name submmit",name)
       console.log("form this.address submmit",address)
       console.log("form this.gender submmit",gender)
       
       if (name && address && gender) {
         axios.post('http://localhost:3000/users/', {
             name: name,
             address: address,
             gender: gender
         }).then(response => {
             console.log("formSubmit response:::::::", response);
             const newUser = response.data;
             this.props.pushIntoUserlist(newUser);
             })
             .catch(error => {
                 console.log("formSubmit error:::::::", error);
             })
     }


       
   }
    
   editingIssue = () =>{
    let {name,gender,address} = this.state
    name = this.props.dataEdit.name
    address = this.props.dataEdit.address
    gender = this.props.dataEdit.gender
     
     this.setState({name,gender,address})
   }

render(){
  
   console.log(" anonymous funtion form data for editing ",this.state.name)
    // console.log(" form data for editing ",this.props.dataEdit.name)
    return(
        
         
             <form className='form' onSubmit={this.formSubmit}>
            <div className="form-item">
            <label className='f-item input-label' >User Name</label>
             <input  className='f-item input' type="text" onChange={this.onChangedName} value={ this.state.name }/>
            </div>
             <div className="form-item">
             <label className='f-item input-label' >User Address </label>
             <input className='f-item input' type="text" onChange={this.onChangedAddress} value={this.state.address}/>
             </div>
             <div className="form-item">
             <label className='f-item input-label' >User Gender </label>
             <select  className='f-item input-dd' onChange={this.onChangedGender } value={this.state.gender} >
                <option >-----</option>
                <option >Male</option>
                <option >Female</option>
                
             </select>


             </div>
             <button className='button' type='submit'> Submit </button>
             
             </form>
        
        
    )
  }
}