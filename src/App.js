import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { Header } from "./Components/Layout/Header/Header";
import { Login } from "./Components/Login/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/home" component={Home} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
