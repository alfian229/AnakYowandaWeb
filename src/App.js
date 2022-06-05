import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Service from './components/Service';
import Contact from './components/Contact';
import detailNews from './components/detailNews';


function App() {
  return (
    <Router >
      <Switch>
        <div className="app-content">
          <Navbar/>
          <switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/Service" component={Service}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/detailNews/:id" component={detailNews}/>
          </switch>
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}
export default App;