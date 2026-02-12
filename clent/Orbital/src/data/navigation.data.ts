import type { NavigationData } from "../components/navigation/Navigation.type";
import mediaData from "./media.data";
import paths from "./paths.data";

const navigationData: NavigationData = {
    sidebarItems: [
        {
            name: "Dashboard",
            route: paths.dashboard.path
        },
        {
            name: "Employees",
            route: paths.employees.path
        },

    ],
    avatar: mediaData.testAvatar,
    icons: [
        {
            name: 'notification',
            icon: mediaData.notificationIcon,
            action: () => alert("Notification clicked"),
        },  
    ]
}

export default navigationData;