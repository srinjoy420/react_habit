import React from 'react'
import Button from './Button'
import {eachDayOfInterval, isFuture, isSameDay, startOfWeek} from "date-fns"
import { endOfWeek, format } from 'date-fns'

const HabitItem = ({habit,deleteHabit}) => {
  const visibleDates=eachDayOfInterval({
    start:startOfWeek(new Date(),{weekStartsOn:1}),
    end:endOfWeek(new Date(),{weekStartsOn:1})
  })
  return (
    <div className='rounded-xl bg-zinc-800 p-4 flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
           <div className='flex items-center gap-3'>
             <span className='font-medium'>{habit.name}</span>
            <span className='text-sm text-amber-400'>🔥 3</span>
           </div>
           <Button onClick={()=>deleteHabit(habit.id)}>delete</Button>
        </div>
        <div className='flex gap-1.5'>
          {visibleDates.map((date)=>(
            <Button 
            className="flex flex-col items-center gap-0.5 rounded-lg" key={date.toDateString() } disabled={isFuture(date)} variant={habit.completions.some(d=>isSameDay(date,d)) ?"filled":"outline"}>
              <span className='font-medium'>{format(date,"EEE")}</span>
              <span>{format(date,"d")}</span>

            </Button>
          ))}

        </div>
        

    </div>
  )
}

export default HabitItem