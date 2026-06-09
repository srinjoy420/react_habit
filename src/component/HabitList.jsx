import React from 'react'
import HabitItem from './HabitItem'

const HabitList = ({ habits,deleteHabit,toggleHabit  }) => {
  if (habits.length === 0) {
    return (
      <span className='text-zinc-50'>nothing yet please add new habit</span>
    )
  }

  return (
    <div>
      {habits.map((habit) => (
        <HabitItem deleteHabit={deleteHabit} key={habit.id} habit={habit} toggleHabit={toggleHabit } />
      ))}
    </div>
  )
}

export default HabitList