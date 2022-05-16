
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import Blog from './Pages/Blog/Blog';
import Email from './Pages/Email/Email';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ResetPassword from './Pages/Login/ResetPassword/ResetPassword';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Myitems from './Pages/Myitems/Myitems';
import NotFound from './Pages/Notfound/Notfound';
import ServiceCardsDetails from './Pages/ServiceCardsDetails/ServiceCardsDetails';

function App() {
  
  return (
    <div className="App">
       <Header></Header>
        <Routes>
        <Route path="/"   element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={<Email></Email>}></Route>
     <Route path="/additem" element={<AddItem></AddItem>}></Route>
        <Route path="/myitem" element={<Myitems></Myitems>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/resetpassword" element={<ResetPassword></ResetPassword>}></Route>
        <Route path="/mobile/:mobileid" element={<RequireAuth><ServiceCardsDetails></ServiceCardsDetails></RequireAuth>}></Route>
        <Route path="/manageinventory" element={
        <RequireAuth><ManageInventory></ManageInventory></RequireAuth>
        }></Route>
        

      <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
