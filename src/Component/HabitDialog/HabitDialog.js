import React, { useState, useContext } from "react";
import { HabitContext } from "../../Context/HabitDialogContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./habitdialoge.css"
export const HabitDialog = () => {
  const {
    isDialogOpen,
    setDialogOpen,
    openDialog,
    closeDialog,
    habitDetail,
    setHabitDetail,
  } = useContext(HabitContext);
  const [habitName, setHabitName] = useState("");
  const [habitGoal, setHabitGoal] = useState("");
  const [habitFrequency, setHabitFrequency] = useState("");
  const [habitStartDate, setHabitStartDate] = useState("");
  const [habitRepeat, setHabitRepeat] = useState("");

  const handleSave = () => {
    const individualHabitDetail = {
      habitName,
      habitGoal,
      habitFrequency,
      habitStartDate,
      habitRepeat,
    };
    setHabitDetail([...habitDetail, individualHabitDetail]);
    console.log("Habit details:", individualHabitDetail, habitDetail);
    closeDialog();
  };

  return (
<div>
      <div className="habit-dialoge">
        <div>
        <h2>Add a new habit</h2>
        <label className="input-field">
          Name:
          <input
            type="text"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
          />
        </label>
        </div>

        <label className="input-field">
          Goal:
          <select
            value={habitGoal}
            onChange={(e) => setHabitGoal(e.target.value)}
          >
            <option value="">Select goal frequency</option>
            <option value="once">Once</option>
            <option value="twice">Twice</option>
            <option value="thrice">Thrice</option>
          </select>
        </label>

        <label className="input-field">
          Time Of Day:
          <select
            value={habitFrequency}
            onChange={(e) => setHabitFrequency(e.target.value)}
          >
            <option value="">Select time of day</option>
            <option value="anytime">Any time</option>
            <option value="8am">8 am</option>
            <option value="9am">9 am</option>
            <option value="10am">10 am</option>
            <option value="11am">11 am</option>
            <option value="12pm">12 pm</option>
            <option value="1pm">1 pm</option>
            <option value="2pm">2 pm</option>
            <option value="3pm">3 pm</option>
            <option value="4pm">4 pm</option>
            <option value="5pm">5 pm</option>
            <option value="6pm">6 pm</option>
          </select>
        </label>

        <label className="input-field">
          Start Date:
          <DatePicker
            selected={habitStartDate}
            onChange={(date) => setHabitStartDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select start date"
          />
        </label>

        <label className="input-field">
          Repeat:
          <select
            value={habitRepeat}
            onChange={(e) => setHabitRepeat(e.target.value)}
          >
            <option value="">Select repeat option</option>
            <option value="daily">Daily</option>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
          </select>
        </label>
      <div className="dialoge-btn">
      <button onClick={handleSave}>Save</button>
        <button onClick={closeDialog}>Cancel</button>
      </div>
        
      </div>
      </div>
  );
};
