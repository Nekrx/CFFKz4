import { useState } from 'react';
import axios from 'axios';

export const useAuth = () => {
  const [loading, setLoading] = useState(false); // Adicionado o estado que faltava

  const getStoredUser = () => {
    const storagedUser = localStorage.getItem('@App:user');
    if (storagedUser && storagedUser !== "undefined") {
      try {
        return JSON.parse(storagedUser);
      } catch (e) {
        return null;
      }
    }
    return null;
  };

  const [user, setUser] = useState(getStoredUser());

  const login = async (email: string, password: string) => {
    try {
      setLoading(true); // Começa o carregamento
      
      const response = await axios.post('http://localhost:3333/auth/login', {
        email,
        password,
      });

      const userData = response.data;

      setUser(userData);
      localStorage.setItem('@App:user', JSON.stringify(userData));
      
      return userData;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw new Error("Usuário ou senha inválidos");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('@App:user');
    setUser(null);
  };

  return {
    user,
    email: user?.email,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };
};