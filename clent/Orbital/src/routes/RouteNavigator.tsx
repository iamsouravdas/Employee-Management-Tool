import { Route, Routes } from "react-router-dom"
import AppLayout from "../layouts/AppLayout"
import paths from "../data/paths.data"


const RouteNavigator = () => {
  return (
   <>
      <Routes>
        <Route path={paths.login.path} element={paths.login.element}/>
        <Route element={<AppLayout/>} >
          <Route path={paths.dashboard.path} element={paths.dashboard.element} />
        </Route>
      </Routes>
   </>
  )
}

export default RouteNavigator