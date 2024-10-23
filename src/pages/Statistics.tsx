import React from 'react';
import { useHabits } from '../contexts/HabitContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const { habits } = useHabits();

  // Calculate completion rates for each habit
  const habitStats = habits.map(habit => {
    const totalDays = Math.ceil((new Date() - new Date(habit.createdAt)) / (1000 * 60 * 60 * 24));
    const completedDays = habit.completedDates ? habit.completedDates.length : 0;
    const completionRate = (completedDays / totalDays) * 100;
    
    return {
      name: habit.title,
      completionRate: Math.round(completionRate)
    };
  });

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Statistics</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Habit Completion Rates</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={habitStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completionRate" fill="#4CAF50" name="Completion Rate (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Overall Progress</h2>
        {/* Add more statistics or charts here */}
      </div>
    </div>
  );
};

export default Statistics;