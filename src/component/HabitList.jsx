import React, { useContext } from 'react'
import HabitItem from './HabitItem'
import HabitContext from '../context/HabitContext'

const HabitList = () => {
  const { habits } = useContext(HabitContext)

  if (habits.length === 0) {
    return <span className='text-zinc-50'>nothing yet please add new habit</span>
  }

  return (
    <div>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  )
}

export default HabitList