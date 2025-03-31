import pool from '../config/db.config';
import { hash, compare } from 'bcrypt';

// Remove unused imports
export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  dob: string;
}

const BASE_URL = 'http://localhost:5000/api';

export const registerUser = async (userData: User) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error);
    }
    return data.data;
  } catch (error) {
    throw new Error(`Registration failed: ${(error as Error).message}`);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error);
    }
    return data.data;
  } catch (error) {
    throw new Error(`Login failed: ${(error as Error).message}`);
  }
};