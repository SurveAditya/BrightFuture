import Home from './pages/home/Home'
import Login from './pages/login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter, Navigate
} from "react-router-dom";
import List from './pages/list/List'
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { userInputs } from "./formSource";
import Blogs from "../src/components/Primary/Blogs"
import Remidies from "../src/components/Primary/Remidies"
import Assignment from "../src/components/Primary/Assignment"
// import NavbarV2 from "./components/nav2/NavbarV2";
// import Bodyv2 from "./components/body2/Bodyv2";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
                {/* so basically it is going to use this main path /
                after / if we write /login it will be directed to /login component */}
                <Route  path="login" element={<Login/>} />
                <Route 
                index
                element=
                  {
                  <RequireAuth>
                  <Home />
                  </RequireAuth>
                  } />
                
            </Route>
            <Route path="users">
              {/* user basically land hoga list vale component me
              jiska naam hai users and uske andar users/12 aise userid ho sakta hai   */}
              <Route 
              index 
              element={
              <RequireAuth>
                <List />
              </RequireAuth>
              } />
              <Route path=":userId" element={
              <RequireAuth>
                 <Single />
              </RequireAuth>
             
              } />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />         
            </Route> 

            {/* <Route path="details"> */}
              {/* user basically land hoga list vale component me
              jiska naam hai users and uske andar users/12 aise userid ho sakta hai   */}
              {/* <Route index element={<List />} />
              <Route path=":studentId" element={<Single />} />
              <Route path="new" element={<New />}/>            */}
            {/* </Route>  */}
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Remidies" element={<Remidies />} />
          <Route path="/Assignment" element={<Assignment />} />
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
