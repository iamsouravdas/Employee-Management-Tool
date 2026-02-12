import { Outlet } from "react-router-dom"
import Navigation from "../components/navigation/Navigation.component"
import navigationData from "../data/navigation.data"

const AppLayout = () => {
  return (
    <>
      <Navigation 
      sidebarItems={navigationData.sidebarItems} 
      avatar={navigationData.avatar} 
      icons={navigationData.icons} />
      <div className="mt-3 ms-3">
        <Outlet />
      </div>
    </>
  )
}

export default AppLayout