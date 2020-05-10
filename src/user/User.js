import React from 'react'
import './User.css'

function User({ _id,name,address,gender,createdAt,updateAt }) {
        
           //console.log("propes sent by delete",this.props)
    
    return (
        
        
        <ul className='user'>
            <span className='user-atrb'>{name}</span>
            <span className='user-atrb'>{address}</span>
            <span className='user-atrb'>{gender}</span>
            <span className='user-atrb'>{createdAt}</span>
            <span className='user-atrb'>{updateAt}</span>
           <span >delete
            </span>
        </ul>
        
    )
}

export default User;


