import { BrowserRouter, Route, Routes } from "react-router"
import Form from "./components/Form/Form"
import Login from "./app/pages/Login"
import Register from "./app/pages/Register"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import { useEffect } from "react"
import { useAppDispatch } from "./app/hooks"
import { getCurrentUser } from "./app/features/auth/authThunk"
import GuestRoute from "./components/Form/GuestRoute/GuestRoute"
import PublicPage from "./app/pages/PublicPage"
import Notes from "./components/Notes/Notes"
import Home from "./components/Home/Home"

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <GuestRoute>
              <PublicPage />
            </GuestRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<Form />} />
          <Route path="todos" element={<Form />} />
          <Route path="notes" element={<Notes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
