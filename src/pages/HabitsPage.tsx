import React, { useState } from 'react';
import { useHabits } from '../contexts/HabitContext';
import HabitCard from '../components/HabitCard';
import AddHabitModal from '../components/AddHabitModal';
import { Plus } from 'lucide-react';

const HabitsPage = () => {
  const { habits, addHabit } = useHabits();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Habits</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Habit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map(habit => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>

      <AddHabitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddHabit={addHabit}
      />
    </div>
  );
};

export default HabitsPage;