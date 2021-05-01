import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Login } from "./Components/Login/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Login} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
