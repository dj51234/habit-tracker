import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useHabits } from '../contexts/HabitContext';
import { Calendar, CheckCircle, XCircle } from 'lucide-react';

const HabitDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { habits, updateHabit, deleteHabit } = useHabits();
  const [habit, setHabit] = useState(null);

  useEffect(() => {
    const foundHabit = habits.find(h => h.id === parseInt(id));
    if (foundHabit) {
      setHabit(foundHabit);
    } else {
      navigate('/habits');
    }
  }, [id, habits, navigate]);

  if (!habit) return <div>Loading...</div>;

  const handleComplete = () => {
    const updatedHabit = {
      ...habit,
      completedDates: [...(habit.completedDates || []), new Date().toISOString().split('T')[0]]
    };
    updateHabit(habit.id, updatedHabit);
    setHabit(updatedHabit);
  };

  const handleDelete = () => {
    deleteHabit(habit.id);
    navigate('/habits');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{habit.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <p className="text-gray-600 mb-4">{habit.description}</p>
        <div className="flex items-center mb-4">
          <Calendar className="text-blue-500 mr-2" />
          <span className="text-gray-700">Started on: {new Date(habit.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {habit.category}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between mb-6">
        <button
          onClick={handleComplete}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <CheckCircle className="mr-2" />
          Mark as Completed
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <XCircle className="mr-2" />
          Delete Habit
        </button>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Completion History</h2>
        {/* Add a calendar or list view of completed dates here */}
      </div>
    </div>
  );
};

export default HabitDetails;