import { Navigate, Route, Routes } from "react-router-dom"
import { PlacesPage } from "../"
import { UpsertPlacePage } from "../page/UpsertPlacePage"

export const PlacesRoutes = () => {
  return (    
    <Routes>
        <Route path="/list" element={ <PlacesPage />}/>
        <Route path="/upsert" element={ <UpsertPlacePage />}/>

        <Route path="/*" element={ <Navigate to='/places/list' />} />
    </Routes>
  )
}
