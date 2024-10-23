import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Activity, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isLandingPage = location.pathname === '/';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className={`${isLandingPage ? 'bg-transparent absolute top-0 left-0 right-0' : 'bg-white shadow-md'}`}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-2xl font-bold text-blue-600">
            <Activity className="mr-2" />
            <span>HabitTracker</span>
          </Link>
          <div className="flex space-x-4">
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
                <Link to="/habits" className="text-gray-700 hover:text-blue-600">Habits</Link>
                <Link to="/statistics" className="text-gray-700 hover:text-blue-600">Statistics</Link>
                <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-blue-600 flex items-center"
                >
                  <LogOut size={20} className="mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className={`${isLandingPage ? 'text-white' : 'text-gray-700'} hover:text-blue-200`}>Login</Link>
                <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;