import React, { useContext, useState } from "react";
import { HabitDialog } from "../HabitDialog/HabitDialog";
import { HabitContext } from "../../Context/HabitDialogContext";
import "./habitlisting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faArchive } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export const HabitListingPage = () => {
  const { isDialogOpen, openDialog, habitDetail,setHabitDetail, closeDialog,habitArchive,setHabitArchive } =
    useContext(HabitContext);
  const [selectedHabit, setSelectedHabit] = useState(null);
  const handleClickHabit = (habit) => {
    setSelectedHabit(habit);
  };

  const handleCloseDialog = () => {
    setSelectedHabit(null);
  };

  const handleArchive =(index)=>{

    const updateHabit = habitDetail.slice(index,index+1);
    setHabitArchive([...habitArchive,updateHabit]);
    const updateDetailHabit = habitDetail;
    updateDetailHabit.splice(index,1);
    setHabitDetail([...updateDetailHabit])
    setSelectedHabit(null);

  }
  const handleDelete =(index)=>{
    const updateDetailHabit = habitDetail;
    updateDetailHabit.splice(index,1);
    setHabitDetail([...updateDetailHabit])
    setSelectedHabit(null);
    toast.warn('Habit Deleted',{
        autoClose: 1000
    });
  }
  return (
    <div>
      <h1>Habit Listing Page</h1>
      <button className="add-habit-button" onClick={openDialog}>
        Add a new habit
      </button>
      <div>
        <Link className="link" to="/archive">Archive</Link>
      </div>

      {isDialogOpen && <HabitDialog />}
      <div className="card-name">
        {habitDetail.length > 0 &&
          habitDetail.map(
            ({
              habitName,
              habitGoal,
              habitFrequency,
              habitStartDate,
              habitRepeat,
            },index) => {
              const startDate = new Date(habitStartDate);
              const formattedStartDate = startDate.toDateString();

              return (
                <div
                  className="name"
                  key={habitName}
                  onClick={() =>
                    handleClickHabit({
                        index,
                      habitName,
                      habitGoal,
                      habitFrequency,
                      formattedStartDate,
                      habitRepeat,
                    })
                  }
                >
                  {habitName}
                </div>
              );
            }
          )}
        {selectedHabit && (
          <div>
            <div className="habit-card-detail">
              <h2>Habit Details</h2>
              <p className="title-value">
                <strong>Name:</strong> {selectedHabit.habitName}
              </p>
              <p className="title-value">
                <strong>Goal:</strong> {selectedHabit.habitGoal}
              </p>
              <p className="title-value">
                <strong>Frequency:</strong> {selectedHabit.habitFrequency}
              </p>
              <p className="title-value">
                <strong>Repeat:</strong> {selectedHabit.habitRepeat}
              </p>
              <p className="title-value">
                <strong>Start Date:</strong> {selectedHabit.formattedStartDate}
              </p>

              <button className="card-detail-btn" onClick={handleCloseDialog}>
                Close
              </button>
              <div>
                <button onClick ={()=> handleDelete(selectedHabit.index)}>
                  {" "}
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={()=>handleArchive(selectedHabit.index)}>
                  {" "}
                  <FontAwesomeIcon icon={faArchive} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
