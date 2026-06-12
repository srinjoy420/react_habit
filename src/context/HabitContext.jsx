import { createContext, useState } from 'react'
import { isSameDay } from 'date-fns'

const HabitContext = createContext(null)

export function HabitProvider({ children }) {
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
    <HabitContext.Provider value={{ habits, addHabit, deleteHabit, toggleHabit }}>
      {children}
    </HabitContext.Provider>
  )
}

export default HabitContext