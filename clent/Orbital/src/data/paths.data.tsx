import EmployeeDirectory from "../modules/employee/employee_directory/EmployeeDirectory";
import Dashboard from "../modules/user/dashboard/Dashboard";
import Login from "../modules/user/login/Login";

const paths = {
    login: {
        path: '/login',
        element: <Login/>
    },
    dashboard: {
        path: "/dashboard",
        element: <Dashboard/>
    },
    employees: {
        path: "/employee-directory",
        element: <EmployeeDirectory/>
    }
}
export default paths;