import React from 'react'

function Button(props) {
  return (
    <button onClick={props.deleteAll}>clear all</button>
  )
}

export default Button