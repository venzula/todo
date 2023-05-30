import React from 'react'

const Singletodo = ({item,handleDelete}) => {
  return (
    <div className='single-todo'>
        <div>{item}</div>
        <button 
        onClick={()=>handleDelete(item)}
        type='submit'
        className='delete-button'>x</button>
    </div>
  )
}

export default Singletodo;