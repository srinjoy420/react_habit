import React, { useState } from 'react'
import Header from './component/Header'
import HabitForm from './component/HabitForm'
import HabitList from './component/HabitList'

import { isSameDay } from 'date-fns'

const App = () => {
  const [habits, setHabits] = useState([])

  function addHabit(name) {
    setHabits(prev => [...prev, { id: crypto.randomUUID(), name, completions: [] }])
  }

  function deleteHabit(id) {
    setHabits(prev => prev.filter(h => h.id !== id))
  }

  function toggleHabit(id, date) {
    setHabits(prev => prev.map(h => {
      if (h.id !== id) return h
      const alreadyDone = h.completions.some(d => isSameDay(d, date))
      return {
        ...h,
        completions: alreadyDone
          ? h.completions.filter(d => !isSameDay(d, date))
          : [...h.completions, date]
      }
    }))
  }

  return (
    <div className='max-w-2xl mx-auto p-4 flex flex-col gap-4'>
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList deleteHabit={deleteHabit} toggleHabit={toggleHabit} habits={habits} />
    </div>
  )
}

export default App