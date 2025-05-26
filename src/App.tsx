import { Navigate, Route, Routes } from "react-router";

import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
import { useState } from "react";
import type { RegisterFormData } from "./utils/Interfaces";

const App = () => {
  const [user, setUser] = useState<RegisterFormData | null>(null);
  const storedUser = localStorage.getItem("user");
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard user={user} />
            ) : storedUser ? (
              <Dashboard user={JSON.parse(storedUser) as RegisterFormData} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
