import React, { useContext, useState } from 'react'
import Button from './Button'
import HabitContext from '../context/HabitContext'

const HabitForm = () => {
  const { addHabit } = useContext(HabitContext)
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() === "") return
    addHabit(name)
    setName("")
  }

  return (
    <div className="p-4">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          value={name}
          className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500
          outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="New habit..."
        />
        <Button disabled={name.trim() === ""} type="submit">Add</Button>
      </form>
    </div>
  )
}

export default HabitForm