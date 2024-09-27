import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tenant from './components/Tenant'
import Failover from './components/Failover';
import './App.css';



function App() {
   return(
    <div>
      <div>
        <Tenant/>
      </div>
      <div>
      <Failover/>
      </div>

      </div>
   );
}

export default App;
