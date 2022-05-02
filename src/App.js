import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import AddItem from './Pages/AddItem/AddItem';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ManageItems from './Pages/ManageItems/ManageItems';
import Myitems from './Pages/Myitems/Myitems';
import NotFound from './Pages/Notfound/Notfound';

function App() {
  return (
    <div className="App">
       <Header></Header>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/manageitems" element={<ManageItems></ManageItems>}></Route>
        <Route path="/additem" element={<AddItem></AddItem>}></Route>
        <Route path="/myitem" element={<Myitems></Myitems>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

      <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
