import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import ListEmployeeComponent from "./componets/ListEmployeeComponent";
import HeaderComponent from "./componets/HeaderComponent";
import FooterComponent from "./componets/FooterComponent";
import CreateEmployeeComponent from "./componets/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./componets/UpdateEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component= {ListEmployeeComponent}></Route>
              <Route path="/employee" component= {ListEmployeeComponent}></Route>
              <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
              <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
              <ListEmployeeComponent/>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
