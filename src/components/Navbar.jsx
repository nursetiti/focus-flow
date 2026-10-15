import { NavLink } from "react-router"
import '../components/Navbar.css'
function Navbar(){
    return(
        <nav>
            <NavLink to=''>Today</NavLink>
            <NavLink to='courses'>Courses</NavLink>
            <NavLink to='sessions'>Sessions</NavLink>
            <NavLink to='insights'>Insights</NavLink>
        </nav>
    )
}
export default Navbar