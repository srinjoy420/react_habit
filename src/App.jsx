import React from 'react'
import Header from './component/Header'
import HabitForm from './component/HabitForm'
import HabitList from './component/HabitList'
import { HabitProvider } from './context/HabitContext'

const App = () => {
  return (
    <HabitProvider>
      <div className='max-w-2xl mx-auto p-4 flex flex-col gap-4'>
        <Header />
        <HabitForm />
        <HabitList />
      </div>
    </HabitProvider>
  )
}

export default App