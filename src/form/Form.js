import React,{Component} from 'react'
import "./Form.css"
import axios from 'axios'



export default class Form extends Component{
   formSubmit = (event) =>{
        event.preventDefault();
       console.log("form submmit")
       console.log("form this.name submmit",this.name)
       console.log("form this.address submmit",this.address)
       console.log("form this.gender submmit",this.gender)
       
       if (this.name && this.address && this.gender) {
         axios.post('http://localhost:3000/users/', {
             name: this.name,
             address: this.address,
             gender: this.gender
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
    

render(){
     console.log(" form data for editing ",this.props.dataEdit)
    return(
        
         
             <form className='form' onSubmit={this.formSubmit}>
            <div className="form-item">
            <label className='f-item input-label' >User Name</label>
             <input  className='f-item input' type="text" onChange={(e) =>{ this.name = e.target.value }} />
            </div>
             <div className="form-item">
             <label className='f-item input-label' >User Address </label>
             <input className='f-item input' type="text" onChange={(e) =>{ this.address = e.target.value }} />
             </div>
             <div className="form-item">
             <label className='f-item input-label' >User Gender </label>
             <select  className='f-item input-dd' onChange={(e) => {this.gender = e.target.value} } >
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