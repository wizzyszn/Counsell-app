import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Student from "./Pages/Student";
import ReasonForCounselling from "./Pages/ReasonForCounselling";
import Schedule from "./Pages/Schedule";
import Reservation from "./Pages/Reservation";
import Counselling from "./Pages/Counselling";
import Reports from "./Pages/Reports";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App h-svh flex ">
       
      <BrowserRouter>
      <Routes>
        <Route path='/'  element= {<Dashboard />} />
        <Route path='/student' element= {<Student />} />
        <Route path='reason-for-counselling' element= {<ReasonForCounselling />} />
        <Route path='/schedule' element= {<Schedule />} />
        <Route path='/counselling' element= {<Counselling />} />
        <Route path='/reports' element= {<Reports />} />
        <Route path='/reservation' element= {<Reservation />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
