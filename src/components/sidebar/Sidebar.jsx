import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
            <div className="top"><span className="logo">BrightFuture</span></div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <Link to="/users/new" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleIcon  className="icon" />
                            <span>Register Student</span>
                        </li>
                    </Link>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <VisibilityIcon className="icon" />
                            <span>View Student</span>
                        </li>
                    </Link>
                    <li>
                        <AutoStoriesIcon className="icon" />
                        <span>Display Assignment</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                    ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
    </div>
  )
}

export default Sidebar
