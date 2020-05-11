import React from 'react'
import './User.css'

function User({ _id,name,address,gender,createdAt,updateAt,onDelete, onEdit}) {
        
           
           
    
    return (
        
        
        <ul className='user'>
            <span className='user-atrb'>{name}</span>
            <span className='user-atrb'>{address}</span>
            <span className='user-atrb'>{gender}</span>
            <span className='user-atrb'>{createdAt}</span>
            <span className='user-atrb'>{updateAt}</span>
            <span className='user-edit' onClick = {() => onEdit({ _id,name,address,gender})} > Edit </span>
           <span className='user-delete' onClick = {() => onDelete(_id)}> Delete
            </span>
            

        </ul>
        
    )
}

export default User;


