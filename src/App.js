import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css';
import Home from './components/Views/Home';
import Login from './components/Views/Login';
import AuthRouteWrapper from './route_Component/AuthRouteWrapper'
import HealthBook from './components/Views/HealthBook/HealthBook'
import Doctor from './components/Views/Doctor/Doctor'
import Subscriber from './components/Views/Subscriber/Subscriber';
import ElderCarePlan from './components/Views/Elder_Care_Plan/ElderCarePlan';
import User from './components/Views/User/User';
import Appointments from './components/Views/Appointments/Appointment';
import Medicine from './components/Views/Medicine/Medicine';
import Blog from './components/Views/Blog/Blog';
import AppImage from './components/Views/AppImage/AppImage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRouteWrapper />}>
          <Route path='/homePage' element={<Home />} />
          <Route path='/' element={<Login />} />
          <Route element={<Home />}>
            <Route path='/HealthBook' element={<HealthBook />} />
            <Route path='/Doctor' element={<Doctor />} />
            <Route path='/Subscriber' element={<Subscriber />} />
            <Route path='ElderCarePlan' element={<ElderCarePlan />}/>
            <Route path='User' element={<User />}/>
            <Route path='Appointments' element={<Appointments />}/>
            <Route path='Medicine' element={<Medicine />}/>
            <Route path='Blog' element={<Blog />}/>
            <Route path='AppImage' element={<AppImage />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
