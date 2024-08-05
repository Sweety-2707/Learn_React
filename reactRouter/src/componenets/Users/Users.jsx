import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {user} =useParams();
  return (
    <div className="bg-orange-600 text-white py-7 text-3xl">User:{user}</div>
  )
}

export default Users