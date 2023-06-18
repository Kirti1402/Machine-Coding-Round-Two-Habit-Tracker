import React ,{useContext,useState}from 'react'
import { HabitContext } from '../../Context/HabitDialogContext'
import {Link} from "react-router-dom"

export default function HabitArchive() {
    const {habitArchive } =
useContext(HabitContext);


console.log(habitArchive)
  return (
    <div>
        <Link className='link' to="/">Habit </Link>
        <h4 style={{textAlign:'center'}}>Archive</h4>
    <div className="card-name">
        {habitArchive.length > 0 &&
          habitArchive.map(
            (habit,index) => {
              const startDate = new Date(habit.habitStartDate);
              const formattedStartDate = startDate.toDateString();
                console.log(habit.habitName)
              return (
                <div
                  className="name"
                  key={habit.habitName}
                  
                >
                  {habit.habitName}
                </div>
              );
            }
          )}
    </div>

    </div>
  )
}
