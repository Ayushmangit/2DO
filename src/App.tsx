import { BrowserRouter, Route, Routes } from "react-router"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import Login from "./app/pages/Login"
import Register from "./app/pages/Register"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import { useEffect } from "react"
import { useAppDispatch } from "./app/hooks"
import { getCurrentUser } from "./app/features/auth/authThunk"
import GuestRoute from "./components/Form/GuestRoute/GuestRoute"
import PublicPage from "./app/pages/PublicPage"

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <GuestRoute>
            <PublicPage />
          </GuestRoute>
        } />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
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
