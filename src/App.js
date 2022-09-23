import Home from './pages/home/Home'
import Login from './pages/login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import List from './pages/list/List'
import Single from "./pages/single/Single"
import New from "./pages/new/New"
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
                {/* so basically it is going to use this main path /
                after / if we write /login it will be directed to /login component */}
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="users">
              {/* user basically land hoga list vale component me
              jiska naam hai users and uske andar users/12 aise userid ho sakta hai   */}
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />}/>           
            </Route> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
