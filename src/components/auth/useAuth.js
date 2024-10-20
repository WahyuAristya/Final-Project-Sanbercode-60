// useAuth.js
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useAuth = () => {
  const [user, setUser] = useState(() => {
    const savedUser = Cookies.get('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const token = Cookies.get('token');

  useEffect(() => {
    const handleStorageChange = () => {
      const savedUser = Cookies.get('user');
      setUser(savedUser ? JSON.parse(savedUser) : null);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return { user, token };
};

export default useAuth;
