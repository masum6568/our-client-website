
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AddProduct from './Pages/DashBoard/AddProduct';
import DashBoard from './Pages/DashBoard/DashBoard';
import DashBoardHome from './Pages/DashBoard/DashBoardHome';
import MakeAdmin from './Pages/DashBoard/MakeAdmin/MakeAdmin';
import ManageOrder from './Pages/DashBoard/ManageOrder';
import About from './Pages/Home/Home/About';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/Home/NotFound';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/Login/PrivateRoute';
import Register from './Pages/Login/Login/Register';
import BookingService from './Pages/Services/BookingService';
import Services from './Pages/Services/Services';
import SingleService from './Pages/Services/SingleService';
import Footer from './Pages/Shared/Footer';
import Navigation from './Pages/Shared/Navigation';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <AuthProvider>
          <Navigation></Navigation>
          <Routes>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/services" element={<PrivateRoute><Services /></PrivateRoute>} />

            <Route path="/about" element={
              <About />
            }>
            </Route>
            <Route path="/dashboard" element={
              <DashBoard />}>

            </Route>
            <Route path="/dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>}>

<Route exact path="/dashboard" element={<PrivateRoute><DashBoardHome /></PrivateRoute>}></Route>
<Route path={"/dashboard/makeAdmin"} element={<AdminRoute><MakeAdmin /></AdminRoute>}></Route>
<Route path={"/dashboard/addService"} element={<AdminRoute><AddProduct /></AdminRoute>}></Route>
<Route path={"/dashboard/manageOrder"} element={<AdminRoute><ManageOrder /></AdminRoute>}></Route>
{/* <Route path={"/dashboard/addServices"} element={<PrivateRoute><AddServices /></PrivateRoute>}></Route> */}
{/* <Route path={"/dashboard/manageOrder"} element={<PrivateRoute><ManageOrder /></PrivateRoute>}> </Route> */}
{/* <Route path={"/dashboard/makeAdmin"} element={<PrivateRoute><MakeAdmin /></PrivateRoute>}></Route> */}


</Route>







            <Route path="/login" element={<Login />}>
            </Route>
           

            <Route path="/details/:_id" element={<SingleService />}>
            </Route>
            <Route path="/order" element={<BookingService />}>
            </Route>
   

            <Route path="/register" element={<Register />}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="*" element={<NotFound />}>
            </Route>

          </Routes>
       
        </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
