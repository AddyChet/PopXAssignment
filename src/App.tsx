import {Navigate, Route, Routes} from "react-router"
import Welcome from "./components/Pages/Welcome"
import Register from "./components/Pages/Register"
import Login from "./components/Pages/Login"
import Dashboard from "./components/Pages/Dashboard"
import { useState } from "react"

const App = () => {
  const [user, setUser] = useState(null)
  const storedUser = localStorage.getItem("user");
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register setUser={setUser}/>} />
        <Route path="/login" element={<Login setUser={setUser}/>} />

        <Route
          path="/dashboard"
          element={user || storedUser? <Dashboard user={user} /> : <Navigate to="/login" />}
        />

      </Routes>
    </>
  )
}

export default App