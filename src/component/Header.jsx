import React from 'react'
import Button from "./Button"

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
        {/* left section */}
        <div className='flex flex-col gap-1'>
            <h1 className='text-3xl font-bold'>Habit Tracker</h1>
            <span className='text-zinc-400 font-sm'>1/1 task</span>

        </div>
        {/* right section */}
        <div className='flex flex-col gap-1'>
            <span>apr-6 to apr-12</span>
            <div className='flex items-end justify-between gap-3'>
                <Button>prev</Button>
                <Button>Next</Button>

            </div>

        </div>

    </header>
  )
}

export default Header