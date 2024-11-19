import { Navigate, Route, Routes } from "react-router-dom"
import { PleacesPage } from "../page/PleacesPage"
import { UpsertPlacePage } from "../page/UpsertPlacePage"

export const PleacesRoutes = () => {
  return (    
    <Routes>
        <Route path="/list" element={ <PleacesPage />}/>
        <Route path="/upsert" element={ <UpsertPlacePage />}/>

        <Route path="/*" element={ <Navigate to='/pleaces/list' />} />
    </Routes>
  )
}
