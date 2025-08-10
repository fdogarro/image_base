import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const { logout, user } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Welcome to the Home Page</h2>
                {user && (
                    <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
                        Welcome back, {user.username}!
                    </p>
                )}
                <div className="mt-6 flex justify-center">
                    <Button onClick={handleLogout} variant="outline">
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    );
};