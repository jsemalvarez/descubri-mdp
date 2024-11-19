import { Navigate, Route, Routes } from "react-router-dom"
import { ProfilePage } from "../page/ProfilePage"

export const UserRoutes = () => {
  return (
    <Routes>
        <Route path="/profile" element={ <ProfilePage />} />

        <Route path="/*" element={ <Navigate to='/users/profile' />} />
    </Routes>
  )
}
