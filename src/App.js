import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import ListEmployeeComponent from "./componets/ListEmployeeComponent";
import HeaderComponent from "./componets/HeaderComponent";
import FooterComponent from "./componets/FooterComponent";
import CreateEmployeeComponent from "./componets/CreateEmployeeComponent";
// import UpdateEmployeeComponent from "./componets/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./componets/ViewEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
            <Route path = "/" exact component = {ListEmployeeComponent}></Route>
            <Route path = "/employees" component = {ListEmployeeComponent}></Route>
            <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
            <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
            {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
              <ListEmployeeComponent/>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
