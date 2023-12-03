import AddEmployeeComponent from "./component/AddEmployeeComponent";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  return (
    <div>
    <BrowserRouter>
    <HeaderComponent/>
    <div class="component">
    <Routes>
    <Route path="/" element={<ListEmployeeComponent/>}/>
    <Route path="/employee" element={<ListEmployeeComponent/>}/>
    <Route path="/add-employee" element={<AddEmployeeComponent/>}/>
    <Route path="/add-employee/:id" element={<AddEmployeeComponent/>}/>

    </Routes>
    </div>
    <FooterComponent/>
    </BrowserRouter>
    </div>
  );
}

export default App;
