import { BrowserRouter, Route, Routes } from "react-router"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import Login from "./app/pages/Login"
import Register from "./app/pages/Register"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Header />
              <Form />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
