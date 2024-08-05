import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] =useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/Sweety-2707")
        .then((response)=>response.json())
        .then((data)=>setData(data))
    },[])
  return (
    <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12 ">
                        <img className="object-cover h-80 w-80"
                            src={data.avatar_url}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            {data.name}
                        </h2>
                        <p className="mt-6 text-xl text-gray-600">
                            Followers : {data.followers}
                        </p>
                        <p className="mt-4 text-xl text-gray-600">
                            Following : {data.following}
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Github