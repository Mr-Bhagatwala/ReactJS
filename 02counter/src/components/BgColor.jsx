import React, { useState } from 'react'

const BgColor = () => {
    const [color,setcolor] = useState("olive")
  return (
    <div className=" w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-3 rounded-3xl">

                <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}  onClick={()=>setcolor("red")}>RED</button>

                <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=>setcolor("blue")}>BLUE</button>

                <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=>setcolor("green")}>GREEN</button>

                <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}} onClick={()=>setcolor("pink")}>PINK</button>

            </div>
        </div>
    </div>
  )
}

export default BgColor
