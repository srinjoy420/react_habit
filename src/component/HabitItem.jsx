import React from 'react'
import Button from './Button'
import { eachDayOfInterval, isFuture, isSameDay, startOfWeek, endOfWeek, format, subDays } from 'date-fns'

const HabitItem = ({ habit, deleteHabit, toggleHabit }) => {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 })
  })
  const getStreak = () => {
    let streak = 0
    let day = new Date()
    while (habit.completions.some(d => isSameDay(d, day))) {
      streak++
      day = subDays(day, 1)
    }
    return streak
  }

  return (
    <div className='rounded-xl bg-zinc-800 p-4 flex flex-col gap-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <span className='font-medium'>{habit.name}</span>
          <span className='text-sm text-amber-400'>🔥 {getStreak()}</span>
        </div>
        <Button onClick={() => deleteHabit(habit.id)}>delete</Button>
      </div>

      <div className='flex gap-1.5'>
        {visibleDates.map((date) => {
          const completed = habit.completions.some(d => isSameDay(date, d))
          return (
            <button
              key={date.toDateString()}
              disabled={isFuture(date)}
              onClick={() => toggleHabit(habit.id, date)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2 rounded-lg transition-colors
                disabled:opacity-30 disabled:cursor-not-allowed
                ${completed
                  ? 'bg-violet-600 text-white'
                  : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                }`}
            >
              <span className='text-xs font-medium'>{format(date, "EEE")}</span>
              <span className='text-sm font-semibold'>{format(date, "d")}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default HabitItem