// shared/hooks: Общие хуки, например, useAuth, useFetch.

import { useState, useEffect } from 'react';

interface User {
  name: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null); // Указание типа для user

  useEffect(() => {
    // Проверка авторизации, например, получение токена из localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ name: 'User' }); // Пример пользователя
    }
  }, []);

  return { user };
};

