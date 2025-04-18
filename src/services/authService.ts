
import { RegisterRequest, RegisterResponse } from "@/types/auth";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const authService = {
  async register(data: RegisterRequest): Promise<RegisterResponse> {
    const response = await fetch(`${API_URL}/api/v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registration failed');
    }

    return response.json();
  }
};
