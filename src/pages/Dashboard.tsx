import React from 'react';
import { useHabits } from '../contexts/HabitContext';
import { CheckCircle, TrendingUp, Calendar } from 'lucide-react';

const Dashboard = () => {
  const { habits } = useHabits();

  const totalHabits = habits.length;
  const activeStreak = 5; // This should be calculated based on actual data
  const completedToday = habits.filter(habit => habit.completedToday).length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-3" size={24} />
            <h2 className="text-xl font-semibold">Total Habits</h2>
          </div>
          <p className="text-3xl font-bold mt-2">{totalHabits}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <TrendingUp className="text-blue-500 mr-3" size={24} />
            <h2 className="text-xl font-semibold">Active Streak</h2>
          </div>
          <p className="text-3xl font-bold mt-2">{activeStreak} days</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Calendar className="text-purple-500 mr-3" size={24} />
            <h2 className="text-xl font-semibold">Completed Today</h2>
          </div>
          <p className="text-3xl font-bold mt-2">{completedToday}</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        {/* Add recent activity list here */}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Reminders</h2>
        {/* Add upcoming reminders list here */}
      </div>
    </div>
  );
};

export default Dashboard;