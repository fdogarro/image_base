const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

interface LoginData {
    username: string;  // Backend expects username field for email
    password: string;
}

interface RegisterData {
    email: string;
    password: string;
    username: string;
}

export const login = async (data: LoginData) => {
    try {
        const formData = new FormData();
        formData.append('username', data.username); // Backend expects username field for email
        formData.append('password', data.password);

        const response = await fetch(`${API_URL}/api/v1/login/access-token`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Login failed');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const register = async (data: RegisterData) => {
    try {
        const response = await fetch(`${API_URL}/api/v1/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Registration failed');
        }

        // After successful registration, login the user
        return await login({
            username: data.email, // Use email as username for login
            password: data.password,
        });
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};

export const getUserProfile = async (token: string) => {
    try {
        const response = await fetch(`${API_URL}/api/v1/users/me`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Failed to fetch user profile');
        }

        return await response.json();
    } catch (error) {
        console.error('Get profile error:', error);
        throw error;
    }
};
