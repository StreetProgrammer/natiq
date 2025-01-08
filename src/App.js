import './App.css';
import { Outlet} from "react-router-dom";
import Layout from "./components/Layout";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (    
    <div>
      <CssBaseline />
        <Layout>
          <Outlet />
        </Layout>
    </div>
    
  );
}

export default App;
