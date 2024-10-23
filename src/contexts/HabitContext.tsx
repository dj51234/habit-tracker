import React, { createContext, useContext, useState, useEffect } from 'react';

const HabitContext = createContext();

export const useHabits = () => useContext(HabitContext);

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const storedHabits = localStorage.getItem('habits');
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => {
    setHabits([...habits, { ...habit, id: Date.now(), createdAt: new Date() }]);
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const updateHabit = (id, updatedHabit) => {
    setHabits(habits.map(habit => habit.id === id ? { ...habit, ...updatedHabit } : habit));
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, deleteHabit, updateHabit }}>
      {children}
    </HabitContext.Provider>
  );
};