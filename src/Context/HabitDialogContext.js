import { createContext, useState } from "react";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [habitDetail, setHabitDetail] = useState([]);
  const [habitArchive, setHabitArchive] = useState([]);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  console.log(habitDetail);
  return (
    <HabitContext.Provider
      value={{
        isDialogOpen,
        setDialogOpen,
        openDialog,
        closeDialog,
        habitDetail,
        setHabitDetail,
        habitArchive,
        setHabitArchive,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};
