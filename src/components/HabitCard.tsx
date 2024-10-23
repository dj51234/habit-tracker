import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Trash2 } from 'lucide-react';
import { useHabits } from '../contexts/HabitContext';

const HabitCard = ({ habit }) => {
  const navigate = useNavigate();
  const { deleteHabit } = useHabits();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{habit.title}</h3>
      <p className="text-gray-600 mb-4">{habit.description}</p>
      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
          {habit.category}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => navigate(`/habits/${habit.id}`)}
            className="text-blue-600 hover:text-blue-800"
          >
            <Edit size={20} />
          </button>
          <button
            onClick={() => deleteHabit(habit.id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;