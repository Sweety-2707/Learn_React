import React from 'react'
import Card from '../Card'

function Places() {
  const array = []
  for (let index = 0; index < 10; index++) {
    array.push(<Card/>)
    
  }
  return (
    <div class="flex flex-wrap mb-10">
     {array} 
    </div>
  )
}

export default Places