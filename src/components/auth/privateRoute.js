// PrivateRoute.js
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

function PrivateRoute({ children }) {
  const isAuthenticated = Cookies.get('token');
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
