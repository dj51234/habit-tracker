import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, BarChart2, Smartphone } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const LandingPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          {user ? (
            <>
              <h1 className="text-5xl font-bold mb-4">Welcome back, {user.name}!</h1>
              <p className="text-xl mb-8">Ready to continue your journey to better habits?</p>
              <Link
                to="/dashboard"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Go to Dashboard
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-5xl font-bold mb-4">Transform Your Life with HabitTracker</h1>
              <p className="text-xl mb-8">Build lasting habits, achieve your goals, and become the best version of yourself.</p>
              <Link
                to="/signup"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Start Your Journey
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose HabitTracker?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<CheckCircle className="text-green-500" size={40} />}
              title="Easy Habit Tracking"
              description="Effortlessly track your daily habits and build consistency."
            />
            <FeatureCard
              icon={<TrendingUp className="text-blue-500" size={40} />}
              title="Progress Visualization"
              description="See your progress over time with beautiful, insightful charts."
            />
            <FeatureCard
              icon={<BarChart2 className="text-purple-500" size={40} />}
              title="Detailed Analytics"
              description="Gain deep insights into your habit-forming journey."
            />
            <FeatureCard
              icon={<Smartphone className="text-orange-500" size={40} />}
              title="Mobile Friendly"
              description="Access your habits anytime, anywhere on any device."
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="HabitTracker has completely transformed my daily routine. I've never been more productive!"
              author="Sarah J."
            />
            <TestimonialCard
              quote="The insights I've gained from using this app are invaluable. It's like having a personal coach."
              author="Michael R."
            />
            <TestimonialCard
              quote="I love how easy it is to track my habits. The UI is intuitive and the stats are motivating."
              author="Emily L."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!user && (
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Life?</h2>
            <p className="text-xl mb-8">Join thousands of users who have already improved their lives with HabitTracker.</p>
            <Link
              to="/signup"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started for Free
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-gray-100 rounded-lg p-6">
    <p className="text-gray-800 italic mb-4">"{quote}"</p>
    <p className="text-gray-600 font-semibold">- {author}</p>
  </div>
);

export default LandingPage;