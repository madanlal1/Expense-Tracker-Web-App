import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Payment from "./pages/Payment";
import Card from "./pages/Card";

function App() {
  // Define a function to check if the user is authenticated
  const isAuthenticated = () => {
    // Check if the user is logged in by checking the presence of a token in localStorage
    return localStorage.getItem("token") !== null;
  };

  // Define a wrapper component for protected routes
  const ProtectedRoute = ({ element: Element, ...rest }) => {
    return isAuthenticated() ? <Element {...rest} /> : <Navigate to="/" />;
  };

  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signin" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/register" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={Dashboard} />}
      />
      <Route
        path="/transaction"
        element={<ProtectedRoute element={Transaction} />}
      />
      <Route path="/payment" element={<ProtectedRoute element={Payment} />} />
      <Route path="/card" element={<ProtectedRoute element={Card} />} />
    </Routes>
  );
}

export default App;
