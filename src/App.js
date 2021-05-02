import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Layout/Header/Header";
import { Login } from "./Components/Layout/Login/Login";
import { Home } from "./Components/User/HomePage/Home/Home";
import { VideoDetail } from "./Components/video/VideoDetail/VideoDetail";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/detail/:id" component={VideoDetail} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
