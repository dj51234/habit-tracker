import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import HabitsPage from './pages/HabitsPage';
import HabitDetails from './pages/HabitDetails';
import Statistics from './pages/Statistics';
import Profile from './pages/Profile';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { HabitProvider } from './contexts/HabitContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <HabitProvider>
          <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/habits" element={<HabitsPage />} />
                <Route path="/habits/:id" element={<HabitDetails />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HabitProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;