import "./App.css";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import InventoryDetail from "./component/InventoryDetail/InventoryDetail";
import ManageInventory from "./component/ManageInventory/ManageInventory";
import AddNewItem from "./component/AddNewItem/AddNewItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequreAuth from "./component/RequreAuth/RequreAuth";
import NotFound from "./component/NotFound/NotFound";
import OtherServices from "./component/OtherServices/OtherServices";
import AboutUs from "./component/AboutUs/AboutUs";

import MyItems from "./component/MyItems/MyItems";
import Blogs from "./component/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/otherservices"
          element={<OtherServices></OtherServices>}
        ></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequreAuth>
              <InventoryDetail></InventoryDetail>
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/manageinventory"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="/addnewitem" element={<AddNewItem></AddNewItem>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
