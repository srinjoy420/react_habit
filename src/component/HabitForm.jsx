import React, { useState } from 'react'
import Button from './Button'

const HabitForm = ({addHabit}) => {
  const[name,setName]=useState("")
  const handelSubmit=(e)=>{
    e.preventDefault()
    if(name.trim()==="") return 
    setName("")
    addHabit(name)




  }
  return (
    <div className="p-4">
      <form className="flex gap-2" onSubmit={handelSubmit}>
        
        <input
        value={name}
          className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500
          outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition"
          type="text"
          onChange={(e)=>setName(e.target.value)}
          placeholder="New habit..."
        />
        <Button disabled={name.trim()===""} type="submit">Add</Button>
      </form>
    </div>
  )
}

export default HabitForm