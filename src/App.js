import './App.css';

import {NavLink , Outlet} from "react-router-dom";

function App() {
  return (    
    <div>
        <ul>
          <li>
            <NavLink to="/" end>Home </NavLink>
          </li>
          <li>
            <NavLink to="about" end>About </NavLink>
          </li>
          <li>
            <NavLink to="natiq" end>Natiq </NavLink>
          </li>
        </ul>

        <hr />

        <Outlet />
    </div>
    
  );
}

export default App;
