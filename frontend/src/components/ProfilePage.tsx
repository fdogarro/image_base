import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export const ProfilePage: React.FC = () => {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg text-gray-600 dark:text-gray-300">Please log in to view your profile.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-gray-800 dark:text-white">Profile</CardTitle>
                    <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                        Your profile information
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Username</h3>
                            <p className="text-gray-600 dark:text-gray-300">{user?.username}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Email</h3>
                            <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};