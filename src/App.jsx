import React, { useState } from 'react'
import Header from './component/Header'
import HabitForm from './component/HabitForm'
import HabitList from './component/HabitList'

const App = () => {
  const [habits, setHabits] = useState([])

  function addHabit(name) {
    setHabits(prev => [...prev, { id: crypto.randomUUID(), name ,completions:[new Date()]}])
  }
  function deleteHabit(id){
    setHabits(prev=>prev.filter(h=>h.id!==id))
  }

  return (
    <div className='max-w-2xl mx-auto p-4 flex flex-col gap-4'>
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList deleteHabit={deleteHabit} habits={habits} />
    </div>
  )
}

export default App